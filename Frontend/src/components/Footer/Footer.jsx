import logo from "../../assets/logos/SP LOGO.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#F8F4EC] text-[#173B73]">
      {/* =====================================================
          LARGE BACKGROUND BRAND TEXT
      ====================================================== */}

      <div className="absolute left-0 right-0 top-8 z-0 overflow-hidden px-2 sm:top-10 sm:px-8 lg:top-12">
        <h2
          onMouseMove={(event) => {
            const bounds = event.currentTarget.getBoundingClientRect();
            event.currentTarget.style.setProperty(
              "--cursor-x",
              `${event.clientX - bounds.left}px`,
            );
            event.currentTarget.style.setProperty(
              "--cursor-y",
              `${event.clientY - bounds.top}px`,
            );
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.removeProperty("--cursor-x");
            event.currentTarget.style.removeProperty("--cursor-y");
          }}
          className="
            group
            relative
            mx-auto
            block
            w-full
            max-w-[100vw]
            cursor-default
            select-none
            whitespace-nowrap
            overflow-hidden
            text-center
            font-sans
            text-[clamp(32px,7vw,145px)]
            font-black
            leading-none
            tracking-[0.05em]
            text-transparent
            opacity-90
            [-webkit-text-stroke:1.2px_rgba(23,59,115,0.18)]
            sm:tracking-[0.08em]
          "
          style={{ "--cursor-x": "-999px", "--cursor-y": "-999px" }}
        >
          SKILL PARADISE
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 text-[#F9B36A]"
            style={{
              WebkitMaskImage:
                "radial-gradient(circle 90px at var(--cursor-x) var(--cursor-y), black 0%, transparent 72%)",
              maskImage:
                "radial-gradient(circle 90px at var(--cursor-x) var(--cursor-y), black 0%, transparent 72%)",
            }}
          >
            SKILL PARADISE
          </span>
        </h2>
      </div>

      {/* =====================================================
          MAIN FOOTER CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1180px] px-6 pb-10 pt-40 sm:px-8 sm:pt-44 lg:px-0 lg:pt-48">
        {/* =================================================
            TOP BORDER
        ================================================== */}

        <div className="mb-12 h-px w-full bg-[#173B73]/15 sm:mb-14" />

        {/* =================================================
            MAIN FOOTER GRID
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-12
            md:grid-cols-2
            lg:grid-cols-[1.15fr_0.7fr_0.7fr_1.15fr]
            lg:gap-10
          "
        >
          {/* =================================================
              BRAND
          ================================================== */}

          <div className="max-w-[300px]">
            {/* Logo */}

            <div className="mb-5">
              <img
                src={logo}
                alt="Skill Paradise"
                className="
                  h-11
                  w-auto
                  object-contain
                  object-left
                  transition-transform
                  duration-500
                  hover:scale-[1.03]
                "
              />
            </div>

            {/* Small Brand Accent */}

            {/* <div className="mb-5 flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#173B73]">
                Skill Paradise
              </span>

              <span className="h-[2px] w-8 bg-[#F88118]" />
            </div> */}

            {/* Description */}

            <p className="max-w-[280px] text-[13px] leading-6 text-[#6E6558]">
              Building practical skills, meaningful opportunities and a
              lifelong learning ecosystem for the next generation.
            </p>

            {/* Social Icons */}

            <div className="mt-7 flex items-center gap-3">
              {/* Instagram */}

              <a
                href="https://www.instagram.com/skill_paradise/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#173B73]/15
                  text-[#173B73]
                  transition-all
                  duration-300
                  hover:border-[#F88118]
                  hover:bg-[#F88118]
                  hover:text-white
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-4 w-4"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.8"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/company/skillparadise/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#173B73]/15
                  text-[#173B73]
                  transition-all
                  duration-300
                  hover:border-[#F88118]
                  hover:bg-[#F88118]
                  hover:text-white
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3C3.65 3 3 3.75 3 4.75S3.65 6.5 4.75 6.5 6.5 5.8 6.5 4.75 5.85 3 4.75 3ZM21 13.85c0-3.75-2-5.5-4.65-5.5-2.15 0-3.1 1.2-3.65 2.05V8.5H9.2V21h3.5v-6.2c0-1.65.3-3.25 2.35-3.25 2 0 2.02 1.9 2.02 3.35V21H21v-7.15Z" />
                </svg>
              </a>

            </div>
          </div>

          {/* =================================================
              RESOURCES
          ================================================== */}

          <div>
            <h3 className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-[#173B73]">
              Resources
            </h3>

            <ul className="space-y-4">
              {[{ label: "Courses", to: "/courses" }, { label: "Services", to: "/services" }, { label: "FAQ", to: "/#faq" }, { label: "Support", to: "/Contact" }].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="
                      text-[15px]
                      text-[#53657D]
                      transition-colors
                      duration-300
                      hover:text-[#F88118]
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              LEGAL
          ================================================== */}

          <div>
            <h3 className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-[#173B73]">
              Legal
            </h3>

            <ul className="space-y-4">
              {[
                { label: "Privacy Policy", to: "/privacy-policy" },
                { label: "Terms of Service", to: "/terms-of-service" },
                { label: "Cookie Policy", to: "/cookie-policy" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="
                      text-[15px]
                      text-[#53657D]
                      transition-colors
                      duration-300
                      hover:text-[#F88118]
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <div>
            <h3 className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-[#173B73]">
              Contact
            </h3>

            <div className="space-y-4 text-[13px] leading-6 text-[#53657D]">
              {/* Phone */}

              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#F88118]">
                  Phone
                </p>

                <a
                  href="tel:+919145015655"
                  className="block transition-colors duration-300 hover:text-[#F88118]"
                >
                  +91 9145015655
                </a>

              </div>

              {/* Email */}

              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#F88118]">
                  Email
                </p>

                <a
                  href="mailto:contact@skillparadise.com"
                  className="block break-all transition-colors duration-300 hover:text-[#F88118]"
                >
                  contact@skillparadise.com
                </a>

                <a
                  href="mailto:skillparadise3@gmail.com"
                  className="block break-all transition-colors duration-300 hover:text-[#F88118]"
                >
                  skillparadise3@gmail.com
                </a>
              </div>

              {/* Address */}

              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#F88118]">
                  Address
                </p>

                <p className="max-w-[270px]">
                  1C, 6th Floor, Wing A,
                  <br />
                  Downtown City Vista, Kharadi,
                  <br />
                  Pune, Maharashtra 411014
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM LINE
        ================================================== */}

        <div className="mt-14 border-t border-[#173B73]/10 pt-5 sm:mt-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#6E6558]">
              © {new Date().getFullYear()} Skill Paradise. All rights reserved.
            </p>

            {/* <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F88118]" />

             
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
