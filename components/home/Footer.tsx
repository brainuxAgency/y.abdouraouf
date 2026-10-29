"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { socialLinks } from "@/src/constants/social-icons"

const EMAIL = "abdouraouf.dev@gmail.com"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#050608] text-white overflow-hidden border-t border-white/10">
      {/* Effet de halo lumineux en haut au centre */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[720px] sm:w-[960px] h-[360px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(234,88,12,0.12),transparent_70%)] blur-2xl"
      />

      {/* Watermark géant estompé en arrière-plan */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 select-none text-[180px] sm:text-[260px] font-black tracking-tighter text-white/[0.04] blur-[2px]"
      >
        AY
      </div>

      <div className="relative z-10 max-w-7xl mx-auto border-x border-white/10">
        {/* Ligne 1 : Réseaux sociaux en grille de 4 colonnes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-white/10">
          {socialLinks.map((item, index) => {
            const Icon = item.icon
            const isLast = index === socialLinks.length - 1
            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between px-6 sm:px-8 py-5 sm:py-6 transition-all duration-300 hover:bg-white/[0.04] ${
                  !isLast ? "border-b sm:border-b-0 sm:border-r border-white/10" : ""
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <Icon className="w-4 h-4 text-zinc-300 group-hover:text-white transition-colors" />
                  <span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
              </a>
            )
          })}
        </div>

        {/* Ligne 2 : Navigation en 4 colonnes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Colonne 1 : Navigation */}
          <div className="p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 sm:border-r border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-6 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="/about" className="text-zinc-300 hover:text-white transition-colors block">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-zinc-300 hover:text-white transition-colors block">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/ressources" className="text-zinc-300 hover:text-white transition-colors block">
                  Ressources
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 2 : Services */}
          <div className="p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 sm:border-r border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-6 font-semibold">
              Services
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="/#services" className="text-zinc-300 hover:text-white transition-colors block">
                  Architecture SaaS &amp; MVP
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-zinc-300 hover:text-white transition-colors block">
                  ERP &amp; CRM sur mesure
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-zinc-300 hover:text-white transition-colors block">
                  Tableaux de bord
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-zinc-300 hover:text-white transition-colors block">
                  Reprise &amp; modernisation
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Légal */}
          <div className="p-6 sm:p-8 lg:p-10 border-b sm:border-b-0 sm:border-r border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-6 font-semibold">
              Légal
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="/legal/privacy-policy" className="text-zinc-300 hover:text-white transition-colors block">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-zinc-300 hover:text-white transition-colors block">
                  Conditions d&apos;utilisation
                </Link>
              </li>
              <li>
                <Link href="/legal/payment-security" className="text-zinc-300 hover:text-white transition-colors block">
                  Sécurité des paiements
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Contact */}
          <div className="p-6 sm:p-8 lg:p-10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-6 font-semibold">
              Contact
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-zinc-300 hover:text-white transition-colors block break-words"
                >
                  <span className="text-zinc-500">Email :</span> {EMAIL}
                </a>
              </li>
              <li className="text-zinc-400">
                <span className="text-zinc-500">Basé en :</span> France &amp; à distance
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne 3 : Copyright centré */}
        <div className="border-t border-white/10 py-7 px-4 text-center">
          <p className="text-xs text-zinc-500 tracking-wide font-normal">
            &copy; {currentYear} Codaouf. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
