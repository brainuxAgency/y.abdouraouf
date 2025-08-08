"use client"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Youtube } from "lucide-react"
import Link from "next/link"
import { RiTiktokFill } from "react-icons/ri"

export function MyHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row items-center gap-8 mb-12"
    >
      <Avatar className="w-32 h-32 border-4 border-purple-500/30 shadow-lg shadow-purple-500/20">
        <AvatarImage
          src="/profil.png"
          alt="Abdouraouf Youssouf"
          className="object-contain scale-[1.3] translate-y-1"
        />
        <AvatarFallback className="bg-purple-500/20 text-purple-400 text-4xl font-bold">
          AY
        </AvatarFallback>
      </Avatar>
      <div className="text-center md:text-left">
        <h1 className="md:text-4xl text-2xl font-bold text-white mb-2">Abdouraouf Youssouf</h1>
        <p className="md:text-xl text-sm text-gray-300 mb-4">Développeur Full Stack & Créateur de Contenu</p>
        <div className="flex md:gap-4 gap-2">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <Link
              href="https://youtube.com/@y.abdouraouf"
              target="_blank"
              className="flex items-center sm:gap-2 gap-1 text-red-500 hover:text-red-400 transition-colors bg-red-500/10 hover:bg-red-500/20 px-3 md:px-4 py-2 rounded-full"
            >
              <Youtube className="w-6 h-6" />
              <span className="font-medium text-[12px] md:text-base">Ma chaîne YouTube</span>
            </Link>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <Link
              href="https://tiktok.com/@y.abdouraouf"
              target="_blank"
              className="flex items-center sm:gap-2 gap-1 text-white hover:text-white transition-colors bg-blue-500/20 hover:bg-gray-500/20 px-3 md:px-4 py-2 rounded-full"
            >
              <RiTiktokFill className="w-6 h-6" />
              <span className="font-medium text-[12px] md:text-base">Ma chaîne TikTok</span>
            </Link>
          </div>

        </div>
      </div>
    </motion.div>
  )
}

