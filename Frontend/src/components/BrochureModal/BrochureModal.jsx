import React, { useEffect, useState } from "react";
import logo from "../../assets/logos/SP LOGO White.svg";

const courses = [
  {
    name: "Data Science",
    file: "/Brochures/Data Science Brochure.pdf",
  },
  {
    name: "AI & ML Engineering",
    file: "/Brochures/Ai Ml Engineering Brochure.pdf",
  },
  {
    name: "Agentic AI",
    file: "/Brochures/Agentic AI Brochure.pdf",
  },
  {
    name: "FullStack Development",
    file: "/Brochures/FullStack Brochure.pdf",
  },
  {
    name: "Data Analytics",
    file: "/Brochures/Data Analytics Brochure.pdf",
  },
  {
    name: "Data Engineering",
    file: "/Brochures/Data Engineering Brochure.pdf",
  },
  {
    name: "Digital Marketing",
    file: "/Brochures/Digital Marketing Brochure.pdf",
  },
  {
    name: "DevOps & Cloud Engineering",
    file: "/Brochures/DevOps & Cloud Brochure.pdf",
  },
  {
    name: "Mobile App Development",
    file: "/Brochures/App Development Brochure.pdf",
  },
  {
    name: "Manual & Automation Testing",
    file: "/Brochures/Manual & Automation Testing Brochure.pdf",
  },
  {
    name: "UI/UX Design",
    file: "/Brochures/Ui Ux Design Brochure.pdf",
  },
  {
    name: "Business Analysis",
    file: "/Brochures/Business Analysis Brochure.pdf",
  },
];

function BrochureModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    course: "",
  });

  const [errors, setErrors] = useState({});
  const [isDownloading, setIsDownloading] = useState(false);

  /* -------------------------------------------------
     Lock background scrolling while modal is open
     ------------------------------------------------- */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* -------------------------------------------------
     Handle input changes
     ------------------------------------------------- */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  /* -------------------------------------------------
     Validate form
     ------------------------------------------------- */
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.course) {
      newErrors.course = "Please select a course";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* -------------------------------------------------
     Download selected brochure
     ------------------------------------------------- */
  const handleDownload = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const selectedCourse = courses.find(
      (course) => course.name === formData.course
    );

    if (!selectedCourse) {
      return;
    }

    try {
      setIsDownloading(true);

      /*
       * Small delay gives the button a proper loading state.
       * Later, your backend API call can be added here
       * to save the candidate lead.
       */
      await new Promise((resolve) => setTimeout(resolve, 500));

      const link = document.createElement("a");

      link.href = encodeURI(selectedCourse.file);

      link.download =
        selectedCourse.file
          .split("/")
          .pop()
          .replace(".pdf", "") + ".pdf";

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      /* Reset form */
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        course: "",
      });

      setErrors({});

      /* Close modal */
      setTimeout(() => {
        onClose();
      }, 300);
    } catch (error) {
      console.error("Brochure download failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  /* -------------------------------------------------
     Don't render if closed
     ------------------------------------------------- */
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        p-3
        sm:p-5
      "
    >
      {/* =================================================
          BACKDROP
          ================================================= */}
      <div
        className="
          absolute
          inset-0
          bg-slate-950/55
          backdrop-blur-[6px]
        "
        onClick={onClose}
      />

      {/* =================================================
          MODAL
          ================================================= */}
      <div
        className="
          relative
          z-10
          flex
          w-full
          max-w-[980px]
          overflow-hidden
          rounded-[24px]
          bg-white
          shadow-[0_30px_100px_rgba(15,23,42,0.28)]
          animate-[modalIn_0.3s_ease-out]

          max-h-[calc(100vh-24px)]

          sm:max-h-[calc(100vh-40px)]
        "
      >
        {/* =================================================
            CLOSE BUTTON
            ================================================= */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close brochure modal"
          className="
            absolute
            right-4
            top-4
            z-30
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-slate-200
            bg-white/95
            text-slate-500
            shadow-sm
            backdrop-blur-sm
            transition-all
            duration-200
            hover:border-slate-300
            hover:bg-slate-50
            hover:text-slate-900
            active:scale-95

            sm:right-5
            sm:top-5
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[18px] w-[18px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* =================================================
            MAIN LAYOUT
            ================================================= */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            lg:grid-cols-[39%_61%]
          "
        >
          {/* =================================================
              LEFT BRAND PANEL
              ================================================= */}
          <div
            className="
              relative
              hidden
              overflow-hidden
              lg:block
              bg-[#173B78]
              px-9
              py-9
              text-white
            "
          >
            {/* Decorative orange circle */}
            <div
              className="
                absolute
                -right-24
                -top-24
                h-64
                w-64
                rounded-full
                border
                border-white/10
              "
            />

            <div
              className="
                absolute
                -bottom-28
                -left-28
                h-72
                w-72
                rounded-full
                bg-orange-500/10
              "
            />

            {/* Small orange accent */}
            <div
              className="
                absolute
                right-0
                top-28
                h-24
                w-1
                rounded-l-full
                bg-orange-500
              "
            />

            <div className="relative z-10 flex h-full flex-col">
              {/* =================================================
                  LOGO
                  ================================================= */}
              <div className="mb-9 flex items-center">
                <img
                  src={logo}
                  alt="Skill Paradise"
                  className="
                    h-auto
                    w-[220px]
                    max-w-full
                    object-contain
                  "
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

              </div>

              {/* =================================================
                  EYEBROW
                  ================================================= */}
              <div>
                <div
                  className="
                    mb-3
                    flex
                    items-center
                    gap-2
                  "
                >
                  <span
                    className="
                      h-[2px]
                      w-7
                      bg-orange-400
                    "
                  />

                  <span
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-orange-300
                    "
                  >
                    Course Brochures
                  </span>
                </div>

                {/* =================================================
                    HEADING
                    ================================================= */}
                <h2
                  className="
                    max-w-[300px]
                    text-[38px]
                    font-extrabold
                    leading-[1.02]
                    tracking-[-0.03em]
                  "
                >
                  Build Skills.
                  <br />
                  Build Your
                  <br />
                  <span className="text-orange-400">
                    Future.
                  </span>
                </h2>

                <p
                  className="
                    mt-5
                    max-w-[300px]
                    text-[13px]
                    leading-6
                    text-white/65
                  "
                >
                  Explore our industry-focused courses,
                  curriculum, career opportunities and
                  learning journey.
                </p>
              </div>

              {/* =================================================
                  BENEFITS
                  ================================================= */}
              <div className="mt-auto space-y-4 pt-8">
                {/* Benefit 1 */}
                <div className="flex items-center gap-3">
                  <span
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white/10
                      text-orange-300
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[17px] w-[17px]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>

                  <div>
                    <p className="text-sm font-bold">
                      Industry-Ready Skills
                    </p>

                    <p className="mt-0.5 text-xs text-white/50">
                      Practical & career-focused learning
                    </p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="flex items-center gap-3">
                  <span
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white/10
                      text-orange-300
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[17px] w-[17px]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 15l2 2 4-4"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z"
                      />
                    </svg>
                  </span>

                  <div>
                    <p className="text-sm font-bold">
                      Industry Recognition
                    </p>

                    <p className="mt-0.5 text-xs text-white/50">
                      Build skills employers value
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom branding */}
              <div
                className="
                  mt-7
                  border-t
                  border-white/10
                  pt-5
                "
              >
                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-white/35
                  "
                >
                  Learn Without Limits
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT FORM PANEL
              ================================================= */}
          <div
            className="
              flex
              min-w-0
              flex-col
              justify-center
              bg-white
              px-5
              py-6

              sm:px-7
              sm:py-7

              lg:px-9
              lg:py-8
            "
          >
            {/* =================================================
                MOBILE HEADING
                ================================================= */}
            <div className="mb-5 lg:hidden">
              <div className="mb-2 flex items-center gap-2">
                <span className="h-[2px] w-6 bg-orange-500" />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-orange-500
                  "
                >
                  Skill Paradise
                </span>
              </div>

              <h2
                className="
                  text-2xl
                  font-extrabold
                  tracking-tight
                  text-[#173B78]
                "
              >
                Download Brochure
              </h2>
            </div>

            {/* =================================================
                DESKTOP HEADING
                ================================================= */}
            <div className="mb-6 hidden lg:block">
              <div className="mb-2 flex items-center gap-2">
                <span className="h-[2px] w-7 bg-orange-500" />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-orange-500
                  "
                >
                  Course Information
                </span>
              </div>

              <h2
                className="
                  text-[30px]
                  font-extrabold
                  tracking-[-0.02em]
                  text-[#173B78]
                "
              >
                Download Brochure
              </h2>

              <p
                className="
                  mt-1.5
                  max-w-[500px]
                  text-[13px]
                  leading-5
                  text-slate-500
                "
              >
                Select your course and enter your details
                to get the complete course brochure.
              </p>
            </div>

            {/* =================================================
                FORM
                ================================================= */}
            <form
              onSubmit={handleDownload}
              noValidate
              className="w-full"
            >
              {/* =================================================
                  FIRST + LAST NAME
                  ================================================= */}
              <div
                className="
                  grid
                  grid-cols-1
                  gap-4
                  sm:grid-cols-2
                "
              >
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="
                      mb-1.5
                      block
                      text-[12px]
                      font-bold
                      text-slate-700
                    "
                  >
                    First Name
                  </label>

                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className={`
                      w-full
                      rounded-[10px]
                      border
                      bg-slate-50
                      px-3.5
                      py-3
                      text-[13px]
                      text-slate-900
                      outline-none
                      transition-all
                      placeholder:text-slate-400
                      focus:bg-white
                      focus:ring-4

                      ${
                        errors.firstName
                          ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                          : "border-slate-200 focus:border-orange-400 focus:ring-orange-100"
                      }
                    `}
                  />

                  {errors.firstName && (
                    <p className="mt-1 text-[10px] font-medium text-red-500">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="
                      mb-1.5
                      block
                      text-[12px]
                      font-bold
                      text-slate-700
                    "
                  >
                    Last Name
                  </label>

                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className={`
                      w-full
                      rounded-[10px]
                      border
                      bg-slate-50
                      px-3.5
                      py-3
                      text-[13px]
                      text-slate-900
                      outline-none
                      transition-all
                      placeholder:text-slate-400
                      focus:bg-white
                      focus:ring-4

                      ${
                        errors.lastName
                          ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                          : "border-slate-200 focus:border-orange-400 focus:ring-orange-100"
                      }
                    `}
                  />

                  {errors.lastName && (
                    <p className="mt-1 text-[10px] font-medium text-red-500">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* =================================================
                  PHONE + EMAIL
                  ================================================= */}
              <div
                className="
                  mt-4
                  grid
                  grid-cols-1
                  gap-4
                  sm:grid-cols-2
                "
              >
                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="
                      mb-1.5
                      block
                      text-[12px]
                      font-bold
                      text-slate-700
                    "
                  >
                    Mobile Number
                  </label>

                  <div
                    className={`
                      flex
                      overflow-hidden
                      rounded-[10px]
                      border
                      bg-slate-50
                      transition-all
                      focus-within:bg-white
                      focus-within:ring-4

                      ${
                        errors.phone
                          ? "border-red-400 focus-within:border-red-500 focus-within:ring-red-100"
                          : "border-slate-200 focus-within:border-orange-400 focus-within:ring-orange-100"
                      }
                    `}
                  >
                    <div
                      className="
                        flex
                        items-center
                        border-r
                        border-slate-200
                        px-3
                        text-[12px]
                        font-bold
                        text-slate-500
                      "
                    >
                      +91
                    </div>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => {
                        const value = e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 10);

                        setFormData((prev) => ({
                          ...prev,
                          phone: value,
                        }));

                        if (errors.phone) {
                          setErrors((prev) => ({
                            ...prev,
                            phone: "",
                          }));
                        }
                      }}
                      placeholder="10-digit mobile number"
                      className="
                        min-w-0
                        flex-1
                        bg-transparent
                        px-3
                        py-3
                        text-[13px]
                        text-slate-900
                        outline-none
                        placeholder:text-slate-400
                      "
                    />
                  </div>

                  {errors.phone && (
                    <p className="mt-1 text-[10px] font-medium text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="
                      mb-1.5
                      block
                      text-[12px]
                      font-bold
                      text-slate-700
                    "
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`
                      w-full
                      rounded-[10px]
                      border
                      bg-slate-50
                      px-3.5
                      py-3
                      text-[13px]
                      text-slate-900
                      outline-none
                      transition-all
                      placeholder:text-slate-400
                      focus:bg-white
                      focus:ring-4

                      ${
                        errors.email
                          ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                          : "border-slate-200 focus:border-orange-400 focus:ring-orange-100"
                      }
                    `}
                  />

                  {errors.email && (
                    <p className="mt-1 text-[10px] font-medium text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* =================================================
                  COURSE
                  ================================================= */}
              <div className="mt-4">
                <label
                  htmlFor="course"
                  className="
                    mb-1.5
                    block
                    text-[12px]
                    font-bold
                    text-slate-700
                  "
                >
                  Select Interested Course
                </label>

                <div className="relative">
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className={`
                      w-full
                      appearance-none
                      rounded-[10px]
                      border
                      bg-slate-50
                      px-3.5
                      py-3
                      pr-10
                      text-[13px]
                      outline-none
                      transition-all
                      focus:bg-white
                      focus:ring-4

                      ${
                        formData.course
                          ? "text-slate-900"
                          : "text-slate-400"
                      }

                      ${
                        errors.course
                          ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                          : "border-slate-200 focus:border-orange-400 focus:ring-orange-100"
                      }
                    `}
                  >
                    <option value="" disabled>
                      Select Interested Course
                    </option>

                    {courses.map((course) => (
                      <option
                        key={course.name}
                        value={course.name}
                      >
                        {course.name}
                      </option>
                    ))}
                  </select>

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-y-0
                      right-3.5
                      flex
                      items-center
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-slate-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {errors.course && (
                  <p className="mt-1 text-[10px] font-medium text-red-500">
                    {errors.course}
                  </p>
                )}
              </div>

              {/* =================================================
                  DOWNLOAD BUTTON
                  ================================================= */}
              <button
                type="submit"
                disabled={isDownloading}
                className="
                  group
                  mt-5
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2.5
                  rounded-[10px]
                  bg-[#173B78]
                  px-5
                  py-3.5
                  text-[13px]
                  font-bold
                  text-white
                  shadow-[0_8px_20px_rgba(23,59,120,0.16)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-[#123267]
                  hover:shadow-[0_12px_25px_rgba(23,59,120,0.22)]
                  active:translate-y-0
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                "
              >
                {isDownloading ? (
                  <>
                    <svg
                      className="h-4 w-4 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="3"
                      />

                      <path
                        className="opacity-90"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>

                    Preparing Brochure...
                  </>
                ) : (
                  <>
                    Download Brochure

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-200
                        group-hover:translate-y-0.5
                      "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v13m0 0l-5-5m5 5l5-5M5 21h14"
                      />
                    </svg>
                  </>
                )}
              </button>

              {/* =================================================
                  PRIVACY
                  ================================================= */}
              <div
                className="
                  mt-3
                  flex
                  items-start
                  justify-center
                  gap-1.5
                  text-center
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="
                    mt-[1px]
                    h-3
                    w-3
                    shrink-0
                    text-slate-400
                  "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>

                <p
                  className="
                    text-[10px]
                    leading-4
                    text-slate-400
                  "
                >
                  Your information is safe with us.
                  <br className="sm:hidden" />
                  We only use your details for course enquiry.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* =================================================
          MODAL ANIMATION
          ================================================= */}
      <style>{`
        @keyframes modalIn {
          0% {
            opacity: 0;
            transform: translateY(14px) scale(0.98);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}

export default BrochureModal;
