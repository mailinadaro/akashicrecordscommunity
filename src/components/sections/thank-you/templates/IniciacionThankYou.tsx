import React from "react";
import { Mail, MessageSquare, Calendar } from "lucide-react";
import HeaderConfirmation from "../common/HeaderConfirmation";
import ActionSteps, { ActionStep } from "../common/ActionSteps";
import LiveScheduleCard from "../specific/live/LiveScheduleCard";
import InstantResourcesGrid from "../specific/live/InstantResourcesGrid";
import RolloverCreditNotice from "../specific/live/RolloverCreditNotice";
import SupportFooter from "../common/SupportFooter";

export interface LiveProductThankYouProps {
  userEmail?: string;
  orderNumber?: string;
  className?: string;
}

export default function LiveProductThankYou({
  userEmail,
  orderNumber,
  className = "",
}: LiveProductThankYouProps) {
  // Pasos de acción con jerarquía limpia, sin duplicidad de botones en Paso 3
  const iniciacionSteps: ActionStep[] = [
    {
      number: "01",
      title: "PASO 1: Revisa tu correo electrónico",
      description: "Te acabamos de enviar dos correos importantes:",
      bullets: [
        "El comprobante de pago de Hotmart con tu número de transacción.",
        "Un correo de bienvenida de Tamara Ciriza con los detalles de tu registro. Ten en cuenta que el acceso a Circle y a los materiales se habilitará a partir del 11 de enero de 2027.",
        "(Si no lo ves en tu bandeja principal en los próximos 5 minutos, revisa tu carpeta de Spam, Promociones o Correo no deseado).",
      ],
      icon: <Mail className="w-5 h-5 text-gold-700" />,
    },
    {
      number: "02",
      title: "PASO 2: Ingresa a nuestro espacio exclusivo en Circle",
      description:
        "Todo el material, enlaces de Zoom y la biblioteca de audios vivirán centralizados en nuestra plataforma privada en Circle, cuyo acceso se habilitará a partir del 11 de enero de 2027:",
      actionText: "ENTRAR A CIRCLE Y ACTIVAR MI ACCESO",
      actionHref: "https://circle.so", // URL de la comunidad en Circle
      actionVariant: "primary",
      icon: <MessageSquare className="w-5 h-5 text-gold-700" />,
    },
    {
      number: "03",
      title: "PASO 3: Agenda tus tres jornadas de encuentro",
      description:
        "Reserva desde hoy las fechas y horarios de los 3 encuentros por Zoom (10:00 a 13:30 h, horario de México). Cada encuentro dura 3 horas y 30 minutos, completando 10 horas y 30 minutos de formación en vivo. Justo debajo tienes el cronograma detallado con el temario completo de cada jornada y los accesos para añadir cada clase a tu Google Calendar o Apple Calendar con un solo clic.",
      bullets: [
        "Sábado 16 de enero: Jornada 1 — Recordar y Conectar (10:00 a 13:30 h, horario de México)",
        "Sábado 23 de enero: Jornada 2 — Escuchar y Calibrar (10:00 a 13:30 h, horario de México)",
        "Sábado 30 de enero: Jornada 3 — Integrar y Sostener (10:00 a 13:30 h, horario de México)",
        "(Si por alguna razón no puedes estar en vivo, todas las clases quedan grabadas y disponibles en Circle dentro de las 24 horas siguientes).",
      ],
      icon: <Calendar className="w-5 h-5 text-gold-700" />,
    },
  ];

  return (
    <main className={`min-h-screen w-full text-text-primary ${className}`}>
      {/* ==============================================================
          BANDA 1: BIENVENIDA Y ONBOARDING (Luz cálida apergaminada)
          ============================================================== */}
      <section className="w-full bg-[#FAF8F5] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(206,139,52,0.14),transparent_70%)] pt-12 pb-8 sm:pt-16 sm:pb-12">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          {/* Header de Confirmación Editorial */}
          <HeaderConfirmation
            kicker="¡Tu lugar está confirmado!"
            title="Bienvenida a tu Iniciación Akáshica: El Camino de Regreso a tu Alma"
            paragraphs={[
              "Elegiste abrir un nuevo espacio de exploración y conexión con tu mundo interior.",
              "Durante las próximas tres semanas vamos a recorrer juntas un camino de aprendizaje y práctica para que puedas conocer los Registros Akáshicos, aprender a acceder a ellos y realizar tus primeras lecturas personales.",
            ]}
            calloutText="Tu experiencia comienza aquí."
            conclusionText="Para prepararte, te invitamos a seguir estos tres pasos:"
            userEmail={userEmail}
            orderNumber={orderNumber}
            className="px-0 py-4 sm:py-6"
          />

          {/* Separador celestial */}
          <div className="flex items-center justify-center gap-3 my-4 text-gold-400/60" aria-hidden="true">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-gold-400/50" />
            <span className="text-xs">✦</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-gold-400/50" />
          </div>

          {/* Sección de 3 Pasos con Stepper Progresivo (Paso 3 limpio) */}
          <ActionSteps
            title="Sigue estos 3 pasos para completar tu ingreso"
            subtitle="Cada acción te acerca a tu espacio sagrado antes de iniciar el 16 de enero."
            steps={iniciacionSteps}
            layout="stacked"
            showProgressHeader={true}
            className="px-0 py-6"
          />
        </div>
      </section>

      {/* ==============================================================
          PUENTE DE DEGRADÉ CONTINUO 1 (De luz apergaminada a ciruela)
          ============================================================== */}
      <div
        className="w-full h-24 sm:h-36 bg-gradient-to-b from-[#FAF8F5] via-[#452756] to-plum-950 pointer-events-none"
        aria-hidden="true"
      />

      {/* ==============================================================
          BANDA 2: CATEDRAL AKÁSHICA / CRONOGRAMA EN VIVO (Terciopelo Ciruela)
          ============================================================== */}
      <section className="w-full bg-plum-950 text-white py-6 sm:py-12 relative overflow-hidden">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <LiveScheduleCard
            title="Un camino de aprendizaje en tres encuentros"
            subtitle="Durante tres semanas vamos a recorrer un proceso progresivo de conexión, aprendizaje y práctica para que puedas familiarizarte con los Registros Akáshicos, aprender a acceder a ellos y desarrollar confianza en tus propias lecturas."
            className="px-0 py-0"
          />
        </div>
      </section>

      {/* ==============================================================
          PUENTE DE DEGRADÉ CONTINUO 2 (De ciruela a arena apergaminada)
          ============================================================== */}
      <div
        className="w-full h-24 sm:h-36 bg-gradient-to-b from-plum-950 via-[#3d204e] to-[#FAF8F5] pointer-events-none"
        aria-hidden="true"
      />

      {/* ==============================================================
          BANDA 3: PRIMEROS PASOS, BENEFICIO Y ASISTENCIA (Luz serena)
          ============================================================== */}
      <section className="w-full bg-[#FAF8F5] pt-4 pb-16 sm:pb-24 text-text-primary">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 space-y-12">
          {/* Recursos preparatorios inmediatos */}
          <InstantResourcesGrid
            title="¿Qué puedes ir explorando mientras llega enero?"
            subtitle="Dentro de Circle ya tienes disponibles tus primeros materiales preparatorios:"
            className="px-0 py-4"
          />

          {/* Separador celestial */}
          <div className="flex items-center justify-center gap-3 my-4 text-gold-400/60" aria-hidden="true">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-gold-400/50" />
            <span className="text-xs">✦</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-gold-400/50" />
          </div>

          {/* Callout destacado de Crédito a Favor */}
          <RolloverCreditNotice
            creditAmount="$150 USD"
            deadlineDate="31 de enero de 2027"
            className="px-0 py-4"
          />

          {/* Centro de Asistencia y Pie de Página */}
          <SupportFooter
            title="¿Tienes algún inconveniente con tu acceso o no encuentras tu correo?"
            subtitle="Escríbenos directamente a soporte@tamaraciriza.com y nuestro equipo te ayudará a resolverlo a la brevedad."
            email="soporte@tamaraciriza.com"
            className="px-0 mt-8"
          />
        </div>
      </section>
    </main>
  );
}
