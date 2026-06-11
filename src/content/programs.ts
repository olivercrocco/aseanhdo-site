// Courses, accreditations and membership.
// Migrated from /aseanhdo-archive/04-courses.md, 05-accreditations.md, 06-membership.md.

// ---- Courses & Certification ----

export type CertLevel = {
  level: string;
  title: string;
  audience: string;
  focus: string;
};

export const CERT_LEVELS: CertLevel[] = [
  {
    level: "Level 1",
    title: "Professionals",
    audience: "Those new to human development",
    focus: "A foundational programme in human development practice.",
  },
  {
    level: "Level 2",
    title: "Experts",
    audience: "Organisational roles and service providers",
    focus: "Strategic positioning to lead human development in organisations.",
  },
  {
    level: "Level 3",
    title: "Leaders",
    audience: "Selected participants",
    focus: "Work with world-class mentors on leadership responsibilities.",
  },
];

export const CERT_BENEFITS: string[] = [
  "Establish positioning in the expanding human development field",
  "Expand your work scope across the ASEAN region",
  "Build professional networks with HD practitioners",
  "Access career development guidance",
  "Stay informed on developments in the field",
  "Prepare for human development leadership roles",
  "Gain professional recognition",
];

export const CERT_DETAILS = {
  launched: 2021,
  modules: 9,
  cadence: "Online, delivered on Saturdays for working professionals",
  components: "Foundations, knowledge sharing, capability building, action learning, and career development",
  assessment: "Participation, team projects, individual assignments, and a panel interview",
  audiences: "Corporate, government, NGO and higher education sectors",
  joinUrl: "https://forms.gle/sSmedkbL56sma88TA",
  brochureUrl:
    "https://cdn.prod.website-files.com/5ff004354ac6780c825f5af5/69141ea341fac33d2849445a_Cohort%208%20AHDO%20Certification%20schedule%20and%20course%20description%20(2).pdf",
} as const;

// ---- Accreditations ----

export type Accreditation = {
  slug: string;
  name: string;
  fullName: string;
  audience: string;
  description: string;
};

export const ACCREDITATIONS: Accreditation[] = [
  {
    slug: "ahead",
    name: "AHEAD",
    fullName: "Advancement in Human Enterprise and Development",
    audience: "Business, government, social enterprise and higher education",
    description:
      "Recognition for organisations that prioritise human development initiatives across their enterprise and stakeholder networks.",
  },
  {
    slug: "headstart",
    name: "HEADSTART",
    fullName: "HEADSTART Accreditation",
    audience: "Early-stage companies, SMEs and subsidiaries",
    description:
      "An adapted version of AHEAD for organisations establishing their foundational human development frameworks.",
  },
];

// ---- Membership ----

export type MembershipTier = {
  name: string;
  audience: string;
  price: string;
  cadence: string;
  benefits: string[];
  highlight?: boolean;
};

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    name: "Individual · Student",
    audience: "Students aspiring to work in human development",
    price: "25 SGD",
    cadence: "per year",
    benefits: [
      "Access to events, publications and certification",
      "Professional positioning and career development",
      "News, courses, committees and research",
    ],
  },
  {
    name: "Individual · Professional",
    audience: "Practitioners in HR / human capital, consulting, policy and leadership",
    price: "100 SGD",
    cadence: "per year",
    highlight: true,
    benefits: [
      "Professional positioning and career development",
      "Networking meetings, conferences and events",
      "Access to news, courses, committees, benchmarking and research",
    ],
  },
  {
    name: "Organisation · Standard",
    audience: "Businesses, institutions and agencies (10 representatives)",
    price: "1,000 SGD",
    cadence: "per year",
    benefits: [
      "10 corporate representative memberships",
      "Committee participation and advocacy",
      "Access to accreditation, publications, conferences and certification",
    ],
  },
  {
    name: "Organisation · Gold",
    audience: "Larger organisations (50 representatives)",
    price: "5,000 SGD",
    cadence: "per year",
    benefits: [
      "50 corporate representative memberships",
      "All Standard benefits at regional scale",
      "Adjusted rates available for startups and SMEs",
    ],
  },
];
