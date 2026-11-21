import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";

type IconName =
  | "arrow"
  | "building"
  | "funding"
  | "shield"
  | "rocket"
  | "factory"
  | "globe"
  | "heart"
  | "chart"
  | "check"
  | "clock"
  | "lock"
  | "strategy"
  | "menu"
  | "close"
  | "phone"
  | "mail"
  | "pin"
  | "leaf"
  | "cow"
  | "tax"
  | "chevron"
  | "search";
const iconPaths: Record<IconName, ReactNode> = {
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  building: <path d="M3 21h18M5 21V7l7-4 7 4v14M9 10h1m4 0h1m-6 4h1m4 0h1m-5 7v-4h4v4" />,
  funding: <path d="M3 20h18M5 17V9m5 8V5m5 12v-6m5 6V3M3 7l6-4 5 5 7-6" />,
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  rocket: (
    <>
      <path d="m9 15-3-3c2-5 5-8 11-9l4 4c-1 6-4 9-9 11l-3-3Z" />
      <path d="M5 16c-2 1-3 5-3 5s4-1 5-3m8-9h.01" />
    </>
  ),
  factory: <path d="M3 21V9l6 4V9l6 4V6h6v15H3Zm4-4h1m4 0h1m4 0h1" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18m0-18a15 15 0 0 0 0 18" />
    </>
  ),
  heart: (
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
  ),
  chart: <path d="M4 19V9m6 10V5m6 14v-7m5 9H2" />,
  check: <path d="m5 12 4 4L19 6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  strategy: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  phone: (
    <path d="M22 17v3a2 2 0 0 1-2.2 2A20 20 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.5c.9.4 1.8.6 2.8.7A2 2 0 0 1 22 17Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2" />
    </>
  ),
  leaf: (
    <>
      <path d="M20 4c-8 0-14 4-14 10 0 3 2 5 5 5 6 0 9-7 9-15Z" />
      <path d="M4 21c2-5 6-8 12-11" />
    </>
  ),
  cow: (
    <path d="M6 8 3 5v5l3 2v5c0 2 2 4 6 4s6-2 6-4v-5l3-2V5l-3 3c-3-2-9-2-12 0Zm3 6h.01m6 0h.01M10 18h4" />
  ),
  tax: (
    <>
      <path d="M19 5 5 19" />
      <circle cx="7" cy="5" r="2" />
      <circle cx="17" cy="19" r="2" />
    </>
  ),
  chevron: <path d="m9 18 6-6-6-6" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
};
function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {iconPaths[name]}
    </svg>
  );
}

const services = [
  [
    "Business Registration",
    "/business-registration",
    "building",
    "Private Limited, LLP, OPC and Section 8 formation.",
  ],
  [
    "Funding Solutions",
    "/funding-solutions",
    "funding",
    "Grants, loans, NBFC solutions and investment instruments.",
  ],
  [
    "GST & Compliance",
    "/gst-compliance",
    "shield",
    "GST registration, returns, tax, audit and ITR.",
  ],
  ["Startup India", "/startup-india", "rocket", "DPIIT recognition and startup support."],
  ["MSME Services", "/msme-services", "factory", "Udyam registration, benefits and recognition."],
  ["Import & Export", "/import-export", "globe", "IEC, ICEGATE and global trade support."],
  ["NGO Registration", "/ngo-registration", "heart", "Darpan, 80G, 12A and Section 8 services."],
  ["Certifications", "/certifications", "check", "ISO, BIS CRS and FSSAI support."],
] as const;

