// src/components/Servicios.tsx
import { useMemo, useState } from "react"
import {
  DiChrome,
  DiFirefox,
  DiOpera,
} from "react-icons/di"
import { FaPuzzlePiece, FaDesktop, FaHammer, FaComments } from "react-icons/fa"
import { LuChartBar } from "react-icons/lu"
import { GiRobotAntennas } from "react-icons/gi"
import { Sparkles, Filter, Rocket, CheckCircle2 } from "lucide-react"

type Nivel = "Starter"
type Area = "Desarrollo Web" | "Data Scientist" | "IA/Chatbots" | "Integraciones" | "Software"

type Servicio = {
  id: string
  titulo: string
  descripcion: string
  area: Area
  nivel: Nivel
  iconos: React.ReactNode
  entregables: string[]
  recomendadoPara: string
}

const AREAS: Array<Area | "Todos"> = [
  "Todos",
  "Desarrollo Web",
  "Software",
  "Integraciones",
  "Data Scientist",
  "IA/Chatbots",
]

const badgeByArea: Record<Area, string> = {
  "Desarrollo Web": "bg-cyan-500/10 text-cyan-200 border-cyan-500/25",
  Software: "bg-violet-500/10 text-violet-200 border-violet-500/25",
  Integraciones: "bg-sky-500/10 text-sky-200 border-sky-500/25",
  "Data Scientist": "bg-amber-500/10 text-amber-200 border-amber-500/25",
  "IA/Chatbots": "bg-fuchsia-500/10 text-fuchsia-200 border-fuchsia-500/25",
}

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
      type="button"
      onClick={onClick}
      className={[
        "px-3 py-1.5 rounded-full text-xs font-semibold border transition",
        "bg-white/5 border-white/10 text-slate-100 hover:bg-white/10",
        active ? "bg-white/10 border-white/25 ring-1 ring-white/20" : "",
      ].join(" ")}
    >
      {children}
    </button>
  )
}

function CardServicio({ s }: { s: Servicio }) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-2xl border border-white/10",
        "bg-gradient-to-b from-white/[0.07] to-white/[0.03]",
        "transition-all",
        "hover:shadow-[0_0_0_1px_rgba(255,255,255,.10),0_0_44px_rgba(34,211,238,.10)]",
      ].join(" ")}
    >
      {/* glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(1100px_circle_at_20%_0%,rgba(168,85,247,.14),transparent_45%),radial-gradient(900px_circle_at_80%_100%,rgba(34,211,238,.10),transparent_45%)]" />

      <div className="relative p-6">
        {/* top row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="grid place-items-center size-12 rounded-2xl border border-white/10 bg-white/5">
              <div className="flex items-center gap-1 text-2xl text-slate-100">
                {s.iconos}
              </div>
            </div>

            <div className="min-w-0">
              <h3 className="text-base font-extrabold tracking-tight text-slate-100">
                {s.titulo}
              </h3>
              <p className="mt-1 text-xs text-slate-300">
                {s.descripcion}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2 shrink-0">
            <span
              className={[
                "text-[10px] px-2 py-0.5 rounded-full border",
                badgeByArea[s.area],
              ].join(" ")}
            >
              {s.area}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full border bg-emerald-500/10 text-emerald-200 border-emerald-500/25">
              {s.nivel}
            </span>
          </div>
        </div>

        {/* entregables */}
        <div className="mt-4">
          <div className="text-[11px] font-bold text-slate-200 mb-2 flex items-center gap-2">
            <CheckCircle2 size={14} className="text-slate-200" />
            Entregables
          </div>

          <ul className="space-y-1.5 text-sm text-slate-300">
            {s.entregables.map((e) => (
              <li key={e} className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 rounded-full bg-white/30" />
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* recomendado para */}
        <div className="mt-4">
          <div className="text-[11px] font-bold text-slate-200 mb-1 flex items-center gap-2">
            <Sparkles size={14} className="text-slate-200" />
            Recomendado para
          </div>
          <p className="text-sm text-slate-300">
            {s.recomendadoPara}
          </p>
        </div>

        {/* ctas */}
        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-bold
                       bg-white text-slate-900 hover:bg-white/90 transition"
          >
            <Rocket size={16} />
            Solicitar propuesta
          </a>
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-bold
                       border border-white/15 bg-white/5 text-slate-100 hover:bg-white/10 transition"
          >
            Ver proyectos
          </a>
        </div>

        {/* nota sutil para “recién egresado” */}
        <div className="mt-4 text-[11px] text-slate-400">
          Entregas claras, alcance definido y comunicación directa.
        </div>
      </div>
    </div>
  )
}

