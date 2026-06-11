// Minimal class-name combiner (no external deps).
// Filters falsy values and joins the rest with spaces.
export type ClassValue = string | number | false | null | undefined;

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
