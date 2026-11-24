import React from "react";
import { Calendar, Clock, Video, Globe, Download, ExternalLink, Sparkles } from "lucide-react";

export interface LiveSession {
  number: number;
  title: string;
  subtitle?: string;
  date: string;
  time: string;
  focus: string;
  takeaways: string[];
  googleCalendarUrl?: string;
  iCalDataUri?: string;
}

export interface LiveScheduleCardProps {
  title?: string;
  subtitle?: string;
  sessions?: LiveSession[];
  zoomNotice?: string;
  recordingNotice?: string;
  className?: string;
}

const DEFAULT_SESSIONS: LiveSession[] = [
  {
    number: 1,
    title: "JORNADA 1 — RECORDAR Y CONECTAR",
    subtitle: "Abrí el espacio para conectar con tu alma y tus Guías.",
    date: "Sábado 16 de enero de 2027",
    time: "10:00 a 13:00 h (México)",
    focus: "Conocerás qué son los Registros Akáshicos, la autonomía espiritual y el vínculo consciente con tus Maestros y Guías.",
    takeaways: [
      "Comprender qué son los Registros Akáshicos y cómo acceder a ellos.",
      "Conocer el rol de los Maestros y Guías espirituales en tu camino.",
      "Meditaciones guiadas y consagración de tu espacio sagrado y altar.",
    ],
    googleCalendarUrl:
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Iniciaci%C3%B3n+Ak%C3%A1shica+%E2%80%94+Jornada+1%3A+Recordar+y+Conectar&dates=20270116T160000Z/20270116T190000Z&details=Primer+encuentro+en+vivo+por+Zoom.+Acceso+y+enlace+centralizados+en+Circle.&location=Circle+%2F+Zoom",
    iCalDataUri:
      "data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0APRODID:-//Iniciacion Akashica//Tamara Ciriza//ES%0ABEGIN:VEVENT%0AUID:iniciacion-jornada-1-20270116@tamaraciriza.com%0ADTSTAMP:20261123T000000Z%0ADTSTART:20270116T160000Z%0ADTEND:20270116T190000Z%0ASUMMARY:Iniciación Akáshica — Jornada 1: Recordar y Conectar%0ADESCRIPTION:Primer encuentro sincrónico vía Zoom. Enlace disponible en Circle.%0ALOCATION:Circle / Zoom%0ASTATUS:CONFIRMED%0AEND:VEVENT%0AEND:VCALENDAR",
  },
  {
    number: 2,
    title: "JORNADA 2 — ESCUCHAR Y CALIBRAR",
    subtitle: "Aprendé a reconocer cómo recibís la información.",
    date: "Sábado 23 de enero de 2027",
    time: "10:00 a 13:00 h (México)",
    focus: "Aprenderás el método de apertura y cierre, sintonización de tu canal y diferenciación entre intuición y ego.",
    takeaways: [
      "Oración sagrada de apertura, cierre y sintonización con el mantra ANAHIÚ.",
      "Reconocimiento de tus canales de percepción y escritura automática.",
      "Práctica de canalización guiada y tu primera lectura personal.",
    ],
    googleCalendarUrl:
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Iniciaci%C3%B3n+Ak%C3%A1shica+%E2%80%94+Jornada+2%3A+Escuchar+y+Calibrar&dates=20270123T160000Z/20270123T190000Z&details=Segundo+encuentro+en+vivo+por+Zoom.+Acceso+y+enlace+centralizados+en+Circle.&location=Circle+%2F+Zoom",
    iCalDataUri:
      "data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0APRODID:-//Iniciacion Akashica//Tamara Ciriza//ES%0ABEGIN:VEVENT%0AUID:iniciacion-jornada-2-20270123@tamaraciriza.com%0ADTSTAMP:20261123T000000Z%0ADTSTART:20270123T160000Z%0ADTEND:20270123T190000Z%0ASUMMARY:Iniciación Akáshica — Jornada 2: Escuchar y Calibrar%0ADESCRIPTION:Segundo encuentro sincrónico vía Zoom. Enlace disponible en Circle.%0ALOCATION:Circle / Zoom%0ASTATUS:CONFIRMED%0AEND:VEVENT%0AEND:VCALENDAR",
  },
  {
    number: 3,
    title: "JORNADA 3 — INTEGRAR Y SOSTENER",
    subtitle: "Transformá lo aprendido en una práctica propia.",
    date: "Sábado 30 de enero de 2027",
    time: "10:00 a 13:00 h (México)",
    focus: "Profundizarás en formular preguntas profundas, interpretar revelaciones y diseñar tu mapa de práctica cotidiana.",
    takeaways: [
      "Formulación de preguntas profundas y decodificación de mensajes.",
      "Práctica de lectura personal completa e integración de avances.",
      "Diseño de tu rutina espiritual y Mapa de Práctica Espiritual propio.",
    ],
    googleCalendarUrl:
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Iniciaci%C3%B3n+Ak%C3%A1shica+%E2%80%94+Jornada+3%3A+Integrar+y+Sostener&dates=20270130T160000Z/20270130T190000Z&details=Tercer+encuentro+en+vivo+por+Zoom.+Acceso+y+enlace+centralizados+en+Circle.&location=Circle+%2F+Zoom",
    iCalDataUri:
      "data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0APRODID:-//Iniciacion Akashica//Tamara Ciriza//ES%0ABEGIN:VEVENT%0AUID:iniciacion-jornada-3-20270130@tamaraciriza.com%0ADTSTAMP:20261123T000000Z%0ADTSTART:20270130T160000Z%0ADTEND:20270130T190000Z%0ASUMMARY:Iniciación Akáshica — Jornada 3: Integrar y Sostener%0ADESCRIPTION:Tercer encuentro sincrónico vía Zoom. Enlace disponible en Circle.%0ALOCATION:Circle / Zoom%0ASTATUS:CONFIRMED%0AEND:VEVENT%0AEND:VCALENDAR",
  },
];

