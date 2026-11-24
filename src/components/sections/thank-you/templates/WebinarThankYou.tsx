import React from "react";
import HeaderConfirmation from "../common/HeaderConfirmation";
import ActionSteps from "../common/ActionSteps";
import SupportFooter from "../common/SupportFooter";
import AddToCalendarWidget from "../specific/webinar/AddToCalendarWidget";
import WhatsAppVipGroupCallout from "../specific/webinar/WhatsAppVipGroupCallout";
import WorksheetTeaser from "../specific/webinar/WorksheetTeaser";
import PreEventSurvey from "../specific/webinar/PreEventSurvey";

export interface WebinarThankYouProps {
  userEmail?: string;
  className?: string;
}

export default function WebinarThankYou({
  userEmail,
  className = "",
}: WebinarThankYouProps) {
  return (
    <main className={`min-h-screen w-full bg-surface-page text-text-primary py-8 sm:py-12 ${className}`}>
      {/* 1. Header de Confirmación */}
      <HeaderConfirmation
        kicker="¡Registro Exitoso al Encuentro!"
        title="Tu asiento para el Webinar está reservado"
        subtitle="Enviamos tu enlace personalizado de acceso a tu correo. Sigue las instrucciones a continuación para no perderte la transmisión."
        userEmail={userEmail}
      />

      {/* 2. Añadir a Calendario */}
      <AddToCalendarWidget />

      {/* 3. Grupo VIP de WhatsApp */}
      <WhatsAppVipGroupCallout />

      {/* 4. Cuaderno de Trabajo Práctico */}
      <WorksheetTeaser />

      {/* 5. Encuesta de Calibración Previa */}
      <PreEventSurvey />

      {/* 6. Pasos Esenciales */}
      <ActionSteps
        title="Checklist previo a la transmisión"
        subtitle="Tres acciones rápidas para preparar tu espacio sagrado."
      />

      {/* 7. Pie de Soporte */}
      <SupportFooter />
    </main>
  );
}
