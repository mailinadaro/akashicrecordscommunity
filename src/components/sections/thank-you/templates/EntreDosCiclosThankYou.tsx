import React from "react";
import Image from "next/image";
import { Clock } from "lucide-react";
import HeaderConfirmation from "../common/HeaderConfirmation";
import WhatsAppVipGroupCallout from "../specific/webinar/WhatsAppVipGroupCallout";
import AddToCalendarWidget from "../specific/webinar/AddToCalendarWidget";
import EventDetailsStrip from "../specific/entre-dos-ciclos/EventDetailsStrip";
import RegistrationProgressBar from "../specific/entre-dos-ciclos/RegistrationProgressBar";
import { siteConfig } from "@/config/site.config";

export interface EntreDosCiclosThankYouProps {
  userEmail?: string;
  className?: string;
}

const VIP_WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/FctmBPMbJHKKfptYTVcICM";

const GOOGLE_CALENDAR_URL =
  "https://calendar.google.com/calendar/render?action=TEMPLATE" +
  "&text=Entre+Dos+Ciclos+%E2%80%94+Akashic+Records+Community" +
  "&dates=20261212T160000Z/20261212T180000Z" +
  "&details=Encuentro+online+en+vivo+para+integrar+lo+vivido+en+el+2026+y+abrirte+con+claridad+al+2027.+El+enlace+de+Zoom+se+compartir%C3%A1+en+el+Grupo+VIP+de+WhatsApp+y+por+correo." +
  "&location=Online+%28Zoom+%E2%80%94+enlace+en+el+Grupo+VIP+de+WhatsApp%29";

