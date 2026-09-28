import React, { useEffect, useRef, useState } from "react";
import {
  FaGoogle,
  FaSearch,
  FaInstagram,
  FaFacebookF,
  FaEnvelopeOpenText,
  FaChartLine,
  FaPenNib,
  FaBullhorn,
  FaUsers,
  FaGlobe,
} from "react-icons/fa";

import Navbar from "../../components/common/Nabvar";
import Footer from "../../components/Footer/Footer";
import certificateImage from "../../assets/certificate.jpeg";

const skills = [
  ["Google Ads", FaGoogle],
  ["SEO", FaSearch],
  ["Social Media", FaInstagram],
  ["Facebook Ads", FaFacebookF],
  ["Instagram Marketing", FaInstagram],
  ["Email Marketing", FaEnvelopeOpenText],
  ["Analytics", FaChartLine],
  ["Content Marketing", FaPenNib],
  ["Brand Strategy", FaBullhorn],
  ["Keyword Research", FaSearch],
  ["Lead Generation", FaUsers],
  ["Digital Strategy", FaGlobe],
];

const modules = [
  {
    id: 1,
    title: "Marketing Fundamentals",
    subtitle: "Build a strong foundation in modern digital marketing",
    topics: [
      "Introduction to Marketing",
      "Digital vs Traditional Marketing",
      "Customer Journey",
      "Market Research Basics",
      "Branding Fundamentals",
    ],
  },
  {
    id: 2,
    title: "Paid Advertising",
    subtitle: "Learn the fundamentals of running and optimizing paid campaigns",
    topics: [
      "Google Ads Basics",
      "Social Media Ads",
      "Campaign Setup & Optimization",
      "Budget Management",
      "ROI Tracking",
    ],
  },
  {
    id: 3,
    title: "Search Engine Optimization (SEO)",
    subtitle: "Learn how brands improve visibility through search",
    topics: [
      "On-page SEO",
      "Off-page SEO",
      "Keyword Research",
      "Technical SEO Basics",
      "SEO Tools & Analytics",
    ],
  },
  {
    id: 4,
    title: "Email Marketing",
    subtitle: "Create campaigns, funnels and measurable email experiences",
    topics: [
      "Email Campaign Strategy",
      "List Building",
      "Automation & Funnels",
      "A/B Testing",
      "Performance Tracking",
    ],
  },
  {
    id: 5,
    title: "Analytics & Tracking",
    subtitle: "Turn marketing data into measurable business insights",
    topics: [
      "Web Analytics Basics",
      "Google Analytics",
      "Conversion Tracking",
      "Data Interpretation",
      "Reporting & Insights",
    ],
  },
  {
    id: 6,
    title: "Content Marketing",
    subtitle: "Create useful content that supports brand growth",
    topics: [
      "Content Strategy",
      "Blogging & Copywriting",
      "Visual Content Creation",
      "Storytelling for Brands",
      "Content Distribution",
    ],
  },
  {
    id: 7,
    title: "Social Media Marketing",
    subtitle: "Build platform-specific strategies for modern audiences",
    topics: [
      "Platform Strategies (Instagram, Facebook, LinkedIn)",
      "Content Planning & Scheduling",
      "Audience Growth Techniques",
      "Engagement Strategies",
      "Influencer Marketing",
    ],
  },
  {
    id: 8,
    title: "Tools & Platforms",
    subtitle: "Work with the tools used throughout the program",
    topics: [
      "Google Ads",
      "Facebook Ads Manager",
      "Instagram Marketing Tools",
      "SEO Tools (Ahrefs, SEMrush Overview)",
      "Content & Automation Tools",
    ],
  },
  {
    id: 9,
    title: "Branding & Strategy",
    subtitle: "Plan digital strategies around real business objectives",
    topics: [
      "Building Brand Identity",
      "Positioning & Messaging",
      "Digital Marketing Strategy Planning",
      "Competitor Analysis",
      "Campaign Planning",
    ],
  },
  {
    id: 10,
    title: "Real-world Use Cases",
    subtitle: "Understand how digital marketing supports business growth",
    topics: [
      "Business Growth & Lead Generation",
      "E-commerce Marketing",
      "Brand Awareness Campaigns",
      "Social Media Growth",
      "Performance Marketing",
    ],
  },
];

