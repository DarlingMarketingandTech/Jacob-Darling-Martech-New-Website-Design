import Link from "next/link";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "secondary-light" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends HTMLAttributes<HTMLElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  arrow?: boolean;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2.5 text-sm gap-2",
  md: "px-6 py-3.5 text-[15px] gap-2.5",
  lg: "px-8 py-4 text-base gap-3",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--crimson)] text-white hover:bg-[var(--burgundy)] rounded-[var(--radius-md)]",
  secondary:
    "bg-transparent text-[var(--charcoal)] border-[1.5px] border-[var(--charcoal)] hover:bg-[var(--charcoal)] hover:text-white rounded-[var(--radius-md)]",
  "secondary-light":
    "bg-transparent text-[var(--cream)] border-[1.5px] border-[rgba(245,243,238,0.45)] hover:bg-[rgba(245,243,238,0.1)] hover:border-[var(--cream)] rounded-[var(--radius-md)]",
  ghost:
    "bg-transparent text-[var(--crimson)] px-0 py-1.5 hover:gap-4",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  arrow,
  type = "button",
  disabled,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center font-bold leading-none whitespace-nowrap transition-all duration-[140ms] active:scale-[0.98] focus-visible:outline-[2px] focus-visible:outline-[var(--crimson)] focus-visible:outline-offset-2 cursor-pointer";

  const classes = cn(
    base,
    variant !== "ghost" ? sizeClasses[size] : "gap-2 text-[15px]",
    variantClasses[variant],
    disabled && "opacity-50 pointer-events-none",
    className
  );

  const content = (
    <>
      {children}
      {arrow && (
        <span
          className="inline-block transition-transform duration-[140ms] group-hover:translate-x-1"
          aria-hidden="true"
        >
          &rarr;
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(classes, "group")} {...(props as HTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={cn(classes, "group")} {...(props as HTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
