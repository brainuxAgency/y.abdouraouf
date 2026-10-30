"use client"

import { useState, type ReactNode } from "react"
import { Copy, Check, Calendar, CalendarCheck, Link2, MessagesSquare, ArrowRight } from "lucide-react"
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
  { k: "Durée", v: "30 min" },
  { k: "Format", v: "Visio Meet" },
  { k: "Tarif", v: "Gratuit" },
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
    <span aria-hidden className={`pointer-events-none absolute z-20 block h-[11px] w-[11px] ${className}`}>
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/50" />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/50" />
    </span>
  )
}

/** Cadre de la section : rails latéraux et croix aux coins, sans lignes intermédiaires */
function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-3 max-w-[1240px] border-x border-white/10 sm:mx-6 xl:mx-auto">
      <Plus className="-left-[6px] -top-[6px]" />
      <Plus className="-right-[6px] -top-[6px]" />
      <Plus className="-bottom-[6px] -left-[6px]" />
      <Plus className="-bottom-[6px] -right-[6px]" />
      {children}
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
    <section id="contact" className="relative overflow-hidden bg-[#050609] py-16 sm:py-24">
      {/* Fondu haut depuis la section précédente */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-20 h-24 bg-gradient-to-b from-[#06070b] to-transparent" />
      {/* Fondu bas vers CtaSection */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-24 bg-gradient-to-b from-transparent to-[#060709]" />
      {/* Grille de fond estompée */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 35%, #000 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 35%, #000 100%)",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-primary-dark/15 blur-[120px]" />

      <div className="relative z-10">
        <Frame>
          {/* ============ EN-TÊTE : titre à gauche, mesures à droite ============ */}
          <div className="grid gap-10 p-2 md:p-5 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-primary-light">
                <span className="h-1.5 w-1.5 bg-primary" />
                05 // contact.init()
              </div>
              <h2 className="font-montserrat text-4xl font-bold leading-[1.04] tracking-tight text-white sm:text-6xl">
                Discutons concrètement
                <span className="block bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
                  de votre projet.
                </span>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
                Réservez un créneau de 30 minutes en visio pour cadrer votre besoin, vos objectifs et votre calendrier.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 lg:col-span-5">
              {CALL_STATS.map(({ k, v }) => (
                <div key={k} className="rounded-2xl bg-white/[0.03] p-2 md:p-5">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">{k}</p>
                  <p className="mt-2 font-montserrat text-lg font-semibold text-white sm:text-xl">{v}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ============ CONTENU : deux colonnes, sans filets ============ */}
          <div className="grid gap-12 border-t border-white/15 p-2 md:p-5 lg:grid-cols-12">
            {/* ---------- GAUCHE : ce que le client obtient ---------- */}
            <div className="flex flex-col lg:col-span-5 lg:border-r lg:border-white/15 lg:pr-10">
              <p className="mb-8 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                // Ce que nous validons ensemble
              </p>

              <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-1">
                {CALL_OFFERINGS.map((item) => (
                  <div key={item.step}>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="font-mono text-xs font-semibold text-primary">{item.step}</span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">{item.badge}</span>
                    </div>
                    <h4 className="font-montserrat text-sm font-bold text-white">{item.title}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-400">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-auto border-t border-white/15 pt-10">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  Alternative sans call
                </p>
                <div className="flex items-center justify-between gap-2 rounded-xl bg-white/[0.03] py-2 pl-4 pr-2">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="truncate font-mono text-xs text-zinc-200 transition-colors hover:text-primary-light"
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
                    {copiedEmail ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* ---------- DROITE : réservation ---------- */}
            <div className="relative flex flex-col overflow-hidden rounded-3xl bg-[#07080c] p-2 md:p-5 lg:col-span-7">
              {/* Halo orange derrière le bouton */}
              <div className="pointer-events-none absolute -bottom-10 left-1/2 h-48 w-[520px] -translate-x-1/2 rounded-full bg-primary-dark/20 blur-[90px]" />

              <div className="relative flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                  Réservation directe
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  disponible
                </span>
              </div>

              <h3 className="relative mt-5 font-montserrat text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Planifiez votre session en quelques secondes
              </h3>
              <p className="relative mt-3 max-w-lg text-sm leading-relaxed text-zinc-400">
                Choisissez le jour et l&apos;heure qui vous conviennent. L&apos;invitation Google Meet est créée
                instantanément pour cadrer votre projet sans perdre de temps.
              </p>

              <ol className="relative mt-10 grid gap-4 sm:grid-cols-3">
                {BOOKING_STEPS.map(({ icon: Icon, title, desc }, i) => (
                  <li key={title} className="rounded-2xl bg-white/[0.03] p-2 md:p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <Icon className="h-5 w-5 text-primary" />
                      <span className="font-mono text-[10px] text-zinc-600">0{i + 1}</span>
                    </div>
                    <span className="block font-montserrat text-sm font-bold text-white">{title}</span>
                    <span className="mt-2 block text-xs leading-relaxed text-zinc-400">{desc}</span>
                  </li>
                ))}
              </ol>

              <div className="relative mt-auto border-t border-white/15 pt-10">
                <CalButton className="btn-cta-gold group flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl px-6 py-4 font-mono text-xs font-semibold uppercase tracking-widest text-[#23190A] transition-all duration-300">
                  <Calendar className="h-4 w-4 text-[#23190A] transition-transform group-hover:scale-110" />
                  <span>Choisir une date &amp; heure</span>
                  <ArrowRight className="h-4 w-4 text-[#23190A] transition-transform group-hover:translate-x-1" />
                </CalButton>

                <p className="mt-4 text-center font-mono text-[11px] text-zinc-500">
                  Gratuit &amp; sans engagement · Visio Google Meet · cal.com/{CAL_LINK}
                </p>
              </div>
            </div>
          </div>
        </Frame>
      </div>
    </section>
  )
}
