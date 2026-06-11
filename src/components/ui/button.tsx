import Link from "next/link";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "accent";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[8px] font-sans font-semibold transition-colors duration-150 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-[40px] px-4 text-[0.9375rem]",
  md: "min-h-[44px] px-5 text-[1rem]",
  lg: "min-h-[52px] px-6 text-[1rem]",
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
  secondary:
    "border border-primary bg-transparent text-primary hover:bg-primary-tint",
  ghost: "bg-transparent text-primary hover:underline underline-offset-4",
  // For use on indigo (Ink/CTA) grounds: turmeric fill pops against the brand field.
  accent: "bg-accent text-accent-foreground hover:brightness-95",
};

export function buttonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
): string {
  return cn(base, sizes[size], variants[variant], className);
}

const Arrow = () => (
  <span aria-hidden="true" className="font-mono">
    →
  </span>
);

export function Button({
  variant,
  size,
  arrow,
  className,
  children,
  ...props
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={buttonClasses(variant, size, className)} {...props}>
      {children}
      {arrow && <Arrow />}
    </button>
  );
}

export function ButtonLink({
  href,
  variant,
  size,
  arrow,
  className,
  children,
  ...props
}: {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const isExternal = /^https?:\/\//.test(href);
  const classes = buttonClasses(variant, size, className);

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
        {arrow && <Arrow />}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}
