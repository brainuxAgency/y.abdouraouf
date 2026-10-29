"use client"

import { useState, type ReactNode } from "react"
import Image from "next/image"
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiPostgresql,
  SiTailwindcss,
  SiNodedotjs,
  SiPrisma,
  SiVercel,
} from "react-icons/si"
import { socialLinks } from "@/src/constants/social-icons"

/* ------------------------------------------------------------------ */
/* Images : déposez vos fichiers dans /public/about/                   */
/* Si un fichier est absent, un cadre neutre s'affiche à la place.     */
/* ------------------------------------------------------------------ */

const IMAGES = {
  portrait: "/profil.png",
  mwBusiness: "/about/mw-business.jpg",
  ripostDashboard: "/about/ripostera-planning.png",
  ripostDm: "/about/ripostera-dm.png",
  ripostSales: "/about/ripostera-ventes.png",
}

const WAITLIST_HREF = "#contact"

const stack = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Prisma", icon: SiPrisma },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Vercel", icon: SiVercel },
]

/* ------------------------------------------------------------------ */
/* Petits composants                                                   */
/* ------------------------------------------------------------------ */

function Figure({
  src,
  alt,
  caption,
  ratio = "aspect-[4/3]",
  priority = false,
}: {
  src: string
  alt: string
  caption?: string
  ratio?: string
  priority?: boolean
}) {
  const [failed, setFailed] = useState(false)
  return (
    <figure>
      <div className={`relative overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-200 ${ratio}`}>
        {failed ? (
          <div className="absolute inset-0 grid place-items-center p-6 text-center text-xs text-zinc-400">{alt}</div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      {caption && <figcaption className="mt-3 text-xs leading-relaxed text-zinc-500">{caption}</figcaption>}
    </figure>
  )
}

function Chapter({ index, title, children }: { index: number; title: string; children: ReactNode }) {
  return (
    <section className="grid gap-6 border-t border-zinc-200 py-14 md:grid-cols-12 md:gap-10 md:py-20">
      <div className="md:col-span-3">
        <div className="md:sticky md:top-24">
          <span className="font-montserrat text-sm tabular-nums text-[#2449D8]">Chapitre {index}</span>
          <h2 className="mt-1 font-montserrat text-xl font-semibold tracking-tight text-zinc-900">{title}</h2>
        </div>
      </div>
      <div className="md:col-span-9">{children}</div>
    </section>
  )
}

const prose = "max-w-[62ch] text-base leading-relaxed text-zinc-600"

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <main className="bg-white text-zinc-900 selection:bg-[#2449D8]/15">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* ---------------- Hero ---------------- */}
        <header className="grid items-center gap-12 pb-16 pt-28 md:grid-cols-12 md:pb-24 md:pt-36">
          <div className="md:col-span-7">
            <p className="font-montserrat text-sm text-zinc-500">Abdouraouf Youssouf</p>
            <h1 className="mt-4 font-montserrat text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Développeur de formation, entrepreneur par conviction.
            </h1>
            <p className={`${prose} mt-6`}>
              Je construis Ripostera, une application qui aide les créateurs de contenu à vendre sans courir après chaque
              commentaire. Pour apprendre à bâtir une vraie activité autour, je suis accompagné par Mickaël Wu.
            </p>

            <dl className="mt-10 grid max-w-xl grid-cols-1 gap-x-8 gap-y-4 border-t border-zinc-200 pt-6 text-sm sm:grid-cols-2">
              {[
                ["Formation", "Master 2 en Ingénierie Informatique"],
                ["Métier", "Développeur full-stack, React et Next.js"],
                ["Projet", "Ripostera, en développement"],
                ["Accompagnement", "Mickaël Wu, MW Business"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-zinc-500">{k}</dt>
                  <dd className="mt-0.5 font-medium text-zinc-900">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:col-span-5">
            <Figure src={IMAGES.portrait} alt="Portrait d'Abdouraouf Youssouf" ratio="aspect-[4/5]" priority />
          </div>
        </header>

        {/* ---------------- Récit ---------------- */}
        <Chapter index={1} title="La base technique">
          <p className={prose}>
            J&apos;ai passé mon Master 2 en ingénierie informatique à apprendre une chose : construire proprement. Séparer
            l&apos;interface, la logique métier et les données. Valider tout ce qui entre. Typer le code de bout en bout.
          </p>
          <p className={`${prose} mt-4`}>
            Ce n&apos;est pas spectaculaire, mais c&apos;est ce qui permet à un produit de tenir quand les utilisateurs arrivent.
          </p>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-4">
            {stack.map((t) => (
              <li key={t.name} className="flex items-center gap-2 text-sm text-zinc-700">
                <t.icon className="h-4 w-4 text-zinc-400" aria-hidden />
                {t.name}
              </li>
            ))}
          </ul>
        </Chapter>

        <Chapter index={2} title="Le terrain">
          <p className={prose}>
            Je développe des applications web complètes, de la base de données à l&apos;écran. Je travaille directement avec les
            personnes concernées : pas d&apos;intermédiaire, une démo chaque semaine, un dépôt Git propre livré avec le code.
          </p>
          <p className={`${prose} mt-4`}>
            Cette façon de travailler m&apos;a appris l&apos;essentiel : comprendre le besoin avant d&apos;écrire la première ligne.
          </p>
        </Chapter>

        <Chapter index={3} title="L'entrepreneuriat">
          <p className={prose}>
            Savoir coder ne suffit pas pour vivre d&apos;un produit. Il faut une offre claire, une audience, et savoir vendre.
            C&apos;est pour cela que je suis accompagné par{" "}
            <a
              href="https://www.mickaelwu.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-[#2449D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2449D8]"
            >
              Mickaël Wu
            </a>
            , au sein de MW Business.
          </p>

          <div className="mt-8 grid items-start gap-8 lg:grid-cols-2">
            <ul className="space-y-5 text-sm leading-relaxed text-zinc-600">
              <li>
                <span className="block font-montserrat font-semibold text-zinc-900">Un coach qui suit mon exécution</span>
                Des appels en one-to-one et un suivi régulier, pour avancer semaine après semaine plutôt que par à-coups.
              </li>
              <li>
                <span className="block font-montserrat font-semibold text-zinc-900">Le contenu comme point d&apos;entrée</span>
                J&apos;apprends à clarifier mon offre et à créer du contenu qui attire les bonnes personnes.
              </li>
              <li>
                <span className="block font-montserrat font-semibold text-zinc-900">La vente, travaillée en pratique</span>
                Je m&apos;entraîne à vendre avant de me retrouver face à un vrai prospect.
              </li>
            </ul>
            <Figure
              src={IMAGES.mwBusiness}
              alt="Une séance de travail avec l'équipe MW Business"
              caption="Avec la communauté MW Business."
            />
          </div>

          <p className={`${prose} mt-10`}>
            Cette double casquette m&apos;a donné un angle que je n&apos;avais pas en étant seulement développeur : voir un produit
            comme un moyen de résoudre un problème qui coûte de l&apos;argent à quelqu&apos;un. De là est née une idée.
          </p>

          {/* ---------- Histoire dans l'histoire ---------- */}
          <div className="mt-14 rounded-3xl bg-zinc-50 p-6 ring-1 ring-zinc-200 sm:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-montserrat text-2xl font-semibold tracking-tight">Ripostera</h3>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#2449D8] ring-1 ring-[#2449D8]/25">
                En développement
              </span>
            </div>
            <p className="mt-2 max-w-[56ch] text-sm leading-relaxed text-zinc-500">
              L&apos;histoire d&apos;un produit, à l&apos;intérieur de la mienne.
            </p>

            <ol className="mt-10 space-y-8 border-l border-zinc-300 pl-6 sm:pl-8">
              {[
                {
                  t: "Le déclic",
                  d: "Un créateur publie, reçoit des dizaines de commentaires « je veux le lien », et n'a pas le temps de répondre à tous. Chaque réponse manquée est une vente perdue.",
                },
                {
                  t: "L'idée",
                  d: "Relier trois gestes qui sont aujourd'hui séparés : publier ses contenus, répondre automatiquement aux commentaires par message privé, et suivre les ventes qui en découlent.",
                },
                {
                  t: "Le produit",
                  d: "Un outil simple pour les entrepreneurs créateurs de contenu : programmer ses publications, transformer un commentaire en conversation, et voir quel contenu rapporte vraiment.",
                },
                {
                  t: "La suite",
                  d: "Je construis la base technique et je travaille avec de premiers créateurs pour valider chaque fonctionnalité avant de l'élargir.",
                },
              ].map((s) => (
                <li key={s.t} className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-[#2449D8] sm:-left-[37px]" />
                  <h4 className="font-montserrat text-sm font-semibold text-zinc-900">{s.t}</h4>
                  <p className="mt-1 max-w-[58ch] text-sm leading-relaxed text-zinc-600">{s.d}</p>
                </li>
              ))}
            </ol>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              <Figure
                src={IMAGES.ripostDashboard}
                alt="Planning des publications dans Ripostera"
                caption="Publier : le planning."
                ratio="aspect-[4/3]"
              />
              <Figure
                src={IMAGES.ripostDm}
                alt="Un commentaire converti en message privé"
                caption="Convertir : du commentaire au DM."
                ratio="aspect-[4/3]"
              />
              <Figure
                src={IMAGES.ripostSales}
                alt="Suivi des ventes par publication"
                caption="Suivre : les ventes par contenu."
                ratio="aspect-[4/3]"
              />
            </div>

            <a
              href={WAITLIST_HREF}
              className="mt-10 inline-flex items-center rounded-full bg-zinc-900 px-5 py-2.5 font-montserrat text-sm font-medium text-white transition-colors hover:bg-[#2449D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2449D8] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50"
            >
              Rejoindre les premiers testeurs
            </a>
          </div>
        </Chapter>

        {/* ---------------- Contact ---------------- */}
        <section id="contact" className="border-t border-zinc-200 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <h2 className="font-montserrat text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Un projet, une idée, ou une collaboration ?
              </h2>
              <p className={`${prose} mt-4`}>
                Je suis disponible pour de nouveaux projets web, et ouvert aux échanges avec les créateurs qui souhaitent
                tester Ripostera.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2 md:col-span-4 md:justify-end">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-zinc-700 ring-1 ring-zinc-200 transition-colors hover:text-[#2449D8] hover:ring-[#2449D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2449D8]"
                  >
                    <link.icon className="h-4 w-4" aria-hidden />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}