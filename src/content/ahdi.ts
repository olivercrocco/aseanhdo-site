// The ASEAN Human Development Index (AHDI) — teaser content for the preview page.
// The full interactive index (scores, rankings, trajectories) is added once the
// report is finalised. No scores are published here yet by design.

export const AHDI = {
  name: "ASEAN Human Development Index",
  abbr: "AHDI",
  status: "Coming 2026",
  tagline: "The first measure of human development built for, and from, Southeast Asia.",
  intro:
    "AHDO is developing the ASEAN Human Development Index — a composite index that captures the full breadth of human development across all eleven ASEAN member states. Where existing global indices flatten the region into a handful of indicators, the AHDI is designed around the priorities ASEAN itself has named.",
  coverage: [
    { label: "Member states", value: "11", note: "All of ASEAN, including Timor-Leste" },
    { label: "Years", value: "1990–2023", note: "More than three decades of change" },
    { label: "Thematic clusters", value: "19", note: "From foundational stocks to wellbeing" },
    { label: "Indicators", value: "3,800+", note: "Drawn from leading global sources" },
  ],
  method:
    "Built in the tradition of the UNDP Human Development Index and extended for the region, the AHDI aggregates nineteen thematic clusters into a headline score, with a full dashboard of sub-indices and disaggregation by gender, age and disability.",
  sources: ["World Bank", "ILO", "UNESCO", "UNDP", "V-Dem", "WHO", "Penn World Tables", "World Happiness Report"],
  willEnable: [
    "Compare all eleven member states on a single, ASEAN-grounded measure",
    "Explore nineteen clusters of human development, not just income and schooling",
    "Track each country's trajectory from 1990 to today",
    "See development disaggregated by gender, age and disability",
  ],
  // 19 thematic clusters. Order matches the index framework.
  clusters: [
    "Foundational Stocks",
    "Human Capital Foundations",
    "Education Quality & Lifelong Learning",
    "Decent Work & Care Economy",
    "Inequality & the Missing Middle",
    "Capabilities & Substantive Freedoms",
    "Subjective Well-Being",
    "Mental Health & Workplace Wellbeing",
    "Innovation & the Middle-Income Trap",
    "Talent Mobility & Regional Integration",
    "Demographic Transition & Life Course",
    "Future of Work & Digital Inclusion",
    "Social Capital & Regional Virtue Ethics",
    "Sustainability & Climate Resilience",
    "Governance, Voice & Institutions",
    "Dynamic & Trajectory Indicators",
    "ASEAN Identity & Shared Belonging",
    "Cultural & Creative Industries",
    "Sports & Physical Activity",
  ],
} as const;
