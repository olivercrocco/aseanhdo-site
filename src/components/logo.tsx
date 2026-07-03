import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  withName: _withName = true,
}: {
  className?: string;
  withName?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="ASEAN Human Development Organisation — home"
      className={cn("inline-flex items-center", className)}
    >
      {/* Official AHDO logo (raster, white background), seated in a white chip
          so it reads cleanly in both light and dark themes. */}
      <span className="inline-flex items-center rounded-md bg-white p-1.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/ahdo-logo.jpg"
          alt="AHDO — ASEAN Human Development Organisation"
          className="h-8 w-auto"
        />
      </span>
    </Link>
  );
}
