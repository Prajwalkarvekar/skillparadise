import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/common/Nabvar";
import Footer from "../../components/Footer/Footer";

// ============================================================
// CATEGORIES
// ============================================================

const categories = [
  "All",
  "Data Science",
  "Business",
  "Development",
  "Testing",
  "Security",
  "Data Management",
];

// ============================================================
// COURSE DATA
// ============================================================

const courses = [
  {
    id: "data-science-masterclass",
    number: "01",
    category: "Data Science",
    title: "Data Science Masterclass",
    description:
      "Build strong data science skills through Python, machine learning, deep learning and practical real-world projects.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    technologies: ["Python", "ML", "DL", "NLP"],
    learners: "200+ Learners",
    duration: "6 Months",
    level: "Intermediate",
  },

  {
    id: "digital-marketing",
    number: "02",
    category: "Business",
    title: "Digital Marketing",
    description:
      "Learn modern digital marketing strategies across SEO, SEM, social media, content marketing and AI-powered marketing.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "SEO",
      "SEM",
      "Social Media",
      "Content",
      "AI Marketing",
    ],
    learners: "250+ Learners",
    duration: "6 Months",
    level: "Beginner",
  },

  {
    id: "data-analytics",
    number: "03",
    category: "Data Science",
    title: "Data Analytics",
    description:
      "Learn how to transform raw data into meaningful insights using modern analytics and visualization tools.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    technologies: ["Power BI", "Tableau", "Excel", "SQL"],
    learners: "300+ Learners",
    duration: "6 Months",
    level: "Intermediate",
  },

  // ============================================================
  // FULL STACK COURSE
  // ============================================================

  {
    id: "full-stack-developer",
    number: "04",
    category: "Development",
    title: "Full Stack Developer",
    description:
      "Master modern frontend and backend technologies while building complete production-ready web applications.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
      "Docker",
      "AWS",
    ],
    learners: "500+ Learners",
    duration: "6 Months",
    level: "Advanced",
  },

  {
    id: "data-engineering",
    number: "05",
    category: "Data Science",
    title: "Data Engineering",
    description:
      "Learn to design scalable data pipelines and work with modern big data and cloud-based data engineering technologies.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "Big Data",
      "ETL",
      "Spark",
      "Kafka",
      "Airflow",
      "Snowflake",
      "AWS",
      "Python",
    ],
    learners: "150+ Learners",
    duration: "6 Months",
    level: "Advanced",
  },

  {
    id: "ai-ml-engineering",
    number: "06",
    category: "Data Science",
    title: "AI/ML Engineering",
    description:
      "Build practical AI and machine learning systems using deep learning, NLP, computer vision and modern AI technologies.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "Deep Learning",
      "PyTorch",
      "TensorFlow",
      "NLP",
      "Computer Vision",
      "LLMs",
      "MLOps",
      "RAG",
    ],
    learners: "120+ Learners",
    duration: "6 Months",
    level: "Advanced",
  },

  {
    id: "agentic-ai",
    number: "07",
    category: "Data Science",
    title: "Agentic AI",
    description:
      "Learn how to build intelligent AI agents capable of reasoning, using tools and solving complex real-world tasks.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "LangChain",
      "AutoGPT",
      "AI Agents",
      "Prompts",
      "CrewAI",
      "LangGraph",
      "RAG",
    ],
    learners: "80+ Learners",
    duration: "6 Months",
    level: "Advanced",
  },

  {
    id: "devops-cloud-engineering",
    number: "08",
    category: "Development",
    title: "DevOps & Cloud Engineering",
    description:
      "Learn modern DevOps practices, cloud infrastructure, automation, monitoring and continuous delivery.",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
      "AWS",
      "Ansible",
      "Prometheus",
      "Grafana",
    ],
    learners: "180+ Learners",
    duration: "6 Months",
    level: "Advanced",
  },

  {
    id: "mobile-app-development",
    number: "09",
    category: "Development",
    title: "Mobile App Development",
    description:
      "Build modern cross-platform mobile applications and learn the complete mobile development workflow.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "React Native",
      "Flutter",
      "Dart",
      "Firebase",
      "State Management",
      "App Launch",
    ],
    learners: "180+ Learners",
    duration: "6 Months",
    level: "Intermediate",
  },

  {
    id: "manual-automation-testing",
    number: "10",
    category: "Testing",
    title: "Manual & Automation Testing",
    description:
      "Master software testing fundamentals and automation tools used to ensure quality and reliability of applications.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "Selenium",
      "Playwright",
      "Appium",
      "API Testing",
      "JIRA",
      "Postman",
      "CI/CD",
    ],
    learners: "150+ Learners",
    duration: "6 Months",
    level: "Intermediate",
  },

  {
    id: "ui-ux-design",
    number: "11",
    category: "Development",
    title: "UI/UX Design",
    description:
      "Learn user-centered design, research, prototyping and design systems to create meaningful digital experiences.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "Figma",
      "UX Research",
      "UI Design",
      "Prototyping",
      "Design Systems",
      "User Psychology",
    ],
    learners: "200+ Learners",
    duration: "6 Months",
    level: "Beginner",
  },

  {
    id: "business-analysis",
    number: "12",
    category: "Business",
    title: "Business Analysis",
    description:
      "Develop analytical thinking and learn how to understand requirements, processes and business problems.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "Requirements",
      "Agile",
      "SQL",
      "JIRA",
      "BPMN 2.0",
      "UML",
      "Tableau",
    ],
    learners: "180+ Learners",
    duration: "6 Months",
    level: "Intermediate",
  },

  {
    id: "sap-erp-masterclass",
    number: "13",
    category: "Business",
    title: "SAP ERP Masterclass",
    description:
      "Understand enterprise resource planning and learn the core concepts of SAP ERP and business processes.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85",
    technologies: ["SAP HANA", "SAP FICO", "ABAP", "SD/MM"],
    learners: "150+ Learners",
    duration: "4 Months",
    level: "Intermediate",
  },

  {
    id: "cyber-security-ethical-hacking",
    number: "14",
    category: "Security",
    title: "Cyber Security & Ethical Hacking",
    description:
      "Build practical cybersecurity knowledge and understand security testing, network protection and ethical hacking.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "Ethical Hacking",
      "SOC",
      "Network Security",
      "Pentesting",
    ],
    learners: "120+ Learners",
    duration: "5 Months",
    level: "Advanced",
  },

  {
    id: "database-administrator",
    number: "15",
    category: "Data Management",
    title: "Database Administrator (DBA)",
    description:
      "Learn database administration, performance optimization, security, backup and recovery using enterprise databases.",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "SQL Server",
      "Oracle",
      "Performance Tuning",
      "Backup",
    ],
    learners: "110+ Learners",
    duration: "3 Months",
    level: "Intermediate",
  },
];