export default function Servicios() {
  const [filtro, setFiltro] = useState<Area | "Todos">("Todos")

  const servicios: Servicio[] = useMemo(
    () => [
      {
        id: "web-mvp",
        titulo: "Desarrollo Web (MVP / Landing / Fullstack básico)",
        descripcion:
          "Primera versión lista para mostrar y vender: landing + formulario + panel simple si aplica.",
        area: "Desarrollo Web",
        nivel: "Starter",
        iconos: (
          <>
            <DiChrome />
            <DiFirefox />
            <DiOpera />
          </>
        ),
        entregables: ["Landing/MVP", "API básica (si aplica)", "Deploy y documentación mínima"],
        recomendadoPara: "Emprendimientos y pymes que necesitan salir rápido con una solución funcional.",
      },
      {
        id: "software-medida",
        titulo: "Software a medida (web o escritorio ligero)",
        descripcion:
          "Herramientas pequeñas y claras: control de procesos, módulos internos, formularios y reportes.",
        area: "Software",
        nivel: "Starter",
        iconos: <FaHammer />,
        entregables: ["Funcionalidades acordadas", "Persistencia de datos", "Manual de uso breve"],
        recomendadoPara: "Negocios que hoy lo gestionan en Excel y quieren una herramienta propia.",
      },
      {
        id: "integraciones",
        titulo: "Integraciones (APIs / Webhooks)",
        descripcion:
          "Conecto tu app con servicios externos: APIs, autenticación, envío de datos y automatizaciones.",
        area: "Integraciones",
        nivel: "Starter",
        iconos: <FaPuzzlePiece />,
        entregables: ["Integración documentada", "Pruebas básicas", "Manejo de errores y logs"],
        recomendadoPara: "Productos que requieren conectar formularios, CRM, pagos o servicios externos.",
      },
      {
        id: "ds-dashboards",
        titulo: "Data Scientist (Análisis + Dashboards)",
        descripcion:
          "Organizo datos, defino KPIs y creo dashboards para decisiones basadas en información.",
        area: "Data Scientist",
        nivel: "Starter",
        iconos: <LuChartBar />,
        entregables: ["KPIs + diccionario", "Consultas y limpieza básica", "Dashboard y guía de lectura"],
        recomendadoPara: "Equipos que necesitan visibilidad: ventas, costos, operaciones y seguimiento.",
      },
      {
        id: "chatbots",
        titulo: "Chatbots (GenIA + flujos de atención)",
        descripcion:
          "Bots para FAQs, captación de leads y automatización de tareas, conectados a tu información.",
        area: "IA/Chatbots",
        nivel: "Starter",
        iconos: (
          <>
            <GiRobotAntennas />
            <FaComments />
          </>
        ),
        entregables: ["Flujos e intenciones", "Conexión a FAQs/fuentes", "Pruebas y mejora inicial"],
        recomendadoPara: "Negocios que buscan responder más rápido y reducir tareas repetitivas.",
      },
      {
        id: "acompanamiento",
        titulo: "Acompañamiento técnico (roadmap y arquitectura)",
        descripcion:
          "Aterrizo el alcance del producto: stack, módulos, tiempos y próximos pasos realistas.",
        area: "Desarrollo Web",
        nivel: "Starter",
        iconos: <FaDesktop />,
        entregables: ["Roadmap", "Recomendaciones técnicas", "Plan de implementación"],
        recomendadoPara: "Equipos que necesitan claridad antes de construir o escalar su solución.",
      },
    ],
    [],
  )

  const serviciosFiltrados = useMemo(() => {
    if (filtro === "Todos") return servicios
    return servicios.filter((s) => s.area === filtro)
  }, [filtro, servicios])

  return (
    <section
      id="servicios"
      className={[
        "py-20 px-6 rounded-3xl border border-white/10",
        "bg-[radial-gradient(1200px_circle_at_20%_0%,rgba(168,85,247,.22),transparent_45%),radial-gradient(900px_circle_at_80%_100%,rgba(34,211,238,.16),transparent_45%),linear-gradient(180deg,rgba(2,6,23,.92),rgba(15,23,42,.78))]",
      ].join(" ")}
    >
      <div className="max-w-6xl mx-auto">
        {/* header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-200 text-xs">
              <Filter size={14} className="text-slate-200" />
              Servicios (perfil Starter)
            </div>

            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-100">
              Servicios
            </h2>

            <p className="mt-2 text-slate-300 max-w-xl">
              Como recien egresado, ofrezco entregas claras y alcance definido. Mi enfoque es construir
              productos funcionales (web/software) y sumar valor con datos e IA cuando aplica.
            </p>
          </div>

          {/* mini métricas */}
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-[10px] text-slate-300">Servicios</div>
              <div className="text-lg font-extrabold text-slate-100">{servicios.length}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-[10px] text-slate-300">Core</div>
              <div className="text-lg font-extrabold text-emerald-200">
                {servicios.filter((s) => ["Desarrollo Web", "Software"].includes(s.area)).length}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-[10px] text-slate-300">Filtros</div>
              <div className="text-lg font-extrabold text-slate-100">{AREAS.length - 1}</div>
            </div>
          </div>
        </div>

        {/* filtros */}
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {AREAS.map((a) => (
              <Chip key={a} active={filtro === a} onClick={() => setFiltro(a)}>
                {a}
              </Chip>
            ))}
          </div>

          <div className="text-slate-300 text-xs">
            Mostrando <span className="text-slate-100 font-bold">{serviciosFiltrados.length}</span> servicios
          </div>
        </div>

        {/* grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviciosFiltrados.map((s) => (
            <CardServicio key={s.id} s={s} />
          ))}
        </div>

        {/* footer / note */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300">
          <p>
            Nota: cada servicio se trabaja con alcance definido (MVP). Si necesitas algo más grande,
            se planifica por fases para mantener tiempos y calidad.
          </p>
        </div>
      </div>
    </section>
  )
}
