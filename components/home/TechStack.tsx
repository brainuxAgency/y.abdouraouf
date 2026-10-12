"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

interface Tech {
  name: string;
  category: "frontend" | "backend" | "ai" | "devops";
  role: string;
  icon: string;
  color: string;
  badge?: string;
}

const row1Techs: Tech[] = [
  {
    name: "Next.js 14",
    category: "frontend",
    role: "Full Stack & SSR",
    icon: "/next.svg",
    color: "#ffffff",
    badge: "Core",
  },
  {
    name: "React",
    category: "frontend",
    role: "UI & State",
    icon: "/react.svg",
    color: "#61DAFB",
    badge: "Expert",
  },
  {
    name: "TypeScript",
    category: "frontend",
    role: "Strict Type Safety",
    icon: "/typescript.svg",
    color: "#3178C6",
    badge: "100%",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    role: "Modern Styling",
    icon: "/tailwindcss.svg",
    color: "#38BDF8",
  },
  {
    name: "shadcn/ui",
    category: "frontend",
    role: "Design System",
    icon: "/shadcn.svg",
    color: "#ffffff",
  },
  {
    name: "NestJS",
    category: "backend",
    role: "Architecture API",
    icon: "/nestjs.png",
    color: "#E0234E",
    badge: "Backend",
  },
  {
    name: "PostgreSQL",
    category: "backend",
    role: "BDD Relationnelle",
    icon: "/postgresql.svg",
    color: "#336791",
  },
  {
    name: "Prisma ORM",
    category: "backend",
    role: "Type-Safe Client",
    icon: "/prisma.svg",
    color: "#5A67D8",
  },
];

const row2Techs: Tech[] = [
  {
    name: "OpenAI API",
    category: "ai",
    role: "GPT-4o & LLMs",
    icon: "/openai.svg",
    color: "#10A37F",
    badge: "IA",
  },
  {
    name: "Claude 3.5",
    category: "ai",
    role: "Raisonnement Avancé",
    icon: "/claude.svg",
    color: "#D97757",
    badge: "Anthropic",
  },
  {
    name: "n8n",
    category: "ai",
    role: "Workflows & Automation",
    icon: "/n8n.svg",
    color: "#EA4B71",
    badge: "Pipelines",
  },
  {
    name: "Cursor AI",
    category: "ai",
    role: "AI Dev Assistant",
    icon: "/cursor.svg",
    color: "#A855F7",
  },
  {
    name: "Redis",
    category: "backend",
    role: "In-Memory Caching",
    icon: "/redis.svg",
    color: "#DC382D",
  },
  {
    name: "Vercel",
    category: "devops",
    role: "Edge Platform",
    icon: "/vercel.svg",
    color: "#ffffff",
    badge: "Cloud",
  },
  {
    name: "AWS",
    category: "devops",
    role: "Cloud Storage S3",
    icon: "/aws.svg",
    color: "#FF9900",
  },
  {
    name: "DeepSeek",
    category: "ai",
    role: "Open Weights LLM",
    icon: "/deepseek.svg",
    color: "#3B82F6",
  },
];

// Interactive Mouse Spotlight Card Component
function InteractiveCard({
  tech,
  index,
}: {
  tech: Tech;
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6, scale: 1.02 }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl border border-white/10 bg-gray-950/70 p-5 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-950/30 overflow-hidden flex flex-col justify-between"
    >
      {/* Dynamic Cursor Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(168, 85, 247, 0.15), transparent 80%)`,
        }}
      />

      {/* Top Edge Beam */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="relative w-12 h-12 rounded-xl bg-white/[0.08] border border-white/15 flex items-center justify-center p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:border-purple-400/60 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] shadow-inner">
            <Image
              src={tech.icon}
              alt={tech.name}
              width={32}
              height={32}
              className="object-contain max-h-7 max-w-7 drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {tech.badge && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300">
              {tech.badge}
            </span>
          )}
        </div>

        <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors tracking-tight">
          {tech.name}
        </h3>
        <p className="text-xs text-gray-400 font-mono mt-0.5 truncate">
          {tech.role}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
        <span className="capitalize">{tech.category}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 group-hover:animate-ping" />
      </div>
    </motion.div>
  );
}

