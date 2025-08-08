/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Badge } from "../ui/badge"
import { FaCode, FaUsers, FaRocket } from "react-icons/fa"
import { Button } from "../ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState } from "react"

const stats = [
  {
    value: "100+",
    label: "Projets réalisés",
    description: "Des projets variés et innovants",
    icon: FaCode,
    gradient: "from-purple-400 to-pink-600"
  },
  {
    value: "50K+",
    label: "Utilisateurs satisfaits",
    description: "Une communauté grandissante",
    icon: FaUsers,
    gradient: "from-blue-400 to-purple-600"
  },
  {
    value: "95%",
    label: "Taux de réussite",
    description: "Des projets livrés avec succès",
    icon: FaRocket,
    gradient: "from-pink-400 to-red-600"
  }
]

const projects = [
  {
    title: "CRM-HMRENOV26",
    description: "Plateforme de ventes des codes iptv pour acceder a des chaines de télévision premium et des films & series en illimité",
    images: ["/projects/hmrenov26/1.png",
      "/projects/hmrenov26/2.png",
      "/projects/hmrenov26/3.png",
      "/projects/hmrenov26/4.png",
      "/projects/hmrenov26/5.png",
      "/projects/hmrenov26/6.png"
      
    ],
    gradient: "from-purple-600 to-pink-600",
    link: "https://crm-hmrenov26.vercel.app/",
    technologies: [
      { name: "Next.js", color: "bg-zinc-700" },
      { name: "TypeScript", color: "bg-blue-700" },
      { name: "Prisma", color: "bg-emerald-700" },
      { name: "PostgreSQL", color: "bg-sky-700" },
    ],
  },
  {
    title: "AyflixTv",
    description: "Plateforme de ventes des codes iptv pour acceder a des chaines de télévision premium et des films & series en illimité",
    images: ["/projects/ayflixtv/hero.png",
      "/projects/ayflixtv/pricing.png",
      "/projects/ayflixtv/dash.png",
    ],
    gradient: "from-purple-600 to-pink-600",
    link: "https://ayflixtv.com",
    technologies: [
      { name: "Next.js", color: "bg-zinc-700" },
      { name: "TypeScript", color: "bg-blue-700" },
      { name: "Prisma", color: "bg-emerald-700" },
      { name: "PostgreSQL", color: "bg-sky-700" },
    ],
  },
  {
    title: "AYLINKER",
    description: "Plateforme de link in bio permettant de créer des landing pages personnalisées, vendre des produits, capturer des leads et partager via une URL unique",
    images: ["/projects/aylinker/aylinker.png",
    ],
    gradient: "from-purple-600 to-pink-600",
    link: "#",
    technologies: [
      { name: "Next.js", color: "bg-zinc-700" },
      { name: "TypeScript", color: "bg-blue-700" },
      { name: "Prisma", color: "bg-emerald-700" },
      { name: "PostgreSQL", color: "bg-sky-700" },
    ],
  },
  {
    title: "MoulayCars",
    description: "Application mobile de location de voitures à Kenitra Maroc",
    images: ["/projects/moulaycars/moulaycars.png",
      "/projects/moulaycars/moulaycars.png",
    ],
    gradient: "from-green-500 to-teal-600",
    link: "#",
    technologies: [
      { name: "React Native", color: "bg-zinc-700" },
      { name: "TypeScript", color: "bg-blue-700" },
      { name: "Expo", color: "bg-emerald-700" },
      { name: "PostgreSQL", color: "bg-sky-700" },
    ],
  },
  {
    title: "AmstelCar",
    description: "Site de location de voitures à Rabat Maroc",
    images: ["/projects/amstelcar/amstel.png",
    ],
    gradient: "from-red-500 to-pink-600",
    link: "#",
    technologies: [
      { name: "Next.js", color: "bg-zinc-700" },
      { name: "TypeScript", color: "bg-blue-700" },
      { name: "Prisma", color: "bg-emerald-700" },
      { name: "PostgreSQL", color: "bg-sky-700" },
    ],
  },
 
]

function ProjectCard({ project, size = "small" }: { 
  project: typeof projects[0], 
  size?: "small" | "large" 
}) {
  const [isHovered, setIsHovered] = useState(false)
  const hasMultipleImages = project.images.length > 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className=" rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="block group relative overflow-hidden  ">
        <Carousel className="w-full relative ">
          <CarouselContent>
            {project.images.map((image, imageIndex) => (
              <CarouselItem key={imageIndex} className="relative flex items-center justify-center">
                <Image
                  src={image}
                  alt={`${project.title} - Image ${imageIndex + 1}`}
                  width={size === "large" ? 800 : 600}
                  height={size === "large" ? 600 : 400}
                  className={`w-full border flex items-center overflow-hidden  rounded-2xl justify-center ${size === "large" ? "max-h-[400px]" : "max-h-[300px]"} object-contain transition-transform duration-300 group-hover:scale-100`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {hasMultipleImages && isHovered && (
            <>
              <CarouselPrevious className="left-4 bg-purple-900/10 hover:bg-purple-900/20 border-none text-purple-900 hover:text-purple-500 absolute z-30" />
              <CarouselNext className="right-4 bg-purple-900/10 hover:bg-purple-900/20 border-none text-purple-900 hover:text-purple-500 absolute z-30" />
            </>
          )}
        </Carousel>

        <div className={`absolute inset-0 p-${size === "large" ? "8" : "6"} flex flex-col justify-end transition-all duration-300`}>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="relative z-10"
          >
            <h3 className={`text-${size === "large" ? "3xl" : "2xl"} font-bold text-white mb-${size === "large" ? "3" : "2"} transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300`}>
              {project.title}
            </h3>
            <p className={`text-white/90 leading-6 ${size === "large" ? "text-lg" : ""} mb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-75 line-clamp-2`}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-100">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech.name}
                  variant={size === "large" ? "secondary" : "outline"}
                  className={`${tech.color} text-white text-xs px-2 py-1 backdrop-blur-sm ${size === "large" ? "" : "border hover:bg-opacity-100 transition-all duration-300"}`}
                >
                  {tech.name}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>

        <Link href={project.link} target="_blank" className="absolute top-4 right-4 bg-white/10 p-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 z-30">
          <ArrowUpRight size={24} className="text-white" />
        </Link>
      </div>
    </motion.div>
  )
}

export function SexyProjects() {
  return (
    <section id="projects" className="pb-32 sm:pt-28 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-transparent opacity-60" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-8"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Mes 5 derniers projets
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg mb-16"
          >
            Découvrez mes dernières réalisations, mettant en œuvre les technologies les plus récentes
            et les meilleures pratiques de développement. Chaque projet est une opportunité d'innover
            et de repousser les limites de ce qui est possible.
          </motion.p>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                <div className="relative p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                  <stat.icon className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-lg font-medium text-gray-300 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div> */}
        </div>

        <div className="flex flex-col gap-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-0 md:gap-8">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.title} project={project} size="large" />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(2, 5).map((project) => (
              <ProjectCard key={project.title} project={project} size="small" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

