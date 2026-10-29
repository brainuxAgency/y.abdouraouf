"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ShutterIntroProps {
  onComplete: () => void
}

export function ArchitecturalShutterIntro({ onComplete }: ShutterIntroProps) {
  const [progress, setProgress] = useState(0)
  const [isOpening, setIsOpening] = useState(false)

  useEffect(() => {
    // Compteur rapide de 0 à 100% en ~800ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsOpening(true), 150)
          return 100
        }
        const step = Math.floor(Math.random() * 8) + 4
        return Math.min(100, prev + step)
      })
    }, 35)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-auto select-none overflow-hidden font-mono">
      {/* Volet Supérieur (Glisse vers le haut) */}
      <motion.div
        initial={{ y: "0%" }}
        animate={isOpening ? { y: "-100%" } : { y: "0%" }}
        transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
        onAnimationComplete={() => {
          if (isOpening) onComplete()
        }}
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#090b0e] border-b border-white/10 flex flex-col justify-end"
      >
        {/* Grille millimétrique supérieure */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Ligne laser d'étanchéité au centre */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      </motion.div>

      {/* Volet Inférieur (Glisse vers le bas) */}
      <motion.div
        initial={{ y: "0%" }}
        animate={isOpening ? { y: "100%" } : { y: "0%" }}
        transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#090b0e] border-t border-white/10 flex flex-col justify-start"
      >
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      </motion.div>

      {/* Contenu central : Compteur et métriques de calibrage */}
      <AnimatePresence>
        {!isOpening && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.2 } }}
            className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6"
          >
            {/* Tag supérieur */}
            <div className="flex items-center gap-2 text-[10px] tracking-widest text-zinc-500 uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>SYS.INIT // ABDIOURAOUF YOUSSOUF</span>
            </div>

            {/* Compteur 00 -> 100 monumental */}
            <div className="text-6xl sm:text-8xl font-extrabold tracking-tighter text-white tabular-nums flex items-baseline">
              <span>{progress.toString().padStart(2, "0")}</span>
              <span className="text-xl sm:text-2xl text-primary ml-1 font-semibold">%</span>
            </div>

            {/* Barre de progression laser discrète */}
            <div className="w-48 sm:w-64 h-[2px] bg-white/10 rounded-full mt-4 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary-dark to-primary-light"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Métriques d'environnement */}
            <div className="mt-6 flex items-center gap-6 text-[11px] text-zinc-400 tracking-wider">
              <span>RUNTIME: OK</span>
              <span className="text-white/20">|</span>
              <span>STACK: NEXT.JS // REACT</span>
              <span className="text-white/20">|</span>
              <span>ENV: PROD</span>
            </div>

            {/* Indication skip */}
            <div className="absolute bottom-8 text-[11px] text-zinc-600 tracking-wide">
              Appuyez sur <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400">Échap</kbd> ou cliquez pour passer
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

