// src/components/SobreNosotros.tsx
import { BarChart3, Bot, Code2, Rocket, ShieldCheck, Sparkles, Timer } from "lucide-react"

const puntosValor = [
  {
    icon: <Rocket className="text-cyan-200" size={18} />,
    title: "Implementación rápida",
    desc: "Entrego MVPs funcionales en semanas, con alcance claro y iteración por fases.",
  },
  {
    icon: <Sparkles className="text-fuchsia-200" size={18} />,
    title: "Automatización con GenIA",
    desc: "Chatbots y flujos inteligentes para reducir tareas repetitivas y mejorar atención.",
  },
  {
    icon: <BarChart3 className="text-amber-200" size={18} />,
    title: "Decisiones con datos",
    desc: "Dashboards y KPIs para que tu negocio deje de operar “a ojo”.",
  },
  {
    icon: <ShieldCheck className="text-emerald-200" size={18} />,
    title: "Calidad y buenas prácticas",
    desc: "Código mantenible, control de versiones y entregables documentados.",
  },
]

const ofertas = [
  {
    icon: <Code2 className="text-cyan-200" size={18} />,
    title: "Producto web (Landing + Panel + API)",
    bullets: ["Front + Back", "Base de datos", "Deploy y documentación mínima"],
  },
  {
    icon: <Bot className="text-sky-200" size={18} />,
    title: "Chatbot + Automatización",
    bullets: ["FAQs / Leads", "Integración con sistemas", "Mejora continua por métricas"],
  },
  {
    icon: <Timer className="text-amber-200" size={18} />,
    title: "Data & Dashboards",
    bullets: ["KPIs", "Modelado y consultas", "Tableros listos para operar"],
  },
]

export default function SobreNosotros() {
  return (
    <section
      id="sobre"
      className={[
        "py-20 px-6 rounded-3xl border border-white/10",
        "bg-[radial-gradient(1200px_circle_at_20%_0%,rgba(168,85,247,.22),transparent_45%),radial-gradient(900px_circle_at_80%_100%,rgba(34,211,238,.16),transparent_45%),linear-gradient(180deg,rgba(2,6,23,.92),rgba(15,23,42,.78))]",
      ].join(" ")}
    >
      <div className="max-w-6xl mx-auto">
        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-200 text-xs">
              <Sparkles size={14} className="text-slate-200" />
              Visión y propuesta de valor
            </div>

            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-100">
              Soluciones digitales que venden, automatizan y se entienden con datos
            </h2>

            <p className="mt-4 text-slate-300 leading-relaxed">
              Soy un desarrollador recien egresado con enfoque en <span className="text-slate-100 font-semibold">producto</span>,
              <span className="text-slate-100 font-semibold"> análisis de datos</span> y{" "}
              <span className="text-slate-100 font-semibold">GenIA</span>. Ayudo a pymes a lanzar rápido
              (sin complicarse) y a mejorar procesos con automatización y dashboards.
            </p>

            {/* VISION / MISION */}
            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-xs text-slate-300">Visión</div>
                <p className="mt-2 text-sm text-slate-100 font-semibold">
                  Ser un referente regional en soluciones digitales para pymes, combinando desarrollo moderno,
                  datos y automatización.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-xs text-slate-300">Misión</div>
                <p className="mt-2 text-sm text-slate-100 font-semibold">
                  Ofrecer soluciones personalizadas, escalables y de rápida implementación, con enfoque en experiencia
                  del usuario, automatización y resultados medibles.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-extrabold bg-white text-slate-900 hover:bg-white/90 transition"
              >
                <Rocket size={16} />
                Quiero una propuesta
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-extrabold border border-white/15 bg-white/5 text-slate-100 hover:bg-white/10 transition"
              >
                Ver servicios
              </a>
            </div>
          </div>

          {/* RIGHT: VALUE CARDS */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-extrabold text-slate-100">Lo que me diferencia</h3>
                <span className="text-[10px] px-2 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-200 font-bold">
                  Starter-friendly
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Trabajo con alcance definido y entregas por fases para reducir riesgo y mantener velocidad.
              </p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {puntosValor.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-4"
                  >
                    <div className="flex items-center gap-2">
                      <div className="grid place-items-center size-8 rounded-xl border border-white/10 bg-white/5">
                        {p.icon}
                      </div>
                      <div className="text-sm font-bold text-slate-100">{p.title}</div>
                    </div>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* OFFER STACK */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-base font-extrabold text-slate-100">Ofertas típicas</h3>
              <p className="mt-2 text-sm text-slate-300">
                Paquetes pensados para pymes: claros, medibles y listos para operar.
              </p>

              <div className="mt-5 space-y-3">
                {ofertas.map((o) => (
                  <div
                    key={o.title}
                    className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-4"
                  >
                    <div className="flex items-center gap-2">
                      <div className="grid place-items-center size-8 rounded-xl border border-white/10 bg-white/5">
                        {o.icon}
                      </div>
                      <div className="text-sm font-bold text-slate-100">{o.title}</div>
                    </div>

                    <ul className="mt-3 space-y-1 text-sm text-slate-300">
                      {o.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-2 size-1.5 rounded-full bg-white/30" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* TRUST LINE */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-300">
                <span className="text-slate-100 font-semibold">Transparencia:</span> si algo requiere una fase adicional,
                lo planteo desde el inicio. Prefiero un producto sólido por etapas a prometer “todo” de una.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
