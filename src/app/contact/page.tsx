import { Section } from "@/components/ui/container";
import { SectionHeading, Eyebrow } from "@/components/ui/section-heading";
import { PageHeader } from "@/components/page-header";
import { Card, CardMeta, CardTitle } from "@/components/ui/card";
import { AccreditationPill } from "@/components/ui/badge";

import { SITE, SOCIAL, CONTACT } from "@/content/site";

export const metadata = { title: "Contact us" };

// Maps the legacy enquiry categories to the page that serves each one.
const channels: {
  category: string;
  title: string;
  href: string;
  linkLabel: string;
  accent: "research" | "programmes" | "index" | "none";
  blurb: string;
}[] = [
  {
    category: "Membership",
    title: "Become a member",
    href: "/membership",
    linkLabel: "Explore membership",
    accent: "programmes",
    blurb:
      "Join the regional community of human development practitioners, organisations and partners.",
  },
  {
    category: "Certification (Individual)",
    title: "Certify your practice",
    href: "/courses",
    linkLabel: "View courses",
    accent: "index",
    blurb:
      "Build the field through professional training and certification across Southeast Asia.",
  },
  {
    category: "Accreditation (Organisations)",
    title: "Accredit your organisation",
    href: "/accreditations",
    linkLabel: "View accreditations",
    accent: "research",
    blurb:
      "Recognition for organisations that prioritise human development, through AHEAD and HEADSTART.",
  },
];

const social = [
  ["LinkedIn", SOCIAL.linkedin],
  ["Facebook", SOCIAL.facebook],
] as const;

export default function ContactPage() {
  return (
    <>
      {/* ===== Page header ===== */}
      <PageHeader
        eyebrow="Get in touch"
        title="Contact us"
        lede="Whether you are a member, an organisation or a prospective partner, we would be glad to hear from you. Tell us a little about your enquiry and we will point it to the right part of AHDO."
      >
        <AccreditationPill />
      </PageHeader>

      {/* ===== Form + colophon ===== */}
      <Section tone="card" className="border-y border-border">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-start lg:gap-16">
          {/* --- Contact form (static, accessible, no client JS) --- */}
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Send a message"
              title="Tell us about your enquiry"
              lede="Share a few details and the relevant team will follow up by email."
            />

            <form
              action={`mailto:${CONTACT.email}?subject=AHDO website enquiry`}
              method="post"
              encType="text/plain"
              className="flex flex-col gap-5 rounded-lg border border-border bg-card-sunken p-6 sm:p-7"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="eyebrow text-muted-foreground">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  className="min-h-[44px] w-full rounded-[8px] border border-border bg-card-sunken px-3.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="eyebrow text-muted-foreground">
                  Email address
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
                <label htmlFor="contact-category" className="eyebrow text-muted-foreground">
                  Category
                </label>
                <select
                  id="contact-category"
                  name="category"
                  defaultValue=""
                  className="min-h-[44px] w-full rounded-[8px] border border-border bg-card-sunken px-3.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {CONTACT.formCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="eyebrow text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  placeholder="How can we help?"
                  className="min-h-[44px] w-full rounded-[8px] border border-border bg-card-sunken px-3.5 py-3 text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                />
              </div>

              <button
                type="submit"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[8px] bg-primary px-5 text-[1rem] font-semibold text-primary-foreground transition-colors duration-150 hover:bg-primary-hover active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Send message
              </button>

              <p className="font-mono text-[0.8125rem] leading-relaxed text-muted-foreground">
                Sending opens your email app to deliver your message to AHDO.
              </p>
            </form>
          </div>

          {/* --- Colophon panel --- */}
          <aside className="flex flex-col gap-6 rounded-lg border border-border bg-card p-6 sm:p-7">
            <Eyebrow>AHDO at a glance</Eyebrow>
            <CardTitle>Where to find us</CardTitle>

            <dl className="flex flex-col divide-y divide-border">
              <div className="flex flex-col gap-1 pb-4">
                <dt className="font-mono text-[0.8125rem] uppercase tracking-[0.06em] text-muted-foreground">
                  Base
                </dt>
                <dd className="text-[1rem] leading-relaxed text-foreground">
                  {SITE.base}
                </dd>
              </div>

              <div className="flex flex-col gap-1 py-4">
                <dt className="font-mono text-[0.8125rem] uppercase tracking-[0.06em] text-muted-foreground">
                  Email
                </dt>
                <dd className="text-[1rem] leading-relaxed">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    {CONTACT.email}
                  </a>
                </dd>
              </div>

              <div className="flex flex-col gap-1 py-4">
                <dt className="font-mono text-[0.8125rem] uppercase tracking-[0.06em] text-muted-foreground">
                  Founded
                </dt>
                <dd className="text-[1rem] leading-relaxed text-foreground">
                  {SITE.founded} · {SITE.base}
                </dd>
              </div>

              <div className="flex flex-col gap-2 pt-4">
                <dt className="font-mono text-[0.8125rem] uppercase tracking-[0.06em] text-muted-foreground">
                  Connect
                </dt>
                <dd className="flex flex-wrap items-center gap-4">
                  {social.map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[1rem] text-foreground-secondary underline-offset-4 hover:text-foreground hover:underline"
                    >
                      {label}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>

            <p className="font-mono text-[0.8125rem] leading-relaxed text-muted-foreground">
              Full postal address is confirmed on enquiry while AHDO completes
              ASEAN entity accreditation.
            </p>

            <div>
              <AccreditationPill />
            </div>
          </aside>
        </div>
      </Section>

      {/* ===== Choose the right channel ===== */}
      <Section tone="sunken" className="border-y border-border">
        <SectionHeading
          eyebrow="Routing your enquiry"
          title="Choose the right channel"
          lede="Some enquiries already have a home. If yours fits one of these, the linked page may answer it faster, or simply pick the matching category in the form above."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {channels.map((channel) => (
            <Card
              key={channel.category}
              href={channel.href}
              accent={channel.accent}
              className="gap-4"
            >
              <CardMeta>{channel.category}</CardMeta>
              <CardTitle>{channel.title}</CardTitle>
              <p className="text-[1rem] leading-relaxed text-foreground-secondary">
                {channel.blurb}
              </p>
              <span
                aria-hidden="true"
                className="mt-1 font-mono text-[0.875rem] text-accent-text"
              >
                {channel.linkLabel} →
              </span>
            </Card>
          ))}
        </div>
        <p className="mt-8 font-mono text-[0.8125rem] leading-relaxed text-muted-foreground">
          Partnership, press and all other enquiries are welcome through the form
          above. Physical address details are confirmed on enquiry.
        </p>
      </Section>
    </>
  );
}