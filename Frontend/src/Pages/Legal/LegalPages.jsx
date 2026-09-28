import { Link } from "react-router-dom";
import Navbar from "../../components/common/Nabvar";
import Footer from "../../components/Footer/Footer";

const contactEmail = "contact@skillparadise.com";

const legalContent = {
  privacy: {
    eyebrow: "Privacy Policy",
    title: "Your privacy matters to us.",
    intro: "This policy explains how Skill Paradise collects, uses and safeguards information when you visit our website or enquire about a course.",
    sections: [
      ["Information we collect", "We may collect your name, email address, phone number, selected course, message and other details you submit through our contact, request-call or brochure forms. We also collect limited technical information such as browser type and pages visited to maintain and improve the website."],
      ["How we use your information", "We use your information to respond to enquiries, share course details, arrange requested calls, provide learner support and improve our services. We do not sell your personal information."],
      ["Sharing and security", "Information is shared only with authorised Skill Paradise team members and trusted service providers where needed to operate our website and respond to you. We use reasonable safeguards, but no online system can guarantee absolute security."],
      ["Your choices", "You may ask us to update, access or delete your personal information, or opt out of non-essential communication, by contacting us at the email below."],
    ],
  },
  terms: {
    eyebrow: "Terms of Service",
    title: "Clear terms for every learner.",
    intro: "These terms govern your use of the Skill Paradise website, course enquiries and learning services.",
    sections: [
      ["Using our website", "Please use this website lawfully and do not interfere with its security, availability or content. Course information, schedules, fees and availability may change; please confirm the latest details with our team before enrolling."],
      ["Enquiries and enrolment", "Submitting a form or requesting a call does not create an enrolment or guarantee admission. Enrolment, payment, refunds and course access are subject to the details shared with you at the time of registration."],
      ["Content and intellectual property", "Website content, course materials, branding, graphics and code are owned by or licensed to Skill Paradise. They may not be copied, redistributed or used commercially without written permission."],
      ["Limitation of liability", "We work to keep information accurate and services available, but cannot promise uninterrupted access or a particular academic, placement or career outcome."],
    ],
  },
  cookies: {
    eyebrow: "Cookie Policy",
    title: "How we use cookies.",
    intro: "Cookies are small files stored by your browser that help websites work smoothly and understand how visitors use them.",
    sections: [
      ["Essential cookies", "Some cookies and local storage settings are necessary for core website features, such as remembering session preferences and keeping forms working correctly."],
      ["Analytics and performance", "We may use analytics tools to understand page performance and visitor behaviour in an aggregated form. These help us improve the website and learner experience."],
      ["Managing cookies", "You can control or delete cookies using your browser settings. Disabling certain cookies may affect how some website features work."],
      ["Updates", "We may update this policy when our website or tools change. The latest version will always be published on this page."],
    ],
  },
};

function PageShell({ children }) {
  return <><Navbar />{children}<Footer /></>;
}

export function LegalPage({ type }) {
  const page = legalContent[type];
  return (
    <PageShell>
      <main className="bg-[#FCF9F4] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F88118]">{page.eyebrow}</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#173873] sm:text-5xl">{page.title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#53657D]">{page.intro}</p>
          <p className="mt-4 text-sm font-medium text-[#6E6558]">Last updated: September 10, 2026</p>
          <div className="mt-10 space-y-5">
            {page.sections.map(([title, body]) => (
              <section key={title} className="rounded-2xl border border-[#173873]/10 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-xl font-bold text-[#173873]">{title}</h2>
                <p className="mt-3 leading-7 text-[#53657D]">{body}</p>
              </section>
            ))}
          </div>
          <section className="mt-8 rounded-2xl bg-[#173873] p-6 text-white sm:p-8">
            <h2 className="text-xl font-bold">Questions about this policy?</h2>
            <p className="mt-2 text-white/80">Email us and our team will be happy to help.</p>
            <a className="mt-4 inline-block font-bold text-[#F9B36A] hover:text-white" href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </section>
        </div>
      </main>
    </PageShell>
  );
}

const services = [
  ["Industry-focused courses", "Practical training across data, software development, cloud, testing, design, marketing and emerging technologies."],
  ["Career assistance", "Guidance for portfolios, interview preparation, employability skills and placement readiness."],
  ["Corporate training", "Custom learning programs designed around your team's skills, technology stack and business goals."],
  ["Institutional collaboration", "Academic partnerships that bring industry-oriented learning experiences to students."],
];

export function ServicesPage() {
  return (
    <PageShell>
      <main className="bg-[#FCF9F4] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F88118]">Our Services</p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div><h1 className="font-serif text-4xl font-semibold text-[#173873] sm:text-5xl">Learning built for real progress.</h1><p className="mt-5 max-w-2xl text-base leading-7 text-[#53657D]">Skill Paradise helps learners, institutions and teams build practical, job-ready skills.</p></div>
            <Link to="/Contact" className="inline-flex w-fit rounded-full bg-[#F88118] px-6 py-3 font-bold text-white transition hover:bg-[#de6510]">Talk to our team</Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map(([title, body], index) => <article key={title} className="rounded-2xl border border-[#173873]/10 bg-white p-7 shadow-sm"><span className="text-sm font-bold text-[#F88118]">0{index + 1}</span><h2 className="mt-4 text-2xl font-bold text-[#173873]">{title}</h2><p className="mt-3 leading-7 text-[#53657D]">{body}</p></article>)}
          </div>
        </div>
      </main>
    </PageShell>
  );
}
