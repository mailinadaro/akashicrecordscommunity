import React from 'react';
import FinalCTA from '@/components/sections/excursiones/FinalCTA';

export default function AboutCTA() {
  return (
    <FinalCTA
      tagline="Una forma de conocer Jujuy"
      title="Conversemos sobre tu viaje."
      subtitle="Si esta manera de recorrer Jujuy se acerca a lo que estás buscando, podemos conversar sobre las excursiones privadas disponibles o sobre un viaje a tu medida. Contame qué tenés en mente."
      buttonLabel="Conversemos sobre tu viaje"
      buttonHref="/contacto"
      secondaryButtonLabel="Explorar las excursiones privadas"
      secondaryButtonHref="/excursiones"
      bgImage="/generales/pexels-diego-giron-464799823-31634399.jpg"
    />
  );
}