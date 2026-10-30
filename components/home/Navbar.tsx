"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { AuthModal } from "../auth/AuthModal"
import { useAuthSession } from "@/hooks/useSessionStatut"
import { NavUserMin } from "../nav-user-min"
import { CalButton } from "../common/CalButton"

const navItems = [
  { name: "Réalisations", href: "/work", isAnchor: false },
  { name: "Offre", href: "#services", isAnchor: true },
  { name: "Méthode", href: "#method", isAnchor: true },
  { name: "À propos", href: "/about", isAnchor: false },
  {name:"Blog", href:"/blog", isAnchor:false},
  { name: "Ressources", href: "/ressources", isAnchor: false },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const menuRef = useRef<HTMLDivElement>(null)

  const { user, isPending } = useAuthSession()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.querySelector(sectionId)
    if (element) {
      const navHeight = 72
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const handleLinkClick = (href: string, isAnchor: boolean) => {
    setIsOpen(false)
    if (isAnchor) {
      if (isHomePage) {
        scrollToSection(href)
      } else {
        window.location.href = `/${href}`
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0c10]/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 md:px-5">
        <div className="flex items-center justify-between">
          
          {/* Logo signature Pulsor-style : Carré sombre + Nom */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
          >
            <div className="w-8 h-8 rounded-[8px] bg-white text-[#050608] flex items-center justify-center font-montserrat font-bold text-xs tracking-wider shadow-sm group-hover:bg-primary-dark group-hover:text-primary-foreground transition-colors">
              AY
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white group-hover:text-primary-light transition-colors leading-none font-montserrat">
                Abdouraouf
              </span>
              <span className="text-xs font-montserrat uppercase tracking-widest text-zinc-500 mt-0.5 font-medium">
                Full-Stack
              </span>
            </div>
          </Link>

          {/* Navigation : Liens centrés discrets en Montserrat */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-montserrat font-medium text-zinc-400">
            {navItems.map((item) => {
              const isActive = item.isAnchor && activeSection === item.href.slice(1)
              return item.isAnchor ? (
                <button
                  key={item.name}
                  onClick={() => handleLinkClick(item.href, true)}
                  className={`transition-colors hover:text-white cursor-pointer ${
                    isActive ? "text-white font-bold" : ""
                  }`}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Action : Bouton Pilule CalButton avec flèche animée */}
          <div className="hidden md:flex items-center gap-4">
            <CalButton className="btn-cta-gold group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2 font-montserrat text-sm font-semibold active:scale-[0.98] cursor-pointer">
              <span className="pulsor-btn-arrow text-[13px]">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>Réserver un appel</span>
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </CalButton>

            {!isPending && user && <NavUserMin />}
          </div>

          {/* Menu Mobile Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            {!isPending && user && <NavUserMin />}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Déroulant Mobile en Montserrat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden border-b border-white/10 bg-[#0a0c10] shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-2 md:px-5 py-5 space-y-3">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.isAnchor ? (
                    <button
                      onClick={() => handleLinkClick(item.href, true)}
                      className="w-full text-left py-2 text-base font-montserrat uppercase tracking-wider text-white hover:text-primary-light transition-colors font-medium"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-base font-montserrat uppercase tracking-wider text-white hover:text-primary-light transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-3 border-t border-white/10">
                <CalButton
                  className="btn-cta-gold w-full py-2.5 rounded-full text-sm font-montserrat uppercase tracking-wider font-semibold text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Réserver un appel ↗</span>
                </CalButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </header>
  )
}
