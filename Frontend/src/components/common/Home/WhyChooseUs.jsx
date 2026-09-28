import { useEffect, useRef, useState } from "react";

const features = [
  {
    number: "01",
    title: "Flexible Learning",
    description:
      "No fixed schedules, no expiring access. Learn at your own pace and continue learning whenever it works for you.",
    tag: "Self-Paced",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <path d="M8 12H32V30H8Z" />
        <path d="M8 20H32" />
        <path d="M16 12V30" />
      </svg>
    ),
  },

  {
    number: "02",
    title: "Expert Instructors",
    description:
      "Learn from experienced professionals who bring practical knowledge and industry-focused guidance into the learning experience.",
    tag: "Industry-Led",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <circle cx="14" cy="14" r="6" />
        <path d="M6 32C6 26 10 22 14 22C18 22 22 26 22 32" />
        <circle cx="28" cy="16" r="4.5" />
        <path d="M23 32C23 27 26 24 28 24" />
      </svg>
    ),
  },

  {
    number: "03",
    title: "Diverse Courses",
    description:
      "Explore a variety of learning paths designed for different skills, interests and career goals.",
    tag: "Explore All",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <rect x="7" y="7" width="11" height="11" />
        <rect x="22" y="7" width="11" height="11" />
        <rect x="7" y="22" width="11" height="11" />
        <rect x="22" y="22" width="11" height="11" />
      </svg>
    ),
  },

  {
    number: "04",
    title: "Updated Curriculum",
    description:
      "Learning content is continuously improved to keep pace with changing technologies, tools and industry requirements.",
    tag: "Always Current",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <path d="M8 20A12 12 0 0 1 28 11L31 10L30 14" />
        <path d="M32 20A12 12 0 0 1 12 29L9 30L10 26" />
      </svg>
    ),
  },

  {
    number: "05",
    title: "Practical Projects",
    description:
      "Build practical, portfolio-ready projects that help turn what you learn into experience you can actually showcase.",
    tag: "Build To Learn",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <path d="M10 30V18L20 10L30 18V30Z" />
        <path d="M16 30V22H24V30" />
      </svg>
    ),
  },

  {
    number: "06",
    title: "Interactive Community",
    description:
      "Connect with peers, mentors and fellow learners so your learning journey continues beyond individual lessons.",
    tag: "Learn Together",
    icon: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <circle cx="14" cy="14" r="5" />
        <circle cx="27" cy="14" r="5" />
        <path d="M6 32C6 26 10 23 14 23" />
        <path d="M34 32C34 26 30 23 26 23" />
        <path d="M13 23C14 22 16 22 17 23" />
        <path d="M23 23C24 22 26 22 27 23" />
      </svg>
    ),
  },
];

