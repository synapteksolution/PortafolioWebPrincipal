// src/components/skills/meta.ts
import type { SkillArea } from "./types"

export const areasOrden: SkillArea[] = [
  "Desarrollo Web",
  "Data Scientist",
  "Inteligencia Artificial",
  "Chatbots",
  "Desarrollo de Escritorio",
]

export const areaMeta: Record<
  SkillArea,
  { label: string; badge: string; ring: string; glow: string }
> = {
  "Desarrollo Web": {
    label: "Desarrollo Web",
    badge: "bg-cyan-500/10 text-cyan-200 border-cyan-500/25",
    ring: "ring-cyan-500/20",
    glow:
      "hover:shadow-[0_0_0_1px_rgba(34,211,238,.25),0_0_44px_rgba(34,211,238,.12)]",
  },
  "Data Scientist": {
    label: "Data Scientist",
    badge: "bg-amber-500/10 text-amber-200 border-amber-500/25",
    ring: "ring-amber-500/20",
    glow:
      "hover:shadow-[0_0_0_1px_rgba(245,158,11,.25),0_0_44px_rgba(245,158,11,.12)]",
  },
  "Inteligencia Artificial": {
    label: "Inteligencia Artificial",
    badge: "bg-fuchsia-500/10 text-fuchsia-200 border-fuchsia-500/25",
    ring: "ring-fuchsia-500/20",
    glow:
      "hover:shadow-[0_0_0_1px_rgba(217,70,239,.25),0_0_44px_rgba(217,70,239,.12)]",
  },
  Chatbots: {
    label: "Chatbots",
    badge: "bg-sky-500/10 text-sky-200 border-sky-500/25",
    ring: "ring-sky-500/20",
    glow:
      "hover:shadow-[0_0_0_1px_rgba(56,189,248,.25),0_0_44px_rgba(56,189,248,.12)]",
  },
  "Desarrollo de Escritorio": {
    label: "Desarrollo de Escritorio",
    badge: "bg-violet-500/10 text-violet-200 border-violet-500/25",
    ring: "ring-violet-500/20",
    glow:
      "hover:shadow-[0_0_0_1px_rgba(168,85,247,.25),0_0_44px_rgba(168,85,247,.12)]",
  },
}
