import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { app, User, Enquiry, validateConfiguration } from "./server.js";

// Exercise HTTP routes and real Mongoose validation without touching live data.
process.env.JWT_SECRET = "test-only-secret-for-isolated-http-tests";
const adminId = "000000000000000000000001";
const studentId = "000000000000000000000002";
const users = new Map();
const leads = [];
let server, base;
const token = id => jwt.sign({ userId: id }, process.env.JWT_SECRET);
async function request(path, { body, method = "GET", auth, raw, headers = {} } = {}) {
  const response = await fetch(base + path, { method,
    headers: { "Content-Type": "application/json", ...(auth ? { Authorization: `Bearer ${auth}` } : {}), ...headers },
    body: raw ?? (body === undefined ? undefined : JSON.stringify(body)),
  });
  return { status: response.status, data: await response.json() };
}
before(async () => {
  users.set(adminId, new User({ _id: adminId, username: "admin", name: "Test Admin", email: "admin@example.test", password: await bcrypt.hash("test-password", 4), roleName: "SUPERADMIN", companyCode: "skillparadise" }));
  users.set(studentId, new User({ _id: studentId, username: "student", name: "Test Student", email: "student@example.test", password: await bcrypt.hash("test-password", 4), roleName: "STUDENT", companyCode: "skillparadise" }));
  User.findById = async id => users.get(String(id)) || null;
  User.findOne = query => ({ select: async () => [...users.values()].find(user => user.username === query.username) });
  User.create = async values => { const user = new User(values); await user.validate(); users.set(String(user._id), user); return user; };
  User.find = query => ({ select: () => ({ sort: () => ({ lean: async () => [...users.values()].filter(user => user.roleName === query.roleName && user.companyCode === query.companyCode).map(user => { const row = user.toObject(); delete row.password; return row; }) }) }) });
  Enquiry.create = async values => { const lead = new Enquiry(values); await lead.validate(); leads.push(lead.toObject()); return lead; };
  Enquiry.find = query => ({ sort: () => ({ lean: async () => leads.filter(lead => lead.companyCode === query.companyCode) }) });
  Enquiry.findOneAndUpdate = async (query, values) => { const lead = leads.find(row => String(row._id) === query._id && row.companyCode === query.companyCode); if (lead) Object.assign(lead, values); return lead || null; };
  server = app.listen(0, "127.0.0.1");
  await new Promise(resolve => server.once("listening", resolve));
  base = `http://127.0.0.1:${server.address().port}`;
});
after(async () => { await new Promise(resolve => server.close(resolve)); });

