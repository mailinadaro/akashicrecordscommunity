"use client";

import React from "react";

interface OtherTripsGridWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function OtherTripsGridWrapper({
  children,
  className = "",
}: OtherTripsGridWrapperProps) {
  return (
    <div className={`w-full ${className}`}>
      {children}
    </div>
  );
}
