import React, { useEffect, useRef, useState } from "react";

import {
  FaPython,
  FaDatabase,
  FaChartBar,
  FaTable,
  FaFileExcel,
  FaCode,
  FaProjectDiagram,
  FaSearch,
  FaCogs,
  FaChartLine,
  FaBrain,
  FaFilter,
} from "react-icons/fa";

import {
  SiPandas,
  SiMysql,
  SiNumpy,
} from "react-icons/si";

import Navbar from "../../components/common/Nabvar";
import Footer from "../../components/Footer/Footer";
import certificateImage from "../../assets/certificate.jpeg";


/* =========================================================
   TECHNOLOGIES
========================================================= */

const skills = [
  ["Python", FaPython],
  ["Pandas", SiPandas],
  ["NumPy", SiNumpy],
  ["SQL", SiMysql],
  ["Power BI", FaChartBar],
  ["Tableau", FaChartBar],
  ["Statistics", FaChartLine],
  ["Data Visualization", FaChartBar],
  ["Data Analysis", FaSearch],
  ["Dashboards", FaTable],
  ["Data Modeling", FaProjectDiagram],
  ["Automation", FaCogs],
];


/* =========================================================
   CURRICULUM
========================================================= */

const modules = [
  {
    id: 1,
    title: "Python for Data Analytics",
    subtitle:
      "Build practical Python skills for working with, analysing and visualising data.",
    topics: [
      "Python Fundamentals",
      "Data Types & Variables",
      "Lists, Tuples & Dictionaries",
      "Functions",
      "Loops & Conditional Logic",
      "NumPy Basics",
      "Pandas Series & DataFrames",
      "Loading CSV, Excel, SQL & JSON Data",
      "Filtering & Sorting Data",
      "Handling Missing Values",
      "GroupBy & Aggregation",
      "Merging & Joining Datasets",
      "Pivot Tables & Reshaping",
      "Date & Time Operations",
      "Data Export & Reporting",
    ],
  },

  {
    id: 2,
    title: "Exploratory Data Analysis",
    subtitle:
      "Discover patterns, relationships, anomalies and insights hidden inside datasets.",
    topics: [
      "Summary Statistics",
      "Distribution Analysis",
      "Correlation Analysis",
      "Cross-tabulation",
      "Pattern Detection",
      "Anomaly Detection",
      "Data Cleaning",
      "Outlier Detection",
      "Z-score Method",
      "IQR Method",
      "Data Transformation",
      "Log Transformation",
      "Scaling & Normalization",
      "Standardization",
      "Time Series Basics",
      "Trend & Seasonality",
      "Moving Averages",
    ],
  },

  {
    id: 3,
    title: "SQL & Database Analytics",
    subtitle:
      "Query relational databases and extract the data needed for business analysis.",
    topics: [
      "Introduction to SQL",
      "DBMS Fundamentals",
      "SQL vs MySQL",
      "Basic SELECT Statements",
      "LIMIT & OFFSET",
      "ORDER BY",
      "DISTINCT",
      "WHERE Clause",
      "Comparison Operators",
      "NULL Handling",
      "Logical Operators",
      "Aggregate Functions",
      "GROUP BY",
      "HAVING",
      "Wildcard Operators",
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "SELF JOIN",
      "Subqueries & Nested Queries",
      "Stored Procedures",
      "SQL Functions",
      "DML & DDL",
      "DCL",
    ],
  },

  {
    id: 4,
    title: "Statistics for Data Analytics",
    subtitle:
      "Understand the statistical thinking required to make reliable data-driven decisions.",
    topics: [
      "Mean, Median & Mode",
      "Minimum & Maximum",
      "Range",
      "Quartiles & Percentiles",
      "Variance",
      "Standard Deviation",
      "Interquartile Range",
      "Skewness & Kurtosis",
      "Data Distributions",
      "Normal Distribution",
      "Uniform Distribution",
      "Binomial Distribution",
      "Poisson Distribution",
      "Probability Basics",
      "Conditional Probability",
      "Bayes' Theorem",
      "Sampling Concepts",
      "Population vs Sample",
      "Sampling Bias & Error",
      "Central Limit Theorem",
      "Confidence Intervals",
      "Correlation & Covariance",
      "Hypothesis Testing",
      "p-value & Significance",
      "Z-test & t-test",
      "Chi-square Test",
      "ANOVA",
      "Regression Basics",
      "R-squared & Residual Analysis",
      "Non-parametric Methods",
    ],
  },

  {
    id: 5,
    title: "Power BI",
    subtitle:
      "Transform analytical data into interactive dashboards and business reports.",
    topics: [
      "Introduction to Power BI",
      "Data Sources",
      "Power BI Desktop",
      "Power Query",
      "Query Editor",
      "Data Connections",
      "Data Transformation",
      "Data Cleaning",
      "Data Modeling",
      "Relationships",
      "Calculated Columns",
      "Measures",
      "DAX Fundamentals",
      "DAX Data Types",
      "Date & Time Functions",
      "Time Intelligence",
      "Logical & Mathematical Functions",
      "Statistical Functions",
      "Aggregate Measures",
      "Data Visualization",
      "Charts & Reports",
      "Scatter & Waterfall Charts",
      "Funnel Charts",
      "Slicers",
      "Map Visualizations",
      "Gauges & KPI Cards",
      "Custom Visuals",
      "Power BI Q&A",
      "Dashboards vs Reports",
      "Dashboard Tiles",
      "Quick Insights",
    ],
  },

  {
    id: 6,
    title: "Tableau",
    subtitle:
      "Create professional visual analytics experiences with Tableau.",
    topics: [
      "Introduction to Tableau",
      "Data Visualization & Analytics",
      "Tableau Desktop",
      "Tableau Server",
      "Tableau Public",
      "Connecting Excel Data",
      "Line Charts",
      "Bar Charts",
      "Area Charts",
      "Stacked Charts",
      "Multi-line Charts",
      "Tables & Graphs",
      "Tree Maps",
      "Filled Maps",
      "Pie Charts",
      "Trend Lines",
      "Multi-measure Tables",
      "Metadata",
      "Calculated Fields",
      "Data Type Conversion",
      "Hierarchy Creation",
      "Groups & Sorting",
      "Data Blending",
      "Dashboard Filters",
      "Parameters",
      "What-if Analysis",
      "Dashboard Creation",
      "Live Connections",
      "Data Extracts",
      "LOD Expressions",
      "Table Calculations",
    ],
  },

  {
    id: 7,
    title: "Advanced Visualization & Reporting",
    subtitle:
      "Turn analysis into clear, useful visual stories and professional reports.",
    topics: [
      "Choosing the Right Visualization",
      "Chart Selection",
      "Dashboard Layout",
      "Visual Hierarchy",
      "Interactive Filters",
      "KPI Design",
      "Trend Analysis",
      "Comparative Analysis",
      "Geographic Analysis",
      "Business Reporting",
      "Insight Communication",
      "Dashboard Storytelling",
      "Exporting Reports",
      "Sharing Dashboards",
    ],
  },

  {
    id: 8,
    title: "Analytics Projects & Automation",
    subtitle:
      "Bring Python, SQL, statistics and BI tools together through practical analysis.",
    topics: [
      "Real-world Data Analysis",
      "Business Problem Definition",
      "Data Collection",
      "Data Cleaning Workflow",
      "Exploratory Analysis",
      "Statistical Interpretation",
      "SQL-based Analysis",
      "Dashboard Development",
      "Insight Generation",
      "Business Recommendations",
      "Automating Repetitive Tasks",
      "Reusable Python Scripts",
      "Processing Multiple Files",
      "Automated Data Refresh",
      "Final Capstone Project",
    ],
  },
];


