"use client";

import React, { useEffect } from "react";

export default function EntreCiclosLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  useEffect(() => {
    // Bloquear scroll global del documento en la experiencia de pantalla única
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlHeight = document.documentElement.style.height;
    const prevBodyHeight = document.body.style.height;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";

    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.height = prevHtmlHeight;
      document.body.style.height = prevBodyHeight;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] h-[100svh] w-screen overflow-hidden bg-plum-950 text-text-primary antialiased selection:bg-gold-500 selection:text-plum-950">
      {children}
    </div>
  );
}
