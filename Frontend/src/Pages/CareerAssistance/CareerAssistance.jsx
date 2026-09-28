import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  FileText,
  MessagesSquare,
  UserRoundCheck,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import Navbar from '../../components/common/Nabvar';
import Footer from '../../components/Footer/Footer';

// ============================================================
// ADD YOUR EXISTING NAVBAR + FOOTER IMPORTS HERE
// ============================================================
// Example:
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const assistanceCards = [
  {
    number: "01",
    icon: FileText,
    title: "Resume & CV Building",
    description:
      "Create a professional resume that clearly presents your skills, projects, experience and strengths to potential employers.",
  },
  {
    number: "02",
    icon: FaLinkedinIn,
    title: "LinkedIn & Job Portal",
    description:
      "Build a professional online presence and optimize your LinkedIn and job portal profiles for relevant opportunities.",
  },
  {
    number: "03",
    icon: MessagesSquare,
    title: "Interview Preparation",
    description:
      "Prepare for technical interviews, HR rounds, coding discussions and practical assessments with structured guidance.",
  },
  {
    number: "04",
    icon: BriefcaseBusiness,
    title: "Placement & Job Assistance",
    description:
      "Get continuous career support and guidance as you prepare, apply and move confidently toward suitable job opportunities.",
  },
];

const journeySteps = [
  {
    number: "01",
    title: "Build Your Skills",
    text: "Develop practical and industry-relevant skills.",
  },
  {
    number: "02",
    title: "Build Your Profile",
    text: "Present your skills and experience professionally.",
  },
  {
    number: "03",
    title: "Prepare For Interviews",
    text: "Practice and improve your interview performance.",
  },
  {
    number: "04",
    title: "Build Confidence",
    text: "Become prepared for real-world opportunities.",
  },
  {
    number: "05",
    title: "Move Towards Your Career",
    text: "Receive guidance throughout your career journey.",
  },
];

const supportItems = [
  "Resume & CV Building",
  "LinkedIn Profile Guidance",
  "Job Portal Optimization",
  "Mock Interviews",
  "Technical Interview Preparation",
  "HR Interview Preparation",
  "Soft Skills & Communication",
  "Career Gap Guidance",
];

const beneficiaries = [
  {
    number: "01",
    title: "Students & Freshers",
    text: "Build your profile and prepare for your first professional opportunity.",
  },
  {
    number: "02",
    title: "Working Professionals",
    text: "Strengthen your profile and prepare for your next career move.",
  },
  {
    number: "03",
    title: "Career Restart",
    text: "Get guidance to rebuild confidence and transition back into your career.",
  },
];

const careerGapPoints = [
  "Understand how to present your career gap",
  "Improve your resume and professional profile",
  "Identify areas for skill improvement",
  "Prepare confidently for interviews",
  "Build a practical path toward IT opportunities",
];

