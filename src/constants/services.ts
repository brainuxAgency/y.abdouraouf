import {  PenTool, Smartphone, Globe, ShoppingCart, Wrench, Code2 } from "lucide-react"
import { LucideIcon } from "lucide-react"

export interface Service {
  icon: LucideIcon
  title: string
  description: string
  color: string
  link: string
}

export const mesServices = [
  {
    icon: Globe,
    title: "Développement Web",
    description: "Création de sites web et applications web sur mesure, responsive et performants. Utilisation des dernières technologies pour des solutions modernes et évolutives.",
    color: "from-blue-600 to-cyan-600",
    link: "/services/developpement-web"
  },
  {
    icon: Smartphone,
    title: "Développement Mobile",
    description: "Développement d'applications mobiles natives et cross-platform pour iOS et Android. Des solutions mobiles intuitives et performantes pour votre entreprise.",
    color: "from-violet-600 to-indigo-600",
    link: "/services/developpement-mobile"
  },
  {
    icon: ShoppingCart,
    title: "Solutions Web",
    description: "Création de sites vitrines, plateformes e-commerce, applications SaaS et portails web. Des solutions adaptées à vos besoins spécifiques avec une expérience utilisateur optimale.",
    color: "from-purple-600 to-pink-600",
    link: "/services/solutions-web"
  },
  {
    icon: PenTool,
    title: "Design UI/UX",
    description: "Conception d'interfaces utilisateur modernes et création d'expériences utilisateur intuitives. Design responsive et attractif pour tous vos projets digitaux.",
    color: "from-orange-600 to-yellow-600",
    link: "/services/design"
  },
  {
    icon: Code2,
    title: "Intégration API",
    description: "Développement et intégration d'APIs robustes pour connecter vos systèmes et applications. Solutions d'intégration sur mesure pour optimiser vos processus.",
    color: "from-green-600 to-emerald-600",
    link: "/services/integration-api"
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Services de maintenance continue, mises à jour de sécurité et support technique pour garantir la performance et la stabilité de vos solutions.",
    color: "from-red-600 to-orange-600",
    link: "/services/maintenance"
  }
]
