import cors from "cors";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const allowedOrigins = (process.env.CLIENT_URLS || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("Origin is not allowed by CORS"));
  },
}));
app.use(express.json({ limit: "20kb" }));

const enquirySchema = new mongoose.Schema({
  firstName: { type: String, trim: true, maxlength: 60 },
  lastName: { type: String, trim: true, maxlength: 60 },
  name: { type: String, trim: true, maxlength: 120 },
  email: { type: String, required: true, trim: true, lowercase: true, maxlength: 120 },
  phone: { type: String, required: true, trim: true, maxlength: 20 },
  course: { type: String, trim: true, maxlength: 120 },
  interestedCourse: { type: String, trim: true, maxlength: 120 },
  phoneNumber: { type: String, trim: true, maxlength: 20 },
  service: { type: String, trim: true, maxlength: 120 },
  companyCode: { type: String, trim: true, lowercase: true, default: "skillparadise" },
  message: { type: String, trim: true, maxlength: 2000 },
  source: { type: String, required: true, trim: true, maxlength: 100 },
  status: { type: String, enum: ["New", "Contacted", "Follow-up", "Closed"], default: "New" },
}, { timestamps: true, collection: "enquiries" });

const Enquiry = mongoose.model("Enquiry", enquirySchema);
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  firstName: { type: String, trim: true },
  lastName: { type: String, trim: true },
  username: { type: String, required: true, unique: true, trim: true, lowercase: true },
  email: { type: String, required: true, unique: true, trim: true, lowercase: true },
  password: { type: String, required: true, select: false },
  roleName: { type: String, enum: ["ADMIN", "SUPERADMIN"], default: "SUPERADMIN" },
  companyCode: { type: String, default: "skillparadise", lowercase: true },
  phoneNumber: { type: String, trim: true },
  course: { type: String, trim: true },
  studentStatus: { type: String, default: "Active" },
}, { timestamps: true, collection: "users" });
const User = mongoose.model("User", userSchema);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+\-\s()]{10,20}$/;

function validateLead({ firstName, email, phone, course, message }) {
  if (!firstName?.trim()) return "First name is required.";
  if (!emailPattern.test(email?.trim() || "")) return "Please enter a valid email address.";
  if (!phonePattern.test(phone?.trim() || "")) return "Please enter a valid phone number.";
  if (!course?.trim()) return "Please select a course.";
  if (!message?.trim()) return "Message is required.";
  return null;
}

function requireAdmin(req, res, next) {
  try {
    const token = req.header("authorization")?.replace(/^Bearer\s+/i, "");
    if (!token) return res.status(401).json({ message: "Authentication token is required." });
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = payload.userId;
    return next();
  } catch {
    return res.status(401).json({ message: "Your session is invalid or expired. Please log in again." });
  }
}

const publicUser = (user) => ({ id: user._id.toString(), name: user.name, username: user.username, email: user.email, roleName: user.roleName, roles: [{ roleName: user.roleName }], companyCode: user.companyCode });
const toEnquiry = ({ firstName, lastName, email, phone, course, message, source }) => ({
  firstName: firstName?.trim(), lastName: lastName?.trim() || "", name: `${firstName?.trim() || ""} ${lastName?.trim() || ""}`.trim(),
  email: email?.trim(), phone: phone?.trim(), phoneNumber: phone?.trim(), course: course?.trim(), interestedCourse: course?.trim(),
  service: course?.trim(), message: message?.trim() || "Request a call", source: source || "Website Contact Form", companyCode: "skillparadise",
});

app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

// Google Places is called from the server so its API key never reaches visitors.
// The cache also prevents one paid Google request for every page visit.
const GOOGLE_REVIEWS_CACHE_MS = 6 * 60 * 60 * 1000;
let googleReviewsCache = null;

