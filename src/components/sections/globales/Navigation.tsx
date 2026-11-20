import Link from "next/link";
import Image from "next/image";
import MenuRevealWrapper from "@/components/animations/MenuRevealWrapper";
import { siteConfig } from "@/config/site.config";

export type { NavMenuItem } from "@/config/site.config";

/**
 * REGLA DE ARQUITECTURA UI/UX:
 * El menú de navegación principal mantiene una composición editorial limpia sin saturación.
 * A diferencia del Footer (que indexa las 6 excursiones individuales para SEO),
 * la navegación utiliza un único Hub general: `/excursiones`.
 */
const menuItems = siteConfig.navigation.main;
const socialLinks = siteConfig.social;

export default function Navigation() {
  const BrandLogo = (
    <Link href="/" className="hover:opacity-70 transition-opacity">
      <Image
        src={siteConfig.brand.logo.src}
        alt={siteConfig.brand.logo.alt}
        width={siteConfig.brand.logo.width}
        height={siteConfig.brand.logo.height}
        priority
        unoptimized
        style={{ height: "auto" }}
      />
    </Link>
  );

  const ImagesList = (
    <>
      <Image
        src="/default.jpg"
        alt="Imagen de referencia del paisaje de Jujuy"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover w-full h-full absolute top-0 left-0"
        priority
      />
      {menuItems.map((item) => (
        <Image
          key={item.label}
          src={item.image}
          alt={item.label}
          fill
          sizes="50vw"
          data-image-id={item.label}
          className="menu-bg-image pointer-events-none absolute inset-0 h-full w-full object-cover"
          style={{ opacity: 0, clipPath: "inset(100% 0% 0% 0%)", transform: "scale(1.08)" }}
        />
      ))}
    </>
  );

  const MenuLinks = (
    <ul className="flex flex-col gap-3 sm:gap-4 list-none m-0 p-0" role="list">
      {menuItems.map((item) => (
        <li key={item.href} className="overflow-hidden">
          <Link
            href={item.href}
            data-hover-id={item.label}
            className="menu-item menu-link block hover:text-text-on-action hover:transition-colors"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  const SocialsList = (
    <>
      {socialLinks.map((link) => (
        <li key={link.label} className="list-none">
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-on-action transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <MenuRevealWrapper
      brandNode={BrandLogo}
      imagesNode={ImagesList}
      menuItemsNode={MenuLinks}
      socialLinksNode={SocialsList}
    />
  );
}
