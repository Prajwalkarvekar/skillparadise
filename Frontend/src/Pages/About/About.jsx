import React from "react";

import spLogo from "../../assets/logos/SP LOGO.svg";
import deepakHeadshot from "../../assets/Founders/Deepak Sir Headshot.png";
import sagarHeadshot from "../../assets/Founders/Sagar Sir headshot.png";
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/common/Nabvar';

const About = () => {
  const founders = [
    {
      name: "Sagar Vitnor",
      role: "Director & Founder",
      image: sagarHeadshot,
      description:
        "Building the vision behind SkillParadise and shaping a learning ecosystem where technology, practical skills, and opportunity come together.",
    },
    {
      name: "Deepak Khandelwal",
      role: "Director & Founder",
      image: deepakHeadshot,
      description:
        "Driving the growth and direction of SkillParadise with a focus on meaningful education, industry relevance, and learner success.",
    },
  ];

  const values = [
    {
      number: "01",
      title: "Learn with Purpose",
      text: "Every skill should have a purpose. We focus on learning that connects directly with real-world applications and career opportunities.",
    },
    {
      number: "02",
      title: "Build Real Skills",
      text: "Knowledge becomes valuable when you can use it. Our approach emphasizes practical learning, projects, and hands-on experience.",
    },
    {
      number: "03",
      title: "Keep Growing",
      text: "Technology never stands still. We encourage continuous learning so our community can keep moving forward with it.",
    },
  ];

  return (
    <>
      <Navbar/>
      <main className="min-h-screen bg-[#F7F2EA] text-[#173873] overflow-hidden">
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative px-6 sm:px-10 lg:px-16 pt-24 lg:pt-32 pb-24">
          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full border border-[#173873]/10 pointer-events-none" />
          <div className="absolute -top-10 -right-10 w-[280px] h-[280px] rounded-full border border-[#F88118]/15 pointer-events-none" />

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-24 items-center">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-7">
                  <span className="w-10 h-[2px] bg-[#F88118]" />
                  <span className="text-xs tracking-[0.28em] uppercase font-medium text-[#173873]/60">
                    About SkillParadise
                  </span>
                </div>

                <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl leading-[0.95] tracking-tight text-[#173873]">
                  Where skills
                  <br />
                  become
                  <br />
                  <span className="text-[#F88118]">possibilities.</span>
                </h1>

                <p className="mt-9 max-w-xl text-base sm:text-lg leading-8 text-[#173873]/70">
                  SkillParadise is built around a simple belief — quality
                  education should not only teach you something, it should help
                  you become capable of doing something meaningful with it.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="/courses"
                    className="inline-flex items-center justify-center rounded-full bg-[#173873] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#102d5c]"
                  >
                    Explore our courses
                  </a>

                  <a
                    href="#our-story"
                    className="inline-flex items-center justify-center rounded-full border border-[#173873]/20 bg-white/60 px-7 py-3.5 text-sm font-medium text-[#173873] transition-all duration-300 hover:bg-white"
                  >
                    Our story
                  </a>
                </div>
              </div>

              {/* Right editorial composition */}
              <div className="relative min-h-[470px] lg:min-h-[560px]">
                {/* Main visual block */}
                <div className="absolute right-0 top-0 w-[82%] h-[360px] sm:h-[430px] rounded-[2rem] overflow-hidden bg-white border border-[#173873]/10 shadow-[0_25px_70px_rgba(23,56,115,0.10)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#173873]/5 via-transparent to-[#F88118]/10" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-8">
                     <div className="mx-auto mb-7 flex items-center justify-center">
                      <img
                        src={spLogo}
                        alt="SkillParadise"
                        className="w-70 sm:w-70 h-auto object-contain"
                      />
                    </div>

                      <p className="text-xs tracking-[0.3em] uppercase text-[#173873]/50 mb-4">
                        Learn · Build · Grow
                      </p>

                      <h2 className="font-serif text-4xl sm:text-5xl text-[#173873]">
                        Your skills.
                        <br />
                        Your future.
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Floating orange card */}
                <div className="absolute left-0 bottom-5 sm:bottom-10 w-[190px] sm:w-[220px] rounded-[1.5rem] bg-[#F88118] p-6 sm:p-7 shadow-[0_20px_50px_rgba(248,129,24,0.22)]">
                  <span className="text-4xl sm:text-5xl font-serif text-white">
                    01
                  </span>

                  <p className="mt-4 text-sm leading-6 text-white/90">
                    Learn skills that move with the real world.
                  </p>
                </div>

                {/* Small detail */}
                <div className="absolute right-[4%] -bottom-2 w-24 h-24 rounded-full border border-[#173873]/15 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#F88118]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            INTRO / STATEMENT
        ========================================================== */}
        <section className="px-6 sm:px-10 lg:px-16 py-24 lg:py-32 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-24">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#F88118] font-semibold">
                  Our belief
                </p>

                <div className="mt-6 h-px w-20 bg-[#173873]/20" />
              </div>

              <div>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-[#173873]">
                  Education should open doors,
                  <span className="text-[#F88118]">
                    {" "}
                    not create barriers.
                  </span>
                </h2>

                <p className="mt-8 max-w-3xl text-base sm:text-lg leading-8 text-[#173873]/65">
                  The digital world is changing faster than ever. New
                  technologies emerge, industries evolve, and the skills needed
                  to succeed continue to change.
                </p>

                <p className="mt-5 max-w-3xl text-base sm:text-lg leading-8 text-[#173873]/65">
                  SkillParadise exists to make that journey simpler. We bring
                  structured learning, practical knowledge, and career-focused
                  skills together in one place — helping learners move from
                  curiosity to confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            MISSION / VISION / APPROACH
        ========================================================== */}
        <section className="px-6 sm:px-10 lg:px-16 py-24 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-16">
              <p className="text-xs uppercase tracking-[0.3em] text-[#F88118] font-semibold">
                What drives us
              </p>

              <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight">
                A learning experience
                <br />
                designed with intention.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {/* Mission */}
              <div className="group rounded-[1.75rem] bg-white border border-[#173873]/10 p-8 sm:p-10 min-h-[360px] flex flex-col justify-between shadow-[0_15px_45px_rgba(23,56,115,0.05)] transition-all duration-300 hover:-translate-y-1">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#173873] flex items-center justify-center text-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-6 h-6"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >
                      <circle cx="12" cy="12" r="8.5" />
                      <path d="M12 7v10M7 12h10" />
                    </svg>
                  </div>

                  <h3 className="mt-8 font-serif text-3xl text-[#173873]">
                    Our Mission
                  </h3>

                  <p className="mt-5 text-[#173873]/65 leading-7">
                    To make high-quality, practical education accessible to
                    learners everywhere and help them develop skills that create
                    real opportunities.
                  </p>
                </div>

                <span className="text-xs tracking-[0.25em] uppercase text-[#173873]/35">
                  Purpose
                </span>
              </div>

              {/* Vision */}
              <div className="group rounded-[1.75rem] bg-[#173873] p-8 sm:p-10 min-h-[360px] flex flex-col justify-between shadow-[0_20px_55px_rgba(23,56,115,0.16)] transition-all duration-300 hover:-translate-y-1">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#F88118] flex items-center justify-center text-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-6 h-6"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >
                      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
                      <circle cx="12" cy="12" r="2.8" />
                    </svg>
                  </div>

                  <h3 className="mt-8 font-serif text-3xl text-white">
                    Our Vision
                  </h3>

                  <p className="mt-5 text-white/70 leading-7">
                    A world where anyone can continuously learn, build relevant
                    skills, and confidently create their own path forward.
                  </p>
                </div>

                <span className="text-xs tracking-[0.25em] uppercase text-white/35">
                  Direction
                </span>
              </div>

              {/* Approach */}
              <div className="group rounded-[1.75rem] bg-white border border-[#173873]/10 p-8 sm:p-10 min-h-[360px] flex flex-col justify-between shadow-[0_15px_45px_rgba(23,56,115,0.05)] transition-all duration-300 hover:-translate-y-1">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#F88118] flex items-center justify-center text-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-6 h-6"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >
                      <path d="M12 3v18M3 12h18" />
                      <circle cx="12" cy="12" r="8.5" />
                    </svg>
                  </div>

                  <h3 className="mt-8 font-serif text-3xl text-[#173873]">
                    Our Approach
                  </h3>

                  <p className="mt-5 text-[#173873]/65 leading-7">
                    We combine structured instruction, practical projects,
                    relevant technologies, and a learner-first experience to
                    turn concepts into usable skills.
                  </p>
                </div>

                <span className="text-xs tracking-[0.25em] uppercase text-[#173873]/35">
                  Method
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            OUR STORY
        ========================================================== */}
        <section
          id="our-story"
          className="px-6 sm:px-10 lg:px-16 py-24 lg:py-32 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-24">
              {/* Editorial number */}
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.3em] text-[#F88118] font-semibold">
                  Our story
                </p>

                <div className="mt-8">
                  <span className="font-serif text-[8rem] sm:text-[11rem] leading-none text-[#173873]/[0.06]">
                    01
                  </span>
                </div>

                <div className="absolute left-0 bottom-0 hidden lg:block">
                  <div className="w-36 h-36 rounded-full border border-[#173873]/10 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#F88118]/10 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-[#F88118]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Story */}
              <div>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
                  From an idea
                  <br />
                  to a learning
                  <br />
                  <span className="text-[#F88118]">community.</span>
                </h2>

                <div className="mt-10 space-y-6 text-base sm:text-lg leading-8 text-[#173873]/65">
                  <p>
                    SkillParadise started with a simple idea: learning should be
                    accessible, practical, and relevant to the world people are
                    preparing to enter.
                  </p>

                  <p>
                    What began as a focused learning platform has grown into a
                    broader vision — a place where learners can explore
                    technology, develop professional skills, work on meaningful
                    projects, and continuously improve themselves.
                  </p>

                  <p>
                    Today, we continue building with the same mindset. We listen
                    to what the industry needs, understand what learners
                    struggle with, and turn those insights into better learning
                    experiences.
                  </p>
                </div>

                <div className="mt-12 grid sm:grid-cols-3 gap-4">
                  <div className="border-t border-[#173873]/15 pt-5">
                    <p className="font-serif text-3xl text-[#173873]">15+</p>
                    <p className="mt-1 text-sm text-[#173873]/50">
                      Career-focused courses
                    </p>
                  </div>

                  <div className="border-t border-[#173873]/15 pt-5">
                    <p className="font-serif text-3xl text-[#173873]">1000+</p>
                    <p className="mt-1 text-sm text-[#173873]/50">
                      Learners reached
                    </p>
                  </div>

                  <div className="border-t border-[#173873]/15 pt-5">
                    <p className="font-serif text-3xl text-[#173873]">01</p>
                    <p className="mt-1 text-sm text-[#173873]/50">
                      Purpose — better learning
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            VALUES
        ========================================================== */}
        <section className="px-6 sm:px-10 lg:px-16 py-24 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#F88118] font-semibold">
                  How we think
                </p>

                <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl">
                  The principles
                  <br />
                  behind the platform.
                </h2>
              </div>

              <p className="max-w-md text-[#173873]/60 leading-7">
                Everything we build is guided by a learner-first mindset and a
                belief that useful skills can change the direction of a career.
              </p>
            </div>

            <div className="border-t border-[#173873]/15">
              {values.map((value) => (
                <div
                  key={value.number}
                  className="grid lg:grid-cols-[100px_0.8fr_1.2fr] gap-5 lg:gap-12 py-9 border-b border-[#173873]/15 items-start group"
                >
                  <span className="text-sm font-medium text-[#F88118]">
                    {value.number}
                  </span>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#173873] group-hover:text-[#F88118] transition-colors">
                    {value.title}
                  </h3>

                  <p className="text-[#173873]/60 leading-7 max-w-xl">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            FOUNDERS
        ========================================================== */}
        {/* Temporarily hidden — retain the section for future use. */}
        {false && (
        <section className="px-6 sm:px-10 lg:px-16 py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs uppercase tracking-[0.3em] text-[#F88118] font-semibold">
                The people behind SkillParadise
              </p>

              <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight">
                Meet our
                <br />
                <span className="text-[#F88118]">founders.</span>
              </h2>

              <p className="mt-6 text-[#173873]/60 leading-7">
                Two people. One shared vision — to build a learning platform
                that helps people turn ambition into ability.
              </p>
            </div>

            {/* TWO FOUNDERS — intentionally balanced */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {founders.map((founder, index) => (
                <article
                  key={founder.name}
                  className="group relative overflow-hidden rounded-[2rem] border border-[#173873]/10 bg-[#F7F2EA] shadow-[0_20px_60px_rgba(23,56,115,0.08)]"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3.2] overflow-hidden bg-[#EDE7DC]">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    {/* subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#173873]/35 via-transparent to-transparent opacity-60" />

                    {/* Number */}
                    <div className="absolute top-5 left-5 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-sm font-medium text-[#173873]">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-7 sm:p-9">
                    <p className="text-xs tracking-[0.22em] uppercase text-[#F88118] font-semibold">
                      {founder.role}
                    </p>

                    <h3 className="mt-3 font-serif text-3xl sm:text-4xl text-[#173873]">
                      {founder.name}
                    </h3>

                    <p className="mt-5 text-sm sm:text-base leading-7 text-[#173873]/60">
                      {founder.description}
                    </p>

                    <div className="mt-7 pt-5 border-t border-[#173873]/10 flex items-center justify-between">
                      <span className="text-xs tracking-[0.2em] uppercase text-[#173873]/35">
                        SkillParadise
                      </span>

                      <span className="w-9 h-9 rounded-full border border-[#173873]/15 flex items-center justify-center transition-all duration-300 group-hover:bg-[#173873] group-hover:text-white">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="w-4 h-4"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        >
                          <path d="M5 12h13M13 6l6 6-6 6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* =========================================================
            CLOSING STATEMENT
        ========================================================== */}
        <section className="px-6 sm:px-10 lg:px-16 py-24 lg:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-[2rem] bg-[#173873] overflow-hidden px-7 sm:px-12 lg:px-20 py-16 lg:py-24">
              {/* Decorative circles */}
              <div className="absolute -right-28 -top-28 w-72 h-72 rounded-full border border-white/10" />
              <div className="absolute -right-10 -top-10 w-36 h-36 rounded-full border border-[#F88118]/30" />
              <div className="absolute -left-20 -bottom-20 w-56 h-56 rounded-full border border-white/10" />

              <div className="relative max-w-4xl">
                <p className="text-xs uppercase tracking-[0.3em] text-[#F88118] font-semibold">
                  The journey continues
                </p>

                <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-7xl leading-[1.02] text-white">
                  Learn something.
                  <br />
                  Build something.
                  <br />
                  <span className="text-[#F88118]">Become something.</span>
                </h2>

                <p className="mt-8 max-w-2xl text-base sm:text-lg leading-8 text-white/65">
                  Whether you're starting from zero, upgrading your skills, or
                  preparing for what's next, SkillParadise is here to help you
                  take the next step.
                </p>

                <div className="mt-10">
                  <a
                    href="/courses"
                    className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#173873] transition-all duration-300 hover:bg-[#F88118] hover:text-white"
                  >
                    Start learning
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-4 h-4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M5 12h13M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SMALL FOOTER STATEMENT
        ========================================================== */}
        <section className="px-6 sm:px-10 lg:px-16 pb-16">
          <div className="max-w-7xl mx-auto border-t border-[#173873]/10 pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-[#173873]/45">
              SkillParadise — Learn. Build. Grow.
            </p>

            <p className="text-xs tracking-[0.2em] uppercase text-[#173873]/30">
              Built for the next generation of learners
            </p>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default About;