type Page = {
  eyebrow: string;
  title: string;
  intro: string;
  overview: string;
  icon: IconName;
  features: [string, string][];
  process: string[];
  faqs: [string, string][];
  dark?: boolean;
};
type SchemeOption = {
  name: string;
  sector: string;
  type: string;
  focus: string;
  icon: IconName;
};
const schemeOptions: SchemeOption[] = [
  {
    name: "NAIF",
    sector: "Agriculture",
    type: "Credit & Loans",
    focus: "Financing support for eligible storage, processing, logistics and farm-gate infrastructure.",
    icon: "leaf",
  },
  {
    name: "AHIDF",
    sector: "Animal Husbandry",
    type: "Credit & Loans",
    focus: "Infrastructure finance for eligible dairy, meat processing, feed and allied projects.",
    icon: "cow",
  },
  {
    name: "Section 80-IAC",
    sector: "Startups",
    type: "Tax & Incentives",
    focus: "Tax-exemption application guidance for eligible DPIIT-recognized startups.",
    icon: "tax",
  },
];
const pages: Record<string, Page> = {
  "/business-registration": {
    eyebrow: "Build on the right foundation",
    title: "Business registration, made clear and credible.",
    intro:
      "Choose and register the right legal structure with expert support through documentation, filing and approval.",
    overview:
      "Safemaxx supports Private Limited Company, LLP, One Person Company and Section 8 Company registrations. Each has distinct ownership, compliance, funding and liability considerations. We help you understand the differences before beginning the online registration journey.",
    icon: "building",
    features: [
      [
        "Private Limited Company",
        "A separate legal entity with limited liability, credibility and an investor-ready structure.",
      ],
      [
        "Limited Liability Partnership",
        "Partnership flexibility with limited liability and lower compliance requirements.",
      ],
      [
        "One Person Company",
        "Corporate recognition and limited liability for independent entrepreneurs.",
      ],
      ["Section 8 Company", "A structured non-profit entity for charitable and social objectives."],
    ],
    process: [
      "Structure consultation",
      "Document preparation",
      "Name and filing support",
      "Registration guidance",
    ],
    faqs: [
      [
        "Which structure should I choose?",
        "It depends on founders, funding plans, compliance capacity and long-term goals. Safemaxx reviews these factors during consultation.",
      ],
      [
        "Is registration online?",
        "Yes. Safemaxx describes its registration support as fully online, subject to authority requirements.",
      ],
      [
        "Is Startup India the same as incorporation?",
        "No. An eligible entity is incorporated first, then DPIIT recognition is applied for separately.",
      ],
    ],
  },
  "/funding-solutions": {
    eyebrow: "Capital for the next chapter",
    title: "Turn business potential into financial opportunity.",
    intro:
      "Navigate grants, loans, NBFC finance, working capital and investment instruments with a path shaped around your business.",
    overview:
      "Safemaxx provides advisory across government grants, bank and NBFC finance, working capital, project financing and equity or debt instruments. The process begins with your business stage, financial profile and intended use of funds—not a one-size-fits-all product.",
    icon: "funding",
    dark: true,
    features: [
      [
        "Startup Funding",
        "Guidance across bootstrapping, angel capital, venture capital, government support and debt.",
      ],
      [
        "Government Grants",
        "Scheme identification, documents, application and compliance support for eligible businesses.",
      ],
      [
        "Business Loans",
        "Support for term loans, working capital, MSME loans and project finance.",
      ],
      ["NBFC Solutions", "Alternative financing suited to varied business profiles."],
      ["Investment Instruments", "Guidance across appropriate equity and debt strategies."],
      ["Working Capital", "Support for inventory, operations and short-term cash-flow needs."],
    ],
    process: [
      "Requirement analysis",
      "Eligibility review",
      "Funding strategy",
      "Application follow-through",
    ],
    faqs: [
      [
        "Is approval guaranteed?",
        "No. Eligibility, documentation and the lender or authority’s final decision all matter.",
      ],
      [
        "What documents are needed?",
        "These may include KYC, registration proof, tax records, bank statements, financials and a business plan.",
      ],
      [
        "Can you compare debt and equity?",
        "Yes. Safemaxx covers both strategies based on business stage and objectives.",
      ],
    ],
  },
  "/startup-india": {
    eyebrow: "DPIIT recognition",
    title: "Unlock the advantages built for India’s startups.",
    intro:
      "Secure guidance for Startup India registration and DPIIT recognition through a clear online process.",
    overview:
      "Startup India registration is a recognition process managed by DPIIT. It is separate from incorporation and supports eligible innovation-led startups through government opportunities and simplified compliance.",
    icon: "rocket",
    features: [
      [
        "DPIIT Recognition",
        "Official recognition of an eligible entity under the Startup India initiative.",
      ],
      [
        "Funding Access",
        "Potential access to eligible government schemes and funding opportunities.",
      ],
      [
        "IPR Support",
        "Applicable intellectual-property support and rebates for eligible startups.",
      ],
      [
        "Simplified Compliance",
        "Self-certification provisions under specified laws where eligible.",
      ],
    ],
    process: [
      "Eligibility review",
      "Entity and document check",
      "DPIIT application",
      "Recognition support",
    ],
    faqs: [
      [
        "Must I incorporate first?",
        "Yes. Recognition follows incorporation of an eligible entity.",
      ],
      [
        "Does recognition grant tax exemption?",
        "No. Section 80-IAC has separate eligibility and approval requirements.",
      ],
      [
        "Is every new business eligible?",
        "No. Current criteria include entity age, turnover, innovation and scalability requirements.",
      ],
    ],
  },
  "/gst-compliance": {
    eyebrow: "Stay compliant. Stay focused.",
    title: "GST and tax support without the complexity.",
    intro:
      "Get practical support for GST registration, returns, notices, audit and ITR while you focus on business.",
    overview:
      "Safemaxx supports GST registration and filing, tax compliance, audit and ITR services. A structured approach to records, deadlines and submissions helps businesses reduce avoidable errors.",
    icon: "shield",
    features: [
      ["GST Registration", "Support with eligibility, documentation and filing."],
      ["GST Returns", "Assistance with periodic return preparation and filing."],
      ["Audit Support", "Organized documentation and professional support for audit requirements."],
      ["Income Tax Returns", "ITR filing support for businesses and promoters."],
    ],
    process: [
      "Compliance review",
      "Records and documents",
      "Preparation and verification",
      "Filing and support",
    ],
    faqs: [
      [
        "Does every business need GST?",
        "No. Applicability depends on turnover, activity, location and statutory rules.",
      ],
      [
        "Can you support ongoing returns?",
        "Yes. Safemaxx’s published services include returns and ongoing compliance.",
      ],
      [
        "What records are needed?",
        "Typically invoices, purchases, expenses, bank records and prior returns.",
      ],
    ],
  },
  "/msme-services": {
    eyebrow: "Recognition for growing enterprises",
    title: "Make your MSME status work for your business.",
    intro:
      "Complete Udyam registration and understand support pathways for eligible micro, small and medium enterprises.",
    overview:
      "Udyam is the official registration framework for eligible MSMEs in India. Safemaxx assists with registration, documentation and understanding relevant benefits, subject to current government eligibility.",
    icon: "factory",
    features: [
      ["Udyam Registration", "Guided online registration for eligible enterprises."],
      ["Business Recognition", "An official MSME identity that can support credibility."],
      ["Scheme Awareness", "Guidance on relevant MSME opportunities based on eligibility."],
      ["Growth Support", "Connect registration with funding, compliance and expansion planning."],
    ],
    process: [
      "Eligibility check",
      "Information collection",
      "Udyam filing",
      "Certificate and next steps",
    ],
    faqs: [
      ["What is Udyam?", "The Government of India’s official MSME registration system."],
      ["Does Udyam guarantee benefits?", "No. Each loan, subsidy or scheme has its own criteria."],
      [
        "Can service firms register?",
        "Eligible manufacturing and service enterprises may register under current rules.",
      ],
    ],
  },
  "/import-export": {
    eyebrow: "Trade beyond boundaries",
    title: "Your first steps into global trade, simplified.",
    intro:
      "Move confidently through IEC and ICEGATE registration with support for importing and exporting.",
    overview:
      "Safemaxx supports Import Export Code registration and ICEGATE onboarding. IEC is required for most imports and exports, while ICEGATE is the Indian Customs gateway for filings and communication.",
    icon: "globe",
    features: [
      ["IEC Registration", "Application support for the Import Export Code."],
      ["ICEGATE Registration", "Onboarding to the Indian Customs electronic gateway."],
      ["Document Guidance", "Support on business, identity and banking information."],
      ["Trade Support", "Practical guidance for businesses entering international trade."],
    ],
    process: [
      "Requirement review",
      "Document preparation",
      "Portal registration",
      "Verification support",
    ],
    faqs: [
      [
        "What is IEC?",
        "An Import Export Code issued through DGFT for most import-export activities.",
      ],
      ["What is ICEGATE?", "The Indian Customs gateway for customs filings and communication."],
      [
        "Are they the same?",
        "No. IEC identifies the trader; ICEGATE provides electronic customs access.",
      ],
    ],
  },
  "/ngo-registration": {
    eyebrow: "Structure for social impact",
    title: "Build trust around the work that matters.",
    intro:
      "Establish your non-profit with Section 8, NGO Darpan, 12A and 80G registration support.",
    overview:
      "Safemaxx supports Section 8 company formation, NGO Darpan registration and 12A and 80G applications. These help eligible organizations establish legal structure, government-facing identity and tax-related registrations.",
    icon: "heart",
    features: [
      ["Section 8 Company", "A formal non-profit structure for social-impact objectives."],
      ["NGO Darpan", "Registration support for the NITI Aayog platform."],
      [
        "12A Registration",
        "Application support for eligible organizations seeking exemption status.",
      ],
      ["80G Registration", "Guidance around donor deduction benefits for eligible organizations."],
    ],
    process: [
      "Organization review",
      "Registration roadmap",
      "Documents and application",
      "Submission support",
    ],
    faqs: [
      [
        "Is Section 8 the only NGO form?",
        "No. Different legal structures exist; Safemaxx specifically supports Section 8 alongside Darpan, 12A and 80G.",
      ],
      [
        "Are 12A and 80G the same?",
        "No. 12A relates to the organization; 80G concerns eligible donors.",
      ],
      [
        "Does Darpan replace incorporation?",
        "No. It is separate from the underlying legal structure.",
      ],
    ],
  },
  "/certifications": {
    eyebrow: "Standards that build confidence",
    title: "Certification and compliance, clearly managed.",
    intro:
      "Navigate ISO, BIS CRS and FSSAI requirements from documentation to testing or audit coordination.",
    overview:
      "Safemaxx provides support across ISO certification pathways, BIS CRS for applicable electronics and IT products, and FSSAI registrations or licences for food businesses.",
    icon: "check",
    features: [
      ["ISO Certification", "Gap assessment, documentation and accredited audit coordination."],
      ["BIS CRS", "Support including coordination with BIS-recognized testing laboratories."],
      ["FSSAI", "Help identifying and applying for the appropriate food-business category."],
      ["Ongoing Support", "Assistance for renewals and surveillance requirements."],
    ],
    process: [
      "Requirement mapping",
      "Gap and document review",
      "Testing or audit",
      "Certification follow-through",
    ],
    faqs: [
      [
        "Which certification is needed?",
        "It depends on industry, products, customers and regulatory context.",
      ],
      [
        "Does Safemaxx issue it?",
        "No. Relevant authorities issue certificates; Safemaxx supports the process.",
      ],
      [
        "Is FSSAI the same for all?",
        "No. The category depends on the business nature, scale and turnover.",
      ],
    ],
  },
  "/schemes": {
    eyebrow: "Government-backed opportunities",
    title: "Explore schemes aligned with real business needs.",
    intro:
      "Understand NAIF, AHIDF and Startup India tax-exemption pathways before committing time and documentation.",
    overview:
      "Safemaxx highlights agriculture infrastructure finance, animal husbandry infrastructure finance and Section 80-IAC tax exemption for eligible DPIIT-recognized startups. Each requires an individual eligibility assessment.",
    icon: "strategy",
    dark: true,
    features: schemeOptions.map(
      ({ name, focus }): [string, string] => [name, focus],
    ),
    process: [
      "Scheme discovery",
      "Eligibility assessment",
      "Project and documents",
      "Application guidance",
    ],
    faqs: [
      [
        "Does listing mean eligibility?",
        "No. Current rules, applicant profile and project all matter.",
      ],
      ["Is funding guaranteed?", "No. Applications remain subject to authority approval."],
      [
        "Can Safemaxx help with documents?",
        "Yes. Published services include eligibility, documentation and application support.",
      ],
    ],
  },
};

