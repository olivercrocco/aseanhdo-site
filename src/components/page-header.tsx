import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";

/** Consistent interior-page header band (eyebrow → serif h1 → lede). */
export function PageHeader({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div aria-hidden="true" className="loom-grid absolute inset-0" />
      <Container className="relative py-14 lg:py-20">
        <div className="flex max-w-3xl flex-col gap-5">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="font-display text-[clamp(2.25rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.018em] text-foreground">
            {title}
          </h1>
          {lede && (
            <p className="measure text-[1.25rem] leading-relaxed text-foreground-secondary">
              {lede}
            </p>
          )}
          {children && <div className="mt-2 flex flex-wrap items-center gap-3">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
