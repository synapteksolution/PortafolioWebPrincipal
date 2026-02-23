import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import {
  Chrome,
  Globe,
  Puzzle,
  Monitor,
  Hammer,
  Sparkles,
  Filter,
  Rocket,
  CheckCircle2,
} from "lucide-react"

type Nivel = "Starter"
type Area = "Desarrollo Web" | "Aplicativos Web" | "Automatizaciones" | "Software"

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
  "Aplicativos Web",
  "Automatizaciones",
  "Software",
]

const badgeByArea: Record<Area, string> = {
  "Desarrollo Web": "bg-cyan-500/10 text-cyan-200 border-cyan-500/25",
  "Aplicativos Web": "bg-violet-500/10 text-violet-200 border-violet-500/25",
  Automatizaciones: "bg-emerald-500/10 text-emerald-200 border-emerald-500/25",
  Software: "bg-sky-500/10 text-sky-200 border-sky-500/25",
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
        "px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300",
        "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20",
        active ? "bg-white/20 border-cyan-400/50 text-white ring-1 ring-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]" : "",
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
        "bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-sm",
        "transition-all duration-500",
        "hover:shadow-[0_0_0_1px_rgba(255,255,255,.10),0_0_50px_rgba(34,211,238,.15)]",
        "hover:-translate-y-1",
      ].join(" ")}
    >
      {/* glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(800px_circle_at_20%_0%,rgba(168,85,247,.12),transparent_40%),radial-gradient(600px_circle_at_80%_100%,rgba(34,211,238,.08),transparent_40%)]" />

      <div className="relative p-7">
        {/* top row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="grid place-items-center size-14 rounded-2xl border border-white/10 bg-white/5 shadow-inner">
              <div className="flex items-center gap-1.5 text-3xl text-slate-100">
                {s.iconos}
              </div>
            </div>

            <div className="min-w-0">
              <h3 className="text-lg font-bold tracking-tight text-white leading-tight">
                {s.titulo}
              </h3>
              <p className="mt-1.5 text-xs text-slate-400 leading-relaxed max-w-[200px]">
                {s.descripcion}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2 shrink-0">
            <span
              className={[
                "text-[11px] px-2.5 py-0.5 rounded-full border font-bold tracking-wider uppercase",
                badgeByArea[s.area],
              ].join(" ")}
            >
              {s.area}
            </span>
          </div>
        </div>

        {/* content grid */}
        <div className="mt-6 space-y-6">
          <div>
            <div className="text-[11px] font-bold text-slate-400 mb-3 flex items-center gap-2 uppercase tracking-widest">
              <CheckCircle2 size={13} className="text-cyan-400" />
              Entregables
            </div>

            <ul className="grid grid-cols-1 gap-2 text-sm text-slate-300">
              {s.entregables.map((e) => (
                <li key={e} className="flex items-start gap-2.5">
                  <span className="mt-1.5 size-1.5 rounded-full bg-cyan-400/40" />
                  <span className="leading-tight">{e}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-white/5">
            <div className="text-[11px] font-bold text-slate-400 mb-2 flex items-center gap-2 uppercase tracking-widest">
              <Sparkles size={13} className="text-amber-400 shadow-sm" />
              Ideal para
            </div>
            <p className="text-sm text-slate-300 italic leading-relaxed">
              "{s.recomendadoPara}"
            </p>
          </div>
        </div>

        {/* ctas */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            to="/contacto"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold
                       bg-white text-slate-900 hover:bg-cyan-50 transition-all duration-300 shadow-lg shadow-white/5"
          >
            <Rocket size={16} />
            Solicitar
          </Link>
          <Link
            to="/soluciones"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold
                       border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            Portafolio
          </Link>
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
        id: "landing-pages",
        titulo: "Landing Pages (Alto Impacto)",
        descripcion:
          "Convertimos visitantes en clientes con diseños rápidos, modernos y optimizados para móviles.",
        area: "Desarrollo Web",
        nivel: "Starter",
        iconos: <Chrome size={22} />,
        entregables: ["Diseño Responsive", "CTA Optimizado", "Carga en < 2s", "Formulario de Leads"],
        recomendadoPara: "Lanzamiento de productos, campañas de marketing y captación rápida de clientes.",
      },
      {
        id: "web-pages",
        titulo: "Páginas Web Corporativas",
        descripcion:
          "Presencia digital sólida y profesional para tu negocio. Escalable y autogestionable.",
        area: "Desarrollo Web",
        nivel: "Starter",
        iconos: <Globe size={22} />,
        entregables: ["Multi-sección", "SEO Básico", "Panel Administrativo", "Blog / Noticias"],
        recomendadoPara: "Empresas que buscan credibilidad y centralizar su información en un solo lugar.",
      },
      {
        id: "web-apps",
        titulo: "Aplicativos Web (SaaS / MVP)",
        descripcion:
          "Soluciones complejas con lógica de negocio personalizada, bases de datos y usuarios.",
        area: "Aplicativos Web",
        nivel: "Starter",
        iconos: <Monitor size={22} />,
        entregables: ["Autenticación", "Dashboard de Usuario", "Base de Datos", "API RESTful"],
        recomendadoPara: "Nuevas ideas de negocio (SaaS) o herramientas internas para procesos específicos.",
      },
      {
        id: "n8n-automations",
        titulo: "Automatizaciones con n8n",
        descripcion:
          "Conectamos tus herramientas favoritas y automatizamos tareas repetitivas sin errores.",
        area: "Automatizaciones",
        nivel: "Starter",
        iconos: <Puzzle size={22} />,
        entregables: ["Workflows en n8n", "Integración con APIs", "Webhooks", "Notificaciones"],
        recomendadoPara: "Negocios que quieren ahorrar horas de trabajo manual conectando su CRM, email y RRSS.",
      },
      {
        id: "software-herramientas",
        titulo: "Herramientas de Software",
        descripcion:
          "Scripts y utilidades a medida para resolver problemas técnicos o de datos recurrentes.",
        area: "Software",
        nivel: "Starter",
        iconos: <Hammer size={22} />,
        entregables: ["Script Ejecutable", "Documentación Técnica", "Fácil Integración"],
        recomendadoPara: "Resolución de tareas técnicas específicas o procesamiento de archivos masivos.",
      },
    ],
    [],
  )

  const serviciosFiltrados = useMemo(() => {
    if (filtro === "Todos") return servicios
    return servicios.filter((s: Servicio) => s.area === filtro)
  }, [filtro, servicios])


  return (
    <section
      id="servicios"
      className={[
        "py-16 px-6 sm:px-10 lg:px-16 rounded-[40px] border border-white/10 overflow-hidden",
        "bg-[radial-gradient(1500px_circle_at_0%_0%,rgba(168,85,247,.15),transparent_50%),radial-gradient(1000px_circle_at_100%_100%,rgba(34,211,238,.12),transparent_50%),linear-gradient(180deg,rgba(2,6,23,0.95),rgba(15,23,42,0.85))]",
        "backdrop-blur-xl relative",
      ].join(" ")}
    >
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=75&w=800&auto=format&fit=crop"
          alt="Office"
          loading="lazy"
          className="w-full h-full object-cover mix-blend-overlay grayscale"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* header */}
        <div className="flex flex-col lg:flex-row gap-10 items-start lg:items-center justify-between mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-6">
              <Filter size={14} />
              Soluciones Digitales
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6 leading-[1.1]">
              Servicios que impulsan <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">tu negocio</span>
            </h2>

            <p className="text-lg text-slate-400 leading-relaxed font-medium">
              Especializado en transformar ideas en productos digitales reales.
              Enfoque en velocidad, calidad y automatización para optimizar tus procesos.
            </p>
          </div>

          {/* mini métricas */}
          <div className="flex flex-wrap gap-4 w-full lg:w-auto">
            <div className="flex-1 lg:flex-none min-w-[120px] rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Total</div>
              <div className="text-3xl font-black text-white">{servicios.length}</div>
            </div>
            <div className="flex-2 lg:flex-none min-w-[160px] rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6 backdrop-blur-md text-center">
              <div className="text-[10px] font-bold text-cyan-500/60 uppercase tracking-widest mb-1">Enfoque</div>
              <div className="text-2xl font-black text-cyan-300 uppercase tracking-tighter">Resultados</div>
            </div>
          </div>
        </div>

        {/* filtros */}
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between mb-12 py-6 border-y border-white/5">
          <div className="flex flex-wrap gap-3">
            {AREAS.map((a) => (
              <Chip key={a} active={filtro === a} onClick={() => setFiltro(a)}>
                {a}
              </Chip>
            ))}
          </div>

          <div className="text-slate-400 text-sm font-medium">
            Mostrando <span className="text-white font-black">{serviciosFiltrados.length}</span> servicios especializados
          </div>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviciosFiltrados.map((s) => (
            <CardServicio key={s.id} s={s} />
          ))}
        </div>

        {/* trust section / image */}
        <div className="mt-20 rounded-[32px] overflow-hidden border border-white/10 bg-gradient-to-r from-white/5 to-transparent relative group">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-10 lg:p-14">
              <div className="inline-flex items-center gap-2 text-cyan-400 font-bold text-sm mb-4">
                <Sparkles size={16} />
                Confianza y Calidad
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Metodología de trabajo enfocada en valor</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Cada proyecto se gestiona con hitos claros, comunicación constante y un enfoque obsesivo en la experiencia final del usuario. No solo construimos código, construimos soluciones.
              </p>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 text-white font-bold hover:text-cyan-400 transition-colors"
              >
                Saber más sobre el proceso <Rocket size={16} />
              </Link>
            </div>
            <div className="h-64 lg:h-full min-h-[300px] relative">
              <img
                src="https://images.unsplash.com/photo-1522071823991-b515d267320d?q=75&w=800&auto=format&fit=crop"
                alt="Collaboration"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent lg:hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
