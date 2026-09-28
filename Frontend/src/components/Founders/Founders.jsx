import React from "react";

import deepakSir from "../../assets/Founders/Deepak Sir Headshot.png";
import sagarSir from "../../assets/Founders/Sagar Sir headshot.png";

const founders = [
  {
    id: "01",
    name: "Deepak Khandelwal",
    role: "Founder & Director",
    image: deepakSir,
    description:
      "Driven by a vision to make meaningful learning accessible and practical, Deepak focuses on building an education ecosystem where learners can develop relevant skills, confidence and real-world capabilities.",
  },
  {
    id: "02",
    name: "Sagar Vitnor",
    role: "Founder & Director",
    image: sagarSir,
    description:
      "With a strong belief in practical learning and continuous growth, Sagar focuses on creating learning experiences that connect knowledge with real-world opportunities and help learners move confidently toward their careers.",
  },
];

function FounderCard({ founder }) {
  return (
    <article
      className="
        founder-card
        group
        relative
        h-[430px]
        overflow-hidden
        bg-[#173873]
        sm:h-[470px]
        lg:h-[500px]
      "
    >
      {/* ================= IMAGE ================= */}

      <img
        src={founder.image}
        alt={`${founder.name} - ${founder.role}`}
        className="
          absolute
          inset-0
          h-[110%]
          w-[110%]
          -translate-x-[5%]
          object-cover
          object-top
          transition-transform
          duration-[1400ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          scale-[0.92]
          group-hover:scale-[0.96]
        "
      />

      {/* ================= DEFAULT IMAGE GRADIENT ================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-[#0D1D38]
          via-[#0D1D38]/30
          to-transparent
        "
      />

      {/* ================= HOVER OVERLAY ================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          top-[42%]
          bg-gradient-to-b
          from-[#173873]/10
          via-[#173873]/90
          to-[#102B56]/98
          opacity-0
          transition-all
          duration-[750ms]
          ease-out
          group-hover:opacity-100
        "
      />

      {/* ================= ORANGE TOP LINE ================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-40
          h-[3px]
          w-0
          bg-gradient-to-r
          from-[#F88118]
          to-[#F49831]
          transition-all
          duration-[800ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:w-full
        "
      />

      {/* =====================================================
          DEFAULT CONTENT
      ===================================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-20
          p-6
          transition-all
          duration-[700ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:translate-y-2
          group-hover:opacity-0
          sm:p-7
          lg:p-8
        "
      >
        {/* Founder Label */}

        <div className="mb-2 flex items-center gap-3">
          <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#F49831]">
            Founder
          </span>

          <span className="h-px w-7 bg-[#F49831]" />
        </div>

        {/* Name */}

        <h3
          className="
            font-serif
            text-3xl
            font-semibold
            leading-none
            tracking-tight
            text-white
            sm:text-4xl
            lg:text-[44px]
          "
        >
          {founder.name}
        </h3>

        {/* Role */}

        <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.15em] text-white/65">
          {founder.role}
        </p>
      </div>

      {/* =====================================================
          HOVER CONTENT
      ===================================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-30
          flex
          flex-col
          p-7
          opacity-0
          transition-opacity
          duration-[700ms]
          ease-out
          group-hover:opacity-100
          sm:p-8
          lg:p-9
        "
      >
        {/* ================= TOP ================= */}

        <div className="flex items-start justify-between">
          <span
            className="
              font-serif
              text-[38px]
              font-semibold
              leading-none
              text-white/15
              transition-transform
              duration-[800ms]
              translate-y-2
              group-hover:translate-y-0
            "
          >
            {founder.id}
          </span>

          <span
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              text-[#F49831]
              transition-transform
              duration-700
              group-hover:rotate-45
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-4 w-4"
            >
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>
          </span>
        </div>

        {/* ================= MAIN INFORMATION ================= */}

        <div
          className="
            mt-auto
            translate-y-5
            transition-transform
            duration-[850ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:translate-y-0
          "
        >
          {/* Small Label */}

          <div className="mb-3 flex items-center gap-3">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#F49831]">
              Meet the Founder
            </span>

            <span className="h-px w-7 bg-[#F49831]" />
          </div>

          {/* Name */}

          <h3
            className="
              font-serif
              text-3xl
              font-semibold
              leading-none
              tracking-tight
              text-white
              sm:text-4xl
            "
          >
            {founder.name}
          </h3>

          {/* Role */}

          <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#F49831]">
            {founder.role}
          </p>

          {/* Divider */}

          <div className="my-5 h-px w-full bg-white/15" />

          {/* Description */}

          <p className="max-w-[500px] text-[13px] leading-6 text-white/75 sm:text-[14px] sm:leading-7">
            {founder.description}
          </p>
        </div>
      </div>

      {/* ================= BORDER ================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-40
          border
          border-white/10
          transition-colors
          duration-700
          group-hover:border-[#F49831]/40
        "
      />
    </article>
  );
}

function Founders() {
  return (
    <section className="relative overflow-hidden bg-[#F7F2EA] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      {/* ================= BACKGROUND PATTERN ================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(23,56,115,0.055) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div className="relative mx-auto max-w-[1180px]">
        {/* ================= HEADER ================= */}

        <div className="mb-10 border-b border-[#173873]/15 pb-7 lg:mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#173873] sm:text-[13px]">
              Meet the Founders
            </span>

            <span className="h-[2px] w-7 bg-gradient-to-r from-[#F88118] to-[#F49831]" />
          </div>

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-14">
            <h2
              className="
                max-w-[700px]
                font-serif
                text-4xl
                font-semibold
                leading-[1.06]
                tracking-tight
                text-[#173873]
                sm:text-5xl
                lg:text-[54px]
              "
            >
              The people behind{" "}
              <span className="font-medium italic text-[#F88118]">
                Skill Paradise.
              </span>
            </h2>

            <p className="max-w-[350px] text-[13px] leading-6 text-[#6E6558] sm:text-[14px] sm:leading-7">
              Meet the visionaries building a learning ecosystem focused on
              practical skills, meaningful opportunities and lifelong growth.
            </p>
          </div>
        </div>

        {/* ================= FOUNDER CARDS ================= */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {founders.map((founder) => (
            <FounderCard key={founder.id} founder={founder} />
          ))}
        </div>

        {/* ================= BOTTOM LINE ================= */}

        <div className="mt-6 flex items-center justify-between border-t border-[#173873]/10 pt-5">
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#6E6558]">
            One vision. One learning ecosystem.
          </p>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F88118]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#173873]">
              Skill Paradise
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founders;