app.get("/api/google-reviews", async (_req, res, next) => {
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;
    if (!apiKey || !placeId) {
      return res.status(503).json({ message: "Google reviews are not configured yet." });
    }

    if (googleReviewsCache && Date.now() - googleReviewsCache.createdAt < GOOGLE_REVIEWS_CACHE_MS) {
      return res.json(googleReviewsCache.data);
    }

    const googleResponse = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
      { headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "displayName,rating,userRatingCount,reviews",
      } }
    );
    const place = await googleResponse.json();
    if (!googleResponse.ok) {
      console.error("Google Places API error:", place.error?.message || googleResponse.statusText);
      return res.status(502).json({ message: "Unable to load Google reviews right now." });
    }

    const data = {
      businessName: place.displayName?.text || "Skill Paradise",
      rating: place.rating || 0,
      totalReviews: place.userRatingCount || 0,
      reviews: (place.reviews || []).map((review, index) => ({
        id: review.name || `google-review-${index}`,
        name: review.authorAttribution?.displayName || "Google user",
        image: review.authorAttribution?.photoUri || "https://ui-avatars.com/api/?background=173873&color=ffffff&name=G",
        rating: review.rating || 0,
        review: review.text?.text || review.originalText?.text || "",
        publishedAt: review.relativePublishTimeDescription || "Google review",
      })).filter((review) => review.review),
    };
    googleReviewsCache = { data, createdAt: Date.now() };
    return res.json(data);
  } catch (error) {
    return next(error);
  }
});

app.post("/api/Auth/login", async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username?.trim().toLowerCase() }).select("+password");
    if (!user || !(await bcrypt.compare(req.body.password || "", user.password))) {
      return res.status(401).json({ message: "Invalid username or password." });
    }
    const token = jwt.sign({ userId: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: "8h" });
    return res.json({ data: { ...publicUser(user), token } });
  } catch (error) { return next(error); }
});

app.get("/api/Auth/user", requireAdmin, async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(401).json({ message: "User account no longer exists." });
    return res.json({ data: publicUser(user) });
  } catch (error) { return next(error); }
});

// Kept compatible with the previous superadmin portal.  These endpoints let
// the restored Student Registry use the same authenticated account space.
app.get("/api/Users/all-student-list", requireAdmin, async (req, res, next) => {
  try {
    const admin = await User.findById(req.userId);
    if (!admin || !["ADMIN", "SUPERADMIN"].includes(admin.roleName)) return res.status(403).json({ message: "Admin access is required." });
    const students = await User.find({ roleName: "STUDENT", companyCode: admin.companyCode }).select("-password").sort({ createdAt: -1 }).lean();
    return res.json({ items: students.map((student) => ({ ...student, id: student._id.toString(), fullName: `${student.firstName || ""} ${student.lastName || ""}`.trim() || student.name })) });
  } catch (error) { return next(error); }
});

app.post("/api/Auth/register-student", requireAdmin, async (req, res, next) => {
  try {
    const admin = await User.findById(req.userId);
    if (!admin || !["ADMIN", "SUPERADMIN"].includes(admin.roleName)) return res.status(403).json({ message: "Admin access is required." });
    const { firstName, lastName, username, email, password, phoneNumber, course } = req.body;
    if (!firstName?.trim() || !lastName?.trim() || !username?.trim() || !emailPattern.test(email?.trim() || "") || !password) return res.status(400).json({ message: "First name, last name, username, valid email, and password are required." });
    const student = await User.create({ name: `${firstName.trim()} ${lastName.trim()}`, firstName: firstName.trim(), lastName: lastName.trim(), username: username.trim().toLowerCase(), email: email.trim().toLowerCase(), password: await bcrypt.hash(password, 12), phoneNumber: phoneNumber?.trim(), course: course?.trim(), roleName: "STUDENT", companyCode: admin.companyCode });
    return res.status(201).json({ data: publicUser(student), message: "Student registered successfully." });
  } catch (error) { if (error?.code === 11000) return res.status(409).json({ message: "Username or email is already registered." }); return next(error); }
});

app.post("/api/leads/corporate-training", async (req, res, next) => {
  try {
    const fields = { name: 60, companyName: 120, email: 120, phone: 20, requirements: 1800 };
    const details = {};
    for (const [field, maxLength] of Object.entries(fields)) {
      const value = req.body?.[field];
      if (typeof value !== "string" || !value.trim() || value.trim().length > maxLength) {
        return res.status(400).json({ message: "Please complete all fields within the allowed length." });
      }
      details[field] = value.trim();
    }
    if (!emailPattern.test(details.email) || !phonePattern.test(details.phone)) {
      return res.status(400).json({ message: "Please enter a valid email address and phone number." });
    }
    const [firstName, ...lastName] = details.name.split(/\s+/);
    await Enquiry.create(toEnquiry({
      firstName, lastName: lastName.join(" "), email: details.email, phone: details.phone,
      course: "Corporate Training", source: "Corporate Training Enquiry",
      message: `Company / Organization: ${details.companyName}\n\nTraining requirements: ${details.requirements}`,
    }));
    return res.status(201).json({ message: "Your corporate training enquiry has been received." });
  } catch (error) { return next(error); }
});

