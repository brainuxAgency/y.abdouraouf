import type { ComponentType } from "react"
import { KeyRound, Orbit } from "lucide-react"
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiPrisma,
  SiPostgresql,
  SiVercel,
  SiCloudflare,
  SiClaude, // react-icons >= 5.4 ; sinon remplacez par une icône lucide (ex. Sparkles)
  SiTailwindcss,
  SiNodedotjs,
  SiZod,
} from "react-icons/si"

type Item = { name: string; icon: ComponentType<{ className?: string }>; color: string }

const items: Item[] = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "Prisma", icon: SiPrisma, color: "text-zinc-200" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#6B8CE8]" },
  { name: "Vercel", icon: SiVercel, color: "text-white" },
  { name: "Cloudflare", icon: SiCloudflare, color: "text-[#F6821F]" },
  { name: "Better Auth", icon: KeyRound, color: "text-zinc-200" }, // pas d'icône officielle dans react-icons
  { name: "Claude", icon: SiClaude, color: "text-[#D97757]" },
  { name: "Antigravity", icon: Orbit, color: "text-[#7AA2FF]" }, // pas d'icône officielle dans react-icons
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#38BDF8]" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#5FA04E]" },
  { name: "Zod", icon: SiZod, color: "text-[#6C8EEF]" },
]

const fade = "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)"

export function StackMarquee() {
  return (
    <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20">
      <p className="mb-6 text-center font-montserrat text-xs text-zinc-500">
        Les outils avec lesquels je construis
      </p>

      <div
        className="stack-marquee relative overflow-hidden"
        style={{ maskImage: fade, WebkitMaskImage: fade }}
      >
        <ul className="stack-track flex w-max items-center">
          {[...items, ...items].map((item, i) => (
            <li
              key={`${item.name}-${i}`}
              aria-hidden={i >= items.length}
              className="pr-3"
            >
              <div className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2.5">
                <item.icon className={`h-4 w-4 shrink-0 ${item.color}`} />
                <span className="whitespace-nowrap font-montserrat text-xs font-medium text-zinc-200">
                  {item.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @keyframes stack-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .stack-track { animation: stack-scroll 45s linear infinite; }
        .stack-marquee:hover .stack-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .stack-track { animation: none; }
          .stack-marquee { overflow-x: auto; }
        }
      `}</style>
    </div>
  )
}
