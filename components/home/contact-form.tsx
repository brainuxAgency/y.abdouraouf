"use client"

import { useState, type ReactNode } from "react"
import {
  Copy,
  Check,
  Sparkles,
  Clock,
  Video,
  Calendar,
  CalendarCheck,
  Link2,
  MessagesSquare,
  ArrowRight,
} from "lucide-react"
import { CalButton } from "@/components/common/CalButton"
import { CAL_LINK } from "@/hooks/use-cal"

const EMAIL = "youssouf.abdouraouf4@gmail.com"

const CALL_OFFERINGS = [
  {
    step: "01",
    badge: "Diagnostic",
    title: "Cadrage & faisabilité technique",
    desc: "Analyse de votre projet, clarification des zones d'ombre et validation de la faisabilité avant d'engager le moindre euro.",
  },
  {
    step: "02",
    badge: "Architecture",
    title: "Recommandations techniques sur-mesure",
    desc: "Une stack moderne et robuste (Next.js, API, base de données, sécurité) pensée pour durer, sans sur-ingénierie.",
  },
  {
    step: "03",
    badge: "Roadmap",
    title: "Plan d'action & estimation sous 48h",
    desc: "Découpage par jalons livrables, chiffrage transparent et délais de réalisation clairs.",
  },
  {
    step: "04",
    badge: "Direct",
    title: "Échange direct avec l'ingénieur",
    desc: "Zéro intermédiaire ni discours commercial : vous parlez à la personne qui conçoit et développe le produit.",
  },
]

const CALL_STATS = [
  { icon: Clock, k: "Durée", v: "30 min" },
  { icon: Video, k: "Format", v: "Visio Meet" },
  { icon: Sparkles, k: "Tarif", v: "Gratuit" },
]

const BOOKING_STEPS = [
  {
    icon: CalendarCheck,
    title: "Choix du créneau",
    desc: "Ouvrez le calendrier interactif et sélectionnez l'horaire qui vous convient.",
  },
  {
    icon: Link2,
    title: "Confirmation immédiate",
    desc: "Lien Google Meet généré automatiquement et ajouté à votre agenda.",
  },
  {
    icon: MessagesSquare,
    title: "Échange 100% concret",
    desc: "30 minutes pour clarifier vos priorités et définir les prochaines étapes.",
  },
]