app.post("/api/leads/contact", async (req, res, next) => {
  try {
    const validationError = validateLead(req.body);
    if (validationError) return res.status(400).json({ message: validationError });

    await Enquiry.create(toEnquiry({ ...req.body, source: "Website Contact Form" }));
    return res.status(201).json({ message: "Thank you! Your message has been sent successfully." });
  } catch (error) { return next(error); }
});

// Kept for the existing navbar request-call form and the earlier dashboard flow.
app.post("/api/leads/request-call", async (req, res, next) => {
  try {
    const { name, email, phone, interestedCourse, source = "Navbar Request Call" } = req.body;
    if (!name?.trim() || !emailPattern.test(email?.trim() || "") || !phonePattern.test(phone?.trim() || "") || !interestedCourse?.trim()) {
      return res.status(400).json({ message: "Please provide valid name, email, phone, and course details." });
    }
    const [firstName, ...lastName] = name.trim().split(/\s+/);
    await Enquiry.create(toEnquiry({ firstName, lastName: lastName.join(" "), email, phone, course: interestedCourse, message: "Request a call", source }));
    return res.status(201).json({ message: "Request submitted successfully." });
  } catch (error) { return next(error); }
});

// Dashboard APIs: send x-admin-api-key with the configured ADMIN_API_KEY.
app.get("/api/ContactUs/company/:companyCode", requireAdmin, async (req, res, next) => {
  try {
    const enquiries = await Enquiry.find({ companyCode: req.params.companyCode.toLowerCase() }).sort({ createdAt: -1 }).lean();
    return res.json({ data: enquiries });
  } catch (error) { return next(error); }
});

app.patch("/api/ContactUs/:id/status", requireAdmin, async (req, res, next) => {
  try {
    if (!["New", "Contacted", "Follow-up", "Closed"].includes(req.body.status)) {
      return res.status(400).json({ message: "Invalid status." });
    }
    const enquiry = await Enquiry.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    if (!enquiry) return res.status(404).json({ message: "Enquiry not found." });
    return res.json({ data: enquiry, message: "Enquiry status updated." });
  } catch (error) { return next(error); }
});

// Old dashboard-compatible aliases.
app.get("/api/leads", requireAdmin, async (_req, res, next) => {
  try { return res.json({ leads: await Enquiry.find().sort({ createdAt: -1 }).lean() }); } catch (error) { return next(error); }
});

async function ensureAdmin() {
  const username = (process.env.ADMIN_USERNAME || "admin").toLowerCase();
  const password = process.env.ADMIN_PASSWORD;
  if (!password) throw new Error("ADMIN_PASSWORD is missing in .env.");
  const existing = await User.findOne({ username }).select("+password");
  if (existing && process.env.RESET_ADMIN_ON_START !== "true") return;
  if (existing) {
    existing.name = process.env.ADMIN_NAME || "Skill Paradise Admin";
    existing.email = (process.env.ADMIN_EMAIL || "admin@skillparadise.com").toLowerCase();
    existing.password = await bcrypt.hash(password, 12);
    existing.roleName = "SUPERADMIN";
    existing.companyCode = "skillparadise";
    await existing.save();
    console.log(`Admin password reset: ${username}`);
    return;
  }
  await User.create({
    name: process.env.ADMIN_NAME || "Skill Paradise Admin", username,
    email: (process.env.ADMIN_EMAIL || "admin@skillparadise.com").toLowerCase(),
    password: await bcrypt.hash(password, 12), roleName: "SUPERADMIN", companyCode: "skillparadise",
  });
  console.log(`Admin account created: ${username}`);
}

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(error.message === "Origin is not allowed by CORS" ? 403 : 500).json({ message: "Something went wrong. Please try again later." });
});

mongoose.connect(process.env.MONGODB_URI)
  .then(ensureAdmin)
  .then(() => app.listen(port, () => console.log(`API running on http://localhost:${port}`)))
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  });
