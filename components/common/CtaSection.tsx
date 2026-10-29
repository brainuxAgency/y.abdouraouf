"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { CalButton } from "@/components/common/CalButton"

interface CtaSectionProps {
  titleLine1?: string
  titleLine2italic?: string
  descLine1?: string
  descLine2?: string
  description?: string
  buttonText?: string
  buttonHref?: string
  useCalModal?: boolean
  className?: string
}

export function CtaSection({
  titleLine1 = "Un projet web ou SaaS ?",
  titleLine2italic = "Construisons-le ensemble.",
  descLine1 = "De la conception au déploiement en production,",
  descLine2 = "bâtissons une application pensée pour durer.",
  description,
  buttonText = "Réserver un appel",
  buttonHref,
  useCalModal = true,
  className = "",
}: CtaSectionProps) {
  return (
    <section
      className={`relative bg-[#060709] text-white overflow-hidden border-t border-white/10 ${className}`}
    >
      {/* Fondu haut depuis ContactForm */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#060709] to-transparent z-10" />
      {/* Texture de fond en micro-pointillés */}
      <div className="pointer-events-none absolute inset-0 bg-pulsor-dots opacity-25" />

      {/* Halo de lumière supérieur, centré */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] bg-[radial-gradient(ellipse_55%_60%_at_50%_0%,rgba(255,255,255,0.07),transparent_80%)] blur-2xl"
      />



      {/* Contenu central */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 md:px-5 py-16 sm:py-24 flex flex-col items-center text-center">
        <div className="max-w-3xl w-full">

          {/* Règle horizontale fine éditoriale au-dessus du titre */}
          <div className="flex items-center justify-center gap-4 mb-8 sm:mb-10">
            <div className="w-12 h-px bg-white/10" />
            <span className="text-[10px] text-zinc-600 tracking-[0.2em] uppercase font-normal">
              Prêt à démarrer
            </span>
            <div className="w-12 h-px bg-white/10" />
          </div>

          {/* Titre monumental — mix Sans Bold + Serif Italic (cohérent avec le Hero) */}
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.85rem] tracking-tight leading-[1.1]">
            <span className="block font-sans font-extrabold text-white sm:whitespace-nowrap">
              {titleLine1}
            </span>
            <span className="block font-serif italic font-normal text-zinc-300 mt-1 sm:mt-2 sm:whitespace-nowrap">
              {titleLine2italic}
            </span>
          </h2>

          {/* Description sur 2 lignes calibrées */}
          <div className="mt-6 sm:mt-8 text-sm sm:text-base text-zinc-500 leading-relaxed font-normal max-w-xl mx-auto">
            {descLine1 && descLine2 ? (
              <>
                <span className="block">{descLine1}</span>
                <span className="block mt-0.5 sm:mt-1">{descLine2}</span>
              </>
            ) : (
              <p>{description}</p>
            )}
          </div>

          {/* Règle + bouton disposés en ligne éditoriale */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8">
            {/* Bouton principal : Cal.com modal ou lien personnalisé */}
            {useCalModal ? (
              <CalButton className="btn-cta-gold group inline-flex items-center gap-2.5 px-6 py-2 rounded-full text-sm font-semibold cursor-pointer">
                <span>{buttonText}</span>
                <ArrowUpRight className="w-4 h-4 text-[#23190A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </CalButton>
            ) : (
              <Link
                href={buttonHref || "/#contact"}
                className="btn-cta-gold group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold cursor-pointer"
              >
                <span>{buttonText}</span>
                <ArrowUpRight className="w-4 h-4 text-[#23190A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            )}

            {/* Séparateur vertical discret */}
            <div className="hidden sm:block h-6 w-px bg-white/15" />

            {/* Lien secondaire texto — email direct */}
            <a
              href="mailto:youssouf.abdouraouf4@gmail.com"
              className="group text-sm text-zinc-500 hover:text-white transition-colors duration-200 flex items-center gap-1.5"
            >
              <span>ou écrire directement</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CtaSection
