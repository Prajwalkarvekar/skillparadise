import { Link } from "react-router-dom";

const courses = [
  {
    number: "01",
    path: "/courses/data-analytics",
    category: "Data Science",
    title: "Data Analytics",
    description:
      "Master analytics, dashboards and business intelligence tools used in modern organizations.",
    technologies: ["Power BI", "Tableau", "Excel", "SQL"],
    learners: "300+ Learners",
    duration: "4 Months",
    level: "Intermediate",
  },
  {
    number: "02",
    path: "/courses/digital-marketing",
    category: "Business",
    title: "Digital Marketing",
    description:
      "Learn modern digital marketing strategies across SEO, social media, content and search marketing.",
    technologies: ["SEO", "SEM", "Social Media", "Content"],
    learners: "250+ Learners",
    duration: "3 Months",
    level: "Beginner",
  },
  {
    number: "03",
    path: "/courses/manual-automation-testing",
    category: "Testing",
    title: "QA Testing",
    description:
      "Master software testing fundamentals and automation tools used to ensure application quality and reliability.",
    technologies: ["Selenium", "Playwright", "API Testing", "Postman"],
    learners: "150+ Learners",
    duration: "6 Months",
    level: "Intermediate",
  },
  {
    number: "04",
    path: "/courses/full-stack-developer",
    category: "Development",
    title: "Full Stack Development",
    description:
      "Build modern, production-ready web applications using frontend and backend technologies.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express"],
    learners: "500+ Learners",
    duration: "4 Months",
    level: "Advanced",
  },
  {
    number: "05",
    path: "/courses/data-science",
    category: "Data Science",
    title: "Data Science",
    description:
      "Learn Python, machine learning, data visualization and real-world data science workflows.",
    technologies: ["Python", "ML", "Deep Learning", "NLP"],
    learners: "200+ Learners",
    duration: "5 Months",
    level: "Advanced",
  },
];

