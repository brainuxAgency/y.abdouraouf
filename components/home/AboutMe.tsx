"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"

const highlights = [
  "Master 2 Ingénierie Informatique",
  "Spécialisé React, Next.js & TypeScript",
  "Créateur de Ripostera (SaaS IA)",
]

export function AboutMe() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#0a0c10] py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,hsl(var(--primary-dark)/0.18),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-7xl px-2 md:px-5">
        <div className="grid items-center gap-12 md:grid-cols-12 lg:gap-16">
          {/* Portrait */}
          <div className="md:col-span-5">
            <div className="relative mx-auto max-w-sm rounded-[28px] border border-white/10 bg-[#0f1013] p-2 shadow-2xl shadow-black/60">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[22px]">
                <Image
                  src="/about/abdou.png"
                  alt="Portrait d'Abdouraouf Youssouf"
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Texte */}
          <div className="md:col-span-7">
            <span className="mb-4 block font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
              — À propos
            </span>

            <h2 className="font-montserrat text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
              Abdouraouf Youssouf
              <span className="mt-3 block font-serif text-2xl font-normal italic text-zinc-500 sm:text-3xl">
                ingénieur logiciel & développeur full-stack.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400">
              Je conçois des produits web fiables, performants et maintenables — de l&apos;architecture jusqu&apos;à
              l&apos;expérience utilisateur.
            </p>

            <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 py-4 text-sm text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-montserrat text-sm font-medium text-white transition-colors duration-200 hover:border-white/35 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              En savoir plus sur moi
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
