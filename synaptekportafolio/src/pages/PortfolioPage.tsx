import { PortfolioCarousel } from '../components/PortfolioCarousel'

export default function PortfolioPage() {
  return (
    <div className="w-full pt-[80px]">
      <section id="portafolio" className="py-24">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="section-head mb-16">
            <span className="eyebrow text-[var(--ochre)] font-bold tracking-[0.2em] uppercase text-xs">Portafolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white leading-tight">Casos de éxito y sistemas en producción</h2>
          </div>
          <div className="testi bg-[#1a1c2d] p-8 md:p-12 rounded-2xl border border-gray-800">
            <p className="quote text-xl md:text-2xl text-gray-300 italic mb-8">"Napsi Tek nos permitió unificar la agenda de pruebas de trajes de novio con el control de inventario de paños italianos importados y calcular el costo exacto de mano de obra y materiales por prenda. El ajuste operativo perfecto."</p>
            <div className="testi-who flex items-center gap-4 mb-12">
              <div className="testi-avatar w-12 h-12 bg-[var(--ochre)] rounded-full flex items-center justify-center text-white font-bold text-lg">LV</div>
              <div>
                <div className="name text-white font-bold text-lg">Le Veston</div>
                <div className="role text-gray-400 text-sm">
                  Sastrería Premium • <a href="https://le-veston.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--ochre-light)] transition-colors">le-veston.com</a> • <a href="/costeo/index.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--ochre-light)] transition-colors">Ver sistema de costeo</a>
                </div>
              </div>
            </div>
            
            <PortfolioCarousel />
          </div>
        </div>
      </section>
    </div>
  )
}
