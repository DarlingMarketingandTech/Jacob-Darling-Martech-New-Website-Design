import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type BadgeVariant = "neutral" | "crimson" | "outline";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  neutral: "bg-[var(--charcoal)] text-[var(--cream)]",
  crimson: "bg-[var(--crimson)] text-white",
  outline: "bg-transparent text-[var(--charcoal)] border border-[var(--line-strong)]",
};

export function Badge({ variant = "neutral", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block whitespace-nowrap rounded-[var(--radius-pill)] px-3.5 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase",
        variantStyles[variant],
        className
      )}
      style={{ fontFamily: "var(--font-sans)" }}
      {...props}
    >
      {children}
    </span>
  );
}