// iCal ICS Data URI con los 3 eventos en vivo de enero 2027 (10:00 a 13:00 h México = 16:00 a 19:00 UTC)
const BULK_ICS_DATA_URI = `data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0APRODID:-//Iniciacion Akashica//Tamara Ciriza//ES%0ACALSCALE:GREGORIAN%0AMETHOD:PUBLISH%0ABEGIN:VEVENT%0AUID:iniciacion-2027-01-16@tamaraciriza.com%0ADTSTAMP:20261123T000000Z%0ADTSTART:20270116T160000Z%0ADTEND:20270116T190000Z%0ASUMMARY:Iniciación Akáshica — Jornada 1: Recordar y Conectar%0ADESCRIPTION:Primer encuentro sincrónico vía Zoom (10:00 a 13:00 h México). Enlace en Circle.%0ALOCATION:Circle / Zoom%0ASTATUS:CONFIRMED%0AEND:VEVENT%0ABEGIN:VEVENT%0AUID:iniciacion-2027-01-23@tamaraciriza.com%0ADTSTAMP:20261123T000000Z%0ADTSTART:20270123T160000Z%0ADTEND:20270123T190000Z%0ASUMMARY:Iniciación Akáshica — Jornada 2: Escuchar y Calibrar%0ADESCRIPTION:Segundo encuentro sincrónico vía Zoom (10:00 a 13:00 h México). Enlace en Circle.%0ALOCATION:Circle / Zoom%0ASTATUS:CONFIRMED%0AEND:VEVENT%0ABEGIN:VEVENT%0AUID:iniciacion-2027-01-30@tamaraciriza.com%0ADTSTAMP:20261123T000000Z%0ADTSTART:20270130T160000Z%0ADTEND:20270130T190000Z%0ASUMMARY:Iniciación Akáshica — Jornada 3: Integrar y Sostener%0ADESCRIPTION:Tercer encuentro sincrónico vía Zoom (10:00 a 13:00 h México). Enlace en Circle.%0ALOCATION:Circle / Zoom%0ASTATUS:CONFIRMED%0AEND:VEVENT%0AEND:VCALENDAR`;

