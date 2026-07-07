import { Section, Container } from "@/components/ui/container";
import { SectionHeading, Eyebrow } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardMeta, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
import { Badge, AccreditationPill } from "@/components/ui/badge";
import { ScoreTile } from "@/components/ui/score-tile";
import { IndexPreview } from "@/components/index-preview";
import { Photo } from "@/components/ui/photo";
import { Avatar } from "@/components/ui/avatar";

import { SITE, CORE_FUNCTIONS } from "@/content/site";
import { AHDI } from "@/content/ahdi";
import { ASEAN_COUNTRIES } from "@/content/countries";
import { PUBLICATIONS } from "@/content/publications";
import { FEATURED_EVENT } from "@/content/events";
import { CERT_LEVELS } from "@/content/programs";
import { MEDIA } from "@/content/media";
import { FOUNDER } from "@/content/people";

const featuredPubs = PUBLICATIONS.filter((p) => p.featured).slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="loom-grid absolute inset-0" />
        <Container className="relative grid items-center gap-12 pb-16 pt-12 lg:grid-cols-[1.5fr_1fr] lg:pb-24 lg:pt-16">
          <div className="flex flex-col gap-6">
            <h1 className="font-display text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-[1.04] tracking-[-0.02em] text-foreground">
              Human development is ASEAN&rsquo;s future
            </h1>

            <p className="measure text-[1.25rem] leading-relaxed text-foreground-secondary">
              Building the field of human development in ASEAN.
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <ButtonLink href="/index-ahdi" variant="primary" size="lg" arrow>
                Explore the Index
              </ButtonLink>
              <ButtonLink href="/about" variant="secondary" size="lg">
                About AHDO
              </ButtonLink>
            </div>
          </div>

          <IndexPreview />
        </Container>
      </section>

      {/* ===== Mission + four functions ===== */}
      <Section tone="card" className="border-y border-border">
        <SectionHeading
          eyebrow="What we do"
          title="A regional civil society organisation for human development"
          lede={SITE.mission}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {CORE_FUNCTIONS.map((fn) => (
            <Card key={fn.number} href={fn.href} className="gap-4">
              <span className="font-mono text-[0.875rem] font-medium text-accent-text">
                {fn.number}
              </span>
              <CardTitle className="text-[1.15rem]">{fn.title}</CardTitle>
              <p className="text-[1rem] leading-relaxed text-foreground-secondary">
                {fn.blurb}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ===== THE INDEX showcase (flagship, dark Ink) ===== */}
      <section className="dark relative overflow-hidden bg-background text-foreground">
        <div aria-hidden="true" className="loom-grid absolute inset-0" />
        <div aria-hidden="true" className="weave-band absolute inset-x-0 top-0 h-[3px]" />
        <Container className="relative grid gap-12 py-20 lg:grid-cols-[1fr_1fr] lg:py-28">
          <div className="flex flex-col gap-6">
            <Eyebrow>The Index · Flagship</Eyebrow>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.018em]">
              The ASEAN Human Development Index
            </h2>
            <p className="measure text-[1.125rem] leading-relaxed text-foreground-secondary">
              {AHDI.intro}
            </p>
            <div className="flex flex-wrap gap-6 font-mono text-[0.875rem] text-muted-foreground">
              <span>19 CLUSTERS</span>
              <span>11 STATES</span>
              <span>33 YEARS · 1990–2023</span>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <Badge tone="turmeric" dot>
                Coming soon · interactive 2026
              </Badge>
              <ButtonLink href="/index-ahdi" variant="accent" arrow>
                Explore the Index
              </ButtonLink>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="eyebrow text-muted-foreground">The eleven member states</p>
            <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4">
              {ASEAN_COUNTRIES.map((c) => (
                <ScoreTile key={c.iso3} iso={c.iso3} name={c.name} />
              ))}
            </div>
            <p className="mt-1 font-mono text-[0.8125rem] text-muted-foreground">
              Scores publish with the index. Each tile becomes a country profile.
            </p>
          </div>
        </Container>
      </section>

      {/* ===== By the numbers ===== */}
      <Section>
        <SectionHeading
          eyebrow="By the numbers"
          title="Built on a regional evidence base"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Member states" value="11" note="All of ASEAN, including Timor-Leste" />
          <StatCard label="Thematic clusters" value="19" note="From foundational stocks to wellbeing" />
          <StatCard label="Years of data" value="34" note="A continuous panel, 1990–2023" />
          <StatCard label="Indicators" value="3,800" suffix="+" note="Drawn from leading global sources" />
        </div>
      </Section>

      {/* ===== Nineteen clusters (data interlude) ===== */}
      <Section tone="sunken" className="border-y border-border">
        <SectionHeading
          eyebrow="What the index measures"
          title="Nineteen dimensions of human development"
          lede="The AHDI looks beyond income and schooling to the full breadth of what it means to develop people, from decent work and mental health to capabilities, climate resilience and regional belonging."
        />
        <ul className="mt-10 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {AHDI.clusters.map((cluster, i) => (
            <li
              key={cluster}
              className="flex items-center gap-3 rounded-md border border-border bg-card px-4 py-3"
            >
              <span className="font-mono text-[0.8125rem] font-medium text-accent-text">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[1rem] text-foreground">{cluster}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ===== Latest research ===== */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Knowledge products" title="Research and publications" />
          <ButtonLink href="/publications" variant="ghost" arrow>
            All publications
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredPubs.map((pub) => (
            <Card key={pub.slug} href={pub.url} accent="research" className="gap-4">
              <CardMeta>{pub.type}</CardMeta>
              <CardTitle>{pub.title}</CardTitle>
              <p className="text-[1rem] leading-relaxed text-foreground-secondary">
                {pub.description}
              </p>
              <p className="mt-auto pt-2 font-mono text-[0.8125rem] text-muted-foreground">
                {pub.authors}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ===== From the region (founder voice + photo) ===== */}
      <section className="bg-accent-tint">
        <Container className="grid items-center gap-10 py-20 lg:grid-cols-[1fr_1.1fr] lg:py-28">
          <Photo src={MEDIA.experts.src} alt={MEDIA.experts.alt} ratio="4 / 3" />
          <div className="flex flex-col gap-6">
            <Eyebrow>From the region</Eyebrow>
            <blockquote className="font-display text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-tight tracking-[-0.01em] text-foreground">
              &ldquo;The next pillar of organisations is the shift from human resources
              to human development.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <Avatar initials={FOUNDER.initials} name={FOUNDER.name} size={52} />
              <div className="flex flex-col">
                <span className="text-[1.0625rem] font-medium text-foreground">
                  {FOUNDER.name}
                </span>
                <span className="font-mono text-[0.875rem] text-accent-text">
                  {FOUNDER.role}
                </span>
              </div>
            </div>
            <div>
              <ButtonLink href="/about" variant="secondary" arrow>
                Meet AHDO
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== Signing ceremony (partnership photo band) ===== */}
      <Section tone="sunken" className="border-y border-border">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Photo src={MEDIA.signing.src} alt={MEDIA.signing.alt} ratio="16 / 10" />
          <div className="flex flex-col gap-5">
            <Eyebrow>Across the region</Eyebrow>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.375rem)] font-medium leading-[1.14] tracking-[-0.012em] text-foreground">
              Working alongside ASEAN&rsquo;s institutions and partners
            </h2>
            <p className="measure text-[1.125rem] leading-relaxed text-foreground-secondary">
              AHDO works alongside ASEAN institutions, governments and civil society to
              advance human development across the region.
            </p>
          </div>
        </div>
      </Section>

      {/* ===== Events & programmes ===== */}
      <Section tone="card" className="border-y border-border">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <Eyebrow>Events</Eyebrow>
            <Card className="gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="jade">{FEATURED_EVENT.format}</Badge>
                <span className="font-mono text-[0.875rem] text-muted-foreground">
                  {FEATURED_EVENT.dateLabel}
                </span>
              </div>
              <CardTitle>{FEATURED_EVENT.title}</CardTitle>
              <p className="text-[1rem] leading-relaxed text-foreground-secondary">
                {FEATURED_EVENT.summary}
              </p>
              <div className="mt-2">
                <ButtonLink href="/events" variant="secondary" size="sm" arrow>
                  See events
                </ButtonLink>
              </div>
            </Card>
          </div>

          <div className="flex flex-col gap-5">
            <Eyebrow>Programmes</Eyebrow>
            <Card accent="programmes" className="gap-5">
              <CardTitle>Certification for human development professionals</CardTitle>
              <p className="text-[1rem] leading-relaxed text-foreground-secondary">
                A three-level pathway for practitioners across corporate, government,
                NGO and higher-education sectors.
              </p>
              <ul className="flex flex-col gap-2.5">
                {CERT_LEVELS.map((lvl) => (
                  <li key={lvl.level} className="flex items-baseline gap-3">
                    <span className="font-mono text-[0.8125rem] font-medium text-secondary">
                      {lvl.level}
                    </span>
                    <span className="text-[1rem] text-foreground">
                      {lvl.title} — {lvl.audience}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-1">
                <ButtonLink href="/courses" variant="secondary" size="sm" arrow>
                  Explore courses
                </ButtonLink>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* ===== Membership & accreditation CTA ===== */}
      <section className="dark relative overflow-hidden bg-primary text-foreground">
        <div aria-hidden="true" className="weave-band absolute inset-x-0 top-0 h-[3px]" />
        <Container className="relative py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div className="flex flex-col gap-5">
              <Eyebrow>Join the community</Eyebrow>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.018em] text-[var(--primary-foreground)]">
                Help build human development across ASEAN.
              </h2>
              <p className="measure text-[1.125rem] leading-relaxed text-[var(--primary-foreground)]/85">
                Become a member, get your organisation accredited, or partner with us
                on the region&rsquo;s first index of human development.
              </p>
              <AccreditationPill />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-3 rounded-md border border-[var(--primary-foreground)]/20 bg-[var(--primary-foreground)]/5 p-6">
                <p className="font-display text-[1.2rem] text-[var(--primary-foreground)]">
                  Join as a member
                </p>
                <p className="text-[0.9rem] text-[var(--primary-foreground)]/80">
                  Individuals and organisations across the region.
                </p>
                <ButtonLink href="/membership" variant="accent" size="sm" arrow className="mt-2 self-start">
                  Membership
                </ButtonLink>
              </div>
              <div className="flex flex-col gap-3 rounded-md border border-[var(--primary-foreground)]/20 bg-[var(--primary-foreground)]/5 p-6">
                <p className="font-display text-[1.2rem] text-[var(--primary-foreground)]">
                  Get accredited
                </p>
                <p className="text-[0.9rem] text-[var(--primary-foreground)]/80">
                  AHEAD &amp; HEADSTART for organisations.
                </p>
                <ButtonLink href="/accreditations" variant="accent" size="sm" arrow className="mt-2 self-start">
                  Accreditations
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
