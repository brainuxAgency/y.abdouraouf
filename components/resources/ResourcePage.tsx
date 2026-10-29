"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Smartphone, Globe, Workflow, Search, ExternalLink, Eye, Heart, ArrowUpRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MyHeader } from "../home/MyHeader"
import { TbMessage2Filled } from "react-icons/tb"
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
    // Ajoutez plus de ressources ici
]

const filters = [
    { id: "all", label: "Tout", icon: Search },
    { id: "mobile", label: "Mobile", icon: Smartphone },
    { id: "web", label: "Web", icon: Globe },
    { id: "automation", label: "Automation", icon: Workflow },
]

const typeLabel: Record<Resource["type"], string> = {
    mobile: "Mobile",
    web: "Web",
    automation: "Automation",
}

const typeIcon = {
    mobile: Smartphone,
    web: Globe,
    automation: Workflow,
}

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
        <div className="min-h-screen bg-[#0a0c10] text-white">
            {/* En-tête : profil créateur */}
            <div className="relative px-4 pt-28 sm:pt-32">
                <div className="mx-auto max-w-6xl">
                    <MyHeader />
                </div>
            </div>

            {/* Titre de section */}
            <div className="mx-auto max-w-6xl px-4 pt-12">
                <span className="mb-4 block font-mono text-[11px] uppercase tracking-[0.2em] text-orange-400">
                    Ressources
                </span>
                <h1 className="font-montserrat text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
                    Formations, tutoriels{" "}
                    <span className="font-serif font-normal italic text-zinc-500">& templates.</span>
                </h1>
            </div>

            {/* Filtres */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mx-auto mt-10 max-w-6xl px-4"
            >
                <div className="inline-flex max-w-full overflow-x-auto rounded-full border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-xl hide-scrollbar">
                    {filters.map((filter) => {
                        const isActive = activeFilter === filter.id
                        const count =
                            filter.id === "all"
                                ? resources.length
                                : resources.filter((r) => r.type === filter.id).length
                        return (
                            <button
                                key={filter.id}
                                type="button"
                                onClick={() => setActiveFilter(filter.id)}
                                aria-pressed={isActive}
                                className={`flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                                    isActive
                                        ? "bg-orange-800 text-white shadow-lg shadow-orange-950/40"
                                        : "text-zinc-400 hover:text-white"
                                }`}
                            >
                                <filter.icon className="h-4 w-4" aria-hidden />
                                {filter.label}
                                <span
                                    className={`rounded-full px-1.5 font-mono text-[10px] ${
                                        isActive ? "bg-white/20 text-white" : "bg-white/5 text-zinc-500"
                                    }`}
                                >
                                    {count}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </motion.div>

            {/* Grille de ressources */}
            <div className="mx-auto max-w-6xl px-4 pb-24 pt-10">
                <AnimatePresence mode="popLayout">
                    {filteredResources.length > 0 ? (
                        <motion.div
                            layout
                            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
                        >
                            {filteredResources.map((resource) => {
                                const TypeIcon = typeIcon[resource.type]
                                const isFree = resource.price === "FREE"
                                const visibleTech = resource.technologies?.slice(0, 2) ?? []
                                const remaining = (resource.technologies?.length ?? 0) - visibleTech.length

                                return (
                                    <motion.article
                                        key={resource.id}
                                        layout
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.96 }}
                                        transition={{ duration: 0.3 }}
                                        className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0f1013] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/60"
                                    >
                                        <Link
                                            href={`/ressources/${resource.id}`}
                                            onClick={(e) => handleResourceClick(e, resource.id)}
                                            className="flex flex-1 flex-col"
                                        >
                                            {/* Vignette */}
                                            <div className="relative aspect-video overflow-hidden bg-[#141416]">
                                                <Image
                                                    fill
                                                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                                    src={resource.image || "/placeholder.svg"}
                                                    alt={resource.title}
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1013] via-transparent to-transparent" />

                                                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#0a0c10]/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-300 backdrop-blur">
                                                    <TypeIcon className="h-3 w-3 text-orange-400" aria-hidden />
                                                    {typeLabel[resource.type]}
                                                </span>

                                                <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#0a0c10]/80 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                                                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                                                </span>
                                            </div>

                                            {/* Contenu */}
                                            <div className="flex flex-1 flex-col gap-3 p-5">
                                                <h3 className="font-montserrat text-base font-semibold leading-snug tracking-tight text-white line-clamp-2">
                                                    {resource.title}
                                                </h3>
                                                <p className="text-sm leading-relaxed text-zinc-400 line-clamp-3">{resource.description}</p>

                                                {(resource.technologies?.length ?? 0) > 0 && (
                                                    <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                                                        {visibleTech.map((technology) => (
                                                            <span
                                                                key={technology}
                                                                className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[11px] text-zinc-300"
                                                            >
                                                                {technology}
                                                            </span>
                                                        ))}
                                                        {remaining > 0 && (
                                                            <TooltipProvider>
                                                                <Tooltip>
                                                                    <TooltipTrigger asChild>
                                                                        <span className="cursor-default rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[11px] text-zinc-500 transition-colors hover:text-zinc-300">
                                                                            +{remaining}
                                                                        </span>
                                                                    </TooltipTrigger>
                                                                    <TooltipContent className="border-white/10 bg-[#141416] text-xs text-zinc-200">
                                                                        {resource.technologies?.slice(visibleTech.length).join(", ")}
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </TooltipProvider>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </Link>

                                        {/* Pied de carte : statistiques et prix */}
                                        <div className="flex items-center justify-between gap-3 border-t border-white/10 px-5 py-4">
                                            <div className="flex items-center gap-4 font-mono text-xs text-zinc-500">
                                                <span className="flex items-center gap-1.5">
                                                    <Eye className="h-3.5 w-3.5" aria-hidden />
                                                    {resource.stats.views}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <TbMessage2Filled className="h-3.5 w-3.5" aria-hidden />
                                                    {resource.stats.comments}
                                                </span>
                                                <span className="flex items-center gap-1.5 transition-colors hover:text-rose-400">
                                                    <Heart className="h-3.5 w-3.5" aria-hidden />
                                                    24
                                                </span>
                                            </div>

                                            <span
                                                className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 font-mono text-[11px] font-semibold ${
                                                    isFree
                                                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                                                        : "border-orange-500/30 bg-orange-500/10 text-orange-300"
                                                }`}
                                            >
                                                {isFree ? "Gratuit" : `${resource.price} €`}
                                                {!isFree && <ArrowUpRight className="h-3 w-3" aria-hidden />}
                                            </span>
                                        </div>
                                    </motion.article>
                                )
                            })}
                        </motion.div>
                    ) : (
                        <motion.p
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="py-24 text-center font-mono text-sm text-zinc-500"
                        >
                            Aucune ressource dans cette catégorie pour le moment.
                        </motion.p>
                    )}
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
