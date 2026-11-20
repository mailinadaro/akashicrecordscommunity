import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function MailIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const instagramHref =
    siteConfig.social.find((s) => s.label.toLowerCase() === "instagram")?.href ||
    "https://www.instagram.com/akashicrecordscommunity/";
  const facebookHref =
    siteConfig.social.find((s) => s.label.toLowerCase() === "facebook")?.href ||
    "https://www.facebook.com/akashicrecordscommunity";
  const youtubeHref =
    siteConfig.social.find((s) => s.label.toLowerCase() === "youtube")?.href ||
    "https://www.youtube.com/@akashicrecordscommunity";
  const emailHref = `mailto:${siteConfig.contact.email}`;

  return (
    <footer className="relative z-20 w-full bg-plum-950 border-t border-gold-400/20 py-12 sm:py-14 px-6 font-body text-gold-200">
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center text-center gap-3 sm:gap-4">
        {/* 1. Logo de Akashic */}
        <Link
          href="/"
          className="inline-block transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
          aria-label="Ir al inicio"
        >
          <Image
            src="/logos/logo1.png"
            alt="Akashic Record Community"
            width={340}
            height={100}
            className="h-20 sm:h-24 w-auto object-contain brightness-105"
            priority={false}
          />
        </Link>

        {/* 2. Redes sociales en línea */}
        <div className="flex items-center justify-center gap-4 sm:gap-5">
          <a
            href={instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Akashic Record Community"
            className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center text-gold-300 hover:text-gold-200 hover:border-gold-300 hover:bg-gold-500/10 transition-all duration-300"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>

          <a
            href={emailHref}
            aria-label="Enviar un email a Akashic Record Community"
            className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center text-gold-300 hover:text-gold-200 hover:border-gold-300 hover:bg-gold-500/10 transition-all duration-300"
          >
            <MailIcon className="w-4 h-4" />
          </a>

          <a
            href={facebookHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook de Akashic Record Community"
            className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center text-gold-300 hover:text-gold-200 hover:border-gold-300 hover:bg-gold-500/10 transition-all duration-300"
          >
            <FacebookIcon className="w-4 h-4" />
          </a>

          <a
            href={youtubeHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Canal de YouTube de Akashic Record Community"
            className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center text-gold-300 hover:text-gold-200 hover:border-gold-300 hover:bg-gold-500/10 transition-all duration-300"
          >
            <YoutubeIcon className="w-4 h-4" />
          </a>
        </div>

        {/* 3. Derechos reservados */}
        <p className="font-sans text-xs sm:text-sm text-gold-200/80 tracking-wide font-light">
          Akashic Record Community @ 2016 Todos los derechos reservados
        </p>

        {/* 4. Soporte y email */}
        <div className="font-sans text-xs text-gold-300/80 tracking-wide">
          <span className="font-medium text-gold-400">Soporte: </span>
          <a
            href={emailHref}
            className="hover:text-gold-100 underline underline-offset-4 decoration-gold-400/40 hover:decoration-gold-300 transition-colors"
          >
            {siteConfig.contact.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
