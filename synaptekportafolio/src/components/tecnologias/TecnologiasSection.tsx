
import { useMemo, useState } from "react"
import type { Skill, SkillArea } from "./types"
import { skills } from "./data"
import { matchesQuery, sortSkills } from "./utils"
import { areasOrden } from "./meta"
import TecnologiasFilters from "@/components/tecnologias/TecnologiasFilters"
import TecnologiasGrid from "@/components/tecnologias/TecnologiasGrid"
import { Brain, Code2 } from "lucide-react"

function buildStats(list: Skill[]) {
  return {
    total: list.length,
    core: list.filter((s) => s.core).length,
    top: list.filter((s) => s.nivel >= 4).length,
  }
}

export default function SkillsSection() {
  const [areaActiva, setAreaActiva] = useState<SkillArea | "Todas">("Todas")
  const [soloCore, setSoloCore] = useState(false)
  const [query, setQuery] = useState("")

  const stats = useMemo(() => buildStats(skills), [])

  const filtradas = useMemo(() => {
    return skills
      .filter((s) => (areaActiva === "Todas" ? true : s.area === areaActiva))
      .filter((s) => (soloCore ? !!s.core : true))
      .filter((s) => matchesQuery(s, query))
      .slice()
      .sort(sortSkills)
  }, [areaActiva, soloCore, query])

  const agrupadas = useMemo(() => {
    const map = new Map<SkillArea, Skill[]>()
    for (const a of areasOrden) map.set(a, [])
    for (const s of filtradas) map.get(s.area)?.push(s)
    return map
  }, [filtradas])

  return (
    <section
      id="skills"
      className={[
        "relative py-20 px-6 rounded-3xl border border-white/10",
        "bg-[radial-gradient(1200px_circle_at_20%_0%,rgba(168,85,247,.22),transparent_45%),radial-gradient(900px_circle_at_80%_100%,rgba(34,211,238,.16),transparent_45%),linear-gradient(180deg,rgba(2,6,23,.92),rgba(15,23,42,.78))]",
      ].join(" ")}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-200 text-xs">
              <Code2 size={14} className="text-slate-200" />
              Habilidades clave
            </div>

            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-100">
              Skills
            </h2>

            <p className="mt-2 text-slate-300 max-w-xl">
              Enfoque en producto con capacidades de <span className="text-slate-100 font-semibold">Data Scientist</span>,
              desarrollo y soluciones con <span className="text-slate-100 font-semibold">Chatbots</span> e{" "}
              <span className="text-slate-100 font-semibold">Inteligencia Artificial</span>.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-[10px] text-slate-300">Total</div>
              <div className="text-lg font-extrabold text-slate-100">{stats.total}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-[10px] text-slate-300">Core</div>
              <div className="text-lg font-extrabold text-emerald-200">{stats.core}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-[10px] text-slate-300">Nivel 4–5</div>
              <div className="text-lg font-extrabold text-slate-100">{stats.top}</div>
            </div>
          </div>
        </div>

        <TecnologiasFilters
          areaActiva={areaActiva}
          setAreaActiva={setAreaActiva}
          soloCore={soloCore}
          setSoloCore={setSoloCore}
          query={query}
          setQuery={setQuery}
          visibles={filtradas.length}
        />

        <div className="mt-10 flex items-center gap-2 text-slate-300 text-xs">
          <Brain size={14} />
          <span>Ordenado por Core y nivel (lo más relevante primero).</span>
        </div>

        <TecnologiasGrid agrupadas={agrupadas} />
      </div>
    </section>
  )
}
