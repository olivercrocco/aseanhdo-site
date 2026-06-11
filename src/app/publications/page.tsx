import { Section } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { PageHeader } from "@/components/page-header";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardMeta, CardTitle } from "@/components/ui/card";
import { Photo } from "@/components/ui/photo";

import { PUBLICATIONS, type PublicationType } from "@/content/publications";
import { MEDIA } from "@/content/media";

export const metadata = { title: "Publications" };

const featuredPubs = PUBLICATIONS.filter((p) => p.featured);

// Archive groups, in display order. Only types with items render.
const TYPE_ORDER: PublicationType[] = ["Book", "White Paper", "Report", "Proceedings"];

const groups = TYPE_ORDER.map((type) => ({
  type,
  items: PUBLICATIONS.filter((p) => p.type === type),
})).filter((g) => g.items.length > 0);

// Section tones alternate down the archive for vertical rhythm.
const GROUP_TONES = ["paper", "sunken", "card"] as const;

/** Compose the mono meta line: type, with year and/or publisher when present. */
function metaLine(pub: (typeof PUBLICATIONS)[number]) {
  return [pub.type, pub.year?.toString(), pub.publisher]
    .filter(Boolean)
    .join(" · ");
}

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Knowledge products"
        title="Publications"
        lede="Research reports, white papers and books from AHDO and the wider human development community, charting an ASEAN-grounded vision for how the region develops its people."
      >
        <ButtonLink href="/membership" variant="primary" arrow>
          Join AHDO
        </ButtonLink>
        <ButtonLink href="/events" variant="secondary">
          Upcoming events
        </ButtonLink>
      </PageHeader>

      {/* ===== Banner photo ===== */}
      <Section size="sm">
        <Photo
          src={MEDIA.publications.src}
          alt={MEDIA.publications.alt}
          ratio="21 / 9"
          priority
          sizes="(max-width: 1200px) 100vw, 1120px"
        />
      </Section>

      {/* ===== Featured ===== */}
      {featuredPubs.length > 0 && (
        <Section tone="card" className="border-y border-border">
          <Eyebrow>Featured</Eyebrow>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featuredPubs.map((pub) => (
              <Card key={pub.slug} href={pub.url} accent="research" className="gap-4">
                <CardMeta>{metaLine(pub)}</CardMeta>
                <CardTitle>{pub.title}</CardTitle>
                <p className="text-[1.125rem] leading-relaxed text-foreground-secondary">
                  {pub.description}
                </p>
                <p className="mt-auto pt-2 font-mono text-[0.8125rem] text-muted-foreground">
                  {pub.authors}
                </p>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {/* ===== Archive, grouped by type ===== */}
      {groups.map((group, i) => {
        const tone = GROUP_TONES[i % GROUP_TONES.length];
        const bordered = tone !== "paper";
        return (
          <Section
            key={group.type}
            tone={tone}
            className={bordered ? "border-y border-border" : undefined}
          >
            <Eyebrow>{group.type}</Eyebrow>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {group.items.map((pub) => (
                <Card key={pub.slug} href={pub.url} accent="research" className="gap-4">
                  <CardMeta>{metaLine(pub)}</CardMeta>
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
        );
      })}

      {/* ===== CTA band ===== */}
      <section className="dark relative overflow-hidden bg-background text-foreground">
        <div aria-hidden="true" className="loom-grid absolute inset-0" />
        <div aria-hidden="true" className="weave-band absolute inset-x-0 top-0 h-[3px]" />
        <Section tone="ink" className="!bg-transparent">
          <div className="flex max-w-2xl flex-col gap-5">
            <Eyebrow>Stay close to the work</Eyebrow>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.375rem)] font-medium leading-[1.14] tracking-[-0.012em]">
              New knowledge products as the field grows
            </h2>
            <p className="measure text-[1.125rem] leading-relaxed text-foreground-secondary">
              Members receive new white papers and reports first, and help shape the
              research agenda for human development across ASEAN. Our convenings are
              where much of this work is debated and launched.
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <ButtonLink href="/membership" variant="accent" arrow>
                Become a member
              </ButtonLink>
              <ButtonLink href="/events" variant="secondary" arrow>
                See upcoming events
              </ButtonLink>
            </div>
          </div>
        </Section>
      </section>
    </>
  );
}