/** Croix d'intersection (style blueprint) */
function Plus({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute z-20 block h-[11px] w-[11px] ${className}`}
    >
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/50" />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/50" />
    </span>
  )
}

/**
 * Une "rangée" de la section : ligne horizontale pleine largeur,
 * rails verticaux sur les côtés, croix aux intersections.
 */
function Row({
  children,
  className = "",
  last = false,
}: {
  children: ReactNode
  className?: string
  last?: boolean
}) {
  return (
    <div className={`border-t border-white/10 ${last ? "border-b" : ""}`}>
      <div
        className={`relative mx-3 max-w-[1240px] border-x border-white/10 sm:mx-6 xl:mx-auto ${className}`}
      >
        <Plus className="-left-[6px] -top-[6px]" />
        <Plus className="-right-[6px] -top-[6px]" />
        {last && (
          <>
            <Plus className="-bottom-[6px] -left-[6px]" />
            <Plus className="-bottom-[6px] -right-[6px]" />
          </>
        )}
        {children}
      </div>
    </div>
  )
}

export default function ContactForm() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2500)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-[#050609] py-12 sm:py-20">
      {/* Fondu bas vers CtaSection */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#060709] z-20" />
      {/* Grille de fond très discrète, estompée vers le centre pour ne pas charger le contenu */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 35%, #000 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 35%, #000 100%)",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-[#2449D8]/10 blur-[120px]" />

      <div className="relative z-10">
        {/* ============ HEADER ============ */}
        <Row>
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="px-5 py-10 sm:px-10 sm:py-12 lg:col-span-8 lg:border-r lg:border-white/[0.06]">
              <div className="mb-5 inline-flex items-center gap-2 border border-white/15 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-blue-400">
                <span className="h-1.5 w-1.5 bg-[#2449D8]" />
                05 // contact.init()
              </div>
              <h2 className="font-montserrat text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Discutons concrètement
                <br className="hidden sm:block" /> de votre projet.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                Réservez un créneau de 30 minutes en visio pour cadrer votre besoin, vos objectifs
                et votre calendrier.
              </p>
            </div>

            {/* Panneau de statut : les 3 lignes se répartissent sur toute la hauteur */}
            <div className="grid grid-cols-1 divide-y divide-white/[0.06] border-t border-white/10 font-mono text-xs lg:col-span-4 lg:grid-rows-3 lg:border-t-0">
              <div className="flex items-center justify-between px-5 py-4 sm:px-8">
                <span className="text-zinc-500">status</span>
                <span className="flex items-center gap-2 text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  disponible
                </span>
              </div>
              <div className="flex items-center justify-between px-5 py-4 sm:px-8">
                <span className="text-zinc-500">stack</span>
                <span className="text-zinc-300">react · next · ts</span>
              </div>
              <div className="flex items-center justify-between px-5 py-4 sm:px-8">
                <span className="text-zinc-500">réponse</span>
                <span className="text-zinc-300">&lt; 24h</span>
              </div>
            </div>
          </div>
        </Row>

        {/* ============ CONTENU ============ */}
        <Row last>
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* ---------- GAUCHE : ce que le client obtient ---------- */}
            <aside className="order-2 flex flex-col border-t border-white/10 lg:order-1 lg:col-span-5 lg:border-r lg:border-t-0 lg:border-r-white/[0.06]">
       

              {/* Meta clés de l'appel */}
              <div className="grid grid-cols-3 divide-x divide-white/[0.06] border-b border-white/[0.06]">
                {CALL_STATS.map(({ icon: Icon, k, v }) => (
                  <div key={k} className="px-4 py-3.5 sm:px-5">
                    <div className="mb-1 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                      <Icon className="h-3 w-3 text-blue-400" />
                      {k}
                    </div>
                    <div className="font-mono text-sm font-semibold text-white">{v}</div>
                  </div>
                ))}
              </div>

              {/* Label */}
              <div className="border-b border-white/[0.06] bg-white/[0.02] px-5 py-2.5 font-mono text-[10px] uppercase tracking-widest text-zinc-500 sm:px-6">
                // Ce que nous validons ensemble lors du call
              </div>

              {/* 4 bénéfices : les rangées s'étirent pour remplir toute la hauteur */}
              <div className="flex flex-1 flex-col divide-y divide-white/[0.06]">
                {CALL_OFFERINGS.map((item) => (
                  <div
                    key={item.step}
                    className="flex flex-1 items-start gap-4 p-5 transition-colors hover:bg-white/[0.015] sm:p-6"
                  >
                    <span className="pt-0.5 font-mono text-xs font-semibold text-orange-400">
                      {item.step}
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-montserrat text-sm font-bold text-white">
                          {item.title}
                        </h4>
                        <span className="border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                          {item.badge}
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Email */}
              <div className="border-t border-white/10 p-5 sm:p-6">
                <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  $ mail --direct (alternative sans call)
                </span>
                <div className="flex items-center justify-between gap-2 border border-white/10 bg-white/[0.03] py-1.5 pl-3 pr-1.5">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="truncate font-mono text-xs text-zinc-200 transition-colors hover:text-blue-400"
                  >
                    {EMAIL}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copier l'adresse email"
                    title="Copier l'email"
                    className="shrink-0 cursor-pointer p-2 text-zinc-500 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {copiedEmail ? (
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </aside>

            {/* ---------- DROITE : réservation ---------- */}
            <div className="order-1 flex flex-col bg-[#07080c] lg:order-2 lg:col-span-7">
              {/* Barre de fenêtre */}
              <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </div>
                <span className="min-w-0 truncate font-mono text-[11px] text-zinc-500">
                  cal.com/{CAL_LINK}
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  disponible
                </span>
              </div>

              {/* Intro */}
              <div className="px-6 pb-7 pt-7 sm:px-10 sm:pt-9">
                <div className="mb-4 inline-flex items-center gap-2 border border-orange-500/20 bg-orange-500/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-orange-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                  Réservation directe en ligne
                </div>
                <h3 className="font-montserrat text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Planifiez votre session en quelques secondes
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-400">
                  Choisissez le jour et l&apos;heure qui vous conviennent. L&apos;invitation Google
                  Meet est créée instantanément pour cadrer votre projet sans perdre de temps.
                </p>
              </div>

              {/* 3 étapes : s'étirent pour combler la hauteur disponible */}
              <div className="flex flex-1 flex-col divide-y divide-white/[0.06] border-y border-white/[0.06]">
                {BOOKING_STEPS.map(({ icon: Icon, title, desc }, i) => (
                  <div
                    key={title}
                    className="flex flex-1 items-center gap-4 px-6 py-5 transition-colors hover:bg-white/[0.015] sm:px-10"
                  >
                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 bg-white/[0.03]">
                      <Icon className="h-[18px] w-[18px] text-orange-400" />
                      <span className="absolute -right-px -top-px bg-[#07080c] px-1 font-mono text-[9px] font-semibold text-zinc-500">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="min-w-0 text-xs leading-relaxed">
                      <span className="block font-montserrat text-sm font-bold text-zinc-100">
                        {title}
                      </span>
                      <span className="text-zinc-400">{desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="px-6 py-6 sm:px-10">
                <CalButton
                  className="group relative flex w-full cursor-pointer items-center justify-center gap-3 border border-orange-500/40 bg-gradient-to-r from-[#c2410c] via-[#ea580c] to-[#c2410c] px-6 py-4 font-mono text-xs font-semibold uppercase tracking-widest text-white shadow-[0_0_30px_rgba(234,88,12,0.22)] transition-all duration-300 hover:border-orange-400 hover:shadow-[0_0_40px_rgba(234,88,12,0.35)] active:scale-[0.99]"
                >
                  <Calendar className="h-4 w-4 text-orange-200 transition-transform group-hover:scale-110" />
                  <span>Choisir une date &amp; heure</span>
                  <ArrowRight className="h-4 w-4 text-orange-200 transition-transform group-hover:translate-x-1" />
                </CalButton>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 font-mono text-[11px] text-zinc-500">
                  <span className="flex items-center gap-1.5">
                    <Check className="h-3 w-3 text-emerald-400" /> Gratuit &amp; sans engagement
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="h-3 w-3 text-emerald-400" /> Visio Google Meet
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="h-3 w-3 text-emerald-400" /> Zéro relance commerciale
                  </span>
                </div>
              </div>

              {/* Pied de fenêtre */}
              <div className="flex items-center justify-between border-t border-white/[0.06] bg-white/[0.01] px-5 py-3 font-mono text-[11px] text-zinc-500">
                <span>$ cal --open session</span>
                <span className="text-zinc-400">Europe/Paris (UTC+1)</span>
              </div>
            </div>
          </div>
        </Row>
      </div>
    </section>
  )
}