/* =========================================================
   24-WEEK LEARNING JOURNEY
========================================================= */

const weeks = [
  {
    phase: "01",
    weeks: "01 — 03",
    title: "Python Foundations",
    description:
      "Build the programming foundation required to work confidently with data using Python.",
    modules: ["Python", "Programming Fundamentals"],
  },

  {
    phase: "02",
    weeks: "04 — 06",
    title: "Pandas & Data Manipulation",
    description:
      "Learn to load, inspect, clean, transform and combine datasets using Pandas.",
    modules: ["Pandas", "Data Cleaning", "Data Manipulation"],
  },

  {
    phase: "03",
    weeks: "07 — 09",
    title: "EDA & Visualization",
    description:
      "Explore datasets, identify patterns and communicate findings using visual analysis.",
    modules: ["EDA", "Visualization", "Matplotlib"],
  },

  {
    phase: "04",
    weeks: "10 — 12",
    title: "SQL & Database Analytics",
    description:
      "Write SQL queries, work with relational databases and extract useful analytical datasets.",
    modules: ["SQL", "MySQL", "Database Analytics"],
  },

  {
    phase: "05",
    weeks: "13 — 15",
    title: "Statistics",
    description:
      "Develop statistical reasoning through distributions, probability, sampling and hypothesis testing.",
    modules: ["Statistics", "Probability", "Hypothesis Testing"],
  },

  {
    phase: "06",
    weeks: "16 — 18",
    title: "Power BI",
    description:
      "Transform data into interactive business reports using Power Query, data modeling and DAX.",
    modules: ["Power BI", "DAX", "Dashboards"],
  },

  {
    phase: "07",
    weeks: "19 — 21",
    title: "Tableau",
    description:
      "Build interactive visualizations and dashboards using Tableau's analytical features.",
    modules: ["Tableau", "Visualization", "Dashboard Design"],
  },

  {
    phase: "08",
    weeks: "22 — 24",
    title: "Analytics Projects & Capstone",
    description:
      "Combine Python, SQL, statistics and BI tools to solve practical data analytics problems.",
    modules: ["Projects", "Business Analytics", "Capstone"],
  },
];


