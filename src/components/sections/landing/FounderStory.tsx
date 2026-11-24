import React from "react";
import SplitContentSection from "@/components/sections/globales/SplitContentSection";

export interface FounderStoryProps {
  id?: string;
  eyebrow?: string;
  heading?: string;
  description?: React.ReactNode;
  image?: string;
  className?: string;
}

export default function FounderStory({
  id = "tamara",
  eyebrow = "Conoce a Tamara",
  heading = "Una guía cercana en tu camino de regreso al alma.",
  description,
  image = "/tamara/tamara3.JPG",
  className = "",
}: FounderStoryProps) {
  const defaultDescription = (
    <div className="space-y-4 text-plum-600 font-body leading-relaxed font-light text-base">
      <p>
        Los Registros Akáshicos no son un conocimiento reservado para unos pocos elegidos. Son la memoria viva de tu propia alma, un campo de información sutil al que todos tenemos la capacidad innata de acceder cuando aprendemos a aquietar la mente y sintonizar con el corazón.
      </p>
      <p>
        A lo largo de los años he acompañado a cientos de buscadores espirituales a trascender la duda y el miedo al error, ofreciendo un método estructurado, amoroso y libre de dogmas para canalizar con total autonomía y discernimiento.
      </p>
      <a
        href="https://youtu.be/knu33taErhQ?si=LXvFijxRVMe-SFpa&t=27"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver video del testimonio de una participante"
        className="block my-4"
      >
        <blockquote className="border-l-2 border-gold-500 pl-4 italic text-plum-950 font-display text-lg sm:text-xl transition-colors duration-300 hover:text-gold-700">
          &ldquo;Me ha gustado mucho la forma en que Tamara lleva el curso, de una manera muy suave, muy natural, muy orgánica, muy profunda y entendible para todos.&rdquo;
        </blockquote>
      </a>
      <p>
        Mi compromiso en esta iniciación es brindarte las herramientas, el cuidado energético y la contención comunitaria para que hagas de esta conexión una práctica diaria viva y transformadora.
      </p>
    </div>
  );

  return (
    <SplitContentSection
      id={id}
      eyebrow={eyebrow}
      heading={heading}
      headingClassName="font-display italic text-3xl md:text-4xl lg:text-5xl text-plum-950 tracking-tight leading-tight"
      description={description ?? defaultDescription}
      image={image}
      imagePosition="right"
      imageObjectPosition="center 20%"
      theme="light"
      className={className}
    />
  );
}
