import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";
import { HTMLAttributes } from "react";

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  eyebrowColor?: string;
  headline: string;
  lead?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeader({
  eyebrow,
  eyebrowColor,
  headline,
  lead,
  align = "left",
  dark,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn("max-w-[760px]", align === "center" && "mx-auto text-center", className)}
      {...props}
    >
      {eyebrow && (
        <Eyebrow color={eyebrowColor} className={cn(align === "center" && "justify-center")}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className="dm-h2 mt-4"
        style={{ color: dark ? "var(--fg-on-dark-1)" : "var(--charcoal)" }}
        dangerouslySetInnerHTML={{ __html: headline }}
      />
      {lead && (
        <p
          className="dm-lead mt-4 max-w-[58ch]"
          style={{
            color: dark ? "var(--fg-on-dark-2)" : "var(--fg2)",
            ...(align === "center" ? { marginLeft: "auto", marginRight: "auto" } : {}),
          }}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
