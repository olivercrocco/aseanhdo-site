import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("container-page", className)}>{children}</div>;
}

type Tone = "paper" | "card" | "sunken" | "ink";

const toneClass: Record<Tone, string> = {
  paper: "",
  card: "bg-card",
  sunken: "bg-card-sunken",
  // Ink band forces the dark token set even in light theme.
  ink: "dark bg-background text-foreground",
};

export function Section({
  id,
  tone = "paper",
  className,
  innerClassName,
  size = "default",
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  innerClassName?: string;
  size?: "default" | "sm";
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        size === "sm" ? "section-y-sm" : "section-y",
        toneClass[tone],
        className,
      )}
    >
      <Container className={innerClassName}>{children}</Container>
    </section>
  );
}
