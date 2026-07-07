// Publications. Migrated from /aseanhdo-archive/03-publications.md.
// Links preserved verbatim from the legacy site; verify/rehost when back-end access lands.

export type PublicationType = "Book" | "White Paper" | "Report" | "Proceedings";

export type Publication = {
  slug: string;
  title: string;
  authors: string;
  year?: number;
  type: PublicationType;
  publisher?: string;
  description: string;
  url: string;
  /**
   * Path to the document's cover image, served locally from /public/images
   * (e.g. "/images/covers/ethics-of-asean.jpg"). When set, the publication
   * card leads with the cover instead of the coloured content-type band.
   */
  cover?: string;
  featured?: boolean;
};

export const PUBLICATIONS: Publication[] = [
  {
    slug: "ethics-of-asean",
    title: "The Ethics of ASEAN",
    authors: "Dr Bob Aubrey with the ASEAN University Network Research Team",
    type: "Report",
    description:
      "The first book ever written on the ethics of ASEAN — a foundation for an ASEAN-grounded vision of human development.",
    url: "https://cdn.prod.website-files.com/5ff004354ac6780c825f5af5/66dc2fc2e38da854fec3ac24_Ethic%20of%20ASEAN%20E-Version.pdf",
    featured: true,
  },
  {
    slug: "future-of-asean-human-development-2045",
    title: "Future of ASEAN Human Development Towards 2045",
    authors: "AHDO",
    type: "Proceedings",
    description:
      "Conference proceedings charting a bold, inclusive vision for human development toward ASEAN 2045.",
    url: "https://cdn.prod.website-files.com/5ff004354ac6780c825f5af5/69eec4d7a4a30cd168bdcdc8_E-Book%20Future%20of%20ASEAN%20Human%20Development%20-%20Conference%202026.pdf",
    featured: true,
  },
  {
    slug: "human-development-careers",
    title: "Human Development Careers",
    authors: "Dr Bob Aubrey",
    type: "Book",
    publisher: "McGraw Hill Education Singapore",
    description: "A guide to building a career in the emerging field of human development.",
    url: "https://www.mheducation.com.sg/ebook-human-development-careers-9789814923033-asia",
  },
  {
    slug: "leading-human-development-in-asean",
    title: "Leading Human Development in ASEAN",
    authors: "Dr Bob Aubrey",
    type: "Book",
    publisher: "McGraw Hill Education Singapore",
    description: "One of the first books on human development leadership in ASEAN.",
    url: "https://www.mheducation.com.sg/leading-human-development-in-asean-9789814821308-asia",
  },
  {
    slug: "reframing-generational-stereotypes",
    title: "Reframing Generational Stereotypes",
    authors: "Rachele Focardi",
    type: "Book",
    publisher: "McGraw Hill Education Singapore",
    description: "Rethinking how generations are understood and engaged in the workplace.",
    url: "https://www.mheducation.com.sg/reframing-generational-stereotypes-9789814923095-asia",
  },
  {
    slug: "aseans-internship-imperative",
    title: "ASEAN's Internship Imperative",
    authors: "AHDO",
    type: "White Paper",
    description: "White Paper #1 — the need to develop ASEAN cross-border internships.",
    url: "https://cdn.prod.website-files.com/5ff004354ac6780c825f5af5/6031eef7b618081978c27a06_21-1%20AHDO%20White%20Paper.pdf",
  },
  {
    slug: "moving-past-the-middle-income-trap",
    title: "Human Development and Moving Past the Middle Income Trap",
    authors: "AHDO",
    year: 2020,
    type: "Report",
    description: "An ASEAN advocacy paper on human development as the route beyond the middle-income trap.",
    url: "https://cdn.prod.website-files.com/5ff004354ac6780c825f5af5/6073c4a5c685435a26a7ae94_Human%20Development%20and%20Moving%20Past%20the%20Middle%20Income%20Trap%20in%20ASEAN.pdf",
  },
  {
    slug: "workplace-mental-health-wellbeing-asean",
    title: "Workplace Mental Health and Well-being in ASEAN",
    authors: "AHDO × Intellect",
    type: "White Paper",
    description: "A collaborative white paper on mental health and wellbeing at work across ASEAN.",
    url: "https://cdn.prod.website-files.com/5ff004354ac6780c825f5af5/68c2bcb04d38a1007e0c7c7e_Final%20%20Intellect%20x%20AHDO%20white%20paper%20on%20mental%20health%20%26%20wellbeing%20in%20ASEAN.pdf",
    featured: true,
  },
];
