import React, { useEffect, useRef, useState } from "react";
import {
  FaPython,
  FaDatabase,
  FaChartBar,
  FaChartLine,
  FaBrain,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaTable,
  FaProjectDiagram,
  FaSearch,
  FaCogs,
  FaLaptopCode,
} from "react-icons/fa";

import Navbar from "../../components/common/Nabvar";
import Footer from "../../components/Footer/Footer";
import certificateImage from "../../assets/certificate.jpeg";

/* =========================================================
   DATA SCIENCE SKILLS
========================================================= */

const skills = [
  ["Python", FaPython],
  ["Pandas", FaTable],
  ["NumPy", FaCode],
  ["Statistics", FaChartLine],
  ["Machine Learning", FaBrain],
  ["SQL", FaDatabase],
  ["Data Visualization", FaChartBar],
  ["Power BI", FaChartBar],
  ["Tableau", FaChartBar],
  ["EDA", FaSearch],
  ["Git & GitHub", FaGitAlt],
  ["Data Analysis", FaLaptopCode],
];

/* =========================================================
   CURRICULUM
   Based on Data Science Brochure
========================================================= */

const modules = [
  {
    id: 1,
    title: "Python Programming",
    subtitle: "Build a strong programming foundation for data science.",
    topics: [
      "Python Basics",
      "Variables and Data Types",
      "Operators",
      "Conditional Statements",
      "Loops",
      "Functions and Modules",
      "Exception Handling",
      "File Handling",
      "DataFrames and Series",
      "Data Cleaning",
      "Handling Missing Values",
      "Feature Engineering",
      "Filtering and Sorting",
      "GroupBy Operations",
      "Merging and Joining",
      "Time Series Handling",
      "NumPy Array Creation",
      "Indexing and Slicing",
      "Vectorized Operations",
      "Broadcasting",
      "Mathematical Functions",
    ],
  },

  {
    id: 2,
    title: "Statistics & Mathematics",
    subtitle: "Understand the statistical foundations behind data science.",
    topics: [
      "Mean",
      "Median",
      "Mode",
      "Variance",
      "Standard Deviation",
      "Skewness",
      "Kurtosis",
      "Basic Probability Rules",
      "Conditional Probability",
      "Normal Distribution",
      "Binomial Distribution",
      "Poisson Distribution",
      "Hypothesis Testing",
      "Confidence Intervals",
      "Z-Test",
      "T-Test",
      "ANOVA",
      "Correlation vs Causation",
    ],
  },

  {
    id: 3,
    title: "Machine Learning",
    subtitle: "Learn supervised and unsupervised machine learning techniques.",
    topics: [
      "Linear Regression",
      "Logistic Regression",
      "Decision Trees",
      "Random Forest",
      "Gradient Boosting",
      "XGBoost",
      "LightGBM",
      "K-Means Clustering",
      "Hierarchical Clustering",
      "Principal Component Analysis",
      "Hyperparameter Tuning",
      "GridSearch",
      "RandomSearch",
      "Cross Validation",
      "Bias-Variance Tradeoff",
      "Accuracy",
      "Precision",
      "Recall",
      "F1 Score",
      "Confusion Matrix",
      "ROC-AUC Curve",
    ],
  },

  {
    id: 4,
    title: "SQL for Data Science",
    subtitle: "Learn how to query, transform and analyze structured data.",
    topics: [
      "Basic SELECT Statement",
      "LIMIT / OFFSET",
      "ORDER BY",
      "DISTINCT",
      "WHERE Clause",
      "Comparison Operators",
      "NULL Handling",
      "Logical Operators",
      "Aggregate Functions",
      "COUNT",
      "MAX",
      "MIN",
      "AVG",
      "SUM",
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "Subqueries",
      "Common Table Expressions",
      "Window Functions",
      "Query Optimization Basics",
    ],
  },

  {
    id: 5,
    title: "Data Visualization & BI",
    subtitle: "Turn analytical results into meaningful visual insights.",
    topics: [
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Power BI",
      "Dashboard Creation",
      "DAX Basics",
      "Tableau",
      "Interactive Dashboards",
    ],
  },

  {
    id: 6,
    title: "Exploratory Data Analysis",
    subtitle: "Discover patterns, relationships and insights inside datasets.",
    topics: [
      "Data Cleaning",
      "Data Transformation",
      "Outlier Detection",
      "Feature Selection",
      "Pattern Identification",
      "Correlation Analysis",
    ],
  },

  {
    id: 7,
    title: "Version Control & Collaboration",
    subtitle: "Work with modern version-control and collaboration workflows.",
    topics: [
      "Git Basics",
      "GitHub Usage",
      "Repository Management",
      "Version Control Workflow",
    ],
  },

  {
    id: 8,
    title: "Real-World Projects & Career Preparation",
    subtitle:
      "Apply your knowledge through practical projects and career-focused preparation.",
    topics: [
      "Customer Segmentation",
      "Sales Forecasting",
      "Recommendation System",
      "Fraud Detection",
      "Business Dashboard Development",
      "Resume Building",
      "Portfolio Development",
      "Mock Interviews",
      "Case Study Practice",
      "Career Guidance",
    ],
  },
];

