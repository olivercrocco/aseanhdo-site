import Link from "next/link";
import { cn } from "@/lib/cn";

export type CardAccent = "research" | "programmes" | "index" | "none";

const topBand: Record<CardAccent, string> = {
  research: "before:bg-destructive",
  programmes: "before:bg-secondary",
  index: "before:bg-accent",
  none: "",
};

/**
 * Weave card. Optional 3px content-type top band (always pair with a text tag
 * elsewhere so colour is never the sole carrier of meaning).
 */
export function Card({
  accent = "none",
  href,
  interactive,
  className,
  children,
}: {
  accent?: CardAccent;
  href?: string;
  interactive?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const isInteractive = interactive ?? Boolean(href);
  const classes = cn(
    "relative flex flex-col rounded-md border border-border bg-card p-6 sm:p-7",
    accent !== "none" &&
      "before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:rounded-t-md before:content-['']",
    topBand[accent],
    isInteractive &&
      "transition-all duration-150 hover:-translate-y-0.5 hover:border-primary hover:shadow-[var(--shadow-hover)] dark:hover:shadow-[var(--shadow-hover-dark)]",
    className,
  );

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}

export function CardMeta({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[0.8125rem] uppercase tracking-[0.06em] text-muted-foreground">
      {children}
    </p>
  );
}

export function CardTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={cn("font-display text-[1.3rem] leading-snug text-foreground", className)}>
      {children}
    </h3>
  );
}
