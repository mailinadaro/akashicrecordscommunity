import React from "react";
import { cn } from "@/lib/utils";

export interface SplitSectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  left?: React.ReactNode;
  right?: React.ReactNode;
  children?: React.ReactNode;
  reverseOnDesktop?: boolean;
  align?: "start" | "center" | "end";
  gap?: "none" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

const gapClasses = {
  none: "gap-0",
  sm: "gap-6 md:gap-8",
  md: "gap-8 md:gap-12",
  lg: "gap-12 lg:gap-16",
  xl: "gap-12 lg:gap-20",
};

const alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
};

/**
 * Contenedor de maquetación puro y agnóstico de dos columnas.
 * No contiene tipografías, textos ni lógica de negocio intrínseca.
 */
export default function SplitSection({
  as: Component = "section",
  left,
  right,
  children,
  reverseOnDesktop = false,
  align = "center",
  gap = "xl",
  className,
  ...props
}: SplitSectionProps) {
  return (
    <Component
      className={cn(
        "w-full flex flex-col lg:flex-row",
        alignClasses[align],
        gapClasses[gap],
        reverseOnDesktop && "lg:flex-row-reverse",
        className
      )}
      {...props}
    >
      {left !== undefined || right !== undefined ? (
        <>
          <div className="w-full lg:w-1/2 flex-1">{left}</div>
          <div className="w-full lg:w-1/2 flex-1">{right}</div>
        </>
      ) : (
        children
      )}
    </Component>
  );
}
