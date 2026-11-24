"use client";

import React, { useEffect } from "react";

export default function EntreDosCiclosLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  useEffect(() => {
    // Bloquear scroll global del documento en desktop, permitiendo scroll fluido en móvil
    const isDesktop = window.innerWidth >= 1024;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlHeight = document.documentElement.style.height;
    const prevBodyHeight = document.body.style.height;

    if (isDesktop) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.documentElement.style.height = "100%";
      document.body.style.height = "100%";
    }

    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.height = prevHtmlHeight;
      document.body.style.height = prevBodyHeight;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] h-[100svh] w-screen overflow-y-auto lg:overflow-hidden bg-plum-950 text-white antialiased selection:bg-gold-500 selection:text-plum-950">
      {children}
    </div>
  );
}
