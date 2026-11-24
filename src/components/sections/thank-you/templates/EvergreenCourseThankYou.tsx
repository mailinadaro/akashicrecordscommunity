import React from "react";
import HeaderConfirmation from "../common/HeaderConfirmation";
import ActionSteps from "../common/ActionSteps";
import SupportFooter from "../common/SupportFooter";
import LmsAccessCard from "../specific/evergreen/LmsAccessCard";
import ProgressRoadmap from "../specific/evergreen/ProgressRoadmap";
import NextStepUpsell from "../specific/evergreen/NextStepUpsell";

export interface EvergreenCourseThankYouProps {
  userEmail?: string;
  orderNumber?: string;
  className?: string;
}

export default function EvergreenCourseThankYou({
  userEmail,
  orderNumber,
  className = "",
}: EvergreenCourseThankYouProps) {
  return (
    <main className={`min-h-screen w-full bg-surface-page text-text-primary py-8 sm:py-12 ${className}`}>
      {/* 1. Header de Confirmación */}
      <HeaderConfirmation
        kicker="¡Acceso Inmediato Concedido!"
        title="Bienvenida al Curso de Registros Akáshicos"
        subtitle="Tu cuenta ha sido creada exitosamente. Ya puedes acceder a todas las lecciones grabadas y comenzar tu formación a tu ritmo."
        userEmail={userEmail}
        orderNumber={orderNumber}
      />

      {/* 2. Tarjeta de Acceso al Campus LMS */}
      <LmsAccessCard userEmail={userEmail} />

      {/* 3. Hoja de Ruta del Aprendizaje */}
      <ProgressRoadmap />

      {/* 4. Pasos Esenciales */}
      <ActionSteps
        title="Tu plan de arranque recomendado"
        subtitle="Sigue este orden para asentar las bases desde el día uno."
      />

      {/* 5. Oferta de Acompañamiento Avanzado */}
      <NextStepUpsell />

      {/* 6. Pie de Soporte */}
      <SupportFooter />
    </main>
  );
}