function WhyToChooseUs() {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const cards =
      sectionRef.current?.querySelectorAll("[data-feature-card]");

    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);

            setVisibleCards((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F1EAE0] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* Background dotted pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(22,34,63,0.06) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Decorative orange glow */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#ff7417]/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1240px]">

        {/* ================= HEADER ================= */}

        <div className="mb-12">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#173873] sm:text-[13px]">
              Why Choose Skill Paradise?
            </span>
          </div>

          <div className="flex flex-col gap-6 border-b border-[#173873]/15 pb-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">

            <h2 className="max-w-[680px] font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-[#173873] sm:text-5xl lg:text-[58px]">
              Learning, built for your{" "}
              <span className="italic font-medium text-[#ff7417]">
                growth.
              </span>
            </h2>

            <p className="max-w-[330px] text-base leading-7 text-[#6E6558] sm:text-[17px]">
              Everything you need to turn learning into practical skills,
              confidence and meaningful career progress.
            </p>

          </div>
        </div>

        {/* ================= BENTO GRID ================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            md:grid-cols-2
            lg:grid-cols-10
            lg:grid-rows-[260px_260px_180px]
            lg:column-gap-[16px]
            lg:row-gap-[14px]
          "
        >
          {features.map((feature, index) => {
            const isVisible = visibleCards.includes(index);

            return (
              <article
                key={feature.number}
                data-feature-card
                data-index={index}
                className={`
                  group
                  relative
                  overflow-hidden
                  border-[1.5px]
                  border-[#173873]/[0.14]
                  bg-[#FAF6EF]
                  p-7
                  transition-all
                  duration-700
                  ease-[cubic-bezier(.22,1,.36,1)]
                  hover:-translate-y-1.5
                  hover:border-[#ff7417]
                  hover:bg-white
                  hover:shadow-[0_22px_40px_-22px_rgba(22,34,63,0.35)]
                  sm:p-8
                  lg:p-7

                  ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }

                  ${
                    index === 0
                      ? `
                        md:col-span-2
                        lg:col-span-4
                        lg:row-span-2
                      `
                      : index === 5
                      ? `
                        md:col-span-2
                        lg:col-span-10
                        lg:row-span-1
                      `
                      : `
                        lg:col-span-3
                        lg:row-span-1
                      `
                  }
                `}
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 26px) 0, 100% 26px, 100% 100%, 0 100%)",
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                {/* Corner fold */}
                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-[26px]
                    w-[26px]
                    bg-[#E8DFD1]
                    transition-colors
                    duration-300
                    group-hover:bg-[#ff7417]
                  "
                  style={{
                    clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                  }}
                />

                {/* Ghost number */}
                <span
                  className={`
                    pointer-events-none
                    absolute
                    bottom-[-14px]
                    right-[14px]
                    font-serif
                    font-bold
                    leading-none
                    tracking-tight
                    text-[#173873]
                    opacity-[0.05]
                    transition-all
                    duration-500
                    ease-[cubic-bezier(.22,1,.36,1)]
                    group-hover:-translate-y-1
                    group-hover:text-[#ff7417]
                    group-hover:opacity-[0.14]

                    ${
                      index === 0
                        ? "text-[150px]"
                        : index === 5
                        ? "text-[80px]"
                        : "text-[96px]"
                    }
                  `}
                >
                  {feature.number}
                </span>

                {/* ================= CARD CONTENT ================= */}

                <div
                  className={`
                    relative
                    z-10
                    h-full

                    ${
                      index === 0
                        ? `
                          flex
                          flex-col
                          justify-center
                          lg:items-center
                          lg:text-center
                          lg:px-5
                        `
                        : index === 5
                        ? `
                          flex
                          flex-col
                          justify-center
                          lg:flex-row
                          lg:items-center
                          lg:gap-7
                        `
                        : `
                          flex
                          flex-col
                          justify-center
                        `
                    }
                  `}
                >

                  {/* Icon */}
                  <div
                    className={`
                      relative
                      shrink-0
                      text-[#173873]
                      transition-all
                      duration-500
                      ease-[cubic-bezier(.22,1,.36,1)]
                      group-hover:translate-x-0.5
                      group-hover:text-[#ff7417]

                      ${
                        index === 0
                          ? "mb-5 h-[46px] w-[46px]"
                          : "mb-3 h-[36px] w-[36px]"
                      }

                      ${index === 0 ? "lg:mx-auto" : ""}

                      ${index === 5 ? "lg:mb-0" : ""}
                    `}
                  >
                    {feature.icon}
                  </div>

                  {/* Text content */}
                  <div
                    className={`
                      relative
                      z-10

                      ${index === 0 ? "lg:flex lg:flex-col lg:items-center" : ""}
                    `}
                  >

                    <h3
                      className={`
                        font-serif
                        font-semibold
                        tracking-tight
                        text-[#173873]

                        ${
                          index === 0
                            ? "text-[30px] leading-tight sm:text-[32px]"
                            : index === 5
                            ? "text-[24px] leading-tight sm:text-[28px] lg:text-[25px]"
                            : "text-[24px] leading-tight sm:text-[28px] lg:text-[23px]"
                        }
                      `}
                    >
                      {feature.title}
                    </h3>

                    {/* Orange rule */}
                    <div
                      className={`
                        my-3
                        h-[2px]
                        w-[22px]
                        bg-[#ff7417]
                        transition-all
                        duration-500
                        ease-[cubic-bezier(.22,1,.36,1)]
                        group-hover:w-[46px]

                        ${index === 0 ? "lg:mx-auto" : ""}
                      `}
                    />

                    <p
                      className={`
                        max-w-[34ch]
                        text-[16px]
                        leading-[1.7]
                        text-[#6E6558]
                        lg:text-[14px]
                        lg:leading-[1.5]

                        ${index === 0 ? "lg:max-w-[38ch]" : ""}
                      `}
                    >
                      {feature.description}
                    </p>

                    {/* Tag */}
                    <div
                      className={`
                        mt-5
                        flex
                        items-center
                        gap-1.5
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.1em]
                        text-[#173873]
                        opacity-55
                        transition-all
                        duration-300
                        group-hover:gap-2.5
                        group-hover:text-[#ff7417]
                        group-hover:opacity-100
                        lg:mt-3

                        ${index === 0 ? "lg:justify-center" : ""}
                      `}
                    >
                      {feature.tag}

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-3 w-3"
                      >
                        <path d="M5 12H19" />
                        <path d="M13 6L19 12L13 18" />
                      </svg>
                    </div>

                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyToChooseUs;
