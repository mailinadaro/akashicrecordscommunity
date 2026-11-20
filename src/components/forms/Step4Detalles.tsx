'use client';

import { useFormContext } from 'react-hook-form';
import { ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';
import { ContactFormData } from '@/lib/schemas/contact';

interface Step4DetallesProps {
  onBack: () => void;
  isLoading: boolean;
}

export default function Step4Detalles({ onBack, isLoading }: Step4DetallesProps) {
  const { register, watch, setValue } = useFormContext<ContactFormData>();

  const intencionActual = watch('intencion');
  const excursionSeleccionada = watch('excursionInteres');
  const detallesAdicionalesActual = watch('detallesAdicionales');

  return (
    <div className="space-y-10">
      {/* CABECERA DEL PASO */}
      <div data-step-header className="space-y-3">
        <h3 className="text-3xl sm:text-4xl font-serif italic text-warm-50 font-normal tracking-wide leading-tight">
          Detalles del Viaje
        </h3>
        <p className="text-sm sm:text-base text-warm-50/70 font-light leading-relaxed max-w-lg">
          Cuéntanos cualquier preferencia o requerimiento especial para afinar la expedición.
        </p>
      </div>

      {/* CASO A: Excursión Privada */}
      {intencionActual === 'excursion-privada' && (
        <div className="space-y-8">
          <div data-step-item className="space-y-3">
            <span className="font-serif italic text-warm-50 text-base md:text-lg block">
              ¿Hay algún excursión que te interese en particular?
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Salinas Grandes + Purmamarca',
                'Maimará + Tilcara',
                'Humahuaca + Hornocal',
                'City Tour- San Salvador de Jujuy',
                'Carnaval 2027',
                'Semana Santa 2027',
              ].map((exc) => {
                const isSelected = excursionSeleccionada === exc;
                return (
                  <button
                    key={exc}
                    type="button"
                    onClick={() => setValue('excursionInteres', exc)}
                    className={`min-h-[64px] px-5 py-4 text-left font-serif tracking-wide text-sm sm:text-base transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer flex items-center justify-between rounded-none border ${
                      isSelected
                        ? 'border-ochre-400 bg-ochre-500/15 text-warm-50 ring-1 ring-ochre-500/60 shadow-lg'
                        : 'border-white/15 bg-white/[0.02] text-warm-50 hover:bg-white/[0.06] hover:border-white/30'
                    }`}
                  >
                    <span>{exc}</span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 bg-ochre-500 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div data-step-item className="space-y-2 pt-2">
            <div className="relative pt-2 pb-3 border-b border-white/20 focus-within:border-b-ochre-400 transition-colors duration-300">
              <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-ochre-400/80 mb-2 block select-none">
                Comentarios o requerimientos (Opcional)
              </label>
              <textarea
                rows={3}
                placeholder="Ej.: Viajamos con niños, preferimos un ritmo pausado de caminata, etc."
                {...register('detallesAdicionales')}
                className="w-full bg-transparent text-warm-50 placeholder:text-warm-50/25 text-sm sm:text-base font-light focus:outline-none resize-none py-1"
              />
            </div>
          </div>
        </div>
      )}

      {/* CASO B: Viaje a Medida */}
      {intencionActual === 'viaje-a-medida' && (
        <div data-step-item className="space-y-4">
          <div className="relative pt-2 pb-3 border-b border-white/20 focus-within:border-b-ochre-400 transition-colors duration-300">
            <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-ochre-400/80 mb-2 block select-none">
              Lugares de interés, duración aproximada o estilo de viaje
            </label>
            <textarea
              rows={4}
              placeholder="Cuéntanos lugares que te interesan, ritmo de viaje o lo que imaginas para tu experiencia..."
              {...register('detallesAdicionales')}
              className="w-full bg-transparent text-warm-50 placeholder:text-warm-50/25 text-sm sm:text-base font-light focus:outline-none resize-none py-1"
            />
          </div>
        </div>
      )}

      {/* CASO C: Explorando Opciones */}
      {intencionActual === 'explorando-opciones' && (
        <div data-step-item className="space-y-4">
          <span className="font-serif italic text-warm-50 text-base md:text-lg block">
            ¿Qué te gustaría encontrar en este momento?
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Quiero conocer las excursiones',
              'Necesito orientación general',
              'Estoy comparando opciones',
              'Aún no tengo definido el viaje',
            ].map((opt) => {
              const isSelected = detallesAdicionalesActual === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setValue('detallesAdicionales', opt)}
                  className={`min-h-[64px] px-5 py-4 text-left font-serif tracking-wide text-sm sm:text-base transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer flex items-center justify-between rounded-none border ${
                    isSelected
                      ? 'border-ochre-400 bg-ochre-500/15 text-warm-50 ring-1 ring-ochre-500/60 shadow-lg'
                      : 'border-white/15 bg-white/[0.02] text-warm-50 hover:bg-white/[0.06] hover:border-white/30'
                  }`}
                >
                  <span>{opt}</span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 bg-ochre-500 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* BARRA DE NAVEGACIÓN Y BOTÓN FINAL OCRE */}
      <div data-step-footer className="border-t border-white/10 pt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-2 py-3 text-warm-50/60 hover:text-warm-50 font-mono text-xs uppercase tracking-[0.2em] font-semibold flex items-center gap-2 transition-colors cursor-pointer rounded-none"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Atrás</span>
        </button>

        {/* BOTÓN ENVIAR CONSULTA */}
        <button
          type="submit"
          disabled={isLoading}
          className="bg-ochre-500 hover:bg-warm-50 text-earth-950 transition-all duration-300 py-4 px-8 text-xs font-semibold tracking-[0.25em] uppercase text-center flex items-center justify-center gap-3 shadow-xl rounded-none cursor-pointer disabled:opacity-50 active:scale-[0.99]"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-earth-950" />
              <span>Enviando Solicitud...</span>
            </>
          ) : (
            <>
              <span>Enviar Consulta</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
