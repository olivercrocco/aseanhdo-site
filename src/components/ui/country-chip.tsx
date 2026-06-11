import { cn } from "@/lib/cn";
import type { Country } from "@/content/countries";

export function CountryChip({
  country,
  selected = false,
  showName = true,
  className,
}: {
  country: Pick<Country, "iso3" | "name" | "subregion">;
  selected?: boolean;
  showName?: boolean;
  className?: string;
}) {
  const keyColor =
    country.subregion === "Mainland" ? "bg-cat-1" : "bg-cat-3";
  return (
    <span
      className={cn(
        "inline-flex min-h-[36px] items-center gap-2 rounded-[8px] border px-2.5 py-1.5 text-sm transition-colors",
        selected
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-foreground hover:border-primary",
        className,
      )}
    >
      <span aria-hidden="true" className={cn("h-2 w-2 rounded-full", keyColor)} />
      <span className="font-mono text-[0.8125rem] font-medium tracking-wide">
        {country.iso3}
      </span>
      {showName && <span className="font-medium">{country.name}</span>}
    </span>
  );
}
