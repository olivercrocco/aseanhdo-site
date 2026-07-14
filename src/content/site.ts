// Core site metadata, navigation, social, and contact details.
// Migrated from the legacy aseanhdo.com (see /aseanhdo-archive).

export const SITE = {
  name: "ASEAN Human Development Organisation",
  short: "AHDO",
  acronym: "AHDO",
  founded: 2018,
  base: "Jakarta, Indonesia",
  tagline: "Improving the potential and well-being of people across Southeast Asia.",
  heroHeadline: "Championing Human Development in ASEAN",
  heroLede:
    "Founded in 2018 as the first ASEAN-based civil society organisation for human development, AHDO is independent, non-profit and an ASEAN entity in the process of accreditation.",
  introParagraphs: [
    "From the beginning, AHDO has advocated for an ASEAN future that makes human development central to regional development. People are the ends of development — not just a resource or form of capital — with identity, culture, potential, aspirations and the right to develop over their entire lifecycle. AHDO works with human development in all its forms: projects, policy, research and certification of professionals.",
    "AHDO is deliberately ASEAN-grounded and people-centred, and attentive to regional political, economic, social and cultural contexts. We explicitly support the priorities that ASEAN itself has defined. We work across the 11 ASEAN Member States and contribute to ASEAN’s leadership role in the world.",
  ],
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
    title: "We Lead Regional Projects",
    blurb:
      "We bring together regional experts to design and implement human development initiatives that strengthen organisations and inform policy across ASEAN.",
    points: [
      "Design and deliver human development programmes for organisational and policy leaders",
      "Facilitate cross-border cooperation and exposure projects across ASEAN",
      "Convene specialised committees and working groups on emerging human development priorities",
    ],
    href: "/about",
  },
  {
    number: "02",
    title: "We Provide Certification Courses to Professionals and Institutions",
    blurb:
      "We set the professional standard for human development in ASEAN, offering accredited training and certification to individual professionals and to organisations.",
    points: [
      "Certify individual professionals seeking recognised human development professional status",
      "Develop and deliver certification programmes tailored to specific organisational needs",
      "Establish accreditation standards, awards, and ASEAN ethics guidance across sectors",
    ],
    href: "/courses",
  },
  {
    number: "03",
    title: "We Research and Publish",
    blurb:
      "We generate and share knowledge that advances human development thinking, practice, and policy across the region.",
    points: [
      "Conduct research on corporate human development, ethics, and workplace wellbeing",
      "Publish white papers, books, and policy articles and organise regional conferences and forums",
      "Support members and experts in producing and disseminating human development innovations",
    ],
    href: "/publications",
  },
  {
    number: "04",
    title: "We Contribute to the ASEAN Human Development Framework",
    blurb:
      "We advocate for a distinctly ASEAN vision of human development, working with governments, institutions, and civil society to shape regional and international agendas.",
    points: [
      "Champion people-centred, inclusive, and sustainable development in workplaces and society",
      "Collaborate with ASEAN institutions and governments to advance the region’s human development agenda",
      "Develop the next generation of human development leaders and promote ASEAN perspectives in international policy",
    ],
    href: "/about",
  },
];