function FeaturedCourses() {
  return (
    <section className="relative overflow-hidden bg-[#F7F2EA] px-5 py-20 sm:px-8 md:px-10 lg:px-12 lg:py-28">
      {/* Background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(23,56,115,0.055) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-[1240px]">
        {/* ================= HEADER ================= */}

        <div className="mb-12 border-b border-[#173873]/15 pb-8 lg:mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#173873] sm:text-[13px]">
              Featured Courses
            </span>

            <span className="h-[2px] w-7 bg-[#FF7417]" />
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <h2 className="max-w-[760px] font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-[#173873] sm:text-5xl lg:text-[58px]">
              Courses that turn{" "}
              <span className="font-medium italic text-[#FF7417]">
                learning
              </span>{" "}
              into opportunity.
            </h2>

            <p className="max-w-[360px] text-[15px] leading-7 text-[#6E6558] sm:text-base">
              Explore practical courses designed to help you build relevant
              skills, real-world experience and career confidence.
            </p>
          </div>
        </div>

        {/* ================= COURSE LIST ================= */}

        <div className="space-y-4 sm:space-y-5">
          {courses.map((course) => {
            return (
              <Link
                key={course.number}
                to={course.path}
                aria-label={`View ${course.title} course details`}
                className="course-bar group relative block overflow-hidden border border-[#173873]/15 bg-[#FCF9F4] no-underline"
              >
                {/* LEFT → RIGHT ORANGE HOVER SWEEP */}
                <div className="course-sweep pointer-events-none absolute inset-0 z-0" />

                {/* ================= CONTENT ================= */}

                <div className="relative z-10 grid min-h-[170px] grid-cols-1 gap-8 px-6 py-7 sm:px-8 sm:py-8 lg:grid-cols-[70px_minmax(230px,0.8fr)_minmax(280px,1.15fr)_auto] lg:items-center lg:gap-8 lg:px-10 lg:py-9">
                  {/* NUMBER */}

                  <div className="course-number font-serif text-[34px] font-semibold leading-none text-[#173873]/25 transition-colors duration-500 group-hover:text-white/50 lg:text-[40px]">
                    {course.number}
                  </div>

                  {/* TITLE */}

                  <div>
                    <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF7417] transition-colors duration-500 group-hover:text-white">
                      {course.category}
                    </div>

                    <h3 className="font-serif text-[28px] font-semibold leading-[1.05] tracking-tight text-[#173873] transition-colors duration-500 group-hover:text-white sm:text-[32px]">
                      {course.title}
                    </h3>

                    <div className="mt-4 h-[2px] w-7 bg-[#FF7417] transition-all duration-500 group-hover:w-12 group-hover:bg-white" />
                  </div>

                  {/* DESCRIPTION + TECHNOLOGIES */}

                  <div>
                    <p className="max-w-[540px] text-[14px] leading-6 text-[#6E6558] transition-colors duration-500 group-hover:text-white/90 sm:text-[15px]">
                      {course.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {course.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="border border-[#173873]/10 bg-[#F1ECE4] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-[#5B6574] transition-all duration-500 group-hover:border-white/30 group-hover:bg-white/15 group-hover:text-white"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* COURSE META */}

                  <div className="flex flex-col gap-4 lg:min-w-[185px] lg:items-end">
                    <div className="flex flex-wrap items-center gap-3 text-[12px] font-semibold text-[#6E6558] transition-colors duration-500 group-hover:text-white/90 lg:justify-end">
                      <span>{course.learners}</span>

                      <span className="h-1 w-1 rounded-full bg-[#FF7417] transition-colors duration-500 group-hover:bg-white" />

                      <span>{course.duration}</span>
                    </div>

                    <div className="flex items-center justify-between gap-5 lg:justify-end">
                      <span
                        className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] transition-all duration-500 ${
                          course.level === "Beginner"
                            ? "bg-[#FFF0D9] text-[#B96A00] group-hover:bg-white/20 group-hover:text-white"
                            : course.level === "Intermediate"
                              ? "bg-[#FFE8E1] text-[#D85332] group-hover:bg-white/20 group-hover:text-white"
                              : "bg-[#FFE4DD] text-[#D84B2C] group-hover:bg-white/20 group-hover:text-white"
                        }`}
                      >
                        {course.level}
                      </span>

                      {/* ARROW */}

                      <span className="course-arrow flex h-11 w-11 items-center justify-center border border-[#173873]/20 text-[#173873] transition-all duration-500 group-hover:translate-x-2 group-hover:border-white/40 group-hover:text-white">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          className="h-5 w-5"
                        >
                          <path d="M5 12H18" />
                          <path d="M13 7L18 12L13 17" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ================= BOTTOM CTA ================= */}

        <div className="mt-8 flex justify-end">
          <Link
            to="/courses"
            className="group flex items-center gap-3 border-b border-[#173873]/30 pb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#173873] transition-colors duration-300 hover:border-[#FF7417] hover:text-[#FF7417]"
          >
            Explore All Courses

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
            >
              <path d="M5 12H19" />
              <path d="M13 6L19 12L13 18" />
            </svg>
          </Link>
        </div>
      </div>

      {/* =====================================================
          LEFT → RIGHT ORANGE ANIMATION
      ===================================================== */}

      <style>{`
        .course-bar {
          isolation: isolate;
          transition:
            transform 400ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 400ms ease,
            box-shadow 400ms ease;
        }

        /*
          Orange layer starts completely
          outside on the LEFT side.
        */
        .course-sweep {
          background: #FF7417;
          transform: scaleX(0);
          transform-origin: left center;

          /* Slow + smooth */
          transition:
            transform 1500ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        /*
          On hover:
          LEFT → RIGHT
        */
        .course-bar:hover .course-sweep {
          transform: scaleX(1);
          transform-origin: left center;
        }

        /*
          Slight lift when hovering
        */
        .course-bar:hover {
          transform: translateY(-2px);
          border-color: #FF7417;
          box-shadow: 0 18px 35px -25px rgba(255, 116, 23, 0.55);
        }

        /*
          Number moves slightly to the right
        */
        .course-number {
          transition:
            color 500ms ease,
            transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .course-bar:hover .course-number {
          transform: translateX(4px);
        }

        /*
          Mobile
        */
        @media (max-width: 767px) {
          .course-bar {
            border-radius: 0;
          }

          .course-sweep {
            transition-duration: 1300ms;
          }
        }

        /*
          Respect reduced-motion preference
        */
        @media (prefers-reduced-motion: reduce) {
          .course-bar,
          .course-sweep,
          .course-number {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default FeaturedCourses;
