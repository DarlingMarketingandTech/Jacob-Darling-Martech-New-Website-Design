import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface RuleProps extends HTMLAttributes<HTMLDivElement> {
  light?: boolean;
}

export function Rule({ className, light, ...props }: RuleProps) {
  const color = light ? "rgba(245,243,238,0.2)" : "var(--crimson)";
  return (
    <div
      className={cn("flex items-center", className)}
      role="separator"
      aria-hidden="true"
      {...props}
    >
      <div
        className="h-[1.5px] flex-1"
        style={{ background: `linear-gradient(90deg, transparent, ${color})` }}
      />
      <div
        className="mx-0 h-[7px] w-[7px] rounded-full"
        style={{ background: color }}
      />
      <div
        className="h-[1.5px] flex-1"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      />
    </div>
  );
}
