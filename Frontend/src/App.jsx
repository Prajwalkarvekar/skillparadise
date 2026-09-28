import { lazy, Suspense, useLayoutEffect, useState } from "react";
import WhatsAppButton from "./components/common/WhatsAppButton.jsx";
import BrochureModal from "./components/BrochureModal/BrochureModal";
import { Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoute from "./components/portal/ProtectedRoute.jsx";
import CookieConsent from "./components/CookieConsent/CookieConsent.jsx";


const DataScience = lazy(() => import("./Pages/CourseDetails/DataScience"));
const FullstackJava = lazy(() => import("./Pages/CourseDetails/FullstackJava"));
const DigitalMarketing = lazy(() => import("./Pages/CourseDetails/DigitalMarketing"));
const DataAnalytics = lazy(() => import("./Pages/CourseDetails/DataAnalytics.jsx"));
const DataEngineering = lazy(() => import("./Pages/CourseDetails/DataEngineering.jsx"));
const AIMLEngineering = lazy(() => import("./Pages/CourseDetails/AIMLEngineering.jsx"));
const ComingSoon = lazy(() => import("./Pages/CourseDetails/ComingSoon.jsx"));
const AgenticAI = lazy(() => import("./Pages/CourseDetails/AgenticAI.jsx"));
const DevOpsCloud = lazy(() => import("./Pages/CourseDetails/DevOpsCloud.jsx"));
const ReactNative = lazy(() => import("./Pages/CourseDetails/ReactNative.jsx"));
const ManualAutomationTesting = lazy(() => import("./Pages/CourseDetails/ManualAutomationTesting.jsx"));
const UIUXDesign = lazy(() => import("./Pages/CourseDetails/UIUXDesign.jsx"));
const BusinessAnalysis = lazy(() => import("./Pages/CourseDetails/BusinessAnalysis.jsx"));

const Courses = lazy(() => import("./Pages/Courses/Courses"));
const About = lazy(() => import("./Pages/About/About.jsx"));
const Contact = lazy(() => import("./Pages/Contact/Contact.jsx"));

const Insights = lazy(() => import("./Pages/Insights/Insights.jsx"));
const BlogDetails = lazy(() => import("./Pages/Insights/BlogDetails.jsx"));


const CareerAssistance = lazy(() => import("./Pages/CareerAssistance/CareerAssistance"));
const InstitutionalCollaboration = lazy(() => import("./Pages/InstitutionalCollab/InstitutionalCollaboration.jsx"));
const CorporateTraining = lazy(() => import("./Pages/CorporateTraining/CorporateTraining.jsx"));
const Login = lazy(() => import("./Pages/Login/Login.jsx"));
const Inquiries = lazy(() => import("./Pages/Dashboard/Inquiries.jsx"));
const Overview = lazy(() => import("./Pages/Dashboard/Overview.jsx"));
const Students = lazy(() => import("./Pages/Dashboard/Students.jsx"));
const LegalPage = lazy(() => import("./Pages/Legal/LegalPages.jsx").then((module) => ({ default: module.LegalPage })));
const ServicesPage = lazy(() => import("./Pages/Legal/LegalPages.jsx").then((module) => ({ default: module.ServicesPage })));



// ======================================================
// HOME PAGE
// ======================================================

const Home = lazy(() => import("./Pages/Home/Home.jsx"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}


// ======================================================
// APP
// ======================================================

function App() {
  const location = useLocation();
  const isPortalPage = location.pathname === "/login" || location.pathname.startsWith("/dashboard");

  // The brochure form opens only when a visitor requests a download.
  const [brochureOpen, setBrochureOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      {/* ==================================================
          ALL WEBSITE ROUTES
          ================================================== */}

      <Suspense fallback={<div className="min-h-screen bg-[#fffaf5]" role="status" aria-label="Loading page" />} >
      <Routes>

        {/* ================= HOME PAGE ================= */}

        <Route
          path="/"
          element={<Home onOpenBrochure={() => setBrochureOpen(true)} />}
        />


        {/* ================= COURSES ================= */}

        <Route
          path="/courses"
          element={<Courses />}
        />

         <Route
          path="/career-assistance"
          element={<CareerAssistance />}
        />

        <Route
          path="/institutional-collaboration"
          element={<InstitutionalCollaboration/>}
        />

        
        <Route
          path="/corporate-training"
          element={<CorporateTraining/>}
        />


        {/* ================= COURSE DETAILS ================= */}

        <Route
          path="/courses/data-science-masterclass"
          element={<DataScience />}
        />

        <Route
          path="/courses/full-stack-developer"
          element={<FullstackJava />}
        />

        <Route
          path="/courses/digital-marketing"
          element={<DigitalMarketing />}
        />

        <Route
          path="/courses/data-science"
          element={<DataScience />}
        />

        <Route
          path="/courses/data-analytics"
          element={<DataAnalytics />}
        />

        <Route
          path="/courses/data-engineering"
          element={<DataEngineering />}
        />

        <Route
          path="/courses/ai-ml-engineering"
          element={<AIMLEngineering />}
        />

        <Route
          path="/courses/agentic-ai"
          element={<AgenticAI />}
        />

        <Route
          path="/courses/devops-cloud-engineering"
          element={<DevOpsCloud />}
        />

        <Route
          path="/courses/mobile-app-development"
          element={<ReactNative />}
        />

        <Route
          path="/courses/manual-automation-testing"
          element={<ManualAutomationTesting />}
        />

        <Route
          path="/courses/ui-ux-design"
          element={<UIUXDesign />}
        />

        <Route
          path="/courses/business-analysis"
          element={<BusinessAnalysis />}
        />


        {/* ================= COMING SOON COURSES ================= */}

        <Route
          path="/courses/sap-erp-masterclass"
          element={<ComingSoon course="sap" />}
        />

        <Route
          path="/courses/cyber-security-ethical-hacking"
          element={<ComingSoon course="cyber" />}
        />

        <Route
          path="/courses/database-administrator"
          element={<ComingSoon course="dba" />}
        />


        {/* ================= ABOUT ================= */}

        <Route
          path="/About"
          element={<About />}
        />


        {/* ================= CONTACT ================= */}

        <Route
          path="/Contact"
          element={<Contact />}
        />

        <Route path="/services" element={<ServicesPage />} />
        <Route path="/privacy-policy" element={<LegalPage type="privacy" />} />
        <Route path="/terms-of-service" element={<LegalPage type="terms" />} />
        <Route path="/cookie-policy" element={<LegalPage type="cookies" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Overview /></ProtectedRoute>} />
        <Route path="/dashboard/inquiries" element={<ProtectedRoute><Inquiries /></ProtectedRoute>} />
        <Route path="/dashboard/students" element={<ProtectedRoute><Students /></ProtectedRoute>} />


        {/* ================= INSIGHTS / BLOG ================= */}

        <Route
          path="/insights"
          element={<Insights />}
        />

        <Route
          path="/insights/:slug"
          element={<BlogDetails />}
        />

      </Routes>
      </Suspense>


      {/* ==================================================
          GLOBAL WHATSAPP BUTTON
          Appears throughout the website
          ================================================== */}

      {!isPortalPage && <WhatsAppButton />}
      {!isPortalPage && <CookieConsent />}


      {/* ==================================================
          GLOBAL BROCHURE MODAL
          
          Opens automatically when the website loads.
          Can be closed using the X button.
          ================================================== */}

      {!isPortalPage && (
        <BrochureModal
          isOpen={brochureOpen}
          onClose={() => setBrochureOpen(false)}
        />
      )}

    </>
  );
}


export default App;
