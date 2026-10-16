"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Send,
  MessageSquare,
  Phone,
  Mail,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Loader2,
  Copy,
  Check,
  Video,
  ShieldCheck,
  User,
  Zap,
  Layers,
  Bot,
  Smartphone,
  Briefcase,
  Lock,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Form Validation Schema
const contactSchema = z.object({
  fullName: z.string().min(2, "Veuillez renseigner votre nom"),
  email: z.string().email("Adresse email valide requise"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Sélectionnez un type de projet"),
  budget: z.string().min(1, "Sélectionnez une fourchette de budget"),
  timeline: z.string().optional(),
  message: z.string().min(10, "Votre message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = [
  { id: "saas", label: "SaaS & Web App", icon: Layers, desc: "Next.js 14, Cloud & Auth" },
  { id: "ai", label: "IA & Automatisation", icon: Bot, desc: "Agents LLM & Workflows n8n" },
  { id: "crm", label: "CRM & ERP Métier", icon: Briefcase, desc: "Tableaux de bord sur-mesure" },
  { id: "mobile", label: "Application Mobile", icon: Smartphone, desc: "iOS & Android (React Native)" },
  { id: "perf", label: "Refonte & Performance", icon: Zap, desc: "Score 100/100 & UX moderne" },
  { id: "audit", label: "Conseil & Architecture", icon: Sparkles, desc: "Audit technique & Roadmap" },
];

const budgetOptions = [
  "< 1 500 €",
  "1 500 € - 3 500 €",
  "3 500 € - 7 000 €",
  "+ 7 000 €",
];

const timelineOptions = [
  "⚡ Moins de 3 sem.",
  "🗓️ Dans le mois",
  "⏳ 2 à 3 mois",
  "💡 Phase d'étude",
];

const quickPrompts = [
  "Maquette Figma prête à développer",
  "MVP rapide sous 3 semaines",
  "Automatisation de processus avec l'IA",
  "Refonte d'un outil existant",
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [parisTime, setParisTime] = useState("");

  // Live Paris Time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("fr-FR", {
        timeZone: "Europe/Paris",
        hour: "2-digit",
        minute: "2-digit",
      }).format(now);
      setParisTime(formatted);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      projectType: "SaaS & Web App",
      budget: "1 500 € - 3 500 €",
      timeline: "Dans le mois",
      message: "",
    },
  });

  const selectedType = watch("projectType");
  const selectedBudget = watch("budget");
  const selectedTimeline = watch("timeline");
  const currentMessage = watch("message");

  const copyEmail = () => {
    navigator.clipboard.writeText("youssouf.abdouraouf4@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const insertPrompt = (prompt: string) => {
    const updated = currentMessage ? `${currentMessage}\n- ${prompt}` : `- ${prompt}`;
    setValue("message", updated);
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setIsSubmitted(true);
      reset();
    } catch (err) {
      console.error(err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 bg-gradient-to-b from-gray-950 via-[#060a14] to-gray-950 overflow-hidden font-['Helvetica_Neue',Helvetica,Arial,sans-serif]"
    >
      {/* Background Ambient Glow & Grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-gradient-to-tr from-purple-900/15 via-indigo-900/20 to-transparent rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[450px] bg-gradient-to-bl from-pink-900/10 via-purple-950/20 to-transparent rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-light tracking-wide mb-5 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Collaboration & Nouveaux Projets</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white mb-5">
            Donnons vie à votre vision.{" "}
            <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-300">
              Sans friction.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
            Discutez directement en direct ou décrivez les détails de votre besoin. 
            Je réponds sous 24h avec une première analyse de faisabilité technique.
          </p>
        </motion.div>

        {/* ── 2-COLUMN ASYMMETRIC STUDIO BENTO LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ════════ LEFT COLUMN: DIRECT CHANNELS & STUDIO IDENTITY (5 Cols) ════════ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* 1. Identity & Live Status Card */}
            <div className="p-6 rounded-3xl border border-white/10 bg-gray-950/70 backdrop-blur-2xl relative overflow-hidden group hover:border-purple-500/30 transition-all duration-300 shadow-xl">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />

              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white font-medium text-sm shadow-md shadow-purple-950/50">
                      AY
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-gray-950" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-white flex items-center gap-1.5">
                      <span>Abdouraouf Youssouf</span>
                    </h3>
                    <p className="text-xs text-gray-400 font-light">
                      Développeur Full-Stack & IA
                    </p>
                  </div>
                </div>

                <Badge className="bg-emerald-500/10 border-emerald-500/30 text-emerald-300 font-light text-[11px] px-2.5 py-1">
                  En ligne
                </Badge>
              </div>

              {/* Status details */}
              <div className="space-y-2.5 pt-2 border-t border-white/5 text-xs font-light text-gray-300">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Disponibilité :</span>
                  <span className="text-emerald-400 font-normal flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Ouvert aux nouveaux projets
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Localisation & Fuseau :</span>
                  <span className="text-white">
                    Paris, France {parisTime && `(${parisTime})`}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Délai de réponse :</span>
                  <span className="text-purple-300">&lt; 2 heures en journée</span>
                </div>
              </div>
            </div>

            {/* 2. WhatsApp Direct Card (Instant Chat) */}
            <a
              href="https://wa.me/212773543330?text=Bonjour%20Abdouraouf,%20j'ai%20vu%20votre%20portfolio%20et%20j'aimerais%20échanger%20avec%20vous%20au%20sujet%20d'un%20projet."
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-3xl border border-emerald-500/30 bg-emerald-950/20 hover:bg-emerald-950/30 backdrop-blur-2xl transition-all duration-300 group hover:border-emerald-400/50 hover:shadow-xl hover:shadow-emerald-950/30"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white flex items-center gap-1.5">
                      <span>WhatsApp Direct</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-light">
                        Le plus rapide
                      </span>
                    </div>
                    <p className="text-xs text-gray-300 font-light mt-0.5">
                      Échange par message ou note vocale
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div className="mt-3.5 pt-3 border-t border-emerald-500/20 flex items-center justify-between text-xs text-emerald-300/90 font-light">
                <span>+33 7 73 19 50 85</span>
                <span className="underline group-hover:text-emerald-200">Démarrer une conversation ↗</span>
              </div>
            </a>

            {/* 3. Audit Technique Calendly Card */}
            <div className="p-5 sm:p-6 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-950/30 via-indigo-950/20 to-gray-950/70 backdrop-blur-2xl space-y-4 hover:border-purple-400/50 transition-all duration-300 relative group overflow-hidden shadow-xl shadow-purple-950/20">
              <div className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all" />

              <div className="flex items-start justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white flex items-center gap-2">
                      <span>Audit Technique & Cadrage</span>
                    </h4>
                    <p className="text-xs text-gray-300 font-light mt-0.5">
                      Diagnostic d&apos;architecture & estimation en direct
                    </p>
                  </div>
                </div>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 font-light text-[10px]">
                  Offert · 30 min
                </Badge>
              </div>

              <p className="text-xs text-gray-400 font-light leading-relaxed relative z-10">
                Échange individuel en visio pour évaluer la faisabilité de votre projet (Next.js, SaaS, Mobile ou IA), choisir la stack optimale et obtenir un chiffrage précis.
              </p>

              <div className="pt-1 relative z-10">
                <a
                  href="https://calendly.com/abdouraouf-ai/audit-technique-cadrage-projet-offert"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-medium transition-all shadow-lg shadow-purple-950/40 hover:scale-[1.01] group/btn"
                >
                  <Video className="w-3.5 h-3.5 text-purple-200" />
                  <span>Réserver mon créneau sur Calendly</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* 4. Direct Email Copy Card */}
            <div className="p-4 rounded-3xl border border-white/10 bg-gray-950/60 backdrop-blur-xl flex items-center justify-between hover:border-purple-500/30 transition-colors">
              <div className="flex items-center gap-3 truncate">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 font-light">
                    EMAIL PERSONNEL
                  </div>
                  <a
                    href="mailto:youssouf.abdouraouf4@gmail.com"
                    className="text-xs text-white hover:text-purple-300 transition-colors truncate block font-normal"
                  >
                    youssouf.abdouraouf4@gmail.com
                  </a>
                </div>
              </div>

              <button
                onClick={copyEmail}
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-gray-400 hover:text-white transition-colors shrink-0"
                title="Copier l'adresse email"
              >
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* 5. Trust Points Card */}
            <div className="p-5 rounded-3xl border border-white/5 bg-white/[0.015] backdrop-blur-xl space-y-2.5 text-xs text-gray-400 font-light">
              <div className="flex items-center gap-2 text-gray-300">
                <Lock className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Accord de confidentialité (NDA sur demande)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Devis et cadrage technique transmis sous 24h</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Code source 100% cédé & documenté</span>
              </div>
            </div>
          </motion.div>

          {/* ════════ RIGHT COLUMN: PROJECT CONFIGURATOR & INTAKE (7 Cols) ════════ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl border border-white/10 bg-gray-950/80 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl shadow-purple-950/30 overflow-hidden">
              {/* Top ambient highlight */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />

              {isSubmitted ? (
                <div className="py-16 text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto shadow-[0_0_40px_rgba(16,185,129,0.35)]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-light text-white">
                      Demande bien reçue !
                    </h3>
                    <p className="text-sm text-gray-300 font-light leading-relaxed max-w-md mx-auto">
                      Merci pour votre confiance. J&apos;analyse votre besoin et je vous recontacte sous 24 heures ouvrées avec une première vision technique et budgétaire.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-white font-light text-xs sm:text-sm px-5 py-2.5 rounded-xl"
                    >
                      Envoyer un autre message
                    </Button>
                    <a
                      href="https://wa.me/33773195085"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 text-xs sm:text-sm font-light transition-colors"
                    >
                      Accélérer via WhatsApp ↗
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
                  {/* Form Header */}
                  <div className="border-b border-white/5 pb-5">
                    <span className="text-[11px] font-light text-purple-300 uppercase tracking-widest block mb-1">
                      CONFIGURATEUR DE PROJET
                    </span>
                    <h3 className="text-xl sm:text-2xl font-light text-white">
                      Décrivez vos attentes
                    </h3>
                  </div>

                  {/* 1. Project Type Chips */}
                  <div>
                    <label className="block text-xs font-light uppercase tracking-wider text-gray-300 mb-3">
                      1. Type de solution envisagée <span className="text-purple-400">*</span>
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {projectTypes.map((type) => {
                        const isSelected = selectedType === type.label;
                        const Icon = type.icon;
                        return (
                          <button
                            type="button"
                            key={type.id}
                            onClick={() => setValue("projectType", type.label)}
                            className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex items-center gap-3 group ${
                              isSelected
                                ? "border-purple-500 bg-purple-500/15 ring-1 ring-purple-500/30 shadow-md shadow-purple-950/30"
                                : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                            }`}
                          >
                            <div
                              className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                isSelected
                                  ? "bg-purple-500/30 text-purple-200"
                                  : "bg-white/[0.04] text-gray-400 group-hover:text-purple-300"
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="truncate">
                              <span
                                className={`text-xs block truncate ${
                                  isSelected
                                    ? "text-white font-medium"
                                    : "text-gray-200 font-light group-hover:text-white"
                                }`}
                              >
                                {type.label}
                              </span>
                              <span className="text-[11px] text-gray-400 block truncate font-light">
                                {type.desc}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Budget and Timeline in 2 columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Budget */}
                    <div>
                      <label className="block text-xs font-light uppercase tracking-wider text-gray-300 mb-2.5">
                        2. Fourchette budgétaire <span className="text-purple-400">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {budgetOptions.map((b) => {
                          const isSelected = selectedBudget === b;
                          return (
                            <button
                              type="button"
                              key={b}
                              onClick={() => setValue("budget", b)}
                              className={`py-2 px-2.5 rounded-xl text-xs font-light border text-center transition-all ${
                                isSelected
                                  ? "border-purple-500 bg-purple-500/20 text-white font-medium ring-1 ring-purple-500/30"
                                  : "border-white/10 bg-white/[0.02] text-gray-300 hover:text-white hover:border-white/20"
                              }`}
                            >
                              {b}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label className="block text-xs font-light uppercase tracking-wider text-gray-300 mb-2.5">
                        3. Délai de livraison visé
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {timelineOptions.map((t) => {
                          const isSelected = selectedTimeline === t;
                          return (
                            <button
                              type="button"
                              key={t}
                              onClick={() => setValue("timeline", t)}
                              className={`py-2 px-2.5 rounded-xl text-xs font-light border text-center transition-all ${
                                isSelected
                                  ? "border-indigo-500 bg-indigo-500/20 text-white font-medium ring-1 ring-indigo-500/30"
                                  : "border-white/10 bg-white/[0.02] text-gray-300 hover:text-white hover:border-white/20"
                              }`}
                            >
                              {t}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* 3. Personal / Business Details */}
                  <div>
                    <label className="block text-xs font-light uppercase tracking-wider text-gray-300 mb-2.5">
                      4. Vos coordonnées de contact
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <div className="relative">
                          <User className="w-3.5 h-3.5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <Input
                            {...register("fullName")}
                            placeholder="Nom complet *"
                            className="pl-9 bg-white/[0.02] border-white/10 focus:border-purple-400/60 focus:bg-white/[0.05] text-white placeholder:text-gray-500 rounded-xl font-light text-xs sm:text-sm h-11"
                          />
                        </div>
                        {errors.fullName && (
                          <p className="text-xs text-rose-400 mt-1 font-light">
                            {errors.fullName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <div className="relative">
                          <Mail className="w-3.5 h-3.5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <Input
                            {...register("email")}
                            type="email"
                            placeholder="Email pro *"
                            className="pl-9 bg-white/[0.02] border-white/10 focus:border-purple-400/60 focus:bg-white/[0.05] text-white placeholder:text-gray-500 rounded-xl font-light text-xs sm:text-sm h-11"
                          />
                        </div>
                        {errors.email && (
                          <p className="text-xs text-rose-400 mt-1 font-light">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <div className="relative">
                          <Phone className="w-3.5 h-3.5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <Input
                            {...register("phone")}
                            placeholder="Téléphone"
                            className="pl-9 bg-white/[0.02] border-white/10 focus:border-purple-400/60 focus:bg-white/[0.05] text-white placeholder:text-gray-500 rounded-xl font-light text-xs sm:text-sm h-11"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 4. Message & Quick Prompts */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <label className="text-xs font-light uppercase tracking-wider text-gray-300">
                        5. Votre message ou description du besoin <span className="text-purple-400">*</span>
                      </label>
                      <span className="text-[11px] text-gray-400 font-light">
                        Suggestions rapides :
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {quickPrompts.map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => insertPrompt(p)}
                          className="text-[11px] px-2.5 py-1 rounded-lg border border-white/10 bg-white/[0.02] text-gray-300 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-colors font-light text-left"
                        >
                          + {p}
                        </button>
                      ))}
                    </div>

                    <Textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Présentez brièvement vos besoins, fonctionnalités clés, contraintes ou objectifs..."
                      className="bg-white/[0.02] border-white/10 focus:border-purple-400/60 focus:bg-white/[0.05] text-white placeholder:text-gray-500 rounded-xl resize-none font-light text-xs sm:text-sm p-3.5 leading-relaxed"
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-400 mt-1.5 font-light">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit CTA Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium py-5 text-sm sm:text-base rounded-2xl shadow-xl shadow-purple-600/30 transition-all duration-300 hover:scale-[1.008] flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span className="font-light">Envoi de votre brief...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmettre mon projet</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
