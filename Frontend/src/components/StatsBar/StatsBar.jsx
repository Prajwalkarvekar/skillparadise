import { useEffect, useState } from "react";

const stats = [
  {
    number: "15+",
    label: "Years of Experience",
    delay: "0s",
  },
  {
    number: "1,000+",
    label: "Learners Trained",
    delay: "0.5s",
  },
  {
    number: "10+",
    label: "Courses Offered",
    delay: "1s",
  },
  {
    number: "10+",
    label: "Industry Mentors",
    delay: "1.5s",
  },
];

function StatsBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("stats-bar");
    if (!section) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: "0px 0px -10% 0px" });
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats-bar"
      className="relative overflow-hidden border-y-[1px] border-[#173873] bg-[#f6f1e8] px-4 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14"
    >
      {/* Stats */}
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-8 md:gap-y-0">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`relative flex flex-col items-center ${
              isVisible ? "opacity-100" : "translate-y-5 opacity-0"
            } transition-all duration-700`}
            style={{
              transitionDelay: `${index * 120}ms`,
            }}
          >
            {/* Hanging thread */}
            <div className="relative flex flex-col items-center">
              {/* Thread */}
              <div className="h-5 w-px border-l border-dashed border-[#173873]/50" />

              {/* Hanging point */}
              <div className="h-2.5 w-2.5 rounded-none bg-[#173873] shadow-sm" />

              {/* Hanging card */}
              <div
                className="group relative mt-1 origin-top"
                style={{
                  animation: `swing 3.5s ease-in-out infinite`,
                  animationDelay: stat.delay,
                }}
              >
                {/* Card */}
                <div className="min-w-[150px] rounded-none border border-[#173873]/60 bg-[#f9f6f0] px-5 py-4 text-center shadow-[0_12px_30px_rgba(23,56,115,0.08)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#fffdf9] sm:min-w-[190px] sm:px-6 sm:py-5">
                  <div className="text-3xl font-extrabold leading-none tracking-tight text-[#173873] sm:text-4xl lg:text-5xl">
                    {stat.number}
                  </div>

                  <div className="mt-2 whitespace-nowrap text-sm font-semibold text-[#173873] sm:text-base">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Swing animation */}
      <style>
        {`
          @keyframes swing {
            0% {
              transform: rotate(-3.5deg);
            }

            25% {
              transform: rotate(2.5deg);
            }

            50% {
              transform: rotate(3.5deg);
            }

            75% {
              transform: rotate(-2.5deg);
            }

            100% {
              transform: rotate(-3.5deg);
            }
          }
        `}
      </style>
    </section>
  );
}

export default StatsBar;