/* =========================================================
   LEARNING JOURNEY
========================================================= */

const weeks = [
  {
    phase: "01",
    weeks: "Foundation",
    title: "Python & Data Foundations",
    description:
      "Build the programming foundation required for data science using Python, Pandas and NumPy.",
    modules: ["Python Programming"],
  },

  {
    phase: "02",
    weeks: "Statistics",
    title: "Statistics & Mathematics",
    description:
      "Develop the statistical understanding needed to interpret datasets and evaluate analytical results.",
    modules: ["Statistics & Mathematics"],
  },

  {
    phase: "03",
    weeks: "Machine Learning",
    title: "Machine Learning Foundations",
    description:
      "Learn supervised learning, unsupervised learning, model optimization and model evaluation.",
    modules: ["Machine Learning"],
  },

  {
    phase: "04",
    weeks: "SQL",
    title: "SQL for Data Science",
    description:
      "Learn SQL fundamentals, advanced queries, joins, subqueries, CTEs and window functions.",
    modules: ["SQL for Data Science"],
  },

  {
    phase: "05",
    weeks: "Visualization",
    title: "Visualization & Business Intelligence",
    description:
      "Create meaningful visualizations and dashboards using visualization libraries and BI tools.",
    modules: ["Data Visualization & BI"],
  },

  {
    phase: "06",
    weeks: "EDA",
    title: "Exploratory Data Analysis",
    description:
      "Clean, transform and explore data to identify patterns, relationships and useful insights.",
    modules: ["Exploratory Data Analysis"],
  },

  {
    phase: "07",
    weeks: "Collaboration",
    title: "Git & Collaboration",
    description:
      "Understand Git, GitHub, repository management and practical version-control workflows.",
    modules: ["Version Control & Collaboration"],
  },

  {
    phase: "08",
    weeks: "Projects",
    title: "Real-World Projects & Career",
    description:
      "Apply your learning to real-world data science use cases while building your professional profile.",
    modules: ["Real-World Projects", "Career Preparation"],
  },
];

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    number: "01",
    title: "Customer Segmentation",
    description:
      "Apply data analysis and clustering concepts to identify meaningful customer groups and behavioral patterns.",
  },

  {
    number: "02",
    title: "Sales Forecasting",
    description:
      "Analyze historical business data and apply data science techniques to understand future sales trends.",
  },

  {
    number: "03",
    title: "Recommendation System",
    description:
      "Explore how data can be used to build recommendation-driven experiences for users.",
  },

  {
    number: "04",
    title: "Fraud Detection",
    description:
      "Use analytical and machine learning concepts to identify suspicious patterns in transactional data.",
  },

  {
    number: "05",
    title: "Business Dashboard",
    description:
      "Transform business data into an interactive dashboard using visualization and BI concepts.",
  },
];

/* =========================================================
   TESTIMONIALS
========================================================= */

const testimonials = [
  {
    quote:
      "The structured learning approach makes it easier to understand data science from Python and statistics through machine learning and projects.",
    name: "Learner",
    role: "Data Science",
  },

  {
    quote:
      "Working on practical datasets, visualization and machine learning concepts makes the learning much easier to apply.",
    name: "Learner",
    role: "Data Analytics",
  },

  {
    quote:
      "The combination of Python, SQL, machine learning and real-world projects gives a much clearer path into data science.",
    name: "Learner",
    role: "Data Science",
  },
];

/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({ children }) {
  return (
    <div className="mb-5 flex items-center gap-4">
      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F88118]">
        {children}
      </span>

      <span className="h-px w-10 bg-gradient-to-r from-[#F88118] to-[#FFB347]" />
    </div>
  );
}

/* =========================================================
   DATA SCIENCE PAGE
========================================================= */

