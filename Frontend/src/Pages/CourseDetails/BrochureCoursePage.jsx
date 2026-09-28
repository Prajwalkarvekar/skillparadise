import { Fragment, useEffect, useRef, useState } from "react";
import {
  FaAndroid,
  FaAws,
  FaChartBar,
  FaBrain,
  FaClipboardList,
  FaCode,
  FaDatabase,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaJenkins,
  FaJs,
  FaLinux,
  FaPenNib,
  FaProjectDiagram,
  FaPython,
  FaReact,
  FaRobot,
  FaSearch,
  FaTable,
  FaTools,
  FaVial,
} from "react-icons/fa";
import { SiKubernetes, SiLangchain, SiMysql, SiPostman, SiSelenium } from "react-icons/si";
import Navbar from "../../components/common/Nabvar";
import Footer from "../../components/Footer/Footer";
import certificateImage from "../../assets/certificate.jpeg";

const courseData = {
  agenticAI: {
    eyebrow: "AGENTIC AI PROGRAM",
    title: "Agentic AI",
    hero: "Build intelligent systems that reason, use tools and act.",
    description:
      "Learn Python, LLMs, agent frameworks, RAG, orchestration, evaluation and production deployment through practical AI systems.",
    skills: [
      "Python",
      "LangChain",
      "LangGraph",
      "OpenAI APIs",
      "RAG",
      "Vector Databases",
      "CrewAI",
      "Docker",
    ],
    phases: [
      "AI & Python Foundations",
      "LLMs & Agent Frameworks",
      "RAG & Memory Systems",
      "Orchestration & Workflows",
      "Production AI & MLOps",
      "System Design & Automation",
    ],
    projects: [
      "AI Interviewer Agent",
      "Customer Support Automation Agent",
      "Document Q&A System using RAG",
      "Multi-agent Collaboration System",
      "Production-grade AI System",
    ],
    modules: [
      [
        "Foundations of AI & Agentic Systems",
        [
          "What is Agentic AI?",
          "Evolution from traditional AI to autonomous agents",
          "Perception, reasoning and action",
          "Types of agents and architectures",
          "LLM-powered agents",
          "Real-world applications and limitations",
        ],
      ],
      [
        "Python for AI Development",
        [
          "Python fundamentals",
          "Data structures and functions",
          "Working with APIs",
          "File handling and automation",
          "Reusable scripts",
          "Exception handling",
          "Virtual environments",
          "REST API integration",
        ],
      ],
      [
        "Modern AI & LLMs",
        [
          "Large Language Models",
          "Prompt engineering",
          "Zero-shot and few-shot prompting",
          "Embeddings and vector representations",
          "Tokenization and model behavior",
          "Open-source LLMs",
          "Fine-tuning basics",
          "Cost optimization",
        ],
      ],
      [
        "Agent Frameworks",
        [
          "LangChain agents",
          "Agent memory",
          "Tool usage and function calling",
          "Multi-agent systems",
          "Planning and reasoning agents",
          "Autonomous decision making",
        ],
      ],
      [
        "Agent Orchestration and RAG",
        [
          "LangGraph and state management",
          "Workflow-based agent design",
          "Multi-step reasoning pipelines",
          "Document ingestion",
          "Similarity search",
          "Vector database integration",
          "Hybrid search and re-ranking",
          "RAG optimization",
        ],
      ],
      [
        "Memory, Evaluation and Safety",
        [
          "Short-term and long-term memory",
          "Context windows",
          "Prompt testing",
          "Evaluation metrics",
          "Debugging agent failures",
          "Prompt injection and jailbreak prevention",
          "Responsible AI and data privacy",
        ],
      ],
      [
        "Deployment, MLOps and System Design",
        [
          "Docker and FastAPI",
          "Cloud deployment",
          "MLflow and model versioning",
          "CI/CD for AI",
          "Monitoring and logging",
          "Microservices and event-driven systems",
          "Latency, failure and cost optimization",
        ],
      ],
    ],
  },
  devops: {
    eyebrow: "DEVOPS & CLOUD PROGRAM",
    title: "DevOps & Cloud",
    hero: "Build, automate and scale modern applications.",
    description:
      "Master Linux, Git, CI/CD, Docker, Kubernetes, AWS, monitoring and deployment through production-focused projects.",
    skills: [
      "Linux",
      "Git",
      "GitHub",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "AWS",
      "CI/CD",
    ],
    phases: [
      "Linux & Version Control",
      "DevOps Fundamentals",
      "Continuous Integration",
      "Containers & Kubernetes",
      "Cloud Computing",
      "Deployment & Monitoring",
    ],
    projects: [
      "CI/CD Pipeline Project",
      "Cloud Deployment Project",
      "Containerized Application Deployment",
      "Monitoring Setup Project",
      "End-to-End DevOps Pipeline",
    ],
    modules: [
      [
        "Linux Fundamentals",
        [
          "Introduction to Linux",
          "File system and commands",
          "Shell scripting basics",
          "User and permission management",
          "Process management",
        ],
      ],
      [
        "Version Control and DevOps Fundamentals",
        [
          "Git basics",
          "Branching and merging",
          "GitHub workflow",
          "Repository management",
          "DevOps lifecycle",
          "CI/CD concepts",
          "Agile and Scrum basics",
        ],
      ],
      [
        "Continuous Integration",
        [
          "Jenkins setup and configuration",
          "Build automation",
          "Pipeline creation",
          "Git integration",
          "Automated testing",
        ],
      ],
      [
        "Containerization",
        [
          "Docker images and containers",
          "Dockerfile and Compose",
          "Container networking",
          "Image optimization",
        ],
      ],
      [
        "Orchestration",
        [
          "Kubernetes basics",
          "Pods, services and deployments",
          "Scaling applications",
          "Helm basics",
          "Cluster management",
        ],
      ],
      [
        "Cloud Computing",
        [
          "Cloud fundamentals",
          "Amazon Web Services basics",
          "Virtual machines and storage",
          "Cloud networking",
          "IAM and security",
        ],
      ],
      [
        "Deployment, Monitoring and Use Cases",
        [
          "Deployment strategies",
          "Automation scripts",
          "Monitoring deployments",
          "Rollbacks and versioning",
          "Log management",
          "Alerting systems",
          "Performance tracking",
          "Microservices architecture",
        ],
      ],
    ],
  },
  reactNative: {
    eyebrow: "REACT NATIVE PROGRAM",
    title: "React Native",
    hero: "Build cross-platform mobile apps.",
    description:
      "Learn JavaScript, React Native, navigation, state management, APIs, storage, testing and app-store deployment by building complete apps.",
    skills: [
      "React Native",
      "JavaScript",
      "Redux",
      "Context API",
      "Firebase",
      "REST APIs",
      "Android Studio",
      "Xcode",
    ],
    phases: [
      "JavaScript Foundations",
      "React and Native Fundamentals",
      "Navigation & UI",
      "State and API Integration",
      "Storage & Advanced Concepts",
      "Testing & Deployment",
    ],
    projects: [
      "E-commerce Mobile App",
      "Food Delivery App",
      "Chat and Messaging App",
      "Booking Application",
      "End-to-End Capstone App",
    ],
    modules: [
      [
        "JavaScript & ES6 Fundamentals",
        [
          "Variables and data types",
          "Functions and arrow functions",
          "Arrays and objects",
          "Spread, rest and destructuring",
          "Promises and async/await",
          "Modules and imports",
        ],
      ],
      [
        "React Basics",
        [
          "Components and JSX",
          "Rendering",
          "Props and state",
          "Event handling",
          "Conditional rendering",
          "Lists and keys",
        ],
      ],
      [
        "React Native Fundamentals",
        [
          "Environment setup",
          "View, Text, Image and ScrollView",
          "Flexbox styling",
          "Platform-specific design",
          "Debugging and performance basics",
        ],
      ],
      [
        "Navigation and UI Development",
        [
          "Stack, tab and drawer navigation",
          "Screen transitions",
          "Custom UI components",
          "Responsive design",
          "Forms and input handling",
          "Keyboard handling",
        ],
      ],
      [
        "State Management and API Integration",
        [
          "useState and useEffect",
          "Context API",
          "Redux and Redux Toolkit",
          "REST APIs",
          "Fetch and Axios",
          "Authentication",
          "Error handling and caching",
        ],
      ],
      [
        "Advanced Concepts, Storage and Testing",
        [
          "Custom hooks",
          "Performance optimization",
          "Lazy loading",
          "Animations",
          "Native modules",
          "AsyncStorage",
          "SQLite",
          "Firebase and Firestore",
          "Unit testing",
        ],
      ],
      [
        "Deployment and Real-world Apps",
        [
          "App optimization",
          "Building APK and IPA",
          "Play Store and App Store deployment",
          "Versioning and updates",
          "Enterprise mobile solutions",
          "On-demand apps",
        ],
      ],
    ],
  },
  testing: {
    eyebrow: "MANUAL & AUTOMATION TESTING PROGRAM",
    title: "Manual & Automation Testing",
    hero: "Ensure quality with smart testing practices.",
    description:
      "Build strong QA foundations across manual testing, Selenium, API testing, performance testing, SQL and continuous testing.",
    skills: [
      "Selenium",
      "JIRA",
      "Postman",
      "TestNG",
      "SQL",
      "Git",
      "API Testing",
      "CI/CD",
    ],
    phases: [
      "Testing Fundamentals",
      "Manual Testing & SQL",
      "Agile QA",
      "Automation with Selenium",
      "API & Performance Testing",
      "Real-world Quality Engineering",
    ],
    projects: [
      "Manual Testing Project",
      "Automation Testing Project",
      "API Testing Project",
      "End-to-End Testing Project",
      "Complete Testing Lifecycle Capstone",
    ],
    modules: [
      [
        "Software Testing Fundamentals",
        [
          "Introduction to software testing",
          "SDLC and STLC",
          "Types of testing",
          "Testing principles",
          "QA vs QC",
        ],
      ],
      [
        "Manual Testing and SQL",
        [
          "Test case design",
          "Test scenarios and test data",
          "Functional and non-functional testing",
          "Bug life cycle",
          "Defect tracking",
          "Database basics",
          "SQL queries and joins",
          "Data validation",
        ],
      ],
      [
        "Test Management and Agile",
        [
          "JIRA basics",
          "Test case management",
          "Bug tracking tools",
          "Reporting and documentation",
          "Agile methodology",
          "Scrum framework",
          "Tester role in Agile",
        ],
      ],
      [
        "Automation Testing with Selenium",
        [
          "Introduction to automation",
          "Selenium overview",
          "Environment setup",
          "WebDriver basics",
          "Locators and elements",
          "Test scripts",
          "Waits and synchronization",
          "TestNG",
          "Data-driven testing",
        ],
      ],
      [
        "API and Performance Testing",
        [
          "API basics",
          "REST and SOAP",
          "Postman",
          "Request and response validation",
          "API automation",
          "Load and stress testing",
          "Performance monitoring and reporting",
        ],
      ],
      [
        "Real-world Quality Engineering",
        [
          "Web application testing",
          "Mobile application testing",
          "Continuous testing in CI/CD",
          "Automation framework development",
          "End-to-end testing lifecycle",
        ],
      ],
    ],
  },
  uiux: {
    eyebrow: "UI/UX DESIGN PROGRAM",
    title: "UI/UX Design",
    hero: "Design intuitive and impactful digital experiences.",
    description:
      "Learn research, information architecture, wireframing, visual systems, prototyping, usability testing and portfolio development.",
    skills: [
      "Figma",
      "Adobe XD",
      "UX Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Usability Testing",
      "User Flows",
    ],
    phases: [
      "Design Fundamentals",
      "UX Research",
      "Information Architecture",
      "Wireframes & UI Systems",
      "Prototyping & Testing",
      "Portfolio & Case Studies",
    ],
    projects: [
      "Mobile App Design",
      "Website Redesign Project",
      "Dashboard and UI System Design",
      "UX Case Study Project",
      "End-to-End Design Capstone",
    ],
    modules: [
      [
        "Design Fundamentals",
        [
          "Color, typography and layout",
          "Visual hierarchy and composition",
          "Design psychology",
          "UI versus UX",
          "Understanding good and bad design",
        ],
      ],
      [
        "UX Research",
        [
          "User research methods",
          "Interviews and surveys",
          "User personas",
          "Empathy mapping",
          "Defining user pain points",
        ],
      ],
      [
        "Information Architecture and Wireframing",
        [
          "Content structure",
          "User flows and journey mapping",
          "Sitemap creation",
          "Navigation design",
          "Low and mid-fidelity wireframes",
          "Iteration and feedback",
        ],
      ],
      [
        "UI Design",
        [
          "Design systems and components",
          "Typography and color systems",
          "Grid and layout systems",
          "Mobile and web patterns",
          "Accessibility basics",
        ],
      ],
      [
        "Prototyping and Usability Testing",
        [
          "Interactive prototypes",
          "Microinteractions",
          "Animation basics",
          "Clickable prototypes",
          "User testing",
          "Feedback collection and analysis",
        ],
      ],
      [
        "Tools, Portfolio and Case Studies",
        [
          "Figma basics and advanced features",
          "Adobe XD",
          "Sketch overview",
          "Collaboration and handoff",
          "Building case studies",
          "Portfolio creation",
          "Personal branding and interview preparation",
        ],
      ],
    ],
  },
  businessAnalysis: {
    eyebrow: "BUSINESS ANALYSIS PROGRAM",
    title: "Business Analysis",
    hero: "Turn insights into impact.",
    description:
      "Develop practical business analysis skills across Excel, requirements, Agile, SQL, Power BI, process modeling and stakeholder communication.",
    skills: [
      "Excel",
      "Requirements",
      "Agile",
      "SQL",
      "Power BI",
      "JIRA",
      "BPMN",
      "UML",
    ],
    phases: [
      "Excel & Analysis Fundamentals",
      "Requirements Engineering",
      "Agile & Scrum",
      "SQL & Reporting",
      "Process Modeling",
      "Projects & Domain Cases",
    ],
    projects: [
      "End-to-End Business Analysis Project",
      "Requirement-to-Visualization Case",
      "Business Process Improvement Project",
      "Domain Case Study",
      "Capstone Project",
    ],
    modules: [
      [
        "Excel for Business Analysis",
        [
          "Data cleaning and formatting",
          "Logical functions",
          "VLOOKUP, HLOOKUP and XLOOKUP",
          "Pivot tables and charts",
          "Data validation",
          "Conditional formatting",
          "Dashboard creation",
          "What-if analysis",
        ],
      ],
      [
        "Business Analysis Fundamentals",
        [
          "Role of a business analyst",
          "Business analysis lifecycle",
          "Stakeholder identification",
          "Requirement gathering techniques",
          "SWOT, PESTLE, gap and root cause analysis",
        ],
      ],
      [
        "Requirement Engineering",
        [
          "Elicitation techniques",
          "Interviews, workshops and surveys",
          "BRD and FRD",
          "User stories and acceptance criteria",
          "Use cases and scenarios",
          "Traceability matrix",
          "Validation and prioritization",
        ],
      ],
      [
        "Agile and Scrum Methodology",
        [
          "Agile fundamentals",
          "Scrum framework",
          "Product owner and Scrum master",
          "Sprint planning",
          "Daily standups",
          "Reviews and retrospectives",
          "Backlog grooming",
          "Story points and estimation",
        ],
      ],
      [
        "SQL and Data Visualization",
        [
          "Database concepts and DBMS",
          "SELECT, WHERE, ORDER BY and GROUP BY",
          "Joins and subqueries",
          "Aggregate functions and views",
          "Power Query",
          "Data modeling",
          "DAX basics",
          "KPIs and dashboards",
        ],
      ],
      [
        "Process Modeling, UML and Communication",
        [
          "Process mapping and flowcharts",
          "BPMN",
          "AS-IS and TO-BE analysis",
          "Use case, activity and sequence diagrams",
          "Stakeholder communication",
          "Presentation and negotiation",
          "Documentation best practices",
        ],
      ],
      [
        "Tools, Domains and Capstone",
        [
          "JIRA and Confluence",
          "MS Visio and Lucidchart",
          "Banking, e-commerce and healthcare domains",
          "Real-world case studies",
          "Requirement gathering to recommendations",
          "End-to-end project implementation",
        ],
      ],
    ],
  },
};

