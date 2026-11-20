import React from 'react';
import SplitContentSection from '@/components/sections/globales/SplitContentSection';

export default function FounderStory() {
  return (
    <SplitContentSection
      id="identidad"
      eyebrow="02. Identidad"
      heading="Una vida vinculada a Jujuy."
      headingClassName="font-serif italic font-light text-3xl md:text-4xl lg:text-5xl text-earth-950 tracking-tight leading-tight"
      description={
        <>
          <p>
            Soy Sergio. Soy trabajador social y llevo más de cuarenta años vinculado a Jujuy, una provincia que forma parte de mi historia y de mi manera de entender el territorio y a las personas que lo habitan.
          </p>
          <p>
            A lo largo de estos años, por motivos profesionales, personales y culturales, fui conociendo sus paisajes, sus pueblos y las distintas realidades que conviven en ellos. Ese recorrido fue construyendo una relación con la provincia que va más allá de conocer sus caminos.
          </p>
          <p>
            Acompañar viajeros es, para mí, una forma de abrir esa puerta y compartir aquello que aprendí a valorar a lo largo del tiempo.
          </p>
        </>
      }
      image="/nosotros/sergio-retrato-03.jpg"
      imagePosition="right"
      imageObjectPosition="center 20%"
      imageScale="scale-100"
      theme="light"
    />
  );
}