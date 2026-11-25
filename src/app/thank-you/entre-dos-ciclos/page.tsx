import React from "react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import EntreDosCiclosThankYou from "@/components/sections/thank-you/templates/EntreDosCiclosThankYou";

export const metadata: Metadata = buildPageMetadata({
  title: "¡Falta 1 paso para completar tu registro! — Entre Dos Ciclos",
  absoluteTitle: true,
  description:
    "Tu registro a Entre Dos Ciclos está al 70%. Entra al grupo exclusivo de WhatsApp para completarlo y recibir el acceso al encuentro del 12 de diciembre de 2026.",
  path: "/thank-you/entre-dos-ciclos",
  image: {
    url: "/og/entre-dos-ciclos.jpg",
    width: 1200,
    height: 630,
    alt: "Entre Dos Ciclos — Akashic Records Community",
  },
  noIndex: true,
});

interface ThankYouEntreDosCiclosPageProps {
  searchParams?: Promise<{
    email?: string;
  }>;
}

export default async function ThankYouEntreDosCiclosPage({
  searchParams,
}: ThankYouEntreDosCiclosPageProps) {
  const resolved = searchParams ? await searchParams : undefined;
  return <EntreDosCiclosThankYou userEmail={resolved?.email} />;
}
