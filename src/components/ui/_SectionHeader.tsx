import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  id?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
  children?: React.ReactNode;
}

export default function SectionHeader({
  id,
  title,
  subtitle,
  alignment = "center",
  theme = "light",
  className,
  children,
}: SectionHeaderProps) {
  const isDark = theme === "dark";

  return (
    <div
      id={id}
      className={cn(
        "w-full flex flex-col",
        alignment === "left" ? "items-start text-left" : "items-center text-center",
        className
      )}
    >
      <div className="max-w-4xl relative">
        {subtitle && (
          <span
            className={cn(
              "header-text block font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold mb-3",
              isDark ? "text-ochre-400" : "text-ochre-500"
            )}
          >
            {subtitle}
          </span>
        )}

        <h2
          className={cn(
            "header-text font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.15] tracking-tight relative z-10",
            isDark ? "text-warm-50" : "text-text-primary"
          )}
        >
          {title}
        </h2>

        {children && <div className="mt-6">{children}</div>}
      </div>
    </div>
  );
}
