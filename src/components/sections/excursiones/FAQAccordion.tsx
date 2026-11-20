"use client";

import { Accordion } from "@base-ui/react/accordion";
import { cn } from "@/lib/utils";
import { trackFaqAccordionToggle } from "@/lib/analytics";

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



export default function FAQAccordion({
  id = "faq",
  eyebrow,
  title = "Dudas Frecuentes, Aclaradas",
  subtitle,
  items,
  defaultOpenId,
  className,
}: FAQAccordionProps) {
  if (!items || items.length === 0) return null;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "w-full bg-surface-page py-28 lg:py-50 scroll-mt-20 border-t border-border-default/40",
        className
      )}
    >
      {/* Contenedor exacto 1320px en desktop con 60px de margen natural */}
      <div className="w-full max-w-350 mx-auto px-6 sm:px-10 lg:px-0">
        {/* Grilla 50/50 equilibrada: 6 cols / 6 cols sin gap forzado */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-0 items-start">
          
          {/* Columna Izquierda: Silencio y presencia editorial pura */}
          <div className="lg:col-span-6 flex flex-col justify-start lg:pr-12">
            {eyebrow && (
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-ochre-500 mb-4 block font-medium">
                {eyebrow}
              </span>
            )}
            <h2
              id={`${id}-heading`}
              className="font-display italic text-2xl sm:text-3xl lg:text-[32px] text-earth-900 leading-[1.2] tracking-display font-normal"
            >
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 font-body text-body-md text-earth-700/80 leading-relaxed max-w-[42ch]">
                {subtitle}
              </p>
            )}
          </div>

          {/* Columna Derecha: Tarjetas de 660px de ancho con gap exacto de 5px */}
          <div className="lg:col-span-6 w-full mt-10 lg:mt-0">
            <Accordion.Root
              defaultValue={defaultOpenId ? [defaultOpenId] : undefined}
              className="flex flex-col gap-1.25 w-full rounded-[5px] overflow-hidden"
            >
              {items.map((item, index) => {
                const itemId = item.id ?? `${id}-item-${index}`;

                return (
                  <Accordion.Item
                    key={itemId}
                    value={itemId}
                    className="group rounded-none border-none bg-warm-100/75 hover:bg-warm-100 data-open:bg-warm-100 transition-colors duration-200 overflow-hidden"
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
                      className="w-full flex items-center justify-between px-6 py-6 md:px-10 md:py-7.5 text-left cursor-pointer select-none gap-6 focus-visible:outline-1 focus-visible:outline-earth-900 min-h-20.5"
                    >
                      <span className="font-sans text-[16px] md:text-[18px] uppercase tracking-[0.02em] font-medium text-earth-900 leading-[1.2]">
                        {item.question}
                      </span>

                      {/* Icono de cruz geométrica 18x18 con rotación limpia de 45deg */}
                      <span className="flex items-center justify-center shrink-0 w-6 h-6 text-earth-900 transition-transform duration-300 ease-[cubic-bezier(0.5,1,0.89,1)] group-data-open:rotate-45">
                        <svg
                          className="w-4.5 h-4.5"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <line
                            x1="8"
                            y1="1"
                            x2="8"
                            y2="15"
                            stroke="currentColor"
                            strokeWidth="1.2"
                          />
                          <line
                            x1="1"
                            y1="8"
                            x2="15"
                            y2="8"
                            stroke="currentColor"
                            strokeWidth="1.2"
                          />
                        </svg>
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>

                  <Accordion.Panel className="grid grid-rows-[0fr] data-open:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.5,1,0.89,1)]">
                    <div className="overflow-hidden opacity-0 group-data-open:opacity-100 transition-opacity duration-300">
                      <div className="px-6 pb-6 md:px-10 md:pb-7.5 pt-0 text-[14px] md:text-[14.5px] text-earth-700 leading-[1.55] font-body max-w-[56ch]">
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