function DataScience() {
  const [openModule, setOpenModule] = useState(1);
  const [activeWeek, setActiveWeek] = useState(0);

  const weekRefs = useRef([]);

  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      elements.forEach((element) =>
        element.classList.add("course-revealed")
      );

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("course-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  /* =======================================================
     ACTIVE LEARNING JOURNEY
  ======================================================= */

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const cards = weekRefs.current.filter(Boolean);

    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleCards = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(
                a.boundingClientRect.top - window.innerHeight * 0.42
              ) -
              Math.abs(
                b.boundingClientRect.top - window.innerHeight * 0.42
              )
          );

        if (visibleCards.length) {
          setActiveWeek(
            Number(visibleCards[0].target.dataset.weekIndex)
          );
        }
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: "-18% 0px -35% 0px",
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F7F2EA] text-[#173873]">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-[#F7F2EA]">

          <div className="pointer-events-none absolute inset-0">

            <div className="absolute left-[-180px] top-[20%] h-[500px] w-[500px] rounded-full bg-[#F88118]/10 blur-[130px]" />

            <div className="absolute right-[-180px] top-[10%] h-[520px] w-[520px] rounded-full bg-[#173873]/10 blur-[140px]" />

            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(23,56,115,0.07) 1px, transparent 0)",
                backgroundSize: "28px 28px",
              }}
            />

          </div>

          <div className="relative mx-auto w-full max-w-[1450px] px-6 py-24 sm:px-10 lg:px-16">

            <div className="mx-auto max-w-[1250px] text-center">

              <div className="mb-8 flex items-center justify-center gap-4">

                <span className="h-px w-10 bg-[#F88118]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#173873]">
                  Data Science Program
                </span>

                <span className="h-px w-10 bg-[#F88118]" />

              </div>

              {/* IMPORTANT:
                  Controlled heading width + letter spacing prevents
                  the overlap shown in your screenshot.
              */}

              <h1
                data-reveal
                className="course-reveal mx-auto max-w-[1200px] text-[58px] font-black leading-[0.9] tracking-[-0.025em] sm:text-[82px] lg:text-[112px]"
              >

                <span className="block text-[#173873]">
                  Data Science
                </span>

                <span className="course-hero-gradient course-hero-text block">
                  Turn Data Into Intelligence
                </span>

              </h1>

              <p
                data-reveal
                className="course-reveal mx-auto mt-9 max-w-[760px] text-[16px] leading-8 text-[#53657D] sm:text-[18px]"
              >
                Build practical data science skills across Python,
                data manipulation, statistics, machine learning,
                SQL, visualization and real-world projects.
              </p>

              <div
                data-reveal
                className="course-reveal mt-10 flex flex-wrap justify-center gap-3"
              >

                {[
                  "6 Months",
                  "Flexible",
                  "Beginner → Intermediate",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#173873]/15 bg-white/60 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em]"
                  >
                    {item}
                  </span>
                ))}

              </div>

              <div
                data-reveal
                className="course-reveal mt-11 flex flex-col justify-center gap-3 sm:flex-row"
              >

                <button
                  type="button"
                  onClick={() =>
                    window.dispatchEvent(
                      new CustomEvent("open-request-call-modal", {
                        detail: { course: "Data Science" },
                      })
                    )
                  }
                  className="rounded-full bg-[#173873] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F88118]"
                >
                  Enroll in Program →
                </button>

                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("data-science-curriculum")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                  className="rounded-full border border-[#173873]/20 bg-white/50 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#173873] transition-all duration-300 hover:-translate-y-1 hover:border-[#F88118] hover:text-[#F88118]"
                >
                  Explore Curriculum
                </button>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            TECHNOLOGY / SKILLS MARQUEE
        ====================================================== */}

        <section className="overflow-hidden border-y border-[#173873]/10 bg-white py-7">

          <div className="mb-4 text-center text-[9px] font-bold uppercase tracking-[0.28em] text-[#6E6558]">
            Tools & Skills You'll Master
          </div>

          <div className="relative flex overflow-hidden">

            <div className="course-marquee flex min-w-max items-center gap-10">

              {[...skills, ...skills].map(
                ([skill, Icon], index) => (
                  <React.Fragment key={`${skill}-${index}`}>

                    <span className="flex items-center gap-3 whitespace-nowrap font-serif text-[24px] font-semibold text-[#173873]">

                      <Icon className="text-[23px] text-[#F88118] transition-transform duration-300 hover:scale-125" />

                      {skill}

                    </span>

                    <span className="text-[13px] text-[#173873]/20">
                      ✦
                    </span>

                  </React.Fragment>
                )
              )}

            </div>

          </div>

        </section>

        {/* =====================================================
            STATS
        ====================================================== */}

        <section className="bg-[#F7F2EA] px-6 py-20 sm:px-10 lg:px-16">

          <div className="mx-auto max-w-[1200px]">

            <SectionLabel>
              Inside the Program
            </SectionLabel>

            <div className="grid gap-4 md:grid-cols-3">

              {[
                [
                  "06",
                  "Months",
                  "Structured data science learning journey",
                ],
                [
                  "08",
                  "Learning Stages",
                  "From Python foundations to projects",
                ],
                [
                  "05",
                  "Real-World Projects",
                  "Practical business and data use cases",
                ],
              ].map(
                ([number, label, description], index) => (

                  <div
                    key={label}
                    data-reveal
                    className={`course-reveal course-stat-card group relative overflow-hidden rounded-[28px] border border-[#173873]/10 bg-gradient-to-br from-[#173873] via-[#214A86] to-[#F88118] p-[1px] ${
                      index === 1
                        ? "course-reveal-delay-1"
                        : ""
                    } ${
                      index === 2
                        ? "course-reveal-delay-2"
                        : ""
                    }`}
                  >

                    <div className="relative h-full overflow-hidden rounded-[27px] bg-[#102A50] px-7 py-9 sm:px-9 sm:py-10">

                      <div className="absolute right-[-50px] top-[-50px] h-[160px] w-[160px] rounded-full bg-[#F88118]/20 blur-3xl transition-all duration-700 group-hover:scale-150" />

                      <div className="absolute bottom-[-70px] left-[-50px] h-[150px] w-[150px] rounded-full bg-[#173873]/40 blur-3xl transition-all duration-700 group-hover:scale-125" />

                      <p className="course-stat-number relative font-serif text-[70px] font-semibold leading-none tracking-[-0.05em] text-white sm:text-[82px]">
                        {number}
                      </p>

                      <p className="mt-2 text-[18px] font-medium text-[#FFB347]">
                        {label}
                      </p>

                      <p className="mt-5 max-w-[260px] text-[13px] leading-6 text-white/60">
                        {description}
                      </p>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </section>

        {/* =====================================================
            CURRICULUM
        ====================================================== */}

        <section
          id="data-science-curriculum"
          className="bg-white px-6 py-24 sm:px-10 lg:px-16"
        >

          <div className="mx-auto max-w-[1250px]">

            <div
              data-reveal
              className="course-reveal mb-14 max-w-[900px]"
            >

              <SectionLabel>
                Curriculum
              </SectionLabel>

              <h2 className="font-serif text-[48px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[68px]">

                A structured path to

                <span className="course-gradient-text italic">
                  {" "}Data Science mastery.
                </span>

              </h2>

              <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-[#6E6558]">
                Explore the complete learning journey and open any
                module to see the detailed topics covered inside the
                Data Science program.
              </p>

            </div>

            <div className="space-y-3">

              {modules.map((module) => {

                const isOpen =
                  openModule === module.id;

                return (

                  <div
                    key={module.id}
                    className={`course-curriculum-card overflow-hidden rounded-[22px] border transition-all duration-500 ${
                      isOpen
                        ? "border-[#F88118]/30 bg-[#FCF9F4] shadow-[0_20px_60px_-45px_rgba(248,129,24,0.65)]"
                        : "border-[#173873]/10 bg-white hover:border-[#173873]/20"
                    }`}
                  >

                    <button
                      type="button"
                      onClick={() =>
                        setOpenModule(
                          isOpen ? null : module.id
                        )
                      }
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
                    >

                      <span className="font-serif text-[17px] font-semibold text-[#F88118] sm:text-[19px]">
                        {String(module.id).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <div className="min-w-0 flex-1">

                        <h3 className="font-serif text-[20px] font-semibold tracking-[-0.02em] text-[#173873] sm:text-[24px]">
                          {module.title}
                        </h3>

                        <p className="mt-1 text-[11px] leading-5 text-[#6E6558] sm:text-[12px]">
                          {module.subtitle}
                        </p>

                      </div>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[18px] transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 border-[#F88118] bg-[#F88118] text-white"
                            : "border-[#173873]/15 text-[#173873]"
                        }`}
                      >
                        ↓
                      </span>

                    </button>

                    <div
                      className={`grid transition-all duration-500 ${
                        isOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >

                      <div className="overflow-hidden">

                        <div className="border-t border-[#173873]/10 px-5 pb-7 pt-5 sm:px-7">

                          <div className="flex flex-wrap gap-2">

                            {module.topics.map(
                              (topic) => (

                                <span
                                  key={topic}
                                  className="rounded-full bg-[#F1ECE4] px-3 py-2 text-[10px] font-bold tracking-[0.02em] text-[#53657D]"
                                >
                                  {topic}
                                </span>

                              )
                            )}

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                );

              })}

            </div>

          </div>

        </section>

        {/* =====================================================
            LEARNING JOURNEY
        ====================================================== */}

        <section className="bg-[#F7F2EA] px-6 py-24 sm:px-10 lg:px-16">

          <div className="mx-auto max-w-[1250px]">

            <div className="grid gap-14 lg:grid-cols-[.72fr_1fr]">

              <div className="lg:sticky lg:top-24 lg:self-start">

                <SectionLabel>
                  Learning Journey
                </SectionLabel>

                <h2 className="font-serif text-[50px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[64px]">

                  Learn in

                  <span className="course-gradient-text italic">
                    {" "}stages.
                  </span>

                </h2>

                <p className="mt-6 max-w-[430px] text-[15px] leading-7 text-[#6E6558]">
                  A structured journey covering Python,
                  statistics, machine learning, SQL,
                  visualization, EDA, collaboration and
                  practical data science projects.
                </p>

                <div className="mt-8 flex items-center gap-3">

                  <span className="course-pulse-dot h-2 w-2 rounded-full bg-[#F88118]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#173873]">
                    6 Month Program
                  </span>

                </div>

                <div className="mt-8 hidden lg:block">

                  <div className="flex items-center gap-3">

                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#6E6558]">
                      Current stage
                    </span>

                    <span className="h-px flex-1 bg-[#173873]/10" />

                  </div>

                  <div className="mt-4 flex items-end gap-3">

                    <span className="font-serif text-[48px] font-semibold leading-none text-[#F88118]">
                      {weeks[activeWeek].phase}
                    </span>

                    <span className="pb-1 text-[13px] font-medium text-[#173873]">
                      / 08
                    </span>

                  </div>

                  <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.08em] text-[#6E6558]">
                    {weeks[activeWeek].title}
                  </p>

                </div>

              </div>

              <div className="relative">

                <div className="absolute bottom-0 left-[20px] top-0 w-px bg-[#173873]/10" />

                <div className="course-phase-stack space-y-5">

                  {weeks.map(
                    (week, index) => {

                      const active =
                        activeWeek === index;

                      return (

                        <button
                          key={week.phase}
                          ref={(element) => {
                            weekRefs.current[index] =
                              element;
                          }}
                          data-week-index={index}
                          type="button"
                          onClick={() =>
                            setActiveWeek(index)
                          }
                          className={`course-phase-card relative w-full rounded-[24px] border p-6 pl-12 text-left transition-all duration-700 sm:p-7 sm:pl-14 ${
                            active
                              ? "course-phase-active border-[#F88118]/30 bg-white shadow-[0_25px_60px_-40px_rgba(23,56,115,0.45)]"
                              : "border-[#173873]/10 bg-white/50 hover:bg-white"
                          }`}
                        >

                          <span
                            className={`absolute left-[12px] top-8 h-[17px] w-[17px] rounded-full border-4 border-[#F7F2EA] transition-all duration-500 ${
                              active
                                ? "scale-125 bg-[#F88118] shadow-[0_0_0_7px_rgba(248,129,24,0.10)]"
                                : "bg-[#173873]/20"
                            }`}
                          />

                          <div className="flex flex-wrap items-center justify-between gap-4">

                            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#F88118]">
                              Stage {week.phase}
                            </span>

                            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6E6558]">
                              {week.weeks}
                            </span>

                          </div>

                          <h3 className="mt-3 font-serif text-[25px] font-semibold tracking-[-0.025em] text-[#173873]">
                            {week.title}
                          </h3>

                          <p className="mt-3 max-w-[650px] text-[13px] leading-6 text-[#6E6558]">
                            {week.description}
                          </p>

                          <div className="mt-5 flex flex-wrap gap-2">

                            {week.modules.map(
                              (module) => (

                                <span
                                  key={module}
                                  className="rounded-full bg-[#F1ECE4] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#53657D]"
                                >
                                  {module}
                                </span>

                              )
                            )}

                          </div>

                        </button>

                      );

                    }
                  )}

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            PROJECTS
        ====================================================== */}

        <section className="bg-white px-6 py-24 text-[#173873] sm:px-10 lg:px-16">

          <div className="mx-auto max-w-[1250px]">

            <SectionLabel>
              Projects
            </SectionLabel>

            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

              <h2 className="max-w-[800px] font-serif text-[50px] font-semibold leading-[0.98] tracking-[-0.04em] text-[#173873] sm:text-[70px]">

                Don't just learn.
                <br />

                <span className="course-gradient-text italic">
                  Build.
                </span>

              </h2>

              <p className="max-w-[390px] text-[14px] leading-7 text-[#53657D]">
                Apply data science concepts through practical
                use cases covering segmentation, forecasting,
                recommendation, fraud detection and business
                intelligence.
              </p>

            </div>

            <div className="mt-16 grid gap-px overflow-hidden rounded-[28px] border border-[#173873]/10 bg-[#173873]/10 md:grid-cols-2 lg:grid-cols-3">

              {projects.map((project) => (

                <div
                  key={project.number}
                  className="course-project-card group bg-white p-7 sm:p-9"
                >

                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#F88118]">
                    {project.number}
                  </span>

                  <h3 className="mt-12 font-serif text-[30px] font-semibold tracking-[-0.025em] text-[#173873]">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-[420px] text-[13px] leading-7 text-[#53657D]">
                    {project.description}
                  </p>

                  <span className="mt-8 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#173873]/15 text-[#F88118] transition group-hover:translate-x-1">
                    ↗
                  </span>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            WHY SKILLPARADISE
        ====================================================== */}

        <section className="bg-[#F7F2EA] px-6 pb-24 text-[#173873] sm:px-10 lg:px-16">

          <div className="mx-auto max-w-[1250px]">

            <div className="text-center">

              <SectionLabel>
                Why SkillParadise
              </SectionLabel>

              <h2 className="mx-auto max-w-[900px] font-serif text-[48px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[68px]">

                Learn beyond

                <span className="course-gradient-text italic">
                  {" "}the syllabus.
                </span>

              </h2>

            </div>

            <div className="mt-14 overflow-hidden rounded-[30px] border border-[#173873]/15 bg-white shadow-[0_22px_60px_-35px_rgba(23,56,115,0.28)]">

              <div className="grid grid-cols-[1.5fr_1fr_1fr] border-b border-[#173873]/15 bg-[#F7F2EA]">

                <div className="border-r border-[#173873]/15 px-5 py-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[#53657D] sm:px-8">
                  Learning Experience
                </div>

                <div className="border-r border-[#173873]/15 px-3 py-6 text-center text-[11px] font-bold uppercase tracking-[0.15em] text-[#F88118]">
                  SkillParadise
                </div>

                <div className="px-3 py-6 text-center text-[11px] font-bold uppercase tracking-[0.15em] text-[#173873]/50">
                  Others
                </div>

              </div>

              {[
                "Structured Data Science Curriculum",
                "Hands-on Data Projects",
                "Python + SQL + Machine Learning",
                "Visualization & BI Learning",
                "Career Guidance",
                "Interview Preparation",
              ].map((item) => (

                <div
                  key={item}
                  className="grid grid-cols-[1.5fr_1fr_1fr] border-b border-[#173873]/15 last:border-b-0"
                >

                  <div className="border-r border-[#173873]/15 px-5 py-5 text-[12px] text-[#53657D] sm:px-8 sm:text-[13px]">
                    {item}
                  </div>

                  <div className="flex items-center justify-center border-r border-[#173873]/15 bg-[#FDF5ED] text-[#F88118]">
                    ✓
                  </div>

                  <div className="flex items-center justify-center bg-[#F9F8F6] text-[#173873]/40">
                    —
                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            CERTIFICATION
        ====================================================== */}

        <section className="overflow-hidden bg-[#F7F2EA] px-6 py-24 text-[#173873] sm:px-10 lg:px-16">

          <div className="mx-auto max-w-[1250px]">

            <div className="text-center">

              <SectionLabel>
                Certification
              </SectionLabel>

              <h2 className="mx-auto max-w-[850px] font-serif text-[48px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[70px]">

                Get certified.
                <br />

                <span className="course-orange-gradient italic">
                  Showcase your skills.
                </span>

              </h2>

              <p className="mx-auto mt-6 max-w-[600px] text-[14px] leading-7 text-[#53657D]">
                Complete the program and receive a certificate
                representing your learning journey.
              </p>

            </div>

            <div className="relative mt-16 overflow-hidden rounded-[32px] border border-[#173873]/10 bg-gradient-to-br from-[#F7F2EA] via-[#FDF8F1] to-[#F7E7D6] p-8 sm:p-12 lg:p-16">

              <div className="absolute right-[-100px] top-[-100px] h-[350px] w-[350px] rounded-full bg-[#F88118]/10 blur-[100px]" />

              <div className="grid items-center gap-14 lg:grid-cols-2">

                <div className="relative">

                  <h3 className="font-serif text-[42px] font-semibold leading-[1] tracking-[-0.04em] text-[#173873] sm:text-[55px]">

                    Earn your
                    <br />

                    <span className="course-gradient-text">
                      completion
                    </span>

                    <br />

                    certificate.

                  </h3>

                  <div className="mt-8 space-y-5">

                    {[
                      "Complete the structured learning journey",
                      "Build practical data science projects",
                      "Demonstrate your data science skills",
                    ].map((item) => (

                      <div
                        key={item}
                        className="flex items-start gap-3 text-[13px] leading-6 text-[#53657D]"
                      >

                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#F88118]" />

                        {item}

                      </div>

                    ))}

                  </div>

                </div>

                <div className="relative flex min-h-[300px] items-center justify-center">

                  <div className="relative z-10 w-full max-w-[520px] rounded-[24px] border border-[#173873]/10 bg-white p-3 shadow-[0_30px_80px_-30px_rgba(23,56,115,0.35)] transition-transform duration-700 hover:rotate-[2deg] hover:scale-[1.02]">

                    <img
                      src={certificateImage}
                      alt="Company certificate"
                      className="w-full rounded-[18px] object-contain"
                    />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            STUDENT STORIES
        ====================================================== */}

        <section className="bg-white px-6 py-24 sm:px-10 lg:px-16">

          <div className="mx-auto max-w-[1250px]">

            <SectionLabel>
              Student Stories
            </SectionLabel>

            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

              <h2 className="max-w-[800px] font-serif text-[48px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[66px]">

                What our

                <span className="course-gradient-text italic">
                  {" "}learners say.
                </span>

              </h2>

              <p className="max-w-[330px] text-[13px] leading-6 text-[#6E6558]">
                Real learner stories can be connected here once
                the course-specific testimonials are finalized.
              </p>

            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">

              {testimonials.map(
                (testimonial) => (

                  <article
                    key={testimonial.quote}
                    className="relative rounded-[26px] border border-[#173873]/10 bg-[#FCF9F4] p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_25px_60px_-35px_rgba(23,56,115,0.3)] sm:p-8"
                  >

                    <span className="font-serif text-[60px] leading-none text-[#F88118]">
                      “
                    </span>

                    <p className="mt-3 text-[14px] leading-7 text-[#53657D]">
                      {testimonial.quote}
                    </p>

                    <div className="mt-9 border-t border-[#173873]/10 pt-5">

                      <p className="text-[13px] font-bold text-[#173873]">
                        {testimonial.name}
                      </p>

                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#F88118]">
                        {testimonial.role}
                      </p>

                    </div>

                  </article>

                )
              )}

            </div>

          </div>

        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#F7F2EA] px-6 py-28 sm:px-10 lg:px-16">

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F88118]/10 blur-[130px]" />

          <div className="relative mx-auto max-w-[900px] text-center">

            <SectionLabel>
              Start Your Journey
            </SectionLabel>

            <h2 className="font-serif text-[52px] font-semibold leading-[0.95] tracking-[-0.045em] sm:text-[78px]">

              Ready to become a

              <br />

              <span className="course-gradient-text italic">
                Data Science Professional?
              </span>

            </h2>

            <p className="mx-auto mt-7 max-w-[600px] text-[15px] leading-7 text-[#6E6558]">
              Build practical skills across Python, statistics,
              machine learning, SQL, visualization and real-world
              data science projects.
            </p>

            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent("open-request-call-modal", {
                    detail: { course: "Data Science" },
                  })
                )
              }
              className="mt-9 rounded-full bg-[#173873] px-9 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F88118]"
            >
              Enroll in Data Science →
            </button>

          </div>

        </section>

        {/* =====================================================
            PAGE LOCAL STYLES
        ====================================================== */}

        <style>{`

          @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&display=swap');

          /* =================================================
             HERO FONT
          ================================================= */

          .course-hero-text {
            font-family:
              "Barlow Condensed",
              "Arial Narrow",
              Impact,
              sans-serif;

            font-weight: 900;

            display: block;

            /*
              Prevents the huge second line from overflowing.
            */

            white-space: normal;

            animation:
              courseHeroGradient 6s ease-in-out infinite,
              courseHeroFloat 4.5s ease-in-out infinite;
          }

          /* =================================================
             HERO ORANGE GRADIENT
          ================================================= */

          .course-hero-gradient {

            background:
              linear-gradient(
                110deg,
                #D94708 0%,
                #F88118 18%,
                #FFC05A 34%,
                #EF6A18 52%,
                #FF9D3F 72%,
                #D94708 88%,
                #F88118 100%
              );

            background-size: 280% auto;

            -webkit-background-clip: text;
            background-clip: text;

            color: transparent;

            filter:
              drop-shadow(
                0 8px 24px rgba(248,129,24,0.14)
              );

          }

          .course-orange-gradient {

            background:
              linear-gradient(
                110deg,
                #F88118 0%,
                #FFB347 30%,
                #F05A28 55%,
                #FF9D3F 80%,
                #F88118 100%
              );

            background-size: 220% auto;

            -webkit-background-clip: text;
            background-clip: text;

            color: transparent;

            animation:
              courseGradient 7s ease-in-out infinite;

          }

          /* =================================================
             GENERAL ORANGE GRADIENT
          ================================================= */

          .course-gradient-text {

            background:
              linear-gradient(
                110deg,
                #F88118 0%,
                #FFB347 25%,
                #F05A28 50%,
                #FF8A3D 75%,
                #F88118 100%
              );

            background-size: 220% auto;

            -webkit-background-clip: text;
            background-clip: text;

            color: transparent;

            animation:
              courseGradient 7s ease-in-out infinite;

          }

          /* =================================================
             ANIMATIONS
          ================================================= */

          @keyframes courseHeroGradient {

            0% {
              background-position: 0% 50%;
            }

            50% {
              background-position: 100% 50%;
            }

            100% {
              background-position: 0% 50%;
            }

          }

          @keyframes courseHeroFloat {

            0%,
            100% {
              transform:
                translateY(0)
                scale(1);
            }

            50% {
              transform:
                translateY(-5px)
                scale(1.008);
            }

          }

          @keyframes courseGradient {

            0%,
            100% {
              background-position: 0% 50%;
            }

            50% {
              background-position: 100% 50%;
            }

          }

          /* =================================================
             MARQUEE
          ================================================= */

          .course-marquee {

            animation:
              courseMarquee
              38s
              linear
              infinite;

          }

          .course-marquee:hover {

            animation-play-state:
              paused;

          }

          @keyframes courseMarquee {

            from {
              transform:
                translateX(0);
            }

            to {
              transform:
                translateX(-50%);
            }

          }

          /* =================================================
             SCROLL REVEAL
          ================================================= */

          .course-reveal {

            opacity:
              0;

            transform:
              translateY(42px)
              scale(.985);

            transition:
              opacity
                850ms
                cubic-bezier(.22,1,.36,1),

              transform
                850ms
                cubic-bezier(.22,1,.36,1);

          }

          .course-revealed {

            opacity:
              1;

            transform:
              translateY(0)
              scale(1);

          }

          .course-reveal-delay-1 {

            transition-delay:
              120ms;

          }

          .course-reveal-delay-2 {

            transition-delay:
              240ms;

          }

          /* =================================================
             STAT CARDS
          ================================================= */

          .course-stat-card {

            transition:
              transform
                500ms
                cubic-bezier(.22,1,.36,1),

              box-shadow
                500ms
                ease;

          }

          .course-stat-card:hover {

            transform:
              translateY(-8px)
              scale(1.012);

            box-shadow:
              0 30px 70px -42px
              rgba(23,56,115,.65);

          }

          .course-stat-card:hover
          .course-stat-number {

            animation:
              numberPulse
              700ms
              cubic-bezier(.22,1,.36,1);

          }

          @keyframes numberPulse {

            0%,
            100% {
              transform:
                translateY(0);
            }

            45% {
              transform:
                translateY(-7px);
            }

          }

          /* =================================================
             CURRICULUM
          ================================================= */

          .course-curriculum-card {

            will-change:
              transform;

          }

          .course-curriculum-card:hover {

            transform:
              translateX(6px);

          }

          /* =================================================
             LEARNING JOURNEY
          ================================================= */

          .course-phase-card {

            min-height:
              205px;

            will-change:
              transform,
              opacity;

          }

          .course-phase-card:not(
            .course-phase-active
          ) {

            opacity:
              .76;

          }

          .course-phase-card.course-phase-active {

            opacity:
              1;

            transform:
              translateX(8px);

          }

          .course-phase-card:hover {

            opacity:
              1;

          }

          /* =================================================
             PULSE DOT
          ================================================= */

          .course-pulse-dot {

            animation:
              coursePulseDot
              2s
              ease-in-out
              infinite;

          }

          @keyframes coursePulseDot {

            0%,
            100% {

              box-shadow:
                0 0 0 0
                rgba(248,129,24,.28);

            }

            50% {

              box-shadow:
                0 0 0 7px
                rgba(248,129,24,.08);

            }

          }

          /* =================================================
             PROJECT CARDS
          ================================================= */

          .course-project-card {

            transition:
              background-color
                500ms
                ease,

              transform
                500ms
                cubic-bezier(.22,1,.36,1);

          }

          .course-project-card:hover {

            transform:
              translateY(-4px);

            background:
              linear-gradient(
                135deg,
                #173873 0%,
                #1F4D8C 35%,
                #F88118 100%
              );

            color:
              #ffffff;

          }

          .course-project-card:hover h3,
          .course-project-card:hover p,
          .course-project-card:hover span {

            color:
              #ffffff;

          }

          /* =================================================
             TABLET
          ================================================= */

          @media (max-width: 1023px) {

            .course-phase-card.course-phase-active {

              transform:
                translateY(-3px);

            }

          }

          /* =================================================
             MOBILE
          ================================================= */

          @media (max-width: 640px) {

            .course-hero-text {

              letter-spacing:
                -0.015em;

            }

            .course-marquee {

              animation-duration:
                30s;

            }

            .course-phase-card {

              min-height:
                0;

            }

          }

          /* =================================================
             REDUCED MOTION
          ================================================= */

          @media (
            prefers-reduced-motion: reduce
          ) {

            .course-hero-text,
            .course-gradient-text,
            .course-orange-gradient,
            .course-marquee,
            .course-pulse-dot {

              animation:
                none;

            }

            .course-reveal {

              opacity:
                1;

              transform:
                none;

              transition:
                none;

            }

            .course-phase-card:not(
              .course-phase-active
            ) {

              opacity:
                1;

            }

            .course-phase-card.course-phase-active {

              transform:
                none;

            }

          }

        `}</style>

      </main>

      <Footer />
    </>
  );
}

export default DataScience;
