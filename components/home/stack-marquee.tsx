"use client"

import { stack } from "@/app/(home)/about/page"
import { motion } from "framer-motion"
import Image from "next/image"

export function StackMarquee() {
  return (
    <div className="relative overflow-hidden py-3">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#0a0c10] to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#0a0c10] to-transparent sm:w-24" />

      {/* Label */}
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
          Stack technique
        </span>

        <span className="flex items-center gap-2 text-[10px] text-zinc-500">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Technologies utilisées
        </span>
      </div>

      {/* Infinite marquee */}
      <div className="group flex overflow-hidden">
        <motion.div
          className="flex w-max shrink-0 items-center gap-3 pr-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...stack, ...stack].map((tech, index) => {
            return (
              <div
                key={`${tech.name}-${index}`}
                className="group/item flex shrink-0 items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2.5 transition-all duration-300 hover:border-primary/30 hover:bg-primary/[0.06]"
              >
                <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
                  {tech.Icon ? (
                    <tech.Icon className="h-4 w-4 text-zinc-400 transition-colors group-hover/item:text-primary" />
                  ) : tech.icon ? (
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={16}
                      height={16}
                      className="h-4 w-4 object-contain"
                    />
                  ) : null}
                </span>

                <span className="text-xs font-medium text-zinc-300 transition-colors group-hover/item:text-white">
                  {tech.name}
                </span>

                <span className="h-1 w-1 rounded-full bg-primary/40" />
              </div>
            )
          })}
        </motion.div>
      </div>

      <style jsx>{`
        .group:hover > div {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .group {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </div>
  )
}
