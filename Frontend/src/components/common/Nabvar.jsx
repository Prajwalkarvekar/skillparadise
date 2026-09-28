import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, ArrowRight, X, Phone, CheckCircle2 } from "lucide-react";
import logo from "../../assets/logos/SP LOGO.svg";

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  // Set to true when the navbar search UI is ready to be shown again.
  const showSearch = false;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  // =========================================================
  // REQUEST CALL MODAL
  // =========================================================

  const [requestCallOpen, setRequestCallOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const handleRequestCall = (event) => {
      const selectedCourse = event.detail?.course || "";

      setRequestCallOpen(true);
      setMobileMenuOpen(false);
      setCoursesOpen(false);
      setSolutionsOpen(false);
      setSubmitSuccess(false);
      setSubmitError("");

      if (selectedCourse) {
        setFormData((previous) => ({
          ...previous,
          course: selectedCourse,
        }));
      }
    };

    window.addEventListener("open-request-call-modal", handleRequestCall);

    return () => {
      window.removeEventListener("open-request-call-modal", handleRequestCall);
    };
  }, []);

  // =========================================================
  // COURSES
  // =========================================================

  const courses = [
    {
      name: "Data Science Masterclass",
      path: "/courses/data-science-masterclass",
    },
    {
      name: "Full Stack Developer",
      path: "/courses/full-stack-developer",
    },
    {
      name: "Digital Marketing",
      path: "/courses/digital-marketing",
    },
    {
      name: "Data Science",
      path: "/courses/data-science",
    },
    {
      name: "Data Analytics",
      path: "/courses/data-analytics",
    },
    {
      name: "Data Engineering",
      path: "/courses/data-engineering",
    },
    {
      name: "AI/ML Engineering",
      path: "/courses/ai-ml-engineering",
    },
    {
      name: "Agentic AI",
      path: "/courses/agentic-ai",
    },
    {
      name: "DevOps & Cloud Engineering",
      path: "/courses/devops-cloud-engineering",
    },
    {
      name: "Mobile App Development",
      path: "/courses/mobile-app-development",
    },
    {
      name: "Manual & Automation Testing",
      path: "/courses/manual-automation-testing",
    },
    {
      name: "UI/UX Design",
      path: "/courses/ui-ux-design",
    },
    {
      name: "Business Analysis",
      path: "/courses/business-analysis",
    },
    {
      name: "SAP ERP Masterclass",
      path: "/courses/sap-erp-masterclass",
      comingSoon: true,
    },
    {
      name: "Cyber Security & Ethical Hacking",
      path: "/courses/cyber-security-ethical-hacking",
      comingSoon: true,
    },
    {
      name: "Database Administrator",
      path: "/courses/database-administrator",
      comingSoon: true,
    },
  ];

  // =========================================================
  // COMMON NAV LINK STYLE
  // =========================================================

  const navLinkClass = ({ isActive }) => `
    relative py-2 text-sm font-medium transition-colors duration-300
    before:absolute before:bottom-0 before:left-0
    before:h-[1.5px] before:bg-[#F97316]
    before:transition-all before:duration-300
    ${
      isActive
        ? "text-[#F97316] before:w-full"
        : "text-slate-700 hover:text-[#F97316] before:w-0 hover:before:w-full"
    }
  `;

  // =========================================================
  // CLOSE DROPDOWNS
  // =========================================================

  const closeDropdowns = () => {
    setCoursesOpen(false);
    setSolutionsOpen(false);
  };

  // =========================================================
  // OPEN REQUEST CALL MODAL
  // =========================================================

  const openRequestCallModal = () => {
    setRequestCallOpen(true);
    setMobileMenuOpen(false);
    closeDropdowns();

    setSubmitSuccess(false);
    setSubmitError("");
  };

  // =========================================================
  // CLOSE REQUEST CALL MODAL
  // =========================================================

  const closeRequestCallModal = () => {
    if (isSubmitting) return;

    setRequestCallOpen(false);
    setFormErrors({});
    setSubmitError("");
  };

  // =========================================================
  // FORM INPUT CHANGE
  // =========================================================

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove individual error when user starts correcting it
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    setSubmitError("");
  };

  // =========================================================
  // FORM VALIDATION
  // =========================================================

  const validateForm = () => {
    const errors = {};

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();

    if (!trimmedName) {
      errors.name = "Please enter your name.";
    } else if (trimmedName.length < 2) {
      errors.name = "Please enter a valid name.";
    }

    if (!trimmedEmail) {
      errors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)
    ) {
      errors.email = "Please enter a valid email.";
    }

    if (!trimmedPhone) {
      errors.phone = "Phone number is required.";
    } else if (!/^[0-9+\-\s()]{10,15}$/.test(trimmedPhone)) {
      errors.phone = "Please enter a valid phone number.";
    }

    if (!formData.course) {
      errors.course = "Please select a course.";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  // =========================================================
  // SUBMIT REQUEST CALL FORM
  // =========================================================

  const handleRequestCallSubmit = async (e) => {
    e.preventDefault();

    setSubmitError("");
    setSubmitSuccess(false);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      /*
       * BACKEND API
       *
       * Change this URL if your backend endpoint is different.
       */

      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "";
      const response = await fetch(`${apiBaseUrl}/api/leads/request-call`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          interestedCourse: formData.course,
          source: "Navbar Request Call",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request.");
      }

      setSubmitSuccess(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
      });

      setFormErrors({});
    } catch (error) {
      console.error("Request call submission error:", error);

      setSubmitError(
        "Something went wrong while submitting your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="relative z-50 w-full bg-white">
        <nav className="mx-auto flex h-20 w-full max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">

          {/* =====================================================
              LOGO
          ===================================================== */}

          <Link
            to="/"
            className="relative left-4 flex shrink-0 items-center sm:left-6 lg:left-8 xl:left-12"
            aria-label="Skill Paradise home"
          >
            <img
              src={logo}
              alt="Skill Paradise"
              width="4500"
              height="1050"
              className="h-auto w-32 sm:w-36 lg:w-40 xl:w-44"
            />
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}

          <div className="hidden items-center gap-7 lg:flex xl:gap-9">

            {/* ===================================================
                HOME
            =================================================== */}

            <NavLink
              to="/"
              end
              className={navLinkClass}
            >
              Home
            </NavLink>

            {/* ===================================================
                COURSES DROPDOWN
            =================================================== */}

            <div
              className="relative"
              onMouseEnter={() => {
                setCoursesOpen(true);
                setSolutionsOpen(false);
              }}
              onMouseLeave={() => setCoursesOpen(false)}
            >
              <Link
                to="/courses"
                onClick={() => {
                  setCoursesOpen(false);
                  setSolutionsOpen(false);
                }}
                className={`
                  relative flex items-center gap-1.5 py-2
                  text-sm font-medium
                  transition-colors duration-300
                  ${
                    coursesOpen
                      ? "text-[#F97316]"
                      : "text-slate-700 hover:text-[#F97316]"
                  }
                `}
              >
                <span>Courses</span>

                <ChevronDown
                  size={15}
                  strokeWidth={1.8}
                  className={`
                    transition-transform duration-300
                    ${coursesOpen ? "rotate-180" : ""}
                  `}
                />

                <span
                  className={`
                    absolute bottom-0 left-0 h-[1.5px]
                    bg-[#F97316]
                    transition-all duration-300
                    ${coursesOpen ? "w-full" : "w-0"}
                  `}
                />
              </Link>

              {/* =================================================
                  HOVER BRIDGE

                  The dropdown wrapper itself occupies the gap
                  between navbar and dropdown.
              ================================================= */}

              <div
                className={`
                  fixed left-1/2 top-16 z-50
                  w-[820px]
                  -translate-x-1/2
                  pt-4
                  transition-all duration-200
                  ${
                    coursesOpen
                      ? "pointer-events-auto visible translate-y-0 opacity-100"
                      : "pointer-events-none invisible -translate-y-2 opacity-0"
                  }
                `}
              >
                <div className="overflow-hidden rounded-2xl border border-[#e5d4c0] bg-[#fffaf5] p-3 shadow-[0_18px_50px_rgba(23,56,115,0.12)]">

                  {/* DROPDOWN HEADER */}

                  <div className="mb-2 flex items-center justify-between px-4 py-3">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#ff7417]">
                        Explore
                      </p>

                      <p className="mt-1 text-sm font-bold text-[#173873]">
                        Our Courses
                      </p>
                    </div>

                    <Link
                      to="/courses"
                      onClick={() => setCoursesOpen(false)}
                      className="text-[11px] font-semibold text-[#173873] transition-colors hover:text-[#F97316]"
                    >
                      View All
                    </Link>
                  </div>

                  {/* THREE COLUMN COURSE GRID */}

                  <div className="grid grid-cols-3 gap-1">

                    {courses.map((course, index) => (
                      <Link
                        key={course.path}
                        to={course.path}
                        onClick={() => setCoursesOpen(false)}
                        className="
                          group rounded-xl px-3.5 py-3
                          no-underline
                          transition-all duration-200
                          hover:bg-[#fff0df]
                        "
                      >
                        <div className="flex items-center justify-between gap-2">

                          <div className="flex min-w-0 items-center gap-2.5">

                            {/* NUMBER */}

                            <span className="w-5 shrink-0 text-[9px] font-bold tracking-[0.12em] text-[#ff7417]">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            {/* COURSE NAME */}

                            <span className="text-xs font-semibold leading-4 text-[#173873] transition-colors duration-200 group-hover:text-[#F97316]">
                              {course.name}
                            </span>

                          </div>

                          {/* ARROW */}

                          <ArrowRight
                            size={14}
                            strokeWidth={1.8}
                            className="
                              shrink-0
                              text-[#173873]
                              opacity-0
                              transition-all duration-200
                              group-hover:translate-x-1
                              group-hover:opacity-100
                            "
                          />

                        </div>

                        {/* COMING SOON */}

                        {course.comingSoon && (
                          <div className="ml-7 mt-1">
                            <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-[#9a8f81]">
                              Coming Soon
                            </span>
                          </div>
                        )}
                      </Link>
                    ))}

                  </div>
                </div>
              </div>
            </div>

            {/* ===================================================
                ABOUT
            =================================================== */}

            <NavLink
              to="/about"
              className={navLinkClass}
            >
              About
            </NavLink>

            {/* ===================================================
                SOLUTIONS DROPDOWN
            =================================================== */}

            <div
              className="relative"
              onMouseEnter={() => {
                setSolutionsOpen(true);
                setCoursesOpen(false);
              }}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                type="button"
                onClick={() => {
                  setSolutionsOpen((prev) => !prev);
                  setCoursesOpen(false);
                }}
                className={`
                  relative flex items-center gap-1.5 py-2
                  text-sm font-medium
                  transition-colors duration-300
                  ${
                    solutionsOpen
                      ? "text-[#F97316]"
                      : "text-slate-700 hover:text-[#F97316]"
                  }
                `}
              >
                <span>Solutions</span>

                <ChevronDown
                  size={15}
                  strokeWidth={1.8}
                  className={`
                    transition-transform duration-300
                    ${solutionsOpen ? "rotate-180" : ""}
                  `}
                />

                <span
                  className={`
                    absolute bottom-0 left-0 h-[1.5px]
                    bg-[#F97316]
                    transition-all duration-300
                    ${solutionsOpen ? "w-full" : "w-0"}
                  `}
                />
              </button>

              {/* =================================================
                  SOLUTIONS DROPDOWN + HOVER BRIDGE
              ================================================= */}

              <div
                className={`
                  absolute left-1/2 top-full z-50
                  w-[310px]
                  -translate-x-1/2
                  pt-4
                  transition-all duration-200
                  ${
                    solutionsOpen
                      ? "pointer-events-auto visible translate-y-0 opacity-100"
                      : "pointer-events-none invisible -translate-y-2 opacity-0"
                  }
                `}
              >
                <div className="overflow-hidden rounded-2xl border border-[#e5d4c0] bg-[#fffaf5] p-2 shadow-[0_18px_50px_rgba(23,56,115,0.12)]">

                  {/* INSTITUTIONAL COLLABORATION */}

                  <Link
                    to="/institutional-collaboration"
                    onClick={() => setSolutionsOpen(false)}
                    className="group block rounded-xl px-4 py-4 no-underline transition-colors duration-200 hover:bg-[#fff0df]"
                  >
                    <div className="flex items-start justify-between gap-4">

                      <div className="min-w-0">

                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-bold tracking-[0.18em] text-[#ff7417]">
                            01
                          </span>

                          <span className="h-px w-5 bg-[#ff7417]/40" />
                        </div>

                        <p className="mt-2 text-sm font-bold text-[#173873]">
                          Institutional Collaboration
                        </p>

                        <p className="mt-1.5 text-xs leading-5 text-[#6e6558]">
                          Customized training programs for schools and colleges.
                        </p>

                      </div>

                      <ArrowRight
                        size={15}
                        strokeWidth={1.8}
                        className="mt-2 shrink-0 text-[#173873] transition-transform duration-300 group-hover:translate-x-1"
                      />

                    </div>
                  </Link>

                  {/* CORPORATE TRAINING */}

                  <Link
                    to="/corporate-training"
                    onClick={() => setSolutionsOpen(false)}
                    className="group block rounded-xl px-4 py-4 no-underline transition-colors duration-200 hover:bg-[#fff0df]"
                  >
                    <div className="flex items-start justify-between gap-4">

                      <div className="min-w-0">

                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-bold tracking-[0.18em] text-[#ff7417]">
                            02
                          </span>

                          <span className="h-px w-5 bg-[#ff7417]/40" />
                        </div>

                        <p className="mt-2 text-sm font-bold text-[#173873]">
                          Corporate Training
                        </p>

                        <p className="mt-1.5 text-xs leading-5 text-[#6e6558]">
                          Practical training designed around organizational needs.
                        </p>

                      </div>

                      <ArrowRight
                        size={15}
                        strokeWidth={1.8}
                        className="mt-2 shrink-0 text-[#173873] transition-transform duration-300 group-hover:translate-x-1"
                      />

                    </div>
                  </Link>

                </div>
              </div>
            </div>

            {/* ===================================================
                INSIGHTS
            =================================================== */}

            <NavLink
              to="/insights"
              className={navLinkClass}
            >
              Insights
            </NavLink>

            {/* ===================================================
                PLACEMENT
            =================================================== */}

            <NavLink
              to="/career-assistance"
              className={navLinkClass}
            >
              Placement
            </NavLink>

            {/* ===================================================
                CONTACT
            =================================================== */}

            <NavLink
              to="/contact"
              className={navLinkClass}
            >
              Contact
            </NavLink>

          </div>

          {/* =====================================================
              DESKTOP ACTIONS
          ===================================================== */}

          <div className="hidden items-center gap-3 lg:flex">

            {/* SEARCH */}

            {showSearch && (
            <div
              className={`
                flex items-center overflow-hidden rounded-full
                border border-slate-200 bg-white
                transition-all duration-300
                ${searchOpen ? "w-52" : "w-10"}
              `}
            >
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                className="flex h-10 w-10 shrink-0 items-center justify-center text-slate-600 transition-colors hover:text-[#F97316]"
                aria-label="Search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-4.3-4.3m2.05-5.7a7.75 7.75 0 1 1-15.5 0 7.75 7.75 0 0 1 15.5 0Z"
                  />
                </svg>
              </button>

              {searchOpen && (
                <input
                  type="text"
                  autoFocus
                  placeholder="Search courses..."
                  className="w-full bg-transparent pr-4 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
              )}
            </div>
            )}

            {/* =================================================
                REQUEST CALL
            ================================================= */}

            <button
              type="button"
              onClick={openRequestCallModal}
              className="
                group relative overflow-hidden rounded-full
                bg-[#F97316] px-4 py-2 text-xs font-semibold text-white
                shadow-sm
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[#ea580c]
                hover:shadow-lg hover:shadow-orange-200
              "
            >
              <span className="relative z-10">
                Request Call
              </span>

              <span
                className="
                  absolute inset-0 -translate-x-full
                  skew-x-[-20deg]
                  bg-white/20
                  transition-transform duration-700
                  group-hover:translate-x-full
                "
              />
            </button>

          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ===================================================== */}

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              closeDropdowns();
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <span className="text-xl">×</span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

        </nav>

        {/* =======================================================
            MOBILE MENU
        ======================================================= */}

        {mobileMenuOpen && (
          <div className="border-t border-slate-100 bg-white px-5 py-5 shadow-lg lg:hidden">

            <div className="flex flex-col gap-4">

              {/* HOME */}

              <NavLink
                to="/"
                end
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `
                  border-b pb-3 text-sm font-medium transition-colors duration-300
                  ${
                    isActive
                      ? "border-[#F97316] text-[#F97316]"
                      : "border-slate-100 text-slate-700 hover:text-[#F97316]"
                  }
                `}
              >
                Home
              </NavLink>

              {/* =================================================
                  MOBILE COURSES
              ================================================= */}

              <div className="border-b border-slate-100">

                <button
                  type="button"
                  onClick={() => {
                    setCoursesOpen((prev) => !prev);
                    setSolutionsOpen(false);
                  }}
                  className={`
                    flex w-full items-center justify-between
                    pb-3 text-left text-sm font-medium
                    transition-colors duration-300
                    ${
                      coursesOpen
                        ? "text-[#F97316]"
                        : "text-slate-700"
                    }
                  `}
                  aria-expanded={coursesOpen}
                >
                  <span>Courses</span>

                  <ChevronDown
                    size={17}
                    strokeWidth={1.8}
                    className={`
                      transition-transform duration-300
                      ${coursesOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                <div
                  className={`
                    overflow-hidden
                    transition-all duration-300
                    ${
                      coursesOpen
                        ? "max-h-[700px] pb-3 opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <div className="ml-2 border-l border-[#e5d4c0] pl-4">

                    <Link
                      to="/courses"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setCoursesOpen(false);
                      }}
                      className="mb-1 block py-2.5 text-sm font-semibold text-[#173873] transition-colors hover:text-[#F97316]"
                    >
                      View All Courses
                    </Link>

                    {courses.map((course) => (
                      <Link
                        key={course.path}
                        to={course.path}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setCoursesOpen(false);
                        }}
                        className="group flex items-center justify-between gap-3 py-2.5 no-underline"
                      >
                        <span className="text-sm text-slate-600 transition-colors group-hover:text-[#F97316]">
                          {course.name}
                        </span>

                        <ArrowRight
                          size={14}
                          strokeWidth={1.8}
                          className="shrink-0 text-[#173873] transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </Link>
                    ))}

                  </div>
                </div>

              </div>

              {/* ABOUT */}

              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `
                  border-b pb-3 text-sm font-medium transition-colors duration-300
                  ${
                    isActive
                      ? "border-[#F97316] text-[#F97316]"
                      : "border-slate-100 text-slate-700 hover:text-[#F97316]"
                  }
                `}
              >
                About
              </NavLink>

              {/* =================================================
                  MOBILE SOLUTIONS
              ================================================= */}

              <div className="border-b border-slate-100">

                <button
                  type="button"
                  onClick={() => {
                    setSolutionsOpen((prev) => !prev);
                    setCoursesOpen(false);
                  }}
                  className={`
                    flex w-full items-center justify-between
                    pb-3 text-left text-sm font-medium
                    transition-colors duration-300
                    ${
                      solutionsOpen
                        ? "text-[#F97316]"
                        : "text-slate-700"
                    }
                  `}
                  aria-expanded={solutionsOpen}
                >
                  <span>Solutions</span>

                  <ChevronDown
                    size={17}
                    strokeWidth={1.8}
                    className={`
                      transition-transform duration-300
                      ${solutionsOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                <div
                  className={`
                    overflow-hidden
                    transition-all duration-300
                    ${
                      solutionsOpen
                        ? "max-h-48 pb-3 opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <div className="ml-2 border-l border-[#e5d4c0] pl-4">

                    {/* INSTITUTIONAL */}

                    <Link
                      to="/institutional-collaboration"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setSolutionsOpen(false);
                      }}
                      className="group flex items-center justify-between py-2.5 no-underline"
                    >
                      <span className="text-sm text-slate-600 transition-colors group-hover:text-[#F97316]">
                        Institutional Collaboration
                      </span>

                      <ArrowRight
                        size={14}
                        strokeWidth={1.8}
                        className="text-[#173873] transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </Link>

                    {/* CORPORATE */}

                    <Link
                      to="/corporate-training"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setSolutionsOpen(false);
                      }}
                      className="group flex items-center justify-between py-2.5 no-underline"
                    >
                      <span className="text-sm text-slate-600 transition-colors group-hover:text-[#F97316]">
                        Corporate Training
                      </span>

                      <ArrowRight
                        size={14}
                        strokeWidth={1.8}
                        className="text-[#173873] transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </Link>

                  </div>
                </div>

              </div>

              {/* INSIGHTS */}

              <NavLink
                to="/insights"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `
                  border-b pb-3 text-sm font-medium transition-colors duration-300
                  ${
                    isActive
                      ? "border-[#F97316] text-[#F97316]"
                      : "border-slate-100 text-slate-700 hover:text-[#F97316]"
                  }
                `}
              >
                Insights
              </NavLink>

              {/* PLACEMENT */}

              <NavLink
                to="/career-assistance"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `
                  border-b pb-3 text-sm font-medium transition-colors duration-300
                  ${
                    isActive
                      ? "border-[#F97316] text-[#F97316]"
                      : "border-slate-100 text-slate-700 hover:text-[#F97316]"
                  }
                `}
              >
                Placement
              </NavLink>

              {/* CONTACT */}

              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `
                  border-b pb-3 text-sm font-medium transition-colors duration-300
                  ${
                    isActive
                      ? "border-[#F97316] text-[#F97316]"
                      : "border-slate-100 text-slate-700 hover:text-[#F97316]"
                  }
                `}
              >
                Contact
              </NavLink>

              {/* =================================================
                  MOBILE ACTIONS
              ================================================= */}

              <div className="mt-2 flex gap-3">

                {showSearch && (
                <button
                  type="button"
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="flex h-11 flex-1 items-center justify-center rounded-full border border-slate-200 text-sm text-slate-700 transition-colors hover:border-[#F97316] hover:text-[#F97316]"
                >
                  Search
                </button>
                )}

                <button
                  type="button"
                  onClick={openRequestCallModal}
                  className="flex h-11 flex-1 items-center justify-center rounded-full bg-[#F97316] text-sm font-semibold text-white transition-all hover:bg-[#ea580c]"
                >
                  Request Call
                </button>

              </div>

            </div>
          </div>
        )}
      </header>

      {/* =========================================================
          REQUEST CALL MODAL
      ========================================================= */}

      {requestCallOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#173873]/30 px-4 py-6 backdrop-blur-[3px]"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeRequestCallModal();
            }
          }}
        >
          <div
            className="
              relative
              w-full max-w-[480px]
              overflow-hidden
              rounded-3xl
              border border-[#e5d4c0]
              bg-[#fffaf5]
              shadow-[0_25px_80px_rgba(23,56,115,0.20)]
            "
            role="dialog"
            aria-modal="true"
            aria-labelledby="request-call-title"
          >

            {/* =================================================
                CLOSE BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={closeRequestCallModal}
              disabled={isSubmitting}
              className="
                absolute right-5 top-5 z-10
                flex h-9 w-9 items-center justify-center
                rounded-full
                border border-[#e5d4c0]
                bg-white
                text-[#173873]
                transition-all duration-200
                hover:border-[#F97316]
                hover:text-[#F97316]
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
              aria-label="Close request call form"
            >
              <X size={17} strokeWidth={1.8} />
            </button>

            {/* =================================================
                MODAL CONTENT
            ================================================= */}

            <div className="px-6 pb-7 pt-7 sm:px-8 sm:pt-8">

              {!submitSuccess ? (
                <>
                  {/* HEADER */}

                  <div className="mb-6 pr-10">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F97316]">
                      Request a Call
                    </p>

                    <h2
                      id="request-call-title"
                      className="mt-2 text-2xl font-semibold tracking-tight text-[#173873] sm:text-[27px]"
                    >
                      Let's talk about your goals.
                    </h2>

                    <p className="mt-2 max-w-[390px] text-sm leading-6 text-[#6e6558]">
                      Share your details and our training advisor will
                      get in touch with you.
                    </p>
                  </div>

                  {/* FORM */}

                  <form
                    onSubmit={handleRequestCallSubmit}
                    className="space-y-4"
                  >

                    {/* NAME */}

                    <div>
                      <label
                        htmlFor="request-name"
                        className="mb-1.5 block text-xs font-semibold text-[#173873]"
                      >
                        Name
                      </label>

                      <input
                        id="request-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Enter your name"
                        autoComplete="name"
                        className={`
                          h-11 w-full rounded-xl
                          border bg-white
                          px-4 text-sm text-[#173873]
                          outline-none
                          transition-all duration-200
                          placeholder:text-slate-400
                          focus:border-[#F97316]
                          focus:ring-2 focus:ring-[#F97316]/10
                          ${
                            formErrors.name
                              ? "border-red-400"
                              : "border-[#e5d4c0]"
                          }
                        `}
                      />

                      {formErrors.name && (
                        <p className="mt-1 text-[11px] text-red-500">
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    {/* EMAIL */}

                    <div>
                      <label
                        htmlFor="request-email"
                        className="mb-1.5 block text-xs font-semibold text-[#173873]"
                      >
                        Email ID
                      </label>

                      <input
                        id="request-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="you@example.com"
                        autoComplete="email"
                        className={`
                          h-11 w-full rounded-xl
                          border bg-white
                          px-4 text-sm text-[#173873]
                          outline-none
                          transition-all duration-200
                          placeholder:text-slate-400
                          focus:border-[#F97316]
                          focus:ring-2 focus:ring-[#F97316]/10
                          ${
                            formErrors.email
                              ? "border-red-400"
                              : "border-[#e5d4c0]"
                          }
                        `}
                      />

                      {formErrors.email && (
                        <p className="mt-1 text-[11px] text-red-500">
                          {formErrors.email}
                        </p>
                      )}
                    </div>

                    {/* PHONE */}

                    <div>
                      <label
                        htmlFor="request-phone"
                        className="mb-1.5 block text-xs font-semibold text-[#173873]"
                      >
                        Phone Number
                        <span className="ml-1 text-[#F97316]">*</span>
                      </label>

                      <div
                        className={`
                          flex h-11 overflow-hidden rounded-xl
                          border bg-white
                          transition-all duration-200
                          focus-within:border-[#F97316]
                          focus-within:ring-2 focus-within:ring-[#F97316]/10
                          ${
                            formErrors.phone
                              ? "border-red-400"
                              : "border-[#e5d4c0]"
                          }
                        `}
                      >
                        <div className="flex items-center border-r border-[#e5d4c0] px-3 text-sm text-[#173873]">
                          +91
                        </div>

                        <input
                          id="request-phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleFormChange}
                          placeholder="Enter phone number"
                          autoComplete="tel"
                          inputMode="tel"
                          className="
                            min-w-0 flex-1
                            bg-transparent
                            px-3
                            text-sm text-[#173873]
                            outline-none
                            placeholder:text-slate-400
                          "
                        />

                        <div className="flex items-center pr-3 text-[#F97316]">
                          <Phone size={16} strokeWidth={1.8} />
                        </div>
                      </div>

                      {formErrors.phone && (
                        <p className="mt-1 text-[11px] text-red-500">
                          {formErrors.phone}
                        </p>
                      )}
                    </div>

                    {/* COURSE */}

                    <div>
                      <label
                        htmlFor="request-course"
                        className="mb-1.5 block text-xs font-semibold text-[#173873]"
                      >
                        Interested In
                      </label>

                      <div className="relative">
                        <select
                          id="request-course"
                          name="course"
                          value={formData.course}
                          onChange={handleFormChange}
                          className={`
                            h-11 w-full appearance-none rounded-xl
                            border bg-white
                            px-4 pr-10 text-sm
                            outline-none
                            transition-all duration-200
                            focus:border-[#F97316]
                            focus:ring-2 focus:ring-[#F97316]/10
                            ${
                              formData.course
                                ? "text-[#173873]"
                                : "text-slate-400"
                            }
                            ${
                              formErrors.course
                                ? "border-red-400"
                                : "border-[#e5d4c0]"
                            }
                          `}
                        >
                          <option value="" disabled>
                            Select a course
                          </option>

                          {courses.map((course) => (
                            <option
                              key={course.path}
                              value={course.name}
                              disabled={course.comingSoon}
                            >
                              {course.name}
                              {course.comingSoon ? " — Coming Soon" : ""}
                            </option>
                          ))}

                          <option value="Other">
                            Other / Not Sure Yet
                          </option>
                        </select>

                        <ChevronDown
                          size={16}
                          strokeWidth={1.8}
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#173873]"
                        />
                      </div>

                      {formErrors.course && (
                        <p className="mt-1 text-[11px] text-red-500">
                          {formErrors.course}
                        </p>
                      )}
                    </div>

                    {/* ERROR */}

                    {submitError && (
                      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs leading-5 text-red-600">
                        {submitError}
                      </div>
                    )}

                    {/* SUBMIT */}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="
                        group relative mt-2
                        flex h-12 w-full
                        items-center justify-center
                        overflow-hidden
                        rounded-full
                        bg-[#F97316]
                        px-6
                        text-sm font-semibold text-white
                        shadow-sm
                        transition-all duration-300
                        hover:-translate-y-0.5
                        hover:bg-[#ea580c]
                        hover:shadow-lg hover:shadow-orange-200
                        disabled:cursor-not-allowed
                        disabled:opacity-70
                        disabled:hover:translate-y-0
                      "
                    >
                      <span className="relative z-10">
                        {isSubmitting
                          ? "Submitting..."
                          : "Request a Call"}
                      </span>

                      {!isSubmitting && (
                        <ArrowRight
                          size={16}
                          strokeWidth={1.8}
                          className="
                            relative z-10 ml-2
                            transition-transform duration-300
                            group-hover:translate-x-1
                          "
                        />
                      )}

                      <span
                        className="
                          absolute inset-0
                          -translate-x-full
                          skew-x-[-20deg]
                          bg-white/20
                          transition-transform duration-700
                          group-hover:translate-x-full
                        "
                      />
                    </button>

                    {/* PRIVACY NOTE */}

                    <p className="pt-1 text-center text-[10px] leading-4 text-[#9a8f81]">
                      Your information is only used to contact you
                      regarding your training enquiry.
                    </p>

                  </form>
                </>
              ) : (
                /* =================================================
                   SUCCESS STATE
                ================================================= */

                <div className="flex min-h-[380px] flex-col items-center justify-center text-center">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fff0df] text-[#F97316]">
                    <CheckCircle2
                      size={34}
                      strokeWidth={1.6}
                    />
                  </div>

                  <h2 className="mt-6 text-2xl font-semibold text-[#173873]">
                    Request received!
                  </h2>

                  <p className="mt-3 max-w-[330px] text-sm leading-6 text-[#6e6558]">
                    Thank you for reaching out. Our training advisor
                    will contact you shortly.
                  </p>

                  <button
                    type="button"
                    onClick={closeRequestCallModal}
                    className="
                      mt-7
                      rounded-full
                      border border-[#e5d4c0]
                      bg-white
                      px-6 py-2.5
                      text-sm font-semibold
                      text-[#173873]
                      transition-all duration-200
                      hover:border-[#F97316]
                      hover:text-[#F97316]
                    "
                  >
                    Close
                  </button>

                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
