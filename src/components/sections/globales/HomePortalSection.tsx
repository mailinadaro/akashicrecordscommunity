import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

const AKASHIC_MAIN_URL = "https://www.akashicrecordscommunity.com";

export default function HomePortalSection() {
  return (
    <section
      aria-labelledby="home-akashic-heading"
      className="relative w-full min-h-[84svh] flex items-center justify-center overflow-hidden bg-plum-950 text-white px-4 py-16 sm:px-6 sm:py-24"
    >
      {/* Fondo atmosférico alineado con la identidad visual de Akashic Records Community */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/entre%20ciclos/Screenshot_2026-11-20_175636.png_b58ab2ce_2K.jpg"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#160522]/80 via-plum-950/75 to-plum-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(206,139,52,0.12)_0%,_transparent_65%)]" />
      </div>

      {/* Tarjeta editorial central */}
      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-gold-400/30 bg-[#1a0824]/80 px-6 py-10 sm:px-12 sm:py-14 text-center shadow-2xl shadow-black/60 backdrop-blur-xl">
          <div
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-40 rounded-full bg-gold-500/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-center gap-5 sm:gap-6">
            <Image
              src="/logos/logo1-trimmed.png"
              alt="Akashic Records Community"
              width={361}
              height={57}
              priority
              className="h-10 sm:h-12 w-auto object-contain brightness-125 drop-shadow-[0_4px_20px_rgba(206,139,52,0.45)]"
            />

            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-500/15 px-3.5 py-1 font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-gold-200">
              <Sparkles className="h-3.5 w-3.5 text-gold-300" aria-hidden="true" />
              <span>Espacio Oficial de la Comunidad</span>
            </span>

            <h1
              id="home-akashic-heading"
              className="font-display text-3xl sm:text-5xl font-normal tracking-tight text-white leading-[1.12]"
            >
              Un camino para volver a escuchar{" "}
              <span className="italic font-light text-gold-200">la voz de tu alma</span>
            </h1>

            <p className="font-body text-sm sm:text-base text-[#F5EEF8]/90 leading-relaxed max-w-xl">
              En <strong className="font-semibold text-gold-200">Akashic Records Community</strong>{" "}
              acompañamos procesos de apertura, lectura y práctica en Registros Akáshicos a través
              de formaciones en vivo, encuentros gratuitos y una comunidad consciente.
            </p>

            <p className="font-body text-xs sm:text-sm text-gold-200/80 leading-relaxed max-w-lg">
              Explora todas nuestras propuestas, recursos y próximas fechas ingresando a nuestra
              página principal.
            </p>

            <div className="pt-2">
              <Link
                href={AKASHIC_MAIN_URL}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500 px-7 py-4 font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-plum-950 shadow-lg shadow-gold-500/30 transition-all duration-300 hover:brightness-110 hover:shadow-gold-500/45 active:scale-[0.98]"
              >
                <span>Entrar a Akashic Records Community</span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
