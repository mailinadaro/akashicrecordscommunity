import React from "react";
import type { Metadata } from "next";
import EntreDosCiclosThankYou from "@/components/sections/thank-you/templates/EntreDosCiclosThankYou";

export const metadata: Metadata = {
  title: "¡Falta 1 paso para completar tu registro! — Entre Dos Ciclos",
  description:
    "Tu registro a Entre Dos Ciclos está al 70%. Entra al grupo exclusivo de WhatsApp para completarlo y recibir el acceso al encuentro del 12 de diciembre de 2026.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

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
