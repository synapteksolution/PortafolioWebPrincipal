import { useLanguage } from '../i18n/LanguageContext'
import { Link } from 'react-router-dom'
import { Calendar } from 'lucide-react'
import { AboutSection } from '../components/AboutSection'
import { MethodologySection } from '../components/MethodologySection'

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="w-full">
      {/* ---------- HERO SECTION ---------- */}
      <section className="hero overflow-hidden relative">
        {/* BACKGROUND VIDEO WITH UX OVERLAY */}
        <div className="absolute inset-0 z-0 bg-[var(--ink-900)]">
          <video 
            src="/images/videoinicio.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
          />
          {/* Gradients for readability (UX) and blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink-900)]/90 via-[var(--ink-900)]/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink-900)]/50 via-transparent to-[var(--ink-900)]"></div>
        </div>

        <div className="wrap relative z-10 max-w-3xl">
          <div className="flex flex-col items-start text-left">
            <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
              {t.hero.headline1} <em>{t.hero.headlineEm}</em>
            </h1>
            <p className="lead animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              {t.hero.paragraph}
            </p>
            <div className="btn-row justify-start animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 flex flex-wrap gap-4 mt-8">
              <Link to="/contacto" className="btn-primary">{t.hero.ctaPrimary}</Link>
              <a 
                href="https://wa.me/message/XRT5KYQZT64ZP1" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold py-3 px-8 rounded-full hover:bg-[#20b858] transition-transform hover:scale-105 duration-300"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                Chatear
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SOBRE NOSOTROS SECTION ---------- */}
      <AboutSection />

      {/* ---------- METODOLOGÍA SECTION ---------- */}
      <MethodologySection />

      {/* ---------- EJEMPLO DE INVENTARIO SECTION ---------- */}
      <section className="py-24 bg-[var(--ink-50)] relative overflow-hidden">
        <div className="wrap max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-start text-left">
              <span className="eyebrow text-[var(--moss)] font-bold tracking-[0.2em] uppercase text-xs mb-4">Caso de Éxito</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--ink-900)] leading-tight">
                Sistemas de Inventario a Medida
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Este es un ejemplo de un panel de inventario diseñado por nosotros. Permite una visualización clara e inmediata del valor total en inventario, consumo mensual, alertas de reposición y costos promedios.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                A través de una interfaz limpia e intuitiva, puedes controlar el stock, origen y cobertura de cada artículo, facilitando la toma de decisiones y optimizando la gestión de recursos de tu empresa.
              </p>
              <ul className="space-y-3 text-[var(--ink-900)] font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--moss)]"></div>
                  <span>Monitorización de valor y costos en tiempo real</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--moss)]"></div>
                  <span>Identificación rápida de artículos con baja cobertura</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--moss)]"></div>
                  <span>Diseño enfocado en la agilidad y experiencia de usuario</span>
                </li>
              </ul>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--moss)]/30 to-[var(--ink-900)]/10 rounded-2xl transform rotate-2 scale-[1.03] transition-transform duration-500 group-hover:rotate-3 group-hover:scale-[1.05]"></div>
              <img 
                src="/leveston inventarios.png" 
                alt="Panel de Sistema de Inventario" 
                className="relative z-10 w-full h-auto rounded-xl shadow-2xl border border-gray-100 transition-transform duration-500 hover:-translate-y-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CONTACTO / CALENDARIO SECTION ---------- */}
      <section className="cta-final py-24 relative overflow-hidden bg-[var(--ink-900)]" id="contacto">
        {/* BACKGROUND IMAGE CON OVERLAY */}
        <div 
          className="absolute inset-0 z-0 opacity-15 pointer-events-none"
          style={{ backgroundImage: 'url("/images/fondo.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
        ></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[var(--ink-900)] via-[var(--ink-900)]/90 to-[var(--ink-900)] pointer-events-none"></div>

        <div className="wrap max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="eyebrow text-[var(--moss)] font-bold tracking-[0.2em] uppercase text-xs">{t.contactPage.eyebrow}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-white leading-tight">{t.contactPage.headline}</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">{t.contactPage.paragraph}</p>
          </div>
          
          <div className="flex justify-center mt-8">
            <Link to="/contacto" className="inline-flex items-center gap-2 bg-[var(--moss)] text-[var(--ink-900)] font-bold py-3 px-8 rounded-full hover:brightness-110 transition-transform hover:scale-105 duration-300">
              <Calendar className="w-5 h-5" />
              {t.nav.cta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
