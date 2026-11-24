import React from "react";

export default function ThankYouEntreDosCiclosLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-[100] h-[100svh] w-screen overflow-y-auto bg-plum-950 text-white antialiased selection:bg-gold-500 selection:text-plum-950"
    >
      {children}
    </div>
  );
}
