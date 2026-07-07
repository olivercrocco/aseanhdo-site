import Link from "next/link";
import { SITE, SOCIAL } from "@/content/site";
import { ASEAN_COUNTRIES } from "@/content/countries";
import { Badge } from "@/components/ui/badge";

const columns: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Organisation",
    links: [
      { label: "About AHDO", href: "/about" },
      { label: "Our mission", href: "/about" },
      { label: "News", href: "/news" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "The Index",
    links: [
      { label: "AHDI overview", href: "/index-ahdi" },
      { label: "19 clusters", href: "/index-ahdi" },
      { label: "Methodology", href: "/index-ahdi" },
      { label: "Publications", href: "/publications" },
    ],
  },
  {
    heading: "Engage",
    links: [
      { label: "Courses", href: "/courses" },
      { label: "Accreditations", href: "/accreditations" },
      { label: "Membership", href: "/membership" },
      { label: "Events", href: "/events" },
    ],
  },
];

export function SiteFooter() {
  return (
    // Deliberate dark colophon, even in light theme.
    <footer className="dark relative bg-background text-foreground">
      <div aria-hidden="true" className="weave-band h-[3px] w-full" />
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* Brand + AHDI strip */}
          <div className="flex flex-col gap-5">
            <p className="font-display text-xl font-semibold">AHDO</p>
            <p className="measure text-[1rem] text-foreground-secondary">
              {SITE.tagline}
            </p>
            <Link
              href="/index-ahdi"
              className="group mt-1 block rounded-md border border-border p-3 transition-colors hover:border-primary"
            >
              <p className="eyebrow mb-2 text-accent-text">AHDI · 11 states</p>
              <div className="grid grid-cols-6 gap-1.5 sm:grid-cols-11 lg:grid-cols-6 xl:grid-cols-11">
                {ASEAN_COUNTRIES.map((c) => (
                  <span
                    key={c.iso3}
                    title={c.name}
                    className="flex h-7 items-center justify-center rounded-[3px] bg-card-sunken font-mono text-[0.5625rem] font-medium text-foreground-secondary"
                  >
                    {c.iso3}
                  </span>
                ))}
              </div>
            </Link>
          </div>

          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading} className="flex flex-col gap-3">
              <p className="eyebrow text-muted-foreground">{col.heading}</p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[1rem] text-foreground-secondary transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Connect row */}
        <div className="mt-12 flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3">
            <p className="font-mono text-[0.875rem] text-muted-foreground">
              {SITE.base} · Founded {SITE.founded}
            </p>
            <div className="flex items-center gap-4">
              {(
                [
                  ["LinkedIn", SOCIAL.linkedin],
                  ["Facebook", SOCIAL.facebook],
                ] as const
              ).map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.9375rem] text-foreground-secondary underline-offset-4 hover:text-foreground hover:underline"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
          <Badge tone="neutral" dot>
            Pursuing ASEAN entity accreditation
          </Badge>
        </div>

        <p className="mt-8 font-mono text-[0.8125rem] text-muted-foreground">
          © {SITE.founded}–2026 {SITE.name}. An independent non-profit civil society organisation.
        </p>
      </div>
    </footer>
  );
}
