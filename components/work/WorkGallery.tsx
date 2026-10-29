"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowUpRight, 
  ExternalLink, 
  CheckCircle2, 
  X
} from "lucide-react"

export interface WorkProject {
  id: string
  title: string
  category: "all" | "saas" | "crm" | "showcase" | "platform" | "mobile"
  categoryLabel: string
  subtitle: string
  description: string
  images: string[]
  liveUrl: string
  status: "En production" | "En développement" | "En ligne"
  stack: string[]
  contribution: string[]
  highlights: string[]
  attributionNote?: string
}

export const WORK_PROJECTS: WorkProject[] = [
  {
    id: "ripostera",
    title: "Ripostera",
    category: "saas",
    categoryLabel: "SaaS IA",
    subtitle: "SaaS IA & Distribution",
    description: "Plateforme SaaS tout-en-un de gestion, curation et multidiffusion intelligente de contenus sur les réseaux sociaux. Automatise la distribution multicanale pour créateurs et entreprises.",
    images: ["/projects/ripostera.png"],
    liveUrl: "https://ripostera.vercel.app/",
    status: "En développement",
    stack: ["Next.js 15", "TypeScript", "Prisma ORM", "PostgreSQL", "Tailwind CSS"],
    contribution: [
      "Architecture App Router & Server Components haute performance",
      "Modélisation de données PostgreSQL via Prisma (multi-comptes, files de publication)",
      "Workflows automatisés et synchronisation d'assets",
    ],
    highlights: ["SaaS propriétaire R&D", "Workflows multicanaux", "Architecture robuste"],
  },
  {
    id: "crm-hmrenov26",
    title: "CRM-HMRENOV26",
    category: "crm",
    categoryLabel: "ERP Métier",
    subtitle: "ERP & Gestion Chantier",
    description: "Système de gestion complet pour entreprise du bâtiment : remplacement d'Excel par une solution sur mesure avec devis instantané, planning de chantier et facturation centralisée.",
    images: [
      "/projects/hmrenov26/1.png",
      "/projects/hmrenov26/2.png",
      "/projects/hmrenov26/3.png",
      "/projects/hmrenov26/4.png",
    ],
    liveUrl: "https://crm-hmrenov26.vercel.app/",
    status: "En production",
    stack: ["Next.js", "PostgreSQL", "Zustand", "Prisma", "Recharts", "Tailwind CSS"],
    contribution: [
      "Gestion d'état réactif complexe avec Zustand pour les devis multi-lignes",
      "Persistance relationnelle stricte PostgreSQL / Prisma",
      "Tableau de bord financier avec analytics en temps réel",
    ],
    highlights: ["Devis en 1 clic", "Planning d'intervention", "Pilotage financier"],
  },
  {
    id: "massurer",
    title: "Massurer",
    category: "showcase",
    categoryLabel: "Courtage Web",
    subtitle: "Courtage & Simulateur",
    description: "Portail d'assurance et simulateur de devis multi-branches interactif avec capture et qualification de leads entrants en temps réel pour cabinet de courtage indépendant.",
    images: ["/projects/massurer.png"],
    liveUrl: "https://massurer.vercel.app/",
    status: "En ligne",
    stack: ["Next.js", "TypeScript", "Zod", "Tailwind CSS"],
    contribution: [
      "Tunnel d'acquisition multi-étapes avec validation Zod",
      "Routage instantané des demandes de cotation",
      "Performance mobile et SEO optimisé",
    ],
    highlights: ["Simulateur multi-branches", "Validation stricte", "Haute conversion"],
  },
  {
    id: "knt-transport",
    title: "KNT Transport",
    category: "showcase",
    categoryLabel: "Logistique",
    subtitle: "Logistique & Fret Mondial",
    description: "Portail digital pour commissionnaire de transport multimodal (terrestre, maritime, aérien) opérant dans plus de 20 pays, avec système de devis express.",
    images: ["/projects/knt-transport.png"],
    liveUrl: "https://knt-transport.vercel.app/",
    status: "En production",
    stack: ["Next.js", "TypeScript", "Responsive UX", "Micro-animations", "SEO"],
    contribution: [
      "Interface internationale claire et responsive",
      "Tunnel de demande de cotation express",
      "Optimisation des temps de chargement et accessibilité",
    ],
    highlights: ["Réseau multimodal", "Cotation en ligne", "Design épuré"],
  },
  {
    id: "ayflixtv",
    title: "AyflixTv",
    category: "platform",
    categoryLabel: "E-Commerce",
    subtitle: "Streaming & E-Commerce",
    description: "Plateforme de souscription et catalogue de forfaits streaming haute disponibilité : catalogue dynamique, checkout automatisé et espace client sécurisé.",
    images: [
      "/projects/ayflixtv/hero.png",
      "/projects/ayflixtv/pricing.png",
      "/projects/ayflixtv/dash.png",
    ],
    liveUrl: "https://ayflixtv.vercel.app",
    status: "En production",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    contribution: [
      "Catalogue dynamique et gestion des abonnements",
      "Espace client authentifié et sécurisé",
      "Intégration du tunnel de commande fluide",
    ],
    highlights: ["Catalogue dynamique", "Espace client", "Paiement fluide"],
  },
  {
    id: "cabinet-tantane",
    title: "Cabinet Tantane",
    category: "showcase",
    categoryLabel: "Finance & Conseil",
    subtitle: "Gestion de Patrimoine",
    description: "Vitrine haut de gamme pour cabinet de conseil en gestion de patrimoine, assurance santé, prévoyance et épargne retraite.",
    images: ["/projects/cabinet-tantane.jpg"],
    liveUrl: "https://cabinet-tantane.vercel.app/",
    status: "En production",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    contribution: [
      "Direction artistique sobre et statutaire",
      "Tunnel de prise de rendez-vous qualifié",
      "Intégration d'animations calmes et performantes",
    ],
    highlights: ["Design premium", "Prise de contact fluide", "Crédibilité renforcée"],
  },
  {
    id: "moulaycars",
    title: "MoulayCars",
    category: "mobile",
    categoryLabel: "App Mobile",
    subtitle: "Location & Flotte Mobile",
    description: "Application mobile de location de véhicules : catalogue des voitures en temps réel, calendrier interactif de disponibilité et réservation simplifiée avec notifications instantanées.",
    images: ["/projects/moulaycars/moulaycars.png"],
    liveUrl: "#",
    status: "En production",
    stack: ["React Native", "Expo", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    contribution: [
      "Développement de l'application cross-platform iOS & Android sous React Native / Expo",
      "Système de réservation avec vérification de disponibilité en temps réel",
      "Expérience utilisateur fluide, responsive et support hors-ligne",
    ],
    highlights: ["Application iOS & Android", "Réservation en direct", "Temps réel"],
  },
  {
    id: "amstelcar",
    title: "AmstelCar",
    category: "showcase",
    categoryLabel: "Location Véhicules",
    subtitle: "Flotte & Réservation",
    description: "Plateforme web moderne de réservation et présentation de flotte de véhicules à Rabat (Maroc) : mise en avant des véhicules, tarification dynamique et prise de contact fluide.",
    images: ["/projects/amstelcar/amstel.png"],
    liveUrl: "https://amstelcar.ma",
    status: "En ligne",
    stack: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    contribution: [
      "Développement de la vitrine interactive et catalogue de la flotte automobile",
      "Formulaire de réservation rapide optimisé pour la conversion mobile",
      "Architecture performante Next.js avec temps de chargement ultra-rapides",
    ],
    highlights: ["Catalogue dynamique", "Réservation rapide", "Design épuré"],
  },
]

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
  const [activeModalProject, setActiveModalProject] = useState<WorkProject | null>(null)

  const filteredProjects = useMemo(() => {
    if (selectedFilter === "all") return WORK_PROJECTS
    return WORK_PROJECTS.filter((p) => p.category === selectedFilter)
  }, [selectedFilter])

  return (
    <div className="relative z-10">
      
      {/* Barre de filtres en pilules (exactement comme le visuel de référence) */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto mb-12 sm:mb-16">
        {FILTER_TABS.map((tab) => {
          const isActive = selectedFilter === tab.id
          const count = tab.id === "all" 
            ? WORK_PROJECTS.length 
            : WORK_PROJECTS.filter((p) => p.category === tab.id).length

          return (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#16181D] text-white shadow-sm"
                  : "bg-white/80 hover:bg-white text-[#555963] hover:text-[#16181D] border border-[#E2E4DE] shadow-xs"
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                isActive ? "bg-white/20 text-white" : "bg-[#F0F1EE] text-[#636773]"
              }`}>
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Grille de projets (Grid 3 colonnes inspirée du visuel) */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
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
              className="group relative flex flex-col bg-white border border-[#E2E4DE] rounded-2xl sm:rounded-3xl p-3 sm:p-3.5 shadow-sm hover:shadow-md hover:border-[#16181D]/30 transition-all duration-300"
            >
              {/* Conteneur Image format 16:10 */}
              <div 
                onClick={() => setActiveModalProject(project)}
                className="relative aspect-[16/10] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-[#F0F1EE] cursor-pointer"
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
                      ? "bg-white/90 text-emerald-800 border border-emerald-200/60"
                      : project.status === "En développement"
                      ? "bg-white/90 text-amber-800 border border-amber-200/60"
                      : "bg-white/90 text-[#16181D] border border-[#E2E4DE]"
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      project.status === "En production" ? "bg-emerald-500" : project.status === "En développement" ? "bg-amber-500" : "bg-[#2449D8]"
                    }`} />
                    {project.status}
                  </span>
                </div>

                {/* Bouton rapide d'inspection au survol */}
                <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/95 text-[#16181D] shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-all duration-200">
                    Voir les détails
                  </span>
                </div>
              </div>

              {/* Zone inférieure : Titre / Catégorie à gauche, Bouton Visiter à droite (calqué sur l'image) */}
              <div className="flex items-center justify-between gap-4 pt-4 pb-1 px-1.5 mt-auto">
                <div className="min-w-0">
                  <h3 
                    onClick={() => setActiveModalProject(project)}
                    className="text-base sm:text-lg font-bold font-sans text-[#16181D] truncate group-hover:text-[#2449D8] transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#636773] font-medium truncate mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {project.liveUrl && project.liveUrl !== "#" ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold bg-[#F0F1EE] text-[#16181D] hover:bg-[#16181D] hover:text-white transition-all duration-200 cursor-pointer shadow-2xs"
                    >
                      <span>Visiter</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold bg-[#F0F1EE] text-[#16181D] hover:bg-[#16181D] hover:text-white transition-all duration-200 cursor-pointer"
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

      {/* Modal épuré pour explorer les détails d'un projet */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop sombre doux */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            />

            {/* Fenêtre modale architecturale */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-3xl bg-white border border-[#E2E4DE] rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
            >
              {/* Header du modal */}
              <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#E2E4DE] bg-[#FAFAF8]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#2449D8] font-sans">
                      {activeModalProject.categoryLabel}
                    </span>
                    <span className="text-[#D9DAD5]">·</span>
                    <span className="text-xs text-[#636773] font-medium">
                      {activeModalProject.status}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#16181D] mt-0.5">
                    {activeModalProject.title}
                  </h3>
                </div>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-2 rounded-full text-[#636773] hover:text-[#16181D] hover:bg-[#F0F1EE] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Corps défilable */}
              <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
                
                {/* Image principale */}
                <div className="relative aspect-[16/10] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#F0F1EE] border border-[#E2E4DE]">
                  <Image
                    src={activeModalProject.images[0]}
                    alt={activeModalProject.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Attribution note si applicable */}
                {activeModalProject.attributionNote && (
                  <div className="p-3.5 bg-amber-50/80 border border-amber-200/70 rounded-xl text-xs text-amber-900 leading-relaxed">
                    <strong>Note d&apos;attribution :</strong> {activeModalProject.attributionNote}
                  </div>
                )}

                {/* Description */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#636773] font-semibold mb-2 font-sans">
                    Présentation
                  </h4>
                  <p className="text-sm sm:text-base text-[#16181D] leading-relaxed">
                    {activeModalProject.description}
                  </p>
                </div>

                {/* Contribution technique */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#636773] font-semibold mb-2.5 font-sans">
                    Ma contribution technique
                  </h4>
                  <ul className="space-y-2">
                    {activeModalProject.contribution.map((c, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A4E58]">
                        <CheckCircle2 className="w-4 h-4 text-[#2449D8] shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#636773] font-semibold mb-2.5 font-sans">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProject.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#F0F1EE] text-[#16181D] border border-[#E2E4DE]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Footer du modal avec action principale */}
              <div className="p-4 sm:p-5 border-t border-[#E2E4DE] bg-[#FAFAF8] flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded-full text-xs font-medium text-[#636773] hover:text-[#16181D]"
                >
                  Fermer
                </button>

                {activeModalProject.liveUrl && activeModalProject.liveUrl !== "#" ? (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#16181D] hover:bg-[#2449D8] transition-colors shadow-sm"
                  >
                    <span>Ouvrir l&apos;application en direct</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs text-[#636773] italic">
                    Projet sous contrat ou en accès restreint
                  </span>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}
