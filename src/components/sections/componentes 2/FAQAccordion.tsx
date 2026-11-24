"use client";

import React from "react";
import Image from "next/image";
import { Mail, ArrowUpRight } from "lucide-react";
import { Accordion } from "@base-ui/react/accordion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site.config";
import FAQKinematicWrapper from "@/components/animations/FAQKinematicWrapper";
import { trackFaqAccordionToggle } from "@/lib/analytics";

export interface FAQItem {
  id?: string;
  category?: string;
  question: string;
  answer: string | React.ReactNode;
}

export interface FAQAccordionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  cardTitle?: string;
  cardSubtitle?: string;
  items?: FAQItem[];
  defaultOpenId?: string;
  className?: string;
}

const DEFAULT_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "Sobre la experiencia previa y el llamado",
    question: "¿Puedo participar si nunca abrí mis Registros o no tengo experiencia previa?",
    answer:
      "Totalmente. Esta iniciación está diseñada como un proceso guiado paso a paso para quienes comienzan desde cero. No necesitas conocimientos previos ni haber realizado lecturas antes; aprenderás el método, las oraciones y el protocolo de apertura y cierre desde sus bases.",
  },
  {
    id: "faq-2",
    category: "Sobre la experiencia previa y el llamado",
    question: "¿Necesito tener un don especial o saber canalizar?",
    answer:
      "No. La capacidad de percibir, intuir y conectar con el registro de tu alma no es un privilegio para unos pocos, sino una cualidad humana natural que suele quedar adormecida por el ruido y la rutina. A lo largo de las tres semanas trabajaremos con herramientas prácticas para que aprendas a reconocer y confiar en tu propia forma de percibir.",
  },
  {
    id: "faq-3",
    category: "Sobre la experiencia previa y el llamado",
    question: "Ya hice otros cursos o me inicié antes, ¿esta experiencia me sirve?",
    answer:
      "Sí. Muchas personas aprendieron la técnica en el pasado pero, por falta de estructura, sostén o confianza, dejaron su libreta cerrada y no lograron incorporar el hábito en su vida cotidiana. Esta experiencia funciona como una recalibración vivencial de 21 días para reactivar tu canal, ordenar tus prácticas y volver a confiar en lo que recibes con acompañamiento directo.",
  },
  {
    id: "faq-4",
    category: "Sobre el método, la práctica y el discernimiento",
    question: "¿Qué voy a aprender durante estas tres semanas?",
    answer:
      "Aprenderás a abrir y cerrar tus propios Registros Akáshicos con un protocolo de protección claro, a formular preguntas que aporten claridad en tus decisiones cotidianas, a registrar tus mensajes mediante escritura y a diseñar un mapa de práctica sostenible en el tiempo.",
  },
  {
    id: "faq-5",
    category: "Sobre el método, la práctica y el discernimiento",
    question: "¿Voy a poder realizar mis propias lecturas al finalizar?",
    answer:
      "Sí. El propósito de este proceso es brindarte autonomía para consultar tus registros de forma personal cada vez que lo necesites, integrando la información a tus procesos emocionales y cotidianos.",
  },
  {
    id: "faq-6",
    category: "Sobre el método, la práctica y el discernimiento",
    question: "¿Qué pasa si me cuesta recibir información o dudo si lo estoy inventando?",
    answer:
      "Es una de las dudas más frecuentes al comenzar. Por eso dedicamos un espacio central al discernimiento perceptivo: aprenderás a reconocer las resistencias mentales, a diferenciar el sobrepensamiento de la intuición genuina y a registrar tus percepciones sin juzgarlas durante el proceso.",
  },
  {
    id: "faq-7",
    category: "Formato, horarios y materiales",
    question:
      "¿Cuáles son las fechas y horarios de los encuentros en vivo? ¿Qué pasa si no puedo asistir a alguno?",
    answer:
      "Los encuentros se realizarán por Zoom los sábados 16, 23 y 30 de enero de 2027, de 10:00 a 13:30 h (hora de México). Si no puedes participar en directo de alguna sesión, no te preocupes: todas las clases quedan grabadas y se suben a la plataforma dentro de las 24 horas siguientes para que las veas a tu propio ritmo.",
  },
  {
    id: "faq-8",
    category: "Formato, horarios y materiales",
    question: "¿Cómo es el acompañamiento durante los 21 días?",
    answer:
      "Entre cada encuentro en vivo contarás con una bitácora de ejercicios breves, meditaciones en audio y el espacio comunitario en la plataforma Circle para compartir tus experiencias, integrar lo aprendido y sostener el hábito sin exigencias desmedidas.",
  },
  {
    id: "faq-9",
    category: "Formato, horarios y materiales",
    question: "¿Qué materiales incluye la iniciación?",
    answer:
      "La inscripción incluye el acceso a los 3 encuentros en vivo y sus grabaciones, el manual El ABC Akáshico (PDF), la bitácora de 21 días, 3 meditaciones guiadas en audio (sintonización matutina, encuentro con guías y frecuencia de sellado), la guía para tu altar personal, la plantilla del Mapa de Práctica Espiritual y la Masterclass especial sobre la Era de Acuario.",
  },
  {
    id: "faq-10",
    category: "Formato, horarios y materiales",
    question: "¿Cómo accedo a Circle y qué voy a encontrar allí?",
    answer:
      "Una vez confirmada tu inscripción, recibirás un correo con las instrucciones para ingresar a nuestro espacio privado en Circle. Allí tendrás centralizados los enlaces a las clases en vivo, las grabaciones, los materiales descargables y los foros de intercambio grupal.",
  },
  {
    id: "faq-11",
    category: "Formato, horarios y materiales",
    question: "¿Durante cuánto tiempo tengo acceso a los contenidos y grabaciones?",
    answer:
      "Tendrás acceso completo a las grabaciones y materiales dentro de Circle durante 3 meses posteriores a la finalización de la iniciación, para que puedas repasar los ejercicios y asentar el método a tus tiempos. (Nota: si formas parte de la membresía anual, mantienes el acceso a estos materiales durante todo tu período de suscripción activo).",
  },
  {
    id: "faq-12",
    category: "Continuidad, inscripción y condiciones",
    question:
      "¿Qué alternativas tengo si después quiero continuar en la membresía anual, o si prefiero sumarme a ambas desde hoy?",
    answer: (
      <div className="space-y-3">
        <p>
          La iniciación es una experiencia completa y cerrada en sí misma. Sin embargo, sabemos que muchas personas buscan un sostén continuo a lo largo del año. Por eso cuentas con dos caminos:
        </p>
        <ul className="list-disc pl-4 space-y-2">
          <li>
            <strong className="font-semibold text-text-primary">Si hoy compras solo la Iniciación ($150 USD):</strong> Tienes nuestro <em>Crédito a Favor</em>. Si hasta el <strong>31 de enero de 2027</strong> decides sumarte a la comunidad del Círculo Akáshico, se te reconoce el 100% de lo abonado y solo pagas la diferencia para activar tu pase anual.
          </li>
          <li>
            <strong className="font-semibold text-text-primary">Si prefieres resolver todo desde hoy:</strong> Al inscribirte directamente al <strong>Plan Anual del Círculo Akáshico ($324 USD)</strong>, esta Iniciación en Vivo de Enero te queda <strong>100% bonificada de regalo</strong>, asegurando además tus 12 meses de Updates mensuales, meditaciones de los jueves, workbooks y círculos terapéuticos.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "faq-13",
    category: "Continuidad, inscripción y condiciones",
    question: "¿Qué medios de pago están disponibles?",
    answer:
      "Las inscripciones se gestionan a través de la plataforma Hotmart. Al ingresar al enlace de pago, el sistema te mostrará automáticamente las opciones de pago habilitadas para tu país (tarjetas de crédito, débito y métodos locales disponibles).",
  },
  {
    id: "faq-14",
    category: "Continuidad, inscripción y condiciones",
    question: "¿Existe política de reembolso o garantía?",
    answer:
      "Tu compra está respaldada por la garantía estándar de 7 días corridos desde el momento de la transacción, gestionada de forma directa a través de Hotmart conforme a sus términos de servicio.",
  },
  {
    id: "faq-15",
    category: "Continuidad, inscripción y condiciones",
    question: "¿Qué hago si tengo dudas técnicas o inconvenientes con mi compra?",
    answer:
      "Si experimentas alguna dificultad con el proceso de pago o el acceso a la plataforma, puedes escribirnos al correo de contacto que figura al pie de esta página y te orientaremos para resolverlo a la brevedad.",
  },
];