function CareerAssistance() {
  const handleCareerAssistance = () => {
    window.dispatchEvent(new CustomEvent("open-request-call-modal"));
  };

  return (
    <>
    <main className="overflow-hidden bg-[#fffaf5] text-[#173873]">
          <Navbar/>
      {/* =========================================================
          NAVBAR / HEADER

        
          Add your existing Navbar component here.
      ========================================================= */}

      {/* <Navbar /> */}


      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#fffaf5]">
        <div className="mx-auto max-w-[1180px] px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-10 lg:pb-24 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
            {/* LEFT CONTENT */}

            <div className="min-w-0">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#173873] sm:text-xs">
                  Career Assistance
                </span>

                <span className="h-[2px] w-8 shrink-0 bg-[#ff7417]" />
              </div>

              {/* 
                Desktop:
                Keep the first phrase together.
              */}

              <h1 className="max-w-[900px] font-serif text-[40px] font-semibold leading-[1.04] tracking-tight text-[#173873] sm:text-6xl lg:text-[72px]">
                <span className="whitespace-nowrap">
                  From Learning Skills
                </span>

                <span className="mt-1 block font-medium italic text-[#ff7417] sm:mt-2">
                  To Landing Your Job.
                </span>
              </h1>

              <p className="mt-6 max-w-[650px] text-[14px] leading-6 text-[#6e6558] sm:mt-8 sm:text-lg sm:leading-8">
                Your journey does not end when training is complete. We help
                you build a professional profile, prepare for interviews and
                confidently take the next step toward your career.
              </p>

              <button
                type="button"
                onClick={handleCareerAssistance}
                className="group mt-7 inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#173873] no-underline transition-colors duration-300 hover:text-[#ff7417] sm:mt-9 sm:gap-3 sm:text-xs"
              >
                <span>Get Career Assistance</span>

                <ArrowRight
                  size={15}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </button>
            </div>


            {/* =====================================================
                ABSTRACT HERO VISUAL

                No person / no static circular target.
            ===================================================== */}

            <div className="relative hidden min-h-[330px] lg:block">
              {/* Large soft grid */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-50
                  [background-image:linear-gradient(to_right,rgba(23,56,115,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,56,115,0.07)_1px,transparent_1px)]
                  [background-size:34px_34px]
                  [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]
                "
              />

              {/* Decorative vertical line */}

              <div className="absolute right-[24%] top-2 h-[300px] w-px bg-[#173873]/10" />

              {/* Decorative horizontal line */}

              <div className="absolute left-[12%] right-0 top-[45%] h-px bg-[#173873]/10" />

              {/* Accent block */}

              <div className="absolute right-[14%] top-[20%] h-24 w-24 rotate-12 border border-[#ff7417]/30" />

              {/* Main abstract card */}

              <div className="absolute right-[7%] top-[24%] flex h-[190px] w-[190px] items-center justify-center rounded-[34px] border border-[#173873]/10 bg-white/70 shadow-[0_25px_70px_rgba(23,56,115,0.08)] backdrop-blur-sm">
                <div className="relative flex h-[120px] w-[120px] items-center justify-center rounded-full border border-[#ff7417]/30">
                  <div className="h-14 w-14 rounded-full bg-[#173873]" />

                  <div className="absolute h-20 w-20 rounded-full border border-[#173873]/15" />

                  <div className="absolute h-[104px] w-[104px] rounded-full border border-dashed border-[#ff7417]/30" />
                </div>
              </div>

              {/* Small floating detail */}

              <div className="absolute bottom-[16%] left-[8%] flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#ff7417]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#173873]/60">
                  Career Ready
                </span>
              </div>

              {/* Bottom accent */}

              <div className="absolute bottom-[7%] right-[18%] h-10 w-24 border-b border-r border-[#173873]/15" />
            </div>
          </div>
        </div>

        <div className="h-px bg-[#173873]/10" />
      </section>


      {/* =========================================================
          CAREER JOURNEY
      ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="mb-12 max-w-[680px] sm:mb-16">
            <div className="mb-5 flex items-center gap-3">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#173873] sm:text-xs">
                Your Career Journey
              </span>

              <span className="h-[2px] w-8 bg-[#ff7417]" />
            </div>

            <h2 className="font-serif text-3xl font-semibold leading-[1.08] tracking-tight text-[#173873] sm:text-5xl lg:text-[54px]">
              Training is only the
              <span className="font-medium italic text-[#ff7417]">
                {" "}
                beginning.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-6 text-[#6e6558] sm:text-base sm:leading-7">
              We help you move through every important stage between learning
              a skill and becoming ready for your next career opportunity.
            </p>
          </div>


          {/* DESKTOP */}

          <div className="hidden lg:block">
            <div className="grid grid-cols-5 gap-0">
              {journeySteps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative pr-8"
                >
                  {index !== journeySteps.length - 1 && (
                    <div className="absolute left-12 right-0 top-6 h-px bg-[#173873]/15" />
                  )}

                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#fff0df] text-xs font-bold text-[#173873]">
                    {step.number}
                  </div>

                  <h3 className="mt-6 max-w-[150px] text-sm font-bold leading-5 text-[#173873]">
                    {step.title}
                  </h3>

                  <p className="mt-2 max-w-[170px] text-xs leading-5 text-[#6e6558]">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>


          {/* MOBILE */}

          <div className="space-y-7 lg:hidden">
            {journeySteps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex gap-5"
              >
                {index !== journeySteps.length - 1 && (
                  <div className="absolute left-5 top-11 h-[calc(100%+28px)] w-px bg-[#173873]/15" />
                )}

                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff0df] text-[10px] font-bold text-[#173873]">
                  {step.number}
                </div>

                <div className="pb-1">
                  <h3 className="text-sm font-bold text-[#173873] sm:text-base">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-[#6e6558] sm:text-sm">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================
          100% JOB ASSISTANCE
      ========================================================= */}

      <section className="bg-[#fffaf5]">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">

            {/* INTRO */}

            <div className="lg:sticky lg:top-24">
              <div className="mb-5 flex items-center gap-3">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#173873] sm:text-xs">
                  100% Job Assistance
                </span>

                <span className="h-[2px] w-8 bg-[#ff7417]" />
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-[1.08] tracking-tight text-[#173873] sm:text-5xl lg:text-[52px]">
                Training builds your skills.
                <span className="block font-medium italic text-[#ff7417]">
                  We help build your career.
                </span>
              </h2>

              <p className="mt-6 max-w-[470px] text-sm leading-6 text-[#6e6558] sm:text-base sm:leading-7">
                From creating your resume to preparing for interviews, our
                career assistance is designed to help you become confident,
                professional and job ready.
              </p>
            </div>


            {/* FOUR CARDS */}

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              {assistanceCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.number}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[24px]
                      border
                      border-[#e7d4be]
                      bg-[#fff0df]
                      p-6
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_20px_50px_rgba(23,56,115,0.08)]
                      sm:p-7
                      lg:p-8
                    "
                  >
                    {/* NUMBER */}

                    <div className="absolute right-6 top-6 text-[10px] font-bold tracking-[0.18em] text-[#173873]/30">
                      {card.number}
                    </div>

                    {/* ICON */}

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#173873] text-[#ff7417] transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14">
                      <Icon
                        size={24}
                        strokeWidth={1.7}
                        className="sm:h-7 sm:w-7"
                      />
                    </div>

                    <h3 className="mt-7 max-w-[260px] text-base font-bold leading-6 text-[#173873] sm:text-lg">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-xs leading-5 text-[#6e6558] sm:text-sm sm:leading-6">
                      {card.description}
                    </p>

                    <div className="mt-6 h-px w-10 bg-[#ff7417] transition-all duration-300 group-hover:w-16" />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          PROFILE SECTION
      ========================================================= */}

      <section className="bg-[#173873] text-white">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-white sm:text-xs">
                  Build Your Profile
                </span>

                <span className="h-[2px] w-8 bg-[#ff7417]" />
              </div>

              <h2 className="max-w-[650px] font-serif text-3xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[56px]">
                Your skills matter.
                <span className="block font-medium italic text-[#ff7417]">
                  How you present them matters too.
                </span>
              </h2>

              <p className="mt-6 max-w-[600px] text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                A strong professional profile helps employers understand what
                you can bring to their organization. We guide you in presenting
                your skills, projects and experience clearly.
              </p>
            </div>

     <div className="rounded-[26px] border border-white/25 p-5 sm:p-7 lg:p-8">
  <div className="grid grid-cols-2 gap-3 sm:gap-4">
    {[
      "Resume",
      "LinkedIn",
      "Job Portals",
      "Projects",
    ].map((item, index) => (
      <div
        key={item}
        className="
          group
          rounded-[18px]
          border
          border-white/15
          bg-white/[0.025]
          px-5
          py-5
          transition-all
          duration-300
          hover:border-[#ff7417]/50
          hover:bg-white/[0.05]
          sm:px-6
          sm:py-6
        "
      >
        <span className="text-[10px] font-bold tracking-[0.18em] text-[#ff7417]">
          0{index + 1}
        </span>

        <p className="mt-3 text-sm font-semibold text-white transition-colors duration-300 group-hover:text-[#ff7417] sm:text-base">
          {item}
        </p>
      </div>
    ))}
  </div>
</div>
          </div>
        </div>
      </section>


      {/* =========================================================
          CAREER GAP GUIDANCE
      ========================================================= */}

      <section className="bg-[#fff0df]">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

            {/* ABSTRACT VISUAL */}

            <div className="relative flex min-h-[300px] items-center justify-center lg:min-h-[400px]">
              <div
                className="
                  absolute
                  h-[270px]
                  w-[270px]
                  rounded-full
                  border
                  border-[#173873]/10
                  sm:h-[340px]
                  sm:w-[340px]
                "
              />

              <div
                className="
                  absolute
                  h-[205px]
                  w-[205px]
                  rounded-full
                  border
                  border-dashed
                  border-[#ff7417]/25
                  sm:h-[260px]
                  sm:w-[260px]
                "
              />

              <div className="relative flex h-32 w-32 items-center justify-center rounded-[30px] bg-[#173873] shadow-[0_25px_60px_rgba(23,56,115,0.18)] sm:h-40 sm:w-40">
                <UserRoundCheck
                  size={58}
                  strokeWidth={1.5}
                  className="text-[#ff7417] sm:h-16 sm:w-16"
                />
              </div>

              <div className="absolute left-[15%] top-[20%] h-3 w-3 rounded-full bg-[#ff7417]" />

              <div className="absolute bottom-[18%] right-[13%] h-2 w-2 rounded-full bg-[#173873]" />
            </div>


            {/* CONTENT */}

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#173873] sm:text-xs">
                  Career Gap Guidance
                </span>

                <span className="h-[2px] w-8 bg-[#ff7417]" />
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-[1.08] tracking-tight text-[#173873] sm:text-5xl lg:text-[54px]">
                A career gap doesn't have to
                <span className="font-medium italic text-[#ff7417]">
                  {" "}
                  stop your career.
                </span>
              </h2>

              <p className="mt-6 max-w-[620px] text-sm leading-6 text-[#6e6558] sm:text-base sm:leading-7">
                Whether you have taken time away from work, changed your career
                direction or are looking to restart your professional journey,
                we help you prepare for the next opportunity with confidence.
              </p>

              <div className="mt-8 space-y-4">
                {careerGapPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#173873]">
                      <Check
                        size={12}
                        strokeWidth={2.5}
                        className="text-white"
                      />
                    </div>

                    <p className="text-sm leading-5 text-[#173873]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          COMPLETE CAREER SUPPORT
      ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[720px] text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 bg-[#ff7417]" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#173873] sm:text-xs">
                Complete Career Support
              </span>

              <span className="h-[2px] w-8 bg-[#ff7417]" />
            </div>

            <h2 className="font-serif text-3xl font-semibold leading-[1.08] tracking-tight text-[#173873] sm:text-5xl">
              Everything you need to become
              <span className="font-medium italic text-[#ff7417]">
                {" "}
                career ready.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid border-t border-[#173873]/10 sm:grid-cols-2 lg:grid-cols-4">
            {supportItems.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3 border-b border-[#173873]/10 px-1 py-5 sm:px-4"
              >
                <span className="text-[10px] font-bold text-[#ff7417]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm font-semibold text-[#173873]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================
          WHO CAN BENEFIT
      ========================================================= */}

      <section className="bg-[#fffaf5]">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="mb-12">
            <div className="mb-5 flex items-center gap-3">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#173873] sm:text-xs">
                Who Can Benefit
              </span>

              <span className="h-[2px] w-8 bg-[#ff7417]" />
            </div>

            <h2 className="max-w-[650px] font-serif text-3xl font-semibold leading-[1.08] tracking-tight text-[#173873] sm:text-5xl">
              Wherever you are in your career,
              <span className="font-medium italic text-[#ff7417]">
                {" "}
                we're here to help.
              </span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {beneficiaries.map((item) => (
              <article
                key={item.number}
                className="border-t-2 border-[#173873] pt-5"
              >
                <span className="text-[10px] font-bold tracking-[0.18em] text-[#ff7417]">
                  {item.number}
                </span>

                <h3 className="mt-3 text-lg font-bold text-[#173873]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[320px] text-sm leading-6 text-[#6e6558]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="bg-[#173873]">
        <div className="mx-auto max-w-[1180px] px-5 py-20 text-center sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-[760px]">
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#ff7417] sm:text-xs">
              Your Next Opportunity
            </span>

            <h2 className="mt-5 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[68px]">
              Start building your
              <span className="block font-medium italic text-[#ff7417]">
                next chapter.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[560px] text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
              Get the guidance, preparation and career support you need to
              move forward with confidence.
            </p>

            <button
              type="button"
              onClick={handleCareerAssistance}
              className="group mt-9 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white no-underline transition-colors duration-300 hover:text-[#ff7417] sm:text-sm"
            >
              <span>Get Career Assistance</span>

              <ArrowRight
                size={17}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </button>
          </div>
        </div>
      </section>


      {/* =========================================================
          FOOTER

          Add your existing Footer component here.
      ========================================================= */}
<Footer/>
      {/* <Footer /> */}
    </main>
    </>
  );
}

export default CareerAssistance;
