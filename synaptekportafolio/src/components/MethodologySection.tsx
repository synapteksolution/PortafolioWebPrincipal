import { useLanguage } from '../i18n/LanguageContext'
import { 
  ClipboardList, 
  Timer, 
  Wallet, 
  Split, 
  ShieldCheck, 
  SlidersHorizontal, 
  LifeBuoy, 
  FileCode2,
  Rocket
} from 'lucide-react'

export function MethodologySection() {
  const { t } = useLanguage()
  
  const METHODOLOGY_STEPS = [
    {
      icon: ClipboardList,
      title: t.methodology.steps[0].title,
      desc: t.methodology.steps[0].desc
    },
    {
      icon: Timer,
      title: t.methodology.steps[1].title,
      desc: t.methodology.steps[1].desc
    },
    {
      icon: Wallet,
      title: t.methodology.steps[2].title,
      desc: t.methodology.steps[2].desc
    },
    {
      icon: Split,
      title: t.methodology.steps[3].title,
      desc: t.methodology.steps[3].desc
    },
    {
      icon: ShieldCheck,
      title: t.methodology.steps[4].title,
      desc: t.methodology.steps[4].desc
    },
    {
      icon: SlidersHorizontal,
      title: t.methodology.steps[5].title,
      desc: t.methodology.steps[5].desc
    },
    {
      icon: LifeBuoy,
      title: t.methodology.steps[6].title,
      desc: t.methodology.steps[6].desc
    },
    {
      icon: FileCode2,
      title: t.methodology.steps[7].title,
      desc: t.methodology.steps[7].desc
    }
  ]

  return (
    <section id="metodologia" className="scroll-mt-20 py-20 bg-[var(--ink-900)] border-t border-[var(--ink-800)] relative overflow-hidden">
      {/* BACKGROUND IMAGE CON OVERLAY */}
      <div 
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{ backgroundImage: 'url("/images/fondo.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[var(--ink-900)] via-[var(--ink-900)]/90 to-[var(--ink-900)] pointer-events-none"></div>

      <div className="wrap relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--ochre-light)]/20 bg-[var(--ochre-light)]/10 text-[var(--ochre-light)] text-xs uppercase tracking-widest font-bold">
              <Rocket size={14} />
              {t.methodology.eyebrow}
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight leading-tight">
            {t.methodology.headlinePrefix} <span className="text-[var(--ochre-light)]">{t.methodology.headlineEm}</span>
          </h2>
          <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
            {t.methodology.paragraph}
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
