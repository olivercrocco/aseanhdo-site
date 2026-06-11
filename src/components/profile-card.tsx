import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";
import type { Person } from "@/content/people";

export function ProfileCard({ person, className }: { person: Person; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-4 rounded-md border border-border bg-card p-6", className)}>
      <div className="flex items-center gap-4">
        <Avatar initials={person.initials} name={person.name} photo={person.photo} size={56} />
        <div className="flex flex-col">
          <p className="font-display text-[1.15rem] leading-tight text-foreground">{person.name}</p>
          <p className="font-mono text-[0.875rem] text-muted-foreground">
            {person.role}
            {person.org ? ` · ${person.org}` : ""}
          </p>
        </div>
      </div>
      <p className="text-[1rem] leading-relaxed text-foreground-secondary">{person.bio}</p>
      {person.credentials && person.credentials.length > 0 && (
        <ul className="mt-auto flex flex-wrap gap-2 pt-1">
          {person.credentials.map((c) => (
            <li key={c}>
              <Badge tone="neutral">{c}</Badge>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Larger founder feature: avatar + bio beside an image is composed at the page level. */
export function FounderIntro({ person }: { person: Person }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-4">
        <Avatar initials={person.initials} name={person.name} photo={person.photo} size={64} />
        <div className="flex flex-col">
          <p className="font-display text-[1.5rem] leading-tight text-foreground">{person.name}</p>
          <p className="font-mono text-[0.9375rem] text-accent-text">{person.role}</p>
        </div>
      </div>
      <p className="text-[1.125rem] leading-relaxed text-foreground-secondary">{person.bio}</p>
      {person.credentials && (
        <ul className="flex flex-wrap gap-2">
          {person.credentials.map((c) => (
            <li key={c}>
              <Badge tone="neutral">{c}</Badge>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
