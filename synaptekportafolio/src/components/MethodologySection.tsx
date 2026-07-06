import { 
  ClipboardList, 
  Timer, 
  Wallet, 
  Split, 
  ShieldCheck, 
  SlidersHorizontal, 
  LifeBuoy, 
  FileCode2 
} from 'lucide-react'

const METHODOLOGY_STEPS = [
  {
    icon: ClipboardList,
    title: 'Levantamiento de requerimientos',
    desc: 'Antes de cotizar, realizamos una entrevista inicial. Creamos un documento de requerimientos funcionales y no funcionales para evitar suposiciones y asegurar que la propuesta responda a tu operación real.'
  },
  {
    icon: Timer,
    title: 'Propuesta por sprints',
    desc: 'Dividimos el desarrollo en sprints cerrados con costo fijo. Cada uno incluye una fecha de entrega ideal y una fecha máxima (con margen de seguridad) para protegerte ante cualquier eventualidad.'
  },
  {
    icon: Wallet,
    title: 'Pago contra entrega',
    desc: 'Al cerrar cada sprint entregamos funcionalidad real; nunca pagas por trabajo que no has visto. Ofrecemos modalidad de pago por sprint o pago anticipado del 100% (con descuento).'
  },
  {
    icon: Split,
    title: 'Desarrollo en paralelo',
    desc: 'Si necesitas varias piezas (ej. landing page + sistema administrativo), los sprints de ambos avanzan simultáneamente. Esto reduce considerablemente el tiempo total de entrega.'
  },
  {
    icon: ShieldCheck,
    title: 'Último sprint gratuito',
    desc: 'Cada proyecto cierra con un sprint de pruebas sin costo (visualización, rendimiento, seguridad, ajustes por feedback). Es nuestra validación final antes de la entrega oficial.'
  },
  {
    icon: SlidersHorizontal,
    title: 'Alcance controlado',
    desc: 'Cualquier extra fuera del sprint se avisa previamente. Decidimos en conjunto si ampliamos el alcance y el presupuesto antes de acercarnos al límite de horas.'
  },
  {
    icon: LifeBuoy,
    title: 'Soporte post-entrega',
    desc: 'Incluimos 3 meses de soporte gratuito para ajustes menores. A partir del mes 4, puedes tomar un plan mensual de soporte adaptado a tus necesidades reales.'
  },
  {
    icon: FileCode2,
    title: 'Propiedad intelectual',
    desc: 'El código te pertenece y se entrega al 100% una vez completado el pago total del proyecto. Todo es transparente desde la propuesta inicial para evitar sorpresas.'
  }
]

export function MethodologySection() {
  return (
    <section id="metodologia" className="scroll-mt-20 py-20 bg-[var(--ink-900)] border-t border-[var(--ink-800)] relative overflow-hidden">
      {/* BACKGROUND IMAGE CON OVERLAY */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("/images/fondo.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[var(--ink-900)] via-transparent to-[var(--ink-900)] pointer-events-none"></div>

      <div className="wrap relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="eyebrow text-[var(--moss)]">Nuestra Metodología</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-[var(--paper)]">
            Transparencia y resultados reales
          </h2>
          <p className="text-gray-400">
            Nuestras reglas de negocio están diseñadas para proteger tu inversión. No cobramos por suposiciones ni te obligamos a pagar por trabajo que no has visto funcionando.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METHODOLOGY_STEPS.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-[var(--ink-900)] border border-white/20 hover:border-white/50 transition-colors duration-300 flex flex-col relative overflow-hidden group"
            >
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <span className="text-9xl font-black">{idx + 1}</span>
              </div>
              
              <div className="mb-6 flex items-center justify-between relative z-10">
                <div className="p-3 bg-[var(--moss)]/10 text-[var(--moss)] rounded-lg">
                  <step.icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-black text-gray-700">0{idx + 1}</span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 relative z-10 leading-tight">
                {step.title}
              </h3>
              
              <p className="text-sm text-gray-400 relative z-10 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
