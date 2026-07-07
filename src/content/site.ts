// Core site metadata, navigation, social, and contact details.
// Migrated from the legacy aseanhdo.com (see /aseanhdo-archive).

export const SITE = {
  name: "ASEAN Human Development Organisation",
  short: "AHDO",
  acronym: "AHDO",
  founded: 2018,
  base: "Jakarta, Indonesia",
  tagline: "Improving the potential and well-being of people across Southeast Asia.",
  heroLede:
    "Founded in 2018 as the first ASEAN-based organisation for human development, AHDO is an independent, non-profit civil society organisation and an ASEAN entity in the process of accreditation.",
  mission:
    "We are dedicated to improving the potential and well-being of people in Southeast Asia. We support human development in all its forms, from needs-based development projects to research, policy, certification and leadership.",
  thoughtLeadership:
    "Recognised for thought leadership, AHDO published the first books on human development leadership in ASEAN and on the ethics of ASEAN.",
  url: "https://www.aseanhdo.com",
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

// New site information architecture (similar to legacy, with The Index added).
export const NAV: NavItem[] = [
  { label: "About", href: "/about", description: "Who we are and what we stand for" },
  { label: "The Index", href: "/index-ahdi", description: "The ASEAN Human Development Index" },
  { label: "Courses", href: "/courses", description: "Professional certification" },
  { label: "Publications", href: "/publications", description: "Books, white papers and reports" },
  { label: "Events", href: "/events", description: "Conferences, summits and forums" },
  { label: "News", href: "/news", description: "Insight on people and work in ASEAN" },
  { label: "Accreditations", href: "/accreditations", description: "Recognition for organisations" },
  { label: "Membership", href: "/membership", description: "Join the regional community" },
];

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/groups/10200261/",
  facebook: "https://www.facebook.com/groups/586680908701659",
} as const;

export const CONTACT = {
  // Public-facing contact details to be confirmed with AHDO once back-end access lands.
  email: "bob.aubrey@bobaubreyassociates.com",
  base: "Jakarta, Indonesia",
  formCategories: [
    "Membership",
    "Certification (Individual)",
    "Accreditation (Organisations)",
    "Partnership / Press",
    "Other",
  ],
} as const;

// The four core functions of AHDO (homepage + about).
export type CoreFunction = {
  number: string;
  title: string;
  blurb: string;
  points: string[];
  href: string;
};

export const CORE_FUNCTIONS: CoreFunction[] = [
  {
    number: "01",
    title: "Lead projects with regional experts",
    blurb:
      "Designing and delivering human development programmes for leaders of organisations and policy.",
    points: [
      "Human development programmes for organisational and policy leaders",
      "Cross-border exposure and cooperation projects",
      "Human development initiatives across sectors",
      "Specialised committees and working groups for emerging priorities",
    ],
    href: "/about",
  },
  {
    number: "02",
    title: "Certify human development professionals",
    blurb:
      "Building the field through training, professional certification and organisational accreditation.",
    points: [
      "Training for individuals seeking professional certification",
      "Certification programmes tailored to specific needs",
      "Human development accreditation and awards for organisations",
      "ASEAN ethics expertise and guidance for sectors",
    ],
    href: "/courses",
  },
  {
    number: "03",
    title: "Lead research and organise publications",
    blurb:
      "Producing knowledge on the priorities that shape people and work across the region.",
    points: [
      "Research on internships, corporate development, ethics and wellbeing",
      "White papers, books and articles on policy and strategy",
      "Conferences and forums on human development",
      "Support for members and experts producing knowledge",
    ],
    href: "/publications",
  },
  {
    number: "04",
    title: "Advocate from an ASEAN perspective",
    blurb:
      "Promoting a people-centred, inclusive and sustainable vision of development for the region.",
    points: [
      "People-centred development in workplaces and society",
      "Collaboration with ASEAN institutions, governments and civil society",
      "Promotion of future leaders in human development",
      "An ASEAN-grounded vision of human development for global policy",
    ],
    href: "/about",
  },
];
