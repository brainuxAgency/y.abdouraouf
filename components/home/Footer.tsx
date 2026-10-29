"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiTwitterXLine,
  RiWhatsappLine,
} from "react-icons/ri"

const socialChannels = [
  {
    name: "Instagram",
    href: "https://instagram.com/y.abdouraouf",
    icon: RiInstagramLine,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/y.abdouraouf",
    icon: RiLinkedinBoxLine,
  },
  {
    name: "Twitter",
    href: "https://x.com/y_abdouraouf",
    icon: RiTwitterXLine,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/212773543330",
    icon: RiWhatsappLine,
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#050608] text-white overflow-hidden border-t border-white/10">
      {/* Effet de halo lumineux / Studio Glow signature en haut au centre */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[720px] sm:w-[960px] h-[360px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.18),transparent_70%)] blur-2xl"
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
          {socialChannels.map((item, index) => {
            const Icon = item.icon
            const isLast = index === socialChannels.length - 1
            return (
              <a
                key={item.name}
                href={item.href}
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

        {/* Ligne 2 : Navigation en 4 colonnes structurées */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Colonne 1 : Company */}
          <div className="p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 sm:border-r border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-6 font-semibold">
              Company
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link
                  href="/#about"
                  className="text-zinc-300 hover:text-white transition-colors block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-zinc-300 hover:text-white transition-colors block"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/privacy-policy"
                  className="text-zinc-300 hover:text-white transition-colors block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/terms"
                  className="text-zinc-300 hover:text-white transition-colors block"
                >
                  Terms and conditions
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
                <Link
                  href="/work"
                  className="text-zinc-300 hover:text-white transition-colors block"
                >
                  Crafted Websites
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-zinc-300 hover:text-white transition-colors block"
                >
                  Website Redesign
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-zinc-300 hover:text-white transition-colors block"
                >
                  eCommerce Design
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-zinc-300 hover:text-white transition-colors block"
                >
                  CMS &amp; Dynamic Sites
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Resources */}
          <div className="p-6 sm:p-8 lg:p-10 border-b sm:border-b-0 sm:border-r border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-6 font-semibold">
              Resources
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link
                  href="/ressources"
                  className="text-zinc-300 hover:text-white transition-colors block"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-zinc-300 hover:text-white transition-colors block"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/privacy-policy"
                  className="text-zinc-300 hover:text-white transition-colors block"
                >
                  Cookies
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-zinc-300 hover:text-white transition-colors block"
                >
                  FAQs
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
                  href="mailto:youssouf.abdouraouf4@gmail.com"
                  className="text-zinc-300 hover:text-white transition-colors block break-words"
                >
                  <span className="text-zinc-500">Email:</span>{" "}
                  youssouf.abdouraouf4@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/212773543330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white transition-colors block"
                >
                  <span className="text-zinc-500">Phone:</span> +212 7 73 54 33 30
                </a>
              </li>
              <li className="text-zinc-400">
                <span className="text-zinc-500">Based in:</span> France &amp; Remote
              </li>
              <li className="text-zinc-400">
                Serving the US, UK &amp; worldwide
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne 3 : Copyright centré */}
        <div className="border-t border-white/10 py-7 px-4 text-center">
          <p className="text-xs text-zinc-500 tracking-wide font-normal">
            &copy; {currentYear} Abdouraouf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

