import type { Metadata } from "next"
import { WorkGallery } from "@/components/work/WorkGallery"
import { CtaSection } from "@/components/common/CtaSection"

export const metadata: Metadata = {
  title: "Réalisations & Projets — Abdouraouf Youssouf | Développeur Full-Stack",
  description:
    "Découvrez les projets, applications SaaS, ERP métiers et plateformes web conçus et développés par Abdouraouf Youssouf.",
}

export default function WorkPage() {
  return (
    <main className="relative min-h-screen pt-36 pb-0 sm:pt-44 bg-[#FAFAFA] overflow-hidden">
      
      {/* Texture de fond signature avec masque radial */}
      <div className="pointer-events-none absolute inset-0 bg-pulsor-dots bg-pulsor-dots-fade opacity-85" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
        
        {/* En-tête centré monumental (Inspiré de l'image de référence) */}
        <header className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          
          <h1 className="text-4xl sm:text-6xl lg:text-[4.75rem] tracking-tight leading-[1.08] text-[#16181D]">
            <span className="font-sans font-extrabold tracking-tight">
              Nos
            </span>{" "}
            <span className="font-serif italic font-normal tracking-normal">
              Réalisations
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#555963] max-w-2xl mx-auto leading-relaxed font-normal">
            <span className="block sm:whitespace-nowrap">
              Une sélection d&apos;applications SaaS, d&apos;outils métier et de plateformes web
            </span>
            <span className="block mt-0.5 sm:mt-1 sm:whitespace-nowrap">
              conçus avec une exigence stricte sur l&apos;architecture et la valeur réelle.
            </span>
          </p>

        </header>

        {/* Galerie interactive avec filtres en pilules et cartes projets */}
        <WorkGallery />

      </div>

      {/* Bloc CTA signature dark studio vers le contact */}
      <CtaSection
        titleLine1="Un projet web ou SaaS ?"
        titleLine2italic="Construisons-le ensemble."
        descLine1="De la conception au déploiement en production,"
        descLine2="bâtissons une application pensée pour durer."
        buttonText="Réserver un appel"
        buttonHref="/#contact"
      />

    </main>
  )
}

