"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Bot,
  Server,
  Smartphone,
  CreditCard,
  Gauge,
  Sparkles,
  ArrowUpRight,
  MessageSquare,
  CheckCircle2,
  Zap,
} from "lucide-react";
import Link from "next/link";

export function Services() {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-gray-900 via-[#0f1729] to-gray-900 overflow-hidden text-white"
    >
      {/* Background Subtle Grid & Ambient Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-purple-600/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-indigo-600/15 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 sm:mb-16"
        >
          <Badge
            variant="outline"
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono border-purple-500/30 bg-purple-500/10 text-purple-300 rounded-full mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Architecture & Développement</span>
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Des solutions sur mesure,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">
              pensées pour scaler
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            De la maquette à la mise en production, chaque brique technique est conçue
            avec rigueur pour offrir performance, fiabilité et expérience utilisateur irréprochable.
          </p>
        </motion.div>

        {/* ──────────── BENTO GRID SHOWCASE ──────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* 1. Large Card: Web Full Stack (Col span 2 on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2 group relative rounded-2xl border border-white/10 bg-gray-950/70 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between hover:border-purple-500/40 hover:bg-gray-900/70 transition-all duration-300 shadow-xl overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-all">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-purple-400 uppercase tracking-wider">
                      01 // Web Full Stack
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Applications Web & Portails Métier
                    </h3>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className="hidden sm:inline-flex text-[10px] font-mono border-white/10 text-gray-400"
                >
                  SSR / SSG
                </Badge>
              </div>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xl">
                Création de plateformes web réactives et optimisées pour le référencement naturel.
                Architecture modulaire Next.js 14, rendu hybride, intégration de design systems sur mesure
                et gestion d’état fluide.
              </p>

              {/* Interactive Code Preview Inside Card */}
              <div className="mt-5 rounded-xl border border-white/10 bg-gray-950/80 p-3 sm:p-4 font-mono text-xs shadow-inner">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[11px] text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    <span className="ml-2 text-gray-400">app/(dashboard)/page.tsx</span>
                  </div>
                  <span className="text-purple-400">React Server Component</span>
                </div>
                <div className="space-y-1 text-gray-300 text-[11px] sm:text-xs">
                  <p>
                    <span className="text-purple-400">export default async function</span>{" "}
                    <span className="text-blue-400">Dashboard</span>() &#123;
                  </p>
                  <p className="pl-4 text-gray-400">
                    const metrics = <span className="text-purple-400">await</span>{" "}
                    <span className="text-yellow-300">getAnalytics</span>(&#123; cache:{" "}
                    <span className="text-emerald-400">&apos;force-cache&apos;</span> &#125;);
                  </p>
                  <p className="pl-4 text-gray-400">
                    return &lt;<span className="text-blue-400">AnalyticsView</span> data=&#123;metrics&#125; /&gt;;
                  </p>
                  <p>&#125;</p>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Shadcn UI"].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-[11px] font-mono px-2 py-0.5 border-white/10 bg-white/[0.02] text-gray-300"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-1 text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors group/link"
              >
                <span>Démarrer un projet web</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>

          {/* 2. Card: IA & Automatisation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="group relative rounded-2xl border border-white/10 bg-gray-950/70 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between hover:border-purple-500/40 hover:bg-gray-900/70 transition-all duration-300 shadow-xl overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-all">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="font-mono text-[11px] text-gray-500">02 // IA & AGENTS</span>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight">
                Intégration IA & Automatisation
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed">
                Implémentation d&apos;agents autonomes, modèles LLM (OpenAI, Claude) et pipelines n8n
                pour automatiser vos processus métier.
              </p>

              {/* Visual simulation */}
              <div className="mt-5 rounded-xl border border-purple-500/20 bg-purple-950/20 p-3 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-purple-300">
                  <span className="flex items-center gap-1.5 font-mono">
                    <Zap className="w-3.5 h-3.5 text-purple-400" /> Workflow n8n
                  </span>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-mono">
                    Opérationnel
                  </span>
                </div>
                <div className="p-2 rounded bg-gray-950/70 border border-white/5 text-[11px] text-gray-300 flex items-center justify-between font-mono">
                  <span>Webhook → Claude → DB</span>
                  <span className="text-gray-500 text-[10px]">~240ms</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {["OpenAI", "Claude", "n8n", "RAG"].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-[10px] font-mono px-1.5 py-0.5 border-white/10 text-gray-400"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <Link
                href="#contact"
                className="text-xs font-medium text-purple-400 hover:text-purple-300"
              >
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* 3. Card: Backend & APIs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="group relative rounded-2xl border border-white/10 bg-gray-950/70 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between hover:border-purple-500/40 hover:bg-gray-900/70 transition-all duration-300 shadow-xl overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-all">
                  <Server className="w-5 h-5" />
                </div>
                <span className="font-mono text-[11px] text-gray-500">03 // BACKEND</span>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight">
                Architecture Backend & APIs
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed">
                APIs REST et microservices haute fréquence avec NestJS et Node.js.
                Bases de données PostgreSQL, cache Redis et schémas relationnels avec Prisma.
              </p>

              {/* Visual simulation */}
              <div className="mt-5 rounded-xl border border-white/10 bg-gray-950/80 p-3 font-mono text-[11px] space-y-1.5">
                <div className="flex items-center justify-between text-gray-400">
                  <span className="text-emerald-400 font-bold">GET</span>
                  <span>/api/v1/projects</span>
                  <span className="text-emerald-400 text-[10px]">200 OK</span>
                </div>
                <div className="flex items-center justify-between text-gray-400">
                  <span className="text-blue-400 font-bold">POST</span>
                  <span>/api/v1/webhooks</span>
                  <span className="text-emerald-400 text-[10px]">201 OK</span>
                </div>
                <div className="pt-1 text-[10px] text-gray-500 flex justify-between border-t border-white/5">
                  <span>Prisma + PostgreSQL</span>
                  <span className="text-purple-400">Redis: HIT</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {["NestJS", "PostgreSQL", "Prisma", "Redis"].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-[10px] font-mono px-1.5 py-0.5 border-white/10 text-gray-400"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <Link
                href="#contact"
                className="text-xs font-medium text-purple-400 hover:text-purple-300"
              >
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* 4. Card: Mobile Apps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="group relative rounded-2xl border border-white/10 bg-gray-950/70 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between hover:border-purple-500/40 hover:bg-gray-900/70 transition-all duration-300 shadow-xl overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-all">
                  <Smartphone className="w-5 h-5" />
                </div>
                <span className="font-mono text-[11px] text-gray-500">04 // MOBILE</span>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight">
                Applications Mobiles iOS & Android
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed">
                Développement cross-platform avec React Native et Expo. Expérience native fluide,
                support hors-ligne et publication sur l’App Store et Google Play.
              </p>

              {/* Visual simulation */}
              <div className="mt-5 rounded-xl border border-white/10 bg-gray-950/80 p-3 text-xs flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Smartphone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Expo SDK</p>
                    <p className="text-[10px] text-gray-400">Cross-Platform Natif</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  Prêt Store
                </span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {["React Native", "Expo", "TypeScript", "PWA"].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-[10px] font-mono px-1.5 py-0.5 border-white/10 text-gray-400"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <Link
                href="#contact"
                className="text-xs font-medium text-purple-400 hover:text-purple-300"
              >
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* 5. Card: SaaS & Monétisation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="group relative rounded-2xl border border-white/10 bg-gray-950/70 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between hover:border-purple-500/40 hover:bg-gray-900/70 transition-all duration-300 shadow-xl overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-all">
                  <CreditCard className="w-5 h-5" />
                </div>
                <span className="font-mono text-[11px] text-gray-500">05 // SAAS</span>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight">
                Plateformes SaaS & Monétisation
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed">
                Intégration complète de la monétisation : abonnements Stripe, portail de facturation,
                gestion multi-utilisateurs et tableaux de bord analytiques.
              </p>

              {/* Visual simulation */}
              <div className="mt-5 rounded-xl border border-white/10 bg-gray-950/80 p-3 text-xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-[11px] font-mono">Stripe Billing</span>
                  <span className="text-emerald-400 font-semibold text-xs flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Validé
                  </span>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-white/5">
                  <span className="text-gray-300 text-[11px]">Plan Pro Mensuel</span>
                  <span className="text-purple-300 font-bold text-xs">Abonnement actif</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {["Stripe", "Auth", "Multi-tenant", "Dashboard"].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-[10px] font-mono px-1.5 py-0.5 border-white/10 text-gray-400"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <Link
                href="#contact"
                className="text-xs font-medium text-purple-400 hover:text-purple-300"
              >
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* 6. Card: DevOps, Performance & Qualité (Full width banner) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="lg:col-span-3 group relative rounded-2xl border border-white/10 bg-gray-950/70 backdrop-blur-xl p-6 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-purple-500/40 hover:bg-gray-900/70 transition-all duration-300 shadow-xl overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-all">
                <Gauge className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[11px] text-purple-400 uppercase tracking-wider">
                    06 // Qualité & Performance
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    Core Web Vitals
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Performance Extrême, Sécurité & DevOps
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mt-1 max-w-xl">
                  Audits Lighthouse, pipelines CI/CD automatisés, sécurisation des flux et déploiement
                  haute disponibilité pour des applications réactives sous forte charge.
                </p>
              </div>
            </div>

            {/* Metrics Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto shrink-0">
              <div className="p-2.5 rounded-xl border border-white/10 bg-gray-950/80 text-center">
                <p className="text-lg font-bold text-emerald-400 font-mono">100</p>
                <p className="text-[10px] text-gray-400">Performance</p>
              </div>
              <div className="p-2.5 rounded-xl border border-white/10 bg-gray-950/80 text-center">
                <p className="text-lg font-bold text-emerald-400 font-mono">100</p>
                <p className="text-[10px] text-gray-400">SEO & Access.</p>
              </div>
              <div className="p-2.5 rounded-xl border border-white/10 bg-gray-950/80 text-center">
                <p className="text-lg font-bold text-purple-300 font-mono">&lt;0.8s</p>
                <p className="text-[10px] text-gray-400">First Paint</p>
              </div>
              <div className="p-2.5 rounded-xl border border-white/10 bg-gray-950/80 text-center">
                <p className="text-lg font-bold text-purple-300 font-mono">99.9%</p>
                <p className="text-[10px] text-gray-400">Uptime</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-12 sm:mt-16 rounded-2xl border border-white/10 bg-gradient-to-r from-purple-950/30 via-gray-950/60 to-indigo-950/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-xl shadow-xl"
        >
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Vous avez un projet spécifique en tête ?
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Discutons de vos besoins techniques, de vos délais et du scope de livraison.
            </p>
          </div>

          <Button
            asChild
            size="default"
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium gap-2 shadow-lg shadow-purple-900/30 h-9 px-5 text-sm shrink-0 rounded-md"
          >
            <Link href="#contact">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Démarrer une discussion</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}