import React from "react";
import { cn } from "@/lib/utils";

export interface MainContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

export default function MainContainer({
  as: Component = "div",
  children,
  className,
  ...props
}: MainContainerProps) {
  return (
    <Component
      className={cn("w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
