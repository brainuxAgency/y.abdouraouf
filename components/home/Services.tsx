"use client"

import Link from "next/link"
import { ArrowUpRight, Check, Layers, LayoutDashboard, RefreshCw, TrendingUp } from "lucide-react"

const tagClass =
  "rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-zinc-300"

const cardClass =
  "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0f1013] p-6 transition-all duration-300 hover:border-white/20 sm:p-8"

const glowClass =
  "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-600/0 blur-3xl transition-colors duration-500 group-hover:bg-orange-600/15"

const mockupClass =
  "relative mb-7 select-none overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c10] shadow-inner shadow-black/60"

const windowBarClass = "flex items-center gap-2 border-b border-white/10 px-4 py-2.5"

function WindowBar({ url }: { url: string }) {
  return (
    <div className={windowBarClass}>
      <span className="h-2 w-2 rounded-full bg-white/15" />
      <span className="h-2 w-2 rounded-full bg-white/15" />
      <span className="h-2 w-2 rounded-full bg-white/15" />
      <span className="ml-3 truncate rounded-md bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-zinc-500">{url}</span>
    </div>
  )
}

function CardHeader({ icon: Icon, title }: { icon: typeof Layers; title: string }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-orange-300">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <h3 className="font-montserrat text-xl font-semibold tracking-tight text-white">{title}</h3>
    </div>
  )
}

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#0a0c10] py-24 sm:py-32">
      {/* Trame technique, estompée */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000,transparent)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="mb-14 flex flex-col justify-between gap-8 border-b border-white/10 pb-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 block font-mono text-[11px] uppercase tracking-[0.2em] text-orange-400">
              02 // Ce que je livre
            </span>
            <h2 className="font-montserrat text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
              Des produits web{" "}
              <span className="font-serif font-normal italic text-zinc-500">prêts à être utilisés.</span>
            </h2>
          </div>

          <Link
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-orange-800 px-6 py-3 font-montserrat text-sm font-semibold text-white shadow-lg shadow-orange-950/40 transition-colors duration-200 hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0c10]"
          >
            Planifier un échange
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Bento */}
        <div className="grid gap-4 md:grid-cols-6">
          {/* 1 : SaaS */}
          <div className={`${cardClass} md:col-span-4`}>
            <div aria-hidden="true" className={glowClass} />
            <div className={mockupClass}>
              <WindowBar url="app.votre-saas.com" />
              <div className="grid grid-cols-[30%_1fr] gap-0">
                <ul className="space-y-1 border-r border-white/10 p-3">
                  {["Vue d'ensemble", "Clients", "Abonnements", "Équipe"].map((item, i) => (
                    <li
                      key={item}
                      className={`rounded-md px-2 py-1.5 text-[11px] ${
                        i === 0 ? "bg-white/10 text-white" : "text-zinc-500"
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="p-4">
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      ["MRR", "4 820 €"],
                      ["Clients", "128"],
                      ["Churn", "1,8 %"],
                    ].map(([k, v]) => (
                      <div key={k} className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
                        <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">{k}</p>
                        <p className="mt-1 font-montserrat text-sm font-semibold text-white">{v}</p>
                      </div>
                    ))}
                  </div>
                  <svg viewBox="0 0 160 56" className="mt-4 h-14 w-full" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="svc-area" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#ea580c" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <polygon points="0,44 20,38 40,40 60,26 80,30 100,16 120,20 140,8 160,12 160,56 0,56" fill="url(#svc-area)" />
                    <polyline
                      points="0,44 20,38 40,40 60,26 80,30 100,16 120,20 140,8 160,12"
                      fill="none"
                      stroke="#fb923c"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <CardHeader icon={Layers} title="Votre SaaS, de l'idée au lancement" />
              <p className="mb-5 max-w-xl text-sm leading-relaxed text-zinc-400">
                Authentification, abonnements Stripe, tableau de bord et traitements asynchrones : une application complète,
                pensée pour accueillir vos premiers clients.
              </p>
              <div className="flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {["Next.js", "Stripe", "PostgreSQL & Prisma", "Authentification"].map((t) => (
                  <span key={t} className={tagClass}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 2 : ERP & CRM */}
          <div className={`${cardClass} md:col-span-2`}>
            <div aria-hidden="true" className={glowClass} />
            <div className={mockupClass}>
              <WindowBar url="crm.votre-entreprise.fr" />
              <div className="space-y-2 p-4">
                {[
                  ["Devis #2026-88", "14 200 €", "Signé", "text-emerald-300 border-emerald-500/30 bg-emerald-500/10"],
                  ["Devis #2026-89", "6 750 €", "En attente", "text-orange-300 border-orange-500/30 bg-orange-500/10"],
                  ["Devis #2026-90", "3 100 €", "Brouillon", "text-zinc-400 border-white/10 bg-white/[0.04]"],
                ].map(([ref, amount, status, pill]) => (
                  <div
                    key={ref}
                    className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2"
                  >
                    <div>
                      <p className="text-[11px] font-medium text-white">{ref}</p>
                      <p className="font-mono text-[10px] text-zinc-500">{amount}</p>
                    </div>
                    <span className={`rounded-full border px-2 py-0.5 text-[9px] ${pill}`}>{status}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <CardHeader icon={LayoutDashboard} title="ERP & CRM sur mesure" />
              <p className="mb-5 text-sm leading-relaxed text-zinc-400">
                Devis, facturation et suivi de chantier dans un seul outil, à la place des classeurs Excel.
              </p>
              <div className="flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {["PostgreSQL", "PDF automatiques", "Rôles & droits"].map((t) => (
                  <span key={t} className={tagClass}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 3 : Tableaux de bord */}
          <div className={`${cardClass} md:col-span-2`}>
            <div aria-hidden="true" className={glowClass} />
            <div className={mockupClass}>
              <WindowBar url="analytics" />
              <div className="flex items-center gap-4 p-4">
                <svg viewBox="0 0 100 100" className="h-24 w-24 shrink-0 -rotate-90" aria-hidden="true">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#ea580c" strokeWidth="12" strokeDasharray="138 251" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#fb923c" strokeWidth="12" strokeDasharray="63 251" strokeDashoffset="-142" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#3f3f46" strokeWidth="12" strokeDasharray="50 251" strokeDashoffset="-209" />
                </svg>
                <ul className="space-y-2 text-[10px]">
                  {[
                    ["Services", "55 %", "bg-orange-600"],
                    ["Licences", "25 %", "bg-orange-400"],
                    ["Support", "20 %", "bg-zinc-600"],
                  ].map(([label, value, dot]) => (
                    <li key={label} className="flex items-center gap-2 text-zinc-400">
                      <span className={`h-2 w-2 rounded-full ${dot}`} />
                      <span className="w-14">{label}</span>
                      <span className="font-mono text-zinc-200">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <CardHeader icon={TrendingUp} title="Tableaux de bord" />
              <p className="mb-5 text-sm leading-relaxed text-zinc-400">
                Trésorerie, marges et alertes en temps réel, pour décider sans attendre la clôture du mois.
              </p>
              <div className="flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {["Temps réel", "Graphiques", "Exports"].map((t) => (
                  <span key={t} className={tagClass}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 4 : Reprise & modernisation */}
          <div className={`${cardClass} md:col-span-4`}>
            <div aria-hidden="true" className={glowClass} />
            <div className={mockupClass}>
              <WindowBar url="projet — modernisation" />
              <ol className="grid gap-3 p-5 sm:grid-cols-4">
                {[
                  ["Audit", "Terminé", "done"],
                  ["Correctifs", "Terminé", "done"],
                  ["Migration", "En cours", "active"],
                  ["Livraison", "À venir", "todo"],
                ].map(([step, state, kind], i) => (
                  <li key={step} className="relative flex flex-col gap-2">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-semibold ${
                        kind === "done"
                          ? "border-emerald-500/40 bg-emerald-500/15 text-emerald-300"
                          : kind === "active"
                            ? "border-orange-400/50 bg-orange-500/15 text-orange-300"
                            : "border-white/10 bg-white/[0.04] text-zinc-500"
                      }`}
                    >
                      {kind === "done" ? <Check className="h-3.5 w-3.5" aria-hidden /> : i + 1}
                    </span>
                    <div className="h-px w-full bg-white/10" />
                    <p className="text-xs font-medium text-white">{step}</p>
                    <p className="font-mono text-[10px] text-zinc-500">{state}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <CardHeader icon={RefreshCw} title="Reprise & modernisation" />
              <p className="mb-5 max-w-xl text-sm leading-relaxed text-zinc-400">
                Je reprends votre application existante : correction des bugs récurrents, réduction de la dette technique,
                migration vers l&apos;App Router de Next.js et sécurisation des accès.
              </p>
              <div className="flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {["Audit de code", "Migration App Router", "Sécurité OWASP", "Performance"].map((t) => (
                  <span key={t} className={tagClass}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
