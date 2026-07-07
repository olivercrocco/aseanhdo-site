import Image from "next/image";
import { Card, CardMeta, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/cn";
import type { Publication } from "@/content/publications";

/** Mono meta line: type, plus year and/or publisher when present. */
function metaLine(pub: Publication) {
  return [pub.type, pub.year?.toString(), pub.publisher].filter(Boolean).join(" · ");
}

/**
 * Publication card. When the publication has a `cover`, the card leads with the
 * document's cover image (full-bleed, book-shaped) in place of the coloured
 * content-type band; otherwise it falls back to the plain research card so
 * publications without a cover still render cleanly.
 */
export function PublicationCard({
  pub,
  emphasis = false,
}: {
  pub: Publication;
  /** Larger description text, used in the Featured grid. */
  emphasis?: boolean;
}) {
  return (
    <Card
      href={pub.url}
      accent={pub.cover ? "none" : "research"}
      className={cn("gap-4", pub.cover && "overflow-hidden")}
    >
      {pub.cover && (
        <div
          className="relative -mx-6 -mt-6 mb-2 border-b border-border bg-card-sunken sm:-mx-7 sm:-mt-7"
          style={{ aspectRatio: "3 / 4" }}
        >
          <Image
            src={pub.cover}
            alt={`Cover of ${pub.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 360px"
            className="object-cover"
          />
        </div>
      )}
      <CardMeta>{metaLine(pub)}</CardMeta>
      <CardTitle>{pub.title}</CardTitle>
      <p
        className={cn(
          "leading-relaxed text-foreground-secondary",
          emphasis ? "text-[1.125rem]" : "text-[1rem]",
        )}
      >
        {pub.description}
      </p>
      <p className="mt-auto pt-2 font-mono text-[0.8125rem] text-muted-foreground">
        {pub.authors}
      </p>
    </Card>
  );
}
