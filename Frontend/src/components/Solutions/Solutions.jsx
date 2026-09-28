import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  BriefcaseBusiness,
} from "lucide-react";

const solutions = [
  {
    number: "01",
    icon: Building2,
    eyebrow: "For Schools & Colleges",
    title: "Institutional Collaboration",
    description:
      "Partner with SkillParadise to deliver practical, industry-relevant training through customized programs designed around your institution's requirements.",
    link: "/institutional-collaboration",
    cta: "Explore Institutional Collaboration",
  },
  {
    number: "02",
    icon: BriefcaseBusiness,
    eyebrow: "For Organizations",
    title: "Corporate Training",
    description:
      "Upskill your teams with customized technical and professional training programs designed around your organization's goals, requirements and workforce needs.",
    link: "/corporate-training",
    cta: "Explore Corporate Training",
  },
];

function Solutions() {
  return (
    <section className="bg-[#fffaf5] text-[#173873]">
      <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

        {/* =================================================
            SECTION HEADER
        ================================================= */}
        <div className="mb-10 max-w-[720px] sm:mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#173873] sm:text-xs">
              Our Solutions
            </span>

            <span className="h-[2px] w-8 bg-[#ff7417]" />
          </div>

          <h2 className="font-serif text-3xl font-semibold leading-[1.08] tracking-tight text-[#173873] sm:text-5xl lg:text-[54px]">
            Training solutions built
            <span className="block font-medium italic text-[#ff7417]">
              around your needs.
            </span>
          </h2>

          <p className="mt-5 max-w-[650px] text-sm leading-6 text-[#6e6558] sm:text-base sm:leading-7">
            From academic institutions to growing organizations, we work with
            partners to create practical training programs that fit their
            specific goals and requirements.
          </p>
        </div>

        {/* =================================================
            SOLUTION CARDS
        ================================================= */}
        <div className="grid items-stretch gap-5 lg:grid-cols-2">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <article
                key={solution.number}
                className="
                  group
                  relative
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-[26px]
                  border
                  border-[#e5d4c0]
                  bg-[#fff0df]
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#173873]/20
                  hover:shadow-[0_20px_55px_rgba(23,56,115,0.08)]
                  sm:p-9
                  lg:p-10
                "
              >
                {/* =================================================
                    NUMBER
                ================================================= */}
                <div
                  className="
                    absolute
                    right-7
                    top-7
                    text-[10px]
                    font-bold
                    tracking-[0.2em]
                    text-[#173873]/30
                    sm:right-9
                    sm:top-9
                  "
                >
                  {solution.number}
                </div>

                {/* =================================================
                    ICON
                ================================================= */}
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#173873]
                    text-[#ff7417]
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                >
                  <Icon size={26} strokeWidth={1.6} />
                </div>

                {/* =================================================
                    EYEBROW
                ================================================= */}
                <p
                  className="
                    mt-8
                    shrink-0
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.2em]
                    text-[#ff7417]
                  "
                >
                  {solution.eyebrow}
                </p>

                {/* =================================================
                    TITLE
                    Consistent height keeps both descriptions aligned.
                ================================================= */}
                <h3
                  className="
                    mt-3
                    min-h-[78px]
                    max-w-[500px]
                    font-serif
                    text-3xl
                    font-semibold
                    leading-[1.08]
                    tracking-tight
                    text-[#173873]
                    sm:min-h-[82px]
                    sm:text-4xl
                  "
                >
                  {solution.title}
                </h3>

                {/* =================================================
                    DESCRIPTION
                    Consistent height keeps both CTA links aligned.
                ================================================= */}
                <p
                  className="
                    mt-5
                    min-h-[98px]
                    max-w-[500px]
                    text-sm
                    leading-6
                    text-[#6e6558]
                    sm:min-h-[98px]
                    sm:text-base
                    sm:leading-7
                  "
                >
                  {solution.description}
                </p>

                {/* =================================================
                    CTA
                    mt-auto forces both CTA buttons to the same line.
                ================================================= */}
                <Link
                  to={solution.link}
                  className="
                    group/link
                    mt-auto
                    inline-flex
                    w-fit
                    items-center
                    gap-3
                    pt-8
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#173873]
                    no-underline
                    transition-colors
                    duration-300
                    hover:text-[#ff7417]
                    sm:text-xs
                  "
                >
                  <span>{solution.cta}</span>

                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    className="
                      transition-transform
                      duration-300
                      group-hover/link:translate-x-1.5
                    "
                  />
                </Link>

                {/* =================================================
                    BOTTOM ACCENT
                ================================================= */}
                <div
                  className="
                    mt-8
                    h-px
                    w-12
                    shrink-0
                    bg-[#ff7417]
                    transition-all
                    duration-300
                    group-hover:w-20
                  "
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Solutions;