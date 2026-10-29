"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Sparkles, ArrowUpRight, Play } from "lucide-react";
import Link from "next/link";
import { RiTiktokFill } from "react-icons/ri";

export function MyHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#141416]/80 backdrop-blur-2xl overflow-hidden mb-12 font-['Helvetica_Neue',Helvetica,Arial,sans-serif] shadow-2xl shadow-black/40"
    >
      {/* Ambient background glow & top shine */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 bg-white/[0.04] rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-72 h-72 bg-white/[0.03] rounded-full blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 text-center md:text-left">
        {/* Avatar with luxury aura & verified badge */}
        <div className="relative shrink-0 group">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-white/30 via-white/10 to-white/30 opacity-60 blur-md group-hover:opacity-100 transition duration-500" />

          <Avatar className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl border-2 border-white/20 shadow-2xl bg-[#0a0c10] overflow-hidden">
            <AvatarImage
              src="/profil.png"
              alt="Abdouraouf Youssouf"
              className="object-contain scale-[1.3] translate-y-1 transition-transform duration-500 group-hover:scale-[1.35]"
            />
            <AvatarFallback className="bg-white/5 text-zinc-300 text-3xl font-light">
              AY
            </AvatarFallback>
          </Avatar>

          {/* Verified creator pill */}
          <div className="absolute -bottom-2 inset-x-0 flex justify-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#0a0c10]/95 border border-emerald-500/40 text-emerald-300 text-[10px] font-light shadow-lg backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Créateur Vérifié</span>
            </span>
          </div>
        </div>

        {/* Content info */}
        <div className="flex-1 space-y-3.5">
          {/* Top pill tags */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-zinc-200 text-xs font-light">
              <Sparkles className="w-3 h-3 text-zinc-400" />
              <span>Full-Stack & Intelligence Artificielle</span>
            </span>
            <span className="text-xs text-gray-400 font-light hidden sm:inline">
              · Formations, tutoriels & templates
            </span>
          </div>

          {/* Name & Title in Helvetica Light */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white">
              Abdouraouf Youssouf
            </h1>
            <p className="text-sm sm:text-base text-gray-300 font-light mt-1.5 max-w-xl leading-relaxed">
              Développeur Full-Stack & créateur de contenu. Je conçois des applications modernes et je partage mes architectures, tutoriels et ressources pour accélérer vos projets.
            </p>
          </div>

          {/* Social Channels with Modern High-End Glass Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
            {/* YouTube Channel Button */}
            <Link
              href="https://youtube.com/@y.abdouraouf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 text-white transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-red-950/20"
            >
              <div className="w-7 h-7 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-sm shrink-0">
                <Play className="w-3.5 h-3.5 fill-white translate-x-0.5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-medium text-white flex items-center gap-1">
                  <span>YouTube</span>
                  <ArrowUpRight className="w-3 h-3 text-red-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="text-[10px] text-red-300/80 font-light">@y.abdouraouf</div>
              </div>
            </Link>

            {/* TikTok Channel Button */}
            <Link
              href="https://tiktok.com/@y.abdouraouf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 text-white transition-all duration-300 hover:scale-[1.02] shadow-lg"
            >
              <div className="w-7 h-7 rounded-xl bg-black border border-white/20 flex items-center justify-center text-white shrink-0">
                <RiTiktokFill className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs font-medium text-white flex items-center gap-1">
                  <span>TikTok</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="text-[10px] text-gray-400 font-light">@y.abdouraouf</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
