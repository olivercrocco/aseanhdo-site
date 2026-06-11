import Image from "next/image";
import { cn } from "@/lib/cn";

/** Headshot if available, otherwise a branded monogram. */
export function Avatar({
  initials,
  name,
  photo,
  size = 56,
  className,
}: {
  initials: string;
  name?: string;
  photo?: string;
  size?: number;
  className?: string;
}) {
  if (photo) {
    return (
      <span
        className={cn("relative inline-block shrink-0 overflow-hidden rounded-full border border-border", className)}
        style={{ width: size, height: size }}
      >
        <Image src={photo} alt={name ?? ""} fill sizes={`${size}px`} className="object-cover" />
      </span>
    );
  }
  return (
    <span
      aria-hidden={name ? undefined : true}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full bg-primary-tint font-mono font-medium text-primary-tint-foreground",
        className,
      )}
      style={{ width: size, height: size, fontSize: Math.round(size * 0.34) }}
    >
      {initials}
    </span>
  );
}
