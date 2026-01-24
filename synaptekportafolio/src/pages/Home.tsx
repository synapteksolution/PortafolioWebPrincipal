// src/components/Inicio.jsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BarChart3,
  Bot,
  BrainCircuit,
  Code2,
  Rocket,
  Sparkles,
  Workflow,
  CheckCircle2,
} from "lucide-react"

const servicios = [
  {
    icon: <Code2 size={18} className="text-cyan-200" />,
    title: "Desarrollo Web (MVP y producto)",
    desc: "Landing, panel, APIs y base de datos. Ideal para lanzar y validar rápido.",
    bullets: ["React / Next", "Node / Nest", "Deploy y documentación mínima"],
    badge: "bg-cyan-500/10 text-cyan-200 border-cyan-500/25",
  },
  {
    icon: <BarChart3 size={18} className="text-amber-200" />,
    title: "Data Scientist (KPIs y dashboards)",
    desc: "Definición de métricas, análisis y tableros para decisiones basadas en datos.",
    bullets: ["SQL + modelado", "Limpieza/EDA", "Dashboard accionable"],
    badge: "bg-amber-500/10 text-amber-200 border-amber-500/25",
  },
  {
    icon: <Bot size={18} className="text-sky-200" />,
    title: "Chatbots (GenIA + flujos)",
    desc: "Bots para FAQs, captación de leads y automatización conectada a tus sistemas.",
    bullets: ["Diseño conversacional", "Integración con APIs", "Iteración por métricas"],
    badge: "bg-sky-500/10 text-sky-200 border-sky-500/25",
  },
  {
    icon: <BrainCircuit size={18} className="text-fuchsia-200" />,
    title: "Inteligencia Artificial aplicada",
    desc: "Features inteligentes: clasificación, resumen, asistencia y automatización de tareas.",
    bullets: ["GenIA en producto", "RAG / fuentes", "Buenas prácticas"],
    badge: "bg-fuchsia-500/10 text-fuchsia-200 border-fuchsia-500/25",
  },
  {
    icon: <Workflow size={18} className="text-emerald-200" />,
    title: "Integraciones y automatización",
    desc: "Conecto servicios externos: APIs, webhooks y flujos para reducir trabajo manual.",
    bullets: ["Integraciones", "Manejo de errores", "Documentación"],
    badge: "bg-emerald-500/10 text-emerald-200 border-emerald-500/25",
  },
]

const valor = [
  {
    title: "Alcance claro",
    desc: "Trabajo por fases (MVP → mejora), evitando promesas sin control.",
  },
  {
    title: "Velocidad con calidad",
    desc: "Entregas rápidas, pero con buenas prácticas y código mantenible.",
  },
  {
    title: "Orientado a negocio",
    desc: "Priorizo impacto: conversión, automatización, KPIs y reducción de tiempo.",
  },
]