const skillIcons = {
  Python: FaPython,
  LangChain: SiLangchain,
  LangGraph: FaProjectDiagram,
  "OpenAI APIs": FaBrain,
  RAG: FaSearch,
  "Vector Databases": FaDatabase,
  CrewAI: FaRobot,
  Docker: FaDocker,
  Linux: FaLinux,
  Git: FaGitAlt,
  GitHub: FaGithub,
  Jenkins: FaJenkins,
  Kubernetes: SiKubernetes,
  AWS: FaAws,
  "CI/CD": FaTools,
  "React Native": FaReact,
  JavaScript: FaJs,
  Redux: FaCode,
  "Context API": FaCode,
  Firebase: FaDatabase,
  "REST APIs": FaCode,
  "Android Studio": FaAndroid,
  Xcode: FaCode,
  Selenium: SiSelenium,
  JIRA: FaTools,
  Postman: SiPostman,
  TestNG: FaVial,
  SQL: SiMysql,
  "API Testing": FaCode,
  Figma: FaFigma,
  "Adobe XD": FaPenNib,
  "UX Research": FaSearch,
  Wireframing: FaPenNib,
  Prototyping: FaCode,
  "Design Systems": FaTools,
  "Usability Testing": FaSearch,
  "User Flows": FaProjectDiagram,
  Excel: FaTable,
  Requirements: FaClipboardList,
  Agile: FaProjectDiagram,
  "Power BI": FaChartBar,
  BPMN: FaProjectDiagram,
  UML: FaProjectDiagram,
};

