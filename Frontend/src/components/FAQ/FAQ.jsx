import { useState } from "react";

const faqData = [
  {
    number: "01",
    question: "How do I enroll in a course?",
    answer:
      'Enrolling is simple! Browse our course catalog, select the course you\'re interested in, and click "Enroll Now". You\'ll be guided through a quick registration process, and once completed, you\'ll have immediate access to all course materials.',
  },
  {
    number: "02",
    question: "Do I get lifetime access to the course?",
    answer:
      "Yes! Once you enroll in a course, you get lifetime access to all course materials, including video lectures, downloadable resources, and any future updates. Learn at your own pace without any time restrictions.",
  },
  {
    number: "03",
    question: "Are the courses suitable for beginners?",
    answer:
      "Absolutely! We offer courses for all skill levels - from complete beginners to advanced professionals. Each course clearly indicates its difficulty level, and many include prerequisites to help you choose the right starting point.",
  },
  {
    number: "04",
    question: "Can I get a certificate after completing a course?",
    answer:
      "Yes! Upon successful completion of a course, including all assignments and assessments, you'll receive a certificate of completion that you can add to your LinkedIn profile or resume.",
  },
  {
    number: "05",
    question: "What if I need help during the course?",
    answer:
      "We have a dedicated support team and active community forums where you can ask questions, get help from instructors, and connect with fellow learners. Most courses also include Q&A sessions with instructors.",
  },
  {
    number: "06",
    question: "Can I access courses on mobile devices?",
    answer:
      "Yes! Our platform is fully responsive and works seamlessly on desktop, tablet, and mobile devices. You can learn on the go and sync your progress across all your devices.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#F7F2EA] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      {/* =====================================================
          BACKGROUND PATTERN
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(23,56,115,0.055) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Soft orange glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#F88118]/[0.035] blur-3xl" />

      {/* Soft navy glow */}
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#173873]/[0.025] blur-3xl" />

      {/* =====================================================
          SUBTLE QUESTION MARK DOODLE
      ====================================================== */}

      <div className="pointer-events-none absolute right-[5%] top-[14%] hidden rotate-[8deg] text-[#173873]/[0.045] lg:block">
        <svg
          viewBox="0 0 120 160"
          className="h-40 w-32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M35 48C36 23 55 10 76 17C96 24 102 48 88 65C79 76 65 80 61 96"
            strokeLinecap="round"
          />
          <circle cx="60" cy="119" r="2.5" fill="currentColor" stroke="none" />
          <path d="M20 38C17 33 14 30 10 28" strokeLinecap="round" />
          <path d="M91 19C96 16 100 13 102 9" strokeLinecap="round" />
        </svg>
      </div>

      {/* Small orange decorative mark */}
      <div className="pointer-events-none absolute bottom-[14%] right-[9%] hidden rotate-[-12deg] text-[#F88118]/10 lg:block">
        <svg
          viewBox="0 0 80 80"
          className="h-16 w-16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        >
          <path d="M10 40C25 25 55 25 70 40" strokeLinecap="round" />
          <path d="M18 52C31 62 49 62 62 52" strokeLinecap="round" />
          <circle cx="18" cy="25" r="3" />
          <circle cx="62" cy="25" r="3" />
        </svg>
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1180px]">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-12 lg:mb-14">
          {/* Section Label */}

          <div className="mb-5 flex items-center gap-3">
            <span className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#173873] sm:text-[13px]">
              Frequently Asked Questions
            </span>

            <span className="h-[2px] w-7 bg-[#F88118]" />
          </div>

          {/* Heading + Supporting Content */}

          <div className="flex flex-col gap-6 border-b border-[#173873]/15 pb-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <h2 className="max-w-[700px] font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-[#173873] sm:text-5xl lg:text-[58px]">
              Everything you need to know{" "}
              <span className="font-medium italic text-[#F88118]">
                before you start.
              </span>
            </h2>

            <p className="max-w-[350px] text-[15px] leading-7 text-[#6E6558] sm:text-base">
              Find clear answers to the most common questions about our
              courses, learning experience and everything you need to get
              started with Skill Paradise.
            </p>
          </div>
        </div>

        {/* =====================================================
            FAQ LIST
        ====================================================== */}

        <div className="border-t border-[#173873]/15">
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <article
                key={faq.number}
                className={`
                  group relative border-b border-[#173873]/15
                  transition-colors duration-500
                  ${isOpen ? "bg-[#FAF6EF]" : "bg-transparent"}
                `}
              >
                {/* =================================================
                    QUESTION ROW
                ================================================== */}

                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="relative flex w-full items-center gap-5 px-2 py-6 text-left sm:gap-7 sm:px-4 sm:py-7 lg:px-6 lg:py-8"
                >
                  {/* Number */}

                  <span
                    className={`
                      w-[38px] shrink-0 font-serif text-[15px]
                      font-semibold transition-colors duration-500
                      sm:w-[46px] sm:text-[17px]
                      ${
                        isOpen
                          ? "text-[#F88118]"
                          : "text-[#173873]/30 group-hover:text-[#F88118]"
                      }
                    `}
                  >
                    {faq.number}
                  </span>

                  {/* Question */}

                  <span
                    className={`
                      flex-1 pr-4 font-serif text-[21px] font-semibold
                      leading-tight tracking-tight
                      transition-all duration-500
                      sm:text-[24px]
                      lg:text-[27px]
                      ${
                        isOpen
                          ? "text-[#173873]"
                          : "text-[#173873] group-hover:translate-x-1"
                      }
                    `}
                  >
                    {faq.question}
                  </span>

                  {/* Orange Accent */}

                  <span
                    className={`
                      absolute bottom-0 left-0 h-[2px]
                      bg-[#F88118]
                      transition-all duration-500
                      ${
                        isOpen
                          ? "w-16"
                          : "w-0 group-hover:w-10"
                      }
                    `}
                  />

                  {/* Plus / Minus */}

                  <span
                    className={`
                      relative flex h-10 w-10 shrink-0
                      items-center justify-center
                      border transition-all duration-500
                      sm:h-11 sm:w-11
                      ${
                        isOpen
                          ? "rotate-180 border-[#F88118] bg-[#F88118] text-white"
                          : "border-[#173873]/15 bg-[#FAF6EF] text-[#173873] group-hover:border-[#F88118] group-hover:text-[#F88118]"
                      }
                    `}
                  >
                    <span
                      className={`
                        absolute h-[1.5px] w-4
                        bg-current transition-transform duration-300
                      `}
                    />

                    <span
                      className={`
                        absolute h-4 w-[1.5px]
                        bg-current transition-transform duration-300
                        ${isOpen ? "scale-y-0" : "scale-y-100"}
                      `}
                    />
                  </span>
                </button>

                {/* =================================================
                    ANSWER
                ================================================== */}

                <div
                  className={`
                    grid transition-[grid-template-rows]
                    duration-500 ease-[cubic-bezier(.22,1,.36,1)]
                    ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="px-2 pb-7 pl-[65px] sm:px-4 sm:pb-8 sm:pl-[77px] lg:px-6 lg:pb-9 lg:pl-[92px]">
                      <div className="flex max-w-[800px] items-start gap-4 sm:gap-5">
                        {/* Orange Vertical Accent */}

                        <span className="mt-1 h-10 w-[2px] shrink-0 bg-[#F88118]" />

                        {/* Answer */}

                        <p className="text-[14px] leading-7 text-[#6E6558] sm:text-[15px] sm:leading-7 lg:text-[16px]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM SUPPORTING CONTENT
        ====================================================== */}

        <div className="mt-9 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <p className="max-w-[500px] text-[13px] leading-6 text-[#6E6558]">
            Still have something you'd like to know? We're here to help you
            make the right learning choice.
          </p>

          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("open-request-call-modal"))}
            className="group flex shrink-0 items-center gap-3 border-b border-[#173873]/25 pb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#173873] transition-all duration-300 hover:border-[#F88118] hover:text-[#F88118]"
          >
            Get In Touch

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
          </button>
        </div>
      </div>

      {/* =====================================================
          ACCESSIBILITY
      ====================================================== */}

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}

export default FAQ;
