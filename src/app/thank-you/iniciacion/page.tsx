import React from "react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import LiveProductThankYou from "@/components/sections/thank-you/templates/IniciacionThankYou";

export const metadata: Metadata = buildPageMetadata({
  title: "Bienvenida a tu Iniciación Akáshica: El Camino de Regreso a tu Alma",
  absoluteTitle: true,
  description:
    "Tu lugar está confirmado para la Iniciación en vivo. Sigue los 3 pasos esenciales para activar tu acceso a Circle y agendar los encuentros.",
  path: "/thank-you/iniciacion",
  image: {
    url: "/og/iniciacion.jpg",
    width: 1200,
    height: 630,
    alt: "Iniciación Akáshica — Akashic Records Community",
  },
  noIndex: true,
});

interface IniciacionPageProps {
  searchParams?: Promise<{
    email?: string;
    order?: string;
  }>;
}

export default async function ThankYouIniciacionPage({ searchParams }: IniciacionPageProps) {
  const resolved = searchParams ? await searchParams : undefined;

  return (
    <LiveProductThankYou
      userEmail={resolved?.email || "alumna@ejemplo.com"}
      orderNumber={resolved?.order || "HP-8941203"}
    />
  );
}
