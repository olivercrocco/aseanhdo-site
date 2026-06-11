// Events. Migrated from /aseanhdo-archive/01-events.md.

export type AgendaItem = { time: string; session: string };

export type AhdoEvent = {
  slug: string;
  title: string;
  start: string; // ISO date
  end?: string;
  dateLabel: string;
  location: string;
  format: string;
  status: "upcoming" | "past";
  summary: string;
  registrationUrl?: string;
  agenda?: { day: string; items: AgendaItem[] }[];
};

export const FEATURED_EVENT: AhdoEvent = {
  slug: "future-of-asean-human-development-2025",
  title: "Conference on the Future of Human Development in ASEAN",
  start: "2025-09-10",
  end: "2025-09-11",
  dateLabel: "10–11 September 2025",
  location: "Jakarta & virtual",
  format: "Hybrid · Zoom Webinar",
  status: "past",
  summary:
    "Thought leaders and changemakers across Southeast Asia met to chart a bold, inclusive vision for human development toward ASEAN 2045.",
  registrationUrl: "https://forms.gle/Y5FkZnrJ8DxiRJwP9",
  agenda: [
    {
      day: "Day 1 · 10 September 2025",
      items: [
        { time: "14:00", session: "Welcome remarks — Bob Aubrey and Rodora Babaran" },
        { time: "14:15", session: "Opening address on ASEAN priorities toward 2045" },
        { time: "14:30", session: "Indonesia's human development goals (keynote)" },
        { time: "15:20", session: "Human development goals for state-owned enterprises" },
        { time: "15:40", session: "UNDP perspective on mainstreaming" },
        { time: "16:00", session: "OECD role for ASEAN 2045" },
        { time: "16:20", session: "Panel discussion" },
      ],
    },
    {
      day: "Day 2 · 11 September 2025",
      items: [
        { time: "09:00", session: "Strategic instruments (keynote)" },
        { time: "09:30", session: "Next generation leadership priorities" },
        { time: "09:50", session: "Research and education roadmap" },
        { time: "10:30", session: "ASEAN freedoms and human rights goals" },
        { time: "10:50", session: "Business development goals" },
        { time: "11:10", session: "Panel discussion" },
        { time: "13:20", session: "Development gap and resilience" },
        { time: "13:40", session: "Lifelong learning" },
        { time: "14:00", session: "Mental health white paper" },
        { time: "14:20", session: "Gig workforce development" },
        { time: "14:40", session: "Panel discussion" },
        { time: "15:40", session: "Key takeaways and recommendations" },
        { time: "16:30", session: "Closing remarks" },
      ],
    },
  ],
};

export const PAST_EVENTS: AhdoEvent[] = [
  {
    slug: "ahdo-summit-hr-tech-festival-asia-2024",
    title: "The AHDO Summit at HR Tech Festival Asia 2024",
    start: "2024-05-01",
    dateLabel: "2024",
    location: "Singapore",
    format: "Summit",
    status: "past",
    summary: "AHDO convened human development leaders at HR Tech Festival Asia, alongside a Human Development Masterclass.",
  },
  {
    slug: "inaugural-asean-human-development-award-2024",
    title: "The Inaugural ASEAN Human Development Award",
    start: "2024-01-27",
    dateLabel: "2024",
    location: "ASEAN",
    format: "Award",
    status: "past",
    summary: "The first regional award recognising organisations advancing human development across Southeast Asia.",
  },
  {
    slug: "new-human-development-paradigm-2023",
    title: "The New Human Development Paradigm — Regional Conference",
    start: "2023-05-11",
    dateLabel: "11 May 2023",
    location: "Singapore",
    format: "Conference",
    status: "past",
    summary: "A regional conference advancing the shift from human resources to human development.",
  },
  {
    slug: "ahdo-first-regional-summit-2022",
    title: "AHDO's First Regional Summit for Human Development Professionals",
    start: "2022-11-17",
    dateLabel: "November 2022",
    location: "ASEAN",
    format: "Summit",
    status: "past",
    summary: "AHDO's inaugural regional gathering of human development professionals.",
  },
];

export const ALL_EVENTS: AhdoEvent[] = [FEATURED_EVENT, ...PAST_EVENTS];
