export type ProjectCategory = "saas" | "crm" | "showcase" | "platform" | "mobile";

export type ProjectStatus = "En production" | "En développement" | "En ligne";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  subtitle: string;
  headline?: string;
  description: string;
  images: string[];
  liveUrl: string;
  status: ProjectStatus;
  stack: string[];
  contribution: string[];
  highlights: string[];
  featured?: boolean;
  attributionNote?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "ripostera",
    title: "Ripostera",
    category: "saas",
    categoryLabel: "SaaS IA",
    subtitle: "SaaS IA & Distribution",
    headline:
      "Plateforme SaaS tout-en-un de gestion, curation et multidiffusion intelligente de contenus sur les réseaux sociaux.",
    description:
      "Plateforme SaaS tout-en-un de gestion, curation et multidiffusion intelligente de contenus sur les réseaux sociaux. Automatise la distribution multicanale pour créateurs et entreprises.",
    images: ["/about/ripostera-app.png","/about/ripostera-automatisation.png","/about/ripostera-dashboard.png"],
    liveUrl: "https://ripostera.vercel.app/",
    status: "En développement",
    stack: ["Next.js 15", "TypeScript", "Prisma ORM", "PostgreSQL", "Tailwind CSS"],
    contribution: [
      "Architecture App Router & Server Components haute performance",
      "Modélisation de données PostgreSQL via Prisma (multi-comptes, files de publication)",
      "Workflows automatisés et synchronisation d'assets",
    ],
    highlights: ["SaaS propriétaire R&D", "Workflows multicanaux", "Architecture robuste"],
    featured: true,
  },
  {
    id: "crm-hmrenov26",
    title: "CRM-HMRENOV26",
    category: "crm",
    categoryLabel: "ERP Métier",
    subtitle: "ERP & Gestion Chantier",
    headline:
      "Système de gestion complet pour entreprise du bâtiment : devis en 1 clic, planning de chantier et facturation centralisée.",
    description:
      "Système de gestion complet pour entreprise du bâtiment : remplacement d'Excel par une solution sur mesure avec devis instantané, planning de chantier et facturation centralisée.",
    images: [
      "/projects/hmrenov26/1.png",
      "/projects/hmrenov26/2.png",
      "/projects/hmrenov26/3.png",
      "/projects/hmrenov26/4.png",
      "/projects/hmrenov26/5.png",
      "/projects/hmrenov26/6.png",
    ],
    liveUrl: "https://crm-hmrenov26.vercel.app/",
    status: "En production",
    stack: ["Next.js", "PostgreSQL", "Zustand", "Prisma", "Recharts", "Tailwind CSS"],
    contribution: [
      "Gestion d'état réactif complexe avec Zustand pour les devis multi-lignes",
      "Persistance relationnelle stricte PostgreSQL / Prisma",
      "Tableau de bord financier avec analytics en temps réel",
    ],
    highlights: ["Devis en 1 clic", "Planning d'intervention", "Pilotage financier"],
    featured: true,
  },
  {
    id: "ayflixtv",
    title: "AyflixTv",
    category: "platform",
    categoryLabel: "E-Commerce",
    subtitle: "Streaming & E-Commerce",
    headline:
      "Plateforme de souscription et catalogue d'abonnements streaming haute disponibilité avec checkout automatisé.",
    description:
      "Plateforme de souscription et catalogue de forfaits streaming haute disponibilité : catalogue dynamique, checkout automatisé et espace client sécurisé.",
    images: [
      "/projects/ayflixtv/hero.png",
      "/projects/ayflixtv/pricing.png",
      "/projects/ayflixtv/dash.png",
    ],
    liveUrl: "https://ayflixtv.vercel.app",
    status: "En production",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    contribution: [
      "Catalogue dynamique et gestion des abonnements",
      "Espace client authentifié et sécurisé",
      "Intégration du tunnel de commande fluide",
    ],
    highlights: ["Catalogue dynamique", "Espace client", "Paiement fluide"],
    featured: true,
  },
  {
    id: "massurer",
    title: "Massurer",
    category: "showcase",
    categoryLabel: "Courtage Web",
    subtitle: "Courtage & Simulateur",
    headline:
      "Portail d'assurance et simulateur de devis multi-branches avec capture de leads qualifiés en temps réel.",
    description:
      "Portail d'assurance et simulateur de devis multi-branches interactif avec capture et qualification de leads entrants en temps réel pour cabinet de courtage indépendant.",
    images: ["/projects/massurer.png"],
    liveUrl: "https://massurer.vercel.app/",
    status: "En ligne",
    stack: ["Next.js", "TypeScript", "Zod", "Tailwind CSS"],
    contribution: [
      "Tunnel d'acquisition multi-étapes avec validation Zod",
      "Routage instantané des demandes de cotation",
      "Performance mobile et SEO optimisé",
    ],
    highlights: ["Simulateur multi-branches", "Validation stricte", "Haute conversion"],
    featured: true,
  },
  {
    id: "knt-transport",
    title: "KNT Transport",
    category: "showcase",
    categoryLabel: "Logistique",
    subtitle: "Logistique & Fret Mondial",
    description:
      "Portail digital pour commissionnaire de transport multimodal (terrestre, maritime, aérien) opérant dans plus de 20 pays, avec système de devis express.",
    images: ["/projects/knt-transport.png"],
    liveUrl: "https://knt-transport.vercel.app/",
    status: "En production",
    stack: ["Next.js", "TypeScript", "Responsive UX", "Micro-animations", "SEO"],
    contribution: [
      "Interface internationale claire et responsive",
      "Tunnel de demande de cotation express",
      "Optimisation des temps de chargement et accessibilité",
    ],
    highlights: ["Réseau multimodal", "Cotation en ligne", "Design épuré"],
  },
  {
    id: "cabinet-tantane",
    title: "Cabinet Tantane",
    category: "showcase",
    categoryLabel: "Finance & Conseil",
    subtitle: "Gestion de Patrimoine",
    description:
      "Vitrine haut de gamme pour cabinet de conseil en gestion de patrimoine, assurance santé, prévoyance et épargne retraite.",
    images: ["/projects/cabinet-tantane.jpg"],
    liveUrl: "https://cabinet-tantane.vercel.app/",
    status: "En production",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    contribution: [
      "Direction artistique sobre et statutaire",
      "Tunnel de prise de rendez-vous qualifié",
      "Intégration d'animations calmes et performantes",
    ],
    highlights: ["Design premium", "Prise de contact fluide", "Crédibilité renforcée"],
  },
  {
    id: "moulaycars",
    title: "MoulayCars",
    category: "mobile",
    categoryLabel: "App Mobile",
    subtitle: "Location & Flotte Mobile",
    description:
      "Application mobile de location de véhicules : catalogue des voitures en temps réel, calendrier interactif de disponibilité et réservation simplifiée avec notifications instantanées.",
    images: ["/projects/moulaycars/moulaycars.png"],
    liveUrl: "#",
    status: "En production",
    stack: ["React Native", "Expo", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    contribution: [
      "Développement de l'application cross-platform iOS & Android sous React Native / Expo",
      "Système de réservation avec vérification de disponibilité en temps réel",
      "Expérience utilisateur fluide, responsive et support hors-ligne",
    ],
    highlights: ["Application iOS & Android", "Réservation en direct", "Temps réel"],
  },
  {
    id: "amstelcar",
    title: "AmstelCar",
    category: "showcase",
    categoryLabel: "Location Véhicules",
    subtitle: "Flotte & Réservation",
    description:
      "Plateforme web moderne de réservation et présentation de flotte de véhicules à Rabat (Maroc) : mise en avant des véhicules, tarification dynamique et prise de contact fluide.",
    images: ["/projects/amstelcar/amstel.png"],
    liveUrl: "https://amstelcar.ma",
    status: "En ligne",
    stack: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    contribution: [
      "Développement de la vitrine interactive et catalogue de la flotte automobile",
      "Formulaire de réservation rapide optimisé pour la conversion mobile",
      "Architecture performante Next.js avec temps de chargement ultra-rapides",
    ],
    highlights: ["Catalogue dynamique", "Réservation rapide", "Design épuré"],
  },
];
