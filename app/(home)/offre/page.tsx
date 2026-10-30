import type { Metadata } from "next"
import { CheckCircle2 } from "lucide-react"
import { CalButton } from "@/components/common/CalButton"
import { CtaSection } from "@/components/common/CtaSection"

export const metadata: Metadata = {
  title: "Offres — Abdouraouf Youssouf",
  description: "Des applications SaaS, ERP sur mesure, tableaux de bord et reprise de projets, expliqués clairement.",
}

const offers = [
  {
    id: "saas",
    number: "01",
    title: "Architecture SaaS & MVP",
    summary: "Vous avez une idée de produit et vous voulez la tester avec de vrais clients.",
    forWho: "Porteurs de projet, fondateurs et créateurs qui lancent un produit en ligne.",
    deliverables: [
      "Authentification sécurisée et gestion des comptes",
      "Abonnements et paiements récurrents avec Stripe",
      "Tableau de bord utilisateur et espace d'administration",
      "Traitements asynchrones (envois, files de tâches)",
      "Déploiement en production avec environnement de test",
    ],
    stack: ["Next.js", "Stripe", "PostgreSQL & Prisma", "Authentification"],
    outcome: "Une version utilisable, prête à accueillir vos premiers clients.",
  },
  {
    id: "erp",
    number: "02",
    title: "ERP & CRM sur mesure",
    summary: "Votre activité tourne encore sur des fichiers Excel partagés, et les erreurs s'accumulent.",
    forWho: "PME et artisans qui gèrent devis, facturation et suivi de chantier.",
    deliverables: [
      "Création de devis multi-lignes et calculs automatiques",
      "Facturation et génération de PDF",
      "Suivi des chantiers et des statuts",
      "Rôles et droits d'accès par utilisateur",
    ],
    stack: ["PostgreSQL dédié", "Génération PDF", "Rôles & droits"],
    outcome: "Des données centralisées, moins d'erreurs de saisie et un historique consultable.",
  },
  {
    id: "dashboards",
    number: "03",
    title: "Tableaux de bord",
    summary: "Vous pilotez votre activité à partir de chiffres dispersés, avec des décisions en retard.",
    forWho: "Dirigeants et équipes qui veulent suivre trésorerie, marges et objectifs.",
    deliverables: [
      "Indicateurs clés mis à jour en temps réel",
      "Graphiques interactifs et filtres par période",
      "Alertes sur les seuils importants",
      "Exports Excel et PDF",
    ],
    stack: ["KPIs temps réel", "Graphiques", "Exports Excel & PDF"],
    outcome: "Une vue claire de votre situation, sans attendre la clôture du mois.",
  },
  {
    id: "reprise",
    number: "04",
    title: "Reprise & modernisation",
    summary: "Vous avez déjà une application, mais elle est fragile, lente ou difficile à faire évoluer.",
    forWho: "Équipes qui ont une application existante à stabiliser ou à faire évoluer.",
    deliverables: [
      "Audit du code et de l'architecture",
      "Correction des bugs récurrents",
      "Réduction de la dette technique",
      "Migration vers l'App Router de Next.js",
      "Sécurisation des accès (OWASP) et amélioration des performances",
    ],
    stack: ["Audit de code", "Migration App Router", "Sécurité OWASP", "Performance"],
    outcome: "Une application stable, sécurisée et plus simple à faire évoluer.",
  },
]

const steps = [
  { title: "Diagnostic", text: "Un appel de 30 minutes pour cadrer votre besoin et vérifier la faisabilité." },
  { title: "Plan & estimation", text: "Un découpage en jalons livrables, avec un chiffrage transparent sous 48 h." },
  { title: "Développement", text: "Des cycles courts, avec une démonstration à chaque étape." },
  { title: "Livraison", text: "Mise en production, documentation et transmission complète du code." },
]

export default function OffrePage() {
  return (
    <main className="min-h-screen bg-[#0a0c10] text-white">
      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-2 pb-16 pt-32 sm:px-5">
        <span className="mb-4 block font-mono text-[11px] uppercase tracking-[0.2em] text-orange-400">Offres</span>
        <h1 className="max-w-4xl font-montserrat text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Quatre façons de travailler ensemble,{" "}
          <span className="font-serif font-normal italic text-zinc-500">selon votre besoin.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Chaque offre répond à un problème précis. Vous pouvez commencer par un diagnostic gratuit, puis choisir la suite
          qui vous convient.
        </p>

        {/* Sommaire des offres : ancres vers les sections ci-dessous */}
        <nav aria-label="Sommaire des offres" className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer) => (
            <a
              key={offer.id}
              href={`#${offer.id}`}
              className="group rounded-2xl border border-white/10 bg-[#0f1013] p-5 transition-colors hover:border-white/25"
            >
              <span className="font-mono text-[11px] text-orange-400">{offer.number}</span>
              <span className="mt-2 block font-montserrat text-sm font-semibold text-white group-hover:text-orange-300">
                {offer.title}
              </span>
            </a>
          ))}
        </nav>
      </section>

      {/* Détail des offres */}
      {offers.map((offer, i) => (
        <section
          key={offer.id}
          id={offer.id}
          className="scroll-mt-28 border-t border-white/10 py-20 sm:py-28"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
            <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange-400">{offer.number}</span>
              <h2 className="mt-4 font-montserrat text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
                {offer.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-zinc-400">{offer.summary}</p>

              <dl className="mt-10 space-y-6 border-t border-white/10 pt-6">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Pour qui</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-zinc-300">{offer.forWho}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Résultat attendu</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-zinc-300">{offer.outcome}</dd>
                </div>
              </dl>

              <CalButton className="mt-10 inline-flex cursor-pointer items-center gap-2 rounded-full bg-orange-800 px-6 py-3 font-montserrat text-sm font-semibold text-white shadow-lg shadow-orange-950/40 transition-colors hover:bg-orange-700">
                Parler de ce projet
              </CalButton>
            </div>

            <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="rounded-3xl border border-white/10 bg-[#0f1013] p-6 sm:p-10">
                <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Ce qui est livré</p>
                <ul className="mt-6 space-y-4">
                  {offer.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-200">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                  {offer.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Parcours */}
      <section className="border-t border-white/10 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange-400">Le parcours</span>
          <h2 className="mt-4 max-w-3xl font-montserrat text-3xl font-semibold tracking-tight sm:text-5xl">
            Du premier échange à la livraison.
          </h2>

          <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="bg-[#0a0c10] p-6 sm:p-8">
                <span className="font-mono text-xs text-orange-400">0{i + 1}</span>
                <h3 className="mt-4 font-montserrat text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaSection />
    </main>
  )
}
