"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Smartphone, Globe, Workflow, Search, ExternalLink, Eye, Heart } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { MyHeader } from "../home/MyHeader"
import { Badge } from "@/components/ui/badge"
import { TbMessage2Filled } from "react-icons/tb";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useAuthSession } from "@/hooks/useSessionStatut"
import { AuthModal } from "../auth/AuthModal"
import { CtaSection } from "../common/CtaSection"

type Resource = {
    id: string
    title: string
    description: string
    type: "mobile" | "web" | "automation"
    duration?: string
    link: string
    image: string
    stats: {
        views: number
        comments: number
    }
    price: number | "FREE"
    technologies?: string[]
}

const resources: Resource[] = [
    {
        id: "1",
        title: "Comment créer une application React Native avec IA",
        description: "Tutoriel complet sur la création d'une application mobile moderne avec React Native et intégration d'IA",
        type: "mobile",
        duration: "28 min",
        link: "https://youtube.com/...",
        image: "/projects/hmrenov26/1.png",
        stats: {
            views: 1200,
            comments: 85
        },
        price: "FREE",
        technologies: ["React Native", "TypeScript", "TensorFlow"]
    },
    {
        id: "2",
        title: "Dashboard Analytics avec Next.js 14",
        description: "Créez un dashboard professionnel avec les dernières fonctionnalités de Next.js et une intégration IA",
        type: "web",
        link: "/resources/dashboard-nextjs",
        image: "/projects/amstel.png",
        stats: {
            views: 850,
            comments: 120
        },
        price: 29.99,
        technologies: ["Next.js", "TailwindCSS", "Prisma", "PostgreSQL", "Stripe"]
    },
    {
        id: "3",
        title: "Dashboard Analytics avec Next.js 14",
        description: "Créez un dashboard professionnel avec les dernières fonctionnalités de Next.js et une intégration IA",
        type: "web",
        link: "/resources/dashboard-nextjs",
        image: "/projects/amstel.png",
        stats: {
            views: 850,
            comments: 120
        },
        price: 29.99,
        technologies: ["Next.js", "TailwindCSS", "Prisma", "PostgreSQL", "Stripe"]
    },
    {
        id: "4",
        title: "Dashboard Analytics avec Next.js 14",
        description: "Créez un dashboard professionnel avec les dernières fonctionnalités de Next.js et une intégration IA",
        type: "web",
        link: "/resources/dashboard-nextjs",
        image: "/projects/amstel.png",
        stats: {
            views: 850,
            comments: 120
        },
        price: 29.99,
        technologies: ["Next.js", "TailwindCSS", "Prisma", "PostgreSQL", "Stripe"]
    },
    {
        id: "5",
        title: "Dashboard Analytics avec Next.js 14",
        description: "Créez un dashboard professionnel avec les dernières fonctionnalités de Next.js et une intégration IA",
        type: "web",
        link: "/resources/dashboard-nextjs",
        image: "/projects/amstel.png",
        stats: {
            views: 850,
            comments: 120
        },
        price: 29.99,
        technologies: ["Next.js", "TailwindCSS", "Prisma", "PostgreSQL", "Stripe"]
    },
    // Ajoutez plus de ressources ici
]

const filters = [
    { id: "all", label: "Tout", icon: Search },
    { id: "mobile", label: "Mobile", icon: Smartphone },
    { id: "web", label: "Web", icon: Globe },
    { id: "automation", label: "Automation", icon: Workflow },
]

