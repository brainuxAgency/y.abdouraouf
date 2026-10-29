"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { StackMarquee } from "./stack-marquee"

export function Hero() {
  return (
    <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#0d1017] to-[#0a0c10]">
      
      {/* Texture d'arrière-plan signature Pulsor : Grille de points avec masque radial */}
      <div className="pointer-events-none absolute inset-0 bg-pulsor-dots bg-pulsor-dots-fade opacity-85" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête centré monumental avec le vrai positionnement */}
        <div className="max-w-5xl mx-auto text-center">

          {/* Titre principal monochrome en deux lignes - Duo Sans-serif Bold & Serif Italic */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] tracking-tight leading-[1.14] sm:leading-[1.1] text-white max-w-5xl mx-auto"
          >
            {/* Ligne 1 : Développeur Full-Stack (Sans Bold) + React & Next.js (Serif Italic) */}
            <span className="block sm:whitespace-nowrap">
              <span className="font-sans font-extrabold tracking-tight">
                Développeur Full‑Stack
              </span>{" "}
              <span className="font-serif italic font-normal tracking-normal">
                React &amp; Next.js
              </span>
            </span>

            {/* Ligne 2 : pour vos applications (Serif Italic) + web & SaaS. (Sans Bold) */}
            <span className="block mt-1 sm:mt-2.5 sm:whitespace-nowrap">
              <span className="font-serif italic font-normal tracking-normal">
                pour vos applications
              </span>{" "}
              <span className="font-sans font-extrabold tracking-tight">
                web &amp; SaaS.
              </span>
            </span>
          </motion.h1>

          {/* Description calibrée en exactement deux lignes */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-6 sm:mt-8 text-base sm:text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            <span className="block sm:whitespace-nowrap">
              Je conçois des applications web sur mesure, des outils métier et des produits SaaS,
            </span>
            <span className="block mt-0.5 sm:mt-1 sm:whitespace-nowrap">
              avec une exigence stricte sur la maintenabilité, l&apos;architecture et la valeur produit.
            </span>
          </motion.p>
          {/* Groupe de boutons d'appel à l'action centrés */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="flex flex-wrap items-center justify-center gap-3.5 mt-8 sm:mt-10"
          >
            {/* Bouton Principal Noir Pilule avec double flèche animée */}
            <Link
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-montserrat font-semibold text-white bg-orange-800 hover:bg-orange-700 transition-all duration-300 shadow-md shadow-black/30 cursor-pointer"
            >
              <span>Discuter d&apos;un projet</span>
              <span className="pulsor-btn-arrow text-sm">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>

            {/* Bouton Secondaire Pilule Claire vers la page /work */}
            <Link
              href="/work"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-montserrat font-medium text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all duration-200 cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="text-zinc-400 group-hover:text-white transition-colors">
                <path d="M3.25 12.25L2.4 12.53C2.08 12.64 1.75 12.4 1.75 12.06V5.95C1.75 5.6 2.08 5.36 2.4 5.47L3.25 5.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.25 14.13L6.44 14.46C6.11 14.6 5.75 14.36 5.75 14V4C5.75 3.64 6.11 3.4 6.44 3.54L7.25 3.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.46 1.83L15.67 4.23C16.02 4.4 16.25 4.75 16.25 5.14V12.86C16.25 13.25 16.02 13.6 15.67 13.77L10.46 16.17C10.13 16.32 9.75 16.08 9.75 15.72V2.28C9.75 1.92 10.13 1.67 10.46 1.83Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Voir mes réalisations</span>
            </Link>
          </motion.div>

        </div>

        {/* Défilement infini de la stack technique */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
        >
          <StackMarquee />
        </motion.div>

      </div>
    </section>
  )
}
