import React from 'react';
import SplitContentSection from '@/components/sections/globales/SplitContentSection';

export default function LocalKnowledge() {
  return (
    <SplitContentSection
      id="autoridad"
      eyebrow="06. Autoridad"
      heading="Interpretar el paisaje, no solo mirarlo."
      headingClassName="font-serif italic font-light text-3xl md:text-4xl lg:text-5xl text-warm-50 tracking-tight leading-tight"
      description={
        <>
          <p>
            Un mapa muestra caminos y distancias. Pero conocer un territorio implica comprender cómo se relacionan sus paisajes, su historia y las personas que lo habitan.
          </p>
          <p>
            La Puna, la Quebrada y los valles ofrecen distintas maneras de acercarse a la provincia. Mi intención es poner en contexto lo que vemos y prestar atención a detalles que pasarían desapercibidos en un recorrido estándar.
          </p>
        </>
      }
      image="/generales/pexels-leo-willians-789496294-19314777.jpg"
      imagePosition="left"
      imageObjectPosition="center"
      imageScale="scale-100"
      theme="dark"
    />
  );
}