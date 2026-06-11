import { Section, Container } from "@/components/ui/container";
import { SectionHeading, Eyebrow } from "@/components/ui/section-heading";
import { PageHeader } from "@/components/page-header";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { FEATURED_EVENT, PAST_EVENTS } from "@/content/events";

export const metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <>
      {/* ===== Page header ===== */}
      <PageHeader
        eyebrow="Events"
        title="Events & forums"
        lede="AHDO convenes the region — through conferences, summits and awards that move Southeast Asia from human resources to human development."
      >
        <ButtonLink href="/membership" variant="primary" arrow>
          Join AHDO
        </ButtonLink>
        <ButtonLink href="/news" variant="ghost">
          Latest news
        </ButtonLink>
      </PageHeader>

      {/* ===== Featured event ===== */}
      <Section tone="card" className="border-y border-border">
        <Eyebrow>Featured event</Eyebrow>

        <Card className="mt-6 gap-5">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <Badge tone="jade">{FEATURED_EVENT.format}</Badge>
            <span className="font-mono text-[0.875rem] text-muted-foreground">
              {FEATURED_EVENT.dateLabel}
            </span>
            <span aria-hidden="true" className="font-mono text-[0.875rem] text-muted-foreground">
              ·
            </span>
            <span className="font-mono text-[0.875rem] text-muted-foreground">
              {FEATURED_EVENT.location}
            </span>
          </div>

          <CardTitle className="text-[1.6rem]">{FEATURED_EVENT.title}</CardTitle>

          <p className="measure text-[1.125rem] leading-relaxed text-foreground-secondary">
            {FEATURED_EVENT.summary}
          </p>

          {FEATURED_EVENT.registrationUrl && (
            <div className="mt-1">
              <ButtonLink
                href={FEATURED_EVENT.registrationUrl}
                variant="primary"
                arrow
              >
                Register
              </ButtonLink>
            </div>
          )}
        </Card>

        {FEATURED_EVENT.agenda && FEATURED_EVENT.agenda.length > 0 && (
          <div className="mt-10">
            <p className="eyebrow text-muted-foreground">Agenda</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {FEATURED_EVENT.agenda.map((day) => (
                <div
                  key={day.day}
                  className="flex flex-col gap-4 rounded-md border border-border bg-background p-6 sm:p-7"
                >
                  <h3 className="font-display text-[1.2rem] leading-snug text-foreground">
                    {day.day}
                  </h3>
                  <dl className="flex flex-col">
                    {day.items.map((item) => (
                      <div
                        key={`${item.time}-${item.session}`}
                        className="flex gap-4 border-t border-border py-3 first:border-t-0 first:pt-0"
                      >
                        <dt className="shrink-0 font-mono text-[0.875rem] tabular-nums text-accent-text">
                          {item.time}
                        </dt>
                        <dd className="text-[1rem] leading-relaxed text-foreground-secondary">
                          {item.session}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        )}
      </Section>

      {/* ===== Past events ===== */}
      <Section tone="sunken" className="border-b border-border">
        <SectionHeading
          eyebrow="Archive"
          title="Past events"
          lede="A record of the gatherings, summits and awards through which AHDO has convened human development leaders across the region."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PAST_EVENTS.map((event) => (
            <Card key={event.slug} className="gap-4">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <Badge tone="jade">{event.format}</Badge>
                <span className="font-mono text-[0.875rem] text-muted-foreground">
                  {event.dateLabel}
                </span>
                <span aria-hidden="true" className="font-mono text-[0.875rem] text-muted-foreground">
                  ·
                </span>
                <span className="font-mono text-[0.875rem] text-muted-foreground">
                  {event.location}
                </span>
              </div>
              <CardTitle>{event.title}</CardTitle>
              <p className="text-[1rem] leading-relaxed text-foreground-secondary">
                {event.summary}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ===== Stay close to the work (CTA) ===== */}
      <section className="dark relative overflow-hidden bg-background text-foreground">
        <div aria-hidden="true" className="loom-grid absolute inset-0" />
        <div aria-hidden="true" className="weave-band absolute inset-x-0 top-0 h-[3px]" />
        <Container className="relative py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div className="flex flex-col gap-5">
              <Eyebrow>Stay close to the work</Eyebrow>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.018em]">
                Members get early access to events.
              </h2>
              <p className="measure text-[1.125rem] leading-relaxed text-foreground-secondary">
                Join AHDO for priority registration, member rates and an
                invitation to convenings across the region. Or follow our news for
                announcements as each forum is confirmed.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <ButtonLink href="/membership" variant="accent" size="lg" arrow>
                Become a member
              </ButtonLink>
              <ButtonLink href="/news" variant="secondary" size="lg">
                Read the news
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}