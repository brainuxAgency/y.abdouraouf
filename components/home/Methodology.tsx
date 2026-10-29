"use client"

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
  return (
    <section id="method" className="py-24 sm:py-32 bg-gradient-to-b from-[#07090d] to-[#06070b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/10 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-montserrat uppercase tracking-wider text-zinc-500 block mb-2">
              03 // Démarche & Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              Une méthode sans surprise.
            </h2>
          </div>

          <p className="text-sm text-zinc-400 max-w-md font-normal leading-relaxed">
            Une progression cadrée, transparente du premier jour jusqu&apos;à la livraison, avec un lien de démonstration accessible en continu.
          </p>
        </div>

        {/* Grille 4 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="border border-[#E2E4DE] bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#16181D] transition-colors shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E2E4DE]">
                  <span className="w-8 h-8 rounded-full bg-[#16181D] text-white flex items-center justify-center font-montserrat font-bold text-xs">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-montserrat text-[#636773] bg-[#F0F1EE] px-2.5 py-1 rounded-full">
                    {item.duration}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#16181D] mb-3">
                  {item.title}
                </h3>

                <p className="text-xs text-[#4B4F58] leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                <div className="space-y-2 border-t border-[#E2E4DE] pt-4">
                  {item.points.map((p, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-[11px] text-[#636773]">
                      <span className="text-[#2449D8] font-bold leading-none mt-0.5">·</span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
