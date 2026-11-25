import React from "react";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import LiveProductThankYou from "@/components/sections/thank-you/templates/IniciacionThankYou";
import WebinarThankYou from "@/components/sections/thank-you/templates/WebinarThankYou";
import LeadMagnetThankYou from "@/components/sections/thank-you/templates/LeadMagnetThankYou";
import EvergreenCourseThankYou from "@/components/sections/thank-you/templates/EvergreenCourseThankYou";
import MembershipThankYou from "@/components/sections/thank-you/templates/MembershipThankYou";
import EntreDosCiclosThankYou from "@/components/sections/thank-you/templates/EntreDosCiclosThankYou";

interface ThankYouPageProps {
  searchParams: Promise<{
    type?: string;
    email?: string;
    order?: string;
  }>;
}

const METADATA_BY_TYPE: Record<string, { title: string; description: string }> = {
  live: {
    title: "¡Inscripción Confirmada! — Iniciación Akáshica",
    description:
      "Tu lugar para la experiencia en vivo de Iniciación Akáshica está asegurado. Revisa tus accesos y fechas de encuentro.",
  },
  iniciacion: {
    title: "¡Inscripción Confirmada! — Iniciación Akáshica",
    description:
      "Tu lugar para la experiencia en vivo de Iniciación Akáshica está asegurado. Revisa tus accesos y fechas de encuentro.",
  },
  webinar: {
    title: "¡Lugar Reservado para la Masterclass!",
    description:
      "Tu registro al webinar en vivo está confirmado. Agregalo a tu calendario y sumate a la comunidad VIP.",
  },
  "lead-magnet": {
    title: "Descarga tu Recurso Gratuito",
    description:
      "Tu recurso gratuito ya está listo. Revisa tu bandeja de entrada y comenzá tu sintonización hoy mismo.",
  },
  evergreen: {
    title: "¡Bienvenida a la Plataforma!",
    description:
      "Tus credenciales de acceso al curso online están habilitadas. Comenzá tu recorrido a tu propio ritmo.",
  },
  membership: {
    title: "¡Bienvenida a Alma Presente! — Pase Anual",
    description:
      "Tu membresía anual está activa. Ingresá a la comunidad, explora los rituales mensuales y participa de los encuentros.",
  },
  "entre-dos-ciclos": {
    title: "¡Falta 1 paso para completar tu registro! — Entre Dos Ciclos",
    description:
      "Tu registro a Entre Dos Ciclos está al 70%. Entra al grupo exclusivo de WhatsApp para completarlo y recibir el acceso al encuentro del 12 de diciembre.",
  },
};

const DEFAULT_METADATA = {
  title: "Confirmación de Registro — Iniciación Akáshica",
  description: "Confirmación de acceso, próximos pasos y detalles de tu experiencia.",
};

export async function generateMetadata({ searchParams }: ThankYouPageProps): Promise<Metadata> {
  const { type } = await searchParams;
  const config = (type && METADATA_BY_TYPE[type]) || DEFAULT_METADATA;

  return {
    title: config.title,
    description: config.description,
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
    openGraph: {
      title: config.title,
      description: config.description,
      type: "website",
    },
  };
}

export default async function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const { type, email, order } = await searchParams;

  switch (type) {
    case "webinar":
      return <WebinarThankYou userEmail={email} />;
    case "lead-magnet":
      return <LeadMagnetThankYou userEmail={email} />;
    case "evergreen":
      return <EvergreenCourseThankYou userEmail={email} orderNumber={order} />;
    case "membership":
      return <MembershipThankYou userEmail={email} orderNumber={order} />;
    case "entre-dos-ciclos":
      return <EntreDosCiclosThankYou userEmail={email} />;
    case "live":
    case "iniciacion":
      return <LiveProductThankYou userEmail={email} orderNumber={order} />;
    default:
      redirect("https://www.akashicrecordscommunity.com");
  }
}
