import Link from "next/link";
import { cn } from "@/lib/cn";

/** AHDO wordmark with a woven seed mark (indigo warp/weft + turmeric centre). */
export function Logo({
  className,
  withName = true,
}: {
  className?: string;
  withName?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="ASEAN Human Development Organisation — home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 28 28"
        className="h-7 w-7 shrink-0"
        fill="none"
      >
        <rect
          x="1"
          y="1"
          width="26"
          height="26"
          rx="6"
          className="fill-primary"
        />
        {/* warp / weft threads */}
        <path
          d="M8 1V27M14 1V27M20 1V27M1 8H27M1 14H27M1 20H27"
          stroke="var(--primary-foreground)"
          strokeOpacity="0.28"
          strokeWidth="1"
        />
        {/* turmeric seed */}
        <circle cx="14" cy="14" r="3.4" className="fill-accent" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.15rem] font-semibold tracking-tight text-foreground">
          AHDO
        </span>
        {withName && (
          <span className="mt-0.5 hidden font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-muted-foreground sm:block">
            ASEAN Human Development
          </span>
        )}
      </span>
    </Link>
  );
}
