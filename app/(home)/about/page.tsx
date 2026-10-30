"use client"

import { useState, type ComponentType, type ReactNode } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, MessageCircle, Share2, TrendingUp } from "lucide-react"
import { SiCloudflare } from "react-icons/si"
import { socialLinks } from "@/src/constants/social-icons"
import { CalButton } from "@/components/common/CalButton"
import { CTAButton } from "@/components/common/CTAButton"

/* ------------------------------------------------------------------ */
/* Images : déposez vos fichiers dans /public/about/                   */
/* Si un fichier est absent, un cadre neutre s'affiche à la place.     */
/* ------------------------------------------------------------------ */

const IMAGES = {
  portrait: "/about/abdou.png",
  mwBusiness: "/about/mw-business.jpg",
  creationVideo: "/about/creation-video.jpg",
  ripostApp: "/about/ripostera-app.png",
  ripostDashboard: "/about/ripostera-planning.png",
  ripostDm: "/about/ripostera-dm.png",
  ripostSales: "/about/ripostera-ventes.png",
}

const WAITLIST_HREF = "#contact"
const RIPOSTERA_URL = process.env.NEXT_PUBLIC_RIPOSTERA_URL ?? "https://ripostera.vercel.app/"
const RIPOSTERA_REGISTER_URL = new URL("/auth/register", RIPOSTERA_URL).toString()

type StackItem = {
  name: string
  role: string
  icon?: string
  Icon?: ComponentType<{ className?: string }>
}

const stack: StackItem[] = [
  { name: "Next.js 14", role: "Full Stack & SSR", icon: "/next.svg" },
  { name: "React", role: "UI & State", icon: "/react.svg" },
  { name: "TypeScript", role: "Strict Type Safety", icon: "/typescript.svg" },
  { name: "Tailwind CSS", role: "Modern Styling", icon: "/tailwindcss.svg" },
  { name: "shadcn/ui", role: "Design System", icon: "/shadcn.svg" },
  { name: "NestJS", role: "Architecture API", icon: "/nestjs.png" },
  { name: "PostgreSQL", role: "BDD Relationnelle", icon: "/postgresql.svg" },
  { name: "Prisma ORM", role: "Type-Safe Client", icon: "/prisma.svg" },
  { name: "OpenAI API", role: "GPT-4o & LLMs", icon: "/openai.svg" },
  { name: "Claude 3.5", role: "Raisonnement Avancé", icon: "/claude.svg" },
  { name: "n8n", role: "Workflows & Automation", icon: "/n8n.svg" },
  { name: "Cursor AI", role: "AI Dev Assistant", icon: "/cursor.svg" },
  { name: "Antigravity", role: "Agentic IDE", icon: "/antigravity.png" },
  { name: "Redis", role: "In-Memory Caching", icon: "/redis.svg" },
  { name: "Vercel", role: "Edge Platform", icon: "/vercel.svg" },
  { name: "Cloudflare R2", role: "Object Storage S3-compatible", Icon: SiCloudflare },
  { name: "DeepSeek", role: "Open Weights LLM", icon: "/deepseek.svg" },
]

const ripostaSteps = [
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
]

const stackSizes: Record<string, "lg" | "md" | "sm"> = {
  "Next.js 14": "lg",
  "Claude 3.5": "lg",
  React: "md",
  PostgreSQL: "md",
  "OpenAI API": "md",
  "Prisma ORM": "md",
}

const tileSize = {
  lg: "col-span-2 row-span-2 md:col-span-3 p-6 sm:p-7",
  md: "col-span-2 md:col-span-2 p-5",
  sm: "col-span-1 md:col-span-1 p-4",
}

const ripostFeatures = [
  { icon: Share2, title: "Publication multi-canaux", detail: "TikTok · Shorts · Reels · Facebook" },
  { icon: MessageCircle, title: "Réponses automatiques", detail: "Commentaire transformé en message privé" },
  { icon: TrendingUp, title: "Suivi des ventes", detail: "Ce que chaque publication rapporte" },
]

