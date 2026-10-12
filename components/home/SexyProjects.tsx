"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Globe,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  title: string;
  category: "all" | "saas" | "crm" | "showcase" | "mobile";
  categoryLabel: string;
  description: string;
  images: string[];
  link: string;
  domain: string;
  status: string;
  isFeatured?: boolean;
  technologies: string[];
  highlights?: string[];
}

const projects: Project[] = [
  {
    id: "ripostera",
    title: "Ripostera",
    category: "saas",
    categoryLabel: "SaaS IA & Automatisation",
    description:
      "Plateforme SaaS tout-en-un qui automatise la création, la planification intelligente et la multidiffusion de contenus sur les réseaux sociaux. Intègre des agents IA pour transformer l'engagement en prospects qualifiés.",
    images: ["/projects/ripostera.png"],
    link: "https://ripostera.vercel.app/",
    domain: "ripostera.vercel.app",
    status: "En production",
    isFeatured: true,
    technologies: ["Next.js 14", "TypeScript", "OpenAI", "Prisma", "PostgreSQL", "Tailwind CSS"],
    highlights: ["Génération IA", "Multi-comptes", "Auto-DM & Leads", "Paiements Stripe"],
  },
  {
    id: "crm-hmrenov26",
    title: "CRM-HMRENOV26",
    category: "crm",
    categoryLabel: "ERP & CRM Métier",
    description:
      "Système de gestion complet pour entreprise du bâtiment : suivi des opportunités commerciales, génération instantanée de devis/factures, planning d'intervention et pilotage des équipes.",
    images: [
      "/projects/hmrenov26/1.png",
      "/projects/hmrenov26/2.png",
      "/projects/hmrenov26/3.png",
      "/projects/hmrenov26/4.png",
      "/projects/hmrenov26/5.png",
      "/projects/hmrenov26/6.png",
    ],
    link: "https://crm-hmrenov26.vercel.app/",
    domain: "crm-hmrenov26.vercel.app",
    status: "En production",
    isFeatured: true,
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "shadcn/ui", "Recharts"],
    highlights: ["Devis en 1 clic", "Tableau de bord financier", "Gestion d'agenda", "Rôles & Accès"],
  },
  {
    id: "massurer",
    title: "Massurer",
    category: "showcase",
    categoryLabel: "Courtage & Devis en ligne",
    description:
      "Site institutionnel et tunnel d'acquisition pour un courtier d'assurance indépendant : simulateur interactif multi-branches (santé, prévoyance, animaux, obsèques) avec capture de leads qualifiés.",
    images: ["/projects/massurer.png"],
    link: "https://massurer.vercel.app/",
    domain: "massurer.vercel.app",
    status: "En production",
    technologies: ["Next.js", "TypeScript", "Formulaires Zod", "Tailwind CSS", "SEO Local"],
    highlights: ["Simulateur interactif", "Capture de leads", "Score SEO 100/100"],
  },
  {
    id: "knt-transport",
    title: "KNT Transport",
    category: "showcase",
    categoryLabel: "Logistique & Fret Mondial",
    description:
      "Portail digital pour commissionnaire de transport multimodal (terrestre, maritime, aérien) opérant dans plus de 20 pays, avec système de devis express et gestion des formalités douanières.",
    images: ["/projects/knt-transport.png"],
    link: "https://knt-transport.vercel.app/",
    domain: "knt-transport.vercel.app",
    status: "En production",
    technologies: ["Next.js", "TypeScript", "Responsive UX", "Micro-animations", "SEO"],
    highlights: ["Multimodal mondial", "Demande de cotation", "Fluidité mobile"],
  },
  {
    id: "ayflixtv",
    title: "AyflixTv",
    category: "crm",
    categoryLabel: "Streaming & E-Commerce",
    description:
      "Plateforme de vente de forfaits streaming haute disponibilité : catalogue dynamique de chaînes, checkout automatisé et espace client sécurisé pour la gestion des accès.",
    images: [
      "/projects/ayflixtv/hero.png",
      "/projects/ayflixtv/pricing.png",
      "/projects/ayflixtv/dash.png",
    ],
    link: "https://ayflixtv.vercel.app",
    domain: "ayflixtv.vercel.app",
    status: "En production",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    highlights: ["Catalogue dynamique", "Espace abonné", "Paiement sécurisé"],
  },
  {
    id: "cabinet-tantane",
    title: "Cabinet Tantane",
    category: "showcase",
    categoryLabel: "Finance & Assurance",
    description:
      "Vitrine haut de gamme pour cabinet de conseil en gestion de patrimoine, assurance santé, prévoyance et épargne retraite. Design épuré inspire la confiance et maximise la conversion.",
    images: ["/projects/cabinet-tantane.jpg"],
    link: "https://cabinet-tantane.vercel.app/",
    domain: "cabinet-tantane.vercel.app",
    status: "En production",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: ["Design premium", "Tunnel de prise de RDV", "Performance mobile"],
  },
  {
    id: "moulaycars",
    title: "MoulayCars",
    category: "mobile",
    categoryLabel: "App Mobile & Location",
    description:
      "Application mobile de location de voitures : catalogue des véhicules en temps réel, calendrier de disponibilité et réservation simplifiée avec notifications instantanées.",
    images: ["/projects/moulaycars/moulaycars.png"],
    link: "#",
    domain: "app.moulaycars",
    status: "Terminé",
    technologies: ["React Native", "Expo", "TypeScript", "PostgreSQL"],
    highlights: ["Application iOS & Android", "Réservation en direct", "Disponibilité temps réel"],
  },
  {
    id: "amstelcar",
    title: "AmstelCar",
    category: "showcase",
    categoryLabel: "Location Véhicules",
    description:
      "Site moderne de location de véhicules à Rabat (Maroc) : mise en avant de la flotte, tarifs transparents et réservation en ligne fluide.",
    images: ["/projects/amstelcar/amstel.png"],
    link: "#",
    domain: "amstelcar.ma",
    status: "En ligne",
    technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    highlights: ["Réservation rapide", "Filtres de flotte", "Interface responsive"],
  },
];