const weeks = [
  {
    phase: "01",
    weeks: "01 — 03",
    title: "Marketing Foundations",
    description:
      "Understand marketing fundamentals, customer journeys, market research and branding.",
    modules: ["Marketing Fundamentals"],
  },
  {
    phase: "02",
    weeks: "04 — 06",
    title: "Search & Visibility",
    description:
      "Build practical knowledge of keyword research, on-page SEO, off-page SEO and technical SEO.",
    modules: ["Search Engine Optimization (SEO)"],
  },
  {
    phase: "03",
    weeks: "07 — 09",
    title: "Paid Advertising",
    description:
      "Learn campaign setup, social media advertising, budget management, optimization and ROI tracking.",
    modules: ["Paid Advertising"],
  },
  {
    phase: "04",
    weeks: "10 — 12",
    title: "Content & Social",
    description:
      "Develop content strategies and social media plans across Instagram, Facebook and LinkedIn.",
    modules: ["Content Marketing", "Social Media Marketing"],
  },
  {
    phase: "05",
    weeks: "13 — 15",
    title: "Email & Conversion",
    description:
      "Work with email campaigns, list building, automation, funnels, A/B testing and performance tracking.",
    modules: ["Email Marketing"],
  },
  {
    phase: "06",
    weeks: "16 — 18",
    title: "Analytics & Measurement",
    description:
      "Understand web analytics, Google Analytics, conversion tracking, reporting and data interpretation.",
    modules: ["Analytics & Tracking"],
  },
  {
    phase: "07",
    weeks: "19 — 21",
    title: "Strategy & Tools",
    description:
      "Bring branding, strategy, competitor analysis and the core marketing toolset together.",
    modules: ["Branding & Strategy", "Tools & Platforms"],
  },
  {
    phase: "08",
    weeks: "22 — 24",
    title: "Real-world Marketing Projects",
    description:
      "Apply the learning through practical marketing use cases, campaigns and a complete strategy.",
    modules: ["Real-world Use Cases"],
  },
];

const projects = [
  {
    number: "01",
    title: "SEO Optimization Project",
    description:
      "Apply keyword research, on-page, off-page and technical SEO concepts to an optimization project.",
  },
  {
    number: "02",
    title: "Social Media Campaign",
    description:
      "Plan a practical social media campaign covering content, audience growth and engagement.",
  },
  {
    number: "03",
    title: "Paid Ads Project",
    description:
      "Work through campaign setup, optimization, budget management and ROI tracking.",
  },
  {
    number: "04",
    title: "Email Marketing Funnel",
    description:
      "Build an email campaign flow using list building, automation, funnels and performance tracking.",
  },
  {
    number: "05",
    title: "Marketing Strategy Capstone",
    description:
      "Bring branding, content, social, paid advertising, SEO and analytics together in one complete marketing strategy.",
  },
];

const testimonials = [
  {
    quote:
      "The structured learning approach makes it easier to understand digital marketing channel by channel and then connect everything into one strategy.",
    name: "Learner",
    role: "Digital Marketing",
  },
  {
    quote:
      "Working through practical SEO, social media and paid advertising projects makes the concepts much easier to apply.",
    name: "Learner",
    role: "Performance Marketing",
  },
  {
    quote:
      "The combination of content, analytics and real-world projects gives a clearer path from learning to execution.",
    name: "Learner",
    role: "Digital Marketing",
  },
];

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

