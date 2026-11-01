"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, ChevronDown, ChevronRight, ExternalLink, Check } from "lucide-react"
import { CalButton } from "../common/CalButton"
import { PROJECTS } from "@/src/constants/projects"

const showcaseList = PROJECTS.filter((p) => p.featured)

/** Croix d'intersection blueprint — même motif que le footer et la section contact */
function Plus({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute z-20 block h-[11px] w-[11px] ${className}`}
    >
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/40" />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/40" />
    </span>
  )
}

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0)

  const project = showcaseList[currentIndex]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseList.length)
    setCurrentScreenIndex(0)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? showcaseList.length - 1 : prev - 1))
    setCurrentScreenIndex(0)
  }

  return (
    <section id="projects" className="py-24  bg-gradient-to-b from-[#0a0c10] to-[#090b0f] relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-5">

        {/* ── Wrapper blueprint : bordures latérales identiques au footer ── */}
        <div className="relative border-x border-white/10">

          {/* ── EN-TÊTE : 2 colonnes bordées ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/10 relative">
            <Plus className="-top-[5.5px] -left-[5.5px]" />
            <Plus className="-top-[5.5px] -right-[5.5px]" />

            {/* Col gauche : label + titre */}
            <div className="p-2 md:p-5 md:border-r border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-3 block">
                — Réalisations
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                Quand avoir un outil improvisé ne suffit plus.
              </h2>
            </div>

            {/* Col droite : accroche + CTA */}
            <div className="p-2 md:p-5 flex flex-col justify-between gap-6 relative">
              <Plus className="-top-[5.5px] left-1/2 -translate-x-1/2 hidden md:block" />
              <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
                Des applications web conçues pour résoudre des problèmes métier réels — pas des maquettes de présentation.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500">
                  {currentIndex + 1}&nbsp;/&nbsp;{showcaseList.length} projets
                </span>
                <CalButton className="btn-cta-gold group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium cursor-pointer">
                  <span>Réserver un appel</span>
                  <span className="pulsor-btn-arrow text-xs">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </CalButton>
              </div>
            </div>
          </div>

          {/* ── BARRE STATS : grille 4 colonnes bordée ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-white/10 relative">
            {[
              { label: "Applications livrées", value: "4+" },
              { label: "En production active", value: "3" },
              { label: "Secteurs couverts", value: "5" },
              { label: "Stack principale", value: "Next.js" },
            ].map((stat, i, arr) => (
              <div
                key={stat.label}
                className={`p-2 md:p-5 flex flex-col gap-1 ${i < arr.length - 1 ? "border-r border-white/10" : ""}`}
              >
                <span className="text-xl sm:text-2xl font-bold text-white font-mono">{stat.value}</span>
                <span className="text-[11px] text-zinc-500 uppercase tracking-wider font-mono">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* ── SHOWCASE PRINCIPAL ── */}
          <div className="p-2 md:p-5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Colonne Gauche : Mockup écran (Col span 7) */}
              <div className="lg:col-span-7 relative">
                <div className="relative rounded-2xl bg-[#141416] p-3 sm:p-4 border border-[#2B2B30] shadow-2xl shadow-black/15 overflow-hidden group">

                  {/* Barre macOS discrète */}
                  <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                    </div>
                    <span className="text-[11px] font-montserrat text-white/50 truncate max-w-[200px]">
                      {project.title.toLowerCase()}.vercel.app
                    </span>
                    <span className="text-[10px] font-montserrat px-2 py-0.5 rounded-full bg-white/10 text-white/80 font-medium">
                      {project.status}
                    </span>
                  </div>

                  {/* Visuel principal */}
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black/40">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${project.id}-${currentScreenIndex}`}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={project.images[currentScreenIndex] || project.images[0]}
                          alt={project.title}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          priority
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Sélecteur captures multiples */}
                  {project.images.length > 1 && (
                    <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1">
                      {project.images.map((img, idx) => (
                        <button
                          key={img}
                          onClick={() => setCurrentScreenIndex(idx)}
                          className={`relative w-14 h-9 rounded-md overflow-hidden border transition-all shrink-0 cursor-pointer ${
                            currentScreenIndex === idx
                              ? "border-primary ring-1 ring-primary/60"
                              : "border-white/20 opacity-60 hover:opacity-100"
                          }`}
                        >
                          <Image src={img} alt="Miniature" fill className="object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Navigation Up / Down */}
                <div className="hidden lg:flex flex-col gap-2 absolute -right-6 top-1/2 -translate-y-1/2 z-20">
                  <button
                    onClick={handlePrev}
                    aria-label="Projet précédent"
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-zinc-300 hover:bg-white/20 hover:text-white flex items-center justify-center shadow-md transition-all cursor-pointer"
                  >
                    <ChevronUp className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Projet suivant"
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-zinc-300 hover:bg-white/20 hover:text-white flex items-center justify-center shadow-md transition-all cursor-pointer"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Colonne Droite : Fiche projet (Col span 5) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5"
                  >
                    {/* Logo & Titre */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-[10px] border border-white/15 bg-white/10 text-white flex items-center justify-center font-montserrat font-bold text-sm tracking-wider shrink-0">
                        {project.title.slice(0, 2).toUpperCase()}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-montserrat">
                        {project.title}
                      </h3>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-montserrat font-medium text-zinc-400 border border-white/10"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>

                    {/* Titre & Description */}
                    <p className="text-sm sm:text-base font-semibold text-white leading-snug">
                      {project.headline}
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Note d'attribution */}
                    {project.attributionNote && (
                      <div className="p-3 bg-white/5 border-l-2 border-primary text-xs font-montserrat text-zinc-400">
                        <strong>Note d&apos;attribution :</strong> {project.attributionNote}
                      </div>
                    )}

                    {/* Points d'ingénierie */}
                    <div className="space-y-2 pt-1 text-xs text-zinc-400">
                      {project.contribution.map((item, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-0.5 border border-white/10 text-[11px] font-montserrat font-medium text-zinc-400 rounded-full"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Boutons d'action */}
                    <div className="flex items-center gap-3 pt-2">
                      <Link
                        href="#contact"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-montserrat font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-colors cursor-pointer"
                      >
                        <span>Détails du projet</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-montserrat font-semibold text-white border border-white/20 hover:border-white/50 transition-colors cursor-pointer"
                        >
                          <span>Website live</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation mobile */}
                <div className="flex lg:hidden items-center justify-between pt-4 border-t border-white/10">
                  <button
                    onClick={handlePrev}
                    className="px-4 py-2 rounded-full border border-white/20 text-xs font-montserrat text-zinc-300 cursor-pointer"
                  >
                    ← Précédent
                  </button>
                  <span className="text-xs font-montserrat text-zinc-500">
                    {currentIndex + 1} sur {showcaseList.length}
                  </span>
                  <button
                    onClick={handleNext}
                    className="px-4 py-2 rounded-full border border-white/20 text-xs font-montserrat text-zinc-300 cursor-pointer"
                  >
                    Suivant →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ── NAVIGATION PAR VIGNETTES : grille 4 colonnes bordée (identique footer) ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-white/10 relative">
            <Plus className="-top-[5.5px] -left-[5.5px]" />
            <Plus className="-top-[5.5px] -right-[5.5px]" />
            {showcaseList.map((p, i, arr) => (
              <button
                key={p.id}
                onClick={() => {
                  setCurrentIndex(i)
                  setCurrentScreenIndex(0)
                }}
                className={`group p-2 md:p-5 text-left transition-all duration-200 cursor-pointer ${
                  i < arr.length - 1 ? "border-r border-white/10" : ""
                } ${currentIndex === i ? "bg-white/[0.06]" : "hover:bg-white/[0.03]"}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      currentIndex === i ? "bg-primary" : "bg-white/20 group-hover:bg-white/40"
                    }`}
                  />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                    {p.subtitle}
                  </span>
                </div>
                <span
                  className={`text-sm font-semibold font-montserrat transition-colors ${
                    currentIndex === i ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                  }`}
                >
                  {p.title}
                </span>
              </button>
            ))}
            <Plus className="-bottom-[5.5px] -left-[5.5px]" />
            <Plus className="-bottom-[5.5px] -right-[5.5px]" />
          </div>

        </div>
      </div>
    </section>
  )
}
