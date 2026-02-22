// src/components/tecnologias/TecnologiasCard.tsx
import { Card, CardContent } from "@/components/ui/card"
import type { Skill } from "@/components/tecnologias/types"
import { areaMeta } from "@/components/tecnologias/meta"
import { nivelLabel, nivelPct } from "@/components/tecnologias/utils"

export default function TecnologiasCard({ skill }: { skill: Skill }) {
  const meta = areaMeta[skill.area]

  return (
    <Card
      className={[
        "group relative overflow-hidden rounded-2xl border",
        "bg-gradient-to-b from-white/[0.07] to-white/[0.03]",
        "border-white/10 transition-all",
        meta.glow,
      ].join(" ")}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(1100px_circle_at_20%_0%,rgba(168,85,247,.14),transparent_45%),radial-gradient(900px_circle_at_80%_100%,rgba(34,211,238,.10),transparent_45%)]" />

      <CardContent className="relative p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div
              className={[
                "grid place-items-center size-12 rounded-2xl border",
                "bg-white/5 border-white/10 ring-1",
                meta.ring,
              ].join(" ")}
            >
              {skill.icono}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-slate-100 truncate">{skill.nombre}</h3>
                {skill.core ? (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border bg-emerald-500/10 text-emerald-200 border-emerald-500/25">
                    Core
                  </span>
                ) : null}
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-2">
                <span className={["text-[10px] px-2 py-0.5 rounded-full border", meta.badge].join(" ")}>
                  {meta.label}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full border bg-white/5 text-slate-200 border-white/10">
                  {nivelLabel(skill.nivel)}
                </span>
              </div>
            </div>
          </div>

          <div className="text-right shrink-0">
            <div className="text-[10px] text-slate-300">Dominio</div>
            <div className="text-xs font-bold text-slate-100">{nivelPct(skill.nivel)}%</div>
          </div>
        </div>

        <p className="mt-3 text-sm text-slate-300 leading-relaxed">{skill.propuesta}</p>

        <div className="mt-4">
          <div className="h-2 rounded-full bg-white/5 border border-white/10 overflow-hidden">
            <div className="h-full rounded-full bg-white/20" style={{ width: `${nivelPct(skill.nivel)}%` }} />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {skill.tags.slice(0, 5).map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-1 rounded-full border bg-white/5 text-slate-200 border-white/10"
            >
              {t}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
