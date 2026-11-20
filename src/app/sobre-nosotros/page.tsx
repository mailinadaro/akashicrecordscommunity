import React from 'react';
import AboutHero from '@/components/sections/about/AboutHero';
import FounderStory from '@/components/sections/about/FounderStory';
import TerritoryBond from '@/components/sections/about/TerritoryBond';
import TravelPhilosophy from '@/components/sections/about/TravelPhilosophy';
import HostRole from '@/components/sections/about/HostRole';
import LocalKnowledge from '@/components/sections/about/LocalKnowledge';
import TravelFormat from '@/components/sections/about/TravelFormat';
import Testimonials from '@/components/sections/about/Testimonials';
import BusinessModel from '@/components/sections/about/BusinessModel';
import AboutCTA from '@/components/sections/about/AboutCTA';

export default function AboutPage() {
  return (
    <main className="about-page w-full bg-warm-50 text-earth-950">
      {/* 01. Hero humano */}
      <AboutHero />

      {/* 02. Quién está detrás */}
      <FounderStory />

      {/* 03. La relación con Jujuy */}
      <TerritoryBond />

      {/* 04. Cómo entiende el viaje */}
      <TravelPhilosophy />

      {/* 05. Qué significa ser anfitrión */}
      <HostRole />

      {/* 06. El conocimiento que no aparece en el mapa */}
      <LocalKnowledge />

      {/* 07. La forma de viajar */}
      <TravelFormat />

      {/* 08. Prueba social */}
      <Testimonials />

      {/* 09. Por qué elegimos trabajar así */}
      <BusinessModel />

      {/* 10. CTA final */}
      <AboutCTA />
    </main>
  );
}