// Live Terminal Stream Animation Component
function LiveTerminalStream() {
  const [logIndex, setLogIndex] = useState(0);

  const logs = [
    {
      time: "09:42:01",
      tag: "NEXT.JS 14",
      color: "text-purple-400",
      msg: "Rendu hybride SSR optimisé (Edge Cache: HIT, 14ms)",
    },
    {
      time: "09:42:02",
      tag: "NESTJS / API",
      color: "text-blue-400",
      msg: "Route /api/v1/auth validée avec guards JWT (200 OK)",
    },
    {
      time: "09:42:03",
      tag: "AI WORKFLOW",
      color: "text-emerald-400",
      msg: "Agent n8n déclenché → Pipeline Claude 3.5 terminé (220ms)",
    },
    {
      time: "09:42:04",
      tag: "PRISMA + PG",
      color: "text-yellow-400",
      msg: "Transaction relationnelle persistée avec indexation B-Tree",
    },
    {
      time: "09:42:05",
      tag: "LIGHTHOUSE",
      color: "text-pink-400",
      msg: "Score Performance 100/100 · First Contentful Paint: 0.6s",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % logs.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [logs.length]);

  const currentLog = logs[logIndex];

  return (
    <div className="mt-14 rounded-2xl border border-white/10 bg-gray-950/80 p-4 sm:p-5 font-mono text-xs backdrop-blur-xl shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-gray-500 text-[11px]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="ml-2 text-gray-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            runtime-monitor.log
          </span>
        </div>
        <span className="text-emerald-400 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Flux temps réel actif
        </span>
      </div>

      <motion.div
        key={logIndex}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-300 text-[12px]"
      >
        <span className="text-gray-500 font-mono">[{currentLog.time}]</span>
        <span className={`font-semibold ${currentLog.color} px-1.5 py-0.5 rounded bg-white/5 border border-white/10`}>
          {currentLog.tag}
        </span>
        <span className="text-gray-200">{currentLog.msg}</span>
      </motion.div>
    </div>
  );
}

export function TechStack() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const combinedTechs = [...row1Techs, ...row2Techs];

  const filteredTechs =
    selectedFilter === "all"
      ? combinedTechs
      : combinedTechs.filter((t) => t.category === selectedFilter);

  // Duplicated arrays for seamless continuous infinite marquee loop
  const marqueeRow1 = [...row1Techs, ...row1Techs, ...row1Techs];
  const marqueeRow2 = [...row2Techs, ...row2Techs, ...row2Techs];

  return (
    <section
      id="tech-stack"
      className="relative py-28 sm:py-36 bg-gradient-to-b from-gray-900 via-[#0f1729] to-gray-900 overflow-hidden text-white"
    >
      {/* ── Dynamic Ambient Motion Aura ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />

        {/* Pulsing rotating aura */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[750px] rounded-full bg-gradient-to-tr from-purple-600/15 via-indigo-600/10 to-pink-600/10 blur-[140px]"
        />
      </div>

      <div className="relative z-10 container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <Badge
            variant="outline"
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono border-purple-500/30 bg-purple-500/10 text-purple-300 rounded-full mb-4 shadow-sm"
          >
            <Zap className="w-3.5 h-3.5 text-purple-400" />
            <span>Motion Design & Tech Engine</span>
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Un moteur technologique{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">
              en mouvement continu
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl mx-auto">
            Chaque outil est sélectionné pour sa robustesse, sa cadence de livraison et sa
            synergie dans des environnements de production exigeants.
          </p>
        </motion.div>

        {/* ── 1. DUAL CONTINUOUS MOTION MARQUEES ── */}
        <div className="space-y-4 mb-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          {/* Row 1: Leftward scroll */}
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            whileHover={{ transition: { duration: 80 } }}
          >
            {marqueeRow1.map((tech, idx) => (
              <div
                key={`r1-${tech.name}-${idx}`}
                className="flex items-center gap-3 px-4 py-2.5 rounded-full border border-white/10 bg-gray-950/70 backdrop-blur-md hover:border-purple-500/50 hover:bg-gray-900/80 transition-all cursor-default group shrink-0"
              >
                <div className="w-7 h-7 rounded-lg bg-white/[0.08] border border-white/15 flex items-center justify-center p-1 relative shrink-0 group-hover:border-purple-400/50 group-hover:bg-purple-500/20 transition-all">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={20}
                    height={20}
                    className="object-contain max-h-5 max-w-5 group-hover:scale-110 transition-transform drop-shadow-sm"
                  />
                </div>
                <span className="text-xs font-semibold text-white group-hover:text-purple-300 transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] text-gray-500 font-mono">
                  {tech.role}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/70" />
              </div>
            ))}
          </motion.div>

          {/* Row 2: Rightward scroll */}
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ["-33.333%", "0%"] }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "linear",
            }}
            whileHover={{ transition: { duration: 80 } }}
          >
            {marqueeRow2.map((tech, idx) => (
              <div
                key={`r2-${tech.name}-${idx}`}
                className="flex items-center gap-3 px-4 py-2.5 rounded-full border border-white/10 bg-gray-950/70 backdrop-blur-md hover:border-purple-500/50 hover:bg-gray-900/80 transition-all cursor-default group shrink-0"
              >
                <div className="w-7 h-7 rounded-lg bg-white/[0.08] border border-white/15 flex items-center justify-center p-1 relative shrink-0 group-hover:border-purple-400/50 group-hover:bg-purple-500/20 transition-all">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={20}
                    height={20}
                    className="object-contain max-h-5 max-w-5 group-hover:scale-110 transition-transform drop-shadow-sm"
                  />
                </div>
                <span className="text-xs font-semibold text-white group-hover:text-purple-300 transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] text-gray-500 font-mono">
                  {tech.role}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400/70" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── 2. INTERACTIVE SPOTLIGHT GRID & FILTERING ── */}
        <div className="mt-12">
          {/* Pill Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Explorateur Interactif
            </h3>

            <div className="flex flex-wrap gap-1.5 p-1 rounded-full border border-white/10 bg-gray-950/60 backdrop-blur-md">
              {[
                { id: "all", label: "Tous" },
                { id: "frontend", label: "Frontend" },
                { id: "backend", label: "Backend" },
                { id: "ai", label: "IA & Workflows" },
                { id: "devops", label: "Cloud" },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFilter(f.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    selectedFilter === f.id
                      ? "bg-purple-600 text-white shadow-md shadow-purple-900/30"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid with Mouse Light Follower */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {filteredTechs.map((tech, idx) => (
              <InteractiveCard
                key={`${tech.name}-${idx}`}
                tech={tech}
                index={idx}
              />
            ))}
          </motion.div>
        </div>

        {/* ── 3. LIVE TERMINAL LOGS STREAM ── */}
        <LiveTerminalStream />
      </div>
    </section>
  );
}