export default function LiveScheduleCard({
  title = "Un camino de aprendizaje en tres encuentros",
  subtitle = "Durante tres semanas vamos a recorrer un proceso progresivo de conexión, aprendizaje y práctica para que puedas familiarizarte con los Registros Akáshicos, aprender a acceder a ellos y desarrollar confianza en tus propias lecturas.",
  sessions = DEFAULT_SESSIONS,
  zoomNotice = "El enlace directo de Zoom se activará en tu espacio de Circle 24 h antes de cada sesión.",
  recordingNotice = "Recuerda que si por alguna razón no puedes estar en vivo, todas las clases quedan grabadas y disponibles en Circle dentro de las 24 horas siguientes.",
  className = "",
}: LiveScheduleCardProps) {
  return (
    <section className={`w-full max-w-4xl mx-auto py-8 sm:py-12 px-4 ${className}`}>
      {/* Catedral Akáshica: Contenedor Ciruela Terciopelo con Acentos Dorados */}
      <div className="relative rounded-3xl bg-plum-950/95 text-white border-2 border-gold-500/35 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-md overflow-hidden">
        {/* Halo celestial dorado central */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Encabezado del Santuario */}
        <div className="relative z-10 text-center max-w-2xl mx-auto pb-8 border-b border-gold-500/25">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 text-gold-300 border border-gold-400/40 text-[10px] sm:text-xs font-sans uppercase tracking-[0.24em] font-bold mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" aria-hidden="true" />
            <span>✦ Calendario Sincrónico · 3 Encuentros en Vivo ✦</span>
          </div>

          <h3 className="font-display italic text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-tight mb-3">
            {title}
          </h3>

          <p className="font-body text-xs sm:text-sm text-gold-100/80 font-light leading-relaxed mb-3">
            {subtitle}
          </p>

          <p className="font-sans text-[11px] sm:text-xs uppercase tracking-wider text-gold-300 font-semibold flex items-center justify-center gap-2">
            <Globe className="w-3.5 h-3.5 text-gold-400" aria-hidden="true" />
            <span>Cada encuentro tiene un propósito y te prepara para avanzar hacia el siguiente.</span>
          </p>
        </div>

        {/* Lista de las 3 Jornadas con Temario Sintético */}
        <div className="relative z-10 space-y-6 pt-8">
          {sessions.map((session) => (
            <div
              key={session.number}
              className="rounded-2xl bg-[#271435]/90 border border-gold-500/25 hover:border-gold-400/50 p-6 sm:p-7 transition-all duration-300 shadow-sm"
            >
              {/* Header de Jornada */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-gold-500/15">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gold-500 text-plum-950 font-sans text-xs font-bold flex items-center justify-center shrink-0 shadow-md">
                    {session.number}
                  </div>
                  <div>
                    <h4 className="font-sans text-sm sm:text-base font-bold text-gold-200 tracking-wide">
                      {session.title}
                    </h4>
                    {session.subtitle && (
                      <p className="font-display italic text-xs sm:text-sm text-gold-100/90 font-normal">
                        {session.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end text-left sm:text-right shrink-0 pl-12 sm:pl-0">
                  <span className="font-sans text-xs font-semibold text-gold-300">
                    {session.date}
                  </span>
                  <span className="font-body text-xs text-gold-200/70 flex items-center gap-1 sm:justify-end mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-gold-400" aria-hidden="true" />
                    <span>{session.time}</span>
                  </span>
                </div>
              </div>

              {/* Foco Sintético */}
              <p className="font-body text-xs sm:text-sm text-gold-100/90 font-light leading-relaxed my-4">
                {session.focus}
              </p>

              {/* Bullets Sintéticos de lo que vas a aprender */}
              <div className="mb-5">
                <span className="text-[11px] font-sans font-bold text-gold-400 uppercase tracking-wider block mb-2">
                  Durante esta jornada vas a:
                </span>
                <ul className="space-y-1.5 text-xs font-body text-gold-100/80 font-light">
                  {session.takeaways.map((item, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botones de Calendario por Jornada */}
              <div className="pt-4 border-t border-gold-500/20 flex flex-wrap items-center justify-between gap-3">
                <span className="text-[11px] font-body text-gold-300/80">
                  Agendar este sábado individual:
                </span>
                <div className="flex items-center gap-2">
                  {session.googleCalendarUrl && (
                    <a
                      href={session.googleCalendarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gold-500/15 hover:bg-gold-500/25 border border-gold-400/40 text-gold-200 text-xs font-sans font-medium transition-colors cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-gold-400" aria-hidden="true" />
                      <span>Google Calendar</span>
                      <ExternalLink className="w-2.5 h-2.5 text-gold-400/80" aria-hidden="true" />
                    </a>
                  )}
                  {session.iCalDataUri && (
                    <a
                      href={session.iCalDataUri}
                      download={`Iniciacion-Jornada-${session.number}.ics`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gold-500/15 hover:bg-gold-500/25 border border-gold-400/40 text-gold-200 text-xs font-sans font-medium transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 text-gold-400" aria-hidden="true" />
                      <span>Apple / iCal</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cierre Inspirador y Sincronizador Global */}
        <div className="relative z-10 mt-8 pt-8 border-t border-gold-500/25 text-center">
          <p className="font-display italic text-sm sm:text-base text-gold-300 font-normal mb-5 max-w-lg mx-auto">
            «Tres encuentros. Un recorrido progresivo. Una nueva forma de conectar con tu propia sabiduría interior.»
          </p>

          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 p-4 rounded-2xl bg-gold-500/10 border border-gold-400/30">
            <span className="text-xs font-sans font-semibold text-white">
              ¿Deseas guardar los 3 sábados juntos con un solo clic?
            </span>
            <div className="flex items-center gap-2">
              <a
                href={BULK_ICS_DATA_URI}
                download="Iniciacion-Akashica-3-Jornadas-2027.ics"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-plum-950 font-sans text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-plum-950" aria-hidden="true" />
                <span>Descargar los 3 Encuentros (.ICS)</span>
              </a>
            </div>
          </div>

          {/* Avisos de Zoom y Grabaciones */}
          <div className="mt-6 space-y-2 text-xs font-body text-gold-200/70">
            <p className="flex items-center justify-center gap-2">
              <Video className="w-4 h-4 text-gold-400 shrink-0" aria-hidden="true" />
              <span>{zoomNotice}</span>
            </p>
            {recordingNotice && (
              <p className="text-[11px] text-gold-200/60 max-w-xl mx-auto">
                {recordingNotice}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
