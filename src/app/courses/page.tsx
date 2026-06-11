import { Section, Container } from "@/components/ui/container";
import { SectionHeading, Eyebrow } from "@/components/ui/section-heading";
import { PageHeader } from "@/components/page-header";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardMeta, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  CERT_LEVELS,
  CERT_BENEFITS,
  CERT_DETAILS,
} from "@/content/programs";

export const metadata = { title: "Courses & certification" };

const spec: { label: string; value: string }[] = [
  { label: "Launched", value: String(CERT_DETAILS.launched) },
  { label: "Modules", value: String(CERT_DETAILS.modules) },
  { label: "Cadence", value: CERT_DETAILS.cadence },
  { label: "Components", value: CERT_DETAILS.components },
  { label: "Assessment", value: CERT_DETAILS.assessment },
  { label: "Audiences", value: CERT_DETAILS.audiences },
];

export default function CoursesPage() {
  return (
    <>
      {/* ===== Page header ===== */}
      <PageHeader
        eyebrow="Professional certification"
        title="Courses & certification"
        lede="A structured pathway for building the field of human development professionals across Southeast Asia, from foundational practice to regional leadership."
      >
        <ButtonLink href={CERT_DETAILS.joinUrl} variant="primary" arrow>
          Join the next cohort
        </ButtonLink>
        <ButtonLink href={CERT_DETAILS.brochureUrl} variant="secondary">
          View brochure
        </ButtonLink>
      </PageHeader>

      {/* ===== Overview ===== */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="flex flex-col gap-6">
            <Eyebrow>Overview</Eyebrow>
            <div className="measure flex flex-col gap-5 text-[1.125rem] leading-relaxed text-foreground-secondary">
              <p>
                Launched in {CERT_DETAILS.launched}, the AHDO certification
                programme prepares practitioners drawn from{" "}
                {CERT_DETAILS.audiences.charAt(0).toLowerCase() + CERT_DETAILS.audiences.slice(1)}{" "}
                to lead human development work in their organisations and across
                the region. The course is {CERT_DETAILS.cadence.charAt(0).toLowerCase() + CERT_DETAILS.cadence.slice(1)},
                so participants can take part without stepping away from their
                roles.
              </p>
              <p>
                Across nine modules the curriculum moves through{" "}
                {CERT_DETAILS.components.charAt(0).toLowerCase() + CERT_DETAILS.components.slice(1)}.
                Participants are assessed on{" "}
                {CERT_DETAILS.assessment.charAt(0).toLowerCase() + CERT_DETAILS.assessment.slice(1)},
                so recognition reflects applied capability rather than attendance
                alone.
              </p>
            </div>
          </div>

          <dl className="flex flex-col divide-y divide-border rounded-md border border-border bg-card-sunken px-6">
            {spec.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <dt className="font-mono text-[0.8125rem] uppercase tracking-[0.06em] text-muted-foreground sm:w-32 sm:shrink-0">
                  {row.label}
                </dt>
                <dd className="text-[1rem] leading-relaxed text-foreground">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* ===== Three-level pathway ===== */}
      <Section tone="sunken" className="border-y border-border">
        <SectionHeading
          eyebrow="The pathway"
          title="A three-level pathway"
          lede="Each level builds on the last, from those new to the field through to selected leaders working with world-class mentors."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {CERT_LEVELS.map((lvl) => (
            <Card key={lvl.level} accent="programmes" className="gap-4">
              <CardMeta>{lvl.level}</CardMeta>
              <CardTitle>{lvl.title}</CardTitle>
              <p className="font-mono text-[0.875rem] text-muted-foreground">
                {lvl.audience}
              </p>
              <p className="text-[1rem] leading-relaxed text-foreground-secondary">
                {lvl.focus}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ===== Benefits ===== */}
      <Section>
        <SectionHeading
          eyebrow="Why certify"
          title="What certification gives you"
          lede="Certification positions you within an expanding field and connects your practice to a regional community of human development professionals."
        />
        <ul className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {CERT_BENEFITS.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-sm bg-secondary-tint font-mono text-[0.8125rem] text-secondary-tint-foreground"
              >
                ✓
              </span>
              <span className="text-[1.125rem] leading-relaxed text-foreground-secondary">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ===== Enrol CTA (dark Ink band) ===== */}
      <section className="dark relative overflow-hidden bg-background text-foreground">
        <div aria-hidden="true" className="loom-grid absolute inset-0" />
        <div aria-hidden="true" className="weave-band absolute inset-x-0 top-0 h-[3px]" />
        <Container className="relative grid gap-10 py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-28">
          <div className="flex flex-col gap-6">
            <Eyebrow>Enrol</Eyebrow>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.018em]">
              Join the next cohort of human development professionals.
            </h2>
            <p className="measure text-[1.125rem] leading-relaxed text-foreground-secondary">
              Cohorts run online on Saturdays, so you can build your practice
              alongside your current role. Places are limited each intake.
            </p>
            <div className="mt-1 flex flex-wrap items-center gap-3">
              <Badge tone="jade" dot>
                Cohort enrolment open
              </Badge>
              <ButtonLink href={CERT_DETAILS.joinUrl} variant="accent" arrow>
                Join the next cohort
              </ButtonLink>
              <ButtonLink href={CERT_DETAILS.brochureUrl} variant="ghost">
                View brochure
              </ButtonLink>
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded-md border border-border bg-card p-7">
            <CardMeta>For organisations</CardMeta>
            <CardTitle>Accredit your organisation</CardTitle>
            <p className="text-[1rem] leading-relaxed text-foreground-secondary">
              Beyond individual certification, AHDO recognises organisations that
              prioritise human development through the AHEAD and HEADSTART
              accreditations.
            </p>
            <div className="mt-2">
              <ButtonLink href="/accreditations" variant="secondary" size="sm" arrow>
                Explore accreditations
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}