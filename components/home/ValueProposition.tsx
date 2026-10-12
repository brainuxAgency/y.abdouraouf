"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Cpu,
  Sparkles,
  GitBranch,
  Check,
  X,
  ArrowRight,
  Gauge,
  ShieldCheck,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Pillar {
  id: string;
  tag: string;
  title: string;
  shortDesc: string;
  icon: typeof Zap;
  color: string;
  badgeBg: string;
}

const pillars: Pillar[] = [
  {
    id: "speed",
    tag: "Core Web Vitals",
    title: "Vitesse Pure & Edge Performance",
    shortDesc:
      "Chaque seconde de chargement coûte des clients. Je conçois des applications ultra-légères avec un TTFB sous les 50ms et un score Lighthouse de 100/100.",
    icon: Gauge,
    color: "#F59E0B",
    badgeBg: "rgba(245, 158, 11, 0.1)",
  },
  {
    id: "architecture",
    tag: "Clean Code & Zéro Dette",
    title: "Architecture Robuste & Type-Safe",
    shortDesc:
      "Du code structuré pour durer et évoluer. Typage strict TypeScript de bout en bout, découplage modulaire et validation de données garantie avec Zod.",
    icon: Cpu,
    color: "#6366F1",
    badgeBg: "rgba(99, 102, 241, 0.1)",
  },
  {
    id: "ai",
    tag: "Automatisation Pratique",
    title: "Pipelines IA & Workflows Autonomes",
    shortDesc:
      "L'IA comme levier d'affaires, pas comme simple gadget. Intégration d'agents Claude/OpenAI et orchestrations n8n pour automatiser vos tâches les plus lourdes.",
    icon: Sparkles,
    color: "#10B981",
    badgeBg: "rgba(16, 185, 129, 0.1)",
  },
  {
    id: "delivery",
    tag: "Méthode Agile",
    title: "Zéro Effet Tunnel & Démos Régulières",
    shortDesc:
      "Accès direct à un lien de prévisualisation dès la première semaine. Vous testez l'avancement au fur et à mesure sans jamais attendre la fin du contrat.",
    icon: GitBranch,
    color: "#EC4899",
    badgeBg: "rgba(236, 72, 153, 0.1)",
  },
];

const comparisonData = [
  {
    criteria: "Vitesse & Optimisation",
    standard: "Temps de chargement > 3.5s, plugins lourds",
    mine: "< 50ms TTFB, Lighthouse 100/100, rendu Edge",
  },
  {
    criteria: "Qualité & Pérennité du code",
    standard: "Javascript non typé, dépendances fragiles",
    mine: "100% TypeScript Strict, Zod, NestJS & Next.js",
  },
  {
    criteria: "Automatisation des process",
    standard: "Tâches manuelles répétitives sans IA",
    mine: "Agents LLM sur-mesure & pipelines n8n intégrés",
  },
  {
    criteria: "Visibilité & Communication",
    standard: "Effet tunnel de 2 mois sans voir le code",
    mine: "Démos hebdomadaires, repo Git ouvert, feedback continu",
  },
  {
    criteria: "Interlocuteur",
    standard: "Chef de projet commercial intermédiaire",
    mine: "Échange direct avec votre développeur dédié",
  },
];

