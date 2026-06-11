import { Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHeader } from "@/components/page-header";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge, AccreditationPill } from "@/components/ui/badge";

import { ACCREDITATIONS } from "@/content/programs";

export const metadata = { title: "Accreditation for organisations" };

const steps: { number: string; title: string; text: string }[] = [
  {
    number: "01",
    title: "Express interest",
    text: "Tell us about your organisation, its sector and where human development sits in your strategy. We confirm which accreditation, AHEAD or HEADSTART, fits your stage.",
  },
  {
    number: "02",
    title: "Assessment against the framework",
    text: "Your human development practices are reviewed against the AHDO framework, looking at how people, capability and wellbeing are supported across your enterprise.",
  },
  {
    number: "03",
    title: "Review and recognition",
    text: "A review panel considers the assessment and, where standards are met, confers recognition that signals your commitment to people across the region.",
  },
  {
    number: "04",
    title: "Ongoing development",
    text: "Accreditation is a starting point. We work with recognised organisations to keep building their practice and to share what they learn with the wider network.",
  },
];

const faqs: { question: string; answer: string }[] = [
  {
    question: "Who is accreditation for?",
    answer:
      "Any organisation that takes human development seriously, across business, government, social enterprise and higher education. Accreditation suits enterprises that want their investment in people recognised regionally and benchmarked against a shared framework.",
  },
  {
    question: "How do AHEAD and HEADSTART differ?",
    answer:
      "AHEAD is the full accreditation for established organisations with human development initiatives across their enterprise and stakeholder networks. HEADSTART is an adapted version of AHEAD for early-stage companies, SMEs and subsidiaries that are still building their foundational human development frameworks.",
  },
  {
    question: "What do you get from it?",
    answer:
      "Regional recognition of your human development practice, a structured benchmark against the AHDO framework, and an ongoing relationship that supports you in developing your people further. Detailed criteria and fees are confirmed on enquiry.",
  },
];

export default function AccreditationsPage() {
  return (
    <>
      {/* ===== Page header ===== */}
      <PageHeader
        eyebrow="Recognition for organisations"
        title="Accreditation for organisations"
        lede="AHDO recognises organisations that put people at the centre of how they work. Our accreditation framework offers a regional benchmark for human development, from established enterprises to early-stage companies finding their footing."
      >
        <AccreditationPill />
      </PageHeader>

      {/* ===== The two programmes ===== */}
      <Section tone="card" className="border-y border-border">
        <SectionHeading
          eyebrow="The programmes"
          title="Two routes to recognition"
          lede="One framework, adapted to where your organisation stands. AHEAD recognises established human development practice, while HEADSTART supports organisations still laying the foundations."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {ACCREDITATIONS.map((acc) => (
            <Card key={acc.slug} accent="programmes" className="gap-4">
              <Badge tone="jade">{acc.name}</Badge>
              <CardTitle>{acc.fullName}</CardTitle>
              <p className="font-mono text-[0.875rem] text-muted-foreground">
                For: {acc.audience}
              </p>
              <p className="text-[1rem] leading-relaxed text-foreground-secondary">
                {acc.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ===== How it works (stepped explainer) ===== */}
      <Section tone="sunken" className="border-y border-border">
        <SectionHeading
          eyebrow="The process"
          title="How accreditation works"
          lede="A clear, supported path from first enquiry through to recognition and beyond. Each step builds on the last."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <Card key={step.number} className="gap-4">
              <span
                aria-hidden="true"
                className="font-mono text-[2rem] leading-none text-accent-text"
              >
                {step.number}
              </span>
              <CardTitle className="text-[1.15rem]">{step.title}</CardTitle>
              <p className="text-[1rem] leading-relaxed text-foreground-secondary">
                {step.text}
              </p>
            </Card>
          ))}
        </div>
        <p className="mt-8 measure font-mono text-[0.875rem] leading-relaxed text-muted-foreground">
          Detailed criteria and fees are confirmed on enquiry, tailored to your
          organisation&rsquo;s sector and stage.
        </p>
      </Section>

      {/* ===== FAQ ===== */}
      <Section>
        <SectionHeading
          eyebrow="Common questions"
          title="What organisations ask"
          lede="A few of the questions we hear most often from organisations considering accreditation."
        />
        <div className="mt-10 flex flex-col gap-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="flex flex-col gap-3 border-t border-border pt-6 lg:flex-row lg:gap-10"
            >
              <h3 className="font-display text-[1.3rem] leading-snug text-foreground lg:w-1/3 lg:shrink-0">
                {faq.question}
              </h3>
              <p className="measure text-[1.125rem] leading-relaxed text-foreground-secondary">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== Enquiry CTA (dark Ink band) ===== */}
      <section className="dark relative overflow-hidden bg-background text-foreground">
        <div aria-hidden="true" className="loom-grid absolute inset-0" />
        <div
          aria-hidden="true"
          className="weave-band absolute inset-x-0 top-0 h-[3px]"
        />
        <div className="container-page relative grid gap-10 py-20 lg:grid-cols-[1fr_1fr] lg:items-start lg:py-28">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Get started"
              title="Enquire about accreditation"
              lede="Tell us a little about your organisation and we'll be in touch about whether AHEAD or HEADSTART is the right fit, along with the criteria and fees for your context."
            />
            <div className="mt-1 flex flex-wrap items-center gap-3">
              <AccreditationPill />
              <ButtonLink href="/contact" variant="accent" arrow>
                Contact AHDO
              </ButtonLink>
            </div>
          </div>

          <form className="flex flex-col gap-5 rounded-lg border border-border bg-card p-6 sm:p-7">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="org-name"
                className="eyebrow text-muted-foreground"
              >
                Organisation name
              </label>
              <input
                id="org-name"
                name="organisation"
                type="text"
                autoComplete="organization"
                placeholder="Your organisation"
                className="min-h-[44px] w-full rounded-[8px] border border-border bg-card-sunken px-3.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-email"
                className="eyebrow text-muted-foreground"
              >
                Contact email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@organisation.org"
                className="min-h-[44px] w-full rounded-[8px] border border-border bg-card-sunken px-3.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="programme"
                className="eyebrow text-muted-foreground"
              >
                Programme of interest
              </label>
              <select
                id="programme"
                name="programme"
                defaultValue=""
                className="min-h-[44px] w-full rounded-[8px] border border-border bg-card-sunken px-3.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <option value="" disabled>
                  Select a programme
                </option>
                {ACCREDITATIONS.map((acc) => (
                  <option key={acc.slug} value={acc.slug}>
                    {acc.name} — {acc.fullName}
                  </option>
                ))}
                <option value="unsure">Not sure yet</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="eyebrow text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your organisation and where human development sits in your strategy."
                className="min-h-[44px] w-full rounded-[8px] border border-border bg-card-sunken px-3.5 py-2.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              />
            </div>

            <button
              type="submit"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[8px] bg-primary px-5 text-[1rem] font-semibold text-primary-foreground transition-colors duration-150 hover:bg-primary-hover active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Submit enquiry
            </button>

            <p className="font-mono text-[0.8125rem] leading-relaxed text-muted-foreground">
              Form delivery activates once the back end is connected.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
