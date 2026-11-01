"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowUpRight, 
  ExternalLink, 
  CheckCircle2, 
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { PROJECTS, type Project } from "@/src/constants/projects"

const FILTER_TABS = [
  { id: "all", label: "Tous" },
  { id: "saas", label: "SaaS & IA" },
  { id: "crm", label: "ERP & Métier" },
  { id: "showcase", label: "Vitrines & Portails" },
  { id: "platform", label: "E-Commerce" },
  { id: "mobile", label: "Mobile" },
] as const

export function WorkGallery() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all")
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null)

  const filteredProjects = useMemo(() => {
    if (selectedFilter === "all") return PROJECTS
    return PROJECTS.filter((p) => p.category === selectedFilter)
  }, [selectedFilter])

  return (
    <div className="relative z-10">
      
      {/* Barre de filtres en pilules */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto mb-12 sm:mb-16">
        {FILTER_TABS.map((tab) => {
          const isActive = selectedFilter === tab.id
          const count = tab.id === "all" 
            ? PROJECTS.length 
            : PROJECTS.filter((p) => p.category === tab.id).length

          return (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                  : "bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border border-white/10 shadow-xs"
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                isActive ? "bg-primary/15 text-primary-foreground" : "bg-white/10 text-zinc-400"
              }`}>
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Grille de projets (Grid 3 colonnes) */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5 max-w-7xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.25) }}
              className="group relative flex flex-col bg-[#141416] border border-white/10 rounded-2xl sm:rounded-3xl p-2 md:p-4 shadow-sm hover:shadow-[0_0_30px_hsl(var(--primary)/0.12)] hover:border-white/25 transition-all duration-300"
            >
              {/* Conteneur Image format 16:10 */}
              <div 
                onClick={() => setActiveModalProject(project)}
                className="relative aspect-[16/10] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-black/40 cursor-pointer"
              >
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-104"
                />

                {/* Badge statut discret */}
                <div className="absolute top-3 left-3 z-10">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium backdrop-blur-md shadow-xs ${
                    project.status === "En production" 
                      ? "bg-black/60 text-emerald-300 border border-emerald-500/30"
                      : project.status === "En développement"
                      ? "bg-black/60 text-amber-300 border border-amber-500/30"
                      : "bg-black/60 text-white border border-white/15"
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      project.status === "En production" ? "bg-emerald-500" : project.status === "En développement" ? "bg-amber-500" : "bg-[#2449D8]"
                    }`} />
                    {project.status}
                  </span>
                </div>

                {/* Bouton rapide d'inspection au survol */}
                <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/95 text-[#050608] shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-all duration-200">
                    Voir les détails
                  </span>
                </div>
              </div>

              {/* Zone inférieure : Titre / Catégorie à gauche, Bouton Visiter à droite */}
              <div className="flex items-center justify-between gap-4 pt-4 pb-1 px-1.5 mt-auto">
                <div className="min-w-0">
                  <h3 
                    onClick={() => setActiveModalProject(project)}
                    className="text-base sm:text-lg font-bold font-sans text-white truncate group-hover:text-primary transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-zinc-500 font-medium truncate mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {project.liveUrl && project.liveUrl !== "#" ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold bg-white/10 text-white hover:bg-white hover:text-[#050608] transition-all duration-200 cursor-pointer shadow-2xs"
                    >
                      <span>Visiter</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 px-1.5 md:px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold bg-white/10 text-white hover:bg-white hover:text-[#050608] transition-all duration-200 cursor-pointer"
                    >
                      <span>Détails</span>
                    </button>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal shadcn/ui Dialog pour explorer les détails d'un projet */}
      <Dialog
        open={Boolean(activeModalProject)}
        onOpenChange={(open) => {
          if (!open) setActiveModalProject(null)
        }}
      >
        {activeModalProject && (
          <DialogContent className="max-w-3xl h-[85vh] max-h-[85vh] bg-[#0f1013] border border-white/10 text-white rounded-2xl sm:rounded-3xl p-0 overflow-hidden flex flex-col gap-0 shadow-2xl">
            {/* Header du modal */}
            <DialogHeader className="shrink-0 p-2 md:p-5 border-b border-white/10 bg-[#141416] text-left pr-12">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary font-sans">
                  {activeModalProject.categoryLabel}
                </span>
                <span className="text-zinc-700">·</span>
                <span className="text-xs text-zinc-500 font-medium">
                  {activeModalProject.status}
                </span>
              </div>
              <DialogTitle className="text-xl sm:text-2xl font-bold font-sans text-white mt-1">
                {activeModalProject.title}
              </DialogTitle>
              <DialogDescription className="sr-only">
                {activeModalProject.subtitle} — {activeModalProject.description}
              </DialogDescription>
            </DialogHeader>

            {/* Corps défilable avec ScrollArea de shadcn */}
            <ScrollArea className="flex-1 min-h-0 w-full">
              <div className="p-2 md:p-5 space-y-4">
                {/* Image principale */}
                <div className="relative aspect-[16/10] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#141416] border border-white/10 shrink-0">
                  <Image
                    src={activeModalProject.images[0]}
                    alt={activeModalProject.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Attribution note si applicable */}
                {activeModalProject.attributionNote && (
                  <div className="p-2 md:p-3 bg-amber-50/80 border border-amber-200/70 rounded-xl text-xs text-amber-900 leading-relaxed">
                    <strong>Note d&apos;attribution :</strong> {activeModalProject.attributionNote}
                  </div>
                )}

                {/* Description */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-2 font-sans">
                    Présentation
                  </h4>
                  <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                    {activeModalProject.description}
                  </p>
                </div>

                {/* Contribution technique */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-2.5 font-sans">
                    Ma contribution technique
                  </h4>
                  <ul className="space-y-2">
                    {activeModalProject.contribution.map((c, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-2.5 font-sans">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProject.stack.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="rounded-md text-xs font-medium bg-white/5 text-zinc-200 border-white/10 px-2.5 py-1"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollArea>

            {/* Footer du modal */}
            <DialogFooter className="shrink-0 p-2 md:p-5 border-t border-white/10 bg-[#141416] flex items-center justify-between sm:justify-between gap-3 flex-row">
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-full text-xs font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                Fermer
              </button>

              {activeModalProject.liveUrl && activeModalProject.liveUrl !== "#" ? (
                <a
                  href={activeModalProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-gold inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-colors shadow-sm"
                >
                  <span>Ouvrir l&apos;application en direct</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-xs text-zinc-500 italic">
                  Projet sous contrat ou en accès restreint
                </span>
              )}
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>

    </div>
  )
}