const ICAL_DATA_URI =
  "data:text/calendar;charset=utf8," +
  [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Akashic Records Community//Entre Dos Ciclos//ES",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:entre-dos-ciclos-20261212@akashicrecordscommunity.com",
    "DTSTAMP:20261124T000000Z",
    "DTSTART:20261212T160000Z",
    "DTEND:20261212T180000Z",
    "SUMMARY:Entre Dos Ciclos — Akashic Records Community",
    "DESCRIPTION:Encuentro online en vivo para integrar lo vivido en el 2026 y abrirte con claridad al 2027. El enlace de Zoom se compartirá en el Grupo VIP de WhatsApp y por correo.",
    "LOCATION:Online (Zoom — enlace en el Grupo VIP de WhatsApp)",
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("%0A");

const OUTLOOK_CALENDAR_URL =
  "https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent" +
  "&startdt=2026-12-12T16:00:00Z" +
  "&enddt=2026-12-12T18:00:00Z" +
  "&subject=Entre%20Dos%20Ciclos%20%E2%80%94%20Akashic%20Records%20Community" +
  "&body=Encuentro%20online%20en%20vivo%20para%20integrar%20lo%20vivido%20en%20el%202026%20y%20abrirte%20con%20claridad%20al%202027.%20El%20enlace%20de%20Zoom%20se%20compartir%C3%A1%20en%20el%20Grupo%20VIP%20de%20WhatsApp%20y%20por%20correo." +
  "&location=Online%20(Zoom)";

export default function EntreDosCiclosThankYou({
  userEmail,
  className = "",
}: EntreDosCiclosThankYouProps) {
  const videoSrc =
    "/entre%20ciclos/Crear_video_animado_de_h%C3%A9roe_c135dbfb_1080p.mp4";
  const posterSrc =
    "/entre%20ciclos/Screenshot_2026-11-20_175636.png_b58ab2ce_2K.jpg";

  return (
    <div
      className={`relative overflow-hidden flex flex-col justify-between items-center w-full min-h-[100svh] px-4 py-4 sm:py-6 lg:px-8 bg-plum-950 text-white ${className}`}
    >
      {/* 1. Fondo Multimedia: Mismo universo ciruela y video cinemático de /entre-dos-ciclos */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={posterSrc}
          className="w-full h-full object-cover object-center transform scale-[1.01]"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        <div className="hidden">
          <Image
            src={posterSrc}
            alt="Entre Dos Ciclos Fondo"
            fill
            sizes="100vw"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-plum-950/50 via-plum-950/35 to-plum-950/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(15,3,20,0.72)_100%)]" />
      </div>

      <div className="w-full shrink-0 h-1 hidden sm:block" />

      {/* 2. Tarjeta Central Frosted Glass (Ciruela + Acentos Dorados) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto my-auto">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-gold-400/30 bg-plum-950/75 p-5 sm:p-7 lg:p-9 shadow-2xl shadow-plum-950/95 backdrop-blur-2xl">
          {/* Destello sutil superior */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[32rem] h-40 bg-gold-500/15 rounded-full blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 space-y-5 sm:space-y-6">
            {/* Encabezado: Registro Incompleto (70%) + Barra de Progreso */}
            <HeaderConfirmation
              theme="dark"
              icon={<Clock className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2] text-gold-300" aria-hidden="true" />}
              kicker="Registro al 70% • Falta 1 paso"
              title="¡Tu registro aún no está completado!"
              paragraphs={[
                "Ya recibimos tus datos para Entre Dos Ciclos, pero todavía falta un último paso indispensable para confirmar tu lugar.",
                "Para completar tu registro al 100% y asegurarte de recibir el enlace de Zoom, entra ahora al Grupo VIP de WhatsApp.",
              ]}
              conclusionText="Completa este último paso ahora:"
              userEmail={userEmail}
              className="py-0 sm:py-1 px-0"
            >
              <div className="space-y-4">
                <RegistrationProgressBar
                  percentage={70}
                  label="Tu registro está al 70%"
                  helperText="Falta 1 paso: entrar al Grupo de WhatsApp para completarlo al 100%"
                />
                <EventDetailsStrip />
              </div>
            </HeaderConfirmation>

            <div className="border-t border-gold-400/20" />

            {/* Paso Final Indispensable: Grupo VIP de WhatsApp */}
            <WhatsAppVipGroupCallout
              theme="dark"
              layout="stacked"
              badge="Último Paso- Completa tu registro"
              title="Entra al Grupo de WhatsApp"
              description="Es nuestro canal oficial de comunicación. Al entrar completas tu registro y allí compartiremos el enlace de Zoom, recordatorios y novedades importantes para el encuentro."
              trustText="Paso indispensable para completar tu registro y recibir el enlace de Zoom"
              ctaText="ENTRAR AL GRUPO DE WHATSAPP"
              whatsappGroupUrl={VIP_WHATSAPP_GROUP_URL}
              className="px-0 py-0"
            />

            {/* Acción Complementaria: Agregar al Calendario */}
            <AddToCalendarWidget
              theme="dark"
              badge="Recomendado · Reserva tu Espacio"
              title="Agenda estas dos horas en tu calendario para no olvidarte"
              eventName="Entre Dos Ciclos — Akashic Records Community"
              eventDate="12 DIC 2026"
              eventTime="10:00 a 12:00 hs · México"
              googleCalendarUrl={GOOGLE_CALENDAR_URL}
              iCalUrl={ICAL_DATA_URI}
              outlookUrl={OUTLOOK_CALENDAR_URL}
              downloadFilename="Entre-Dos-Ciclos-12-Dic-2026.ics"
              className="px-0 py-0"
            />

            {/* Cierre cálido y soporte mínimo sin distracciones */}
            <div className="pt-4 border-t border-gold-400/20 text-center space-y-1.5">
              <p className="font-display italic text-lg sm:text-xl text-gold-200 font-light">
                Una vez dentro del Grupo, tu lugar quedará 100% confirmado. ¡Nos vemos pronto!
              </p>
              <p className="font-body text-xs text-white/70">
                ¿Dudas con tu registro? Escríbenos a{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-gold-300 hover:text-gold-100 underline underline-offset-4 decoration-gold-400/40 transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Logo de Akashic Records Community Centrado Abajo por Fuera del Recuadro */}
      <div className="relative z-10 w-full flex justify-center items-center pt-4 pb-2 shrink-0">
        <Image
          src="/logos/logo1-trimmed.png"
          alt="Akashic Records Community"
          width={361}
          height={57}
          className="h-11 sm:h-12 md:h-14 w-auto object-contain brightness-125 drop-shadow-[0_4px_24px_rgba(206,139,52,0.5)] transition-transform hover:scale-105"
          priority
        />
      </div>
    </div>
  );
}
