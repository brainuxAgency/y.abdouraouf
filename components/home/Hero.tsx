"use client"
import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import Link from "next/link";
import { socialLinks } from "@/src/constants/social-icons";

const heroText = {
  tagline: "Transformez votre vision digitale en réalité avec des solutions web et mobile innovantes. En tant que développeur Full Stack passionné, je crée des expériences numériques qui marquent les esprits et propulsent votre croissance.",
  aiMessage: "Dans un monde numérique en constante évolution, votre succès dépend de la qualité de votre présence en ligne.",
  impactMessage: "Ensemble, créons des applications performantes qui dépassent les attentes de vos utilisateurs."
};

export function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-[#0f1729] to-gray-900 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear",
          }}
        />
      </div>

      <div className="lg:container mx-auto w-full  px-4 md:mt-24 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" mx-auto flex flex-col  items-center justify-center"
        >
          <div className="flex max-w-7xl  w-full flex-col md:flex-row items-center justify-between gap-12">
            {/* Left content */}
            <div className="flex-1 text-center md:text-left ">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-6"
              >
                <span className="px-4 py-2 rounded-full text-sm bg-purple-500/10 text-purple-400 border border-purple-500/20 inline-block">
                  Full Stack Developer — React.js · Next.js · Node.js
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Abdouraouf
                </motion.span>{" "}
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                >
                  Youssouf
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-base sm:text-xl max-w-4xl text-gray-300 mb-4"
              >
                {heroText.tagline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-base sm:text-xl max-w-3xl text-gray-300 mb-8"
              >
                <span className="text-purple-400 font-semibold">{heroText.aiMessage}</span>
              </motion.p>

              <div className="flex justify-center md:justify-start gap-4 mb-12">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="relative p-3 rounded-full bg-gray-800/50 group overflow-hidden"
                  >
                    {/* Effet de glow au hover */}
                    <motion.div
                      className="absolute inset-0 bg-purple-500/30 blur-xl"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />

                    {/* Effet de particules au hover */}
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{
                        background: [
                          "radial-gradient(circle at center, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
                          "radial-gradient(circle at center, rgba(139, 92, 246, 0) 0%, transparent 50%)"
                        ],
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Icône avec animation */}
                    <link.icon className="w-6 h-6 relative z-10 text-gray-300 group-hover:text-purple-400 transition-colors duration-300" />

                    {/* Effet de pulse border */}
                    <motion.div
                      className="absolute inset-0 rounded-full border border-purple-500/50"
                      initial={{ opacity: 0 }}
                      whileHover={{ 
                        opacity: [0, 1, 0],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right content - Avatar */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                duration: 0.8
              }}
              className="flex-shrink-0"
            >
              <Avatar className="h-[400px] w-64 border-2 border-purple-500/30 shadow-xl shadow-purple-500/20">
                <AvatarImage
                  src="/profil.png"
                  alt="Photo de profil"
                  className="object-contain scale-[1.3] translate-y-3"
                />
                <AvatarFallback className="bg-purple-500/20 text-purple-400 text-5xl font-bold">
                  AY
                </AvatarFallback>
              </Avatar>
            </motion.div>
          </div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="text-center mt-12"
          >
            <Link
              href="#contact"
              className="group relative inline-flex items-center px-8 py-2 text-lg font-semibold text-white bg-purple-600 rounded-full overflow-hidden transition-all duration-300 hover:bg-purple-700 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span className="relative z-10">Prendre rendez-vous</span>
              <ArrowRightIcon className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

              {/* Animated background effect */}
              <span className="absolute  inset-0 flex">
                <span className="absolute w-[500px] h-[500px] rotate-[-40deg] bg-purple-400/20 blur-3xl group-hover:rotate-12 transition-transform duration-1000"></span>
                <span className="absolute w-96 h-96 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent"></span>
                <span className="absolute h-full w-8 blur-sm -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"></span>
              </span>

              {/* Pulsing border effect */}
              <span className="absolute inset-0 rounded-full border-2 border-purple-400/50 opacity-0 group-hover:opacity-100 group-hover:animate-pulse-fast"></span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}