function DigitalMarketing() {
  const [openModule, setOpenModule] = useState(1);
  const [activeWeek, setActiveWeek] = useState(0);
  const weekRefs = useRef([]);

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
                  Digital Marketing Program
                </span>
                <span className="h-px w-10 bg-[#F88118]" />
              </div>

              <h1
                data-reveal
                className="course-reveal text-[58px] font-black leading-[0.98] tracking-[-0.035em] sm:text-[82px] lg:text-[118px]"
              >
                Digital Marketing
                <br />
                <span className="course-hero-gradient course-hero-text mt-3 inline-block max-w-full sm:mt-4">
                  Grow Brands & Drive Results
                </span>
              </h1>

              <p
                data-reveal
                className="course-reveal mx-auto mt-9 max-w-[760px] text-[16px] leading-8 text-[#53657D] sm:text-[18px]"
              >
                Build practical digital marketing skills across SEO, paid
                advertising, social media, content, email and analytics.
              </p>

              <div
                data-reveal
                className="course-reveal mt-10 flex flex-wrap justify-center gap-3"
              >
                {["6 Months", "24 Weeks", "Beginner → Intermediate"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#173873]/15 bg-white/60 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em]"
                    >
                      {item}
                    </span>
                  )
                )}
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
                        detail: { course: "Digital Marketing" },
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
                      .getElementById("digital-marketing-curriculum")
                      ?.scrollIntoView({ behavior: "smooth" })
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
            TOOLS / CHANNELS MARQUEE
        ====================================================== */}
        <section className="overflow-hidden border-y border-[#173873]/10 bg-white py-7">
          <div className="mb-4 text-center text-[9px] font-bold uppercase tracking-[0.28em] text-[#6E6558]">
            Tools & Channels You'll Master
          </div>

          <div className="relative flex overflow-hidden">
            <div className="course-marquee flex min-w-max items-center gap-10">
              {[...skills, ...skills].map(([skill, Icon], index) => (
                <React.Fragment key={`${skill}-${index}`}>
                  <span className="flex items-center gap-3 whitespace-nowrap font-serif text-[24px] font-semibold text-[#173873]">
                    <Icon className="text-[23px] text-[#F88118] transition-transform duration-300 hover:scale-125" />
                    {skill}
                  </span>
                  <span className="text-[13px] text-[#173873]/20">✦</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            STATS
        ====================================================== */}
        <section className="bg-[#F7F2EA] px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-[1200px]">
            <SectionLabel>Inside the Program</SectionLabel>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["06", "Months", "Structured digital marketing journey"],
                ["24", "Weeks", "Progressive curriculum"],
                ["05", "Project Tracks", "From SEO to complete marketing strategy"],
              ].map(([number, label, description], index) => (
                <div
                  key={label}
                  data-reveal
                  className={`course-reveal course-stat-card group relative overflow-hidden rounded-[28px] border border-[#173873]/10 bg-gradient-to-br from-[#173873] via-[#214A86] to-[#F88118] p-[1px] ${
                    index === 1 ? "course-reveal-delay-1" : ""
                  } ${index === 2 ? "course-reveal-delay-2" : ""}`}
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
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CURRICULUM
        ====================================================== */}
        <section
          id="digital-marketing-curriculum"
          className="bg-white px-6 py-24 sm:px-10 lg:px-16"
        >
          <div className="mx-auto max-w-[1250px]">
            <div
              data-reveal
              className="course-reveal mb-14 max-w-[850px]"
            >
              <SectionLabel>Curriculum</SectionLabel>

              <h2 className="font-serif text-[48px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[68px]">
                A structured path to
                <span className="course-gradient-text italic">
                  {" "}Digital Marketing mastery.
                </span>
              </h2>

              <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-[#6E6558]">
                Explore the complete learning journey and open any module
                to see the detailed topics covered inside the program.
              </p>
            </div>

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
                        setOpenModule(isOpen ? null : module.id)
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
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#173873]/10 transition-all duration-500 ${
                          isOpen
                            ? "rotate-180 bg-[#173873] text-white"
                            : "bg-white text-[#173873]"
                        }`}
                      >
                        ↓
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                        isOpen
                          ? "max-h-[700px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="border-t border-[#173873]/10 px-5 pb-7 pt-6 sm:px-7">
                        <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                          {module.topics.map((topic) => (
                            <div
                              key={topic}
                              className="flex items-start gap-3 text-[13px] leading-6 text-[#53657D]"
                            >
                              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#F88118]" />
                              {topic}
                            </div>
                          ))}
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
            24-WEEK ROADMAP
        ====================================================== */}
        <section className="bg-[#F7F2EA] px-6 py-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-[1250px]">
            <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
              <div className="self-start lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] lg:flex lg:items-center">
                <div className="course-roadmap-sticky rounded-[28px] border border-[#173873]/10 bg-white/45 p-7 backdrop-blur-sm sm:p-9">
                  <SectionLabel>Learning Journey</SectionLabel>

                  <h2 className="font-serif text-[48px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[64px]">
                    Learn in
                    <span className="course-gradient-text italic">
                      {" "}stages.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-[430px] text-[15px] leading-7 text-[#6E6558]">
                    A website-structured progression built from the topics
                    provided in the Digital Marketing syllabus.
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
              </div>

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
                          {week.modules.map((module) => (
                            <span
                              key={module}
                              className="rounded-full bg-[#F1ECE4] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#53657D]"
                            >
                              {module}
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
            <SectionLabel>Projects</SectionLabel>

            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <h2 className="max-w-[800px] font-serif text-[50px] font-semibold leading-[0.98] tracking-[-0.04em] text-[#173873] sm:text-[70px]">
                Don't just learn.
                <br />
                <span className="course-gradient-text italic">Build.</span>
              </h2>

              <p className="max-w-[380px] text-[14px] leading-7 text-[#53657D]">
                The syllabus includes channel-focused projects, campaign
                work, analytics and a complete digital marketing capstone.
              </p>
            </div>

            <div className="mt-16 grid gap-px overflow-hidden rounded-[28px] border border-[#173873]/10 bg-[#173873]/10 md:grid-cols-2">
              {projects.map((project, index) => (
                <div
                  key={project.number}
                  data-reveal
                  className={`course-reveal course-project-card group relative bg-[#F7F2EA] p-7 text-[#173873] sm:p-9 ${
                    index % 2 ? "course-reveal-delay-1" : ""
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
              <SectionLabel>Certification</SectionLabel>

              <h2 className="mx-auto max-w-[850px] font-serif text-[48px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[70px]">
                Get certified.
                <br />
                <span className="course-gradient-text italic">
                  Showcase your skills.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-[600px] text-[14px] leading-7 text-[#53657D]">
                Complete the program and receive a certificate that
                represents your learning journey.
              </p>
            </div>

            <div className="relative mt-16 overflow-hidden rounded-[32px] border border-[#173873]/10 bg-gradient-to-br from-[#F7F2EA] via-[#FDF8F1] to-[#F7E7D6] p-8 sm:p-12 lg:p-16">
              <div className="absolute right-[-100px] top-[-100px] h-[350px] w-[350px] rounded-full bg-[#F88118]/10 blur-[100px]" />

              <div className="grid items-center gap-14 lg:grid-cols-2">
                <div className="relative">
                  <h3 className="font-serif text-[42px] font-semibold leading-[1] tracking-[-0.04em] text-[#173873] sm:text-[55px]">
                    Earn your
                    <br />
                    <span className="course-gradient-text">completion</span>
                    <br />
                    certificate.
                  </h3>

                  <div className="mt-8 space-y-5">
                    {[
                      "Complete the structured learning journey",
                      "Build practical projects",
                      "Demonstrate your marketing skills",
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
            WHY SKILLPARADISE
        ====================================================== */}
        <section className="bg-[#F7F2EA] px-6 pb-24 text-[#173873] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-[1250px]">
            <div className="text-center">
              <SectionLabel>Why SkillParadise</SectionLabel>

              <h2 className="mx-auto max-w-[900px] font-serif text-[48px] font-semibold leading-[0.98] tracking-[-0.04em] text-[#173873] sm:text-[68px]">
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
                "Structured Digital Marketing Curriculum",
                "Hands-on Projects",
                "Multi-Channel Marketing Learning",
                "Career Guidance",
                "Interview Preparation",
                "Certification",
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
            TESTIMONIALS
        ====================================================== */}
        <section className="bg-white px-6 py-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-[1250px]">
            <SectionLabel>Student Stories</SectionLabel>

            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <h2 className="max-w-[800px] font-serif text-[48px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[66px]">
                What our
                <span className="course-gradient-text italic">
                  {" "}learners say.
                </span>
              </h2>

              <p className="max-w-[330px] text-[13px] leading-6 text-[#6E6558]">
                Real learner stories can be connected here once the
                course-specific testimonials are finalized.
              </p>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
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
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#F7F2EA] px-6 py-28 sm:px-10 lg:px-16">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F88118]/10 blur-[130px]" />

          <div className="relative mx-auto max-w-[900px] text-center">
            <SectionLabel>Start Your Journey</SectionLabel>

            <h2 className="font-serif text-[52px] font-semibold leading-[0.95] tracking-[-0.045em] sm:text-[78px]">
              Ready to become a
              <br />
              <span className="course-gradient-text italic">
                Digital Marketing Expert?
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-[600px] text-[15px] leading-7 text-[#6E6558]">
              Build practical marketing skills across SEO, social media,
              paid advertising, content, email and analytics.
            </p>

            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent("open-request-call-modal", {
                    detail: { course: "Digital Marketing" },
                  })
                )
              }
              className="mt-9 rounded-full bg-[#173873] px-9 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F88118]"
            >
              Enroll in Digital Marketing →
            </button>
          </div>
        </section>

        {/* =====================================================
            PAGE-LOCAL ANIMATION STYLES
        ====================================================== */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&display=swap');

          .course-hero-text {
            font-family:
              "Barlow Condensed",
              "Arial Narrow",
              Impact,
              sans-serif;
            font-weight: 900;
            display: inline-block;
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
            filter: drop-shadow(0 8px 24px rgba(248,129,24,0.14));
          }

          @keyframes courseHeroGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes courseHeroFloat {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-5px) scale(1.012); }
          }

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
            animation: courseGradient 7s ease-in-out infinite;
          }

          .course-green-gradient {
            background:
              linear-gradient(
                110deg,
                #173873 0%,
                #F88118 32%,
                #FFB347 52%,
                #173873 75%,
                #F88118 100%
              );
            background-size: 220% auto;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: courseGradient 7s ease-in-out infinite;
          }

          @keyframes courseGradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          .course-marquee {
            animation: courseMarquee 38s linear infinite;
          }

          .course-marquee:hover {
            animation-play-state: paused;
          }

          @keyframes courseMarquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          .course-reveal {
            opacity: 0;
            transform: translateY(42px) scale(.985);
            transition:
              opacity 850ms cubic-bezier(.22,1,.36,1),
              transform 850ms cubic-bezier(.22,1,.36,1);
          }

          .course-revealed {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          .course-reveal-delay-1 {
            transition-delay: 120ms;
          }

          .course-reveal-delay-2 {
            transition-delay: 240ms;
          }

          .course-stat-card {
            will-change: transform, opacity;
          }

          .course-stat-card:hover {
            transform: translateY(-8px) scale(1.012);
            box-shadow: 0 30px 70px -42px rgba(23,56,115,.65);
          }

          .course-stat-card:hover .course-stat-number {
            animation: courseNumberPulse 700ms cubic-bezier(.22,1,.36,1);
          }

          @keyframes courseNumberPulse {
            0%, 100% { transform: translateY(0); }
            45% { transform: translateY(-7px); }
          }

          .course-curriculum-card {
            will-change: transform;
          }

          .course-curriculum-card:hover {
            transform: translateX(6px);
          }

          .course-phase-card {
            min-height: 205px;
            will-change: transform, opacity;
          }

          .course-phase-card:not(.course-phase-active) {
            opacity: .76;
          }

          .course-phase-card.course-phase-active {
            opacity: 1;
            transform: translateX(8px);
          }

          .course-roadmap-sticky {
            transition:
              transform 500ms cubic-bezier(.22,1,.36,1),
              box-shadow 500ms ease;
          }

          .course-roadmap-sticky:hover {
            transform: translateY(-3px);
            box-shadow: 0 25px 65px -48px rgba(23,56,115,.45);
          }

          .course-pulse-dot {
            animation: coursePulseDot 2s ease-in-out infinite;
          }

          @keyframes coursePulseDot {
            0%, 100% {
              box-shadow: 0 0 0 0 rgba(248,129,24,.28);
            }
            50% {
              box-shadow: 0 0 0 7px rgba(248,129,24,.08);
            }
          }

          .course-project-card {
            transition:
              background-color 500ms ease,
              transform 500ms cubic-bezier(.22,1,.36,1);
          }

          .course-project-card:hover {
            transform: translateY(-4px);
            background:
              linear-gradient(
                135deg,
                #173873 0%,
                #1F4D8C 35%,
                #F88118 100%
              );
            color: #ffffff;
          }

          .course-project-card:hover h3,
          .course-project-card:hover p,
          .course-project-card:hover span {
            color: #ffffff;
          }

          @media (max-width: 1023px) {
            .course-phase-card.course-phase-active {
              transform: translateY(-3px);
            }
          }

          @media (max-width: 640px) {
            .course-hero-text {
              letter-spacing: -0.02em;
            }

            .course-marquee {
              animation-duration: 30s;
            }

            .course-phase-card {
              min-height: 0;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .course-hero-text,
            .course-gradient-text,
            .course-green-gradient,
            .course-marquee,
            .course-pulse-dot {
              animation: none;
            }

            .course-reveal {
              opacity: 1;
              transform: none;
              transition: none;
            }

            .course-phase-card:not(.course-phase-active) {
              opacity: 1;
            }

            .course-phase-card.course-phase-active {
              transform: none;
            }
          }
        `}</style>
      </main>

      <Footer />
    </>
  );
}

export default DigitalMarketing;
