import { cn } from "@/lib/cn";

export function StatCard({
  label,
  value,
  suffix,
  note,
  className,
}: {
  label: string;
  value: string;
  suffix?: string;
  note?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-md border border-border bg-card-sunken p-5",
        className,
      )}
    >
      <p className="eyebrow text-muted-foreground">{label}</p>
      <p className="font-mono text-[clamp(2rem,4vw,3rem)] font-medium leading-none tabular-nums text-foreground">
        {value}
        {suffix && (
          <span className="ml-1 align-baseline text-[0.5em] text-accent-text">
            {suffix}
          </span>
        )}
      </p>
      {note && (
        <p className="text-[0.9375rem] leading-snug text-muted-foreground">{note}</p>
      )}
    </div>
  );
}
