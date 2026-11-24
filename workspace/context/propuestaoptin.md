Es una excelente decisión de arquitectura: inyectar el código HTML crudo de Brevo vía `props` en el componente **`OptinFormHero`** te ahorra configurar endpoints de API o webhooks en Next.js, garantiza que los contactos caigan en la lista correcta con sus etiquetas y resuelve la captación en minutos.

Para la landing del **Live del 12 de diciembre («Entre Ciclos»)** —que funciona como el gran evento de apertura y puente orgánico hacia la preventa de la Iniciación y la Membresía— no necesitas sobrecargar la página con 15 bloques. Necesitas una estructura quirúrgica de alta conversión para maximizar el registro y la asistencia (*Show-Up Rate*).

A continuación tienes:
1. **La arquitectura de componentes mínima y exacta** para este template.
2. **El código de los componentes** (incluyendo el soporte seguro para Brevo).
3. **El template ensamblado** con el copy específico del Live del 12 de diciembre.
4. **El prompt técnico** para tu agente de desarrollo.

---

### 1. Componentes Necesarios para este Template

```text
src/components/optin/
├── OptinFormHero.tsx            # Hero con título, promesa, fecha e inyección del form de Brevo
├── EventCountdownTicker.tsx     # Temporizador hacia el 12 de diciembre
├── LiveEventAgenda.tsx          # Los 3 hitos o temas clave que se trabajarán en el Live
├── SpeakerBioCard.tsx           # Tamara Ciriza como facilitadora
└── LegalNoticeFooter.tsx        # Aviso de privacidad y footer minimalista
```

---

### 2. Implementación de los Componentes

#### A. `OptinFormHero.tsx` (Con soporte para HTML de Brevo)
Este componente maneja tanto formularios estándar de React como código HTML embebido de Brevo (`dangerouslySetInnerHTML`), limpiando estilos invasivos para que adopte la estética de tu diseño:

```tsx
// src/components/optin/OptinFormHero.tsx
import React from "react";
import { Calendar, Clock, Sparkles } from "lucide-react";

interface OptinFormHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  dateText: string;
  timeText: string;
  brevoHtmlForm?: string; // Aquí inyectas el HTML que te da Brevo
  children?: React.ReactNode; // Por si prefieres usar un formulario custom de React
}

export default function OptinFormHero({
  badge = "ENCUENTRO EN VIVO Y ABIERTO",
  title,
  subtitle,
  dateText,
  timeText,
  brevoHtmlForm,
  children,
}: OptinFormHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#FBF9F5] py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E8E4DD]">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EFEA] border border-[#E0D9D0] text-[#8C6D58] text-xs font-semibold tracking-wider uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{badge}</span>
        </div>

        {/* Título y Subtítulo */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#2D2D2D] leading-tight tracking-tight mb-6">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-[#5A5550] max-w-2xl mx-auto mb-8 font-sans leading-relaxed">
          {subtitle}
        </p>

        {/* Datos Logísticos de Fecha y Hora */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-[#4A4540] font-medium mb-10">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-[#E8E4DD] shadow-sm">
            <Calendar className="w-4 h-4 text-[#C26D53]" />
            <span>{dateText}</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-[#E8E4DD] shadow-sm">
            <Clock className="w-4 h-4 text-[#C26D53]" />
            <span>{timeText}</span>
          </div>
        </div>

        {/* Contenedor del Formulario (Brevo o Custom) */}
        <div className="max-w-md mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-[#E8E4DD] shadow-lg shadow-[#00000008]">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#7A746E] mb-4">
            Reserva tu lugar sin costo
          </h3>

          {brevoHtmlForm ? (
            <div
              className="brevo-form-container text-left"
              dangerouslySetInnerHTML={{ __html: brevoHtmlForm }}
            />
          ) : (
            children
          )}

          <p className="text-xs text-[#8C857E] mt-4">
            🔒 Tu información está segura. Te enviaremos el enlace directo de Zoom a tu correo.
          </p>
        </div>

      </div>
    </section>
  );
}
```

---

#### B. `LiveEventAgenda.tsx` (Los temas del Live)
```tsx
// src/components/optin/LiveEventAgenda.tsx
import React from "react";
import { CheckCircle2 } from "lucide-react";

interface AgendaTopic {
  title: string;
  description: string;
}

interface LiveEventAgendaProps {
  title?: string;
  topics: AgendaTopic[];
}

export default function LiveEventAgenda({
  title = "Lo que exploraremos juntas en este espacio:",
  topics,
}: LiveEventAgendaProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-serif text-[#2D2D2D] text-center mb-10">
          {title}
        </h2>

        <div className="space-y-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 rounded-xl bg-[#FBF9F5] border border-[#E8E4DD]"
            >
              <div className="mt-1 text-[#C26D53]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2D2D2D] text-base mb-1">
                  {topic.title}
                </h3>
                <p className="text-sm text-[#5A5550] leading-relaxed">
                  {topic.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

#### C. `SpeakerBioCard.tsx` (Autoridad de Tamara)
```tsx
// src/components/optin/SpeakerBioCard.tsx
import React from "react";

interface SpeakerBioCardProps {
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
}

