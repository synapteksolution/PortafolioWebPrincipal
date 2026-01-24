// src/components/skills/SkillsGrid.tsx
import type { Skill, SkillArea } from "./types"
import { areasOrden, areaMeta } from "./meta"
import TecnologiasCard from "@/components/tecnologias/TecnologiasCard"

export default function TecnologiasGrid({
  agrupadas,
}: {
  agrupadas: Map<SkillArea, Skill[]>
}) {
  return (
    <div className="mt-10 space-y-10">
      {areasOrden.map((area) => {
        const list = agrupadas.get(area) ?? []
        if (!list.length) return null
        const meta = areaMeta[area]

        return (
          <div key={area}>
            <div className="flex items-center gap-2 mb-4">
              <span className={["text-[10px] px-2 py-0.5 rounded-full border", meta.badge].join(" ")}>
                {meta.label}
              </span>
              <span className="text-sm font-bold text-slate-100">{list.length}</span>
              <span className="text-sm text-slate-300">skills</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {list.map((s) => (
                <TecnologiasCard key={s.id} skill={s} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
