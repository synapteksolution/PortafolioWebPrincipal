// src/components/skills/SkillsFilters.tsx
import type { SkillArea } from "./types"
import { areasOrden, areaMeta } from "./meta"

function Chip({
  active,
  children,
  onClick,
}: {
  active?: boolean
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "px-3 py-1.5 rounded-full text-xs font-semibold border transition",
        "backdrop-blur bg-white/5 border-white/10 text-slate-100 hover:bg-white/10",
        active ? "bg-white/10 border-white/25 ring-1 ring-white/20" : "",
      ].join(" ")}
      type="button"
    >
      {children}
    </button>
  )
}

export default function TecnologiasFilters({
  areaActiva,
  setAreaActiva,
  soloCore,
  setSoloCore,
  query,
  setQuery,
  visibles,
}: {
  areaActiva: SkillArea | "Todas"
  setAreaActiva: (v: SkillArea | "Todas") => void
  soloCore: boolean
  setSoloCore: (v: boolean) => void
  query: string
  setQuery: (v: string) => void
  visibles: number
}) {
  return (
    <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap gap-2">
        <Chip active={areaActiva === "Todas"} onClick={() => setAreaActiva("Todas")}>
          Todas
        </Chip>

        {areasOrden.map((a) => (
          <Chip key={a} active={areaActiva === a} onClick={() => setAreaActiva(a)}>
            {areaMeta[a].label}
          </Chip>
        ))}

        <Chip active={soloCore} onClick={() => setSoloCore(!soloCore)}>
          {soloCore ? "Mostrando Core" : "Solo Core"}
        </Chip>
      </div>

      <div className="flex items-center gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar (EDA, APIs, RAG, Deploy, UI...)"
          className={[
            "w-full md:w-[340px] rounded-2xl border border-white/10 bg-white/5",
            "px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-400",
            "outline-none focus:ring-2 focus:ring-white/20",
          ].join(" ")}
        />
        <div className="hidden md:block text-slate-300 text-xs">{visibles} visibles</div>
      </div>
    </div>
  )
}
