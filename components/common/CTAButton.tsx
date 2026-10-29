"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "outline-primary";
  className?: string;
  onClick?: () => void;
  href?: string;
  icon?: ReactNode;
  size?: "sm" | "md" | "lg";
  target?: string;
  rel?: string;
}

export function CTAButton({ children, variant = "primary", className, onClick, href, icon, size = "md", target, rel }: CTAButtonProps) {

  const baseClasses = "relative cursor-pointer inline-flex items-center justify-center font-medium transition-all focus:outline-none rounded-xl overflow-hidden group hover:-translate-y-0.5 active:scale-[0.98]";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary: "bg-primary text-white font-semibold shadow-[0_4px_24px_rgba(255,106,26,0.38)] hover:shadow-[0_6px_32px_rgba(255,106,26,0.55)] hover:brightness-105 transition-all border border-primary/60 border-t-white/30",
    "outline-primary": "bg-transparent text-white font-semibold border border-primary/45 hover:border-primary hover:bg-primary/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_18px_rgba(255,106,26,0.12)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_28px_rgba(255,106,26,0.32)] backdrop-blur-sm transition-all duration-300",
    secondary: "bg-zinc-900 text-zinc-100 hover:bg-zinc-800 border border-white/10 dark:border-white/10 hover:border-white/20",
    outline: "bg-transparent text-white border border-white/15 hover:bg-white/5",
    ghost: "bg-transparent text-white hover:bg-white/5",
  };

  const buttonElement = (
    <button
      className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>

      {/* Ripple/Glow Overlay Effect */}
      {(variant === "primary" || variant === "outline-primary") && (
        <span className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_1.5s_infinite]" />
      )}
    </button>
  );

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className="inline-block w-full sm:w-auto">
        {buttonElement}
      </Link>
    );
  }

  return buttonElement;
}
