// src/components/Inicio.jsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Monitor,
  Bot,
  Code2,
  Rocket,
  Sparkles,
  Workflow,
  CheckCircle2,
} from "lucide-react"

const servicios = [
  {
    icon: <Code2 size={18} className="text-cyan-200" />,
    title: "Landing Pages & Productos",
    desc: "Sitios de alto impacto diseñados para convertir. Ideal para validar y lanzar rápido.",
    bullets: ["Diseño Moderno", "Optimizado para Leads", "Despliegue Rápido"],
    badge: "bg-cyan-500/10 text-cyan-200 border-cyan-500/25",
  },
  {
    icon: <Monitor size={18} className="text-sky-200" />,
    title: "Aplicativos Web (SaaS / MVP)",
    desc: "Plataformas con lógica compleja, bases de datos y paneles de usuario a medida.",
    bullets: ["Fullstack React/Node", "Arquitectura Escalable", "Dashboards"],
    badge: "bg-sky-500/10 text-sky-200 border-sky-500/25",
  },
  {
    icon: <Workflow size={18} className="text-emerald-200" />,
    title: "Automatización con n8n",
    desc: "Conectamos tus sistemas y automatizamos flujos de trabajo avanzados sin errores.",
    bullets: ["Workflows de Negocio", "Integración de APIs", "Ahorro de Tiempo"],
    badge: "bg-emerald-500/10 text-emerald-200 border-emerald-500/25",
  },
  {
    icon: <Bot size={18} className="text-fuchsia-200" />,
    title: "Chatbots e IA Aplicada",
    desc: "Bots inteligentes para atención al cliente y captura de datos integrados a tu flujo.",
    bullets: ["IA Generativa", "Respuestas Inteligentes", "Fácil de Instalar"],
    badge: "bg-fuchsia-500/10 text-fuchsia-200 border-fuchsia-500/25",
  },
]

const valor = [
  {
    title: "Enfoque Pro",
    desc: "Trabajo con metodologías ágiles y por fases (MVP → mejora continua).",
  },
  {
    title: "Calidad de Código",
    desc: "Código limpio, mantenible y escalable desde el primer commit.",
  },
  {
    title: "Orientado a Resultados",
    desc: "Priorizo el impacto directo en tu negocio: conversión y ahorro de tiempo.",
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
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-200 text-xs shadow-lg">
              <Sparkles size={14} className="text-cyan-300" />
              Lanzamientos • Automatización • Escalabilidad
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05]">
              Soluciones que <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">automatizan</span> y venden
            </h1>

            <p className="mt-6 text-slate-400 text-lg leading-relaxed max-w-xl font-medium">
              Ayudo a empresas a lanzar productos digitales sólidos y automatizar procesos con n8n e IA.
              Enfoque pragmático: resultados reales en tiempos récord.
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
                <a href="/servicios" className="inline-flex items-center gap-2">
                  <Code2 size={18} />
                  Ver servicios
                </a>
              </Button>
            </div>

            <div className="mt-6 text-xs text-slate-400">
              Entregas claras • Alcance definido • Iteración por resultados
            </div>
          </div>

          {/* RIGHT PANEL: Improved Dashboard Mockup Visual */}
          <div className="relative group">
            {/* Decorative glows */}
            <div className="absolute -top-10 -right-10 size-64 bg-cyan-500/10 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute -bottom-10 -left-10 size-64 bg-fuchsia-500/10 blur-[100px] rounded-full animate-pulse delay-700" />

            <div className="relative rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-2 shadow-2xl overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                <div className="flex gap-1.5">
                  <div className="size-2.5 rounded-full bg-rose-500/20 border border-rose-500/50" />
                  <div className="size-2.5 rounded-full bg-amber-500/20 border border-amber-500/50" />
                  <div className="size-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                </div>
                <div className="mx-auto text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2 py-0.5 rounded-md border border-white/5 bg-white/5">
                  Synaptek Platform • Analytics
                </div>
              </div>

              <div className="aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                  alt="Dashboard Data Visualization"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                />
              </div>

              {/* Floating micro-cards for detail */}
              <div className="absolute bottom-6 -right-6 hidden sm:block p-4 rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-xl shadow-2xl animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-lg bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center">
                    <Sparkles size={14} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Conversión</p>
                    <p className="text-sm font-black text-white">+24.8%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Value grid below image (compact) */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {valor.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-white/5 bg-white/5 p-4 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={14} className="text-cyan-400" />
                    <h3 className="text-[11px] font-black text-white uppercase tracking-tight">{v.title}</h3>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">{v.desc}</p>
                </div>
              ))}
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
                <a href="/contacto" className="inline-flex items-center gap-2">
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
                <a href="/soluciones" className="inline-flex items-center gap-2">
                  <Code2 size={18} />
                  Ver soluciones
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
