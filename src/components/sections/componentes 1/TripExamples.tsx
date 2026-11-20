import React from "react";
import SectionHeader from "@/components/ui/_SectionHeader";

export const TripExamples = () => {
  return (
    <section className="py-24 px-6 bg-surface-secondary/40 border-y border-border-default/60">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Dos ejemplos de cómo estructuramos la experiencia."
          subtitle="Itinerarios de Referencia"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Opción 01 */}
          <div className="bg-surface-page p-8 sm:p-10 rounded-none border border-border-default shadow-xs">
            <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-ochre-500 uppercase tracking-[0.25em] block mb-3">
              Opción 01 · 5 Días
            </span>
            <h3 className="font-serif italic text-2xl font-normal mb-6 text-earth-900 leading-tight">
              La esencia pausada de la Quebrada y la Puna
            </h3>
            <div className="space-y-5 font-body text-sm text-earth-700/85 font-light leading-relaxed">
              <div>
                <strong className="font-medium text-earth-900 block mb-1">
                  Recorrido base:
                </strong>
                <p>
                  Tomando como base Tilcara o Purmamarca, organizamos las salidas hacia los
                  puntos clave de la Quebrada y una excursión planificada a Salinas
                  Grandes cruzando la Cuesta de Lipán.
                </p>
              </div>
              <div className="pt-4 border-t border-border-default/50">
                <strong className="font-medium text-earth-900 block mb-1">
                  Por qué está organizado así:
                </strong>
                <p>
                  Este esquema evita el desgaste de cambiar permanentemente de
                  alojamiento, reduciendo las horas acumuladas de carretera y reservando
                  tiempo para hacer pausas reales en los puntos clave.
                </p>
              </div>
            </div>
          </div>

          {/* Opción 02 */}
          <div className="bg-surface-page p-8 sm:p-10 rounded-none border border-border-default shadow-xs">
            <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-ochre-500 uppercase tracking-[0.25em] block mb-3">
              Opción 02 · 7 Días
            </span>
            <h3 className="font-serif italic text-2xl font-normal mb-6 text-earth-900 leading-tight">
              Los horizontes del Norte profundo
            </h3>
            <div className="space-y-5 font-body text-sm text-earth-700/85 font-light leading-relaxed">
              <div>
                <strong className="font-medium text-earth-900 block mb-1">
                  Recorrido base:
                </strong>
                <p>
                  Un circuito amplio que conecta la Quebrada con pueblos históricos de la
                  Puna (como Humahuaca o Abra Pampa) y tramos del altiplano, estructurado con
                  pernoctes estratégicos.
                </p>
              </div>
              <div className="pt-4 border-t border-border-default/50">
                <strong className="font-medium text-earth-900 block mb-1">
                  Por qué está organizado así:
                </strong>
                <p>
                  Permite absorber la inmensidad del territorio con jornadas
                  equilibradas, priorizando tramos lógicos de conducción y un descanso
                  adecuado entre las zonas de mayor altitud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
