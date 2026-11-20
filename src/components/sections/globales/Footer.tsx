import Link from "next/link";
import excursionsData from "@/data/excursionesData.json";
import { Button } from "@/components/ui/atoms/button";
import { siteConfig } from "@/config/site.config";

const navLinks = siteConfig.navigation.footer;
const socialLinks = siteConfig.social;
const legalLinks = siteConfig.legal;

export default function Footer() {
  return (
    <footer className="relative z-20 w-full bg-earth-950 border-t border-white/10 px-8 pt-16 pb-6 font-body text-text-on-action md:px-16">
      
      {/* CONTENEDOR PRINCIPAL */}
      <div className="mb-8 flex flex-col gap-8 lg:mb-20 lg:flex-row lg:items-start lg:justify-between">
        
        {/* GRILLA DE INFORMACIÓN: 3 Columnas */}
        <div className="grid w-full grid-cols-1 gap-8 text-sm md:grid-cols-3 lg:w-2/3 lg:gap-16">
          
          {/* COLUMNA 1: Navegación Principal */}
          <div className="flex flex-col gap-4">
            <p className="font-bold text-base tracking-wider uppercase opacity-90">Navegación</p>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="hover:opacity-70 transition-opacity duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMNA 2: Excursiones */}
          <div className="flex flex-col gap-4">
            <p className="font-bold text-base tracking-wider uppercase opacity-90">Excursiones</p>
            <div className="flex flex-col gap-3">
              {excursionsData.experiences.slice(0, 6).map((excursion) => (
                <Link 
                  key={excursion.slug} 
                  href={`/excursiones/${excursion.slug}`} 
                  className="hover:opacity-70 transition-opacity duration-300"
                >
                  {excursion.meta.title}
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMNA 3: Redes Sociales y Contacto 
          <div className="flex flex-col gap-4">
            <p className="font-bold text-base tracking-wider uppercase opacity-90">Redes y Contacto</p>
            <div className="flex flex-col gap-3">
              <a 
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity duration-300"
              >
                WhatsApp: {siteConfig.contact.phoneDisplay}
              </a>
              <a 
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:opacity-70 transition-opacity duration-300"
              >
                {siteConfig.contact.email}
              </a>
              {socialLinks.map((social) => (
                <Link 
                  key={social.href} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:opacity-70 transition-opacity duration-300"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
          */}

        </div>

        {/* SECCIÓN DEL CALL TO ACTION (CTA) CON BUTTON SHADCN */}
        <div className="flex w-full flex-col gap-4 lg:w-1/3 lg:items-end">
          <Link href="/contacto" tabIndex={-1} className="w-full lg:w-auto">
            <Button
              variant="glass"
              className="w-full lg:w-auto h-12 px-8 text-[11px] font-mono font-semibold uppercase tracking-[0.25em] rounded-none border border-white/20 bg-earth-900/60 text-warm-50 hover:bg-ochre-500 hover:text-earth-950 hover:border-ochre-500 transition-all duration-300 shadow-none cursor-pointer"
            >
              Consulta Ahora
            </Button>
          </Link>
        </div>

      </div>

      {/* DETALLE ESTÉTICO: Marca de agua */}
      <div className="flex w-full flex-col items-center justify-center overflow-visible font-display leading-none tracking-display">
        <h2 className="text-center text-[10vw] uppercase tracking-[0.04em] text-text-on-action opacity-10 mb-8 select-none">
          {siteConfig.brand.watermark}
        </h2>
      </div>

      {/* PIE DE PÁGINA: Legal y Créditos */}
      <div className="flex flex-col items-center gap-4 border-t border-text-on-action/10 pt-6 text-center text-xs opacity-80 md:flex-row md:justify-between md:text-right">
        
        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
          {legalLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="hover:underline hover:opacity-100 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-1 md:items-end">
          <p className="text-center md:text-right">
            Developed and designed by{" "}
            <Link 
              href={siteConfig.credits.author.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold hover:underline"
            >
              {siteConfig.credits.author.name}
            </Link>{" "}
            | Photography by{" "}
            <Link 
              href={siteConfig.credits.photography.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold hover:underline"
            >
              {siteConfig.credits.photography.name}
            </Link>
          </p>
          <p>
            {siteConfig.brand.name} © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
