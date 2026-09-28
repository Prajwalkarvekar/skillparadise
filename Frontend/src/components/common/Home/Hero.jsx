import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import courseBooks from "../../../assets/hero-course-books.webp";

const heroWords = ["Grow Faster."];

const stats = [
  {
    target: 15,
    suffix: "+",
    label: "Courses",
    bg: "bg-orange-50",
  },
  {
    target: 500,
    suffix: "+",
    label: "Students",
    bg: "bg-white",
  },
  {
    target: 25,
    suffix: "+",
    label: "Expert Mentors",
    bg: "bg-orange-50",
  },
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1400;
    const steps = 50;
    const increment = target / steps;
    const intervalTime = duration / steps;

    const interval = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function Hero({ onOpenBrochure }) {
  const [typedText, setTypedText] = useState("");
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const currentWord = heroWords[0];
    let charIndex = 0;
    let clearTextTimer;

    const typeInterval = setInterval(() => {
      charIndex += 1;
      setTypedText(currentWord.slice(0, charIndex));

      if (charIndex >= currentWord.length) {
        clearInterval(typeInterval);

        clearTextTimer = setTimeout(() => {
          setTypedText("");
        }, 1200);
      }
    }, 140);

    const resetTimer = setTimeout(() => {
      setCycle((prev) => prev + 1);
    }, 5000);

    return () => {
      clearInterval(typeInterval);
      clearTimeout(clearTextTimer);
      clearTimeout(resetTimer);
    };
  }, [cycle]);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          flex
          min-h-[calc(100vh-80px)]
          w-full
          max-w-[1600px]
          items-center
          px-6
          pb-6
          pt-2
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        <div
          className="
            grid
            w-full
            min-w-0
            grid-cols-1
            items-center
            gap-8
            lg:grid-cols-[1.35fr_1fr_0.42fr]
            lg:gap-4
            xl:grid-cols-[1.3fr_1fr_0.42fr]
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <div
            className="
              relative
              z-20
              flex
              flex-col
              justify-center
              pl-2
              pt-0
              sm:pl-4
              lg:-translate-y-6
              lg:pl-6
              xl:-translate-y-8
              xl:pl-10
            "
          >
            {/* Main Heading */}
            <h1
              className="
                max-w-[700px]
                text-4xl
                font-semibold
                leading-[1.02]
                tracking-[-0.04em]
                text-[#173873]
                sm:text-6xl
                lg:text-[4.3rem]
                xl:text-[5rem]
              "
            >
              <span className="mb-1 block whitespace-normal leading-none sm:whitespace-nowrap">
                Learn Smarter.
              </span>

              <span className="inline-flex max-w-full items-center whitespace-normal leading-none text-[#ff7417] sm:whitespace-nowrap">
                <span className="inline-block min-w-[10ch]">{typedText}</span>
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-[650px]
                text-base
                leading-7
                text-[#355477]
                sm:text-lg
                sm:leading-8
                lg:mt-5
                lg:text-[1.1rem]
              "
            >
              Build practical skills, learn from experienced mentors, and
              take the next step toward your career with Skill Paradise.
            </p>

            {/* CTA Buttons */}
            <div
              className="
                mt-7
                flex
                flex-wrap
                items-center
                gap-4
                lg:mt-6
              "
            >
              {/* Primary Button */}
              <button
                type="button"
                onClick={onOpenBrochure}
                className="
                  rounded-full
                  bg-[#ff7417]
                  px-8
                  py-3.5
                  text-base
                  font-semibold
                  text-white
                  shadow-[0_10px_25px_rgba(255,116,23,0.22)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#f5680c]
                  hover:shadow-[0_15px_30px_rgba(255,116,23,0.28)]
                  active:translate-y-0
                "
              >
                Download Brochure
              </button>

              {/* Secondary Button */}
              <Link
                to="/courses"
                className="
                  rounded-full
                  border
                  border-[#cbd8e8]
                  bg-white
                  px-8
                  py-3.5
                  text-base
                  font-medium
                  text-[#173873]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#ff7417]
                  hover:text-[#ff7417]
                  hover:shadow-[0_10px_25px_rgba(23,56,115,0.08)]
                "
              >
                Explore Courses
              </Link>
            </div>
          </div>

          {/* =====================================================
              CENTER COURSE BOOKS
          ====================================================== */}
          <div
            className="
              relative
              flex
              min-h-[380px]
              items-end
              justify-center
              sm:min-h-[500px]
              lg:-translate-y-8
              xl:-translate-y-10
            "
          >
            {/* 3D course books */}
            <img
              src={courseBooks}
              width="483"
              height="517"
              fetchPriority="high"
              decoding="async"
              alt="Skill Paradise courses represented by a stack of books"
              className="
                relative
                z-10
                h-auto
                max-h-[300px]
                w-auto
                max-w-[65%]
                object-contain
                drop-shadow-[0_20px_35px_rgba(23,56,115,0.12)]
                sm:max-h-[380px]
                sm:max-w-[75%]
                lg:-translate-y-4
                xl:max-h-[400px]
                xl:-translate-y-6
              "
            />

            {/* =================================================
                LEARNING MARQUEE
            ================================================== */}
            <div
              className="
                absolute
                bottom-0
                left-1/2
                z-20
                flex
                w-[240px]
                -translate-x-1/2
                overflow-hidden
                rounded-full
                border
                border-[#f3d5c2]
                bg-white/90
                py-2
                shadow-[0_8px_25px_rgba(23,56,115,0.08)]
                backdrop-blur-sm
                sm:w-[320px]
              "
            >
              <div className="animate-marquee flex min-w-max gap-8 whitespace-nowrap px-4 text-xs font-medium uppercase tracking-[0.18em] text-[#ff7417]">
                <span>Learn • Build • Grow</span>
                <span>Learn • Build • Grow</span>
                <span>Learn • Build • Grow</span>
                <span>Learn • Build • Grow</span>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT STATISTICS
          ====================================================== */}
          <div
            className="
              relative
              z-20
              flex
              flex-col
              justify-center
              gap-6
              lg:-translate-y-3
              xl:-translate-y-5
            "
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`
                  ${stat.bg}
                  group
                  flex
                  min-h-[135px]
                  w-full
                  flex-col
                  items-center
                  justify-center
                  rounded-[22px]
                  border
                  border-[#edf0f5]
                  px-4
                  py-5
                  text-center
                  shadow-[0_5px_20px_rgba(23,56,115,0.05)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#ffd1b5]
                  hover:shadow-[0_12px_30px_rgba(255,116,23,0.10)]
                  sm:min-h-[140px]
                  lg:min-h-[125px]
                  xl:min-h-[135px]
                `}
              >
                {/* Number */}
                <div
                  className="
                    text-3xl
                    font-extrabold
                    tracking-tight
                    text-[#ff7417]
                    transition-transform
                    duration-300
                    group-hover:scale-105
                    lg:text-[2rem]
                  "
                >
                  <Counter
                    target={stat.target}
                    suffix={stat.suffix}
                    key={cycle}
                  />
                </div>

                {/* Label */}
                <p
                  className="
                    mt-2
                    text-sm
                    font-medium
                    text-[#173873]
                    lg:text-[0.9rem]
                  "
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-2 w-full" />
    </section>
  );
}

export default Hero;
