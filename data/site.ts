import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  FileCheck2,
  Hammer,
  HardHat,
  type LucideIcon,
  Map,
  Ruler,
  ShieldCheck,
  Shovel,
  TestTube2
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  href: string;
  summary: string;
  icon: LucideIcon;
  highlights: string[];
};

export type Project = {
  title: string;
  type: string;
  description: string;
  image: string;
};

export const company = {
  name: "DTM Geocivil Consulting",
  legalName: "DTM Geocivil Consulting Pty Ltd",
  tagline: "Geotechnical and civil engineering consulting for practical, buildable project outcomes.",
  address: "2/34 Hourigan Avenue, Clayton VIC 3168",
  phone: "1300 550 871",
  mobile: "0424 445 653",
  email: "info@dtmgeocivil.com.au"
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Geotechnical", href: "/geotechnical" },
  { label: "Civil", href: "/civil" },
  { label: "Projects", href: "/projects" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" }
];

export const values = [
  {
    title: "Integrity",
    description: "Straightforward advice, clear reporting, and professional judgement on every engagement.",
    icon: ShieldCheck
  },
  {
    title: "Excellence",
    description: "Qualified engineering input backed by careful investigation, testing, and documentation.",
    icon: BadgeCheck
  },
  {
    title: "Cost Effectiveness",
    description: "Practical recommendations that respect project constraints, timelines, and budgets.",
    icon: FileCheck2
  }
];

export const services: Service[] = [
  {
    title: "Geotechnical Engineering",
    href: "/geotechnical",
    summary:
      "Site investigation, testing, reporting, pavement design, and construction support for residential, commercial, and infrastructure works.",
    icon: Shovel,
    highlights: [
      "Geotechnical investigation",
      "Soil testing and site classification",
      "Pavement design and rehabilitation",
      "Working platform and piling support"
    ]
  },
  {
    title: "Civil Engineering",
    href: "/civil",
    summary:
      "Civil engineering and construction-phase services for small to mid-scale building, pavement, and concrete works.",
    icon: Ruler,
    highlights: [
      "Project and construction management",
      "Piling and footing supervision",
      "Small-scale renovations and extensions",
      "Concrete works and inspections"
    ]
  },
  {
    title: "Residential Engineering",
    href: "/civil",
    summary:
      "Responsive engineering input for builders, homeowners, and project teams needing practical residential support.",
    icon: Building2,
    highlights: [
      "Footing probes with soil testing",
      "Foundation inspection",
      "Bearing capacity testing",
      "Site supervision and reporting"
    ]
  }
];

export const geotechnicalServices = [
  "Geotechnical Investigation",
  "Soil Testing & Site Classification (Residential and Commercial)",
  "Foundation Inspection & Bearing Capacity Testing",
  "Piling Supervision",
  "Piling End Bearing Capacity Test",
  "Pavement Investigation",
  "Pavement Rehabilitation",
  "Pavement Design",
  "Piling, Crane Platform Testing & Design",
  "Construction Working Platforms",
  "Footing Probe with Soil Testing",
  "Soil Contamination Testing",
  "Slope Stabilization",
  "Borehole Logging",
  "Level 1 Site Supervision & Inspection"
];

export const civilServices = [
  "Project Management",
  "Construction Management",
  "Small Scale Renovations & Extensions",
  "Piling Supervision & Monitoring",
  "Footing Supervision & Monitoring",
  "Small House Extensions & Concrete Works"
];

export const capabilities = [
  {
    title: "Investigation",
    description: "Ground condition review, borehole logging, sampling, and site-specific engineering advice.",
    icon: TestTube2
  },
  {
    title: "Design",
    description: "Pavement, working platform, footing, and practical civil design inputs for construction teams.",
    icon: Map
  },
  {
    title: "Testing",
    description: "Soil, bearing capacity, contamination, and construction-stage testing with clear reporting.",
    icon: ClipboardCheck
  },
  {
    title: "Supervision",
    description: "On-site piling, footing, platform, and Level 1 supervision support when projects are live.",
    icon: HardHat
  },
  {
    title: "Delivery",
    description: "Project management and construction management support built around timely outcomes.",
    icon: Hammer
  }
];

export const projects: Project[] = [
  {
    title: "Commercial Pavement Investigation",
    type: "Geotechnical / Pavements",
    description:
      "Placeholder project profile for pavement testing, analysis, and rehabilitation advice for a commercial hardstand.",
    image: "/images/project-pavement.svg"
  },
  {
    title: "Residential Site Classification",
    type: "Residential Engineering",
    description:
      "Placeholder profile for soil testing, site classification, footing advice, and builder coordination.",
    image: "/images/project-residential.svg"
  },
  {
    title: "Working Platform Review",
    type: "Temporary Works",
    description:
      "Placeholder profile for crane platform assessment, bearing capacity checks, and construction-stage reporting.",
    image: "/images/project-platform.svg"
  }
];

export const testimonials = [
  {
    quote:
      "DTM Geocivil helped us with accurate pavement soil testing, practical observations, and timely technical advice. Their professional approach and lateral thinking stood out.",
    name: "SPAK Consulting",
    location: "Melbourne"
  },
  {
    quote:
      "DTM Geocivil Consulting completed the work on time, to the satisfaction of the client, with all testing completed to specification.",
    name: "John",
    location: "Melbourne"
  },
  {
    quote:
      "DTM Geocivil Consulting is second to none in what they do. Divakar and his team were very professional.",
    name: "David",
    location: "Melbourne"
  }
];

export const companyFacts = [
  "Engineering, environmental, and construction services for private and public sector clients.",
  "Qualified professional engineers providing quality services.",
  "Responsive turnaround times aligned to client and project needs.",
  "Competitive rates within the market.",
  "Compliance with relevant Australian Standards.",
  "Professional indemnity and public liability insurance.",
  "Ongoing involvement in significant projects.",
  "National and international operating capability."
];
