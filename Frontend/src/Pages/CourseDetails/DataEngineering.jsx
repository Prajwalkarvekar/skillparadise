import React, { useEffect, useRef, useState } from "react";

import {
  FaAws,
  FaCloud,
  FaCode,
  FaCogs,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";

import Navbar from "../../components/common/Nabvar";
import Footer from "../../components/Footer/Footer";
import certificateImage from "../../assets/certificate.jpeg";

/* =========================================================
   DATA ENGINEERING COURSE DATA
   ========================================================= */

const skills = [
  ["Python", FaPython],
  ["SQL", FaDatabase],
  ["Apache Spark", FaCogs],
  ["PySpark", FaCogs],
  ["Apache Kafka", FaCode],
  ["Apache Airflow", FaCogs],
  ["dbt", FaDatabase],
  ["Databricks", FaDatabase],
  ["Snowflake", FaDatabase],
  ["BigQuery", FaDatabase],
  ["Redshift", FaDatabase],
  ["AWS", FaAws],
  ["Azure", FaCloud],
  ["Docker", FaDocker],
  ["Git", FaGitAlt],
];

const modules = [
  {
    id: 1,
    title: "SQL & Database Fundamentals",
    subtitle:
      "Build a strong foundation in databases, SQL and data modeling.",
    topics: [
      "Introduction to Databases",
      "Types of Databases (RDBMS, NoSQL)",
      "SQL Basics (SELECT, WHERE, JOIN)",
      "Aggregations and Grouping",
      "Subqueries and CTEs",
      "Indexing and Performance Optimization",
      "Data Modeling Basics",
      "Normalization vs Denormalization",
    ],
  },

  {
    id: 2,
    title: "Python for Data Engineering",
    subtitle:
      "Use Python to process data, work with files and automate workflows.",
    topics: [
      "Python Basics",
      "Data Structures",
      "File Handling (CSV, JSON, Parquet)",
      "Working with APIs",
      "Data Processing using Pandas",
      "Writing Efficient Python Code",
      "Automation Scripts",
    ],
  },

  {
    id: 3,
    title: "Data Pipelines & ETL",
    subtitle:
      "Learn how modern data pipelines collect, transform and move data.",
    topics: [
      "ETL vs ELT (Modern Approach)",
      "Building Scalable Data Pipelines",
      "Incremental Data Loading",
      "Data Transformation Techniques",
      "Workflow Orchestration using Airflow",
      "Advanced DAGs",
      "Error Handling & Retry Mechanisms",
      "Logging & Monitoring Pipelines",
      "Data Validation & Quality Checks",
      "CI/CD Basics for Data Pipelines",
    ],
  },

  {
    id: 4,
    title: "Big Data Technologies",
    subtitle:
      "Understand distributed data processing and modern big data platforms.",
    topics: [
      "Evolution of Big Data Systems",
      "Hadoop Conceptual Overview",
      "Apache Spark",
      "PySpark Hands-on",
      "Spark Transformations & Actions",
      "Spark SQL & DataFrames",
      "Distributed Data Processing Concepts",
      "Performance Optimization",
      "Partitioning",
      "Caching",
      "Introduction to Databricks",
      "Industry Usage",
    ],
  },

  {
    id: 5,
    title: "Streaming & Real-Time Data",
    subtitle:
      "Build systems that process and respond to data in real time.",
    topics: [
      "Batch vs Real-time Processing",
      "Apache Kafka Deep Dive",
      "Producers, Consumers & Topics",
      "Stream Processing Concepts",
      "Building Real-time Data Pipelines",
      "Handling Late Data & Failures",
      "Introduction to Event-driven Architecture",
    ],
  },

  {
    id: 6,
    title: "Data Warehousing",
    subtitle:
      "Design analytical data systems for reporting and business intelligence.",
    topics: [
      "Modern Data Warehouse Concepts",
      "OLAP vs OLTP",
      "Star & Snowflake Schema",
      "Fact & Dimension Tables",
      "Data Modeling for Analytics",
      "Hands-on with Snowflake / BigQuery",
      "Data Partitioning & Clustering",
      "Query Optimization Techniques",
      "Introduction to Lakehouse Architecture",
    ],
  },

  {
    id: 7,
    title: "Cloud Data Engineering",
    subtitle:
      "Learn how data pipelines and platforms are built on the cloud.",
    topics: [
      "Introduction to Cloud Data Architecture",
      "AWS Core Services",
      "Amazon S3",
      "AWS Glue",
      "Amazon Redshift",
      "Azure Data Factory",
      "Azure Synapse",
      "Data Ingestion on Cloud",
      "Building End-to-End Pipelines on Cloud",
      "Serverless Data Processing Basics",
      "Cost Optimization Techniques",
      "Security & Access Control",
      "IAM Basics",
    ],
  },

  {
    id: 8,
    title: "Data Engineering Production Practices",
    subtitle:
      "Understand how production-grade data systems are tested, monitored and deployed.",
    topics: [
      "Data Pipeline Testing",
      "Data Quality Frameworks",
      "Monitoring & Alerting Systems",
      "Logging Best Practices",
      "Version Control for Pipelines",
      "Deployment Strategies",
      "CI/CD Implementation Basics",
      "Handling Failures in Production Systems",
    ],
  },
];

/* =========================================================
   LEARNING JOURNEY
   ========================================================= */

const weeks = [
  {
    phase: "01",
    weeks: "01 — 03",
    title: "SQL & Database Foundations",
    description:
      "Build a strong foundation in relational databases, SQL queries, database design and data modeling.",
    modules: ["SQL", "Databases", "Data Modeling"],
  },

  {
    phase: "02",
    weeks: "04 — 06",
    title: "Python for Data Engineering",
    description:
      "Use Python, Pandas, APIs and automation scripts to work with different data formats and workflows.",
    modules: ["Python", "Pandas", "APIs"],
  },

  {
    phase: "03",
    weeks: "07 — 10",
    title: "Data Pipelines & ETL",
    description:
      "Design scalable ETL and ELT pipelines with orchestration, validation, monitoring and error handling.",
    modules: ["ETL", "ELT", "Airflow"],
  },

  {
    phase: "04",
    weeks: "11 — 14",
    title: "Big Data Technologies",
    description:
      "Work with distributed processing concepts and Apache Spark to handle larger data workloads.",
    modules: ["Spark", "PySpark", "Databricks"],
  },

  {
    phase: "05",
    weeks: "15 — 17",
    title: "Streaming & Real-Time Data",
    description:
      "Understand real-time processing and build streaming pipelines using Apache Kafka.",
    modules: ["Kafka", "Streaming", "Real-Time Data"],
  },

  {
    phase: "06",
    weeks: "18 — 20",
    title: "Data Warehousing",
    description:
      "Learn modern warehouse architecture, analytical modeling, partitioning and query optimization.",
    modules: ["Snowflake", "BigQuery", "Warehousing"],
  },

  {
    phase: "07",
    weeks: "21 — 23",
    title: "Cloud Data Engineering",
    description:
      "Build cloud-based data pipelines using AWS and understand Azure data engineering services.",
    modules: ["AWS", "Azure", "Cloud Pipelines"],
  },

  {
    phase: "08",
    weeks: "24",
    title: "Production & Real-World Projects",
    description:
      "Bring the complete learning journey together through production practices and real-world data engineering projects.",
    modules: ["Production", "CI/CD", "Projects"],
  },
];

/* =========================================================
   PROJECTS FROM BROCHURE
   ========================================================= */

const projects = [
  {
    number: "01",
    title: "End-to-End Cloud Data Pipeline",
    description:
      "Build an end-to-end cloud data pipeline using AWS or GCP and apply modern cloud data engineering concepts.",
  },

  {
    number: "02",
    title: "Real-Time Streaming Pipeline",
    description:
      "Create a real-time streaming pipeline using Apache Kafka and understand producers, consumers and stream processing.",
  },

  {
    number: "03",
    title: "Data Warehouse Solution",
    description:
      "Design a modern analytical data warehouse solution using Snowflake or BigQuery.",
  },

  {
    number: "04",
    title: "Batch + Streaming Pipeline",
    description:
      "Combine batch and streaming approaches to create a hybrid data processing pipeline.",
  },

  {
    number: "05",
    title: "Airflow + dbt Pipeline",
    description:
      "Build a modern data pipeline using Airflow orchestration together with dbt-based transformations.",
  },

  {
    number: "06",
    title: "Log Data Processing System",
    description:
      "Create a log data processing system with monitoring and production-focused data engineering practices.",
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
   MAIN COMPONENT
   ========================================================= */

function DataEngineering() {
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
     ACTIVE ROADMAP PHASE
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
      <Navbar />

      <main className="min-h-screen bg-[#F7F2EA] text-[#173873]">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#F7F2EA] px-6 pb-20 pt-28 sm:px-10 sm:pb-24 sm:pt-32 lg:px-16 lg:pt-36">

          {/* Background decoration */}

          <div className="pointer-events-none absolute left-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-[#F88118]/[0.055] blur-[100px]" />

          <div className="pointer-events-none absolute bottom-[-180px] right-[-180px] h-[500px] w-[500px] rounded-full bg-[#173873]/[0.045] blur-[100px]" />

          <div className="relative mx-auto max-w-[1250px] text-center">

            <div
              data-reveal
              className="course-reveal mb-7 flex items-center justify-center gap-4"
            >
              <span className="h-px w-14 bg-[#F88118]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#173873]">
                Data Engineering Program
              </span>

              <span className="h-px w-14 bg-[#F88118]" />
            </div>

            <h1
              data-reveal
              className="course-reveal course-hero-heading mx-auto max-w-[1180px] text-[62px] font-black leading-[0.95] tracking-[-0.025em] sm:text-[88px] lg:text-[122px]"
            >
              <span className="block text-[#173873]">
                Data Engineering
              </span>

              <span className="course-hero-gradient course-hero-text mt-2 block sm:mt-3">
                Turn Data into Scalable Systems
              </span>
            </h1>

            <p
              data-reveal
              className="course-reveal mx-auto mt-10 max-w-[800px] text-[16px] leading-8 text-[#53657D] sm:text-[18px]"
            >
              Build practical data engineering skills across Python,
              SQL, ETL, big data, streaming, data warehousing,
              cloud platforms and production data pipelines.
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
                  className="rounded-full border border-[#173873]/15 bg-white/70 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#173873]"
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
                      detail: { course: "Data Engineering" },
                    })
                  )
                }
                className="rounded-full bg-[#173873] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F88118]"
              >
                Enroll in Program →
              </button>

              <a
                href="#data-engineering-curriculum"
                className="rounded-full border border-[#173873]/20 bg-white/60 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#173873] transition-all duration-300 hover:-translate-y-1 hover:border-[#F88118] hover:text-[#F88118]"
              >
                Explore Curriculum
              </a>
            </div>

          </div>
        </section>


        {/* =====================================================
            TECHNOLOGY MARQUEE
        ====================================================== */}

        <section className="overflow-hidden border-y border-[#173873]/10 bg-white py-7">

          <div className="mb-4 text-center text-[9px] font-bold uppercase tracking-[0.28em] text-[#6E6558]">
            Tools & Technologies You'll Master
          </div>

          <div className="relative flex overflow-hidden">

            <div className="course-marquee flex min-w-max items-center gap-10">

              {[...skills, ...skills].map(([skill, Icon], index) => (
                <React.Fragment key={`${skill}-${index}`}>

                  <span className="flex items-center gap-3 whitespace-nowrap font-serif text-[24px] font-semibold text-[#173873]">
                    <Icon className="text-[23px] text-[#F88118] transition-transform duration-300 hover:scale-125" />
                    {skill}
                  </span>

                  <span className="text-[13px] text-[#173873]/20">
                    ✦
                  </span>

                </React.Fragment>
              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            PROGRAM STATS
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
                  "Structured learning journey",
                ],
                [
                  "08",
                  "Learning Areas",
                  "From SQL foundations to production practices",
                ],
                [
                  "06",
                  "Project Tracks",
                  "Real-world data engineering use cases",
                ],
              ].map(([number, label, description], index) => (

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

                      <p className="mt-5 max-w-[280px] text-[13px] leading-6 text-white/60">
                        {description}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            CURRICULUM
        ====================================================== */}

        <section
          id="data-engineering-curriculum"
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
                  {" "}Data Engineering mastery.
                </span>

              </h2>

              <p className="mt-6 max-w-[700px] text-[15px] leading-7 text-[#6E6558]">
                Explore the complete learning journey and open any
                module to see the detailed topics covered throughout
                the Data Engineering program.
              </p>

            </div>


            {/* CURRICULUM ACCORDION */}

            <div className="space-y-3">

              {modules.map((module) => {

                const isOpen = openModule === module.id;

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
                        {String(module.id).padStart(2, "0")}
                      </span>

                      <span className="flex-1">

                        <span className="block font-serif text-[21px] font-semibold tracking-[-0.02em] text-[#173873] sm:text-[25px]">
                          {module.title}
                        </span>

                        <span className="mt-1 block text-[12px] text-[#6E6558] sm:text-[13px]">
                          {module.subtitle}
                        </span>

                      </span>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                          isOpen
                            ? "rotate-180 bg-[#173873] text-white"
                            : "border-[#173873]/15 bg-white text-[#173873]"
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

                        <div className="border-t border-[#173873]/10 px-5 pb-7 pt-6 sm:px-7">

                          <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">

                            {module.topics.map((topic) => (

                              <div
                                key={topic}
                                className="flex items-start gap-3 text-[13px] leading-6 text-[#53657D]"
                              >

                                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#F88118]" />

                                <span>
                                  {topic}
                                </span>

                              </div>

                            ))}

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
            LEARNING ROADMAP
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

                  Build the skills

                  <br />

                  <span className="course-gradient-text italic">
                    step by step.
                  </span>

                </h2>

                <p className="mt-6 max-w-[430px] text-[15px] leading-7 text-[#6E6558]">
                  Move from database fundamentals to scalable
                  pipelines, streaming systems, cloud architecture
                  and production-ready data engineering.
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

                  {weeks.map((week, index) => {

                    const active = activeWeek === index;

                    return (

                      <button
                        key={week.phase}
                        ref={(element) => {
                          weekRefs.current[index] = element;
                        }}
                        data-week-index={index}
                        type="button"
                        onClick={() => setActiveWeek(index)}
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

                          {week.modules.map((item) => (

                            <span
                              key={item}
                              className="rounded-full bg-[#F1ECE4] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#53657D]"
                            >
                              {item}
                            </span>

                          ))}

                        </div>

                      </button>

                    );

                  })}

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
              Real-World Projects
            </SectionLabel>

            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

              <h2 className="max-w-[800px] font-serif text-[50px] font-semibold leading-[0.98] tracking-[-0.04em] text-[#173873] sm:text-[70px]">

                Don't just learn.

                <br />

                <span className="course-gradient-text italic">
                  Build.
                </span>

              </h2>

              <p className="max-w-[400px] text-[14px] leading-7 text-[#53657D]">
                Apply data engineering concepts through cloud
                pipelines, streaming systems, data warehouses,
                orchestration and production-focused use cases.
              </p>

            </div>


            <div className="mt-16 grid gap-px overflow-hidden rounded-[28px] border border-[#173873]/10 bg-[#173873]/10 md:grid-cols-2">

              {projects.map((project, index) => (

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

                  <h3 className="mt-12 max-w-[480px] font-serif text-[30px] font-semibold tracking-[-0.025em] text-[#173873]">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-[450px] text-[13px] leading-7 text-[#53657D]">
                    {project.description}
                  </p>

                  <span className="mt-8 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#173873]/15 text-[#F88118] transition-all duration-500 group-hover:translate-x-1 group-hover:border-[#F88118]">
                    ↗
                  </span>

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

              <h2 className="mx-auto max-w-[850px] font-serif text-[48px] font-semibold leading-[0.98] tracking-[-0.04em] text-[#173873] sm:text-[70px]">

                Get certified.

                <br />

                <span className="course-gradient-text italic">
                  Showcase your skills.
                </span>

              </h2>

              <p className="mx-auto mt-6 max-w-[600px] text-[14px] leading-7 text-[#53657D]">
                Complete the program and receive a certificate
                representing your Data Engineering learning journey.
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
                      "Build practical data engineering projects",
                      "Demonstrate your technical skills",
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

                  <div className="absolute h-[230px] w-[330px] rotate-[-5deg] rounded-xl border border-[#173873]/10 bg-white/60 shadow-xl" />

                  <div className="relative z-10 w-full max-w-[430px] overflow-hidden rounded-xl bg-white p-3 text-[#173873] shadow-2xl transition-transform duration-700 hover:rotate-[2deg] hover:scale-[1.02] sm:p-4">

                    {certificateImage ? (
                      <img
                        src={certificateImage}
                        alt="SkillParadise Course Certificate"
                        className="h-auto w-full rounded-lg object-cover"
                      />
                    ) : (
                      <div className="flex min-h-[260px] items-center justify-center rounded-lg border border-[#173873]/15">
                        <div className="text-center">
                          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#F88118]">
                            SkillParadise
                          </p>

                          <p className="mt-4 font-serif text-[32px] font-semibold">
                            Certificate
                          </p>

                          <p className="mt-3 text-[12px] text-[#6E6558]">
                            Data Engineering
                          </p>
                        </div>
                      </div>
                    )}

                  </div>

                </div>

              </div>

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
                Data Engineer?
              </span>

            </h2>

            <p className="mx-auto mt-7 max-w-[650px] text-[15px] leading-7 text-[#6E6558]">
              Build your foundation in SQL and Python, master
              pipelines and big data, and learn how modern cloud
              data systems are designed and operated.
            </p>

            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent("open-request-call-modal", {
                    detail: { course: "Data Engineering" },
                  })
                )
              }
              className="mt-9 rounded-full bg-[#173873] px-9 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F88118]"
            >
              Enroll in Data Engineering →
            </button>

          </div>

        </section>


        {/* =====================================================
            COMPONENT STYLES
        ====================================================== */}

        <style>{`

          @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&display=swap');


          /* =================================================
             HERO TYPOGRAPHY
          ================================================= */

          .course-hero-heading {
            overflow-wrap: normal;
            word-break: normal;
          }


          .course-hero-text {
            font-family:
              "Barlow Condensed",
              "Arial Narrow",
              Impact,
              sans-serif;

            font-weight: 900;

            display: inline-block;

            letter-spacing: -0.025em;

            animation:
              courseHeroGradient 6s ease-in-out infinite,
              courseHeroFloat 4.5s ease-in-out infinite;
          }


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
                scale(1.012);
            }

          }


          /* =================================================
             GRADIENT TEXT
          ================================================= */

          .course-gradient-text {

            background:
              linear-gradient(
                110deg,
                #173873 0%,
                #214A86 30%,
                #F88118 70%,
                #FFB347 100%
              );

            background-size: 220% auto;

            -webkit-background-clip: text;
            background-clip: text;

            color: transparent;

            animation:
              courseTextGradient 6s ease-in-out infinite;
          }


          @keyframes courseTextGradient {

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


          /* =================================================
             SCROLL REVEAL
          ================================================= */

          .course-reveal {

            opacity: 0;

            transform:
              translateY(28px);

            transition:
              opacity
                900ms
                cubic-bezier(.22,1,.36,1),

              transform
                900ms
                cubic-bezier(.22,1,.36,1);
          }


          .course-reveal.course-revealed {

            opacity: 1;

            transform:
              translateY(0);
          }


          .course-reveal-delay-1 {

            transition-delay:
              100ms;
          }


          .course-reveal-delay-2 {

            transition-delay:
              200ms;
          }


          /* =================================================
             MARQUEE
          ================================================= */

          .course-marquee {

            animation:
              courseMarquee
              35s
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
              translateY(-5px);

            box-shadow:
              0 25px 55px -35px
              rgba(23,56,115,.45);
          }


          /* =================================================
             CURRICULUM
          ================================================= */

          .course-curriculum-card {

            transition:
              transform
                400ms
                cubic-bezier(.22,1,.36,1),

              box-shadow
                400ms
                ease;
          }


          .course-curriculum-card:hover {

            transform:
              translateY(-2px);
          }


          /* =================================================
             ROADMAP
          ================================================= */

          .course-phase-card {

            will-change:
              transform,
              opacity;
          }


          .course-phase-card:not(.course-phase-active) {

            opacity:
              0.76;
          }


          .course-phase-card.course-phase-active {

            opacity:
              1;

            transform:
              translateX(8px);
          }


          .course-roadmap-sticky {

            transition:
              transform
                500ms
                cubic-bezier(.22,1,.36,1),

              box-shadow
                500ms
                ease;
          }


          .course-roadmap-sticky:hover {

            transform:
              translateY(-3px);

            box-shadow:
              0 25px 65px -48px
              rgba(23,56,115,.45);
          }


          .scrollbar-hidden {

            -ms-overflow-style:
              none;

            scrollbar-width:
              none;
          }


          .scrollbar-hidden::-webkit-scrollbar {

            display:
              none;
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

            .course-hero-heading {

              letter-spacing:
                -0.015em;
            }


            .course-hero-text {

              letter-spacing:
                -0.018em;
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

      <Footer />
    </>
  );
}

export default DataEngineering;