export default function ResourcesPage() {
    const [activeFilter, setActiveFilter] = useState("all")
    const { user } = useAuthSession()
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
    const [redirectUrl, setRedirectUrl] = useState<string>("")

    const filteredResources = resources.filter((resource) => activeFilter === "all" || resource.type === activeFilter)

    const handleResourceClick = (e: React.MouseEvent<HTMLAnchorElement>, resourceId: string) => {
        if (!user) {
            e.preventDefault()
            setRedirectUrl(`/ressources/${resourceId}`)
            setIsAuthModalOpen(true)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#0f1729] to-gray-900">
            {/* Header */}
            <div className="pt-24 pb-12 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
                <div className=" w-full border-b-2 border-purple-500 mx-auto max-w-6xl relative z-10">
                    <MyHeader />
                </div>
            </div>
            {/* Filtres */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4 mx-2 mb-12"
            >
                <div className="flex overflow-x-auto whitespace-nowrap pb-2 hide-scrollbar">
                    {filters.map((filter) => (
                        <Button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all flex-shrink-0 mx-2 first:ml-0 last:mr-0 ${activeFilter === filter.id
                                    ? "bg-purple-600 text-white shadow-md shadow-purple-500/30"
                                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:shadow-md hover:shadow-purple-500/20"
                                }`}
                        >
                            <filter.icon className="w-5 h-5" />
                            {filter.label}
                        </Button>
                    ))}
                </div>
            </motion.div>

            {/* Grid de ressources */}
            <div className="lg:container mx-auto max-w-6xl px-4 pb-24">
                <AnimatePresence>
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-6">
                        {filteredResources.map((resource) => (
                            <motion.div
                                key={resource.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                                <div className="relative py-3 bg-gray-900 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 group-hover:shadow-purple-500/30 group-hover:-translate-y-1">
                                    <Link 
                                        href={`/ressources/${resource.id}`} 
                                        className="block"
                                        onClick={(e) => handleResourceClick(e, resource.id)}
                                    >
                                        {/* Thumbnail */}
                                        <div className="relative aspect-video">
                                            <Image
                                                width={400}
                                                height={800}
                                                src={resource.image || "/placeholder.svg"}
                                                alt={resource.title}
                                                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="px-4 py-4">

                                            <p className="text-gray-400 text-sm mb-4 line-clamp-3">{resource.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {(() => {
                                                    const colors = ["bg-blue-500/10 text-blue-400", "bg-green-500/10 text-green-400", "bg-purple-500/10 text-purple-400", "bg-yellow-500/10 text-yellow-400", "bg-red-500/10 text-red-400", "bg-pink-500/10 text-pink-400"];

                                                    const maxVisible = 2;
                                                    const remaining = resource.technologies ? resource.technologies.length - maxVisible : 0;

                                                    return (
                                                        <>
                                                            {resource.technologies?.slice(0, maxVisible).map((technology, index) => (
                                                                <Badge
                                                                    key={technology}
                                                                    className={`text-[11px] whitespace-nowrap ${colors[index % colors.length]}`}
                                                                >
                                                                    {technology}
                                                                </Badge>
                                                            ))}
                                                            {remaining > 0 && (
                                                                <TooltipProvider>
                                                                    <Tooltip>
                                                                        <TooltipTrigger asChild>
                                                                            <Badge
                                                                                className="text-[11px] bg-gray-800/50 text-gray-400 cursor-pointer hover:bg-gray-700/50 transition-colors"
                                                                            >
                                                                                +{remaining}
                                                                            </Badge>
                                                                        </TooltipTrigger>
                                                                        <TooltipContent
                                                                            className="bg-gray-800 border-gray-700 text-gray-200 text-xs p-2"
                                                                        >
                                                                            {resource.technologies?.slice(maxVisible).map((tech, index) => (
                                                                                <span key={tech}>
                                                                                    {tech}
                                                                                    {index < remaining - 1 ? ", " : ""}
                                                                                </span>
                                                                            ))}
                                                                        </TooltipContent>
                                                                    </Tooltip>
                                                                </TooltipProvider>
                                                            )}
                                                        </>
                                                    );
                                                })()}
                                            </div>
                                        </div>

                                        <div className="absolute top-4 right-4 bg-white/10 p-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <ExternalLink className="w-5 h-5 text-white" />
                                        </div>
                                    </Link>

                                    {/* Footer avec stats et actions */}
                                    <div className="px-4 ">
                                        <div className="flex items-center justify-between pt-4 border-t gap-2 border-gray-800">
                                            <div className="flex items-center gap-3 text-gray-400">
                                                <button className="flex border border-gray-700 rounded-lg p-1 items-center gap-1 hover:text-red-400 transition-colors">
                                                    <Heart className="w-4 h-4" />
                                                    <span className="text-sm">24</span>
                                                </button>
                                                <div className="flex flex-col items-center">
                                                    <Eye className="w-4 h-4" />
                                                    <span className="text-sm">{resource.stats.views}</span>
                                                </div>
                                                <div className="flex flex-col items-center ">
                                                    <TbMessage2Filled className="w-4 h-4" />
                                                    <span className="text-sm">{resource.stats.comments}</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center ">
                                                    {resource.type === "mobile" && <Smartphone className="w-5 h-5 text-blue-500" />}
                                                    {resource.type === "web" && <Globe className="w-5 h-5 text-green-500" />}
                                                    {resource.type === "automation" && <Workflow className="w-5 h-5 text-yellow-500" />}
                                                </div>
                                                <Badge
                                                    variant={resource.price === "FREE" ? "default" : "secondary"}
                                                    className={`
                                                        ${resource.price === "FREE"
                                                            ? "bg-green-500/10 text-green-500 hover:bg-green-500/20"
                                                            : "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20"}
                                                    `}
                                                >
                                                    {resource.price === "FREE" ? "Gratuit" : `${resource.price}€`}
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Section CTA vers le contact */}
            <CtaSection
                titleLine1="Un projet web ou SaaS ?"
                titleLine2italic="Construisons-le ensemble."
                descLine1="De la conception au déploiement en production,"
                descLine2="bâtissons une application pensée pour durer."
                buttonText="Réserver un appel"
                buttonHref="/#contact"
            />

            <AuthModal 
                isOpen={isAuthModalOpen} 
                onClose={() => {
                    setIsAuthModalOpen(false)
                    setRedirectUrl("")
                }}
                redirectUrl={redirectUrl}
            />
        </div>
    )
}

