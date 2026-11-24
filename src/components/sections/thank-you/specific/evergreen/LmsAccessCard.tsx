import React from "react";
import { KeyRound, ExternalLink, ShieldCheck, Mail, ArrowRight } from "lucide-react";

export interface LmsAccessCardProps {
  platformName?: string;
  loginUrl?: string;
  userEmail?: string;
  notice?: string;
  className?: string;
}

export default function LmsAccessCard({
  platformName = "Portal de Alumnos en Circle",
  loginUrl = "https://circle.so",
  userEmail,
  notice = "Tu contraseña temporal fue enviada a tu correo. Al ingresar por primera vez, el sistema te solicitará crear una nueva clave personal.",
  className = "",
}: LmsAccessCardProps) {
  return (
    <div className={`w-full max-w-4xl mx-auto py-6 px-4 ${className}`}>
      <div className="rounded-3xl bg-surface-page border border-border-default/90 p-6 sm:p-9 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-400/25 text-gold-800 text-[10px] font-sans uppercase tracking-widest font-semibold mb-3">
              <KeyRound className="w-3.5 h-3.5 text-gold-600" />
              <span>Acceso Inmediato a tus Clases</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl text-plum-950 font-normal leading-tight mb-2">
              Ingresa al {platformName}
            </h3>

            <p className="font-body text-xs sm:text-sm text-plum-600 font-light leading-relaxed max-w-lg mb-4">
              {notice}
            </p>

            {userEmail && (
              <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-body text-plum-700 bg-surface-secondary/70 p-3 rounded-xl border border-border-default/60">
                <Mail className="w-4 h-4 text-gold-700" />
                <span>Usuario registrado: <strong className="font-semibold text-plum-950">{userEmail}</strong></span>
              </div>
            )}
          </div>

          <div className="shrink-0 flex flex-col items-center w-full sm:w-auto">
            <a
              href={loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-plum-950 font-sans text-xs font-bold uppercase tracking-[0.16em] transition-all duration-300 shadow-md shadow-gold-500/20 cursor-pointer"
            >
              <span>INICIAR SESIÓN EN EL CAMPUS</span>
              <ExternalLink className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
            </a>
            <span className="text-[10px] font-body text-plum-500 mt-2">
              Plataforma disponible 24/7 en móvil y desktop
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
