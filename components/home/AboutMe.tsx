"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const highlights = [
  "Master 2 Ingénierie Informatique",
  "Spécialisé React, Next.js & TypeScript",
  "Créateur de Ripostera (SaaS IA)",
]

export function AboutMe() {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 bg-[#06070b]"
    >
      {/* Fondu haut depuis Methodology */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#06070b] to-transparent" />
      {/* Fondu bas vers ContactForm */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-20 bg-gradient-to-b from-transparent to-[#050609]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Séparateur fin éditorial */}
        <div className="border-t border-white/[0.07] pt-12 sm:pt-16">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
            
            {/* Colonne gauche : photo + identité */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 min-w-0">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 bg-white/5">
                <Image
                  src="/profil.png"
                  alt="Portrait d'Abdouraouf Youssouf"
                  fill
                  className="object-cover object-top grayscale-[15%]"
                  sizes="80px"
                />
              </div>

              <div className="min-w-0">
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-600 block mb-1">
                  — À propos
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white font-montserrat tracking-tight">
                  Abdouraouf Youssouf
                </h3>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed max-w-xl">
                  Ingénieur logiciel &amp; développeur Full-Stack. Je conçois des produits web fiables,
                  performants et maintenables — de l&apos;architecture jusqu&apos;à l&apos;expérience utilisateur.
                </p>

                {/* Repères clés */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4">
                  {highlights.map((item) => (
                    <span key={item} className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
                      <CheckCircle2 className="w-3 h-3 shrink-0" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Colonne droite : CTA */}
            <div className="shrink-0">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-medium text-white/70 hover:text-white border border-white/15 hover:border-white/35 hover:bg-white/[0.04] transition-all duration-200"
              >
                <span>En savoir plus sur moi</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}