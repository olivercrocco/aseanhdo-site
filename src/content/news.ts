// News. A curated recent set for the new site; the full 100-post catalogue is
// preserved in /aseanhdo-archive/02-news.md for migration once the CMS / back end lands.

export type NewsCategory =
  | "AHDO News"
  | "Future of Work"
  | "Wellbeing"
  | "Gender & Inclusion"
  | "Skills & Learning"
  | "Paradigm";

export type NewsItem = {
  slug: string;
  title: string;
  date: string; // ISO
  category: NewsCategory;
  excerpt: string;
  legacyUrl: string;
};

export const NEWS: NewsItem[] = [
  {
    slug: "human-development-in-asean-goes-mainstream",
    title: "Human Development in ASEAN goes mainstream: lessons from the first conference",
    date: "2025-09-19",
    category: "AHDO News",
    excerpt:
      "Reflections from AHDO's first regional conference on the future of human development toward ASEAN 2045.",
    legacyUrl:
      "https://www.aseanhdo.com/post/human-development-in-asean-goes-mainstream-lessons-from-the-first-conference",
  },
  {
    slug: "first-book-on-ethics-of-asean",
    title: "It's out! Download the first book ever on the Ethics of ASEAN",
    date: "2024-09-07",
    category: "AHDO News",
    excerpt: "AHDO releases the first book written on the ethics of ASEAN, free to download.",
    legacyUrl: "https://www.aseanhdo.com/post/its-out-download-the-first-book-ever-on-the-ethics-of-asean",
  },
  {
    slug: "inaugural-asean-human-development-award",
    title: "The Inaugural ASEAN Human Development Award",
    date: "2024-01-27",
    category: "AHDO News",
    excerpt: "The first regional award recognising organisations advancing human development.",
    legacyUrl: "https://www.aseanhdo.com/post/the-inaugural-asean-human-development-award",
  },
  {
    slug: "ahdo-milestones",
    title: "AHDO Milestones: our achievements in the past year and the path ahead",
    date: "2024-01-05",
    category: "AHDO News",
    excerpt: "A look back at a year of growth and the road toward a regional human development agenda.",
    legacyUrl: "https://www.aseanhdo.com/post/ahdo-milestones",
  },
  {
    slug: "next-key-pillar-of-hr",
    title: "The next key pillar of HR: from human resources to human development",
    date: "2023-06-15",
    category: "Paradigm",
    excerpt: "Why the shift from human resources to human development is the defining move of the decade.",
    legacyUrl:
      "https://www.aseanhdo.com/post/the-next-key-pillar-of-hr-from-human-resources-to-human-development",
  },
  {
    slug: "esg-values-in-the-workplace",
    title: "Foster a sustainable future: reflecting ESG values in the workplace",
    date: "2023-03-09",
    category: "Future of Work",
    excerpt: "Embedding environmental, social and governance values into everyday work.",
    legacyUrl: "https://www.aseanhdo.com/post/foster-a-sustainable-future-reflecting-esg-values-in-the-workplace",
  },
  {
    slug: "women-in-indonesias-workforce",
    title: "More support needed to keep women in Indonesia's workforce",
    date: "2023-03-09",
    category: "Gender & Inclusion",
    excerpt: "What it will take to retain and advance women across Indonesia's labour market.",
    legacyUrl: "https://www.aseanhdo.com/post/more-support-needed-to-keep-women-in-indonesias-workforce",
  },
  {
    slug: "learning-encourages-delayed-retirement",
    title: "Opportunities to learn encourage employees to delay retirement",
    date: "2023-03-09",
    category: "Skills & Learning",
    excerpt: "Lifelong learning keeps older workers engaged and in the workforce longer.",
    legacyUrl: "https://www.aseanhdo.com/post/opportunities-to-learn-encourage-employees-to-delay-retirement",
  },
  {
    slug: "mental-health-speak-up-sea",
    title: "Employees in SEA reluctant to speak up about mental health concerns",
    date: "2023-01-31",
    category: "Wellbeing",
    excerpt: "Stigma still keeps Southeast Asian workers from raising mental health at work.",
    legacyUrl: "https://www.aseanhdo.com/post/employees-in-sea-reluctant-to-speak-up-about-mental-health-concerns",
  },
  {
    slug: "people-and-work-new-paradigm",
    title: "Navigating the new paradigm of people and work",
    date: "2022-11-26",
    category: "Paradigm",
    excerpt: "A people-first lens on the structural changes reshaping work in the region.",
    legacyUrl: "https://www.aseanhdo.com/post/navigating-the-new-paradigm-of-people-and-work",
  },
  {
    slug: "cambodia-womens-employment",
    title: "Cambodia takes the lead in women's employment in ASEAN",
    date: "2022-10-22",
    category: "Gender & Inclusion",
    excerpt: "Cambodia posts some of the region's strongest gains in women's labour participation.",
    legacyUrl: "https://www.aseanhdo.com/post/cambodia-takes-lead-in-womens-employment-in-asean",
  },
  {
    slug: "why-hr-is-shifting-to-hd-part-1",
    title: "Why HR is shifting to HD, Part 1: a new awareness of human development",
    date: "2022-09-10",
    category: "Paradigm",
    excerpt: "The first in AHDO's foundational series on the move from human resources to human development.",
    legacyUrl: "https://www.aseanhdo.com/post/why-hr-is-shifting-to-hd-part-1-a-new-awareness-of-human-development",
  },
];

export const NEWS_CATEGORIES: NewsCategory[] = [
  "AHDO News",
  "Paradigm",
  "Future of Work",
  "Wellbeing",
  "Gender & Inclusion",
  "Skills & Learning",
];

// Total posts in the legacy archive (full list lives in /aseanhdo-archive/02-news.md).
export const LEGACY_NEWS_COUNT = 100;
