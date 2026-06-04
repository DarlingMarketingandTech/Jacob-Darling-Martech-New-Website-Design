import { cn } from "@/lib/utils";
import { ElementType, HTMLAttributes } from "react";

interface EyebrowProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  color?: string;
}

export function Eyebrow({ as, className, color, children, style, ...props }: EyebrowProps) {
  const Tag = as ?? "div";
  return (
    <Tag
      className={cn(
        "inline-flex items-center gap-2.5 text-[0.75rem] font-bold tracking-[0.16em] uppercase",
        className
      )}
      style={{ color: color ?? "var(--crimson)", fontFamily: "var(--font-sans)", ...style }}
      {...props}
    >
      <span
        className="inline-block h-[1.5px] w-[22px]"
        style={{ background: color ?? "var(--crimson)" }}
        aria-hidden="true"
      />
      {children}
    </Tag>
  );
}
