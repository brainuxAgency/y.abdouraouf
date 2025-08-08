/* eslint-disable react/no-unescaped-entities */
"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const technologies = [
  {
    category: "Frontend",
    icon: "/react.svg",
    title: "React",
    description: "Maîtrise approfondie de l'écosystème React avec une expertise particulière en Next.js 14. Je développe des applications web performantes avec une architecture robuste et évolutive.",
    animate: true,
  },
  {
    category: "Style",
    icon: "/tailwindcss.svg",
    title: "TailwindCSS",
    description: "Expert en TailwindCSS et shadcn/ui pour créer des interfaces modernes et responsives. J'optimise l'expérience utilisateur avec des animations fluides et un design système cohérent.",
  },
  {
    category: "Langage",
    icon: "/typescript.svg",
    title: "TypeScript",
    description: "Développement rigoureux avec TypeScript pour garantir la qualité et la maintenabilité du code. J'implémente des architectures type-safe pour des applications robustes et sécurisées.",
  },
]

const backendTools = {
  title: "Architecture Backend Moderne",
  description:
    "Expert en développement backend avec Next.js 14 et NestJS. Je conçois des architectures scalables et sécurisées, intégrant des solutions de cache avancées et des patterns de conception modernes.",
  tools: [
    { name: "NestJS", icon: "/nestjs.png" },
    { name: "PostgreSQL", icon: "/postgresql.svg" },
    { name: "Prisma", icon: "/prisma.svg" },
    { name: "Redis", icon: "/redis.svg" },
  ],
}

const aiTools = {
  title: "Intégration IA Avancée",
  description: "Expertise pointue dans l'intégration des technologies d'IA pour automatiser et optimiser les processus métier. Je développe des solutions intelligentes sur mesure avec les dernières avancées en IA.",
  tools: [
    { name: "OpenAI", icon: "/openai.svg" },
    { name: "n8n", icon: "/n8n.svg" },
    { name: "Claude", icon: "/claude.svg" },
    { name: "Cursor", icon: "/cursor.svg" },
  ],
}

export function TechStack() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-900 via-[#0f1729] to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e0693,transparent)]" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 8,
            ease: "linear",
          }}
        />
      </div>

      <div className="container max-w-7xl relative mx-auto px-6 space-y-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400">
              Ma Stack Technologique
            </span>
          </h2>
          <p className="text-base sm:text-xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed">
            Un ensemble d'outils modernes et puissants pour créer des applications web performantes et évolutives
          </p>
        </motion.div>

        <div className="space-y-10">
          {/* Technologies principales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <div className="relative h-full p-8 bg-gray-900 rounded-lg ring-1 ring-gray-800/50 backdrop-blur-xl">
                  <div className="flex items-center justify-between mb-8">
                    <motion.div className="relative w-16 h-16">
                      <Image
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.title}
                        width={64}
                        height={64}
                        className={`object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] ${tech.animate ? "animate-spin-slow" : ""}`}
                      />
                    </motion.div>
                    {
                      tech.title === "React" &&

                      <motion.div className={`relative bg-white rounded-full w-16 h-16 ${tech.animate ? "animate-spin-slow" : ""}`}>
                        <Image
                          src={"/next.svg"}
                          alt={"Next.JS"}
                          width={64}
                          height={64}
                          className={`object-contain text-white mt-6 px-2 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]`}
                        />
                      </motion.div>
                    }
                    {
                      tech.title === "TailwindCSS" &&
                      <motion.div className={`relative w-16 h-16 `}>
                        <Image
                          src={"/shadcn.svg"}
                          alt={"Shadcn"}
                          width={64}
                          height={64}
                          className={`object-contain text-white mt-1 px-2 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]`}
                        />
                      </motion.div>
                    }
                    <span className="text-sm font-medium text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                      {tech.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {tech.title}
                  </h3>
                  <p className="text-gray-300/90 leading-relaxed">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Backend et IA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[backendTools, aiTools].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <div className="relative h-full p-8 bg-gray-900 rounded-lg ring-1 ring-gray-800/50 backdrop-blur-xl">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-gray-300/90 mb-8 leading-relaxed">{section.description}</p>
                  <div className="flex flex-wrap gap-8">
                    {section.tools.map((tool) => (
                      <motion.div key={tool.name} whileHover={{ scale: 1.1 }} className="relative group/tool">
                        <div className="w-10 h-10 flex items-center justify-center sm:w-16 sm:h-16">
                          <Image
                            src={tool.icon || "/placeholder.svg"}
                            alt={tool.name}
                            width={64}
                            height={64}
                            className="object-contain drop-shadow-[0_0_15px_rgba(168,85,147,1)]"
                          />
                        </div>
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm text-purple-400 opacity-0 group-hover/tool:opacity-100 group-hover/tool:-translate-y-2 transition-all duration-300">
                          {tool.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

