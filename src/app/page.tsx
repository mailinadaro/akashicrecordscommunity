import type { Metadata } from "next";
import HomePortalSection from "@/components/sections/globales/HomePortalSection";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Akashic Records Community — Registros Akáshicos y Experiencias en Vivo",
  absoluteTitle: true,
  description:
    "Espacio de formación, lectura e iniciación en Registros Akáshicos. Conoce nuestras propuestas, encuentros en vivo y comunidad en Akashic Records Community.",
  path: "/",
  image: {
    url: "/og/entre-dos-ciclos.jpg",
    width: 1200,
    height: 630,
    alt: "Akashic Records Community — Registros Akáshicos y Experiencias en Vivo",
  },
});

export default function Home() {
  return <HomePortalSection />;
}
