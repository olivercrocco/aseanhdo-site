import Image from "next/image";
import { cn } from "@/lib/cn";

/** Remote image in a fixed-ratio, object-cover frame. */
export function Photo({
  src,
  alt,
  ratio = "16 / 10",
  rounded = "rounded-lg",
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 640px",
}: {
  src: string;
  alt: string;
  ratio?: string;
  rounded?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={cn("relative overflow-hidden border border-border bg-card-sunken", rounded, className)}
      style={{ aspectRatio: ratio }}
    >
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}
