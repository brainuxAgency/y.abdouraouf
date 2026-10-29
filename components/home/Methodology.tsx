"use client"

import { useState } from "react"
import { Compass, GitMerge, RefreshCw, Rocket } from "lucide-react"

const steps = [
  {
    step: "01",
    title: "Cadrage & Modélisation",
    duration: "Semaine 1",
    icon: Compass,
    description:
      "Avant toute ligne de code, nous définissons avec précision le problème à résoudre, les cas d'usage réels et le schéma relationnel des données.",
    points: [
      "Clarification des flux utilisateurs clés",
      "Modélisation de la base de données (entités, relations, contraintes)",
      "Validation de l'architecture technique retenue",
    ],
  },
  {
    step: "02",
    title: "Socle technique & Prototypage",
    duration: "Semaine 1 - 2",
    icon: GitMerge,
    description:
      "Mise en place de l'environnement, de l'authentification et des premiers écrans fonctionnels branchés sur des données réelles.",
    points: [
      "Initialisation Next.js avec typage TypeScript Strict",
      "Composants d'interface sobres et responsives",
      "Déploiement immédiat d'un environnement de staging privé",
    ],
  },
  {
    step: "03",
    title: "Développement itératif",
    duration: "Cycles hebdomadaires",
    icon: RefreshCw,
    description:
      "Zéro effet tunnel. Chaque semaine, les fonctionnalités achevées sont déployées sur le lien de prévisualisation pour vos retours.",
    points: [
      "Itérations courtes sur des fonctionnalités testables",
      "Ajustements continus selon vos retours opérationnels",
      "Validation des cas limites et de la sécurité aux frontières",
    ],
  },
  {
    step: "04",
    title: "Livraison & Passage de relais",
    duration: "Phase finale",
    icon: Rocket,
    description:
      "Mise en production sécurisée, configuration du domaine, indexation et transmission complète du code source documenté.",
    points: [
      "Vérification des performances, de l'accessibilité et du responsive",
      "Mise en place du monitoring d'erreurs et des sauvegardes",
      "Documentation claire pour que vous restiez 100% propriétaire",
    ],
  },
]

export function Methodology() {
  const [active, setActive] = useState(0)
  const current = steps[active]
  const Icon = current.icon

  return (
    <section id="method" className="relative overflow-hidden bg-[#0a0c10] py-24 sm:py-32">
      {/* Trame blueprint, estompée */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000,transparent)]"
      />

      <div className="relative mx-auto max-w-7xl px-2 md:px-5">
        {/* En-tête */}
        <div className="max-w-2xl">
          <span className="mb-4 block font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            03 // Démarche & process
          </span>
          <h2 className="font-montserrat text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
            Une méthode{" "}
            <span className="font-serif font-normal italic text-zinc-500">sans surprise.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-400">
            Une progression cadrée, transparente du premier jour jusqu&apos;à la livraison, avec un lien de démonstration
            accessible en continu.
          </p>
        </div>

        {/* Schéma de flux */}
        <div className="relative mt-16">
          {/* Liaison entre les nœuds */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gradient-to-r from-primary/60 via-primary/25 to-primary/60 md:block"
          />

          <ol className="relative grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {steps.map((item, i) => {
              const NodeIcon = item.icon
              const isActive = i === active
              return (
                <li key={item.step}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className="group flex w-full cursor-pointer flex-col items-center text-center focus-visible:outline-none"
                  >
                    <span
                      className={`relative flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 ${
                        isActive
                          ? "border-primary/60 bg-primary/15 text-primary-light shadow-[0_0_30px_hsl(var(--primary-dark)/0.3)]"
                          : "border-white/10 bg-[#0a0c10] text-zinc-500 group-hover:border-white/25 group-hover:text-zinc-300"
                      }`}
                    >
                      <NodeIcon className="h-5 w-5" aria-hidden />
                    </span>
                    <span
                      className={`mt-4 font-mono text-[11px] transition-colors ${isActive ? "text-primary" : "text-zinc-600"}`}
                    >
                      {item.step}
                    </span>
                    <span
                      className={`mt-1 font-montserrat text-sm font-semibold transition-colors ${isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"}`}
                    >
                      {item.title}
                    </span>
                    <span className="mt-1 font-mono text-[10px] text-zinc-600">{item.duration}</span>
                  </button>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Détail de l'étape sélectionnée */}
        <div key={current.step} className="mt-16 grid gap-10 border-t border-white/10 pt-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-montserrat text-6xl font-bold leading-none text-primary/25 sm:text-7xl">
                {current.step}
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-primary-light">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
            </div>
            <h3 className="font-montserrat text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {current.title}
            </h3>
          </div>

          <div className="md:col-span-7">
            <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">{current.description}</p>
            <ul className="mt-8 space-y-4">
              {current.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-400">
                  <span className="mt-0.5 font-mono text-primary">→</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
