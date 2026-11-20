import React from 'react';

export default function TerritoryBond() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-warm-100 border-y border-earth-900/10">
      <div className="max-w-3xl mx-auto text-center">
        <span className="w-1.5 h-1.5 bg-ochre-500 rotate-45 block mx-auto mb-4" aria-hidden="true" />
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-ochre-500 font-semibold block mb-3">
          03. Vínculo
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic font-light text-earth-950 mb-8 leading-snug tracking-tight">
          Un territorio que siempre tiene algo más para contar.
        </h2>
        <div className="space-y-6 text-earth-800 text-base md:text-lg font-light leading-relaxed">
          <p>
            Jujuy no se agota en sus paisajes más conocidos. Cada región tiene sus formas, sus historias y sus maneras de vivir, y requerir conocerlas implica mirar más allá de lo que aparece a primera vista.
          </p>
          <p>
            Esa relación es el punto de partida de lo que comparto con cada viajero: no una mirada distante sobre un destino, sino una manera personal de acercarse a Jujuy, respetando su identidad y reconociendo que siempre queda algo por descubrir.
          </p>
        </div>
      </div>
    </section>
  );
}