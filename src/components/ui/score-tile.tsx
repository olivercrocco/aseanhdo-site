import { cn } from "@/lib/cn";

/**
 * ScoreTile — the atomic AHDI data unit. Until the index publishes, tiles render
 * in a neutral "awaiting data" state (no scores implied). When the dashboard
 * ships, the same tile gains a sequential-ramp fill and composite score.
 */
export function ScoreTile({
  iso,
  name,
  className,
}: {
  iso: string;
  name?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex min-h-[64px] flex-col justify-between rounded-sm border border-border bg-card-sunken p-3",
        className,
      )}
      title={name}
    >
      <span className="font-mono text-[0.8125rem] font-medium tracking-wide text-foreground">
        {iso}
      </span>
      <span aria-hidden="true" className="font-mono text-[0.875rem] text-muted-foreground">
        —
      </span>
    </div>
  );
}