function BrochureCoursePage({ courseKey }) {
  const course = courseData[courseKey];
  const requestCallCourse = {
    agenticAI: "Agentic AI",
    devops: "DevOps & Cloud Engineering",
    reactNative: "Mobile App Development",
    testing: "Manual & Automation Testing",
    uiux: "UI/UX Design",
    businessAnalysis: "Business Analysis",
  }[courseKey];
  const [openModule, setOpenModule] = useState(0);
  const [activePhase, setActivePhase] = useState(0);
  const roadmapRef = useRef(null);
  const [roadmapProgress, setRoadmapProgress] = useState(0);
  useEffect(() => {
    const cards = Array.from(
      document.querySelectorAll("main section button"),
    ).filter((button) => button.textContent.includes("Phase"));

    if (!cards.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleCards = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              Math.abs(
                first.boundingClientRect.top - window.innerHeight * 0.42,
              ) -
              Math.abs(
                second.boundingClientRect.top - window.innerHeight * 0.42,
              ),
          );

        if (visibleCards.length) {
          setActivePhase(cards.indexOf(visibleCards[0].target));
        }
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: "-18% 0px -35% 0px",
      },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [course.phases.length]);

  useEffect(() => {
    let animationFrame;

    const updateProgress = () => {
      if (!roadmapRef.current) return;

      const section = roadmapRef.current;
      const rect = section.getBoundingClientRect();
      const headingHeight = 220;
      const scrollableDistance =
        section.offsetHeight - window.innerHeight - headingHeight;

      if (scrollableDistance <= 0) return;

      const currentScroll = -rect.top - headingHeight;
      const progress = Math.min(
        1,
        Math.max(0, currentScroll / scrollableDistance)
      );

      setRoadmapProgress(progress);
      setActivePhase(Math.min(
        course.phases.length - 1,
        Math.round(progress * (course.phases.length - 1))
      ));
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    updateProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, [course.phases.length]);

  return (
    <div className="min-h-screen bg-[#F7F2EA] text-[#173873]">
      <Navbar />
      <main>
        <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-[#F7F2EA]">
          <div className="pointer-events-none absolute left-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-[#F88118]/10 blur-[130px]" />
          <div className="pointer-events-none absolute bottom-[-180px] right-[-180px] h-[520px] w-[520px] rounded-full bg-[#173873]/10 blur-[140px]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(23,56,115,0.07) 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative mx-auto w-full max-w-[1450px] px-6 py-24 sm:px-10 lg:px-16">
            <div className="mx-auto max-w-[1250px] text-center">
              <div className="mb-8 flex items-center justify-center gap-4">
                <span className="h-px w-10 bg-[#F88118]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#173873]">
                  {course.eyebrow}
                </span>
                <span className="h-px w-10 bg-[#F88118]" />
              </div>
              <h1 className="course-reveal mx-auto max-w-[1180px] text-[56px] font-black leading-[0.9] tracking-[-0.035em] sm:text-[82px] lg:text-[112px]">
                <span className="block">{course.title}</span>
                <span className="course-hero-gradient course-hero-text inline-block max-w-full">
                  {course.hero}
                </span>
              </h1>
              <p className="course-reveal mx-auto mt-9 max-w-[760px] text-[16px] leading-8 text-[#53657D] sm:text-[18px]">
                {course.description}
              </p>
              <div className="course-reveal mt-10 flex flex-wrap justify-center gap-3">
                <span className="rounded-full border border-[#173873]/15 bg-white/60 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em]">
                  6 Months
                </span>
                <span className="rounded-full border border-[#173873]/15 bg-white/60 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em]">
                  Flexible
                </span>
                <span className="rounded-full border border-[#173873]/15 bg-white/60 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em]">
                  Beginner to Intermediate
                </span>
              </div>
              <div className="course-reveal mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() =>
                    window.dispatchEvent(
                      new CustomEvent("open-request-call-modal", {
                        detail: { course: requestCallCourse },
                      })
                    )
                  }
                  className="inline-flex rounded-full bg-[#173873] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F88118]"
                >
                  Enroll in Program
                </button>

                <a
                  href="#curriculum"
                  className="inline-flex rounded-full border border-[#173873]/20 bg-white/50 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#173873] transition-all duration-300 hover:-translate-y-1 hover:border-[#F88118] hover:text-[#F88118]"
                >
                  Explore curriculum
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden border-y border-[#173873]/10 bg-white py-7">
          <p className="mb-4 text-center text-[9px] font-bold uppercase tracking-[0.28em] text-[#6E6558]">
            Tools & Technologies You&apos;ll Master
          </p>
          <div className="relative flex overflow-hidden">
            <div className="course-marquee flex min-w-max items-center gap-10">
              {[...course.skills, ...course.skills].map((skill, index) => {
                const Icon = skillIcons[skill] || FaCode;

                return (
                  <Fragment key={`${skill}-${index}`}>
                    <span className="flex items-center gap-3 whitespace-nowrap font-serif text-[24px] font-semibold text-[#173873]">
                      <Icon className="text-[23px] text-[#F88118] transition-transform duration-300 hover:scale-125" />
                      {skill}
                    </span>
                    <span className="text-[13px] text-[#173873]/20">✦</span>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="curriculum"
          className="bg-white px-6 py-24 sm:px-10 lg:px-16"
        >
          <div className="mx-auto max-w-[1250px]">
            <div className="mb-14 max-w-[900px]">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#F88118]">
                Curriculum
              </p>
              <h2 className="font-serif text-[48px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[68px]">
                A structured path to{" "}
                <span className="course-gradient-text italic">mastery.</span>
              </h2>
              <p className="mt-6 max-w-[700px] text-[15px] leading-7 text-[#6E6558]">
                Explore the complete learning journey and open any module to see
                the detailed topics covered in the {course.title} program.
              </p>
            </div>
            <div className="space-y-3">
              {course.modules.map(([title, topics], index) => {
                const isOpen = openModule === index;
                return (
                  <div
                    key={title}
                    className={`course-curriculum-card overflow-hidden rounded-[22px] border transition-all duration-500 ${isOpen ? "border-[#F88118]/30 bg-[#FCF9F4] shadow-[0_20px_60px_-45px_rgba(248,129,24,0.65)]" : "border-[#173873]/10 bg-white hover:border-[#173873]/20"}`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenModule(isOpen ? null : index)}
                      className="flex w-full items-center gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
                    >
                      <span className="font-serif text-[19px] font-semibold text-[#F88118]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">
                        <span className="block font-serif text-[21px] font-semibold sm:text-[25px]">
                          {title}
                        </span>
                        <span className="mt-1 block text-[12px] text-[#6E6558]">
                          {topics.slice(0, 3).join(" · ")}
                        </span>
                      </span>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${isOpen ? "rotate-180 bg-[#173873] text-white" : "border-[#173873]/15 bg-white"}`}
                      >
                        ↓
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-[#173873]/10 px-5 pb-7 pt-6 sm:px-7">
                          <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                            {topics.map((topic) => (
                              <div
                                key={topic}
                                className="flex items-start gap-3 text-[13px] leading-6 text-[#53657D]"
                              >
                                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#F88118]" />
                                {topic}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F2EA] px-6 py-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-[1250px]">
            <div className="grid gap-14 lg:grid-cols-[.72fr_1fr]">
              <div className="lg:sticky lg:top-24 lg:self-start">
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#F88118]">
                  Learning Journey
                </p>
                <h2 className="font-serif text-[50px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[64px]">
                  Learn in{" "}
                  <span className="course-gradient-text italic">stages.</span>
                </h2>
                <p className="mt-6 max-w-[430px] text-[15px] leading-7 text-[#6E6558]">
                  A structured six-month progression from foundations to
                  practical projects and production-ready skills.
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#F88118]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                    6 Month Program
                  </span>
                </div>
                <div className="mt-8 hidden lg:block">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#6E6558]">
                      Current phase
                    </span>
                    <span className="h-px flex-1 bg-[#173873]/10" />
                  </div>
                  <div className="mt-4 flex items-end gap-3">
                    <span className="font-serif text-[48px] font-semibold leading-none text-[#F88118]">
                      {String(activePhase + 1).padStart(2, "0")}
                    </span>
                    <span className="pb-1 text-[13px] font-medium">
                      / {String(course.phases.length).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.08em] text-[#6E6558]">
                    {course.phases[activePhase]}
                  </p>
                </div>
              </div>
              <div
                ref={roadmapRef}
                className="relative"
                style={{
                  height: `calc(${course.phases.length * 100}vh + 220px)`,
                }}
              >
                <div className="sticky top-0 flex h-[72vh] items-center justify-center overflow-hidden py-6 sm:h-screen sm:py-10">
                  <div className="relative h-[68vh] w-full sm:h-[78vh]">
                    {course.phases.map((phase, index) => {
                      const cardProgress = roadmapProgress * (course.phases.length - 1);
                      const distance = index - cardProgress;
                      let translateY = 110;
                      let scale = 0.94;
                      let opacity = 0;
                      let zIndex = 1;

                      if (distance >= 0 && distance <= 1) {
                        const progress = 1 - distance;
                        translateY = distance > 0 ? (1 - progress) * 105 : 0;
                        scale = 1;
                        opacity = distance > 0 ? Math.min(1, progress * 1.5) : 1;
                        zIndex = 20 + index;
                      }

                      if (distance < 0 && distance >= -1) {
                        const progress = Math.abs(distance);
                        translateY = -progress * 8;
                        scale = 1 - progress * 0.045;
                        opacity = 1;
                        zIndex = 10 + index;
                      }

                      if (distance < -1) {
                        translateY = -12;
                        scale = 0.94;
                        opacity = 0;
                      }

                      return (
                        <button
                          key={phase}
                          type="button"
                          onClick={() => setActivePhase(index)}
                          className="absolute inset-0 overflow-hidden rounded-[30px] border border-[#173873]/10 bg-white text-left shadow-[0_25px_80px_rgba(23,56,115,0.10)]"
                          style={{
                            transform: `translate3d(0, ${translateY}%, 0) scale(${scale})`,
                            opacity,
                            zIndex,
                            transition:
                              "transform 700ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease",
                            willChange: "transform, opacity",
                          }}
                        >
                          <div className="flex items-center justify-between border-b border-[#173873]/10 px-5 py-4 sm:px-10 sm:py-5 lg:px-12">
                            <span className="text-[9px] font-bold tracking-[0.22em] text-[#F88118] sm:text-xs">
                              PHASE {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6E6558]">
                              6 Month Program
                            </span>
                          </div>
                          <div className="flex h-[calc(100%-65px)] flex-col justify-center px-6 py-8 sm:px-10 lg:px-14 lg:py-14">
                            <span className="mb-5 h-1 w-12 rounded-full bg-[#F88118] sm:w-14" />
                            <h3 className="max-w-[650px] font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.025em] text-[#173873] sm:text-4xl lg:text-6xl">
                              {phase}
                            </h3>
                            <p className="mt-5 max-w-[600px] text-sm leading-7 text-[#6E6558] sm:text-base lg:text-lg">
                              Build practical capability through the {phase.toLowerCase()} stage of the program.
                            </p>
                            <div className="mt-7 flex flex-wrap gap-2">
                              <span className="rounded-full bg-[#F1ECE4] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#53657D]">
                                {course.skills[index % course.skills.length]}
                              </span>
                              <span className="rounded-full bg-[#F1ECE4] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#53657D]">
                                Practical learning
                              </span>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F7F2EA] px-6 py-24 text-[#173873] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-[1250px]">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#F88118]">
              Real-World Projects
            </p>
            <h2 className="max-w-[800px] font-serif text-[50px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[70px]">
              Don&apos;t just learn.{" "}
              <span className="course-gradient-text italic">Build.</span>
            </h2>
            <div className="mt-16 grid gap-px overflow-hidden rounded-[28px] border border-[#173873]/10 bg-[#173873]/10 md:grid-cols-2 lg:grid-cols-3">
              {course.projects.map((project, index) => (
                <div
                  key={project}
                  className="course-project-card group relative bg-[#F7F2EA] p-7 text-[#173873] sm:p-9"
                >
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#F88118]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-12 font-serif text-[30px] font-semibold tracking-[-0.025em]">
                    {project}
                  </h3>
                  <p className="mt-4 max-w-[430px] text-[13px] leading-7 text-[#53657D]">
                    Apply the program skills to a realistic project and build
                    evidence of your capability.
                  </p>
                  <span className="mt-8 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#173873]/15 text-[#F88118] transition-all duration-500 group-hover:translate-x-1 group-hover:border-[#F88118]">
                    ↗
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#F7F2EA] px-6 py-24 text-[#173873] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-[1250px] text-center">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#F88118]">
              Certification
            </p>
            <h2 className="mx-auto max-w-[850px] font-serif text-[48px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[70px]">
              Get certified.
              <br />
              <span className="course-gradient-text italic">
                Showcase your skills.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-[600px] text-[14px] leading-7 text-[#53657D]">
              Complete the program and receive a certificate representing your
              learning journey.
            </p>
            <div className="relative mt-16 overflow-hidden rounded-[32px] border border-[#173873]/10 bg-gradient-to-br from-[#F7F2EA] via-[#FDF8F1] to-[#F7E7D6] p-8 text-left sm:p-12 lg:p-16">
              <div className="absolute right-[-100px] top-[-100px] h-[350px] w-[350px] rounded-full bg-[#F88118]/10 blur-[100px]" />
              <div className="grid items-center gap-14 lg:grid-cols-2">
                <div className="relative">
                  <h3 className="font-serif text-[42px] font-semibold leading-[1] tracking-[-0.04em] text-[#173873] sm:text-[55px]">
                    Earn your
                    <br />
                    <span className="course-gradient-text">completion</span>
                    <br />
                    certificate.
                  </h3>
                  <div className="mt-8 space-y-5">
                    {[
                      "Complete the structured learning journey",
                      "Build practical projects",
                      "Demonstrate your skills",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 text-[13px] leading-6 text-[#53657D]">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#F88118]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="overflow-hidden rounded-[18px] border border-[#173873]/15 bg-white shadow-[0_30px_80px_-40px_rgba(23,56,115,0.45)] transition-transform duration-700 hover:rotate-[2deg] hover:scale-[1.02]">
                    <img
                      src={certificateImage}
                      alt={`${course.title} course certificate`}
                      className="block h-auto w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <style>{`
          .course-hero-gradient,
          .course-gradient-text {
            background: linear-gradient(110deg, #173873 0%, #F88118 50%, #FFB347 100%);
            background-color: transparent;
            background-size: 200% auto;
            -webkit-background-clip: text !important;
            background-clip: text !important;
            -webkit-text-fill-color: transparent;
            color: transparent;
            animation: courseGradientMove 5s ease-in-out infinite;
          }

          .course-hero-gradient {
            background: linear-gradient(110deg, #D94708 0%, #F88118 18%, #FFC05A 34%, #EF6A18 52%, #FF9D3F 72%, #D94708 88%, #F88118 100%);
            background-size: 280% auto;
          }

          .course-reveal {
            animation: courseReveal 800ms cubic-bezier(.22, 1, .36, 1) both;
          }

          .course-marquee {
            animation: courseMarquee 34s linear infinite;
          }

          .course-project-card {
            transition: background-color 500ms ease, transform 500ms cubic-bezier(.22, 1, .36, 1);
          }

          .course-project-card:hover {
            transform: translateY(-4px);
            background: linear-gradient(135deg, #173873 0%, #1F4D8C 35%, #F88118 100%);
          }

          .course-project-card:hover h3,
          .course-project-card:hover p,
          .course-project-card:hover span {
            color: #ffffff;
          }

          .course-phase-card {
            min-height: 180px;
            will-change: transform, opacity;
          }

          .course-phase-card:not(.course-phase-active) {
            opacity: 0.76;
          }

          .course-phase-card.course-phase-active {
            opacity: 1;
            transform: translateY(-5px);
          }

          .course-pulse-dot {
            animation: coursePulseDot 2s ease-in-out infinite;
          }

          @keyframes courseReveal {
            from { opacity: 0; transform: translateY(26px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes courseGradientMove {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          @keyframes courseMarquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          @keyframes coursePulseDot {
            0%, 100% { box-shadow: 0 0 0 0 rgba(248, 129, 24, 0.28); }
            50% { box-shadow: 0 0 0 7px rgba(248, 129, 24, 0.08); }
          }

          @media (max-width: 640px) {
            .course-phase-card { min-height: 0; }
          }

          @media (prefers-reduced-motion: reduce) {
            .course-hero-gradient,
            .course-gradient-text,
            .course-marquee,
            .course-pulse-dot,
            .course-reveal {
              animation: none;
            }

            .course-reveal {
              opacity: 1;
              transform: none;
            }

            .course-phase-card:not(.course-phase-active) {
              opacity: 1;
            }

            .course-phase-card.course-phase-active {
              transform: none;
            }
          }
        `}</style>
      </main>
      <Footer />
    </div>
  );
}

export default BrochureCoursePage;