/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    number: "01",
    title: "Sales Performance Analysis",
    description:
      "Analyse sales data using Python and Pandas to identify revenue trends, top-performing products, regions and business opportunities.",
  },

  {
    number: "02",
    title: "Customer Analytics",
    description:
      "Explore customer behaviour, segmentation patterns and purchasing trends using data cleaning, EDA and statistical analysis.",
  },

  {
    number: "03",
    title: "SQL Business Analysis",
    description:
      "Use SQL queries, joins, aggregations and subqueries to extract meaningful insights from a relational business database.",
  },

  {
    number: "04",
    title: "Power BI Executive Dashboard",
    description:
      "Build an interactive dashboard with KPIs, charts, filters and business metrics using Power BI and DAX.",
  },

  {
    number: "05",
    title: "Tableau Analytics Dashboard",
    description:
      "Create an interactive Tableau dashboard using calculated fields, filters, parameters, maps and analytical visualizations.",
  },

  {
    number: "06",
    title: "Data Analytics Capstone",
    description:
      "Take a real-world dataset from raw data to cleaning, analysis, visualization, dashboard creation and actionable recommendations.",
  },
];


/* =========================================================
   TESTIMONIALS
========================================================= */

const testimonials = [
  {
    quote:
      "The structured approach makes it much easier to understand how Python, SQL, statistics and visualization work together in real analytics.",
    name: "Learner",
    role: "Data Analytics",
  },

  {
    quote:
      "Working on dashboards and practical datasets helped me understand how raw data can become useful business information.",
    name: "Learner",
    role: "Business Analytics",
  },

  {
    quote:
      "The combination of Python, SQL and BI tools gives a clear path from learning data concepts to actually analysing and presenting them.",
    name: "Learner",
    role: "Data Analytics",
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
   COMPONENT
========================================================= */

function DataAnalytics() {
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
     ACTIVE 24-WEEK PHASE
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
                a.boundingClientRect.top -
                  window.innerHeight * 0.42
              ) -
              Math.abs(
                b.boundingClientRect.top -
                  window.innerHeight * 0.42
              )
          );

        if (visibleCards.length) {
          const index = Number(
            visibleCards[0].target.dataset.weekIndex
          );

          setActiveWeek(index);
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
      {/* =====================================================
          SHARED NAVBAR
      ====================================================== */}

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


              {/* PROGRAM LABEL */}

              <div className="mb-8 flex items-center justify-center gap-4">

                <span className="h-px w-10 bg-[#F88118]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#173873]">
                  Data Analytics Program
                </span>

                <span className="h-px w-10 bg-[#F88118]" />

              </div>


              {/* HERO HEADING */}

              <h1
                data-reveal
                className="course-reveal text-[56px] font-black leading-[0.9] tracking-[-0.035em] sm:text-[82px] lg:text-[112px]"
              >

                Data Analytics

                <br />

                <span className="course-hero-gradient course-hero-text">
                  Turn Data into Decisions
                </span>

              </h1>


              {/* DESCRIPTION */}

              <p
                data-reveal
                className="course-reveal mx-auto mt-9 max-w-[760px] text-[16px] leading-8 text-[#53657D] sm:text-[18px]"
              >
                Build practical data analytics skills across Python,
                Pandas, SQL, statistics, Power BI, Tableau and
                real-world business analysis.
              </p>


              {/* COURSE META */}

              <div
                data-reveal
                className="course-reveal mt-10 flex flex-wrap justify-center gap-3"
              >

                {[
                  "6 Months",
                  "24 Weeks",
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


              {/* BUTTONS */}

              <div
                data-reveal
                className="course-reveal mt-11 flex flex-col justify-center gap-3 sm:flex-row"
              >

                <button
                  type="button"
                  onClick={() =>
                    window.dispatchEvent(
                      new CustomEvent("open-request-call-modal", {
                        detail: { course: "Data Analytics" },
                      })
                    )
                  }
                  className="rounded-full bg-[#173873] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F88118]"
                >
                  Enroll in Program →
                </button>


                <a
                  href="#data-analytics-curriculum"
                  className="rounded-full border border-[#173873]/20 bg-white/50 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#173873] transition-all duration-300 hover:-translate-y-1 hover:border-[#F88118] hover:text-[#F88118]"
                >
                  Explore Curriculum
                </a>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            TECHNOLOGY MARQUEE
        ====================================================== */}

        <section className="overflow-hidden border-y border-[#173873]/10 bg-white py-7">

          <div className="mb-4 text-center text-[9px] font-bold uppercase tracking-[0.28em] text-[#6E6558]">
            Tools & Skills You&apos;ll Master
          </div>


          <div className="relative flex overflow-hidden">

            <div className="course-marquee flex min-w-max items-center gap-10">

              {[...skills, ...skills].map(
                ([skill, Icon], index) => (

                  <React.Fragment
                    key={`${skill}-${index}`}
                  >

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
                  "Flexible learning journey",
                ],

                [
                  "24",
                  "Weeks",
                  "Progressive analytics curriculum",
                ],

                [
                  "05",
                  "Core Tracks",
                  "Python, SQL, Statistics & BI",
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


                      <div className="relative">

                        <p className="course-stat-number font-serif text-[70px] font-semibold leading-none tracking-[-0.05em] text-white sm:text-[82px]">
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
          id="data-analytics-curriculum"
          className="bg-white px-6 py-24 sm:px-10 lg:px-16"
        >

          <div className="mx-auto max-w-[1250px]">


            <div
              data-reveal
              className="course-reveal mb-14 max-w-[850px]"
            >

              <SectionLabel>
                Curriculum
              </SectionLabel>


              <h2 className="font-serif text-[48px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[68px]">

                A structured path from

                <span className="course-gradient-text italic">
                  {" "}data to decisions.
                </span>

              </h2>


              <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-[#6E6558]">
                Explore the complete learning journey and open any
                module to see the detailed topics covered inside
                the Data Analytics program.
              </p>

            </div>


            {/* ACCORDION */}

            <div className="space-y-3">

              {modules.map((module) => {

                const isOpen =
                  openModule === module.id;

                return (

                  <div
                    key={module.id}
                    className={`overflow-hidden rounded-[22px] border transition-all duration-500 ${
                      isOpen
                        ? "border-[#F88118]/30 bg-[#FCF9F4] shadow-[0_20px_60px_-45px_rgba(248,129,24,0.65)]"
                        : "border-[#173873]/10 bg-white hover:border-[#173873]/20"
                    }`}
                  >

                    {/* MODULE HEADER */}

                    <button
                      type="button"
                      onClick={() =>
                        setOpenModule(
                          isOpen
                            ? null
                            : module.id
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


                      <span className="flex-1">

                        <span className="block font-serif text-[21px] font-semibold text-[#173873] sm:text-[25px]">
                          {module.title}
                        </span>

                        <span className="mt-1 block text-[12px] text-[#6E6558] sm:text-[13px]">
                          {module.subtitle}
                        </span>

                      </span>


                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#173873]/15 transition-all duration-500 ${
                          isOpen
                            ? "rotate-180 bg-[#173873] text-white"
                            : "bg-white text-[#173873]"
                        }`}
                      >
                        ↓
                      </span>

                    </button>


                    {/* MODULE CONTENT */}

                    <div
                      className={`grid transition-all duration-500 ${
                        isOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >

                      <div className="overflow-hidden">

                        <div className="border-t border-[#173873]/10 px-5 pb-7 pt-6 sm:px-7">

                          <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">

                            {module.topics.map(
                              (topic) => (

                                <div
                                  key={topic}
                                  className="flex items-start gap-3 text-[13px] leading-6 text-[#53657D]"
                                >

                                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#F88118]" />

                                  <span>
                                    {topic}
                                  </span>

                                </div>

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


              {/* LEFT */}

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
                  A structured 24-week progression that moves
                  from Python and data preparation through SQL,
                  statistics, Power BI, Tableau and practical
                  analytics projects.
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
                      Current phase
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


              {/* RIGHT */}

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
                            weekRefs.current[
                              index
                            ] = element;
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
                              Phase {week.phase}
                            </span>

                            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6E6558]">
                              Weeks {week.weeks}
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

        <section className="bg-[#F7F2EA] px-6 py-24 text-[#173873] sm:px-10 lg:px-16">

          <div className="mx-auto max-w-[1250px]">


            <SectionLabel>
              Projects
            </SectionLabel>


            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

              <h2 className="max-w-[800px] font-serif text-[50px] font-semibold leading-[0.98] tracking-[-0.04em] text-[#173873] sm:text-[70px]">

                Don&apos;t just learn.

                <br />

                <span className="course-gradient-text italic">
                  Analyse.
                </span>

              </h2>


              <p className="max-w-[380px] text-[14px] leading-7 text-[#53657D]">
                Apply Python, SQL, statistics, Power BI and
                Tableau through practical analytics projects
                designed around real business problems.
              </p>

            </div>


            <div className="mt-16 grid gap-px overflow-hidden rounded-[28px] border border-[#173873]/10 bg-[#173873]/10 md:grid-cols-2 lg:grid-cols-3">

              {projects.map(
                (project, index) => (

                  <div
                    key={project.number}
                    data-reveal
                    className={`course-reveal course-project-card group relative bg-[#F7F2EA] p-7 text-[#173873] sm:p-9 ${
                      index % 2
                        ? "course-reveal-delay-1"
                        : ""
                    }`}
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


                    <span className="mt-8 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#173873]/15 text-[#F88118] transition-all duration-500 group-hover:translate-x-1 group-hover:border-[#F88118]">
                      ↗
                    </span>

                  </div>

                )
              )}

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


              <h2 className="mx-auto max-w-[850px] font-serif text-[48px] font-semibold leading-[0.98] tracking-[-0.04em] text-[#173873] sm:text-[70px]">

                Get certified.

                <br />

                <span className="course-gradient-text italic">
                  Showcase your skills.
                </span>

              </h2>


              <p className="mx-auto mt-6 max-w-[600px] text-[14px] leading-7 text-[#53657D]">
                Complete the structured Data Analytics program,
                work through practical projects and receive a
                certificate representing your learning journey.
              </p>

            </div>


            {/* CERTIFICATE CARD */}

            <div className="relative mt-16 overflow-hidden rounded-[32px] border border-[#173873]/10 bg-gradient-to-br from-[#F7F2EA] via-[#FDF8F1] to-[#F7E7D6] p-8 sm:p-12 lg:p-16">

              <div className="absolute right-[-100px] top-[-100px] h-[350px] w-[350px] rounded-full bg-[#F88118]/10 blur-[100px]" />


              <div className="grid items-center gap-14 lg:grid-cols-2">


                {/* TEXT */}

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
                      "Build practical analytics projects",
                      "Work with Python, SQL and BI tools",
                      "Demonstrate your data analysis skills",
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


                {/* CERTIFICATE PREVIEW */}

                <div className="relative">

                  <div className="overflow-hidden rounded-[18px] border border-[#173873]/15 bg-white shadow-[0_30px_80px_-40px_rgba(23,56,115,0.45)] transition-transform duration-700 hover:rotate-[2deg] hover:scale-[1.02]">

                    <img
                      src={certificateImage}
                      alt="SkillParadise course certificate"
                      className="block h-auto w-full object-cover"
                    />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            TESTIMONIALS
        ====================================================== */}

        <section className="bg-white px-6 py-24 sm:px-10 lg:px-16">

          <div className="mx-auto max-w-[1250px]">


            <SectionLabel>
              Learner Experience
            </SectionLabel>


            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

              <h2 className="max-w-[800px] font-serif text-[50px] font-semibold leading-[0.98] tracking-[-0.04em] text-[#173873] sm:text-[70px]">

                Learn the tools.

                <br />

                <span className="course-gradient-text italic">
                  Understand the data.
                </span>

              </h2>


              <p className="max-w-[380px] text-[14px] leading-7 text-[#53657D]">
                A practical learning experience designed to
                connect technical analytics skills with
                business thinking.
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
                Data Analytics Expert?
              </span>

            </h2>


            <p className="mx-auto mt-7 max-w-[600px] text-[15px] leading-7 text-[#6E6558]">
              Build practical analytics skills across Python,
              SQL, statistics, Power BI and Tableau — then apply
              them to real-world data problems.
            </p>


            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent("open-request-call-modal", {
                    detail: { course: "Data Analytics" },
                  })
                )
              }
              className="mt-9 rounded-full bg-[#173873] px-9 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F88118]"
            >
              Enroll in Data Analytics →
            </button>

          </div>

        </section>


        {/* =====================================================
            PAGE-LOCAL STYLES
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

            display: inline-block;

            letter-spacing:
              -0.025em;

            animation:
              courseHeroGradient
              6s
              ease-in-out
              infinite,

              courseHeroFloat
              4.5s
              ease-in-out
              infinite;
          }


          /* =================================================
             HERO GRADIENT
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

            background-size:
              280% auto;

            -webkit-background-clip:
              text;

            background-clip:
              text;

            color:
              transparent;

            filter:
              drop-shadow(
                0 8px 24px
                rgba(248,129,24,0.14)
              );
          }


          /* =================================================
             GENERAL GRADIENT TEXT
          ================================================= */

          .course-gradient-text {

            background:
              linear-gradient(
                110deg,
                #173873 0%,
                #F88118 50%,
                #FFB347 100%
              );

            background-size:
              200% auto;

            -webkit-background-clip:
              text;

            background-clip:
              text;

            color:
              transparent;

            animation:
              courseGradientMove
              5s
              ease-in-out
              infinite;
          }


          /* =================================================
             REVEAL
          ================================================= */

          .course-reveal {

            opacity:
              0;

            transform:
              translateY(26px);

            transition:
              opacity
              800ms
              cubic-bezier(.22,1,.36,1),

              transform
              800ms
              cubic-bezier(.22,1,.36,1);
          }


          .course-reveal.course-revealed {

            opacity:
              1;

            transform:
              translateY(0);
          }


          .course-reveal-delay-1 {

            transition-delay:
              100ms;
          }


          .course-reveal-delay-2 {

            transition-delay:
              180ms;
          }


          /* =================================================
             HERO ANIMATION
          ================================================= */

          @keyframes courseHeroGradient {

            0%,
            100% {

              background-position:
                0% 50%;
            }

            50% {

              background-position:
                100% 50%;
            }

          }


          @keyframes courseHeroFloat {

            0%,
            100% {

              transform:
                translateY(0);
            }

            50% {

              transform:
                translateY(-5px);
            }

          }


          @keyframes courseGradientMove {

            0%,
            100% {

              background-position:
                0% 50%;
            }

            50% {

              background-position:
                100% 50%;
            }

          }


          /* =================================================
             MARQUEE
          ================================================= */

          .course-marquee {

            animation:
              courseMarquee
              34s
              linear
              infinite;
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
                rgba(248,129,24,0.28);
            }

            50% {

              box-shadow:
                0 0 0 7px
                rgba(248,129,24,0.08);
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
             STAT CARD
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
              translateY(-5px);

            box-shadow:
              0 30px 60px -35px
              rgba(23,56,115,0.55);
          }


          /* =================================================
             PHASE CARDS
          ================================================= */

          .course-phase-card {

            min-height:
              180px;
          }


          .course-phase-card.course-phase-active {

            transform:
              translateY(-5px);
          }


          /* =================================================
             MOBILE
          ================================================= */

          @media (max-width: 640px) {

            .course-hero-text {

              letter-spacing:
                -0.02em;
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
             TABLET
          ================================================= */

          @media (max-width: 1023px) {

            .course-phase-card.course-phase-active {

              transform:
                translateY(-3px);
            }

          }


          /* =================================================
             REDUCED MOTION
          ================================================= */

          @media (prefers-reduced-motion: reduce) {

            .course-hero-text,
            .course-gradient-text,
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


            .course-phase-card:not(.course-phase-active) {

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


      {/* =====================================================
          SHARED SITE FOOTER
      ====================================================== */}

      <Footer />

    </>
  );
}


export default DataAnalytics;
