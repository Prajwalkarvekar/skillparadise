import { useState } from "react";
import { Link } from "react-router-dom";

// Versioning lets visitors see the banner again when the consent experience
// or policy changes, without repeatedly showing it after a choice is made.
const CONSENT_KEY = "skill-paradise-cookie-consent-v2";

function CookieConsent() {
  const [choice, setChoice] = useState(() => localStorage.getItem(CONSENT_KEY));
  const [showDetails, setShowDetails] = useState(false);

  const saveChoice = (value) => {
    localStorage.setItem(CONSENT_KEY, value);
    setChoice(value);
  };

  if (choice) return null;

  return (
    <section
      className="fixed inset-x-4 bottom-4 z-[10000] mx-auto w-auto max-w-2xl rounded-2xl border border-[#173873]/15 bg-white p-5 shadow-[0_20px_60px_rgba(23,56,115,0.25)] sm:bottom-6 sm:p-6"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#FFF1E5] text-2xl" aria-hidden="true">🍪</span>
        <div>
          <h2 id="cookie-consent-title" className="text-lg font-bold text-[#173873]">We value your privacy</h2>
          <p id="cookie-consent-description" className="mt-1.5 text-sm leading-6 text-[#53657D]">
            We use essential cookies to keep the website working and optional analytics cookies to improve your experience. Read our <Link className="font-semibold text-[#F88118] underline underline-offset-2" to="/cookie-policy">Cookie Policy</Link>.
          </p>
        </div>
      </div>

      {showDetails && (
        <div className="mt-4 rounded-xl bg-[#F8F4EC] p-4 text-sm leading-6 text-[#53657D]">
          Essential cookies are always enabled. Choosing “Accept all” also allows optional analytics cookies; choosing “Reject optional” keeps only essential cookies.
        </div>
      )}

      <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
        <button type="button" onClick={() => setShowDetails((current) => !current)} className="px-3 py-2 text-sm font-semibold text-[#173873] hover:text-[#F88118]">
          {showDetails ? "Hide details" : "Cookie settings"}
        </button>
        <button type="button" onClick={() => saveChoice("essential")} className="rounded-full border border-[#173873]/20 px-5 py-2.5 text-sm font-bold text-[#173873] transition hover:border-[#173873]">
          Reject optional
        </button>
        <button type="button" onClick={() => saveChoice("all")} className="rounded-full bg-[#F88118] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_18px_rgba(248,129,24,0.25)] transition hover:bg-[#df6814]">
          Accept all
        </button>
      </div>
    </section>
  );
}

export default CookieConsent;
