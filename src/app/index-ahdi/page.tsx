import { Section, Container } from "@/components/ui/container";
import { SectionHeading, Eyebrow } from "@/components/ui/section-heading";
import { PageHeader } from "@/components/page-header";
import { ButtonLink } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import { Badge } from "@/components/ui/badge";
import { ScoreTile } from "@/components/ui/score-tile";

import { AHDI } from "@/content/ahdi";
import { ASEAN_COUNTRIES } from "@/content/countries";

export const metadata = { title: "The Index" };

export default function IndexAhdiPage() {
  return (
    <>
      {/* ===== Page header ===== */}
      <PageHeader
        eyebrow="The Index · Flagship"
        title={AHDI.name}
        lede={AHDI.tagline}
      >
        <Badge tone="turmeric" dot>
          {AHDI.status}
        </Badge>
        <ButtonLink href="/publications" variant="ghost" arrow>
          Read the methodology
        </ButtonLink>
      </PageHeader>

      {/* ===== What the AHDI measures (reading column) ===== */}
      <Section>
        <SectionHeading
          eyebrow="What the index measures"
          title="A measure built for, and from, the region"
        />
        <div className="measure mt-8 flex flex-col gap-5 text-[1.125rem] leading-relaxed text-foreground-secondary">
          <p>{AHDI.intro}</p>
          <p>{AHDI.method}</p>
        </div>
      </Section>

      {/* ===== Coverage by the numbers ===== */}
      <Section tone="card" className="border-y border-border">
        <SectionHeading
          eyebrow="Coverage"
          title="The shape of the evidence base"
          lede="Before a single score publishes, the AHDI rests on a wide, continuous panel: every member state, more than three decades, and thousands of indicators."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AHDI.coverage.map((c) => (
            <StatCard
              key={c.label}
              label={c.label}
              value={c.value}
              note={c.note}
            />
          ))}
        </div>
      </Section>

      {/* ===== Nineteen dimensions ===== */}
      <Section tone="sunken" className="border-y border-border">
        <SectionHeading
          eyebrow="The framework"
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

      {/* ===== The eleven member states (dark Ink band) ===== */}
      <section className="dark relative overflow-hidden bg-background text-foreground">
        <div aria-hidden="true" className="loom-grid absolute inset-0" />
        <div aria-hidden="true" className="weave-band absolute inset-x-0 top-0 h-[3px]" />
        <Container className="relative py-20 lg:py-28">
          <div className="flex flex-col gap-10">
            <div className="flex max-w-2xl flex-col gap-5">
              <Eyebrow>The eleven member states</Eyebrow>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.018em]">
                One ASEAN-grounded measure, eleven trajectories
              </h2>
              <p className="measure text-[1.125rem] leading-relaxed text-foreground-secondary">
                Scores publish with the index. Each tile becomes a country
                profile.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 lg:grid-cols-6">
              {ASEAN_COUNTRIES.map((c) => (
                <ScoreTile key={c.iso3} iso={c.iso3} name={c.name} />
              ))}
            </div>

            <div className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-[0.875rem] text-muted-foreground">
              <span>11 STATES</span>
              <span aria-hidden="true">·</span>
              <span>19 CLUSTERS</span>
              <span aria-hidden="true">·</span>
              <span>1990–2023</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== What you'll be able to do ===== */}
      <Section>
        <SectionHeading
          eyebrow="When it launches"
          title="What you'll be able to do"
          lede="The interactive index opens the panel up for exploration, comparison and disaggregation across the whole region."
        />
        <ul className="measure mt-10 flex flex-col gap-4">
          {AHDI.willEnable.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-tint font-mono text-[0.9375rem] text-secondary-tint-foreground"
              >
                ✓
              </span>
              <span className="text-[1.125rem] leading-relaxed text-foreground-secondary">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ===== Data sources ===== */}
      <Section tone="card" className="border-y border-border">
        <SectionHeading
          eyebrow="Data sources"
          title="Drawn from leading global datasets"
          lede="The AHDI harmonises indicators from the most authoritative international sources, then re-weights and extends them around priorities ASEAN itself has named."
        />
        <div className="mt-10 flex flex-wrap gap-2.5">
          {AHDI.sources.map((source) => (
            <Badge key={source} tone="neutral">
              {source}
            </Badge>
          ))}
        </div>
      </Section>

      {/* ===== Notify me ===== */}
      <Section tone="card" className="border-y border-border">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <SectionHeading
            eyebrow="Stay informed"
            title="Be the first to know when the index goes live"
            lede="Leave your email and we'll let you know the moment the AHDI dashboard publishes, with scores, sub-indices and country profiles for all eleven member states."
          />

          <form className="flex flex-col gap-4 rounded-lg border border-border bg-card-sunken p-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="notify-email"
                className="eyebrow text-muted-foreground"
              >
                Email
              </label>
              <input
                id="notify-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@organisation.org"
                className="min-h-[44px] w-full rounded-[8px] border border-border bg-card-sunken px-3.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              />
            </div>

            <button
              type="submit"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[8px] bg-primary px-5 text-[1rem] font-semibold text-primary-foreground transition-colors duration-150 hover:bg-primary-hover active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Notify me at launch
            </button>

            <p className="font-mono text-[0.8125rem] leading-relaxed text-muted-foreground">
              Form delivery activates once the back end is connected.
            </p>
          </form>
        </div>
      </Section>
    </>
  );
}
