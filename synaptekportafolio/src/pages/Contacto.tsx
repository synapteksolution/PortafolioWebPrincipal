import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  Send,
  MessageSquare,
  Linkedin,
  Github,
  ExternalLink,
} from "lucide-react"

const infoContacto = [
  {
    icon: <Mail size={18} className="text-cyan-300" />,
    label: "Email",
    value: "contacto@synaptek.dev",
    href: "mailto:contacto@synaptek.dev",
  },
  {
    icon: <Phone size={18} className="text-emerald-300" />,
    label: "Teléfono",
    value: "+57 300 000 0000",
    href: "tel:+573000000000",
  },
  {
    icon: <MapPin size={18} className="text-amber-300" />,
    label: "Ubicación",
    value: "Colombia (remoto)",
    href: null,
  },
  {
    icon: <Clock size={18} className="text-fuchsia-300" />,
    label: "Disponibilidad",
    value: "Lun – Vie · 9:00 – 18:00",
    href: null,
  },
]

const redesSociales = [
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/",
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    href: "https://github.com/",
  },
]

export default function Contacto() {
  return (
    <section
      id="contacto"
      className={[
        "py-20 px-6 rounded-3xl border border-white/10",
        "bg-[radial-gradient(1200px_circle_at_20%_0%,rgba(168,85,247,.22),transparent_45%),radial-gradient(900px_circle_at_80%_100%,rgba(34,211,238,.16),transparent_45%),linear-gradient(180deg,rgba(2,6,23,.92),rgba(15,23,42,.78))]",
      ].join(" ")}
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-200 text-xs">
            <MessageSquare size={14} className="text-slate-200" />
            Hablemos de tu proyecto
          </div>

          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-100">
            ¿Tienes una idea? Conversemos
          </h2>

          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Cuéntame qué necesitas y te respondo con una propuesta clara:
            alcance, tiempos y primer entregable.
          </p>
        </div>

        {/* GRID: Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* LEFT: Info panel (2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Section (New UX improvement) */}
            <div className="rounded-3xl overflow-hidden border border-white/10 aspect-video lg:aspect-square relative group">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                alt="Workplace Collaboration"
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-6">
                <p className="text-white text-sm font-semibold italic">"Construyendo el futuro digital de tu empresa, paso a paso."</p>
              </div>
            </div>

            {/* Status badge */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-6 shadow-xl">

              <div className="flex items-center gap-3 mb-5">
                <div className="relative">
                  <div className="grid place-items-center size-12 rounded-2xl border border-white/10 bg-white/5">
                    <Sparkles size={20} className="text-emerald-300" />
                  </div>
                  <span className="absolute -top-1 -right-1 size-3.5 rounded-full bg-emerald-400 border-2 border-slate-900 animate-pulse" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-100">
                    Disponible para proyectos
                  </div>
                  <div className="text-xs text-emerald-300">
                    Respuesta en menos de 24h
                  </div>
                </div>
              </div>

              {/* Contact info cards */}
              <div className="space-y-3">
                {infoContacto.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
                  >
                    <div className="grid place-items-center size-9 rounded-lg border border-white/10 bg-white/5">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-slate-400">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-semibold text-slate-100 hover:text-cyan-300 transition"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm font-semibold text-slate-100">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-sm font-extrabold text-slate-100 mb-4">
                Encuéntrame en
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {redesSociales.map((red) => (
                  <a
                    key={red.label}
                    href={red.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10 hover:border-white/20"
                  >
                    {red.icon}
                    {red.label}
                    <ExternalLink size={12} className="ml-auto text-slate-400" />
                  </a>
                ))}
              </div>
            </div>

            {/* Trust note */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-300">
                <span className="text-slate-100 font-semibold">Sin compromiso:</span>{" "}
                la primera conversación es para entender tu necesidad. Solo avanzamos
                si tiene sentido para ambos.
              </p>
            </div>
          </div>

          {/* RIGHT: Form (3 cols) */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="grid place-items-center size-10 rounded-xl border border-white/10 bg-white/5">
                  <Send size={18} className="text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-100">
                    Envíame un mensaje
                  </h3>
                  <p className="text-xs text-slate-400">
                    Completa el formulario y te contacto pronto
                  </p>
                </div>
              </div>

              <form className="space-y-5">
                {/* Row: Nombres + Apellidos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="nombres"
                      className="block text-xs font-bold text-slate-200 mb-1.5"
                    >
                      Nombres
                    </label>
                    <input
                      id="nombres"
                      type="text"
                      placeholder="Tu nombre"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="apellidos"
                      className="block text-xs font-bold text-slate-200 mb-1.5"
                    >
                      Apellidos
                    </label>
                    <input
                      id="apellidos"
                      type="text"
                      placeholder="Tu apellido"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold text-slate-200 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="tu@correo.com"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition"
                  />
                </div>

                {/* Row: Empresa + Teléfono */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="empresa"
                      className="block text-xs font-bold text-slate-200 mb-1.5"
                    >
                      Empresa / Negocio
                    </label>
                    <input
                      id="empresa"
                      type="text"
                      placeholder="Mi empresa"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-xs font-bold text-slate-200 mb-1.5"
                    >
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      placeholder="+57 305 3991456"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition"
                    />
                  </div>
                </div>

                {/* Servicio de interés */}
                <div>
                  <label
                    htmlFor="servicio"
                    className="block text-xs font-bold text-slate-200 mb-1.5"
                  >
                    ¿Qué servicio te interesa?
                  </label>
                  <select
                    id="servicio"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-100 outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition appearance-none"
                  >
                    <option value="" className="bg-slate-900">
                      Selecciona una opción
                    </option>
                    <option value="web" className="bg-slate-900">
                      Desarrollo Web (MVP / Landing)
                    </option>
                    <option value="software" className="bg-slate-900">
                      Software a medida
                    </option>
                    <option value="data" className="bg-slate-900">
                      Data & Dashboards
                    </option>
                    <option value="chatbots" className="bg-slate-900">
                      Chatbots / IA
                    </option>
                    <option value="integraciones" className="bg-slate-900">
                      Integraciones / APIs
                    </option>
                    <option value="otro" className="bg-slate-900">
                      Otro
                    </option>
                  </select>
                </div>

                {/* Descripción */}
                <div>
                  <label
                    htmlFor="descripcion"
                    className="block text-xs font-bold text-slate-200 mb-1.5"
                  >
                    Cuéntame sobre tu proyecto
                  </label>
                  <textarea
                    id="descripcion"
                    rows={4}
                    placeholder="Describe brevemente qué necesitas: tipo de solución, problema a resolver, contexto del negocio…"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-extrabold bg-white text-slate-900 hover:bg-white/90 transition cursor-pointer"
                >
                  <Send size={16} />
                  Enviar propuesta
                </button>

                <p className="text-center text-[11px] text-slate-500">
                  Al enviar aceptas que te contacte por email para discutir tu proyecto.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
