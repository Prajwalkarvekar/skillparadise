import { useState } from "react";
import { ArrowRight, Check, Building2, GraduationCap } from "lucide-react";
import Navbar from '../../components/common/Nabvar';
import Footer from '../../components/Footer/Footer';

const collaborationSteps = [
  {
    number: "01",
    title: "Understand Your Requirements",
    text: "We understand your institution, learners, goals and training requirements.",
  },
  {
    number: "02",
    title: "Customize the Program",
    text: "We design the syllabus, topics and delivery approach according to your requirements.",
  },
  {
    number: "03",
    title: "Plan & Deliver",
    text: "Our trainers deliver structured, practical and engaging training programs.",
  },
  {
    number: "04",
    title: "Evaluate & Improve",
    text: "We review learning outcomes and continuously improve the training experience.",
  },
];

const collaborationBenefits = [
  "Customizable syllabus",
  "Institution-specific requirements",
  "Practical and industry-relevant training",
  "Flexible training formats",
  "Programs for schools and colleges",
  "Custom quotations based on requirements",
];

function InstitutionalCollaboration() {
  const [formData, setFormData] = useState({
    personName: "",
    institutionName: "",
    email: "",
    phone: "",
    requirements: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || ""}/api/leads/institutional-collaboration`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formData.personName, companyName: formData.institutionName, email: formData.email, phone: formData.phone, requirements: formData.requirements }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Unable to submit your enquiry.");
      setSubmitted(true);
    } catch (error) { setSubmitError(error.message); }
    finally { setSubmitting(false); }
  };

  return (
    <>
    <Navbar/>
    <main className="overflow-hidden bg-[#fffaf5] text-[#173873]">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative">
        <div className="mx-auto max-w-[1180px] px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

            {/* LEFT */}
            <div>

              <div className="mb-6 flex items-center gap-3">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#173873] sm:text-xs">
                  Institutional Collaboration
                </span>

                <span className="h-[2px] w-8 bg-[#ff7417]" />
              </div>

              <h1 className="max-w-[760px] font-serif text-[42px] font-semibold leading-[1.03] tracking-tight text-[#173873] sm:text-6xl lg:text-[70px]">
                Building Skills
                <span className="block font-medium italic text-[#ff7417]">
                  Together With Institutions.
                </span>
              </h1>

              <p className="mt-7 max-w-[650px] text-[15px] leading-7 text-[#6e6558] sm:mt-8 sm:text-lg sm:leading-8">
                We collaborate with schools and colleges to create customized
                learning programs that match their students, goals and
                institutional requirements.
              </p>

              <a
                href="#institution-enquiry"
                className="group mt-8 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#173873] no-underline transition-colors duration-300 hover:text-[#ff7417] sm:mt-10 sm:text-xs"
              >
                <span>Discuss Your Requirements</span>

                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </a>

            </div>

            {/* RIGHT ABSTRACT VISUAL */}
            <div className="relative flex min-h-[300px] items-center justify-center lg:min-h-[360px]">

              <div className="absolute h-[280px] w-[280px] rounded-full border border-[#173873]/10 sm:h-[340px] sm:w-[340px]" />

              <div className="absolute h-[205px] w-[205px] rounded-full border border-[#ff7417]/20 sm:h-[255px] sm:w-[255px]" />

              <div className="relative flex h-32 w-32 items-center justify-center rounded-[30px] bg-[#173873] shadow-[0_25px_70px_rgba(23,56,115,0.16)] sm:h-40 sm:w-40">
                <Building2
                  size={58}
                  strokeWidth={1.4}
                  className="text-[#ff7417] sm:h-16 sm:w-16"
                />
              </div>

              {/* <div className="absolute bottom-2 left-2 max-w-[210px] sm:left-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#173873]">
                  Built Around Your Needs
                </p>

                <p className="mt-2 text-sm leading-6 text-[#6e6558]">
                  Flexible programs designed for your institution.
                </p>
              </div> */}

            </div>

          </div>
        </div>

        <div className="h-px bg-[#173873]/10" />
      </section>


      {/* =========================================================
          COLLABORATION INTRO
      ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#173873] sm:text-xs">
                  What We Offer
                </span>

                <span className="h-[2px] w-8 bg-[#ff7417]" />
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-[1.08] tracking-tight text-[#173873] sm:text-5xl lg:text-[54px]">
                Your institution.
                <span className="block font-medium italic text-[#ff7417]">
                  Your requirements.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-[650px] text-sm leading-7 text-[#6e6558] sm:text-base sm:leading-8">
                Every institution has different learners, objectives and
                priorities. Instead of forcing institutions into a fixed
                training structure, we work with you to understand what you
                actually need.
              </p>

              <p className="mt-5 max-w-[650px] text-sm leading-7 text-[#6e6558] sm:text-base sm:leading-8">
                From syllabus customization to training delivery and
                evaluation, our institutional collaboration model is designed
                to remain flexible and practical.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          BENEFITS
      ========================================================= */}

      <section className="bg-[#fffaf5]">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

          <div className="mb-12 max-w-[700px]">

            <div className="mb-5 flex items-center gap-3">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#173873] sm:text-xs">
                Flexible Collaboration
              </span>

              <span className="h-[2px] w-8 bg-[#ff7417]" />
            </div>

            <h2 className="font-serif text-3xl font-semibold leading-[1.08] tracking-tight text-[#173873] sm:text-5xl">
              Designed around
              <span className="font-medium italic text-[#ff7417]">
                {" "}
                your institution.
              </span>
            </h2>
          </div>

          <div className="grid gap-x-10 gap-y-0 border-t border-[#173873]/10 sm:grid-cols-2 lg:grid-cols-3">

            {collaborationBenefits.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 border-b border-[#173873]/10 py-5"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#173873]">
                  <Check
                    size={13}
                    strokeWidth={2.5}
                    className="text-white"
                  />
                </div>

                <div>
                  <span className="text-[10px] font-bold tracking-[0.16em] text-[#ff7417]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-1 text-sm font-semibold text-[#173873]">
                    {item}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          WHO WE WORK WITH
      ========================================================= */}

      <section className="bg-[#173873] text-white">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-24">

            <div>

              <div className="mb-5 flex items-center gap-3">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-white sm:text-xs">
                  Who We Work With
                </span>

                <span className="h-[2px] w-8 bg-[#ff7417]" />
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[54px]">
                Learning programs for
                <span className="block font-medium italic text-[#ff7417]">
                  every stage.
                </span>
              </h2>

              <p className="mt-6 max-w-[600px] text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                We can structure programs according to the age group, academic
                level, department, learning objectives and requirements of the
                institution.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <div className="border border-white/15 p-6">
                <GraduationCap
                  size={27}
                  strokeWidth={1.5}
                  className="text-[#ff7417]"
                />

                <h3 className="mt-5 text-base font-bold">
                  Schools
                </h3>

                <p className="mt-2 text-xs leading-5 text-white/60">
                  Skill development programs designed for school students.
                </p>
              </div>

              <div className="border border-white/15 p-6">
                <Building2
                  size={27}
                  strokeWidth={1.5}
                  className="text-[#ff7417]"
                />

                <h3 className="mt-5 text-base font-bold">
                  Colleges
                </h3>

                <p className="mt-2 text-xs leading-5 text-white/60">
                  Industry-oriented programs for college students.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          HOW COLLABORATION WORKS
      ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

          <div className="mb-12 max-w-[700px] sm:mb-16">

            <div className="mb-5 flex items-center gap-3">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#173873] sm:text-xs">
                How It Works
              </span>

              <span className="h-[2px] w-8 bg-[#ff7417]" />
            </div>

            <h2 className="font-serif text-3xl font-semibold leading-[1.08] tracking-tight text-[#173873] sm:text-5xl">
              From requirements
              <span className="font-medium italic text-[#ff7417]">
                {" "}
                to delivery.
              </span>
            </h2>

          </div>

          <div className="grid gap-0 lg:grid-cols-4">

            {collaborationSteps.map((step) => (
              <div
                key={step.number}
                className="relative border-t border-[#173873]/15 px-1 py-7 lg:border-l lg:px-7 lg:py-5 first:lg:border-l-0"
              >

                <span className="text-[10px] font-bold tracking-[0.18em] text-[#ff7417]">
                  {step.number}
                </span>

                <h3 className="mt-4 max-w-[190px] text-base font-bold leading-6 text-[#173873]">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-[210px] text-sm leading-6 text-[#6e6558]">
                  {step.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          INSTITUTION ENQUIRY FORM
      ========================================================= */}

      <section
        id="institution-enquiry"
        className="bg-[#fff0df]"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

            {/* FORM INTRO */}
            <div>

              <div className="mb-5 flex items-center gap-3">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#173873] sm:text-xs">
                  Start A Conversation
                </span>

                <span className="h-[2px] w-8 bg-[#ff7417]" />
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-[1.08] tracking-tight text-[#173873] sm:text-5xl lg:text-[54px]">
                Tell us what your
                <span className="block font-medium italic text-[#ff7417]">
                  institution needs.
                </span>
              </h2>

              <p className="mt-6 max-w-[460px] text-sm leading-7 text-[#6e6558] sm:text-base sm:leading-8">
                Share a few details about your institution and what you are
                looking for. Our team can then understand your requirements and
                discuss a suitable training solution with you.
              </p>

              <div className="mt-8 border-t border-[#173873]/15 pt-6">

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#173873]">
                  Suitable For
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="border border-[#173873]/15 bg-white/50 px-3 py-2 text-xs font-semibold text-[#173873]">
                    Schools
                  </span>

                  <span className="border border-[#173873]/15 bg-white/50 px-3 py-2 text-xs font-semibold text-[#173873]">
                    Colleges
                  </span>

                  <span className="border border-[#173873]/15 bg-white/50 px-3 py-2 text-xs font-semibold text-[#173873]">
                    Educational Institutions
                  </span>
                </div>

              </div>

            </div>


            {/* FORM */}
            <div className="border border-[#173873]/15 bg-white p-6 sm:p-8 lg:p-10">

              {submitted ? (
                <div className="flex min-h-[400px] flex-col items-center justify-center text-center">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#173873]">
                    <Check
                      size={26}
                      strokeWidth={2}
                      className="text-white"
                    />
                  </div>

                  <h3 className="mt-6 font-serif text-3xl font-semibold text-[#173873]">
                    Thank You.
                  </h3>

                  <p className="mt-3 max-w-[400px] text-sm leading-6 text-[#6e6558]">
                    Your enquiry has been recorded. Our team will review your
                    requirements and get in touch with you.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        personName: "",
                        institutionName: "",
                        email: "",
                        phone: "",
                        requirements: "",
                      });
                    }}
                    className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-[#173873] transition-colors hover:text-[#ff7417]"
                  >
                    Submit Another Enquiry
                  </button>

                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  <div className="grid gap-6 sm:grid-cols-2">

                    {/* PERSON NAME */}
                    <div>
                      <label
                        htmlFor="personName"
                        className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#173873]"
                      >
                        Your Name
                      </label>

                      <input
                        id="personName"
                        name="personName"
                        type="text"
                        value={formData.personName}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="mt-2 w-full border-0 border-b border-[#173873]/20 bg-transparent px-0 py-3 text-sm text-[#173873] outline-none transition-colors placeholder:text-[#6e6558]/50 focus:border-[#ff7417]"
                      />
                    </div>


                    {/* INSTITUTION NAME */}
                    <div>
                      <label
                        htmlFor="institutionName"
                        className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#173873]"
                      >
                        Institution Name
                      </label>

                      <input
                        id="institutionName"
                        name="institutionName"
                        type="text"
                        value={formData.institutionName}
                        onChange={handleChange}
                        placeholder="School / College name"
                        required
                        className="mt-2 w-full border-0 border-b border-[#173873]/20 bg-transparent px-0 py-3 text-sm text-[#173873] outline-none transition-colors placeholder:text-[#6e6558]/50 focus:border-[#ff7417]"
                      />
                    </div>


                    {/* EMAIL */}
                    <div>
                      <label
                        htmlFor="email"
                        className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#173873]"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="mt-2 w-full border-0 border-b border-[#173873]/20 bg-transparent px-0 py-3 text-sm text-[#173873] outline-none transition-colors placeholder:text-[#6e6558]/50 focus:border-[#ff7417]"
                      />
                    </div>


                    {/* PHONE */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#173873]"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        required
                        className="mt-2 w-full border-0 border-b border-[#173873]/20 bg-transparent px-0 py-3 text-sm text-[#173873] outline-none transition-colors placeholder:text-[#6e6558]/50 focus:border-[#ff7417]"
                      />
                    </div>

                  </div>


                  {/* REQUIREMENTS */}
                  <div>
                    <label
                      htmlFor="requirements"
                      className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#173873]"
                    >
                      Tell Us About Your Requirements
                    </label>

                    <textarea
                      id="requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      placeholder="Tell us what kind of training, syllabus or collaboration you are looking for..."
                      required
                      rows={6}
                      className="mt-3 w-full resize-none border border-[#173873]/15 bg-[#fffaf5] px-4 py-4 text-sm leading-6 text-[#173873] outline-none transition-colors placeholder:text-[#6e6558]/50 focus:border-[#ff7417]"
                    />
                  </div>


                  {/* SUBMIT */}
                  {submitError && <p role="alert" className="text-sm text-red-700">{submitError}</p>}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex items-center gap-3 bg-[#173873] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff7417]"
                  >
                    <span>{submitting ? "Sending…" : "Send Enquiry"}</span>

                    <ArrowRight
                      size={16}
                      strokeWidth={2}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </button>

                  <p className="text-[11px] leading-5 text-[#6e6558]">
                    We will use these details only to understand your
                    requirements and contact you regarding the enquiry.
                  </p>

                </form>
              )}

            </div>

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
              Institutional Partnership
            </span>

            <h2 className="mt-5 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[66px]">
              Let's build the right
              <span className="block font-medium italic text-[#ff7417]">
                program together.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[560px] text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
              Tell us what your institution is looking for and let's explore
              how we can create a customized learning experience.
            </p>

            <a
              href="#institution-enquiry"
              className="group mt-9 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white no-underline transition-colors duration-300 hover:text-[#ff7417] sm:text-sm"
            >
              <span>Discuss Your Requirements</span>

              <ArrowRight
                size={17}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </a>

          </div>

        </div>
      </section>
     
    </main>
    <Footer/>
    </>
  );
}

export default InstitutionalCollaboration;
