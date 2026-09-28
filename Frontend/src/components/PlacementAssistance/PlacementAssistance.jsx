import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./PlacementAssistance.css";

const cards = [
  {
    eyebrow: "BUILD YOUR FOUNDATION",
    color: "bg-white",
    text: "text-[#173873]",
    border: "border-[#e8edf4]",
    title: "Start Your Career With The Right Support",
    description:
      "Get dedicated guidance from the beginning and understand exactly what it takes to become job ready.",
    points: [
      {
        icon: "◉",
        title: "Dedicated Placement Support",
        text: "Personalized guidance throughout your placement journey.",
      },
      {
        icon: "✦",
        title: "Job-Oriented Training",
        text: "Learn practical skills aligned with real industry requirements.",
      },
    ],
  },

  {
    eyebrow: "BUILD YOUR PROFILE",
    color: "bg-[#ff7417]",
    text: "text-white",
    border: "border-[#ff7417]",
    title: "Turn Your Skills Into A Strong Profile",
    description:
      "Your skills need to be presented properly. We help you build a profile that gets noticed.",
    points: [
      {
        icon: "▤",
        title: "Resume & CV Building",
        text: "Create a professional resume designed to showcase your strengths.",
      },
      {
        icon: "◎",
        title: "Mock Interviews & HR Rounds",
        text: "Practice real interview situations and build confidence before the actual interview.",
      },
    ],
  },

  {
    eyebrow: "BECOME INTERVIEW READY",
    color: "bg-[#173873]",
    text: "text-white",
    border: "border-[#173873]",
    title: "Walk Into Interviews With Confidence",
    description:
      "Preparation goes beyond technical knowledge. We prepare you for the complete interview experience.",
    points: [
      {
        icon: "✓",
        title: "Interview Preparation",
        text: "Prepare for technical interviews, coding rounds and practical assessments.",
      },
      {
        icon: "◌",
        title: "Soft Skills Training",
        text: "Improve communication, confidence, presentation and professional behaviour.",
      },
    ],
  },

  {
    eyebrow: "100% JOB ASSISTANCE",
    color: "bg-[#fff0df]",
    text: "text-[#173873]",
    border: "border-[#f4dcc2]",
    title: "From Training To Your First Job.",
    description:
      "We go beyond technical training with structured career support that helps you become job ready and confidently transition into the IT industry.",
    points: [
      {
        icon: "↗",
        title: "Complete Job Preparation",
        text: "Resume building, LinkedIn and job portal optimization, interview preparation and mock interviews.",
      },
      {
        icon: "♢",
        title: "Career Gap Guidance",
        text: "Get personalized guidance and assistance to restart your career and transition confidently into IT.",
      },
    ],
  },
];

