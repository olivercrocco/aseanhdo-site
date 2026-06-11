import { Section } from "@/components/ui/container";
import { PageHeader } from "@/components/page-header";
import { SectionHeading, Eyebrow } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { NEWS, NEWS_CATEGORIES, LEGACY_NEWS_COUNT } from "@/content/news";

export const metadata = { title: "News" };

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

const [featured, ...rest] = NEWS;

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="News & insight"
        title="News"
        lede="Insight on people and work across ASEAN, from the future of work and wellbeing to gender, skills and the shift toward human development."
      >
        <ButtonLink
          href="https://www.aseanhdo.com/news"
          variant="secondary"
          arrow
        >
          Browse the full archive
        </ButtonLink>
      </PageHeader>

      {/* ===== Featured lead ===== */}
      <Section>
        <Eyebrow>Latest</Eyebrow>
        <Card
          href={featured.legacyUrl}
          accent="research"
          className="mt-6 gap-5"
        >
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="neutral">{featured.category}</Badge>
            <span className="font-mono text-[0.875rem] text-muted-foreground">
              {formatDate(featured.date)}
            </span>
          </div>
          <CardTitle className="text-[clamp(1.5rem,3vw,2rem)] leading-tight">
            {featured.title}
          </CardTitle>
          <p className="measure text-[1.125rem] leading-relaxed text-foreground-secondary">
            {featured.excerpt}
          </p>
          <div className="mt-2">
            <ButtonLink
              href={featured.legacyUrl}
              variant="secondary"
              size="sm"
              arrow
            >
              Read on the current site
            </ButtonLink>
          </div>
        </Card>
      </Section>

      {/* ===== Category row + remaining grid ===== */}
      <Section tone="card" className="border-y border-border">
        <SectionHeading
          eyebrow="More insight"
          title="From across the region"
          lede="A selection from AHDO's writing on human development. The full catalogue migrates with the content management system."
        />

        {/* Static category labels (visual only, not interactive). */}
        <div className="mt-8 flex flex-wrap items-center gap-2.5">
          <span className="font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-muted-foreground">
            Topics
          </span>
          {NEWS_CATEGORIES.map((category) => (
            <Badge key={category} tone="neutral">
              {category}
            </Badge>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((item) => (
            <Card
              key={item.slug}
              href={item.legacyUrl}
              accent="research"
              className="gap-4"
            >
              <div className="flex flex-wrap items-center gap-3">
                <Badge tone="neutral">{item.category}</Badge>
                <span className="font-mono text-[0.875rem] text-muted-foreground">
                  {formatDate(item.date)}
                </span>
              </div>
              <CardTitle className="text-[1.2rem]">{item.title}</CardTitle>
              <p className="text-[1rem] leading-relaxed text-foreground-secondary">
                {item.excerpt}
              </p>
              <span className="mt-auto pt-2 font-mono text-[0.8125rem] text-accent-text">
                Read on the current site →
              </span>
            </Card>
          ))}
        </div>
      </Section>

      {/* ===== Archive note band ===== */}
      <Section tone="sunken" className="border-b border-border">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="measure flex flex-col gap-3">
            <Eyebrow>Full archive</Eyebrow>
            <p className="text-[1.125rem] leading-relaxed text-foreground-secondary">
              There are {LEGACY_NEWS_COUNT} posts in total. The complete archive
              migrates with the content management system, and lives on the
              current site until the move is complete.
            </p>
          </div>
          <ButtonLink
            href="https://www.aseanhdo.com/news"
            variant="primary"
            arrow
            className="shrink-0"
          >
            Browse the full archive
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
