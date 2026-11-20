'use client';

import { useFormContext } from 'react-hook-form';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { ContactFormData } from '@/lib/schemas/contact';

interface Step3ContactoProps {
  onNext: () => void;
  onBack: () => void;
}

export default function Step3Contacto({ onNext, onBack }: Step3ContactoProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<ContactFormData>();
  const telefonoField = register('telefono');

  return (
    <div className="space-y-10">
      {/* CABECERA DEL PASO */}
      <div data-step-header className="space-y-3">
        <h3 className="text-3xl sm:text-4xl font-serif italic text-warm-50 font-normal tracking-wide leading-tight">
          Información de Contacto
        </h3>
        <p className="text-sm sm:text-base text-warm-50/70 font-light leading-relaxed max-w-lg">
          Compártenos tus datos para responderte con una propuesta de expedición.
        </p>
      </div>

      <div className="space-y-6">
        {/* NOMBRE */}
        <div data-step-item className="space-y-1">
          <div className="relative pt-2 pb-3 border-b border-white/20 focus-within:border-b-ochre-400 transition-colors duration-300">
            <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-ochre-400/80 mb-2 block select-none">
              Nombre Completo *
            </label>
            <input
              type="text"
              placeholder="Tu nombre y apellido"
              {...register('nombre')}
              className="w-full bg-transparent text-warm-50 placeholder:text-warm-50/25 text-base sm:text-lg font-light focus:outline-none py-1"
            />
          </div>
          {errors.nombre && (
            <span className="text-xs text-state-error font-mono">{errors.nombre.message}</span>
          )}
        </div>

        {/* CIUDAD */}
        <div data-step-item className="space-y-1">
          <div className="relative pt-2 pb-3 border-b border-white/20 focus-within:border-b-ochre-400 transition-colors duration-300">
            <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-ochre-400/80 mb-2 block select-none">
              ¿Desde qué ciudad nos visitas? *
            </label>
            <input
              type="text"
              placeholder="Ciudad de residencia / origen"
              autoComplete="address-level2"
              {...register('ciudad')}
              className="w-full bg-transparent text-warm-50 placeholder:text-warm-50/25 text-base sm:text-lg font-light focus:outline-none py-1"
            />
          </div>
          {errors.ciudad && (
            <span className="text-xs text-state-error font-mono">{errors.ciudad.message}</span>
          )}
        </div>

        {/* EMAIL & WHATSAPP EN 2 COLUMNAS */}
        <div data-step-item className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <div className="relative pt-2 pb-3 border-b border-white/20 focus-within:border-b-ochre-400 transition-colors duration-300">
              <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-ochre-400/80 mb-2 block select-none">
                Correo Electrónico *
              </label>
              <input
                type="email"
                placeholder="tu@email.com"
                {...register('email')}
                className="w-full bg-transparent text-warm-50 placeholder:text-warm-50/25 text-base sm:text-lg font-light focus:outline-none py-1"
              />
            </div>
            {errors.email && (
              <span className="text-xs text-state-error font-mono">{errors.email.message}</span>
            )}
          </div>

          <div className="space-y-1">
            <div className="relative pt-2 pb-3 border-b border-white/20 focus-within:border-b-ochre-400 transition-colors duration-300">
              <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-ochre-400/80 mb-2 block select-none">
                WhatsApp / Teléfono *
              </label>
              <input
                type="tel"
                placeholder="9 11 1234-5678"
                autoComplete="tel"
                {...telefonoField}
                onChange={(event) => {
                  const value = event.target.value.trimStart();

                  if (value && !value.startsWith('+')) {
                    event.target.value = `+54 ${value}`;
                  }

                  telefonoField.onChange(event);
                }}
                className="w-full bg-transparent text-warm-50 placeholder:text-warm-50/25 text-base sm:text-lg font-light focus:outline-none py-1"
              />
            </div>
            {errors.telefono && (
              <span className="text-xs text-state-error font-mono">{errors.telefono.message}</span>
            )}
          </div>
        </div>
      </div>

      {/* BARRA DE NAVEGACIÓN */}
      <div data-step-footer className="border-t border-white/10 pt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-2 py-3 text-warm-50/60 hover:text-warm-50 font-mono text-xs uppercase tracking-[0.2em] font-semibold flex items-center gap-2 transition-colors cursor-pointer rounded-none"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Atrás</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="bg-ochre-500 hover:bg-warm-50 text-earth-950 transition-all duration-300 py-4 px-8 text-xs font-semibold tracking-[0.25em] uppercase text-center flex items-center justify-center gap-3 shadow-xl rounded-none cursor-pointer active:scale-[0.99]"
        >
          <span>Siguiente</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
