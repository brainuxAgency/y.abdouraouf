"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRightIcon, Sparkles, Terminal, MapPin, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { socialLinks } from "@/src/constants/social-icons";

// ── Typewriter hook ───────────────────────────────────────────────────────────
function useTypewriter(words: string[], speed = 70, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, charIndex + 1));
          if (charIndex + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          } else {
            setCharIndex((c) => c + 1);
          }
        } else {
          setText(current.slice(0, charIndex - 1));
          if (charIndex - 1 === 0) {
            setDeleting(false);
            setWordIndex((w) => (w + 1) % words.length);
            setCharIndex(0);
          } else {
            setCharIndex((c) => c - 1);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return text;
}

// ── Animated counter ──────────────────────────────────────────────────────────
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const techStack = [
  { name: "React", variant: "default" as const },
  { name: "Next.js", variant: "secondary" as const },
  { name: "TypeScript", variant: "secondary" as const },
  { name: "Node.js", variant: "outline" as const },
  { name: "NestJS", variant: "outline" as const },
  { name: "PostgreSQL", variant: "outline" as const },
  { name: "Prisma", variant: "outline" as const },
  { name: "Tailwind CSS", variant: "secondary" as const },
];

const stats = [
  { value: 3, suffix: "+", label: "Années d'expérience" },
  { value: 20, suffix: "+", label: "Projets livrés" },
  { value: 100, suffix: "%", label: "Clients satisfaits" },
];

const roles = [
  "Développeur Full Stack",
  "Expert React & Next.js",
  "Architecte Backend & API",
  "Intégrateur Solutions IA",
];

export function Hero() {
  const role = useTypewriter(roles);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-[#0f1729] to-gray-900 text-white pt-24 pb-12 sm:pt-28 sm:pb-16 lg:py-32">
      {/* Background Subtle Grid & Animated Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "linear",
            }}
          />
        </div>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-600/15 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 -right-32 w-[350px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -left-32 w-[350px] h-[350px] bg-pink-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ──────────── LEFT COLUMN (Info & Actions) ──────────── */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start">
            {/* Status Badge (shadcn style) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Badge
                variant="outline"
                className="inline-flex items-center gap-2 px-3 py-1 text-xs font-normal border-emerald-500/30 bg-emerald-500/10 text-emerald-400 rounded-full mb-4 shadow-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Disponible pour de nouveaux projets</span>
              </Badge>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Abdouraouf{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">
                Youssouf
              </span>
            </motion.h1>

            {/* Typewriter Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="flex items-center gap-2 mt-3 font-mono text-sm sm:text-base text-purple-300"
            >
              <Terminal className="size-4 text-purple-400 shrink-0" />
              <span className="text-gray-400">role:</span>
              <span className="font-semibold text-white min-h-[1.5rem] inline-block">
                {role}
              </span>
              <span className="w-1.5 h-4 bg-purple-400 animate-pulse inline-block" />
            </motion.div>

            {/* Bio text */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl"
            >
              Développeur Full Stack spécialisé en{" "}
              <span className="text-white font-medium">React, Next.js & Node.js</span>.
              Je conçois des applications web et mobiles performantes, avec une architecture
              scalable et l’intégration de{" "}
              <span className="text-purple-300 font-medium">solutions IA</span> pour optimiser
              vos flux de travail.
            </motion.p>

            {/* Actions: Shadcn Buttons & Socials */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-6"
            >
              <Button
                asChild
                size="default"
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium gap-2 shadow-lg shadow-purple-900/30 h-9 px-4 text-sm rounded-md"
              >
                <Link href="#contact">
                  <Sparkles className="size-3.5" />
                  Démarrer un projet
                  <ArrowRightIcon className="size-3.5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="default"
                className="border-white/15 bg-white/5 hover:bg-white/10 hover:text-white font-medium text-gray-200 gap-2 h-9 px-4 text-sm rounded-md"
              >
                <Link href="#projects">Voir les projets</Link>
              </Button>

              <div className="hidden sm:block h-5 w-px bg-white/15 mx-1" />

              {/* Social icons */}
              <div className="flex items-center gap-1">
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    asChild
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-400 hover:text-white hover:bg-white/10 rounded-md"
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={link.name}
                    >
                      <link.icon className="size-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="grid grid-cols-3 gap-6 sm:gap-8 mt-8 pt-6 border-t border-white/10 w-full max-w-lg"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ──────────── RIGHT COLUMN (Developer Profile Card) ──────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <Card className="w-full max-w-sm border-white/10 bg-gray-950/70 backdrop-blur-xl shadow-2xl shadow-purple-950/30 overflow-hidden">
              {/* Window-like Header */}
              <CardHeader className="p-3 bg-gray-900/80 border-b border-white/10 flex flex-row items-center justify-between space-y-0">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400">
                  <Terminal className="size-3 text-purple-400" />
                  <span>developer.tsx</span>
                </div>
                <span className="w-6" />
              </CardHeader>

              <CardContent className="p-5 flex flex-col items-center">
                {/* Framed Avatar */}
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/25 to-pink-500/25 rounded-full blur-md" />
                  <Avatar className="h-28 w-28 sm:h-32 sm:w-32 border-2 border-purple-500/40 shadow-lg">
                    <AvatarImage
                      src="/profil.png"
                      alt="Abdouraouf Youssouf"
                      className="object-cover object-top scale-110"
                    />
                    <AvatarFallback className="bg-purple-900/40 text-purple-300 font-bold text-xl">
                      AY
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute bottom-1 right-1 p-1 bg-gray-900 rounded-full border border-white/20 shadow">
                    <CheckCircle2 className="size-4 text-emerald-400" />
                  </div>
                </div>

                {/* Identity */}
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-white text-base tracking-tight">
                    Abdouraouf Youssouf
                  </h3>
                  <p className="text-xs text-purple-300 font-mono mt-0.5">
                    Full Stack Developer
                  </p>
                  <div className="flex items-center justify-center gap-1 text-[11px] text-gray-400 mt-1.5">
                    <MapPin className="size-3 text-purple-400" />
                    <span>France · Disponible en Remote</span>
                  </div>
                </div>

                {/* Tech Badges (shadcn badges) */}
                <div className="w-full pt-3 border-t border-white/10">
                  <p className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-2 text-center lg:text-left">
                    Technologies clés
                  </p>
                  <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
                    {techStack.map((tech) => (
                      <Badge
                        key={tech.name}
                        variant="outline"
                        className="text-xs px-2.5 py-0.5 font-normal rounded-md border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                      >
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Status Bar */}
                <div className="w-full mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Status: En ligne
                  </span>
                  <span>v2026.1</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
