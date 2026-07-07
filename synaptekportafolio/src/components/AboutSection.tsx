import { useLanguage } from '../i18n/LanguageContext'


export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="sobre-nosotros" className="py-24 relative overflow-hidden bg-[var(--ink-900)]">
      {/* BACKGROUND IMAGE CON OVERLAY */}
      <div 
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{ backgroundImage: 'url("/images/fondo.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[var(--ink-900)] via-[var(--ink-900)]/90 to-[var(--ink-900)] pointer-events-none"></div>

      <div className="wrap max-w-7xl mx-auto px-6 relative z-10">
        <div className="section-head text-center mb-16 mx-auto max-w-3xl">
          <span className="eyebrow text-[var(--ochre)] font-bold tracking-[0.2em] uppercase text-xs">{t.about.eyebrow}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white leading-tight">{t.about.headline}</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">{t.about.paragraph}</p>
        </div>
        <div className="problem-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="problem-card bg-[var(--ink-800)] p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-colors">
            <span className="num text-[var(--moss)] text-2xl font-bold mb-4 block">01</span>
            <h3 className="text-xl font-bold text-white mb-3">{t.about.cards[0].title}</h3>
            <p className="text-gray-400 leading-relaxed">{t.about.cards[0].desc}</p>
          </div>
          <div className="problem-card bg-[var(--ink-800)] p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-colors">
            <span className="num text-[var(--moss)] text-2xl font-bold mb-4 block">02</span>
            <h3 className="text-xl font-bold text-white mb-3">{t.about.cards[1].title}</h3>
            <p className="text-gray-400 leading-relaxed">{t.about.cards[1].desc}</p>
          </div>
          <div className="problem-card bg-[var(--ink-800)] p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
            <span className="num text-[var(--moss)] text-2xl font-bold mb-4 block">03</span>
            <h3 className="text-xl font-bold text-white mb-3">{t.about.cards[2].title}</h3>
            <p className="text-gray-400 leading-relaxed">{t.about.cards[2].desc}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