function go(path: string) {
  history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function Link({
  to,
  children,
  className = "",
  onClick,
}: {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        go(to);
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}
function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className={`brand ${light ? "light" : ""}`}>
      <img src="/safemaxx-logo.png?v=2" alt="Safemaxx Business Solutions logo" />
      <span>
        <b>Safemaxx</b>
        <small>Business Solutions</small>
      </span>
    </Link>
  );
}
function Intro({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const timer = window.setTimeout(() => setVisible(false), 500);
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => setLeaving(true), 2400);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!leaving) return;
    const timer = window.setTimeout(() => setVisible(false), 600);
    return () => window.clearTimeout(timer);
  }, [leaving]);

  useEffect(() => {
    if (!visible) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  useEffect(() => {
    if (!visible) onComplete();
  }, [visible, onComplete]);

  if (!visible) return null;

  return (
    <div
      className={`intro-screen ${leaving ? "leaving" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to Safemaxx Business Solutions"
    >
      <button className="intro-skip" onClick={() => setLeaving(true)}>
        Skip intro <Icon name="arrow" size={15} />
      </button>
      <div className="intro-content">
        <div className="intro-mark">
          <img src="/safemaxx-logo.png?v=2" alt="" />
        </div>
        <span className="intro-brand">Safemaxx</span>
        <span className="intro-caption">Business Solutions</span>
        <span className="intro-rule" />
        <p className="intro-kicker">Clarity for every business move</p>
        <h1>
          Your Business
          <br />
          <em>Safely Maximise</em>
        </h1>
        <div className="intro-progress" aria-hidden="true">
          <span />
        </div>
        <span className="intro-location">Trusted guidance · Pan India</span>
      </div>
    </div>
  );
}
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const ob = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("shown");
            ob.unobserve(e.target);
          }
        }),
      { threshold: 0.1 },
    );
    els.forEach((x) => ob.observe(x));
    return () => ob.disconnect();
  });
}

function Header({ path }: { path: string }) {
  const [open, setOpen] = useState(false),
    [solid, setSolid] = useState(false);
  useEffect(() => {
    const f = () => setSolid(scrollY > 24);
    f();
    addEventListener("scroll", f);
    return () => removeEventListener("scroll", f);
  }, []);
  return (
    <header className={solid ? "solid" : ""}>
      <div className="topbar">
        <div className="topbar-inner">
          <span className="topbar-note">
            <i />
            Clarity for every business move
          </span>
          <div className="topbar-contact">
            <span className="topbar-location">Pan India Services</span>
            <span className="topbar-separator" />
            <a href="tel:+919119126682">
              <Icon name="phone" size={13} />
              +91 91191 26682
            </a>
          </div>
        </div>
      </div>
      <div className="nav">
        <Brand />
        <span className="nav-divider" aria-hidden="true" />
        <nav className="desktop" aria-label="Primary navigation">
          <Link to="/" className={path === "/" ? "current" : ""}>
            Home
          </Link>
          <Link to="/about" className={path === "/about" ? "current" : ""}>
            About Us
          </Link>
          <div className="drop">
            <button className={pages[path] ? "current" : ""}>
              Services <span aria-hidden="true">+</span>
            </button>
            <div className="mega">
              <div>
                <span className="eyebrow">What we do</span>
                <h3>Everything your business needs to move forward.</h3>
                <p>Registration, funding, compliance and growth support—under one roof.</p>
              </div>
              <div className="mega-links">
                {services.map((s) => (
                  <Link to={s[1]} key={s[1]}>
                    <i>
                      <Icon name={s[2]} />
                    </i>
                    <span>
                      <b>{s[0]}</b>
                      <small>{s[3]}</small>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link
            to="/funding-solutions"
            className={path === "/funding-solutions" ? "current" : ""}
          >
            Funding Solutions
          </Link>
          <Link to="/schemes" className={path === "/schemes" ? "current" : ""}>
            Schemes
          </Link>
          <Link to="/contact" className={path === "/contact" ? "current" : ""}>
            Contact Us
          </Link>
        </nav>
        <div className="nav-actions">
          <Link to="/contact" className="btn primary nav-cta">
            Free Consultation <Icon name="arrow" size={16} />
          </Link>
          <button className="hamb" aria-label="Menu" onClick={() => setOpen(!open)}>
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
      <div className={`mobile ${open ? "open" : ""}`}>
        <nav>
          {[
            ["Home", "/"],
            ["About Us", "/about"],
            ["Funding Solutions", "/funding-solutions"],
            ["Schemes", "/schemes"],
            ["Contact Us", "/contact"],
          ].map((x) => (
            <Link to={x[1]} onClick={() => setOpen(false)} key={x[1]}>
              {x[0]}
              <Icon name="chevron" size={16} />
            </Link>
          ))}
          <small>Services</small>
          <div>
            {services.map((s) => (
              <Link to={s[1]} onClick={() => setOpen(false)} key={s[1]}>
                <Icon name={s[2]} size={17} />
                {s[0]}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
function Heading({
  label,
  title,
  text,
  left = false,
}: {
  label: string;
  title: ReactNode;
  text?: string;
  left?: boolean;
}) {
  return (
    <div className={`heading ${left ? "left" : ""}`} data-reveal>
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
function Growth() {
  return (
    <div
      className="growth"
      role="img"
      aria-label="A business roadmap from building strong foundations to finding funding and growing with confidence"
    >
      <div className="journey-heading">
        <span>The business journey</span>
        <b>One clear step at a time</b>
      </div>
      <svg className="journey-route" viewBox="0 0 520 530" fill="none" aria-hidden="true">
        <path
          className="journey-road"
          d="M54 454C117 419 128 372 184 362c63-12 103 29 144-17 42-46-50-86-3-137 39-42 91 5 119-48 18-34 2-70 31-105"
        />
        <path
          className="journey-centerline"
          d="M54 454C117 419 128 372 184 362c63-12 103 29 144-17 42-46-50-86-3-137 39-42 91 5 119-48 18-34 2-70 31-105"
        />
      </svg>
      <div className="journey-start" aria-hidden="true">
        <span>YOU ARE HERE</span>
        <i>
          <Icon name="building" size={20} />
        </i>
      </div>
      {[
        ["building", "Build your base", "Registration & compliance"],
        ["funding", "Find the right fit", "Funding options & schemes"],
        ["rocket", "Grow with confidence", "A plan made for your goals"],
      ].map((step, index) => (
        <div className={`journey-step journey-step-${index + 1}`} key={step[1]}>
          <span className="journey-step-number">0{index + 1}</span>
          <i>
            <Icon name={step[0] as IconName} size={19} />
          </i>
          <span className="journey-step-copy">
            <b>{step[1]}</b>
            <small>{step[2]}</small>
          </span>
        </div>
      ))}
      <div className="journey-finish" aria-hidden="true">
        <span className="journey-finish-icon">
          <Icon name="chart" size={23} />
        </span>
        <span>
          <small>THE DESTINATION</small>
          <b>Your next chapter</b>
        </span>
      </div>
    </div>
  );
}

function Home() {
  const [activeFunding, setActiveFunding] = useState<number | null>(null);
  const core = [
    ...services.slice(0, 7),
    [
      "Business Growth Strategy",
      "/about",
      "chart",
      "Expansion planning, strategic direction and growth consultation.",
    ] as const,
  ];
  const fundingOptions = [
    [
      "Startup Funding",
      "Explore bootstrapping, angel capital, venture funding and eligible startup support based on your business stage and plans.",
    ],
    [
      "Government Grants",
      "Find relevant grant opportunities and understand eligibility, documentation and application steps. Approval depends on the scheme authority.",
    ],
    [
      "Business Loans",
      "Compare suitable bank and MSME loan routes for term finance, projects or working capital, with repayment capacity in mind.",
    ],
    [
      "NBFC Solutions",
      "Review alternative finance options for different business profiles, including the costs, terms and eligibility to consider.",
    ],
    [
      "Working Capital Support",
      "Explore ways to support everyday cash-flow needs such as inventory, receivables and operating expenses.",
    ],
  ];
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div data-reveal>
            <span className="kicker">Integrated business advisory</span>
            <h1>
              Your Business
              <br />
              <em>Safely Maximise.</em>
            </h1>
            <p>
              From business registration and compliance to funding and growth strategy, we provide
              comprehensive solutions that help businesses move forward with confidence.
            </p>
            <div className="actions">
              <Link to="/business-registration" className="btn primary">
                Start Your Business <Icon name="arrow" size={18} />
              </Link>
              <Link to="/contact" className="btn outline">
                Get Free Consultation
              </Link>
            </div>
            <div className="trust">
              {[
                ["clock", "Fast Process"],
                ["shield", "Trusted Experts"],
                ["globe", "Pan India Support"],
              ].map((x) => (
                <span key={x[1]}>
                  <i>
                    <Icon name={x[0] as IconName} size={16} />
                  </i>
                  {x[1]}
                </span>
              ))}
            </div>
          </div>
          <Growth />
        </div>
      </section>
      <section className="section intro">
        <div className="container split">
          <div className="brand-art" data-reveal>
            <img src="/safemaxx-logo.png?v=2" alt="" />
            <p>Business, funding and compliance expertise working as one.</p>
            <b>
              Clear guidance.
              <br />
              Confident decisions.
            </b>
          </div>
          <div>
            <Heading
              left
              label="Your business solutions partner"
              title={
                <>
                  From an idea to a business built for <em>what’s next.</em>
                </>
              }
            />
            <p className="lead" data-reveal>
              Safemaxx helps startups, MSMEs and growing enterprises navigate the practical work
              behind building and expanding a business—from choosing a legal structure to managing
              compliance and finding suitable funding paths.
            </p>
            <div className="checks">
              {[
                "Business setup & recognition",
                "Funding & financial solutions",
                "Compliance & certifications",
                "Expansion & strategic support",
              ].map((x) => (
                <span key={x}>
                  <Icon name="check" size={16} />
                  {x}
                </span>
              ))}
            </div>
            <Link to="/business-registration" className="text-link">
              Explore our services <Icon name="arrow" size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section services">
        <div className="container">
          <Heading
            label="Our core services"
            title={
              <>
                The expertise to move your
                <br />
                <em>business forward.</em>
              </>
            }
            text="An integrated range of services designed around the real needs of businesses at every stage."
          />
          <div className="service-grid">
            {core.map((s, i) => (
              <Link to={s[1]} className="service" key={s[0]}>
                <span>0{i + 1}</span>
                <i>
                  <Icon name={s[2]} size={25} />
                </i>
                <h3>{s[0]}</h3>
                <p>{s[3]}</p>
                <b>
                  Explore service <Icon name="arrow" size={16} />
                </b>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section why">
        <div className="container">
          <div className="why-head">
            <Heading
              left
              label="Why Safemaxx"
              title={
                <>
                  Good decisions begin with <em>trusted guidance.</em>
                </>
              }
            />
            <p>
              We simplify complex processes, provide dependable support and keep your next business
              goal in view.
            </p>
          </div>
          <div className="why-grid">
            {[
              ["clock", "Fast processing", "Clear coordination and timely execution."],
              ["strategy", "Expert guidance", "Practical direction for the right business path."],
              ["lock", "Secure & reliable", "Professional handling of documents and data."],
              ["chart", "Growth focused", "Support that looks beyond registration."],
            ].map((x, i) => (
              <article data-reveal key={x[1]}>
                <small>0{i + 1}</small>
                <Icon name={x[0] as IconName} size={27} />
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section funding">
        <div className="container funding-grid">
          <div>
            <Heading
              left
              label="Funding solutions"
              title={
                <>
                  Turning potential into <em>financial opportunities.</em>
                </>
              }
            />
            <p className="lead">
              Explore funding options that fit your stage, profile and priorities.
            </p>
            <div className="fund-list">
              {fundingOptions.map(([title, description], i) => (
                <div className={`fund-option ${activeFunding === i ? "active" : ""}`} key={title}>
                  <button
                    className="fund-option-trigger"
                    type="button"
                    aria-expanded={activeFunding === i}
                    aria-controls={`funding-option-${i}`}
                    onClick={() => setActiveFunding(activeFunding === i ? null : i)}
                  >
                    <small>0{i + 1}</small>
                    <span>{title}</span>
                    <Icon name="chevron" size={17} />
                  </button>
                  <div
                    className="fund-option-panel"
                    id={`funding-option-${i}`}
                    aria-hidden={activeFunding !== i}
                    inert={activeFunding !== i}
                  >
                    <div>
                      <p>{description}</p>
                      <Link to="/funding-solutions">
                        Explore funding support <Icon name="arrow" size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/funding-solutions" className="btn gold">
              Explore Funding Solutions <Icon name="arrow" size={17} />
            </Link>
          </div>
          <div className="fund-art" data-reveal>
            <div>
              <Icon name="funding" size={42} />
              <span>
                Capital aligned
                <br />
                with ambition
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section process">
        <div className="container">
          <Heading
            label="How we work"
            title={
              <>
                A clear path to <em>forward momentum.</em>
              </>
            }
          />
          <div className="steps">
            {[
              ["01", "Consultation", "We understand your goals and exact requirement."],
              ["02", "Planning", "We map the right strategy and documents."],
              ["03", "Execution", "We coordinate filing and follow-through."],
              ["04", "Growth Support", "We stay available for future opportunities."],
            ].map((x) => (
              <article key={x[0]}>
                <span>{x[0]}</span>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section scheme-sec">
        <div className="container">
          <Heading
            label="Schemes & opportunities"
            title={
              <>
                Support built for <em>business progress.</em>
              </>
            }
          />
          <div className="scheme-grid">
            {[
              [
                "leaf",
                "Agriculture infrastructure",
                "NAIF",
                "Financing support for eligible agriculture storage, processing and logistics.",
              ],
              [
                "cow",
                "Animal husbandry",
                "AHIDF",
                "Finance for eligible dairy, meat, feed and allied infrastructure.",
              ],
              [
                "tax",
                "Startup India",
                "Tax Exemption",
                "Section 80-IAC guidance for eligible DPIIT-recognized startups.",
              ],
            ].map((x) => (
              <Link to="/schemes" className="scheme" data-reveal key={x[2]}>
                <i>
                  <Icon name={x[0] as IconName} size={28} />
                </i>
                <small>{x[1]}</small>
                <h3>{x[2]}</h3>
                <p>{x[3]}</p>
                <b>
                  Learn more <Icon name="arrow" size={16} />
                </b>
              </Link>
            ))}
          </div>
          <p className="disclaimer">
            Eligibility and benefits are subject to current government guidelines and authority
            approval.
          </p>
        </div>
      </section>
      <CTA />
    </main>
  );
}

function Crumb({ text }: { text: string }) {
  return (
    <div className="crumb">
      <Link to="/">Home</Link>
      <Icon name="chevron" size={13} />
      <span>{text}</span>
    </div>
  );
}
function SchemeFinder() {
  const [sector, setSector] = useState("All sectors");
  const [type, setType] = useState("All types");
  const [query, setQuery] = useState("");
  const matches = schemeOptions.filter((scheme) => {
    const matchesSector = sector === "All sectors" || scheme.sector === sector;
    const matchesType = type === "All types" || scheme.type === type;
    const searchText = `${scheme.name} ${scheme.sector} ${scheme.type} ${scheme.focus}`;
    return matchesSector && matchesType && searchText.toLowerCase().includes(query.trim().toLowerCase());
  });

  return (
    <>
      <div className="scheme-filters">
        <label>
          <span>Sector</span>
          <select value={sector} onChange={(event) => setSector(event.target.value)}>
            <option>All sectors</option>
            {[...new Set(schemeOptions.map((scheme) => scheme.sector))].map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Type</span>
          <select value={type} onChange={(event) => setType(event.target.value)}>
            <option>All types</option>
            {[...new Set(schemeOptions.map((scheme) => scheme.type))].map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="scheme-search">
          <span>Search schemes</span>
          <Icon name="search" size={17} />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by scheme, sector or need..."
          />
        </label>
      </div>
      <p className="scheme-results" aria-live="polite">
        Showing <b>{matches.length}</b> of {schemeOptions.length} opportunities
      </p>
      {matches.length ? (
        <div className="scheme-results-grid">
          {matches.map((scheme) => (
            <article className="scheme-result-card" key={scheme.name}>
              <div className="scheme-result-topline">
                <span>{scheme.sector}</span>
                <small>{scheme.type}</small>
              </div>
              <div className="scheme-result-icon">
                <Icon name={scheme.icon} size={24} />
              </div>
              <h3>{scheme.name}</h3>
              <p>{scheme.focus}</p>
              <Link to="/contact" className="scheme-result-link">
                Check eligibility <Icon name="arrow" size={16} />
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="scheme-empty" role="status">
          <Icon name="search" size={23} />
          <h3>No matching schemes found</h3>
          <p>Try a different search or reset the filters to explore all opportunities.</p>
          <button
            type="button"
            onClick={() => {
              setSector("All sectors");
              setType("All types");
              setQuery("");
            }}
          >
            Reset filters
          </button>
        </div>
      )}
      <p className="scheme-filter-note">
        Scheme availability, eligibility and benefits depend on current government guidelines and
        authority approval.
      </p>
    </>
  );
}
function ServicePage({ data, showSchemeFinder = false }: { data: Page; showSchemeFinder?: boolean }) {
  return (
    <main>
      <section className={`inner-hero ${data.dark ? "dark" : ""}`}>
        <div className="container inner-grid">
          <div data-reveal>
            <Crumb text={data.eyebrow} />
            <span className="eyebrow">{data.eyebrow}</span>
            <h1>{data.title}</h1>
            <p>{data.intro}</p>
            <Link to="/contact" className={`btn ${data.dark ? "gold" : "primary"}`}>
              Talk to an expert <Icon name="arrow" size={17} />
            </Link>
          </div>
          <div className="symbol" data-reveal>
            <div>
              <Icon name={data.icon} size={62} />
            </div>
          </div>
        </div>
      </section>
      <section className="section overview">
        <div className="container overview-grid">
          <Heading left label="Overview" title="A clear route forward." />
          <div data-reveal>
            <p>{data.overview}</p>
            <aside>
              <Icon name="shield" />
              <span>
                <b>Clear, guided support</b>Every service begins with your requirement and
                applicable eligibility.
              </span>
            </aside>
          </div>
        </div>
      </section>
      <section className="section details">
        <div className="container">
          <Heading
            label={showSchemeFinder ? "Explore opportunities" : "What we support"}
            title={
              showSchemeFinder ? (
                <>
                  Find a scheme for your <em>next step.</em>
                </>
              ) : (
                <>
                  Practical expertise at every <em>important step.</em>
                </>
              )
            }
          />
          {showSchemeFinder ? (
            <SchemeFinder />
          ) : (
            <div className="detail-grid">
              {data.features.map((x, i) => (
                <article data-reveal key={x[0]}>
                  <small>0{i + 1}</small>
                  <h3>{x[0]}</h3>
                  <p>{x[1]}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="section internal-process">
        <div className="container">
          <Heading left label="Our process" title="Straightforward from start to finish." />
          <div>
            {data.process.map((x, i) => (
              <article key={x}>
                <small>0{i + 1}</small>
                <h3>{x}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FAQs items={data.faqs} />
      <CTA />
    </main>
  );
}
function FAQs({ items }: { items: [string, string][] }) {
  const [active, setActive] = useState(0);
  return (
    <section className="section faqs">
      <div className="container faq-grid">
        <Heading
          left
          label="Frequently asked questions"
          title={
            <>
              Clear answers for your <em>next decision.</em>
            </>
          }
        />
        <div>
          {items.map((x, i) => (
            <article className={active === i ? "active" : ""} key={x[0]}>
              <button onClick={() => setActive(active === i ? -1 : i)}>
                <span>{x[0]}</span>
                <i>{active === i ? "−" : "+"}</i>
              </button>
              <div>
                <p>{x[1]}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
function About() {
  return (
    <main>
      <section className="inner-hero">
        <div className="container inner-grid">
          <div data-reveal>
            <Crumb text="About Us" />
            <span className="eyebrow">Built around business progress</span>
            <h1>Clear solutions for ambitious Indian businesses.</h1>
            <p>
              Safemaxx brings registration, funding, compliance and growth support together so
              entrepreneurs can make important decisions with greater clarity.
            </p>
            <Link to="/contact" className="btn primary">
              Start a conversation <Icon name="arrow" size={17} />
            </Link>
          </div>
          <div className="quote" data-reveal>
            <p>“We simplify the work behind starting, funding and growing a business.”</p>
            <span>Safemaxx Business Solutions</span>
          </div>
        </div>
      </section>
      <section className="section overview">
        <div className="container overview-grid">
          <Heading
            left
            label="Who we are"
            title={
              <>
                A connected partner for the <em>business journey.</em>
              </>
            }
          />
          <div>
            <p>
              Safemaxx Business Solutions Pvt. Ltd. supports startups, MSMEs, NGOs and growing
              businesses across India. Its published services span company formation, Startup India,
              GST, MSME, import-export registrations, certifications, funding advisory and growth
              strategy.
            </p>
            <p>
              Rather than treating each requirement in isolation, the approach connects today’s
              process with the wider business objective behind it.
            </p>
          </div>
        </div>
      </section>
      <section className="section why">
        <div className="container">
          <Heading
            label="How we show up"
            title={
              <>
                Professional support, grounded in <em>four principles.</em>
              </>
            }
          />
          <div className="why-grid">
            {[
              ["strategy", "Clarity", "Complex requirements explained in practical terms."],
              ["shield", "Reliability", "Careful coordination and dependable support."],
              ["check", "Transparency", "Clear expectations around process and eligibility."],
              ["chart", "Progress", "Advice shaped around moving business forward."],
            ].map((x, i) => (
              <article key={x[1]}>
                <small>0{i + 1}</small>
                <Icon name={x[0] as IconName} />
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}

function ContactForm({ compact = false }: { compact?: boolean } = {}) {
  const [sent, setSent] = useState(false),
    [err, setErr] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    if (
      !d.get("name") ||
      String(d.get("phone")).replace(/\D/g, "").length < 10 ||
      !d.get("service")
    ) {
      setErr("Please complete your name, a valid phone number and service.");
      return;
    }
    const subject = encodeURIComponent(`Consultation request: ${String(d.get("service"))}`);
    const body = encodeURIComponent(
      `Name: ${String(d.get("name"))}\nPhone: ${String(d.get("phone"))}\nEmail: ${String(d.get("email") || "")}\nService: ${String(d.get("service"))}\n\nRequirement:\n${String(d.get("message") || "")}`,
    );
    window.location.href = `mailto:info@safemaxx.in?subject=${subject}&body=${body}`;
    setSent(true);
  }
  if (sent)
    return (
      <div className={`success ${compact ? "enquiry-success" : ""}`}>
        <Icon name="check" size={30} />
        <h3>Thank you for reaching out.</h3>
        <p>
          Your email app has been opened with your enquiry details. For immediate help, call{" "}
          <a href="tel:+919119126682">+91 91191 26682</a>.
        </p>
      </div>
    );
  if (compact)
    return (
      <form className="enquiry-form" onSubmit={submit}>
        <input
          aria-label="Your name"
          autoComplete="name"
          name="name"
          placeholder="Your name"
          required
        />
        <input
          aria-label="Email address"
          autoComplete="email"
          name="email"
          type="email"
          placeholder="Email address"
          required
        />
        <input
          aria-label="Phone number"
          autoComplete="tel"
          name="phone"
          type="tel"
          placeholder="Phone number"
          required
        />
        <select aria-label="Enquiry type" name="service" defaultValue="" required>
          <option value="" disabled>
            I’m interested in...
          </option>
          {services.map((s) => (
            <option key={s[0]}>{s[0]}</option>
          ))}
          <option>Other / not sure yet</option>
        </select>
        {err && (
          <p className="error" role="alert">
            {err}
          </p>
        )}
        <button className="enquiry-submit">
          Claim Free Consultation <Icon name="arrow" size={17} />
        </button>
        <small>We’ll only use your details to respond to this enquiry.</small>
      </form>
    );
  return (
    <form onSubmit={submit}>
      <div>
        <label>
          Full name
          <input name="name" placeholder="Your name" />
        </label>
        <label>
          Phone number
          <input name="phone" type="tel" placeholder="+91" />
        </label>
      </div>
      <div>
        <label>
          Email address
          <input name="email" type="email" placeholder="you@company.com" />
        </label>
        <label>
          Service needed
          <select name="service" defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s[0]}>{s[0]}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        How can we help?
        <textarea name="message" rows={4} placeholder="Tell us about your requirement" />
      </label>
      {err && <p className="error">{err}</p>}
      <button className="btn primary">
        Request Consultation <Icon name="arrow" size={17} />
      </button>
      <small>By submitting, you agree to be contacted about your enquiry.</small>
    </form>
  );
}
function EnquiryPopup({
  path,
  onOpenChange,
}: {
  path: string;
  onOpenChange: (open: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const dialogRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (path !== "/" || dismissed) return;
    const timer = window.setTimeout(() => setOpen(true), 10000);
    return () => window.clearTimeout(timer);
  }, [path, dismissed]);

  useEffect(() => {
    onOpenChange(open);
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const previousRootOverflow = document.documentElement.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const dialog = dialogRef.current;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    dialog?.querySelector<HTMLInputElement>("input")?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDismissed(true);
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !dialog) return;
      const focusable = dialog.querySelectorAll<HTMLElement>(
        'button:not(:disabled), input:not(:disabled), select:not(:disabled), a[href]',
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousRootOverflow;
      previousFocus?.focus();
    };
  }, [open, onOpenChange]);

  function dismiss() {
    setDismissed(true);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      className="enquiry-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) dismiss();
      }}
    >
      <section
        className="enquiry-dialog"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
        tabIndex={-1}
      >
        <div className="enquiry-story">
          <button className="enquiry-close" aria-label="Close enquiry form" onClick={dismiss}>
            <Icon name="close" size={18} />
          </button>
          <div className="enquiry-emblem">
            <img src="/safemaxx-logo.png?v=2" alt="Safemaxx" />
          </div>
          <span className="enquiry-overline">Safemaxx Business Solutions</span>
          <h2 id="enquiry-title">
            Your next move deserves <em>clear direction.</em>
          </h2>
          <p>
            Share what you’re planning. We’ll help you find a practical next step for your business.
          </p>
          <div className="enquiry-highlights">
            <span>
              <Icon name="shield" size={16} /> Expert-led guidance
            </span>
            <span>
              <Icon name="globe" size={16} /> Support across India
            </span>
          </div>
          <small>Business setup · Funding · Compliance · Growth</small>
        </div>
        <div className="enquiry-content">
          <span className="eyebrow">Complimentary consultation</span>
          <h3>How can we help?</h3>
          <p>Tell us a little about your requirement to get started.</p>
          <ContactForm compact />
        </div>
      </section>
    </div>
  );
}
function Contact() {
  return (
    <main>
      <section className="contact">
        <div className="container contact-grid">
          <div data-reveal>
            <Crumb text="Contact Us" />
            <span className="eyebrow">Let’s talk business</span>
            <h1>Your next move starts with a clear conversation.</h1>
            <p>
              Tell us what you’re working toward. Our team will help identify a practical next step.
            </p>
            <div className="contact-info">
              <a href="tel:+919119126682">
                <Icon name="phone" />
                <span>
                  <small>Call us</small>
                  <b>+91 91191 26682</b>
                </span>
              </a>
              <a href="mailto:info@safemaxx.in">
                <Icon name="mail" />
                <span>
                  <small>Email us</small>
                  <b>info@safemaxx.in</b>
                </span>
              </a>
              <p>
                <Icon name="pin" />
                <span>
                  <small>Service reach</small>
                  <b>Pan India</b>
                </span>
              </p>
            </div>
          </div>
          <div className="contact-card" data-reveal>
            <span className="eyebrow">Free consultation</span>
            <h2>How can we help?</h2>
            <p>Share a few details and take the first step.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
function CTA() {
  return (
    <section className="closing">
      <div className="container" data-reveal>
        <span className="eyebrow">Your next chapter</span>
        <h2>
          Ready to take your business
          <br />
          to the <em>next level?</em>
        </h2>
        <p>
          Let’s simplify your business journey with the right registration, funding, compliance and
          growth solutions.
        </p>
        <div>
          <Link to="/contact" className="btn gold">
            Get Free Consultation <Icon name="arrow" size={17} />
          </Link>
          <a className="btn dark-outline" href="tel:+919119126682">
            <Icon name="phone" size={17} />
            +91 91191 26682
          </a>
        </div>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Brand light />
          <p>Business registration, funding, compliance and growth solutions across India.</p>
          <div className="social">
            <a
              href="https://instagram.com/safemaxx.business.solutions"
              target="_blank"
              rel="noreferrer"
            >
              Ig
            </a>
            <a
              href="https://linkedin.com/in/safemaxx-business-solutions"
              target="_blank"
              rel="noreferrer"
            >
              in
            </a>
            <a href="https://twitter.com/infosafemaxx" target="_blank" rel="noreferrer">
              X
            </a>
          </div>
        </div>
        <div>
          <h3>Company</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/schemes">Schemes</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h3>Services</h3>
          {services.slice(0, 6).map((s) => (
            <Link to={s[1]} key={s[1]}>
              {s[0]}
            </Link>
          ))}
        </div>
        <div>
          <h3>Talk to us</h3>
          <a href="tel:+919119126682">+91 91191 26682</a>
          <a href="mailto:info@safemaxx.in">info@safemaxx.in</a>
          <p>Pan India Services</p>
        </div>
      </div>
      <div className="container copyright">
        © {new Date().getFullYear()} Safemaxx Business Solutions Pvt. Ltd.
        <span>Clarity for every business move.</span>
      </div>
    </footer>
  );
}

export default function App() {
  const [path, setPath] = useState(location.pathname === "/index.html" ? "/" : location.pathname);
  const [introVisible, setIntroVisible] = useState(true);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  useEffect(() => {
    const f = () => setPath(location.pathname);
    addEventListener("popstate", f);
    return () => removeEventListener("popstate", f);
  }, []);
  useEffect(() => {
    document.title = `${path === "/" ? "Your Business Safely Maximise" : path === "/about" ? "About Us" : path === "/contact" ? "Contact Us" : pages[path]?.eyebrow || "Business Solutions"} | Safemaxx`;
  }, [path]);
  useReveal();
  const body =
    path === "/" ? (
      <Home />
    ) : path === "/about" ? (
      <About />
    ) : path === "/contact" ? (
      <Contact />
    ) : pages[path] ? (
      <ServicePage data={pages[path]} showSchemeFinder={path === "/schemes"} />
    ) : (
      <Home />
    );
  return (
    <>
      <Intro onComplete={() => setIntroVisible(false)} />
      <EnquiryPopup path={path} onOpenChange={setEnquiryOpen} />
      <div inert={introVisible || enquiryOpen}>
        <Header path={path} />
        {body}
        <Footer />
      </div>
    </>
  );
}