const coachingPoints = [
  {
    title: "Un coach qui suit mon exécution",
    text: "Des appels en one-to-one et un suivi régulier, pour avancer semaine après semaine plutôt que par à-coups.",
  },
  {
    title: "Le contenu comme point d'entrée",
    text: "J'apprends à clarifier mon offre et à créer du contenu qui attire les bonnes personnes.",
  },
  {
    title: "La vente, travaillée en pratique",
    text: "Je m'entraîne à vendre avant de me retrouver face à un vrai prospect.",
  },
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
      <motion.div
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_20px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl ring-1 ring-white/5 ${ratio}`}
      >
        {failed ? (
          <div className="absolute inset-0 grid place-items-center p-6 text-center text-xs text-zinc-500">{alt}</div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
            onError={() => setFailed(true)}
          />
        )}
      </motion.div>
      {caption && <figcaption className="mt-3 text-xs leading-relaxed text-zinc-500">{caption}</figcaption>}
    </figure>
  )
}

function Chapter({
  index,
  title,
  children,
  className = "",
}: {
  index: number
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`grid gap-6 border-t border-white/10 py-14 md:grid-cols-12 md:gap-10 md:py-20 ${className}`}
    >
      <div className="md:col-span-3">
        <div className="md:sticky md:top-24">
          <span className="font-montserrat text-sm tabular-nums text-primary">Chapitre {index}</span>
          <h2 className="mt-1 font-montserrat text-xl font-semibold tracking-tight text-white">{title}</h2>
        </div>
      </div>
      <div className="md:col-span-9">{children}</div>
    </motion.section>
  )
}

const prose = "max-w-[62ch] text-base leading-relaxed text-zinc-400"

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <main className="overflow-x-clip bg-[#0a0c10] text-white selection:bg-primary/20">
      <div className="mx-auto max-w-7xl px-2 md:px-5">
        {/* ---------------- Hero : produit, fenêtre flottante ---------------- */}
        <header className="relative isolate pb-20 pt-28 md:pb-28 md:pt-36">
          {/* Fond : grille technique + double lueur orange */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
            <div className="absolute left-1/2 top-0 h-[680px] w-[1400px] max-w-none -translate-x-1/2 bg-[radial-gradient(ellipse_45%_55%_at_70%_35%,hsl(var(--primary-dark)/0.18),transparent_70%)]" />
            <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] bg-[radial-gradient(circle,hsl(var(--primary-dark)/0.2),transparent_70%)]" />
          </div>

          <div className="grid items-center gap-16 md:grid-cols-12">
            {/* Texte */}
            <div className="md:col-span-6">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1 pl-1 pr-3.5 text-xs text-zinc-300 backdrop-blur"
              >
                <Image
                  src={IMAGES.portrait}
                  alt=""
                  width={22}
                  height={22}
                  className="h-[22px] w-[22px] rounded-full object-cover object-top"
                />
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Full-stack · Ouvert aux projets
              </motion.span>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 }}
                className="mt-8 font-mono text-xs text-zinc-500"
              >
                <span className="text-primary">$</span> whoami
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12 }}
                className="mt-3 font-montserrat text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl"
              >
                Abdouraouf{" "}
                <span className="bg-gradient-to-r from-orange-300 via-orange-500 to-orange-700 bg-clip-text text-transparent">
                  Youssouf
                </span>
                <span className="mt-4 block font-serif text-3xl font-normal italic leading-tight tracking-normal text-zinc-400 sm:text-4xl">
                  Développeur de formation, entrepreneur par conviction.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-7 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg"
              >
                Développeur web React et Next.js, j&apos;ai construit des applications mobile, des SaaS, des vitrines et des
                boutiques e-commerce. Aujourd&apos;hui, je monétise mes compétences par la création de contenu, accompagné par
                Mickaël Wu au sein de MW Business.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28 }}
                className="mt-9 flex flex-wrap items-center gap-3"
              >
                <CalButton className="btn-cta-gold group inline-flex items-center gap-2 rounded-full px-6 py-2 font-montserrat text-sm font-semibold shadow-[0_0_40px_-8px_hsl(var(--primary)/0.5)] transition-all duration-200 hover:shadow-[0_0_50px_-6px_hsl(var(--primary)/0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0c10] cursor-pointer">
                  Travaillons ensemble
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </CalButton>
                <a
                  href="#ripostera"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-2 font-montserrat text-sm font-medium text-white transition-colors duration-200 hover:border-white/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Découvrir Ripostera
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.36 }}
                className="mt-10 flex flex-wrap items-center gap-3"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-600">Stack</span>
                <ul className="flex flex-wrap gap-2">
                  {["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL"].map((t) => (
                    <li
                      key={t}
                      className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-zinc-400 transition-colors hover:border-primary/40 hover:text-zinc-200"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/70" aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Visuel */}
            <div className="relative md:col-span-6">
              <div aria-hidden="true" className="absolute -inset-8 -z-10 rounded-[40px] bg-gradient-to-br from-primary-dark/25 via-transparent to-transparent blur-2xl" />

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="mx-auto max-w-md rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.01] p-2 shadow-2xl shadow-black/60 ring-1 ring-white/5"
              >
                <Figure src={IMAGES.portrait} alt="Portrait d'Abdouraouf Youssouf" ratio="aspect-[4/5]" priority />
              </motion.div>

              {/* Fenêtre de code flottante animée */}
              <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, y: 20, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="absolute -right-2 -top-14 hidden w-72 rounded-xl border border-white/10 bg-[#0a0c10]/90 font-mono text-[11px] leading-relaxed text-zinc-400 shadow-2xl backdrop-blur sm:block lg:-right-10"
              >
                {/* Flottement continu doux */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-zinc-700" />
                    <span className="h-2 w-2 rounded-full bg-zinc-700" />
                    <span className="h-2 w-2 rounded-full bg-zinc-700" />
                    <span className="ml-auto text-zinc-600">dev.ts</span>
                  </div>
                  <pre className="p-4">
                    <code>
                      <span className="text-orange-400">const</span> dev = {"{"}
                      {"\n"}
                      {"  "}role: <span className="text-emerald-400">&quot;fullstack&quot;</span>,{"\n"}
                      {"  "}stack: [<span className="text-emerald-400">&quot;Next.js&quot;</span>,{" "}
                      <span className="text-emerald-400">&quot;Prisma&quot;</span>],{"\n"}
                      {"  "}domaines: [<span className="text-emerald-400">&quot;Site web&quot;</span>,{" "}
                      <span className="text-emerald-400">&quot;SaaS&quot;</span>, <span className="text-emerald-400">&quot;AI&quot;</span>],
                      {"\n"}
                      {"  "}ship: <span className="text-orange-400">true</span>,{"\n"}
                      {"}"};
                    </code>
                  </pre>
                </motion.div>
              </motion.div>

              {/* Carte de disponibilité animée */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                whileHover={{ y: -3 }}
                className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0a0c10]/90 px-4 py-3 shadow-2xl backdrop-blur sm:-left-8 cursor-default"
              >
                <span className="h-8 w-1 rounded-full bg-gradient-to-b from-primary-light to-primary-dark" aria-hidden="true" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">Disponibilité</p>
                  <p className="mt-1 font-montserrat text-sm font-semibold text-white">Projets web &amp; SaaS</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Faits clés avec apparition staggered */}
          <motion.dl
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4"
          >
            {[
              ["Formation", "Master 2 en Ingénierie Informatique"],
              ["Métier", "Développeur full-stack, React et Next.js"],
              ["Projet", "Ripostera, en développement"],
              ["Accompagnement", "Mickaël Wu, MW Business"],
            ].map(([k, v]) => (
              <motion.div
                key={k}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.04)" }}
                className="bg-[#0a0c10] p-5 transition-colors"
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">{k}</dt>
                <dd className="mt-2 text-sm font-medium leading-snug text-white">{v}</dd>
              </motion.div>
            ))}
          </motion.dl>

          {/* Ripostera : capture + fonctionnalités animées */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mt-24 border-t border-white/10 pt-12"
          >
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">Projet en cours</p>
                <h2 className="mt-2 font-montserrat text-3xl font-semibold tracking-tight text-white">Ripostera</h2>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-7">
                <Figure src={IMAGES.ripostApp} alt="Interface de Ripostera" ratio="aspect-[16/9]" />
              </div>

              <div className="flex flex-col md:col-span-5">
                <ul className="flex flex-col divide-y divide-white/10 border-y border-white/10">
                  {ripostFeatures.map((f, i) => (
                    <motion.li
                      key={f.title}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="flex items-start gap-4 py-5"
                    >
                      <f.icon className="mt-0.5 h-5 w-5 shrink-0 text-zinc-300" aria-hidden />
                      <div>
                        <p className="text-sm font-medium text-white">{f.title}</p>
                        <p className="mt-1 text-sm text-zinc-500">{f.detail}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
                  <CTAButton
                    href={RIPOSTERA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline-primary"
                    size="sm"
                    icon={<ArrowUpRight className="h-3.5 w-3.5" />}
                  >
                    Visiter Ripostera
                  </CTAButton>
                </div>
              </div>
            </div>
          </motion.div>
        </header>

        {/* ---------------- Récit ---------------- */}
        <Chapter index={1} title="La base technique">
          <p className="font-serif text-2xl italic leading-snug text-zinc-200 sm:text-3xl">
            Trois principes que j&apos;applique à chaque projet.
          </p>

          <ol className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {[
              "Séparer l'interface, la logique métier et les données.",
              "Valider tout ce qui entre.",
              "Typer le code de bout en bout.",
            ].map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-5 py-4"
              >
                <span className="font-mono text-xs tabular-nums text-primary">0{i + 1}</span>
                <p className="text-base leading-relaxed text-zinc-300">{p}</p>
              </motion.li>
            ))}
          </ol>

          <p className={`${prose} mt-6`}>
            Ce n&apos;est pas spectaculaire. C&apos;est ce qui permet à un produit de tenir quand les utilisateurs arrivent.
          </p>

          {/* Mosaïque Bento Grid animée */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.04,
                },
              },
            }}
            className="mt-12 grid auto-rows-auto grid-flow-dense grid-cols-2 gap-3 md:grid-cols-6"
          >
            {stack.map((t) => {
              const size = stackSizes[t.name] ?? "sm"
              const big = size === "lg"
              return (
                <motion.div
                  key={t.name}
                  variants={{
                    hidden: { opacity: 0, y: 14, scale: 0.98 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } },
                  }}
                  whileHover={{ y: -4, borderColor: "rgba(249, 115, 22, 0.35)" }}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all hover:bg-white/[0.06] ${tileSize[size]}`}
                >
                  <span
                    className={`flex items-center justify-center rounded-xl bg-white/[0.08] ring-1 ring-white/10 ${
                      big ? "h-14 w-14" : "h-9 w-9"
                    }`}
                  >
                    {t.Icon ? (
                      <t.Icon className={big ? "h-7 w-7 text-zinc-200" : "h-4 w-4 text-zinc-200"} aria-hidden />
                    ) : (
                      <Image
                        src={t.icon!}
                        alt=""
                        width={big ? 28 : 18}
                        height={big ? 28 : 18}
                        className={big ? "h-7 w-7 object-contain" : "h-4 w-4 object-contain"}
                      />
                    )}
                  </span>
                  <span className={big ? "mt-6" : "mt-3"}>
                    <span className={`block truncate font-medium text-white ${big ? "text-xl" : "text-sm"}`}>
                      {t.name}
                    </span>
                    <span className="mt-0.5 block truncate font-mono text-[11px] text-zinc-500">{t.role}</span>
                  </span>
                </motion.div>
              )
            })}
          </motion.div>
        </Chapter>

        <Chapter index={2} title="Le terrain">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050608] p-6 sm:p-10"
          >
            <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary via-primary-dark to-transparent" />
            <p className={prose}>
              J&apos;ai développé des applications mobile, des SaaS, des vitrines et des boutiques e-commerce, de la base de
              données à l&apos;écran. Je travaille directement avec les personnes concernées : pas d&apos;intermédiaire, une démo
              chaque semaine, un dépôt Git propre livré avec le code.
            </p>
            <p className={`${prose} mt-4`}>
              Cette façon de travailler m&apos;a appris l&apos;essentiel : comprendre le besoin avant d&apos;écrire la première
              ligne.
            </p>
          </motion.div>
        </Chapter>

        <Chapter index={3} title="L'entrepreneuriat">
          <p className={prose}>
            Savoir coder ne suffit pas pour vivre d&apos;un produit. Il faut une offre claire, une audience, et savoir vendre.
            Pour apprendre à faire tout cela, j&apos;ai rejoint le meilleur accompagnement pour les créateurs de contenu en
            France, avec{" "}
            <a
              href="https://www.mickaelwu.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Mickaël Wu
            </a>
            , au sein de MW Business.
          </p>

          <div className="mt-8 grid items-start gap-8 lg:grid-cols-2">
            <ul className="space-y-3">
              {coachingPoints.map((p, i) => (
                <motion.li
                  key={p.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/20"
                >
                  <span className="font-montserrat text-xs tabular-nums text-primary">0{i + 1}</span>
                  <div>
                    <span className="block font-montserrat text-sm font-semibold text-white">{p.title}</span>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">{p.text}</p>
                  </div> 
                </motion.li>
              ))}
            </ul>
            <Figure
              src={IMAGES.mwBusiness}
              alt="Un moment partagé avec la communauté MW Business"
              caption="Avec la communauté MW Business."
            />
          </div>

          <div className="mt-12 grid items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <Figure
                src={IMAGES.portrait}
                alt="Portrait d'Abdouraouf Youssouf"
                caption="Créer des contenus, le cœur de mon activité."
                ratio="aspect-[4/5]"
              />
            </div>
            <motion.blockquote
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="border-l-2 border-primary/60 pl-6 md:col-span-7 md:col-start-6"
            >
              <p className="font-serif text-2xl italic leading-snug text-zinc-300 sm:text-3xl">
                Monétiser mes compétences de développeur, grâce à la création de contenu.
              </p>
              <footer className="mt-4 font-montserrat text-sm text-zinc-500">Mon objectif aujourd&apos;hui</footer>
            </motion.blockquote>
          </div>

          <p className={`${prose} mt-10`}>
            Cette double casquette m&apos;a donné un angle que je n&apos;avais pas en étant seulement développeur : voir un
            produit comme un moyen de résoudre un problème qui coûte de l&apos;argent à quelqu&apos;un. De là est née une idée.
          </p>

          {/* ---------- Histoire dans l'histoire : panneau gris, contraste avec le noir ---------- */}
          <motion.div
            id="ripostera"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mt-14 scroll-mt-28 rounded-3xl border border-white/10 bg-[#141416] p-6 shadow-2xl shadow-black/40 sm:p-10"
          >
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-montserrat text-2xl font-semibold tracking-tight text-white">Ripostera</h3>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-light">
                En développement
              </span>
            </div>
            <p className="mt-2 max-w-[56ch] text-sm leading-relaxed text-zinc-500">
              L&apos;histoire d&apos;un produit, à l&apos;intérieur de la mienne.
            </p>

            <ol className="mt-10 space-y-6 border-l border-white/15 pl-6 sm:pl-8">
              {ripostaSteps.map((s, i) => (
                <motion.li
                  key={s.t}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="relative rounded-2xl bg-[#0a0c10] p-5 ring-1 ring-white/5 transition-all hover:ring-primary/30"
                >
                  <span className="absolute -left-[31px] top-6 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-[#141416] sm:-left-[39px]" />
                  <span className="font-montserrat text-xs tabular-nums text-zinc-600">0{i + 1}</span>
                  <h4 className="mt-1 font-montserrat text-sm font-semibold text-white">{s.t}</h4>
                  <p className="mt-1 max-w-[58ch] text-sm leading-relaxed text-zinc-400">{s.d}</p>
                </motion.li>
              ))}
            </ol>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              <Figure
                src={IMAGES.ripostDashboard}
                alt="Constructeur d'automatisations dans Ripostera : une condition puis un DM"
                caption="Automatiser : une condition de suivi, puis un DM."
                ratio="aspect-[4/3]"
              />
              <Figure
                src={IMAGES.ripostDm}
                alt="Smart Inbox dans Ripostera : un commentaire transformé en réponse DM par l'IA"
                caption="Convertir : du commentaire au DM."
                ratio="aspect-[4/3]"
              />
              <Figure
                src={IMAGES.ripostSales}
                alt="Tableau de bord Ripostera : revenus, vidéos syndiquées et répartition par plateforme"
                caption="Suivre : les revenus et la diffusion par plateforme."
                ratio="aspect-[4/3]"
              />
            </div>

            <div className="mt-10">
              <CTAButton
                href={RIPOSTERA_REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
                className="gap-2"
                icon={<ArrowUpRight className="h-[15px] w-[15px]" />}
              >
                Rejoindre la Beta
              </CTAButton>
            </div>
          </motion.div>
        </Chapter>

        {/* ---------------- Contact : panneau final ---------------- */}
        <section id="contact" className="pb-20 pt-4 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0c10] p-8 sm:p-12 lg:p-16"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-32 left-1/2 h-[320px] w-[720px] -translate-x-1/2 rounded-full bg-primary-dark/20 blur-[110px]"
            />

            <div className="relative grid gap-12 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">Contact</p>
                <h2 className="mt-4 font-montserrat text-3xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
                  Un projet, une idée,{" "}
                  <span className="font-serif font-normal italic text-zinc-500">ou une collaboration ?</span>
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                  Je suis disponible pour de nouveaux projets web, et ouvert aux échanges avec les créateurs qui souhaitent
                  tester Ripostera.
                </p>
                <CalButton className="btn-cta-gold group mt-10 inline-flex items-center gap-2 rounded-full px-6 py-2 font-montserrat text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer">
                  Prendre rendez-vous
                  <ArrowUpRight className="h-4 w-4 text-[#23190A] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </CalButton>
              </div>

              <ul className="divide-y divide-white/10 border-y border-white/10 md:col-span-5">
                {socialLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 py-4 text-zinc-300 transition-colors hover:text-white"
                    >
                      <span className="flex items-center gap-3 text-sm font-medium">
                        <link.icon className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-primary" aria-hidden />
                        {link.name}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-zinc-600 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  )
}
