import { ASEAN_COUNTRIES } from "@/content/countries";
import { Badge } from "@/components/ui/badge";

/**
 * The live AHDI hero module — a designed, honest preview. Scores are not yet
 * published, so each country row shows an indeterminate "awaiting data" track
 * rather than a value. Becomes the real ranked/profile module when the index ships.
 */
export function IndexPreview({ className }: { className?: string }) {
  return (
    <div
      className={
        "rounded-lg border border-border bg-card p-5 shadow-[var(--shadow-hover)] dark:shadow-[var(--shadow-card-dark)] " +
        (className ?? "")
      }
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="eyebrow text-accent-text">AHDI · Preview</p>
        <Badge tone="turmeric" dot>
          Coming 2026
        </Badge>
      </div>

      <ul className="flex flex-col gap-2" aria-label="ASEAN member states in the index">
        {ASEAN_COUNTRIES.map((c, i) => (
          <li key={c.iso3} className="flex items-center gap-3">
            <span className="w-9 shrink-0 font-mono text-[0.8125rem] font-medium text-foreground">
              {c.iso3}
            </span>
            <span className="relative h-2 flex-1 overflow-hidden rounded-full bg-card-sunken">
              {/* Indeterminate skeleton — scores publish with the index, not before. */}
              <span
                className="ahdi-shimmer absolute inset-0 rounded-full opacity-70"
                style={{ animationDelay: `${i * 110}ms` }}
              />
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-4 border-t border-border pt-3 font-mono text-[0.8125rem] tracking-wide text-muted-foreground">
        11 STATES · 19 CLUSTERS · 1990–2023
      </p>
    </div>
  );
}
