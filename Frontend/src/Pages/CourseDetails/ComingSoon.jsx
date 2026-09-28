import Navbar from "../../components/common/Nabvar";
import Footer from "../../components/Footer/Footer";

const courseDetails = {
  sap: {
    eyebrow: "SAP ERP PROGRAM",
    title: "SAP ERP Masterclass",
    description:
      "A focused learning experience for enterprise systems, business processes and SAP technologies is being prepared.",
  },
  dba: {
    eyebrow: "DATABASE ADMINISTRATION PROGRAM",
    title: "Database Administrator (DBA)",
    description:
      "A practical path through database administration, performance, security, backup and recovery is coming soon.",
  },
  cyber: {
    eyebrow: "CYBER SECURITY PROGRAM",
    title: "Cyber Security & Ethical Hacking",
    description:
      "A hands-on course covering security testing, network protection and ethical hacking is currently in preparation.",
  },
};

function ComingSoon({ course }) {
  const details = courseDetails[course] ?? courseDetails.sap;

  return (
    <div className="min-h-screen bg-[#F7F2EA] text-[#173873]">
      <Navbar />

      <main className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden px-6 py-20 sm:px-10 lg:px-16">
        <div className="pointer-events-none absolute left-[-180px] top-[-180px] h-[460px] w-[460px] rounded-full bg-[#F88118]/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-[-220px] right-[-160px] h-[520px] w-[520px] rounded-full bg-[#173873]/10 blur-[130px]" />

        <div className="relative mx-auto w-full max-w-[1250px]">
          <div className="mx-auto max-w-[900px] text-center">
            <div className="mb-8 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-[#F88118] sm:w-16" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#173873]">
                {details.eyebrow}
              </span>
              <span className="h-px w-12 bg-[#F88118] sm:w-16" />
            </div>

            <h1 className="font-serif text-[52px] font-semibold leading-[0.95] tracking-[-0.04em] sm:text-[78px] lg:text-[104px]">
              {details.title}
              <span className="mt-3 block course-gradient-text italic sm:mt-5">
                Coming soon.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-[620px] text-[15px] leading-7 text-[#6E6558] sm:text-[17px]">
              {details.description}
            </p>

            <div className="mx-auto mt-12 flex max-w-[460px] items-center justify-center gap-3 rounded-full border border-[#173873]/10 bg-white/60 px-5 py-3 shadow-[0_20px_60px_-45px_rgba(23,56,115,0.5)]">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F88118]/60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#F88118]" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#53657D]">
                Course details are being crafted
              </span>
            </div>

            <a
              href="/courses"
              className="mt-10 inline-flex rounded-full bg-[#173873] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F88118]"
            >
              Explore all courses
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ComingSoon;
