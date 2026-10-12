import {
  Globe,
  Smartphone,
  Server,
  ShoppingBag,
  Bot,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  category: string;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  glowColor: string;
}

export const mesServices: Service[] = [
  {
    id: "01",
    icon: Globe,
    category: "Frontend & SSR",
    title: "Développement Web Full Stack",
    description:
      "Applications web modernes, ultra-rapides et optimisées SEO propulsées par Next.js 14 et React. Architecture modulaire, SSR/SSG et interfaces fluides.",
    tags: ["Next.js 14", "React", "TypeScript", "Tailwind CSS"],
    gradient: "from-purple-500 to-indigo-500",
    glowColor: "rgba(168, 85, 247, 0.15)",
  },
  {
    id: "02",
    icon: Smartphone,
    category: "Mobile iOS & Android",
    title: "Applications Mobiles Cross-Platform",
    description:
      "Développement d'applications mobiles performantes et élégantes avec React Native et Expo. Expérience utilisateur fluide et synchronisation en temps réel.",
    tags: ["React Native", "Expo", "TypeScript", "PWA"],
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.15)",
  },
  {
    id: "03",
    icon: Server,
    category: "Backend & Microservices",
    title: "Architecture Backend & APIs",
    description:
      "Conception d'APIs RESTful et GraphQL résilientes et sécurisées avec Node.js et NestJS. Modélisation de bases PostgreSQL, ORM Prisma et mise en cache Redis.",
    tags: ["NestJS", "Node.js", "PostgreSQL", "Prisma / Redis"],
    gradient: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.15)",
  },
  {
    id: "04",
    icon: ShoppingBag,
    category: "SaaS & Monétisation",
    title: "Plateformes SaaS & E-Commerce",
    description:
      "Création de plateformes prêtes pour la production : tunnels d'onboarding, abonnements et paiements Stripe, gestion multi-utilisateurs et dashboards analytics.",
    tags: ["Stripe Billing", "Authentification", "Dashboard", "Multi-tenant"],
    gradient: "from-pink-500 to-rose-500",
    glowColor: "rgba(236, 72, 153, 0.15)",
  },
  {
    id: "05",
    icon: Bot,
    category: "Intelligence Artificielle",
    title: "Intégration IA & Automatisation",
    description:
      "Intégration d'agents intelligents, de modèles LLM (OpenAI, Claude) et de workflows n8n pour automatiser vos tâches répétitives et valoriser vos données.",
    tags: ["OpenAI / Claude", "n8n Workflows", "Agents IA", "RAG & LLM"],
    gradient: "from-amber-500 to-orange-500",
    glowColor: "rgba(245, 158, 11, 0.15)",
  },
  {
    id: "06",
    icon: ShieldCheck,
    category: "Cloud & Qualité",
    title: "Performance, DevOps & Maintenance",
    description:
      "Optimisation des Core Web Vitals (scores 95+), pipelines CI/CD automatisés, sécurisation des flux et maintenance proactive pour assurer une haute disponibilité.",
    tags: ["CI/CD Git", "Docker & Vercel", "Web Vitals 95+", "Sécurité"],
    gradient: "from-violet-500 to-purple-500",
    glowColor: "rgba(139, 92, 246, 0.15)",
  },
];
