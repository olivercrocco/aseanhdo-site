// People. Drawn from public sources; AHDO can confirm and expand with the full
// advisory board, team and national-chapter leads (and headshots) when ready.

export type Person = {
  slug: string;
  name: string;
  initials: string;
  role: string;
  org?: string;
  location?: string;
  bio: string;
  credentials?: string[];
  photo?: string; // optional headshot URL; falls back to a monogram avatar
  link?: string;
};

export const FOUNDER: Person = {
  slug: "bob-aubrey",
  name: "Dr Bob Aubrey",
  initials: "BA",
  role: "Founder & Chairman of the Advisory Board",
  bio: "Bob Aubrey founded AHDO in 2018 to serve the community of human development professionals across ASEAN and to champion the shift from human resources to human development. A philosopher by training, he has spent four decades in human development across six continents, and has authored thirteen books including Leading Human Development in ASEAN, Human Development Careers and The Ethics of ASEAN.",
  credentials: [
    "PhD in Philosophy, University of Paris",
    "Chartered Fellow, CIPD (FCIPD)",
    "Author, Leading Human Development in ASEAN",
  ],
  link: "https://www.linkedin.com/today/author/bobaubrey",
};

export const PEOPLE: Person[] = [
  {
    slug: "kyawt-kay-thi-win",
    name: "Kyawt Kay Thi Win",
    initials: "KW",
    role: "President, AHDO Myanmar Chapter",
    location: "Myanmar",
    bio: "Leads AHDO's chapter in Myanmar, advancing inclusive workplaces and human development in one of the region's most challenging contexts.",
  },
];

// A partner who has worked alongside AHDO (shown in context, not as AHDO staff).
export const PARTNERS: Person[] = [
  {
    slug: "rodora-babaran",
    name: "Rodora Turalde-Babaran",
    initials: "RB",
    role: "Director, Human Development Directorate",
    org: "ASEAN Secretariat",
    bio: "Co-hosted AHDO's 2025 conference on the future of human development in ASEAN, bringing the ASEAN Secretariat's human development agenda into the conversation.",
  },
];
