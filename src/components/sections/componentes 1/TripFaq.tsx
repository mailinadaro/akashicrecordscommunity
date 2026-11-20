'use client';

import React, { useState } from 'react';
import SectionHeader from '@/components/ui/_SectionHeader';

export const TripFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: '¿Con cuánta anticipación conviene reservar?',
      a: 'Sugerimos iniciar las coordinaciones con un plazo de 30 a 60 días para asegurar disponibilidad en la agenda y optimizar la planificación.',
    },
    {
      q: '¿Cómo se maneja el ritmo ante los efectos de la altura en la Puna?',
      a: 'Los itinerarios se diseñan contemplando un ascenso progresivo, aunque la respuesta física varía en cada persona. Recomendamos consultas médicas previas si existen dudas de salud.',
    },
    {
      q: '¿Cuál es la política ante condiciones climáticas o caminos interrumpidos?',
      a: 'Se evalúan alternativas viales viables siempre que las condiciones de seguridad lo permitan. La prudencia operativa es el criterio principal ante cualquier eventualidad climática.',
    },
    {
      q: '¿Cuáles son las condiciones de reserva y cancelación?',
      a: 'La fecha se reserva mediante un anticipo formal. Las condiciones específicas de modificación, plazos y cancelación se detallan de forma transparente en la propuesta enviada.',
    },
  ];

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <SectionHeader
        subtitle="Dudas Frecuentes"
        title="Preguntas sobre la contratación y el viaje."
        alignment="center"
        className="mb-14"
      />

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="border-b border-border-default/60 pb-4 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="w-full text-left py-4 flex justify-between items-center text-earth-900 hover:text-ochre-600 transition-colors font-serif italic text-lg sm:text-xl font-normal gap-4 cursor-pointer"
              >
                <span>{faq.q}</span>
                <span className="text-ochre-500 font-mono text-xl shrink-0 font-light transition-transform duration-200">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && (
                <p className="font-body text-sm sm:text-base text-earth-700/80 font-light pt-1 pb-4 leading-relaxed max-w-3xl">
                  {faq.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
