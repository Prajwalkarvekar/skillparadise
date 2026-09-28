import { useState } from "react";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/common/Nabvar";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [submitState, setSubmitState] = useState({ status: "idle", message: "" });

  const courses = [
    "Full Stack Development",
    "MERN Stack Development",
    "Frontend Development",
    "Backend Development",
    "Python Development",
    "Java Development",
    "Data Science",
    "Artificial Intelligence",
    "Machine Learning",
    "Cloud Computing",
    "Cyber Security",
    "UI/UX Design",
    "Digital Marketing",
    "Other",
  ];

  const apiUrl = `${import.meta.env.VITE_API_BASE_URL || ""}/api/leads/contact`;

  const handleChange = ({ target: { name, value } }) => {
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitState({ status: "loading", message: "" });

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to send your message.");
      }

      setFormData({ firstName: "", lastName: "", email: "", phone: "", course: "", message: "" });
      setSubmitState({ status: "success", message: result.message });
    } catch (error) {
      setSubmitState({ status: "error", message: error.message || "Unable to send your message. Please try again." });
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F7F2EA] text-[#173873] overflow-hidden">

        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative bg-[#EAF1FF] px-6 sm:px-10 lg:px-16 pt-24 lg:pt-32 pb-20 lg:pb-28 overflow-hidden">

          {/* Decorative circles */}
          <div className="absolute -top-32 -right-32 w-[430px] h-[430px] rounded-full border border-[#173873]/10 pointer-events-none" />
          <div className="absolute -top-10 -right-10 w-[280px] h-[280px] rounded-full border border-[#F88118]/15 pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full border border-[#173873]/[0.06] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto">

            <div className="max-w-4xl">

              <div className="flex items-center gap-3 mb-7">
                <span className="w-10 h-[2px] bg-[#F88118]" />

                <span className="text-xs tracking-[0.28em] uppercase font-medium text-[#173873]/60">
                  Get in touch
                </span>
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl leading-[0.95] tracking-tight text-[#173873]">
                Let's start a
                <br />
                <span className="text-[#F88118]">conversation.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base sm:text-lg leading-8 text-[#173873]/65">
                Have a question, need guidance, or want to know more about
                our courses? Reach out to us and our team will be happy to
                help you take the next step.
              </p>

            </div>

          </div>
        </section>


        {/* =========================================================
            CONTACT FORM + CONTACT DETAILS
        ========================================================== */}
        <section className="px-6 sm:px-10 lg:px-16 py-20 lg:py-28 bg-white">

          <div className="max-w-7xl mx-auto">

            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-start">

              {/* =====================================================
                  FORM
              ====================================================== */}
              <div className="rounded-[2rem] border border-[#173873]/10 bg-white p-7 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(23,56,115,0.07)]">

                <div className="mb-10">

                  <p className="text-xs uppercase tracking-[0.3em] text-[#F88118] font-semibold">
                    Send us a message
                  </p>

                  <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-[#173873]">
                    How can we help?
                  </h2>

                  <p className="mt-4 text-[#173873]/55 leading-7 max-w-xl">
                    Fill out the form below and our team will get back to you
                    within 24 hours.
                  </p>

                </div>


                <form className="space-y-6" onSubmit={handleSubmit} noValidate>

                  {/* First + Last Name */}
                  <div className="grid sm:grid-cols-2 gap-5">

                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-semibold text-[#173873] mb-2"
                      >
                        First Name
                      </label>

                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="John"
                        className="w-full h-14 rounded-xl border border-[#173873]/15 bg-[#FBFCFE] px-5 text-sm text-[#173873] placeholder:text-[#173873]/35 outline-none transition-all duration-300 focus:border-[#173873]/40 focus:ring-4 focus:ring-[#173873]/5"
                      />
                    </div>


                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-semibold text-[#173873] mb-2"
                      >
                        Last Name
                      </label>

                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="w-full h-14 rounded-xl border border-[#173873]/15 bg-[#FBFCFE] px-5 text-sm text-[#173873] placeholder:text-[#173873]/35 outline-none transition-all duration-300 focus:border-[#173873]/40 focus:ring-4 focus:ring-[#173873]/5"
                      />
                    </div>

                  </div>


                  {/* Email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-5">

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-[#173873] mb-2"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full h-14 rounded-xl border border-[#173873]/15 bg-[#FBFCFE] px-5 text-sm text-[#173873] placeholder:text-[#173873]/35 outline-none transition-all duration-300 focus:border-[#173873]/40 focus:ring-4 focus:ring-[#173873]/5"
                      />
                    </div>


                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-[#173873] mb-2"
                      >
                        Phone
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="10-digit mobile number"
                        maxLength="10"
                        className="w-full h-14 rounded-xl border border-[#173873]/15 bg-[#FBFCFE] px-5 text-sm text-[#173873] placeholder:text-[#173873]/35 outline-none transition-all duration-300 focus:border-[#173873]/40 focus:ring-4 focus:ring-[#173873]/5"
                      />
                    </div>

                  </div>


                  {/* Course */}
                  <div>

                    <label
                      htmlFor="course"
                      className="block text-sm font-semibold text-[#173873] mb-2"
                    >
                      Course
                    </label>

                    <div className="relative">

                      <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                        className="appearance-none w-full h-14 rounded-xl border border-[#173873]/15 bg-[#FBFCFE] px-5 pr-12 text-sm text-[#173873] outline-none transition-all duration-300 focus:border-[#173873]/40 focus:ring-4 focus:ring-[#173873]/5 cursor-pointer"
                      >
                        <option value="" disabled>
                          Select a Course
                        </option>

                        {courses.map((course) => (
                          <option key={course} value={course}>
                            {course}
                          </option>
                        ))}
                      </select>

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none text-[#173873]"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>

                    </div>

                  </div>


                  {/* Message */}
                  <div>

                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-[#173873] mb-2"
                    >
                      Your Message <span className="text-[#F88118]">*</span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?"
                      className="w-full rounded-xl border border-[#173873]/15 bg-[#FBFCFE] px-5 py-4 text-sm text-[#173873] placeholder:text-[#173873]/35 outline-none resize-none transition-all duration-300 focus:border-[#173873]/40 focus:ring-4 focus:ring-[#173873]/5"
                    />

                  </div>


                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitState.status === "loading"}
                    className="w-full h-14 rounded-xl bg-[#173873] text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#102d5c] hover:shadow-[0_15px_30px_rgba(23,56,115,0.18)]"
                  >
                    {submitState.status === "loading" ? "Sending..." : "Send Message"}
                  </button>

                  {submitState.status !== "idle" && (
                    <p
                      role="status"
                      className={`text-sm font-medium ${submitState.status === "success" ? "text-green-700" : "text-red-600"}`}
                    >
                      {submitState.message}
                    </p>
                  )}

                </form>

              </div>


              {/* =====================================================
                  CONTACT INFORMATION
              ====================================================== */}
              <div className="space-y-5">

                {/* Email */}
                <div className="rounded-[1.5rem] border border-[#173873]/10 bg-white p-6 sm:p-7 shadow-[0_12px_35px_rgba(23,56,115,0.05)] transition-all duration-300 hover:-translate-y-1">

                  <div className="flex items-center gap-5">

                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#EAF1FF] flex items-center justify-center text-[#173873]">

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-6 h-6"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      >
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="14"
                          rx="2"
                        />
                        <path d="m3 7 9 6 9-6" />
                      </svg>

                    </div>

                    <div>

                      <p className="text-xs uppercase tracking-[0.2em] text-[#173873]/40 font-semibold">
                        Email us
                      </p>

                      <a
                        href="mailto:contact@skillparadise.com"
                        className="mt-1 block text-base sm:text-lg font-medium text-[#173873] hover:text-[#F88118] transition-colors"
                      >
                        contact@skillparadise.com
                      </a>

                    </div>

                  </div>

                </div>


                {/* Phone */}
                <div className="rounded-[1.5rem] border border-[#173873]/10 bg-white p-6 sm:p-7 shadow-[0_12px_35px_rgba(23,56,115,0.05)] transition-all duration-300 hover:-translate-y-1">

                  <div className="flex items-center gap-5">

                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#EEF9F2] flex items-center justify-center text-[#36B96B]">

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-6 h-6"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      >
                        <path d="M6.5 3.5h3l1.5 4-2.2 1.8a16 16 0 0 0 5.9 5.9l1.8-2.2 4 1.5v3c0 1.1-.9 2-2 2C10.5 19.5 4.5 13.5 4.5 5.5c0-1.1.9-2 2-2Z" />
                      </svg>

                    </div>

                    <div>

                      <p className="text-xs uppercase tracking-[0.2em] text-[#173873]/40 font-semibold">
                        Call us
                      </p>

                      <a
                        href="tel:+919145015655"
                        className="mt-1 block text-base sm:text-lg font-medium text-[#173873] hover:text-[#F88118] transition-colors"
                      >
                        +91 9145015655
                      </a>

                    </div>

                  </div>

                </div>


                {/* Location */}
                <div className="rounded-[1.5rem] border border-[#173873]/10 bg-white p-6 sm:p-7 shadow-[0_12px_35px_rgba(23,56,115,0.05)] transition-all duration-300 hover:-translate-y-1">

                  <div className="flex items-start gap-5">

                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#FFF0F0] flex items-center justify-center text-[#F05A5A]">

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-6 h-6"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      >
                        <path d="M20 10.5c0 5.5-8 10-8 10s-8-4.5-8-10a8 8 0 1 1 16 0Z" />
                        <circle cx="12" cy="10.5" r="2.5" />
                      </svg>

                    </div>

                    <div>

                      <p className="text-xs uppercase tracking-[0.2em] text-[#173873]/40 font-semibold">
                        Our location
                      </p>

                      <p className="mt-1 text-base sm:text-lg font-medium leading-7 text-[#173873]">
                        1C, 6th Floor, A Wing,
                        <br />
                        City Vista, Kharadi, Pune
                        <br />
                        411014
                      </p>

                    </div>

                  </div>

                </div>


                {/* Small Quote Card */}
                <div className="relative overflow-hidden rounded-[1.75rem] bg-[#173873] p-7 sm:p-8 mt-7">

                  <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full border border-white/10" />

                  <div className="absolute -left-16 -bottom-16 w-40 h-40 rounded-full border border-[#F88118]/20" />

                  <div className="relative">

                    <p className="text-xs uppercase tracking-[0.25em] text-[#F88118] font-semibold">
                      SkillParadise
                    </p>

                    <p className="mt-4 font-serif text-2xl sm:text-3xl leading-tight text-white">
                      Learn something.
                      <br />
                      Build something.
                      <br />
                      <span className="text-[#F88118]">
                        Become something.
                      </span>
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            LOCATION + MAP
            FAQ REMOVED
        ========================================================== */}
        <section className="px-6 sm:px-10 lg:px-16 py-20 lg:py-28 bg-[#F7F2EA]">

          <div className="max-w-7xl mx-auto">

            <div className="mb-12">

              <p className="text-xs uppercase tracking-[0.3em] text-[#F88118] font-semibold">
                Find us
              </p>

              <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl text-[#173873]">
                Connecting near
                <br />
                <span className="text-[#F88118]">and far.</span>
              </h2>

            </div>


            {/* Full-width location box */}
            <div className="rounded-[2rem] overflow-hidden border border-[#173873]/10 bg-white shadow-[0_20px_60px_rgba(23,56,115,0.08)]">

              <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

                {/* Map */}
                <div className="relative min-h-[380px] lg:min-h-[520px] bg-[#E9EEF5]">

                  <iframe
                    title="SkillParadise Location"
                    src="https://www.google.com/maps?q=1C%2C%206th%20Floor%2C%20A%20Wing%2C%20City%20Vista%2C%20Kharadi%2C%20Pune%20411014&output=embed"
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen=""
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  {/* Map overlay label */}
                  <div className="absolute left-5 bottom-5 sm:left-7 sm:bottom-7 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-4 shadow-[0_12px_35px_rgba(23,56,115,0.14)] max-w-xs">

                    <div className="flex items-start gap-3">

                      <div className="w-9 h-9 rounded-full bg-[#173873] flex items-center justify-center shrink-0 text-white">

                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="w-4 h-4"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path d="M20 10.5c0 5.5-8 10-8 10s-8-4.5-8-10a8 8 0 1 1 16 0Z" />
                          <circle cx="12" cy="10.5" r="2.5" />
                        </svg>

                      </div>

                      <div>

                        <p className="text-sm font-semibold text-[#173873]">
                          SkillParadise
                        </p>

                        <p className="mt-1 text-xs leading-5 text-[#173873]/55">
                          City Vista, Kharadi
                          <br />
                          Pune 411014
                        </p>

                      </div>

                    </div>

                  </div>

                </div>


                {/* Location information */}
                <div className="relative bg-[#EAF1FF] p-8 sm:p-10 lg:p-12 flex flex-col justify-center overflow-hidden">

                  <div className="absolute -right-24 -top-24 w-64 h-64 rounded-full border border-[#173873]/10" />

                  <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full border border-[#F88118]/20" />

                  <div className="relative">

                    <p className="text-xs uppercase tracking-[0.3em] text-[#F88118] font-semibold">
                      Our office
                    </p>

                    <h3 className="mt-5 font-serif text-4xl sm:text-5xl leading-tight text-[#173873]">
                      Come say
                      <br />
                      <span className="text-[#F88118]">
                        hello.
                      </span>
                    </h3>

                    <div className="mt-8 space-y-5">

                      <div>

                        <p className="text-sm font-semibold text-[#173873]">
                          SkillParadise
                        </p>

                        <p className="mt-2 text-sm leading-6 text-[#173873]/60">
                          1C, 6th Floor, A Wing,
                          <br />
                          City Vista, Kharadi,
                          <br />
                          Pune, Maharashtra
                          <br />
                          411014
                        </p>

                      </div>


                      <div className="h-px w-full bg-[#173873]/10" />


                      <div>

                        <p className="text-xs uppercase tracking-[0.2em] text-[#173873]/40 font-semibold">
                          Email
                        </p>

                        <a
                          href="mailto:contact@skillparadise.com"
                          className="mt-2 inline-block text-sm font-medium text-[#173873] hover:text-[#F88118] transition-colors"
                        >
                          contact@skillparadise.com
                        </a>

                      </div>


                      <div>

                        <p className="text-xs uppercase tracking-[0.2em] text-[#173873]/40 font-semibold">
                          Phone
                        </p>

                        <a
                          href="tel:+919145015655"
                          className="mt-2 inline-block text-sm font-medium text-[#173873] hover:text-[#F88118] transition-colors"
                        >
                          +91 9145015655
                        </a>

                      </div>

                    </div>


                    <a
                      href="https://www.google.com/maps/search/?api=1&query=1C%2C%206th%20Floor%2C%20A%20Wing%2C%20City%20Vista%2C%20Kharadi%2C%20Pune%20411014"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#173873] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#102d5c]"
                    >
                      Open in Maps

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

          </div>

        </section>


        {/* =========================================================
            CLOSING STATEMENT
        ========================================================== */}
        <section className="px-6 sm:px-10 lg:px-16 py-20 lg:py-28">

          <div className="max-w-6xl mx-auto">

            <div className="relative rounded-[2rem] bg-[#173873] overflow-hidden px-7 sm:px-12 lg:px-20 py-16 lg:py-20">

              {/* Decorative circles */}
              <div className="absolute -right-28 -top-28 w-72 h-72 rounded-full border border-white/10" />

              <div className="absolute -right-10 -top-10 w-36 h-36 rounded-full border border-[#F88118]/30" />

              <div className="absolute -left-20 -bottom-20 w-56 h-56 rounded-full border border-white/10" />

              <div className="relative max-w-4xl">

                <p className="text-xs uppercase tracking-[0.3em] text-[#F88118] font-semibold">
                  We're here to help
                </p>

                <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-7xl leading-[1.02] text-white">
                  Have a question?
                  <br />
                  <span className="text-[#F88118]">
                    Let's talk.
                  </span>
                </h2>

                <p className="mt-8 max-w-2xl text-base sm:text-lg leading-8 text-white/65">
                  Whether you're exploring your first course or planning your
                  next career move, our team is ready to help you find the
                  right path.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">

                  <a
                    href="mailto:contact@skillparadise.com"
                    className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#173873] transition-all duration-300 hover:bg-[#F88118] hover:text-white"
                  >
                    Email us

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

                  <a
                    href="tel:+919145015655"
                    className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#173873]"
                  >
                    Call us
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

      <Footer />
    </>
  );
};

export default Contact;
