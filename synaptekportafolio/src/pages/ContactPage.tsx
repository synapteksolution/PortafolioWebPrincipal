import { BookingSection } from '../components/BookingSection'

export default function ContactPage() {
  return (
    <div className="w-full pt-[80px]">
      <section className="cta-final py-24 relative overflow-hidden bg-[var(--ink-900)]" id="contacto">
        {/* BACKGROUND IMAGE CON OVERLAY */}
        <div 
          className="absolute inset-0 z-0 opacity-15 pointer-events-none"
          style={{ backgroundImage: 'url("/images/fondo.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
        ></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[var(--ink-900)] via-[var(--ink-900)]/90 to-[var(--ink-900)] pointer-events-none"></div>

        <div className="wrap max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="eyebrow text-[var(--moss)] font-bold tracking-[0.2em] uppercase text-xs">Hablemos de tu negocio</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-white leading-tight">Cuéntanos cómo trabajas hoy y diseñamos la solución adecuada</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">Selecciona el día y hora que mejor te convenga para una videollamada de 20 minutos. Analizamos tu operación y te proponemos un flujo eficiente sin compromiso.</p>
          </div>
          
          <BookingSection />
        </div>
      </section>
    </div>
  )
}