// ============================================================
// COURSE CARD
// ============================================================

function CourseCard({ course }) {
  return (
    <article
      className="
        course-card
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[20px]
        border
        border-[#173873]/10
        bg-white
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#F88118]/40
        hover:shadow-[0_22px_48px_-28px_rgba(23,56,115,0.35)]
      "
    >
      {/* TOP ACCENT */}
      <div
        className="
          absolute
          left-0
          top-0
          z-30
          h-[3px]
          w-0
          bg-gradient-to-r
          from-[#F88118]
          to-[#F49831]
          transition-all
          duration-[700ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:w-full
        "
      />

      {/* IMAGE */}
      <div className="relative h-[160px] shrink-0 overflow-hidden sm:h-[170px]">
        <img
          src={course.image}
          srcSet={[480, 800, 1200].map(width => `${course.image.replace("w=1200", `w=${width}`)} ${width}w`).join(", ")}
          sizes="(min-width: 1400px) 411px, (min-width: 1024px) calc((100vw - 160px) / 3), (min-width: 768px) calc((100vw - 100px) / 2), calc(100vw - 48px)"
          alt={course.title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
          loading="lazy"
          decoding="async"
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#173873]/25
            via-transparent
            to-transparent
          "
        />

        <span
          className="
            absolute
            left-4
            top-4
            rounded-full
            bg-[#F88118]
            px-3
            py-1.5
            text-[9px]
            font-bold
            uppercase
            tracking-[0.08em]
            text-white
            shadow-lg
            shadow-[#173873]/10
            transition-all
            duration-300
            group-hover:-translate-y-0.5
          "
        >
          {course.category}
        </span>
      </div>

      {/* CARD CONTENT */}
      <div className="flex flex-1 flex-col px-5 py-5 sm:px-5 sm:py-5">
        <div
          className="
            mb-3
            h-[2px]
            w-7
            bg-[#F88118]
            transition-all
            duration-500
            group-hover:w-10
          "
        />

        <h3
          className="
            font-serif
            text-[22px]
            font-semibold
            leading-[1.1]
            tracking-[-0.025em]
            text-[#173873]
            sm:text-[24px]
          "
        >
          {course.title}
        </h3>

        <p
          className="
            mt-2
            text-[12px]
            font-medium
            text-[#6E7785]
          "
        >
          {course.learners}
        </p>

        {/* TECHNOLOGIES */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {course.technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-md
                border
                border-[#173873]/8
                bg-[#F3F4F6]
                px-2
                py-1
                text-[8px]
                font-bold
                uppercase
                tracking-[0.05em]
                text-[#596577]
                transition-all
                duration-300
                group-hover:border-[#F88118]/20
                group-hover:bg-[#FFF7F0]
              "
            >
              {technology}
            </span>
          ))}
        </div>

        {/* COURSE META */}
        <div className="mt-auto pt-4">
          <div className="mb-3 h-px w-full bg-[#173873]/10" />

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span
                className="
                  text-[16px]
                  leading-none
                  text-[#F88118]
                "
              >
                ◷
              </span>

              <span
                className="
                  text-[12px]
                  font-medium
                  text-[#6E7785]
                "
              >
                {course.duration}
              </span>
            </div>

            <span
              className="
                rounded-full
                bg-[#FFF0EA]
                px-2.5
                py-1
                text-[8px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-[#F05A28]
              "
            >
              {course.level}
            </span>
          </div>
        </div>
      </div>

      {/* VIEW SYLLABUS */}
      <div className="px-5 pb-5 sm:px-5 sm:pb-5">
        <Link
          to={`/courses/${course.id}`}
          className="
            group/button
            relative
            flex
            w-full
            items-center
            justify-center
            overflow-hidden
            rounded-xl
            bg-gradient-to-r
            from-[#FF7655]
            to-[#FFB347]
            px-4
            py-3
            text-[14px]
            font-bold
            text-white
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:shadow-lg
            hover:shadow-orange-200
          "
        >
          <span className="relative z-10">
            View Syllabus
          </span>

          <span
            className="
              absolute
              inset-0
              -translate-x-full
              skew-x-[-20deg]
              bg-white/20
              transition-transform
              duration-700
              group-hover/button:translate-x-full
            "
          />
        </Link>
      </div>
    </article>
  );
}

// ============================================================
// COURSES PAGE
// ============================================================

function Courses() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses = useMemo(() => {
    if (activeCategory === "All") {
      return courses;
    }

    return courses.filter(
      (course) => course.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <>
      <Navbar />

      <main
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-[#F7F2EA]
        "
      >
        {/* BACKGROUND PATTERN */}

        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(23,56,115,0.055) 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
          />
        </div>

        {/* DECORATIVE GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-180px]
            top-[240px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#F88118]/[0.035]
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-[-200px]
            top-[900px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#173873]/[0.025]
            blur-3xl
          "
        />

        {/* PAGE CONTENT */}

        <div
          className="
            relative
            mx-auto
            max-w-[1400px]
            px-6
            py-14
            sm:px-10
            sm:py-18
            lg:px-16
            lg:py-20
          "
        >
          {/* HEADER */}

          <section
            className="
              border-b
              border-[#173873]/15
              pb-9
              sm:pb-11
            "
          >
            <div
              className="
                grid
                items-end
                gap-7
                lg:grid-cols-[1.25fr_0.75fr]
                lg:gap-14
              "
            >
              {/* LEFT */}

              <div>
                <div className="mb-6 flex items-center gap-5">
                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#173873]
                      sm:text-xs
                    "
                  >
                    Explore Our Courses
                  </span>

                  <span
                    className="
                      h-[2px]
                      w-11
                      bg-gradient-to-r
                      from-[#F88118]
                      to-[#F49831]
                    "
                  />
                </div>

                <h1
                  className="
                    max-w-[850px]
                    font-serif
                    text-[50px]
                    font-semibold
                    leading-[0.98]
                    tracking-[-0.035em]
                    text-[#173873]
                    sm:text-[62px]
                    lg:text-[76px]
                  "
                >
                  Learn skills that
                  <br />

                  <span
                    className="
                      font-medium
                      italic
                      text-[#F88118]
                    "
                  >
                    move you forward.
                  </span>
                </h1>
              </div>

              {/* RIGHT */}

              <div className="lg:pb-1">
                <p
                  className="
                    max-w-[470px]
                    text-[15px]
                    leading-[1.8]
                    text-[#53657D]
                    sm:text-[16px]
                    lg:ml-auto
                  "
                >
                  Explore practical, career-focused courses designed
                  to help you build relevant skills, gain confidence
                  and move closer to your professional goals.
                </p>
              </div>
            </div>
          </section>

          {/* CATEGORY SECTION */}

          <section className="py-8 sm:py-10">
            <div className="mb-4 flex items-center gap-3">
              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#173873]
                "
              >
                Browse By Category
              </span>

              <span
                className="
                  h-px
                  w-6
                  bg-[#F88118]
                "
              />
            </div>

            <div
              className="
                flex
                flex-wrap
                gap-2.5
                sm:gap-3
              "
            >
              {categories.map((category) => {
                const active = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`
                      rounded-full
                      border
                      px-5
                      py-2.5
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      transition-all
                      duration-300
                      sm:px-6
                      sm:py-3
                      sm:text-[11px]

                      ${
                        active
                          ? `
                            border-[#173873]
                            bg-[#173873]
                            text-white
                            shadow-md
                            shadow-[#173873]/10
                          `
                          : `
                            border-[#173873]/15
                            bg-white/40
                            text-[#173873]
                            hover:border-[#F88118]/45
                            hover:bg-white
                            hover:text-[#F88118]
                          `
                      }
                    `}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </section>

          {/* COURSE COUNT */}

          <div
            className="
              mb-6
              flex
              items-center
              justify-between
              border-b
              border-[#173873]/10
              pb-3
            "
          >
            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#6E6558]
                sm:text-[10px]
              "
            >
              {activeCategory === "All"
                ? "All Courses"
                : activeCategory}
            </span>

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#173873]
                sm:text-[10px]
              "
            >
              {filteredCourses.length
                .toString()
                .padStart(2, "0")}{" "}
              Courses
            </span>
          </div>

          {/* COURSE GRID */}

          <section>
            <div
              className="
                grid
                grid-cols-1
                items-stretch
                gap-5
                md:grid-cols-2
                lg:grid-cols-3
                lg:gap-6
              "
            >
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                />
              ))}
            </div>
          </section>

          {/* BOTTOM LINE */}

          <div
            className="
              mt-9
              border-t
              border-[#173873]/10
              pt-5
            "
          >
            <div
              className="
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#6E6558]
                "
              >
                Learn. Build. Grow.
              </p>

              <div className="flex items-center gap-2">
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#F88118]
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#173873]
                  "
                >
                  SkillParadise
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Courses;
