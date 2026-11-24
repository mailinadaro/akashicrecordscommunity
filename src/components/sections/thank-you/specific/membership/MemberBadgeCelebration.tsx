import React from "react";
import { Sparkles, Award, Shield, CheckCircle } from "lucide-react";

export interface MemberBadgeCelebrationProps {
  memberName?: string;
  badgeTitle?: string;
  year?: string;
  communityTier?: string;
  className?: string;
}

export default function MemberBadgeCelebration({
  memberName = "Caminante del Alma",
  badgeTitle = "Miembro Oficial · Pase Anual 2027",
  year = "2027",
  communityTier = "Iniciación Bonificada + Membresía Activa",
  className = "",
}: MemberBadgeCelebrationProps) {
  return (
    <div className={`w-full max-w-4xl mx-auto py-6 px-4 ${className}`}>
      <div className="rounded-3xl bg-gradient-to-b from-[#fdfbf7] via-surface-page to-[#faf8f5] border-2 border-gold-500/50 p-6 sm:p-8 text-center shadow-md shadow-gold-900/10">
        <div className="w-16 h-16 rounded-full bg-gold-500 text-plum-950 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-gold-500/30">
          <Award className="w-8 h-8 stroke-[2]" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gold-500/15 border border-gold-400/30 text-[10px] font-sans uppercase tracking-[0.2em] font-bold text-gold-800 mb-2">
          <Sparkles className="w-3 h-3 text-gold-700" />
          <span>Acceso Total Otorgado</span>
        </div>

        <h3 className="font-display italic text-2xl sm:text-3xl text-plum-950 font-normal mb-1">
          {badgeTitle}
        </h3>

        <p className="font-sans text-xs uppercase tracking-wider text-gold-700 font-semibold mb-4">
          {communityTier}
        </p>

        <p className="font-body text-xs sm:text-sm text-plum-600 font-light max-w-lg mx-auto leading-relaxed">
          Has tomado la decisión más sabia para sostener tu frecuencia durante todo {year}. Tu cuenta ya cuenta con privilegios de alumna activa en Circle.
        </p>
      </div>
    </div>
  );
}
