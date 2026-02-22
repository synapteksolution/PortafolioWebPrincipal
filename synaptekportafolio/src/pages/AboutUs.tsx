import { Sparkles, Target, ShieldCheck } from "lucide-react"

export default function SobreNosotros() {
  return (
    <main className="relative min-h-screen pb-20">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 size-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <section className="relative max-w-5xl mx-auto px-6 pt-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300 text-xs mb-6">
            <Sparkles size={14} className="text-cyan-400" />
            Nuestra Historia
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
            Impulsando el éxito <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">digital</span> con claridad
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            En Synaptek Solutions, no solo construimos software; creamos puentes entre tus ideas y el mercado. Nos enfocamos en lo que realmente importa: resultados medibles y tecnología escalable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">¿Quiénes somos?</h2>
            <p className="text-slate-400 leading-relaxed">
              Somos un equipo joven y dinámico especializado en desarrollo de productos digitales, análisis de datos y automatización inteligente. Nuestra misión es simple: ayudar a las empresas a crecer eliminando la fricción tecnológica.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Creemos en la transparencia absoluta, la entrega rápida y el diseño centrado en el usuario. Si buscas un socio que entienda tu negocio, estás en el lugar correcto.
            </p>

            <div className="pt-6 flex gap-4">
              <a href="/contacto" className="px-6 py-3 rounded-xl bg-white text-slate-950 font-bold hover:bg-cyan-50 transition-colors">
                Trabajemos juntos
              </a>
              <a href="/servicios" className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 transition-colors">
                Nuestros servicios
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-xl bg-cyan-400/10 text-cyan-400">
                  <Target size={20} />
                </div>
                <h3 className="font-bold text-white">Visión</h3>
              </div>
              <p className="text-sm text-slate-400">Ser el aliado tecnológico #1 para empresas que buscan innovación real y medible en tiempo récord.</p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-xl bg-emerald-400/10 text-emerald-400">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="font-bold text-white">Compromiso</h3>
              </div>
              <p className="text-sm text-slate-400">Sin sorpresas. Alcance definido, comunicación constante y resultados que puedes ver en tus KPIs.</p>
            </div>
          </div>
        </div>

        {/* Simplistic values */}
        <div className="border-t border-white/5 pt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-black text-white mb-1">24/7</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Soporte</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-white mb-1">100%</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Foco en MVP</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-white mb-1">+10</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Herramientas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-white mb-1">Fast</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Deployments</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