export function ValueProposition() {
  const [activeTab, setActiveTab] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const navHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const currentPillar = pillars[activeTab];

  return (
    <section
      id="valeur"
      className="relative py-28 sm:py-36 bg-gradient-to-b from-gray-950 via-[#070b14] to-gray-950 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-purple-900/10 via-indigo-950/20 to-transparent rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <Badge
            variant="outline"
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono border-purple-500/30 bg-purple-500/10 text-purple-300 rounded-full mb-4 shadow-sm"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
            <span>Mon Standard d&apos;Ingénierie</span>
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Ce que vous achetez vraiment :{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">
              de la sérénité
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto font-light">
            Une approche méthodique qui élimine l&apos;improvisation et la dette technique.
            Explorez les 4 piliers concrets de chaque projet que je livre.
          </p>
        </motion.div>

        {/* ── 1. INTERACTIVE SPLIT STAGE (Left: Pillars / Right: Live Inspector) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-20 items-stretch">
          {/* Left: Pillar Selector */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            {pillars.map((pillar, idx) => {
              const isActive = activeTab === idx;
              const Icon = pillar.icon;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                    isActive
                      ? "border-purple-500/50 bg-gray-900/90 shadow-xl shadow-purple-950/20"
                      : "border-white/5 bg-gray-950/40 hover:border-white/15 hover:bg-gray-900/40"
                  }`}
                >
                  {/* Left accent indicator bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBar"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-pink-500"
                    />
                  )}

                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                        isActive
                          ? "border-purple-400/40 bg-purple-500/20 text-purple-300 scale-105"
                          : "border-white/10 bg-white/[0.04] text-gray-400 group-hover:text-gray-200"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400">
                          {pillar.tag}
                        </span>
                        <span className="text-[11px] font-mono text-gray-400">
                          0{idx + 1}
                        </span>
                      </div>

                      <h3
                        className={`text-base font-bold transition-colors ${
                          isActive ? "text-white" : "text-gray-300 group-hover:text-white"
                        }`}
                      >
                        {pillar.title}
                      </h3>

                      <p className="text-xs text-gray-400 leading-relaxed mt-1 font-light line-clamp-2">
                        {pillar.shortDesc}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Live Interactive Inspector Display */}
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-gray-950/80 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-purple-950/20">
            {/* Top inspector bar */}
            <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-xs font-mono text-gray-400 ml-2">
                  inspector :: {currentPillar.id}.preview
                </span>
              </div>
              <Badge
                variant="outline"
                className="text-[11px] font-mono border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
              >
                LIVE MONITORING
              </Badge>
            </div>

            {/* Dynamic Panel Content based on Tab */}
            <AnimatePresence mode="wait">
              {activeTab === 0 && (
                <motion.div
                  key="tab-speed"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 flex-1 flex flex-col justify-center"
                >
                  <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-xl bg-gray-900/70 border border-white/5">
                    {/* Big 100 Score Dial */}
                    <div className="relative w-28 h-28 shrink-0 flex items-center justify-center rounded-full bg-emerald-500/10 border-4 border-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                      <div className="text-center">
                        <div className="text-3xl font-black font-mono text-emerald-400">
                          100
                        </div>
                        <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                          Lighthouse
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 space-y-2 text-center sm:text-left">
                      <h4 className="text-lg font-bold text-white">
                        Performance & Core Web Vitals Verts
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Chaque ressource est minifiée, pré-chargée et servie au plus proche de vos utilisateurs grâce au cache distribué Edge.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <div className="text-[10px] text-gray-500">TTFB (Edge)</div>
                      <div className="text-base font-bold text-emerald-400 mt-0.5">28ms</div>
                      <div className="text-[9px] text-gray-500">HIT Cache</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <div className="text-[10px] text-gray-500">FCP (Rendu)</div>
                      <div className="text-base font-bold text-emerald-400 mt-0.5">0.3s</div>
                      <div className="text-[9px] text-gray-500">Instantané</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <div className="text-[10px] text-gray-500">LCP (Grand Élem.)</div>
                      <div className="text-base font-bold text-emerald-400 mt-0.5">0.6s</div>
                      <div className="text-[9px] text-gray-500">Optimal</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                      <div className="text-[10px] text-gray-500">CLS (Stabilité)</div>
                      <div className="text-base font-bold text-emerald-400 mt-0.5">0.00</div>
                      <div className="text-[9px] text-gray-500">Zéro saut</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 1 && (
                <motion.div
                  key="tab-architecture"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 flex-1 flex flex-col justify-center"
                >
                  <div className="p-4 rounded-xl bg-gray-900/90 border border-white/10 font-mono text-xs">
                    <div className="text-gray-500 mb-2">{`// Contrat d'architecture strict (Zod + TypeScript)`}</div>
                    <div className="text-purple-400">
                      <span className="text-pink-400">export const</span> ProjectPayloadSchema = z.object&#40;&#123;
                    </div>
                    <div className="pl-4 text-gray-300">
                      id: z.string().cuid(),<br />
                      title: z.string().min(3),<br />
                      status: z.enum([&quot;STAGING&quot;, &quot;PRODUCTION&quot;]),<br />
                      metrics: z.object(&#123; latencyMs: z.number().max(50) &#125;)<br />
                    </div>
                    <div className="text-purple-400">&#125;&#41;;</div>
                    <div className="text-emerald-400 mt-2 font-bold flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5" /> 100% Type-Safe · 0 erreur runtime possible
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs font-mono text-gray-400">
                    <span>Validation stricte côté serveur</span>
                    <span className="text-indigo-400 font-semibold">NestJS Guards & DTO</span>
                  </div>
                </motion.div>
              )}

              {activeTab === 2 && (
                <motion.div
                  key="tab-ai"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 flex-1 flex flex-col justify-center"
                >
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-gray-900/90 border border-emerald-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-white font-semibold">1. Webhook Déclencheur</span>
                      </div>
                      <span className="text-gray-400 text-[11px]">Événement Stripe / Formulaire</span>
                    </div>

                    <div className="flex justify-center">
                      <div className="h-4 w-px bg-purple-500/50" />
                    </div>

                    <div className="p-3 rounded-xl bg-gray-900/90 border border-purple-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-white font-semibold">2. Pipeline n8n & Claude 3.5</span>
                      </div>
                      <span className="text-purple-300 text-[11px]">Enrichissement & Décision</span>
                    </div>

                    <div className="flex justify-center">
                      <div className="h-4 w-px bg-purple-500/50" />
                    </div>

                    <div className="p-3 rounded-xl bg-gray-900/90 border border-emerald-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-white font-semibold">3. Mise à jour Base & Notif</span>
                      </div>
                      <span className="text-emerald-400 text-[11px]">Exécution en 220ms</span>
                    </div>
                  </div>

                  <div className="text-center pt-2">
                    <span className="text-xs font-mono text-gray-400">
                      ⚡ Économie mesurée : <strong className="text-white">~15h / semaine</strong> de saisie manuelle supprimée
                    </span>
                  </div>
                </motion.div>
              )}

              {activeTab === 3 && (
                <motion.div
                  key="tab-delivery"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3 flex-1 flex flex-col justify-center"
                >
                  <div className="space-y-2.5 font-mono text-xs">
                    <div className="p-3 rounded-lg bg-gray-900/80 border border-white/5 flex items-center justify-between">
                      <span className="text-gray-400">Semaine 1</span>
                      <span className="text-white font-bold">Architecture & Base de données posée</span>
                      <Badge className="bg-emerald-500/20 text-emerald-300 text-[10px]">LIVRÉ</Badge>
                    </div>

                    <div className="p-3 rounded-lg bg-gray-900/80 border border-purple-500/30 flex items-center justify-between">
                      <span className="text-purple-400">Semaine 2</span>
                      <span className="text-white font-bold">Lien Vercel Staging actif (Démo testable)</span>
                      <Badge className="bg-purple-500/20 text-purple-300 text-[10px]">EN LIGNE</Badge>
                    </div>

                    <div className="p-3 rounded-lg bg-gray-900/80 border border-white/5 flex items-center justify-between">
                      <span className="text-gray-400">Semaine 3</span>
                      <span className="text-white font-bold">Intégrations IA, Paiements & Auth</span>
                      <Badge className="bg-blue-500/20 text-blue-300 text-[10px]">VALIDÉ</Badge>
                    </div>

                    <div className="p-3 rounded-lg bg-gray-900/80 border border-white/5 flex items-center justify-between">
                      <span className="text-gray-400">Semaine 4</span>
                      <span className="text-white font-bold">Mise en production & Formation équipe</span>
                      <Badge className="bg-emerald-500/20 text-emerald-300 text-[10px]">FINALISÉ</Badge>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 text-center font-mono mt-2">
                    Accès transparent au repository GitHub pour inspecter chaque commit.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom summary note */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400">
              <span>Standard d&apos;excellence Abdouraouf</span>
              <span className="text-purple-400">Garanti sans dette technique</span>
            </div>
          </div>
        </div>

        {/* ── 2. THE COMPARISON MATRIX (Minimalist Linear/Vercel Table) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 sm:mb-20 rounded-2xl border border-white/10 bg-gray-950/60 backdrop-blur-xl overflow-hidden"
        >
          <div className="p-6 sm:p-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                La différence concrète au quotidien
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 font-light">
                Comparatif direct entre un développement classique et mon approche d&apos;ingénieur.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-gray-400">
                <X className="w-3.5 h-3.5 text-red-400" /> À éviter
              </span>
              <span className="flex items-center gap-1.5 text-emerald-300 font-semibold">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Mon standard
              </span>
            </div>
          </div>

          <div className="divide-y divide-white/5">
            {comparisonData.map((row) => (
              <div
                key={row.criteria}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 p-5 sm:px-8 items-center hover:bg-white/[0.015] transition-colors"
              >
                <div className="md:col-span-3 text-sm font-semibold text-gray-300">
                  {row.criteria}
                </div>

                <div className="md:col-span-4 flex items-center gap-2 text-xs text-gray-400 font-light">
                  <X className="w-4 h-4 text-red-400/80 shrink-0" />
                  <span>{row.standard}</span>
                </div>

                <div className="md:col-span-5 flex items-center gap-2 text-xs text-gray-200 font-medium bg-purple-500/[0.04] p-2.5 rounded-lg border border-purple-500/10">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{row.mine}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── 3. REFINED CALL TO ACTION CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl border border-purple-500/30 bg-gradient-to-b from-purple-950/30 via-gray-950/80 to-gray-950/90 p-8 sm:p-12 backdrop-blur-2xl text-center overflow-hidden shadow-2xl shadow-purple-950/30"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/70 to-transparent" />

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-mono mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Disponible pour nouveaux projets & missions freelance</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 max-w-2xl mx-auto">
            Prêt à propulser votre produit{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">
              au niveau supérieur ?
            </span>
          </h3>

          <p className="text-sm sm:text-base text-gray-300/90 leading-relaxed max-w-xl mx-auto mb-8 font-light">
            Discutons de vos besoins d&apos;architecture, de développement Next.js
            ou d&apos;intégration IA lors d&apos;un échange direct de 30 minutes, sans
            engagement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold px-7 py-6 text-sm sm:text-base rounded-xl shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Planifier un échange gratuit</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="w-full sm:w-auto border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/30 text-gray-300 hover:text-white px-7 py-6 text-sm sm:text-base rounded-xl backdrop-blur-sm transition-all"
            >
              Explorer mes réalisations
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}