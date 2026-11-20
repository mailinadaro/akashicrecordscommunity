import React from "react";
import Image from "next/image";
import Link from "next/link";

export const TripHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-earth-950 text-warm-50 px-6 py-24 overflow-hidden">
      {/* Fondo fotográfico */}
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/viajes-a-medida.jpg"
          alt="Paisaje del territorio jujeño"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Gradiente cinemático editorial */}
      <div className="absolute inset-0 bg-linear-to-b from-earth-950/80 via-earth-900/50 to-earth-950" />

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-ochre-500 font-semibold block mb-4">
          Viajes privados a medida por Jujuy
        </span>
        <h1 className="font-serif italic text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-warm-50 mb-6 leading-tight">
          Jujuy, a tu ritmo y con alguien que conoce el territorio.
        </h1>
        <p className="font-body text-base sm:text-lg md:text-xl text-warm-50/80 max-w-2xl mx-auto font-light leading-relaxed mb-10">
          Diseñamos el recorrido según tus intereses, los días disponibles y la
          forma en que querés viajar. Sergio te acompaña al volante y comparte su
          conocimiento de Jujuy durante el camino.
        </p>
        <Link
          href="#contacto"
          className="inline-block bg-ochre-500 hover:bg-ochre-600 text-earth-950 px-8 py-4 text-xs font-mono font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl"
        >
          Solicitar una propuesta para mi viaje
        </Link>
      </div>
    </section>
  );
};