function PlacementAssistance() {
  const stageRef = useRef(null);

  useEffect(() => {
    const panels = Array.from(stageRef.current.querySelectorAll(".placement-panel"));
    let frame = 0;

    const measure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        // Tall cards must scroll past their top before their bottom pins.
        // Read all heights before writing styles to avoid repeated layout work.
        const offsets = panels.map((panel) =>
          Math.min(20, window.innerHeight - panel.offsetHeight - 20)
        );
        panels.forEach((panel, index) => {
          panel.style.setProperty("--placement-pin-top", `${offsets[index]}px`);
        });
      });
    };

    const observer = new ResizeObserver(measure);
    panels.forEach((panel) => observer.observe(panel));
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="relative bg-[#fffaf5] py-14 sm:py-16 lg:py-20">
      <div className="relative mx-auto max-w-[1180px] px-5 pb-6 sm:px-8 lg:px-10">
        <div className="mb-6 border-b border-[#173873]/15 pb-7 sm:pb-8">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#173873] sm:text-[13px]">
              Placement Assistance
            </span>
            <span className="h-[2px] w-7 bg-[#F88118]" />
          </div>

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <h2 className="max-w-[700px] font-serif text-3xl font-semibold leading-[1.08] tracking-tight text-[#173873] sm:text-5xl lg:text-[58px]">
              Build your path to{" "}
              <span className="font-medium italic text-[#F88118]">
                the right career.
              </span>
            </h2>

            <p className="max-w-[350px] text-sm leading-6 text-[#6E6558] sm:text-base sm:leading-7">
              Get structured guidance, practical preparation and job-ready
              support that helps you move forward with confidence.
            </p>
          </div>
        </div>
      </div>

      <div className="placement-panel-stack">
        <div ref={stageRef} className="placement-panel-stage mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-10">
        {cards.map((card, index) => {
              const isLastCard = index === cards.length - 1;

              return (
                <div
                  className="placement-panel"
                  key={card.eyebrow}
                  style={{ zIndex: index + 1 }}
                >
                <article
                  className={`
                    placement-assistance-slide
                    overflow-hidden
                    rounded-[24px]
                    border
                    shadow-[0_25px_80px_rgba(23,56,115,0.10)]
                    sm:rounded-[30px]
                    ${card.color}
                    ${card.border}
                  `}
                >
                  <div
                    className={`
                      flex h-[58px] items-center border-b px-5
                      sm:h-[73px] sm:px-10 lg:px-12
                      ${
                        card.color === "bg-white"
                          ? "border-[#e7ebf2]"
                          : card.color === "bg-[#fff0df]"
                          ? "border-[#f0d8bd]"
                          : "border-white/20"
                      }
                    `}
                  >
                    <span
                      className={`
                        text-[9px] font-bold tracking-[0.22em] sm:text-xs
                        ${card.text}
                      `}
                    >
                      {card.eyebrow}
                    </span>
                  </div>

                  <div
                    className="
                      placement-slide-content grid min-h-[382px] grid-cols-1 gap-3 px-5 py-4
                      sm:min-h-[410px] sm:gap-5 sm:px-10 sm:py-8
                      md:grid-cols-[1.05fr_0.95fr] md:gap-6 md:px-10 md:py-8
                      lg:gap-8 lg:px-14 lg:py-14 lg:min-h-[487px]
                    "
                  >
                    <div className="flex min-h-0 flex-col justify-center">
                      <div
                        className={`
                          mb-3 h-1 w-12 shrink-0 rounded-full sm:mb-5 sm:w-14
                          ${
                            card.color === "bg-[#ff7417]"
                              ? "bg-white"
                              : "bg-[#ff7417]"
                          }
                        `}
                      />

                      <h2
                        className={`
                          max-w-[650px] text-[24px] font-bold leading-[1.08]
                          tracking-tight sm:text-4xl md:text-[2.4rem] lg:text-6xl
                          ${isLastCard ? "max-sm:text-[22px]" : ""}
                          ${card.text}
                        `}
                      >
                        {card.title}
                      </h2>

                      <p
                        className={`
                          mt-3 max-w-[600px] text-[13px] leading-[1.55]
                          sm:mt-6 sm:text-base sm:leading-7 lg:text-lg
                          ${
                            isLastCard
                              ? "max-sm:mt-2 max-sm:text-[12px] max-sm:leading-[1.42]"
                              : ""
                          }
                          ${
                            card.color === "bg-[#173873]"
                              ? "text-white/75"
                              : card.color === "bg-[#ff7417]"
                              ? "text-white/80"
                              : "text-slate-600"
                          }
                        `}
                      >
                        {card.description}
                      </p>
                    </div>

                    <div
                      className={`
                        flex min-h-0 flex-col justify-center gap-3
                        sm:gap-4 md:gap-3
                        ${isLastCard ? "max-sm:gap-2.5" : ""}
                      `}
                    >
                      {card.points.map((point) => (
                        <div
                          key={point.title}
                          className={`
                            group shrink-0 rounded-2xl border p-3.5
                            backdrop-blur-sm transition-all duration-300
                            hover:-translate-y-1 sm:p-5 md:p-4
                            ${isLastCard ? "max-sm:p-3" : ""}
                            ${
                              card.color === "bg-white"
                                ? "border-slate-200 bg-slate-50/80 hover:bg-white"
                                : card.color === "bg-[#ff7417]"
                                ? "border-white/25 bg-white/10 hover:bg-white/15"
                                : card.color === "bg-[#173873]"
                                ? "border-white/15 bg-white/10 hover:bg-white/15"
                                : "border-[#e7d4be] bg-white/60 hover:bg-white"
                            }
                          `}
                        >
                          <div
                            className={`flex gap-3 sm:gap-4 ${
                              isLastCard ? "max-sm:gap-2.5" : ""
                            }`}
                          >
                            <div
                              className={`
                                flex h-9 w-9 shrink-0 items-center justify-center
                                rounded-xl text-base font-bold sm:h-11 sm:w-11 sm:text-lg
                                ${
                                  isLastCard
                                    ? "max-sm:h-8 max-sm:w-8 max-sm:text-sm"
                                    : ""
                                }
                                ${
                                  card.color === "bg-[#ff7417]"
                                    ? "bg-white text-[#ff7417]"
                                    : card.color === "bg-[#173873]"
                                    ? "bg-[#ff7417] text-white"
                                    : "bg-[#ff7417] text-white"
                                }
                              `}
                            >
                              {point.icon}
                            </div>

                            <div className="min-w-0">
                              <h3
                                className={`
                                  text-[13px] font-bold leading-5 sm:text-lg sm:leading-6
                                  ${
                                    isLastCard
                                      ? "max-sm:text-[12px] max-sm:leading-4"
                                      : ""
                                  }
                                  ${card.text}
                                `}
                              >
                                {point.title}
                              </h3>

                              <p
                                className={`
                                  mt-1 text-[10.5px] leading-[1.45] sm:mt-2
                                  sm:text-sm sm:leading-6
                                  ${
                                    isLastCard
                                      ? "max-sm:text-[9.5px] max-sm:leading-[1.38]"
                                      : ""
                                  }
                                  ${
                                    card.color === "bg-[#173873]"
                                      ? "text-white/70"
                                      : card.color === "bg-[#ff7417]"
                                      ? "text-white/75"
                                      : "text-slate-600"
                                  }
                                `}
                              >
                                {point.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}

                      {isLastCard && (
                        <div className="flex justify-end pt-1 sm:pt-2">
                          <Link
                            to="/career-assistance"
                            className="
                              group inline-flex items-center gap-2 rounded-full
                              bg-[#173873] px-3.5 py-2 no-underline
                              text-[10px] font-bold uppercase tracking-[0.14em] text-white
                              transition-all duration-300 hover:-translate-y-0.5
                              hover:bg-[#ff7417] sm:gap-3 sm:px-5 sm:py-2.5 sm:text-[10px]
                            "
                          >
                            <span>Get Career Assistance</span>
                            <span
                              className="
                                text-sm leading-none transition-transform duration-300
                                group-hover:translate-x-1.5 sm:text-base
                              "
                            >
                              →
                            </span>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default PlacementAssistance;