export default function SpeakerBioCard({
  name,
  role,
  bio,
  imageUrl,
}: SpeakerBioCardProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FBF9F5] border-t border-[#E8E4DD]">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-2 border-[#D4AF37]/40 shadow-md"
          />
        )}
        <div>
          <span className="text-xs uppercase font-semibold tracking-wider text-[#C26D53]">
            Facilitado por
          </span>
          <h3 className="text-2xl font-serif text-[#2D2D2D] mt-1 mb-1">{name}</h3>
          <p className="text-xs text-[#7A746E] uppercase tracking-wider mb-4 font-sans font-medium">
            {role}
          </p>
          <p className="text-sm text-[#5A5550] leading-relaxed font-sans">{bio}</p>
        </div>
      </div>
    </section>
  );
}
```

---

### 3. La Plantilla Compuesta: Live del 12 de Diciembre («Entre Ciclos»)

Aquí tienes el archivo de plantilla listo para recibir el código de formulario de Brevo:

```tsx
// src/templates/EntreCiclosOptinPage.tsx
import React from "react";
import OptinFormHero from "@/components/optin/OptinFormHero";
import LiveEventAgenda from "@/components/optin/LiveEventAgenda";
import SpeakerBioCard from "@/components/optin/SpeakerBioCard";

interface EntreCiclosOptinPageProps {
  brevoHtmlSnippet?: string; // Pasa aquí el código copiado de Brevo
}

export default function EntreCiclosOptinPage({
  brevoHtmlSnippet,
}: EntreCiclosOptinPageProps) {
  const topics = [
    {
      title: "El puente entre el año que cierra y el que abre",
      description:
        "Lectura de la energía disponible para soltar expectativas forzadas y comprender los aprendizajes profundos que te dejó este ciclo.",
    },
    {
      title: "Clima Akáshico y Astrológico de Transición",
      description:
        "Cómo se siente el campo energético en las semanas previas a 2027 y cómo habitar la incertidumbre sin caer en la ansiedad de resoluciones vacías.",
    },
    {
      title: "Práctica Vivencial de Calibración",
      description:
        "Un espacio íntimo de meditación y sintonización guiada para enraizar tu presencia y escuchar la voz de tu alma antes del cambio de calendario.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FBF9F5]">
      {/* 1. Hero con Formulario de Brevo */}
      <OptinFormHero
        badge="ENCUENTRO EN VIVO Y ABIERTO"
        title="Entre Ciclos: El Espacio Sagrado Entre lo que Cierra y lo que Nace"
        subtitle="Un encuentro en vivo para pausar el ruido de diciembre, sintonizar con la sabiduría de tus Registros Akáshicos y abrir el umbral del nuevo ciclo con discernimiento."
        dateText="Viernes 12 de Diciembre de 2026"
        timeText="11:00 h (México) · 14:00 h (Argentina)"
        brevoHtmlForm={brevoHtmlSnippet}
      />

      {/* 2. Temario del Evento */}
      <LiveEventAgenda topics={topics} />

      {/* 3. Bio de Tamara */}
      <SpeakerBioCard
        name="Tamara Ciriza"
        role="Canalizadora Akáshica & Terapeuta Gestalt"
        bio="Acompaña a personas en búsqueda de sentido a conectar con el registro sagrado de su alma, integrando la percepción intuitiva con el trabajo emocional para vivir una espiritualidad encarnada, cotidiana y sin fórmulas mágicas."
        imageUrl="/images/tamara-profile.jpg"
      />

      {/* 4. Footer */}
      <footer className="py-8 bg-white border-t border-[#E8E4DD] text-center text-xs text-[#8C857E]">
        <p>© 2026 Tamara Ciriza · Todos los derechos reservados.</p>
        <p className="mt-1">
          Al registrarte aceptas recibir el enlace del encuentro y comunicaciones relacionadas.
        </p>
      </footer>
    </main>
  );
}
```

---

### 4. Prompt para tu Agente de Desarrollo

Copia este prompt y pásaselo a tu agente (Cursor / Claude Code / v0) para que lo implemente de inmediato:

```text
Actúa como un Desarrollador Frontend Senior en React + TypeScript + Tailwind CSS.

Necesito crear los componentes modulares y la plantilla para la Landing de Captación (Optin Page) del evento en vivo "Entre Ciclos" del 12 de diciembre.

Requisitos específicos:
1. El componente `OptinFormHero.tsx` debe aceptar una prop opcional `brevoHtmlForm?: string`. Si esa prop está presente, debe renderizar el HTML del formulario provisto por Brevo mediante `dangerouslySetInnerHTML`. Debe incluir estilos CSS limpios en el contenedor para que el formulario de Brevo no rompa la estética (inputs elegantes con borde suave, botón a ancho completo en terracota #C26D53, sin fuentes extrañas).
2. Estética: Tonos cálidos/neutros (#FBF9F5, blanco, bordes #E8E4DD), tipografía serif elegante para títulos (font-serif) y sans-serif para cuerpos.
3. Componentes a generar dentro de `src/components/optin/`:
   - `OptinFormHero.tsx`: Kicker, H1, subtítulo, badges de fecha (12 de diciembre de 2026) y hora, contenedor de tarjeta de registro con Brevo o children.
   - `LiveEventAgenda.tsx`: Grid o lista de 3 hitos del encuentro con checks e iconos.
   - `SpeakerBioCard.tsx`: Foto circular, nombre de Tamara Ciriza, rol y biografía cálida.
4. Plantilla de página `src/templates/EntreCiclosOptinPage.tsx` que ensamble todo de forma limpia, lista para Next.js App Router.

Entrega el código TypeScript completo y sin placeholders.
```



PROPUESTA DE COPY
