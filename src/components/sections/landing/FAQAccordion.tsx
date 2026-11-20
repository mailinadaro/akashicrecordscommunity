"use client";

import React from "react";
import { Accordion } from "@base-ui/react/accordion";
import { cn } from "@/lib/utils";

export interface FAQItem {
  id?: string;
  question: string;
  answer: string | React.ReactNode;
}

export interface FAQAccordionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items?: FAQItem[];
  defaultOpenId?: string;
  className?: string;
}

const DEFAULT_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "¿Puedo participar si nunca abrí mis Registros o no tengo experiencia previa?",
    answer: "Totalmente. Esta iniciación está diseñada como un proceso guiado paso a paso para quienes comienzan desde cero. No necesitas conocimientos previos ni haber realizado lecturas antes; aprenderás el método, las oraciones y el protocolo de apertura y cierre desde sus bases.",
  },
  {
    id: "faq-2",
    question: "¿Necesito tener un don especial o saber canalizar?",
    answer: "No. La capacidad de percibir, intuir y conectar con el registro de tu alma no es un privilegio para unos pocos, sino una cualidad humana natural que suele quedar adormecida por el ruido y la rutina. A lo largo de las tres semanas trabajaremos con herramientas prácticas para que aprendas a reconocer y confiar en tu propia forma de percibir.",
  },
  {
    id: "faq-3",
    question: "Ya hice otros cursos o me inicié antes, ¿esta experiencia me sirve?",
    answer: "Sí. Muchas personas aprendieron la técnica en el pasado pero, por falta de estructura, sostén o confianza, dejaron su libreta cerrada y no lograron incorporar el hábito en su vida cotidiana. Esta experiencia funciona como una recalibración vivencial de 21 días para reactivar tu canal, ordenar tus prácticas y volver a confiar en lo que recibes con acompañamiento directo.",
  },
  {
    id: "faq-4",
    question: "¿Qué voy a aprender durante estas tres semanas?",
    answer: "Aprenderás a abrir y cerrar tus propios Registros Akáshicos con un protocolo de protección claro, a formular preguntas que aporten claridad en tus decisiones cotidianas, a registrar tus mensajes mediante escritura y a diseñar un mapa de práctica sostenible en el tiempo.",
  },
  {
    id: "faq-5",
    question: "¿Voy a poder realizar mis propias lecturas al finalizar?",
    answer: "Sí. El propósito de este proceso es brindarte autonomía para consultar tus registros de forma personal cada vez que lo necesites, integrando la información a tus procesos emocionales y cotidianos.",
  },
  {
    id: "faq-6",
    question: "¿Qué pasa si me cuesta recibir información o dudo si lo estoy inventando?",
    answer: "Es una de las dudas más frecuentes al comenzar. Por eso dedicamos un espacio central al discernimiento perceptivo: aprenderás a reconocer las resistencias mentales, a diferenciar el sobrepensamiento de la intuición genuina y a registrar tus percepciones sin juzgarlas durante el proceso.",
  },
  {
    id: "faq-7",
    question: "¿Cuáles son las fechas y horarios de los encuentros en vivo? ¿Qué pasa si no puedo asistir a alguno?",
    answer: "Los encuentros se realizarán por Zoom los sábados 16, 23 y 30 de enero de 2027, de 10:00 a 13:30 h (hora de México). Si no puedes participar en directo de alguna sesión, no te preocupes: todas las clases quedan grabadas y se suben a la plataforma dentro de las 24 horas siguientes para que las veas a tu propio ritmo.",
  },
  {
    id: "faq-8",
    question: "¿Cómo es el acompañamiento durante los 21 días?",
    answer: "Entre cada encuentro en vivo contarás con una bitácora de ejercicios breves, meditaciones en audio y el espacio comunitario en la plataforma Circle para compartir tus experiencias, integrar lo aprendido y sostener el hábito sin exigencias desmedidas.",
  },
  {
    id: "faq-9",
    question: "¿Qué materiales incluye la iniciación?",
    answer: "La inscripción incluye el acceso a los 3 encuentros en vivo y sus grabaciones, el manual El ABC Akáshico (PDF), la bitácora de 21 días, 3 meditaciones guiadas en audio, la guía para tu altar personal, la plantilla del Mapa de Práctica Espiritual y la Masterclass especial sobre la Era de Acuario.",
  },
  {
    id: "faq-10",
    question: "¿Durante cuánto tiempo tengo acceso a los contenidos y grabaciones?",
    answer: "Tendrás acceso completo a las grabaciones y materiales dentro de Circle durante 3 meses posteriores a la finalización de la iniciación, para que puedas repasar los ejercicios y asentar el método a tus tiempos.",
  },
  {
    id: "faq-11",
    question: "¿Existe política de reembolso o garantía?",
    answer: "Tu compra está respaldada por la garantía estándar de 7 días corridos desde el momento de la transacción, gestionada de forma directa a través de Hotmart conforme a sus términos de servicio.",
  },
];

export default function FAQAccordion({
  id = "faq",
  eyebrow = "Preguntas Frecuentes",
  title = "Dudas Frecuentes, Aclaradas con Claridad",
  subtitle = "Todo lo que necesitas saber antes de dar el paso e iniciar este camino hacia tus propios Registros Akáshicos.",
  items = DEFAULT_FAQS,
  defaultOpenId = "faq-1",
  className,
}: FAQAccordionProps) {
  if (!items || items.length === 0) return null;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "w-full bg-surface-page py-24 lg:py-32 border-t border-border-default",
        className
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Columna Izquierda */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            {eyebrow && (
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold-600 mb-4 block font-semibold">
                {eyebrow}
              </span>
            )}
            <h2
              id={`${id}-heading`}
              className="font-display italic text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-[1.2] font-normal"
            >
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 font-body text-base text-text-secondary leading-relaxed font-light">
                {subtitle}
              </p>
            )}
          </div>

          {/* Columna Derecha: Acordeón Base UI */}
          <div className="lg:col-span-7 w-full">
            <Accordion.Root
              defaultValue={defaultOpenId ? [defaultOpenId] : undefined}
              className="flex flex-col gap-3 w-full"
            >
              {items.map((item, index) => {
                const itemId = item.id ?? `${id}-item-${index}`;

                return (
                  <Accordion.Item
                    key={itemId}
                    value={itemId}
                    className="group border border-border-default bg-surface-secondary/40 hover:bg-surface-secondary/70 data-open:bg-surface-secondary/80 transition-colors duration-200 overflow-hidden"
                  >
                    <Accordion.Header className="w-full m-0 p-0">
                      <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer select-none gap-4">
                        <span className="font-display italic text-lg sm:text-xl font-medium text-text-primary leading-snug">
                          {item.question}
                        </span>

                        <span className="flex items-center justify-center shrink-0 w-6 h-6 text-gold-600 transition-transform duration-300 group-data-open:rotate-45">
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <line x1="8" y1="2" x2="8" y2="14" stroke="currentColor" strokeWidth="1.5" />
                            <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                        </span>
                      </Accordion.Trigger>
                    </Accordion.Header>

                    <Accordion.Panel className="grid grid-rows-[0fr] data-open:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                      <div className="overflow-hidden opacity-0 group-data-open:opacity-100 transition-opacity duration-300">
                        <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-text-secondary leading-relaxed font-body font-light">
                          {item.answer}
                        </div>
                      </div>
                    </Accordion.Panel>
                  </Accordion.Item>
                );
              })}
            </Accordion.Root>
          </div>
        </div>
      </div>
    </section>
  );
}