test("health and admin login, wrong password and student login", async () => {
  assert.equal((await request("/api/health")).status, 200);
  const login = await request("/api/Auth/login", { method: "POST", body: { username: " ADMIN ", password: "test-password" } });
  assert.equal(login.status, 200); assert.ok(login.data.data.token); assert.equal(login.data.data.password, undefined);
  assert.equal((await request("/api/Auth/login", { method: "POST", body: { username: "admin", password: "wrong" } })).status, 401);
  assert.equal((await request("/api/Auth/login", { method: "POST", body: { username: "student", password: "test-password" } })).status, 403);
});
test("protected routes reject missing, expired, student and deleted-account tokens", async () => {
  for (const path of ["/api/Auth/user", "/api/ContactUs/company/skillparadise", "/api/Users/all-student-list", "/api/leads"]) {
    assert.equal((await request(path)).status, 401);
    assert.equal((await request(path, { auth: "invalid" })).status, 401);
    assert.equal((await request(path, { auth: token(studentId) })).status, 403);
    assert.equal((await request(path, { auth: token("000000000000000000000099") })).status, 401);
    assert.equal((await request(path, { auth: jwt.sign({ userId: adminId }, process.env.JWT_SECRET, { expiresIn: -1 }) })).status, 401);
  }
});
test("contact, call, brochure, corporate and institutional leads save correctly", async () => {
  const contact = { firstName: "Test", lastName: "Lead", email: "lead@example.test", phone: "9999999999", course: "Data Science", message: "Test enquiry" };
  assert.equal((await request("/api/leads/contact", { method: "POST", body: contact })).status, 201);
  for (const source of ["Navbar Request Call", "Brochure Download"]) {
    assert.equal((await request("/api/leads/request-call", { method: "POST", body: { name: "Test Lead", email: contact.email, phone: contact.phone, interestedCourse: contact.course, source } })).status, 201);
    assert.equal(leads.at(-1).source, source);
  }
  for (const [route, course] of [["corporate-training", "Corporate Training"], ["institutional-collaboration", "Institutional Collaboration"]]) {
    assert.equal((await request(`/api/leads/${route}`, { method: "POST", body: { name: "Test Lead", companyName: "Test Organisation", email: contact.email, phone: contact.phone, requirements: "Training enquiry" } })).status, 201);
    assert.equal(leads.at(-1).course, course);
  }
  const list = await request("/api/ContactUs/company/skillparadise", { auth: token(adminId) });
  assert.equal(list.status, 200); assert.equal(list.data.data.length, 5);
});
test("invalid form fields and malformed JSON receive client errors", async () => {
  for (const path of ["/api/leads/contact", "/api/leads/request-call", "/api/leads/corporate-training", "/api/leads/institutional-collaboration", "/api/Auth/register-student"]) {
    assert.equal((await request(path, { method: "POST", body: {}, auth: token(adminId) })).status, 400);
    assert.equal((await request(path, { method: "POST", body: { email: { $ne: null } }, auth: token(adminId) })).status, 400);
  }
  assert.equal((await request("/api/Auth/login", { method: "POST", raw: "{" })).status, 400);
  assert.equal((await request("/api/leads/contact", { method: "POST", body: { firstName: "x".repeat(61), email: "test@example.test", phone: "9999999999", course: "Course", message: "Message" } })).status, 400);
});
test("company-scoped listing and status updates", async () => {
  const auth = token(adminId);
  assert.equal((await request("/api/ContactUs/company/other-company", { auth })).status, 403);
  const own = leads[0];
  assert.equal((await request(`/api/ContactUs/${own._id}/status`, { method: "PATCH", auth, body: { status: "Contacted" } })).status, 200);
  assert.equal(own.status, "Contacted");
  assert.equal((await request(`/api/ContactUs/${own._id}/status`, { method: "PATCH", auth, body: { status: "Invalid" } })).status, 400);
  assert.equal((await request("/api/ContactUs/not-an-id/status", { method: "PATCH", auth, body: { status: "New" } })).status, 400);
  leads.push({ _id: "000000000000000000000090", companyCode: "other-company", status: "New" });
  assert.equal((await request("/api/ContactUs/000000000000000000000090/status", { method: "PATCH", auth, body: { status: "Closed" } })).status, 404);
  assert.ok((await request("/api/leads", { auth })).data.leads.every(row => row.companyCode === "skillparadise"));
});
test("student registration validates and list omits password", async () => {
  const auth = token(adminId);
  const registered = await request("/api/Auth/register-student", { method: "POST", auth, body: { firstName: "New", lastName: "Student", username: "new-student", email: "new@example.test", password: "test-password" } });
  assert.equal(registered.status, 201); assert.equal(registered.data.data.roleName, "STUDENT"); assert.equal(registered.data.data.password, undefined);
  const list = await request("/api/Users/all-student-list", { auth });
  assert.equal(list.status, 200); assert.equal(list.data.items.length, 2); assert.ok(list.data.items.every(row => !row.password));
});
test("CORS rejects unapproved origins", async () => {
  assert.equal((await request("/api/health", { headers: { Origin: "https://unapproved.example" } })).status, 403);
});
test("production refuses incomplete or unsafe configuration", () => {
  assert.throws(() => validateConfiguration({}), /MONGODB_URI/);
  const config = { NODE_ENV: "production", MONGODB_URI: "mongodb://test", JWT_SECRET: "a".repeat(48), ADMIN_PASSWORD: "Safe-Testing-Only-123", CLIENT_URLS: "https://example.com", RESET_ADMIN_ON_START: "false" };
  assert.doesNotThrow(() => validateConfiguration(config));
  for (const override of [{ ADMIN_PASSWORD: "admin123" }, { JWT_SECRET: "short" }, { RESET_ADMIN_ON_START: "true" }, { CLIENT_URLS: "http://localhost:5173" }]) assert.throws(() => validateConfiguration({ ...config, ...override }));
});
