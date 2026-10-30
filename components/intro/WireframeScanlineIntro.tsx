"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ScanlineIntroProps {
  onComplete: () => void
}

export function WireframeScanlineIntro({ onComplete }: ScanlineIntroProps) {
  const [stage, setStage] = useState<"scanning" | "revealing" | "done">("scanning")
  const [logIndex, setLogIndex] = useState(0)

  const logs = [
    "INITIALIZING CORE SYSTEM...",
    "CALIBRATING VIEWPORT [1920x1080]",
    "COMPILING CLIENT ASSETS...",
    "READY // WELCOME"
  ]

  useEffect(() => {
    // Défilement rapide des messages de statut
    const logTimer = setInterval(() => {
      setLogIndex((prev) => {
        if (prev < logs.length - 1) return prev + 1
        return prev
      })
    }, 220)

    // Déclenchement de la révélation finale
    const endTimer = setTimeout(() => {
      setStage("revealing")
      setTimeout(onComplete, 450)
    }, 1100)

    return () => {
      clearInterval(logTimer)
      clearTimeout(endTimer)
    }
  }, [onComplete, logs.length])

  return (
    <AnimatePresence>
      {stage !== "done" && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={stage === "revealing" ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] pointer-events-auto select-none bg-[#07090c] font-mono text-zinc-300 overflow-hidden"
        >
          {/* Grille filaire HUD d'arrière-plan */}
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Réticules aux 4 coins (HUD Futuriste) */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-cyan-500/60" />
          <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-cyan-500/60" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-cyan-500/60" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-cyan-500/60" />

          {/* Faisceau Laser / Scanline descendant */}
          <motion.div
            initial={{ top: "-5%" }}
            animate={{ top: "105%" }}
            transition={{ duration: 0.95, ease: "easeInOut" }}
            className="absolute left-0 right-0 h-1 z-20 pointer-events-none"
          >
            {/* Traînée lumineuse */}
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-cyan-400/20 to-transparent" />
            {/* Ligne laser pure */}
            <div className="w-full h-[2px] bg-cyan-300 shadow-[0_0_15px_#22d3ee,0_0_35px_#06b6d4]" />
          </motion.div>

          {/* Bloc d'affichage central */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
            {/* Réticule de visée circulaire central */}
            <div className="relative w-36 h-36 flex items-center justify-center mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-cyan-500/40"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-3 rounded-full border border-cyan-500/20"
              />
              <div className="text-xl font-bold tracking-widest text-cyan-400">
                AY
              </div>
            </div>

            {/* Terminal logs de télémétrie */}
            <div className="flex flex-col items-center gap-1.5 text-center">
              <span className="text-[10px] text-cyan-400/70 tracking-widest uppercase">
                HUD SCAN // RECONNAISSANCE SYSTÈME
              </span>
              <p className="text-sm sm:text-base font-semibold text-white tracking-wide min-h-[1.5rem]">
                {logs[logIndex]}
              </p>
            </div>
          </div>

          {/* Flash optique d'ouverture */}
          {stage === "revealing" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-cyan-400/10 pointer-events-none"
            />
          )}

          {/* Skip indication */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] text-zinc-600 tracking-wide">
            Appuyez sur <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400">Échap</kbd> ou cliquez pour passer
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

