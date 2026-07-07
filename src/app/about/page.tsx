import { Section, Container } from "@/components/ui/container";
import { SectionHeading, Eyebrow } from "@/components/ui/section-heading";
import { PageHeader } from "@/components/page-header";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge, AccreditationPill } from "@/components/ui/badge";
import { Photo } from "@/components/ui/photo";
import { FounderIntro, ProfileCard } from "@/components/profile-card";

import { SITE, CORE_FUNCTIONS } from "@/content/site";
import { AHDI } from "@/content/ahdi";
import { MEDIA } from "@/content/media";
import { FOUNDER, PEOPLE, PARTNERS } from "@/content/people";

export const metadata = { title: "About AHDO" };

export default function AboutPage() {
  return (
    <>
      {/* ===== Page header ===== */}
      <PageHeader
        eyebrow="About AHDO"
        title="Mainstreaming human development in ASEAN"
        lede={SITE.heroLede}
      >
        <ButtonLink href="/membership" variant="primary" arrow>
          Join AHDO
        </ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Get in touch
        </ButtonLink>
        <AccreditationPill />
      </PageHeader>

      {/* ===== Our story (reading column + photo) ===== */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="From human resources to human development"
            />
            <div className="mt-8 flex flex-col gap-5 text-[1.125rem] leading-relaxed text-foreground-secondary">
              <p>
                From the beginning, AHDO has been guided by the conviction that
                ASEAN&rsquo;s future lies in making human development central to regional
                development. People are ends in themselves, with the aspiration,
                potential and right to develop over their entire lifecycle. AHDO
                mainstreams human development in all its forms, from human development
                projects to policy and research.
              </p>
              <p>
                AHDO is deliberately ASEAN-grounded and people-centred. Founded in 2018
                and based in Jakarta, AHDO is an independent, non-profit civil society
                organisation that supports the priorities that the region itself has
                defined, rather than importing frameworks built elsewhere. Our work is
                rooted in the diversity of the eleven ASEAN Member States, attentive to
                regional culture and contexts, and gives voice to ASEAN&rsquo;s
                leadership role in the world.
              </p>
              <p>
                As an organisation recognised for thought leadership, AHDO has published
                foundational books on human development leadership in ASEAN and created
                the ASEAN Human Development Index.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:pt-16">
            <Photo src={MEDIA.jakartaOffice.src} alt={MEDIA.jakartaOffice.alt} ratio="4 / 3" priority />
            <p className="font-mono text-[0.875rem] text-muted-foreground">
              AHDO, Jakarta · founded {SITE.founded}
            </p>
          </div>
        </div>
      </Section>

      {/* ===== Leadership & people ===== */}
      <Section tone="sunken" className="border-y border-border">
        <SectionHeading
          eyebrow="Leadership & people"
          title="The people behind AHDO"
          lede="AHDO is led by a Founder, a Board of Directors, a headquarters team and a network of human development experts and professionals across the region."
        />

        {/* Founder feature */}
        <div className="mt-10 grid gap-10 rounded-lg border border-border bg-card p-6 sm:p-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <FounderIntro person={FOUNDER} />
          <Photo src={MEDIA.experts.src} alt={MEDIA.experts.alt} ratio="4 / 3" />
        </div>

        {/* Chapters & network */}
        <p className="eyebrow mt-12 text-muted-foreground">Across the region</p>
        <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PEOPLE.map((p) => (
            <ProfileCard key={p.slug} person={p} />
          ))}
          <Card className="justify-between gap-4 border-dashed">
            <div className="flex flex-col gap-3">
              <CardTitle className="text-[1.15rem]">Your team, here</CardTitle>
              <p className="text-[1rem] leading-relaxed text-foreground-secondary">
                AHDO&rsquo;s full advisory board, team and national-chapter leads will be
                featured here, with photos and short bios.
              </p>
            </div>
            <ButtonLink href="/contact" variant="ghost" arrow className="self-start">
              Add your people
            </ButtonLink>
          </Card>
        </div>

        {/* Partners */}
        {PARTNERS.length > 0 && (
          <>
            <p className="eyebrow mt-12 text-muted-foreground">In partnership with</p>
            <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PARTNERS.map((p) => (
                <ProfileCard key={p.slug} person={p} />
              ))}
            </div>
          </>
        )}
      </Section>

      {/* ===== What we do (four core functions) ===== */}
      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="Four ways we work"
          lede="AHDO works across four core functions, from projects on the ground to advocacy at the regional level."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {CORE_FUNCTIONS.map((fn) => (
            <Card key={fn.number} href={fn.href} className="gap-4">
              <span className="font-mono text-[0.875rem] font-medium text-accent-text">
                {fn.number}
              </span>
              <CardTitle>{fn.title}</CardTitle>
              <p className="text-[1rem] leading-relaxed text-foreground-secondary">
                {fn.blurb}
              </p>
              <ul className="mt-1 flex flex-col gap-2">
                {fn.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-baseline gap-3 text-[0.9375rem] leading-relaxed text-foreground-secondary"
                  >
                    <span aria-hidden="true" className="font-mono text-[0.875rem] text-accent-text">
                      —
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* ===== Advocacy photo band ===== */}
      <Section tone="card" className="border-y border-border">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Photo src={MEDIA.advocacy.src} alt={MEDIA.advocacy.alt} ratio="16 / 10" />
          <div className="flex flex-col gap-5">
            <Eyebrow>Trust and standing</Eyebrow>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.375rem)] font-medium leading-[1.14] tracking-[-0.012em] text-foreground">
              An ASEAN entity in the process of accreditation
            </h2>
            <p className="measure text-[1.125rem] leading-relaxed text-foreground-secondary">
              AHDO is an independent, non-profit civil society organisation and an
              ASEAN entity in the process of accreditation. Accreditation formalises
              AHDO&rsquo;s standing to work alongside ASEAN institutions, governments
              and civil society on human development across the region.
            </p>
            <div>
              <AccreditationPill />
            </div>
          </div>
        </div>
      </Section>

      {/* ===== The Index teaser (dark Ink band) ===== */}
      <section className="dark relative overflow-hidden bg-background text-foreground">
        <div aria-hidden="true" className="loom-grid absolute inset-0" />
        <div aria-hidden="true" className="weave-band absolute inset-x-0 top-0 h-[3px]" />
        <Container className="relative grid gap-10 py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:py-28">
          <div className="flex flex-col gap-6">
            <Eyebrow>The Index · Flagship</Eyebrow>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.018em]">
              {AHDI.name}
            </h2>
            <p className="measure text-[1.125rem] leading-relaxed text-foreground-secondary">
              {AHDI.intro}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <Badge tone="turmeric" dot>
                {AHDI.status}
              </Badge>
              <ButtonLink href="/index-ahdi" variant="accent" arrow>
                Explore the Index
              </ButtonLink>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 font-mono text-[0.875rem] text-muted-foreground lg:justify-end">
            {AHDI.coverage.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="font-data text-[1.75rem] leading-none text-foreground">
                  {item.value}
                </span>
                <span className="uppercase tracking-[0.06em]">{item.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== Membership & contact CTA ===== */}
      <Section tone="card" className="border-y border-border">
        <div className="flex flex-col items-start gap-6">
          <SectionHeading
            eyebrow="Get involved"
            title="Help build human development across ASEAN"
            lede="Become a member to join the regional community, or get in touch about partnership, certification and accreditation."
          />
          <div className="flex flex-wrap items-center gap-3">
            <ButtonLink href="/membership" variant="primary" arrow>
              Join AHDO
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact us
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
