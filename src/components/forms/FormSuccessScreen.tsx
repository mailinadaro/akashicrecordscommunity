'use client';

import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { trackContactChannelClick } from '@/lib/analytics';

const WHATSAPP_FOLLOWUP_URL =
  'https://api.whatsapp.com/send?phone=+2804292490&text=%C2%A1Hola!%20Acabo%20de%20enviar%20una%20consulta%20desde%20la%20web%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20mi%20viaje%20a%20Jujuy.%20%C2%BFPodemos%20continuar%20por%20ac%C3%A1?';

export default function FormSuccessScreen() {
  const handleWhatsAppClick = () => {
    trackContactChannelClick({
      channel: 'whatsapp',
      click_location: 'success_screen',
      inquiry_context: 'post_lead_followup',
      target_url: WHATSAPP_FOLLOWUP_URL,
    });
  };

  return (
    <div className="py-8 flex flex-col items-center text-center gap-6">
      <div data-step-header className="flex flex-col items-center gap-4 max-w-lg">
        <div className="text-ochre-500">
          <CheckCircle2 className="w-12 h-12" />
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ochre-400 font-semibold">
            CONSULTA RECIBIDA
          </span>

          <h3 className="text-3xl md:text-4xl font-serif italic text-warm-50 font-normal">
            Gracias por escribirnos.
          </h3>

          <p className="text-warm-50/75 text-sm md:text-base font-light leading-relaxed mt-1">
            Recibimos tu solicitud para viajar a Jujuy. Analizaremos tus fechas y preferencias
            para responderte a la brevedad.
          </p>
        </div>
      </div>

      <div data-step-item className="w-full max-w-lg border-t border-dashed border-white/15 pt-6 text-left">
        <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-warm-50/90 font-semibold mb-2">
          Próximos Pasos
        </h4>
        <p className="text-warm-50/70 text-sm font-light leading-relaxed">
          Nos comunicaremos directamente vía WhatsApp o correo electrónico para coordinar detalles y disponibilidad.
        </p>
      </div>

      <div data-step-footer className="flex flex-col gap-4 w-full max-w-lg mt-4">
        <Link
          href="/excursiones"
          className="w-full py-4 px-8 bg-ochre-500 hover:bg-warm-50 text-earth-950 transition-all duration-300 text-xs font-semibold tracking-[0.25em] uppercase text-center flex items-center justify-center gap-3 shadow-xl rounded-none cursor-pointer"
        >
          Explorar las excursiones
        </Link>

        <div className="text-center pt-2">
          <p className="text-warm-50/60 text-xs mb-2">¿Prefieres coordinar ahora mismo?</p>
          <Link
            href={WHATSAPP_FOLLOWUP_URL}
            onClick={handleWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono uppercase tracking-widest text-warm-50 underline underline-offset-4 hover:text-ochre-400 transition-colors"
          >
            Escríbenos por WhatsApp →
          </Link>
        </div>
      </div>
    </div>
  );
}
