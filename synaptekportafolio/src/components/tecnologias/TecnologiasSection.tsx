import {
  Zap,
  ShieldCheck,
  Cpu,
  Workflow,
  CheckCircle2,
  Rocket,
  Layout
} from "lucide-react"

export default function TecnologiasSection() {
  const garantias = [
    {
      titulo: "Velocidad y Respuesta",
      desc: "Usamos tecnologías modernas que cargan al instante, mejorando la experiencia de tus clientes y el posicionamiento en buscadores.",
      icon: <Zap className="text-amber-400" />,
      herramientas: ["React", "Next.js", "Vite"]
    },
    {
      titulo: "Seguridad y Estabilidad",
      desc: "Tus datos y los de tus clientes están protegidos con infraestructuras robustas y bases de datos de nivel bancario.",
      icon: <ShieldCheck className="text-emerald-400" />,
      herramientas: ["PostgreSQL", "Supabase", "Auth Segura"]
    },
    {
      titulo: "Automatización Inteligente",
      desc: "Conectamos tu negocio con las mejores herramientas de IA para que ahorres tiempo y reduzcas errores humanos.",
      icon: <Workflow className="text-purple-400" />,
      herramientas: ["n8n", "OpenAI", "Webhooks"]
    },
    {
      titulo: "Diseño Adaptable",
      desc: "Tu plataforma se verá y funcionará perfectamente en móviles, tablets y computadoras, sin excepciones.",
      icon: <Layout className="text-cyan-400" />,
      herramientas: ["TailwindCSS", "Framer Motion"]
    }
  ]

  return (
    <section
      id="garantia"
      className="relative max-w-6xl mx-auto"
    >
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300 text-xs mb-6">
          <Cpu size={14} className="text-cyan-400" />
          Nuestras Herramientas
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
          Tecnología de punta, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">resultados reales</span>
        </h2>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          Seleccionamos cuidadosamente cada herramienta no por moda, sino para garantizar que tu negocio sea **rápido, seguro e imparable**.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {garantias.map((g, i) => (
          <div
            key={i}
            className="group p-8 rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-sm hover:border-white/20 transition-all duration-500"
          >
            <div className="size-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              {g.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{g.titulo}</h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              {g.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {g.herramientas.map((h, j) => (
                <div
                  key={j}
                  className="px-3 py-1 rounded-lg border border-white/5 bg-white/5 text-[10px] font-bold text-slate-500 uppercase tracking-widest"
                >
                  {h}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 rounded-3xl border border-dashed border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-cyan-400/10 text-cyan-400">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white">¿Por qué esto te importa?</h4>
            <p className="text-sm text-slate-500">Un stack moderno significa que tu sitio durará años sin volverse obsoleto.</p>
          </div>
        </div>
        <a href="/contacto" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-950 font-bold hover:bg-cyan-50 transition-colors">
          <Rocket size={18} />
          Impulsa tu idea
        </a>
      </div>
    </section>
  )
}
