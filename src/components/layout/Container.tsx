import { cn } from "@/lib/utils";
import { ElementType, HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export function Container({ as, className, children, ...props }: ContainerProps) {
  const Tag = as ?? "div";
  return (
    <Tag
      className={cn("mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
