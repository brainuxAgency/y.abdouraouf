"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface VectorApertureIntroProps {
  onStartReveal?: () => void
  onComplete: () => void
}

export function VectorApertureIntro({ onStartReveal, onComplete }: VectorApertureIntroProps) {
  const [isExpanding, setIsExpanding] = useState(false)

  useEffect(() => {
    // 1. Phase dessin SVG : 0 à 650ms
    // 2. Déclenchement de l'ouverture et du scaling à 750ms
    const revealTimer = setTimeout(() => {
      setIsExpanding(true)
      if (onStartReveal) onStartReveal()
    }, 750)

    return () => clearTimeout(revealTimer)
  }, [onStartReveal])

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-auto select-none bg-[#07090d] font-mono overflow-hidden">
      {/* Fond avec fine trame millimétrique */}
      <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Halo radial de lumière arrière */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isExpanding ? { opacity: 0, scale: 2.5 } : { opacity: 0.35, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary-dark)/0.25)_0%,transparent_60%)] pointer-events-none"
      />

      {/* Onde de choc circulaire (Shockwave Ring) qui explose vers l'extérieur */}
      {isExpanding && (
        <motion.div
          initial={{ scale: 0.6, opacity: 0.8 }}
          animate={{ scale: 4.5, opacity: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-primary shadow-[0_0_30px_hsl(var(--primary)/0.8)] pointer-events-none"
        />
      )}

      {/* 4 Repères HUD propulsés vers les 4 coins de l'écran lors du scaling */}
      <motion.div
        animate={isExpanding ? { x: -160, y: -160, opacity: 0 } : { x: 0, y: 0, opacity: 0.6 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute top-1/2 left-1/2 -mt-36 -ml-36 text-primary/80 text-[10px] tracking-wider pointer-events-none"
      >
        ┌ [SYS_TL]
      </motion.div>
      <motion.div
        animate={isExpanding ? { x: 160, y: -160, opacity: 0 } : { x: 0, y: 0, opacity: 0.6 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute top-1/2 left-1/2 -mt-36 ml-24 text-primary/80 text-[10px] tracking-wider pointer-events-none"
      >
        [SYS_TR] ┐
      </motion.div>
      <motion.div
        animate={isExpanding ? { x: -160, y: 160, opacity: 0 } : { x: 0, y: 0, opacity: 0.6 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute top-1/2 left-1/2 mt-28 -ml-36 text-primary/80 text-[10px] tracking-wider pointer-events-none"
      >
        └ [SYS_BL]
      </motion.div>
      <motion.div
        animate={isExpanding ? { x: 160, y: 160, opacity: 0 } : { x: 0, y: 0, opacity: 0.6 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute top-1/2 left-1/2 mt-28 ml-24 text-primary/80 text-[10px] tracking-wider pointer-events-none"
      >
        [SYS_BR] ┘
      </motion.div>

      {/* Conteneur principal qui subit le SCALING Monumental */}
      <AnimatePresence>
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={
            isExpanding
              ? { scale: 42, opacity: 0 }
              : { scale: 1, opacity: 1 }
          }
          transition={{
            duration: 0.7,
            ease: [0.76, 0, 0.24, 1], // Accélération exponentielle façon plongeon
          }}
          onAnimationComplete={() => {
            if (isExpanding) onComplete()
          }}
          className="absolute inset-0 flex flex-col items-center justify-center z-10"
        >
          {/* Monogramme vectoriel tracé par SVG */}
          <div className="relative w-36 h-36 flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-primary overflow-visible"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              {/* Cadre géométrique technique */}
              <motion.rect
                x="8"
                y="8"
                width="84"
                height="84"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
              />

              {/* Lettre A tracée */}
              <motion.path
                d="M 32 72 L 50 28 L 68 72"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
              />
              <motion.path
                d="M 39 56 L 61 56"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.35, delay: 0.2, ease: "easeOut" }}
              />

              {/* Lettre Y stylisée */}
              <motion.path
                d="M 50 56 L 50 72"
                stroke="hsl(var(--primary))"
                strokeWidth="3.2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
              />
            </svg>
          </div>

          {/* Micro-données techniques orbitales */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.35 }}
            className="mt-6 flex flex-col items-center gap-1.5"
          >
            <span className="text-xs font-bold text-white tracking-[0.25em]">
              ABDOURAOUF YOUSSOUF
            </span>
            <span className="text-[10px] text-zinc-500 tracking-widest uppercase">
              [ DÉVELOPPEUR FULL-STACK // READY ]
            </span>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Flash d'impact optique au moment du passage */}
      {isExpanding && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.45, 0] }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="absolute inset-0 bg-orange-500/20 pointer-events-none"
        />
      )}

      {/* Skip indication */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] text-zinc-600 tracking-wide">
        Appuyez sur <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400">Échap</kbd> ou cliquez pour passer
      </div>
    </div>
  )
}
