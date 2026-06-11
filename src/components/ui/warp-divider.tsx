import { cn } from "@/lib/cn";

/** Stylised weave-selvedge section separator. Decorative only. */
export function WarpDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("h-px w-full bg-border", className)}
      style={{
        backgroundImage:
          "repeating-linear-gradient(90deg, var(--primary) 0, var(--primary) 10px, transparent 10px, transparent 16px, var(--accent) 16px, var(--accent) 22px, transparent 22px, transparent 32px)",
      }}
    />
  );
}
