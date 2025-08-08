"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { usePathname } from 'next/navigation'
import { AuthModal } from "../auth/AuthModal"
import { useAuthSession } from "@/hooks/useSessionStatut"
import { NavUserMin } from "../nav-user-min"

const navItems = [
  {
    name: "Services",
    href: "#services",
    isAnchor: true
  },
  {
    name: "Projets",
    href: "#projects",
    isAnchor: true
  },
  // { 
  //   name: "Mes outils", 
  //   href: "/outils", 
  //   isAnchor: false 
  // },
  // {
  //   name: "Contact",
  //   href: "#contact",
  //   isAnchor: true
  // },
  {
    name: "Ressources",
    href: "/ressources",
    isAnchor: false
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const menuRef = useRef<HTMLDivElement>(null)

  const {user, isPending} = useAuthSession()

  // Fonction pour gérer le scroll smooth vers les sections
  const scrollToSection = (sectionId: string) => {
    setIsOpen(false) // Ferme le menu mobile
    const element = document.querySelector(sectionId)
    if (element) {
      const navHeight = 64 // Hauteur de la navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  // Observer pour détecter la section active
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
        rootMargin: "-50% 0px",
        threshold: 0
      }
    )

    // Observer les sections
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  // Fonction modifiée pour gérer le scroll et la redirection
  const handleContactClick = () => {
    setIsOpen(false) // Ferme le menu mobile

    if (isHomePage) {
      // Si on est sur la page d'accueil, scroll vers la section contact
      const element = document.querySelector("#contact")
      if (element) {
        const navHeight = 64
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - navHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })
      }
    } else {
      // Si on est sur une autre page, rediriger vers home avec anchor
      window.location.href = "/#contact"
    }
  }

  // Fermer le menu quand on clique en dehors
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleAnchorClick = (href: string) => {
    setIsOpen(false)

    if (isHomePage) {
      // Si on est sur la page d'accueil, scroll vers la section
      scrollToSection(href)
    } else {
      // Si on est sur une autre page, rediriger vers home avec anchor
      window.location.href = `/${href}`
    }
  }

  const renderNavLink = (item: typeof navItems[0]) => {
    const isActive = item.isAnchor && activeSection === item.href.slice(1)
    const className = `text-gray-300 hover:text-purple-400 transition-colors ${isActive ? "text-purple-400" : ""}`

    if (item.isAnchor) {
      return (
        <button
          onClick={() => handleAnchorClick(item.href)}
          className={className}
        >
          {item.name}
        </button>
      )
    }

    return (
      <Link
        href={item.href}
        className={className}
        onClick={() => setIsOpen(false)}
      >
        {item.name}
      </Link>
    )
  }

  return (
    <nav className="fixed top-0 w-full flex justify-center z-[200] bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="xl:container w-full px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo et Nom */}
          <Link
            href="/"
            className="flex items-center space-x-3"
          >
            <Avatar className="h-10 w-10 border border-purple-500/30">
              <AvatarImage src="/profil.png" alt="Photo de profil" className="object-contain scale-[1.3] translate-y-1" />
              <AvatarFallback className="bg-purple-500/20 text-purple-400 font-bold">
                AY
              </AvatarFallback>
            </Avatar>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name}>
                  {renderNavLink(item)}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-800">
              <Button
                className="bg-purple-600 font-bold hover:bg-purple-700 text-white whitespace-nowrap"
                onClick={handleContactClick}
              >
                Prenez rendez-vous
              </Button>
              {
              !isPending && !user ? null : <NavUserMin />
            }
      
              {/* <Button
                className="bg-blue-600 font-bold hover:bg-blue-700 text-white"
                onClick={() => setIsAuthModalOpen(true)}
              >
                Login
              </Button> */}
            </div>
          </div>

          {/* Bouton Menu Mobile */}
          <div className="flex items-center gap-4 md:hidden">
            {
              !isPending && !user ? null : <NavUserMin />
            }
      
            <Button  size={'icon'}
              className=" text-gray-300 border hover:text-purple-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b-2 rounded-b-lg border-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <div key={item.name} className=" border-gray-800 last:border-none">
                    {renderNavLink(item)}
                  </div>
                ))}
                <div className="pt-2">
                  <Button
                    className="bg-purple-600 hover:bg-purple-700 text-white w-full"
                    onClick={handleContactClick}
                  >
                    Prenez rendez-vous
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </nav>
  )
} 