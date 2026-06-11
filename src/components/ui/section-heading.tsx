import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("eyebrow text-accent-text", className)}>{children}</p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  as: As = "h2",
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <As
        className={cn(
          As === "h1"
            ? "text-[clamp(2.25rem,4vw,3rem)] leading-[1.08] tracking-[-0.018em]"
            : "text-[clamp(1.75rem,3vw,2.375rem)] leading-[1.14] tracking-[-0.012em]",
          "font-display font-medium text-foreground",
          titleClassName,
        )}
      >
        {title}
      </As>
      {lede && (
        <p
          className={cn(
            "measure text-[1.125rem] leading-relaxed text-foreground-secondary",
            align === "center" && "mx-auto",
          )}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
