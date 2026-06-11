import { Section, Container } from "@/components/ui/container";
import { SectionHeading, Eyebrow } from "@/components/ui/section-heading";
import { PageHeader } from "@/components/page-header";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardMeta, CardTitle } from "@/components/ui/card";
import { Badge, AccreditationPill } from "@/components/ui/badge";

import { MEMBERSHIP_TIERS } from "@/content/programs";

export const metadata = { title: "Membership" };

const AUDIENCES = [
  "Policymakers",
  "HRD professionals",
  "Academics",
  "NGOs",
];

export default function MembershipPage() {
  return (
    <>
      {/* ===== Page header ===== */}
      <PageHeader
        eyebrow="Join the community"
        title="Membership"
        lede="Join the region's community of human development professionals and organisations, from individual practitioners to institutions shaping people and work across Southeast Asia."
      >
        <ButtonLink href="/contact" variant="primary" arrow>
          Join AHDO
        </ButtonLink>
        <ButtonLink href="/courses" variant="secondary">
          Explore certification
        </ButtonLink>
        <AccreditationPill />
      </PageHeader>

      {/* ===== Value band ===== */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="flex flex-col gap-6">
            <Eyebrow>Why join</Eyebrow>
            <div className="measure flex flex-col gap-5 text-[1.125rem] leading-relaxed text-foreground-secondary">
              <p>
                Membership connects you to a regional community built around a
                single conviction: that the next pillar of organisations is the
                shift from human resources to human development. Members help shape
                that field across eleven member states, attentive to culture and
                context rather than importing frameworks built elsewhere.
              </p>
              <p>
                Whatever your role, membership opens access to events,
                publications, certification, committees and research, alongside the
                networks and recognition that come from working with peers across
                the region.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-md border border-border bg-card-sunken p-7">
            <Eyebrow>Who joins</Eyebrow>
            <p className="text-[1rem] leading-relaxed text-foreground-secondary">
              AHDO brings together the people and institutions who build human
              development across the region.
            </p>
            <div className="mt-1 flex flex-wrap gap-2">
              {AUDIENCES.map((audience) => (
                <Badge key={audience} tone="neutral">
                  {audience}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ===== Tiers ===== */}
      <Section tone="sunken" className="border-y border-border">
        <SectionHeading
          eyebrow="Membership tiers"
          title="Choose your membership"
          lede="Tiers for individuals and organisations, with adjusted rates available for startups and SMEs. All fees are annual and quoted in Singapore dollars."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MEMBERSHIP_TIERS.map((tier) => (
            <Card
              key={tier.name}
              accent={tier.highlight ? "index" : "none"}
              className="gap-5"
            >
              <div className="flex flex-col gap-3">
                {tier.highlight ? (
                  <Badge tone="jade" dot>
                    Most popular
                  </Badge>
                ) : (
                  <CardMeta>Membership</CardMeta>
                )}
                <CardTitle>{tier.name}</CardTitle>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="font-mono text-[1.75rem] leading-none text-foreground">
                  {tier.price}
                </span>
                <span className="font-mono text-[0.875rem] text-muted-foreground">
                  {tier.cadence}
                </span>
              </div>

              <p className="text-[1rem] leading-relaxed text-foreground-secondary">
                {tier.audience}
              </p>

              <ul className="flex flex-1 flex-col gap-2.5">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-sm bg-secondary-tint font-mono text-[0.8125rem] text-secondary-tint-foreground"
                    >
                      ✓
                    </span>
                    <span className="text-[0.9375rem] leading-relaxed text-foreground-secondary">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-1">
                <ButtonLink
                  href="/contact"
                  variant={tier.highlight ? "primary" : "secondary"}
                  size="sm"
                  arrow
                  className="w-full justify-center"
                >
                  Join
                </ButtonLink>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ===== Beyond ASEAN note ===== */}
      <Section>
        <Card className="gap-5">
          <Eyebrow>Beyond ASEAN</Eyebrow>
          <CardTitle>Taking part from outside the region</CardTitle>
          <p className="measure text-[1.125rem] leading-relaxed text-foreground-secondary">
            Membership is rooted in Southeast Asia, but participation is not closed
            to those beyond it. Individuals outside ASEAN can still access AHDO
            events, publications and certification, and organisations based outside
            the region can take part by having their regional subsidiaries join. If
            you are unsure which route fits your situation, get in touch and we will
            help you find the right way to take part.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <ButtonLink href="/contact" variant="secondary" arrow>
              Ask about taking part
            </ButtonLink>
            <ButtonLink href="/publications" variant="ghost">
              Browse publications
            </ButtonLink>
          </div>
        </Card>
      </Section>

      {/* ===== Join CTA (indigo Ink band) ===== */}
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
                Become a member to join the regional community, or accredit your
                organisation through AHEAD and HEADSTART to formalise its standing
                in human development.
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
                <ButtonLink
                  href="/contact"
                  variant="accent"
                  size="sm"
                  arrow
                  className="mt-2 self-start"
                >
                  Join AHDO
                </ButtonLink>
              </div>
              <div className="flex flex-col gap-3 rounded-md border border-[var(--primary-foreground)]/20 bg-[var(--primary-foreground)]/5 p-6">
                <p className="font-display text-[1.2rem] text-[var(--primary-foreground)]">
                  Get accredited
                </p>
                <p className="text-[0.9rem] text-[var(--primary-foreground)]/80">
                  AHEAD &amp; HEADSTART for organisations.
                </p>
                <ButtonLink
                  href="/accreditations"
                  variant="accent"
                  size="sm"
                  arrow
                  className="mt-2 self-start"
                >
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