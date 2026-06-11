import { cn } from "@/lib/cn";

export type BadgeTone = "neutral" | "jade" | "turmeric" | "terracotta";

const tones: Record<BadgeTone, string> = {
  neutral: "bg-primary-tint text-primary-tint-foreground",
  jade: "bg-secondary-tint text-secondary-tint-foreground",
  turmeric: "bg-accent-tint text-accent-tint-foreground",
  terracotta: "bg-destructive/10 text-destructive",
};

export function Badge({
  tone = "neutral",
  dot = false,
  className,
  children,
}: {
  tone?: BadgeTone;
  dot?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const dotColor: Record<BadgeTone, string> = {
    neutral: "bg-primary",
    jade: "bg-secondary",
    turmeric: "bg-accent",
    terracotta: "bg-destructive",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm px-2.5 py-1 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em]",
        tones[tone],
        className,
      )}
    >
      {dot && (
        <span
          aria-hidden="true"
          className={cn("h-1.5 w-1.5 rounded-full", dotColor[tone])}
        />
      )}
      {children}
    </span>
  );
}

/** Recurring trust marker used across the site. */
export function AccreditationPill({ className }: { className?: string }) {
  return (
    <Badge tone="neutral" dot className={className}>
      Pursuing ASEAN entity accreditation
    </Badge>
  );
}