export default function FAQAccordion({
  id = "faq",
  eyebrow = "Preguntas Frecuentes",
  title = "Antes de comenzar, despejemos tus dudas",
  subtitle = "Todo lo que necesitas saber sobre el método, los encuentros en vivo y el acompañamiento durante los 21 días.",
  cardTitle = "¿Quieres saber si esta iniciación es para ti?",
  cardSubtitle = "Escríbenos directamente antes de tomar tu decisión. Te orientamos con gusto.",
  items = DEFAULT_FAQS,
  defaultOpenId = "faq-1",
  className,
}: FAQAccordionProps) {
  if (!items || items.length === 0) return null;

  const groups = React.useMemo(() => {
    const map = new Map<string, FAQItem[]>();
    for (const item of items) {
      const cat = item.category ?? "";
      if (!map.has(cat)) {
        map.set(cat, []);
      }
      map.get(cat)!.push(item);
    }
    return Array.from(map.entries()).map(([category, groupItems]) => ({
      category,
      items: groupItems,
    }));
  }, [items]);

  return (
    <FAQKinematicWrapper>
      <section
        id={id}
        aria-labelledby={`${id}-heading`}
      className={cn(
        "w-full bg-surface-page py-24 lg:py-32 scroll-mt-20 border-t border-border-default",
        className
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Columna Izquierda: Encabezado + Tarjeta de Soporte */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-28 lg:self-start">
            {eyebrow && (
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold-700 mb-4 block font-semibold">
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

            {/* Tarjeta de Contacto Directo */}
            <div className="mt-8 rounded-2xl border border-border-default bg-surface-secondary/80 p-6 sm:p-7 shadow-xs flex flex-col gap-5">
              <div>
                <h3 className="font-display italic text-xl sm:text-2xl text-text-primary leading-snug">
                  {cardTitle}
                </h3>
                <p className="mt-1.5 font-body text-xs text-text-secondary leading-relaxed font-light">
                  {cardSubtitle}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {/* Canal 1: WhatsApp */}
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-surface-page border border-border-default hover:border-gold-500/70 hover:shadow-xs transition-all duration-200"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="relative shrink-0 w-11 h-11">
                      <div className="w-11 h-11 rounded-full overflow-hidden border border-border-default/60 shadow-2xs relative">
                        <Image
                          src="/tamara/Tamara1.jpg"
                          alt="Tamara"
                          fill
                          sizes="44px"
                          className="object-cover object-top"
                        />
                      </div>
                      <span
                        className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-surface-page shadow-xs"
                        aria-label="Disponible en línea"
                        title="Disponible en línea"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-sans font-semibold text-sm text-text-primary group-hover:text-gold-700 transition-colors">
                        WhatsApp
                      </span>
                      <span className="font-body text-xs text-text-secondary leading-snug font-light truncate">
                        ¿Tienes dudas? Escríbenos en tiempo real.
                      </span>
                    </div>
                  </div>
                  <div className="shrink-0 ml-2 w-8 h-8 rounded-full flex items-center justify-center text-gold-600 group-hover:bg-gold-500/10 group-hover:text-gold-700 transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>

                {/* Canal 2: Correo electrónico */}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="group flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-surface-page border border-border-default hover:border-gold-500/70 hover:shadow-xs transition-all duration-200"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-700 shrink-0 shadow-2xs group-hover:bg-gold-500/20 transition-colors">
                      <Mail className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-sans font-semibold text-sm text-text-primary group-hover:text-gold-700 transition-colors">
                        Correo electrónico
                      </span>
                      <span className="font-body text-xs text-text-secondary leading-snug font-light truncate">
                        {siteConfig.contact.email}
                      </span>
                    </div>
                  </div>
                  <div className="shrink-0 ml-2 w-8 h-8 rounded-full flex items-center justify-center text-gold-600 group-hover:bg-gold-500/10 group-hover:text-gold-700 transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              </div>

              <div className="pt-2 border-t border-border-default/50 text-center">
                <span className="text-[11px] font-body text-text-secondary/80 font-light">
                  Respuesta en pocas horas · Acompañamiento personal
                </span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Acordeón Agrupado por Bloques y Comprimido */}
          <div className="lg:col-span-7 w-full">
            <Accordion.Root
              defaultValue={defaultOpenId ? [defaultOpenId] : undefined}
              className="flex flex-col gap-6 w-full"
            >
              {groups.map((group, gIndex) => (
                <div key={group.category || `group-${gIndex}`} className="flex flex-col gap-2.5">
                  {group.category && (
                    <div data-faq-group className="flex items-center gap-3 pt-2 pb-0.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-400/25 text-gold-700 text-[11px] font-sans font-semibold tracking-wider uppercase shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                        {group.category}
                      </span>
                      <div className="h-px bg-border-default/50 flex-1" />
                    </div>
                  )}

                  <div className="flex flex-col gap-2">
                    {group.items.map((item, index) => {
                      const itemId = item.id ?? `${id}-item-${gIndex}-${index}`;

                      return (
                        <Accordion.Item
                          key={itemId}
                          value={itemId}
                          data-faq-item
                          className="group rounded-xl border border-border-default bg-surface-secondary/40 hover:bg-surface-secondary/70 data-open:bg-surface-secondary/85 data-open:border-gold-500/40 transition-colors duration-200 overflow-hidden"
                        >
                          <Accordion.Header className="w-full m-0 p-0">
                            <Accordion.Trigger
                              onClick={() => {
                                trackFaqAccordionToggle({
                                  faq_id: itemId,
                                  question: item.question,
                                  action: 'expand',
                                  section_id: id,
                                });
                              }}
                              className="w-full flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 text-left cursor-pointer select-none gap-3 sm:gap-4"
                            >
                              <span className="font-body font-semibold text-xs sm:text-[13px] text-text-primary leading-snug">
                                {item.question}
                              </span>

                              <span className="flex items-center justify-center shrink-0 w-5 h-5 text-gold-600 transition-transform duration-300 group-data-open:rotate-45">
                                <svg
                                  className="w-3.5 h-3.5"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                >
                                  <line x1="8" y1="2" x2="8" y2="14" stroke="currentColor" strokeWidth="1.75" />
                                  <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.75" />
                                </svg>
                              </span>
                            </Accordion.Trigger>
                          </Accordion.Header>

                          <Accordion.Panel className="grid grid-rows-[0fr] data-open:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                            <div className="overflow-hidden opacity-0 group-data-open:opacity-100 transition-opacity duration-300">
                              <div className="px-4 sm:px-5 pb-4 pt-1 text-xs text-text-secondary leading-relaxed font-body font-light">
                                {item.answer}
                              </div>
                            </div>
                          </Accordion.Panel>
                        </Accordion.Item>
                      );
                    })}
                  </div>
                </div>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </div>
    </section>
    </FAQKinematicWrapper>
  );
}
