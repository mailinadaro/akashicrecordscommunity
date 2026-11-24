import React from "react";
import HeaderConfirmation from "../common/HeaderConfirmation";
import SupportFooter from "../common/SupportFooter";
import DirectDownloadCard from "../specific/lead-magnet/DirectDownloadCard";
import TripwireOfferBanner from "../specific/lead-magnet/TripwireOfferBanner";
import SocialProofSnippet from "../specific/lead-magnet/SocialProofSnippet";

export interface LeadMagnetThankYouProps {
  userEmail?: string;
  downloadUrl?: string;
  className?: string;
}

export default function LeadMagnetThankYou({
  userEmail,
  downloadUrl,
  className = "",
}: LeadMagnetThankYouProps) {
  return (
    <main className={`min-h-screen w-full bg-surface-page text-text-primary py-8 sm:py-12 ${className}`}>
      {/* 1. Header de Confirmación */}
      <HeaderConfirmation
        kicker="¡Tu Recurso Gratuito ya es Tuyo!"
        title="Gracias por solicitar tu Guía Akáshica"
        subtitle="Tu archivo está disponible para descarga inmediata aquí abajo y también te lo enviamos por correo."
        userEmail={userEmail}
      />

      {/* 2. Tarjeta de Descarga Directa */}
      <DirectDownloadCard downloadUrl={downloadUrl} />

      {/* 3. Oferta Especial / Tripwire */}
      <TripwireOfferBanner />

      {/* 4. Prueba Social / Testimonios Breves */}
      <SocialProofSnippet />

      {/* 5. Pie de Soporte */}
      <SupportFooter />
    </main>
  );
}
