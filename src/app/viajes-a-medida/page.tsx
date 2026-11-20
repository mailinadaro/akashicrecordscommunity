import React from 'react';
import { TripHero } from '@/components/sections/viajes-a-medida/TripHero';
import { TripExamples } from '@/components/sections/viajes-a-medida/TripExamples';
import { FounderAuthority } from '@/components/sections/viajes-a-medida/FounderAuthority';
import { TripFaq } from '@/components/sections/viajes-a-medida/TripFaq';
import { TripProblemReframe } from '@/components/sections/viajes-a-medida/TripProblemReframe';
import { CustomDefinition } from '@/components/sections/viajes-a-medida/CustomDefinition';
import { TripPersonalization } from '@/components/sections/viajes-a-medida/TripPersonalization';
import { AudienceFilter } from '@/components/sections/viajes-a-medida/AudienceFilter';
import { TripProcess } from '@/components/sections/viajes-a-medida/TripProcess';
import { ServiceScope } from '@/components/sections/viajes-a-medida/ServiceScope';
import { PricingLogic } from '@/components/sections/viajes-a-medida/PricingLogic';
import { DecisionTools } from '@/components/sections/viajes-a-medida/DecisionTools';
import { TripContactForm } from '@/components/sections/viajes-a-medida/TripContactForm';

export default function CustomTripPage() {
  return (
    <main className="bg-neutral-50 text-neutral-900 selection:bg-neutral-900 selection:text-white">
      <TripHero />
      <TripProblemReframe />
      <CustomDefinition />
      <TripExamples />
      <TripPersonalization />
      <AudienceFilter />
      <TripProcess />
      <FounderAuthority />
      <ServiceScope />
      <PricingLogic />
      <DecisionTools />
      <TripFaq />
      {/* Sección 13: CTA Final y Formulario */}
      <section id="contacto" className="py-24 px-6 bg-neutral-900 text-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 block mb-3">Una forma de conocer Jujuy</span>
            <h2 className="text-3xl md:text-4xl font-light mb-4">Empecemos a conversar sobre tu viaje.</h2>
            <p className="text-neutral-300 font-light text-sm">
              Revisaremos tus fechas, el recorrido que tenés en mente y la disponibilidad. Después nos pondremos en contacto para conversar sobre las posibilidades.
            </p>
          </div>
          <TripContactForm />
        </div>
      </section>
    </main>
  );
}