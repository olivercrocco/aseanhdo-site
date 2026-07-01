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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/ahdo-logo.png"
        alt="AHDO — ASEAN Human Development Organisation"
        className="h-10 w-auto"
      />
    </Link>
  );
}
