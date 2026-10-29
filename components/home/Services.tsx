"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Layers,
  LayoutDashboard,
  RefreshCw,
  TrendingUp,
  Check,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Eye,
  Download,
  Share2,
  Sparkles,
  Zap,
} from "lucide-react"
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiPostgresql,
  SiStripe,
  SiTailwindcss,
  SiPrisma,
  SiDocker,
  SiLinkedin,
  SiX,
  SiInstagram,
  SiYoutube,
} from "react-icons/si"

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-gradient-to-b from-[#090b0f] to-[#07090d] overflow-hidden">
      
      {/* Texture d'arrière-plan signature */}
      <div className="pointer-events-none absolute inset-0 bg-pulsor-dots bg-pulsor-dots-fade opacity-70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section avec typographie Montserrat */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/10 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-montserrat uppercase tracking-wider text-[#2449D8] font-bold block mb-2">
              02 // Formats d&apos;intervention & Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.08]">
              Des solutions concrètes pour vos produits & outils métier.
            </h2>
          </div>

          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-montserrat font-semibold text-white bg-orange-800 hover:bg-orange-700 transition-colors shrink-0 shadow-md cursor-pointer"
          >
            <span>Planifier un échange</span>
            <span className="pulsor-btn-arrow text-xs">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Grille 2x2 ultra-posée en mode clair avec fenêtres logicielles immersives */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* ========================================================= */}
          {/* CARTE 1 : SAAS & MULTI-DIFFUSION */}
          {/* ========================================================= */}
          <div className="border border-[#E2E4DE] bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#16181D] transition-all relative overflow-hidden group">
            
            {/* Lueur d'ambiance discrète */}
            <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 bg-[#2449D8]/5 rounded-full blur-3xl" />

            {/* VIEWPORT LOGICIEL IMMERSIF CLAIR */}
            <div className="bg-[#F7F8F5] rounded-2xl border border-[#E2E4DE] p-4 sm:p-5 mb-7 select-none relative shadow-inner">
              
              <div className="grid grid-cols-12 gap-3 sm:gap-4 items-center">
                
                {/* Colonne gauche : Canaux connectés */}
                <div className="col-span-5 bg-white rounded-xl p-3 border border-[#E2E4DE] shadow-xs space-y-2">
                  <div className="flex items-center justify-between pb-2 border-b border-[#EBECE7]">
                    <span className="text-[10px] font-montserrat font-bold text-[#16181D]">Réseaux reliés</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <div className="space-y-1.5 text-[10px] font-montserrat">
                    <div className="flex items-center justify-between p-1.5 bg-[#F7F8F5] rounded-md border border-[#EBECE7]">
                      <span className="flex items-center gap-1.5 text-[#16181D] font-medium">
                        <SiLinkedin className="w-2.5 h-2.5 text-[#0A66C2]" /> LinkedIn
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="flex items-center justify-between p-1.5 bg-[#F7F8F5] rounded-md border border-[#EBECE7]">
                      <span className="flex items-center gap-1.5 text-[#16181D] font-medium">
                        <SiX className="w-2.5 h-2.5 text-[#16181D]" /> X / Twitter
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="flex items-center justify-between p-1.5 bg-[#F7F8F5] rounded-md border border-[#EBECE7]">
                      <span className="flex items-center gap-1.5 text-[#16181D] font-medium">
                        <SiInstagram className="w-2.5 h-2.5 text-[#E4405F]" /> Instagram
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="flex items-center justify-between p-1.5 bg-[#F7F8F5] rounded-md border border-[#EBECE7]">
                      <span className="flex items-center gap-1.5 text-[#16181D] font-medium">
                        <SiYoutube className="w-2.5 h-2.5 text-[#FF0000]" /> YouTube
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </div>
                  </div>
                </div>

                {/* Colonne droite : File de multidiffusion (Ripostera) */}
                <div className="col-span-7 space-y-2">
                  {/* Fausse barre d'URL */}
                  <div className="px-2.5 py-1.5 bg-white rounded-lg border border-[#E2E4DE] text-[9px] font-montserrat text-[#636773] flex items-center justify-between truncate shadow-xs">
                    <span className="font-medium text-[#16181D]">app.ripostera.com/pipeline</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2449D8]" />
                  </div>

                  {/* Ligne de contenu programmée */}
                  <div className="p-2.5 bg-white rounded-xl border border-[#E2E4DE] shadow-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-montserrat font-bold text-[#16181D] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2449D8]" />
                        Post #104 — SaaS Launch
                      </span>
                      <span className="text-[9px] font-montserrat text-[#636773]">12 Juin 2026</span>
                    </div>
                    <div className="flex items-center justify-between text-[9px] font-montserrat pt-1.5 border-t border-[#EBECE7] text-[#636773]">
                      <span>4 réseaux ciblés</span>
                      <div className="flex items-center gap-1.5 text-[#16181D]">
                        <Eye className="w-3 h-3 text-[#636773]" />
                        <Download className="w-3 h-3 text-[#636773]" />
                      </div>
                    </div>
                  </div>

                  {/* Badge flottant avec aura douce */}
                  <div className="p-2 bg-[#EEF2FF] rounded-xl border border-[#C7D2FE] text-center">
                    <span className="text-[10px] font-montserrat font-semibold text-[#2449D8] flex items-center justify-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#2449D8]" />
                      Multidiffusion asynchrone active
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Contenu textuel & promesse */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-[#F0F1EE] border border-[#E2E4DE] flex items-center justify-center text-[#2449D8]">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#16181D] font-montserrat">
                  Architecture SaaS & Produits MVP
                </h3>
              </div>
              
              <p className="text-xs sm:text-sm text-[#555963] leading-relaxed font-normal mb-5">
                Conception de plateformes scalables complètes : authentification sécurisée, gestion des abonnements Stripe, queues de traitement asynchrones et interfaces fluides.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#E2E4DE]">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-montserrat font-medium bg-[#F0F1EE] text-[#16181D] border border-[#E2E4DE]">
                  Next.js App Router
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-montserrat font-medium bg-[#F0F1EE] text-[#16181D] border border-[#E2E4DE]">
                  Stripe Subscriptions
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-montserrat font-medium bg-[#F0F1EE] text-[#16181D] border border-[#E2E4DE]">
                  PostgreSQL & Prisma
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-montserrat font-medium bg-[#F0F1EE] text-[#16181D] border border-[#E2E4DE]">
                  Zod Validation
                </span>
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* CARTE 2 : ERP & CRM SUR MESURE */}
          {/* ========================================================= */}
          <div className="border border-[#E2E4DE] bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#16181D] transition-all relative overflow-hidden group">
            
            {/* Lueur d'ambiance violette discrète */}
            <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

            {/* VIEWPORT LOGICIEL IMMERSIF CLAIR */}
            <div className="bg-[#F7F8F5] rounded-2xl border border-[#E2E4DE] p-4 sm:p-5 mb-7 select-none relative shadow-inner">
              
              {/* Ligne d'en-tête du CRM */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EBECE7] text-[10px] font-montserrat">
                <span className="font-semibold text-[#16181D]">HMRENOV26 // Devis & Facturation</span>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                  Zéro perte Excel
                </span>
              </div>

              {/* CARD FLOTTANTE SURÉLEVÉE BLANCHE */}
              <div className="p-3.5 bg-white rounded-2xl border border-purple-200 shadow-sm relative z-10 mb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-md bg-purple-50 text-purple-700 border border-purple-200 flex items-center justify-center font-bold text-[10px]">
                      HM
                    </div>
                    <span className="text-xs font-montserrat font-bold text-[#16181D]">
                      Devis #2026-88 — Rénovation
                    </span>
                  </div>
                  <span className="text-xs font-montserrat font-bold text-emerald-600">
                    14 200,00 €
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#EBECE7] text-[9px] font-montserrat">
                  <div>
                    <span className="block text-[#636773]">Client</span>
                    <span className="text-[#16181D] font-semibold truncate block">SCI Haussmann</span>
                  </div>
                  <div>
                    <span className="block text-[#636773]">Date</span>
                    <span className="text-[#16181D] font-semibold block">12 Juin 2026</span>
                  </div>
                  <div>
                    <span className="block text-[#636773]">Statut</span>
                    <span className="text-emerald-600 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Signé
                    </span>
                  </div>
                </div>
              </div>

              {/* Pill flottant */}
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2E4DE] text-[10px] font-montserrat text-[#16181D] shadow-xs">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Rapprochement comptable & PDF généré</span>
                </div>
              </div>

            </div>

            {/* Contenu textuel & promesse */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-[#F0F1EE] border border-[#E2E4DE] flex items-center justify-center text-purple-600">
                  <LayoutDashboard className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#16181D] font-montserrat">
                  Applications Métier & ERP sur Mesure
                </h3>
              </div>
              
              <p className="text-xs sm:text-sm text-[#555963] leading-relaxed font-normal mb-5">
                Remplacement de classeurs Excel fragiles par un outil centralisé et taillé pour vos opérations : édition de devis, facturation, suivi de chantier et synchronisation relationnelle.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#E2E4DE]">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-montserrat font-medium bg-[#F0F1EE] text-[#16181D] border border-[#E2E4DE]">
                  PostgreSQL Dédié
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-montserrat font-medium bg-[#F0F1EE] text-[#16181D] border border-[#E2E4DE]">
                  Tableaux de Bord
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-montserrat font-medium bg-[#F0F1EE] text-[#16181D] border border-[#E2E4DE]">
                  Zustand Store
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-montserrat font-medium bg-[#F0F1EE] text-[#16181D] border border-[#E2E4DE]">
                  Génération PDF
                </span>
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* CARTE 3 : KPIS & PERFORMANCE TEMPS RÉEL */}
          {/* ========================================================= */}
          <div className="border border-[#E2E4DE] bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#16181D] transition-all relative overflow-hidden group">
            
            {/* Lueur d'ambiance dorée / ambrée */}
            <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />

            {/* VIEWPORT LOGICIEL IMMERSIF CLAIR */}
            <div className="bg-[#F7F8F5] rounded-2xl border border-[#E2E4DE] p-4 sm:p-5 mb-7 select-none relative shadow-inner">
              
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EBECE7]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-montserrat font-bold text-[#16181D]">
                    Indicateurs Clés // Production
                  </span>
                </div>
                <span className="text-[9px] font-montserrat text-[#636773]">Temps réel</span>
              </div>

              {/* 2 STATS MONUMENTALES CLAIRES */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-white rounded-xl border border-[#E2E4DE] shadow-xs">
                  <span className="text-[9px] font-montserrat uppercase tracking-wider text-[#636773] block mb-1">
                    Trésorerie opérationnelle
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl sm:text-2xl font-montserrat font-bold text-[#16181D] tracking-tight">
                      76 033 €
                    </span>
                    <span className="text-[10px] font-montserrat font-bold text-emerald-600">
                      ↑ +15%
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#E2E4DE] shadow-xs">
                  <span className="text-[9px] font-montserrat uppercase tracking-wider text-[#636773] block mb-1">
                    Devis & Marge nette
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl sm:text-2xl font-montserrat font-bold text-[#16181D] tracking-tight">
                      28 450 €
                    </span>
                    <span className="text-[10px] font-montserrat font-bold text-emerald-600">
                      ↑ +21%
                    </span>
                  </div>
                </div>
              </div>

              {/* Mini-courbe SVG de progression continue */}
              <div className="h-10 w-full flex items-end gap-1 px-1">
                {[20, 28, 35, 42, 50, 68, 62, 78, 85, 92, 98].map((val, i) => (
                  <div key={i} className="flex-1 bg-[#EBECE7] rounded-t flex items-end h-full">
                    <div
                      className="w-full bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t"
                      style={{ height: `${val}%` }}
                    />
                  </div>
                ))}
              </div>

            </div>

            {/* Contenu textuel & promesse */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-[#F0F1EE] border border-[#E2E4DE] flex items-center justify-center text-emerald-600">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#16181D] font-montserrat">
                  Tableaux de Bord & Visibilité Financière
                </h3>
              </div>
              
              <p className="text-xs sm:text-sm text-[#555963] leading-relaxed font-normal mb-5">
                Pilotage en direct de votre rentabilité, suivi précis de la trésorerie et alertes automatiques pour éclairer chacune de vos prises de décision d&apos;entreprise.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#E2E4DE]">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-montserrat font-medium bg-[#F0F1EE] text-[#16181D] border border-[#E2E4DE]">
                  KPIs Temps Réel
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-montserrat font-medium bg-[#F0F1EE] text-[#16181D] border border-[#E2E4DE]">
                  Graphiques Interactifs
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-montserrat font-medium bg-[#F0F1EE] text-[#16181D] border border-[#E2E4DE]">
                  Agrégation SQL Rapide
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-montserrat font-medium bg-[#F0F1EE] text-[#16181D] border border-[#E2E4DE]">
                  Export Excel & PDF
                </span>
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* CARTE 4 : REPRISE TECHNIQUE & QUALITÉ */}
          {/* ========================================================= */}
          <div className="border border-[#E2E4DE] bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#16181D] transition-all relative overflow-hidden group">
            
            {/* Lueur d'ambiance bleue */}
            <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />

            {/* VIEWPORT LOGICIEL IMMERSIF CLAIR */}
            <div className="bg-[#F7F8F5] rounded-2xl border border-[#E2E4DE] p-4 sm:p-5 mb-7 select-none relative shadow-inner">
              
              {/* En-tête style "Audit de Santé" */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EBECE7]">
                <span className="text-[10px] font-montserrat font-bold text-[#16181D]">
                  Audit de Santé & Sécurité
                </span>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-montserrat bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                  Score A+ Validé
                </span>
              </div>

              {/* Checklist avec coches vertes */}
              <div className="space-y-2 mb-3">
                <div className="flex items-center justify-between p-2 bg-white rounded-xl border border-[#E2E4DE] shadow-xs">
                  <span className="text-[10px] font-montserrat text-[#16181D] flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    TypeScript Strict de bout en bout (zéro &apos;any&apos;)
                  </span>
                  <span className="text-[9px] font-montserrat text-emerald-600 font-bold">100% Type-Safe</span>
                </div>

                <div className="flex items-center justify-between p-2 bg-white rounded-xl border border-[#E2E4DE] shadow-xs">
                  <span className="text-[10px] font-montserrat text-[#16181D] flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    Audit OWASP & Autorisations RBAC
                  </span>
                  <span className="text-[9px] font-montserrat text-emerald-600 font-bold">Sécurisé</span>
                </div>

                <div className="flex items-center justify-between p-2 bg-white rounded-xl border border-[#E2E4DE] shadow-xs">
                  <span className="text-[10px] font-montserrat text-[#16181D] flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    Temps de réponse serveur & Edge Cache
                  </span>
                  <span className="text-[9px] font-montserrat text-[#2449D8] font-bold">TTFB 24ms</span>
                </div>
              </div>

              {/* Pill de garantie finale */}
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2E4DE] text-[10px] font-montserrat text-[#2449D8] shadow-xs">
                  <ShieldCheck className="w-3 h-3 text-[#2449D8]" />
                  <span>Production-Ready & Garantie sans régression</span>
                </div>
              </div>

            </div>

            {/* Contenu textuel & promesse */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-[#F0F1EE] border border-[#E2E4DE] flex items-center justify-center text-[#2449D8]">
                  <RefreshCw className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#16181D] font-montserrat">
                  Reprise, Refonte & Modernisation
                </h3>
              </div>
              
              <p className="text-xs sm:text-sm text-[#555963] leading-relaxed font-normal mb-5">
                Intervention ciblée sur votre application existante pour éliminer la dette technique, corriger les bugs récurrents et migrer vers les standards modernes de Next.js.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#E2E4DE]">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-montserrat font-medium bg-[#F0F1EE] text-[#16181D] border border-[#E2E4DE]">
                  Migration App Router
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-montserrat font-medium bg-[#F0F1EE] text-[#16181D] border border-[#E2E4DE]">
                  Sécurisation OWASP
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-montserrat font-medium bg-[#F0F1EE] text-[#16181D] border border-[#E2E4DE]">
                  Performance Web Vitals
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-montserrat font-medium bg-[#F0F1EE] text-[#16181D] border border-[#E2E4DE]">
                  Code Documenté
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}