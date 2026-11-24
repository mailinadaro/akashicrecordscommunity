import React from "react";
import HeaderConfirmation from "../common/HeaderConfirmation";
import ActionSteps from "../common/ActionSteps";
import CommunityOrBridgeAction from "../common/CommunityOrBridgeAction";
import SupportFooter from "../common/SupportFooter";
import MemberBadgeCelebration from "../specific/membership/MemberBadgeCelebration";
import WelcomeCommunityTour from "../specific/membership/WelcomeCommunityTour";
import MonthlyRitualCalendar from "../specific/membership/MonthlyRitualCalendar";

export interface MembershipThankYouProps {
  userEmail?: string;
  orderNumber?: string;
  className?: string;
}

export default function MembershipThankYou({
  userEmail,
  orderNumber,
  className = "",
}: MembershipThankYouProps) {
  return (
    <main className={`min-h-screen w-full bg-surface-page text-text-primary py-8 sm:py-12 ${className}`}>
      {/* 1. Header de Confirmación */}
      <HeaderConfirmation
        kicker="¡Membresía Anual Activa!"
        title="Bienvenida al Pase Anual Círculo Akáshico"
        subtitle="Todo tu 2027 acompañada resuelto. Tu iniciación intensiva de enero está 100% bonificada y tu santuario activo."
        userEmail={userEmail}
        orderNumber={orderNumber}
      />

      {/* 2. Insignia de Celebración de Alumna */}
      <MemberBadgeCelebration />

      {/* 3. Tour por los Canales Clave de Circle */}
      <WelcomeCommunityTour />

      {/* 4. Calendario Ritual Mensual */}
      <MonthlyRitualCalendar />

      {/* 5. Pasos Esenciales de Arranque */}
      <ActionSteps
        title="Tus primeros 3 pasos como Miembro"
        subtitle="Activa tus notificaciones y prepara tu libreta para el primer update mensual."
      />

      {/* 6. Enlace Directo al Santuario en Circle */}
      <CommunityOrBridgeAction
        title="Entrar al Santuario Privado"
        badge="Acceso Vitalicio Anual"
        description="Ingresa a Circle para saludar a Tamara y tus compañeras, ver los anuncios de bienvenida y agendar la primera meditación."
      />

      {/* 7. Pie de Soporte */}
      <SupportFooter />
    </main>
  );
}