export default function Home() {
  return (
    <main className="px-6 py-10">
      {/* HERO */}
      <section
        className={[
          "relative overflow-hidden rounded-3xl border border-white/10",
          "bg-[radial-gradient(1200px_circle_at_20%_0%,rgba(168,85,247,.22),transparent_45%),radial-gradient(900px_circle_at_80%_100%,rgba(34,211,238,.16),transparent_45%),linear-gradient(180deg,rgba(2,6,23,.92),rgba(15,23,42,.78))]",
          "px-6 py-16 md:px-10 md:py-20",
        ].join(" ")}
      >
        {/* glow overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(800px_circle_at_30%_10%,rgba(34,211,238,.10),transparent_50%),radial-gradient(900px_circle_at_75%_90%,rgba(168,85,247,.12),transparent_55%)]" />

        <div className="relative mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-200 text-xs">
              <Sparkles size={14} className="text-slate-200" />
              Producto • Datos • GenIA
            </div>

            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100">
              Soluciones digitales para pymes:
              <span className="block text-slate-200">
                desarrollo web, datos, chatbots e IA aplicada
              </span>
            </h1>

            <p className="mt-4 text-slate-300 text-lg leading-relaxed max-w-xl">
              Soy recien egresado enfocado en construir productos funcionales y medibles. Trabajo por
              fases (MVP → mejora), con entregas claras y comunicación directa.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-2xl bg-white text-slate-900 hover:bg-white/90"
              >
                <a href="#contacto" className="inline-flex items-center gap-2">
                  <Rocket size={18} />
                  Solicitar propuesta
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-2xl border-white/20 bg-white/5 text-slate-100 hover:bg-white/10"
              >
                <a href="#servicios" className="inline-flex items-center gap-2">
                  <Code2 size={18} />
                  Ver servicios
                </a>
              </Button>
            </div>

            <div className="mt-6 text-xs text-slate-400">
              Entregas claras • Alcance definido • Iteración por resultados
            </div>
          </div>

          {/* RIGHT PANEL: 3 value points */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {valor.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-center gap-2">
                    <div className="grid place-items-center size-9 rounded-xl border border-white/10 bg-white/5">
                      <CheckCircle2 size={16} className="text-emerald-200" />
                    </div>
                    <h3 className="text-sm font-extrabold text-slate-100">{v.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{v.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-5">
              <div className="flex items-center gap-2">
                <div className="grid place-items-center size-9 rounded-xl border border-white/10 bg-white/5">
                  <Bot size={16} className="text-sky-200" />
                </div>
                <p className="text-sm font-bold text-slate-100">Enfoque en automatización</p>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Priorizo soluciones que reduzcan tiempo operativo (chatbots, integraciones y reportes).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="mt-14">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-200 text-xs">
                <Code2 size={14} className="text-slate-200" />
                Servicios
              </div>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-100">
                Lo que puedo construir contigo
              </h2>
              <p className="mt-2 text-slate-300 max-w-2xl">
                Servicios alineados a mi stack actual. Ideal para pymes y proyectos que necesitan un
                MVP real y medible.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="text-[10px] text-slate-300">Áreas</div>
                <div className="text-lg font-extrabold text-slate-100">5</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="text-[10px] text-slate-300">Enfoque</div>
                <div className="text-lg font-extrabold text-slate-100">MVP</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="text-[10px] text-slate-300">Perfil</div>
                <div className="text-lg font-extrabold text-emerald-200">Starter</div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {servicios.map((s) => (
              <Card
                key={s.title}
                className={[
                  "group relative overflow-hidden rounded-2xl border border-white/10",
                  "bg-gradient-to-b from-white/[0.07] to-white/[0.03]",
                  "transition-all hover:shadow-[0_0_0_1px_rgba(255,255,255,.10),0_0_44px_rgba(34,211,238,.10)]",
                ].join(" ")}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(1100px_circle_at_20%_0%,rgba(168,85,247,.14),transparent_45%),radial-gradient(900px_circle_at_80%_100%,rgba(34,211,238,.10),transparent_45%)]" />

                <CardContent className="relative p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="grid place-items-center size-11 rounded-2xl border border-white/10 bg-white/5">
                        {s.icon}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-extrabold text-slate-100">
                          {s.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-300">{s.desc}</p>
                      </div>
                    </div>

                    <span className={["text-[10px] px-2 py-1 rounded-full border", s.badge].join(" ")}>
                      Starter
                    </span>
                  </div>

                  <div className="mt-4">
                    <div className="text-[11px] font-bold text-slate-200 mb-2 flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-slate-200" />
                      Incluye
                    </div>
                    <ul className="space-y-1.5 text-sm text-slate-300">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-2 size-1.5 rounded-full bg-white/30" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-14">
        <div
          className={[
            "mx-auto max-w-6xl rounded-3xl border border-white/10 overflow-hidden",
            "bg-[radial-gradient(1000px_circle_at_25%_0%,rgba(34,211,238,.14),transparent_50%),radial-gradient(900px_circle_at_80%_100%,rgba(168,85,247,.16),transparent_55%),linear-gradient(180deg,rgba(2,6,23,.92),rgba(15,23,42,.78))]",
          ].join(" ")}
        >
          <div className="px-6 py-14 md:px-10 md:py-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-200 text-xs">
              <Sparkles size={14} className="text-slate-200" />
              Empecemos por un MVP
            </div>

            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-100">
              ¿Tienes una idea? La aterrizamos y la lanzamos por fases.
            </h2>

            <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
              Agenda una conversación corta. Te propongo alcance, tiempos y el primer entregable medible.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-2xl bg-white text-slate-900 hover:bg-white/90"
              >
                <a href="#contacto" className="inline-flex items-center gap-2">
                  <Rocket size={18} />
                  Contactar
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-2xl border-white/20 bg-white/5 text-slate-100 hover:bg-white/10"
              >
                <a href="#proyectos" className="inline-flex items-center gap-2">
                  <Code2 size={18} />
                  Ver proyectos
                </a>
              </Button>
            </div>

            <div className="mt-6 text-xs text-slate-400">
              Alcance definido • Roadmap • Iteración • Resultados
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
