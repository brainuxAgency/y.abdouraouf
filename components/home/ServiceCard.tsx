"use client";

import { Service } from "@/src/constants/services";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative flex flex-col h-full"
    >
      {/* Background card with glassmorphism and subtle border */}
      <div className="relative flex flex-col justify-between h-full rounded-2xl border border-white/10 bg-gray-950/70 backdrop-blur-xl p-6 transition-all duration-300 hover:border-purple-500/40 hover:bg-gray-900/70 hover:shadow-2xl hover:shadow-purple-950/20 overflow-hidden">
        {/* Subtle top light beam on hover */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Ambient radial glow on hover */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: service.glowColor }}
        />

        <div>
          {/* Card Top: Icon & Category */}
          <div className="flex items-center justify-between mb-5">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 group-hover:border-purple-500/40 group-hover:text-purple-300 transition-all duration-300 shadow-sm">
              <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-gray-500 group-hover:text-purple-400/80 transition-colors">
                {service.id}
              </span>
              <Badge
                variant="outline"
                className="text-[10px] font-mono border-white/10 bg-white/[0.03] text-gray-400 group-hover:border-purple-500/30 group-hover:text-gray-300 transition-colors"
              >
                {service.category}
              </Badge>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors tracking-tight">
            {service.title}
          </h3>

          {/* Description */}
          <p className="mt-2.5 text-xs sm:text-sm text-gray-400 leading-relaxed">
            {service.description}
          </p>

          {/* Tech stack / keywords */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {service.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-[11px] font-mono px-2 py-0.5 rounded-md border-white/10 bg-white/[0.02] text-gray-400 group-hover:text-gray-300 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Card Footer: CTA link */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors group/link"
          >
            <span>Concrétiser ce projet</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors" />
        </div>
      </div>
    </motion.div>
  );
}