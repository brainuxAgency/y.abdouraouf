"use client"

import { useEffect, useState, useCallback, ReactNode } from "react"
import { motion } from "framer-motion"
import { ArchitecturalShutterIntro } from "./ArchitecturalShutterIntro"
import { WireframeScanlineIntro } from "./WireframeScanlineIntro"
import { VectorApertureIntro } from "./VectorApertureIntro"

// =========================================================================
// ⚙️ CONFIGURATION DE L'ANIMATION :
//   - ACTIVE_INTRO_VARIANT : "aperture" (Scaling cinématique AY retenu)
//   - PLAY_ON_EVERY_RELOAD : true (Se joue à chaque chargement / actualisation)
// =========================================================================
export const ACTIVE_INTRO_VARIANT: "shutter" | "scanline" | "aperture" = "aperture"
export const PLAY_ON_EVERY_RELOAD = true

interface IntroLoaderProps {
  children?: ReactNode
}

export function IntroLoader({ children }: IntroLoaderProps) {
  const [mounted, setMounted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isRevealing, setIsRevealing] = useState(false)

  const handleStartReveal = useCallback(() => {
    setIsRevealing(true)
  }, [])

  const handleComplete = useCallback(() => {
    setIsPlaying(false)
    setIsRevealing(false)
    if (typeof window !== "undefined") {
      document.body.style.overflow = ""
    }
  }, [])

  useEffect(() => {
    setMounted(true)

    // 1. Respect de l'accessibilité : désactivation si l'utilisateur demande moins de mouvement
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      return
    }

    // Activer l'intro et bloquer le défilement pendant l'animation
    setIsPlaying(true)
    document.body.style.overflow = "hidden"

    // 2. Touche Échap pour passer immédiatement
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleComplete()
      }
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [handleComplete])

  // Rendu normal côté serveur ou si l'animation n'est pas requise
  if (!mounted || !isPlaying) {
    return <>{children}</>
  }

  return (
    <>
      {/* Animation d'intro au premier plan */}
      <div onClick={handleComplete} className="cursor-pointer">
        {ACTIVE_INTRO_VARIANT === "shutter" && (
          <ArchitecturalShutterIntro onComplete={handleComplete} />
        )}
        {ACTIVE_INTRO_VARIANT === "scanline" && (
          <WireframeScanlineIntro onComplete={handleComplete} />
        )}
        {ACTIVE_INTRO_VARIANT === "aperture" && (
          <VectorApertureIntro
            onStartReveal={handleStartReveal}
            onComplete={handleComplete}
          />
        )}
      </div>

      {/* Conteneur de page avec effet de caméra cinématique (Focale & Profondeur) */}
      <motion.div
        initial={{ scale: 1.05, filter: "blur(6px)", opacity: 0.85 }}
        animate={
          isRevealing
            ? { scale: 1, filter: "blur(0px)", opacity: 1 }
            : { scale: 1.05, filter: "blur(6px)", opacity: 0.85 }
        }
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1], // Transition ultra fluide qui se stabilise
        }}
        className="w-full will-change-transform"
      >
        {children}
      </motion.div>
    </>
  )
}