const filterTabs = [
  { key: "all", label: "Tous les projets", count: 8 },
  { key: "saas", label: "SaaS & IA", count: 1 },
  { key: "crm", label: "CRM & Plateformes", count: 2 },
  { key: "showcase", label: "Vitrines & Acquisition", count: 4 },
  { key: "mobile", label: "Mobile", count: 1 },
];

function ProjectBrowserCard({ project }: { project: Project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasMultipleImages = project.images.length > 1;

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl border border-white/10 bg-gray-950/70 backdrop-blur-xl overflow-hidden hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-950/25 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Top Edge Beam on Hover */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

      <div>
        {/* Browser Top Bar Header */}
        <div className="px-4 py-3 bg-gray-900/90 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>

          <div className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/5 text-[11px] font-mono text-gray-400 truncate max-w-[200px] flex items-center gap-1.5">
            <Globe className="w-3 h-3 text-gray-500 shrink-0" />
            <span className="truncate">{project.domain}</span>
          </div>

          <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {project.status}
          </span>
        </div>

        {/* Project Image Viewport */}
        <div className="relative aspect-[16/10] bg-gray-900 overflow-hidden group/image">
          <Image
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Preview ${currentImageIndex + 1}`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Image carousel arrows (if multiple images) */}
          {hasMultipleImages && (
            <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover/image:opacity-100 transition-opacity z-10">
              <button
                onClick={prevImage}
                aria-label="Image précédente"
                className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md transition-transform hover:scale-110 border border-white/20"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextImage}
                aria-label="Image suivante"
                className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md transition-transform hover:scale-110 border border-white/20"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Carousel dots indicator */}
          {hasMultipleImages && (
            <div className="absolute bottom-2.5 inset-x-0 flex items-center justify-center gap-1.5 z-10">
              {project.images.map((_, dotIdx) => (
                <span
                  key={dotIdx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    dotIdx === currentImageIndex
                      ? "w-5 bg-purple-400"
                      : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Live Link Button on hover */}
          {project.link !== "#" && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 hover:bg-purple-600 text-white flex items-center justify-center backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10 shadow-lg"
            >
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Project Info Details */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300">
              {project.categoryLabel}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors flex items-center gap-2 mb-2">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light line-clamp-3 mb-5">
            {project.description}
          </p>

          {/* Highlights checklist if present */}
          {project.highlights && (
            <div className="grid grid-cols-2 gap-1.5 mb-5 font-mono text-[11px] text-gray-300">
              {project.highlights.slice(0, 4).map((highlight) => (
                <div key={highlight} className="flex items-center gap-1.5 text-gray-400">
                  <CheckCircle2 className="w-3 h-3 text-purple-400 shrink-0" />
                  <span className="truncate">{highlight}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Card Bottom: Tech Stack & Action */}
      <div className="px-6 pb-6 pt-4 border-t border-white/5 flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md border border-white/10 bg-white/[0.03] text-gray-400"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 text-gray-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {project.link !== "#" ? (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono font-medium text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors shrink-0 group/link"
          >
            <span>Live</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        ) : (
          <span className="text-[10px] font-mono text-gray-500">Privé / Local</span>
        )}
      </div>
    </motion.div>
  );
}

export function SexyProjects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative py-28 sm:py-36 bg-gradient-to-b from-gray-950 via-[#070c18] to-gray-950 overflow-hidden"
    >
      {/* Background Ambient Aura */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-purple-900/15 via-pink-900/10 to-transparent rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:36px_36px]" />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <Badge
            variant="outline"
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono border-purple-500/30 bg-purple-500/10 text-purple-300 rounded-full mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Réalisations & Systèmes en Production</span>
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Des produits réels, conçus pour{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">
              performer et convertir
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto font-light">
            De la plateforme SaaS propulsée par l&apos;IA aux architectures ERP/CRM haute
            disponibilité, explorez une sélection de projets livrés en production.
          </p>
        </motion.div>

        {/* Filter Tabs Bar */}
        <div className="flex items-center justify-center mb-12 sm:mb-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl border border-white/10 bg-gray-950/80 backdrop-blur-xl shadow-lg">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveFilter(tab.key)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "bg-purple-600 text-white shadow-md shadow-purple-600/30 font-semibold"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-white/5 text-gray-500"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectBrowserCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-gray-950/70 backdrop-blur-xl p-8 max-w-4xl mx-auto text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-extrabold font-mono text-purple-400">15+</div>
              <div className="text-xs text-gray-400 font-mono mt-1">Projets livrés</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold font-mono text-indigo-400">100%</div>
              <div className="text-xs text-gray-400 font-mono mt-1">TypeScript Strict</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold font-mono text-emerald-400">99.9%</div>
              <div className="text-xs text-gray-400 font-mono mt-1">Uptime Vercel Edge</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold font-mono text-pink-400">&lt; 2 sem.</div>
              <div className="text-xs text-gray-400 font-mono mt-1">Livraison moyenne MVP</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
