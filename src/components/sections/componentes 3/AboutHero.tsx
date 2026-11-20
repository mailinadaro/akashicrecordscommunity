import React from 'react';
import HeroFullWindow from '@/components/sections/componentes 2/HeroFullWindow';

export default function AboutHero() {
  return (
    <HeroFullWindow
      title="Una manera personal de conocer el territorio."
      subtitle="Jujuy se descubre en sus paisajes, pero también en sus historias, sus pueblos y los caminos que los conectan. Queremos compartir esa mirada a través de recorridos privados, con tiempo para observar, conversar y conocer cada lugar más allá de lo evidente."
      priceTag="Jujuy, contado desde adentro"
      backgroundImage="/nosotros/guia-sergio-adaro.jpg"
      priority={true}
    />
  );
}