import { useState } from "react";
import { ArrowRight, CheckCircle2, Building2, Users, Target, Award } from "lucide-react";
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/common/Nabvar';

function CorporateTraining() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    requirements: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || ""}/api/leads/corporate-training`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || "Unable to send your enquiry. Please try again.");

      setSubmitted(true);
      setFormData({ name: "", companyName: "", email: "", phone: "", requirements: "" });
    } catch (error) {
      setSubmitError(error.message || "Unable to send your enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const trainingBenefits = [
    {
      icon: Building2,
      title: "Organization-Focused Training",
      description:
        "Training programs designed around your organization's goals, teams, technologies, and business requirements.",
    },
    {
      icon: Users,
      title: "Team Skill Development",
      description:
        "Help your employees strengthen technical and professional skills through practical, industry-focused learning.",
    },
    {
      icon: Target,
      title: "Customized Learning Paths",
      description:
        "Choose the right topics, depth, duration, and delivery format based on your team's current skill level and objectives.",
    },
    {
      icon: Award,
      title: "Practical & Industry Relevant",
      description:
        "Hands-on learning focused on real-world applications, workplace scenarios, tools, and technologies.",
    },
  ];

  const trainingAreas = [
    "Data Science & Data Analytics",
    "Artificial Intelligence & Machine Learning",
    "Full Stack Development",
    "Cloud & DevOps",
    "Software Testing",
    "Digital Marketing",
    "UI/UX Design",
    "Business Analysis",
  ];

  return (
    <>
    <Navbar/>
    <main className="w-full bg-white text-slate-800">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#fffaf5]">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

            {/* LEFT */}
            <div className="max-w-3xl">

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#F97316]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F97316]">
                  Corporate Training
                </span>
              </div>

              <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-[#173873] sm:text-5xl lg:text-6xl">
                Build stronger teams with{" "}
                <span className="text-[#F97316]">
                  industry-ready skills.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Empower your employees with practical, customized training
                programs designed around your organization's goals,
                technologies, and workforce requirements.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#corporate-enquiry"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#F97316] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-lg hover:shadow-orange-200"
                >
                  Discuss Your Training Needs

                  <ArrowRight
                    size={16}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#training-areas"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-[#173873] transition-all duration-300 hover:border-[#F97316] hover:text-[#F97316]"
                >
                  Explore Training Areas
                </a>
              </div>
            </div>

            {/* RIGHT — MINIMALIST INFO CARD */}
            <div className="relative">

              <div className="rounded-3xl border border-[#e5d4c0] bg-white p-7 shadow-[0_18px_50px_rgba(23,56,115,0.08)] sm:p-9">

                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#F97316]">
                    CORPORATE LEARNING
                  </span>

                  <span className="h-2 w-2 rounded-full bg-[#F97316]" />
                </div>

                <h2 className="mt-6 text-2xl font-semibold leading-tight text-[#173873]">
                  Training that fits your organization.
                </h2>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  From targeted technical workshops to structured learning
                  programs, we help organizations develop the capabilities
                  their teams need.
                </p>

                <div className="my-7 h-px bg-slate-100" />

                <div className="space-y-4">

                  {[
                    "Customized training programs",
                    "Practical hands-on learning",
                    "Flexible delivery options",
                    "Industry-relevant curriculum",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        size={17}
                        strokeWidth={1.8}
                        className="shrink-0 text-[#F97316]"
                      />

                      <span className="text-sm text-slate-600">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-24">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F97316]">
              Why Corporate Training?
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#173873] sm:text-4xl">
              Turn learning into workplace capability.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Technology and workplace requirements are constantly changing.
              Our corporate training programs help teams stay current,
              improve their capabilities, and apply new knowledge directly
              to their work.
            </p>

          </div>
        </div>
      </section>


      {/* =========================================================
          BENEFITS
      ========================================================= */}
      <section className="bg-[#fffaf5]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

          <div className="mb-12 max-w-2xl">

            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#F97316]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F97316]">
                What We Offer
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#173873] sm:text-4xl">
              Training designed around your team.
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              We don't believe in a one-size-fits-all approach. Your training
              program can be structured around your organization's specific
              requirements.
            </p>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {trainingBenefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group rounded-2xl border border-[#e5d4c0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(23,56,115,0.08)]"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff0df] text-[#F97316]">
                    <Icon
                      size={20}
                      strokeWidth={1.7}
                    />
                  </div>

                  <h3 className="mt-6 text-base font-semibold text-[#173873]">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {benefit.description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>


      {/* =========================================================
          TRAINING AREAS
      ========================================================= */}
      <section
        id="training-areas"
        className="bg-white"
      >
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-24">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

            {/* LEFT */}
            <div>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F97316]">
                Training Areas
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#173873] sm:text-4xl">
                Skills your teams can build.
              </h2>

              <p className="mt-5 text-sm leading-6 text-slate-600">
                Choose from our existing training domains or discuss a
                customized program based on your organization's needs.
              </p>

            </div>


            {/* RIGHT */}
            <div className="grid gap-3 sm:grid-cols-2">

              {trainingAreas.map((area, index) => (
                <div
                  key={area}
                  className="group flex items-center gap-4 rounded-xl border border-slate-200 px-5 py-4 transition-all duration-300 hover:border-[#e5d4c0] hover:bg-[#fffaf5]"
                >

                  <span className="text-[10px] font-bold tracking-[0.15em] text-[#F97316]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-medium text-[#173873]">
                    {area}
                  </span>

                  <ArrowRight
                    size={14}
                    strokeWidth={1.7}
                    className="ml-auto text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#F97316]"
                  />

                </div>
              ))}

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="bg-[#173873]">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-24">

          <div className="mx-auto max-w-2xl text-center">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff9b5a]">
              Simple Process
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              From requirement to training.
            </h2>

            <p className="mt-5 text-sm leading-6 text-white/70">
              Tell us what your organization needs and we'll work with you
              to shape the right training approach.
            </p>

          </div>


          <div className="mt-14 grid gap-8 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Understand",
                text: "We understand your team's requirements, skill levels, and learning objectives.",
              },
              {
                number: "02",
                title: "Customize",
                text: "We structure the curriculum, duration, format, and delivery around your requirements.",
              },
              {
                number: "03",
                title: "Deliver",
                text: "Your team receives practical, focused training designed for real-world application.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="border-t border-white/20 pt-6"
              >

                <span className="text-xs font-bold tracking-[0.2em] text-[#ff9b5a]">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  {step.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          CORPORATE ENQUIRY FORM
      ========================================================= */}
      <section
        id="corporate-enquiry"
        className="bg-[#fffaf5]"
      >
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-28">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

            {/* FORM INTRO */}
            <div className="lg:sticky lg:top-28">

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#F97316]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F97316]">
                  Let's Connect
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#173873] sm:text-4xl">
                Let's discuss your training requirements.
              </h2>

              <p className="mt-5 text-sm leading-6 text-slate-600">
                Share a few details about your organization and what you're
                looking for. Our team can then understand your requirements
                and discuss the right training approach with you.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Customized training programs",
                  "Flexible learning formats",
                  "Industry-focused curriculum",
                  "Training aligned with team requirements",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={17}
                      strokeWidth={1.8}
                      className="shrink-0 text-[#F97316]"
                    />

                    <span className="text-sm text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>


            {/* FORM */}
            <div className="rounded-3xl border border-[#e5d4c0] bg-white p-6 shadow-[0_18px_50px_rgba(23,56,115,0.07)] sm:p-8 lg:p-10">

              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fff0df] text-[#F97316]">
                    <CheckCircle2
                      size={28}
                      strokeWidth={1.7}
                    />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-[#173873]">
                    Thank you!
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                    Your corporate training enquiry has been received.
                    Our team will review your requirements and get in touch
                    with you.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-7 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-[#173873] transition-colors hover:border-[#F97316] hover:text-[#F97316]"
                  >
                    Submit another enquiry
                  </button>

                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  <div className="grid gap-6 sm:grid-cols-2">

                    {/* NAME */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-semibold text-[#173873]"
                      >
                        Your Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        maxLength={60}
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:border-[#F97316] focus:ring-2 focus:ring-orange-100"
                      />
                    </div>


                    {/* COMPANY */}
                    <div>
                      <label
                        htmlFor="companyName"
                        className="mb-2 block text-xs font-semibold text-[#173873]"
                      >
                        Company / Organization
                      </label>

                      <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        maxLength={120}
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        placeholder="Enter company name"
                        className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:border-[#F97316] focus:ring-2 focus:ring-orange-100"
                      />
                    </div>

                  </div>


                  <div className="grid gap-6 sm:grid-cols-2">

                    {/* EMAIL */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-semibold text-[#173873]"
                      >
                        Work Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        maxLength={120}
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:border-[#F97316] focus:ring-2 focus:ring-orange-100"
                      />
                    </div>


                    {/* PHONE */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-xs font-semibold text-[#173873]"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        maxLength={20}
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Enter phone number"
                        className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:border-[#F97316] focus:ring-2 focus:ring-orange-100"
                      />
                    </div>

                  </div>


                  {/* REQUIREMENTS */}
                  <div>
                    <label
                      htmlFor="requirements"
                      className="mb-2 block text-xs font-semibold text-[#173873]"
                    >
                      Tell Us About Your Training Requirements
                    </label>

                    <textarea
                      id="requirements"
                      name="requirements"
                      maxLength={1800}
                      value={formData.requirements}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us about your team's training needs, preferred topics, number of employees, duration, delivery preference, or any other requirements..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:border-[#F97316] focus:ring-2 focus:ring-orange-100"
                    />
                  </div>


                  {/* SUBMIT */}
                  {submitError && <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{submitError}</p>}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#F97316] text-sm font-semibold text-white transition-all duration-300 hover:bg-[#ea580c] hover:shadow-lg hover:shadow-orange-200 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send Training Enquiry"}

                    <ArrowRight
                      size={16}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>

                  <p className="text-center text-[11px] leading-5 text-slate-400">
                    Your information will only be used to understand and
                    respond to your training enquiry.
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
      <section className="bg-white">
        <div className="mx-auto max-w-[1000px] px-5 py-20 text-center sm:px-8 lg:py-24">

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F97316]">
            Ready to Get Started?
          </span>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-[#173873] sm:text-4xl">
            Let's build a training program that works for your organization.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-600">
            Share your requirements with us and let's explore how Skill
            Paradise can support your team's learning and development goals.
          </p>

          <a
            href="#corporate-enquiry"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#F97316] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-lg hover:shadow-orange-200"
          >
            Start a Conversation

            <ArrowRight
              size={16}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

        </div>
      </section>

    </main>
    <Footer/>
    </>
   
  );

}

export default CorporateTraining;
