
"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Workflow,
  MoveUpRight,
} from "lucide-react"
import { StackMarquee } from "./stack-marquee"

const services = [
  {
    number: "01",
    title: "Produits SaaS",
    description: "Des idées transformées en produits prêts à être lancés.",
    icon: Layers3,
  },
  {
    number: "02",
    title: "Applications métier",
    description: "Des outils sur mesure pour automatiser et simplifier.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Architecture logicielle",
    description: "Du code structuré, maintenable et évolutif.",
    icon: Code2,
  },
]

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative mt-20 isolate overflow-hidden bg-[#0a0c10] text-white"
    >
      {/* Texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      <div className="mx-auto max-w-7xl px-2 md:px-5">

        {/* Main composition */}
        <div className="grid gap-10 py-8 sm:py-10 lg:grid-cols-[1fr_260px] lg:gap-12 lg:py-12">

          {/* Left: editorial title */}
          <div className="min-w-0">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500 sm:text-xs"
            >
              <span className="h-px w-8 bg-primary" />
              Ingénierie logicielle · Produits digitaux
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="max-w-3xl text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.04em]"
            >
              Je conçois des
              <br />
              produits{" "}
              <span className="font-serif font-normal italic text-primary">
                utiles.
              </span>
              <br />
              Pensés pour durer.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-5 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end"
            >
              <p className="max-w-xl text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
                Diplômé d&apos;un Master 2 en ingénierie informatique,
                j&apos;accompagne les fondateurs et les entreprises dans
                la conception d&apos;applications web, de SaaS et
                d&apos;outils métier avec React, Next.js et TypeScript.
              </p>

              <span className="hidden font-mono text-xs text-zinc-600 sm:block">
                Basé au Maroc
                <br />
                Collaborations à distance
              </span>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="mt-6 flex flex-wrap items-center gap-4"
            >
              <Link
                href="#contact"
                className="btn-cta-gold group inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-semibold cursor-pointer"
              >
                Parlons de votre projet
                <ArrowUpRight className="h-4 w-4 text-[#23190A] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/work"
                className="group inline-flex items-center gap-2 py-3 text-sm text-zinc-300 transition hover:text-white"
              >
                Voir mes réalisations
                <MoveUpRight className="h-4 w-4 text-zinc-500 transition group-hover:text-primary" />
              </Link>
            </motion.div>
          </div>

          {/* Right: profile panel */}
          <motion.aside
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="flex flex-col border-t border-white/10 pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                whoami
              </span>
              <ArrowDownRight className="h-4 w-4 text-primary" />
            </div>

            <div className="relative mt-4 aspect-[4/4.2] overflow-hidden rounded-xl border border-white/10 bg-[#13151a]">
              <Image
                src="/about/abdou.png"
                alt="Portrait d'Abdouraouf Youssouf"
                fill
                sizes="(max-width: 1024px) 100vw, 260px"
                priority
                className="object-cover object-top grayscale-[15%] transition duration-500 hover:scale-[1.03] hover:grayscale-0"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3.5 pt-10">
                <p className="text-sm font-semibold">
                  Abdouraouf Youssouf
                </p>
                <p className="mt-0.5 text-xs text-zinc-300">
                  Full-Stack Developer
                </p>
              </div>
            </div>

            <div className="mt-3.5 space-y-0">
              <div className="flex items-center justify-between border-b border-white/[0.08] py-2">
                <span className="text-xs text-zinc-500">Spécialité</span>
                <span className="text-xs text-zinc-200">
                  Web & SaaS
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-white/[0.08] py-2">
                <span className="text-xs text-zinc-500">Stack</span>
                <span className="text-xs text-zinc-200">
                  React · Next.js
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-xs text-zinc-500">Projet actuel</span>
                <span className="flex items-center gap-1.5 text-xs text-primary-light">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Ripostera
                </span>
              </div>
            </div>
          </motion.aside>
        </div>
        <StackMarquee />
      </div>
    </section>
  )
}
