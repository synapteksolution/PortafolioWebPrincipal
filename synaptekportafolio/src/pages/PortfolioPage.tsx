export default function PortfolioPage() {
  const deliverables = [
    {
      src: '/images/leveston/PAGINALEVESTON+.png',
      alt: 'Página web de Le Veston desarrollada por Synaptek',
      title: 'Diseño y Desarrollo Web',
      description: 'Página web premium con catálogo de colecciones, sistema de reservas y diseño responsivo adaptado a la identidad de marca de la sastrería.',
    },
    {
      src: '/leveston inventarios.png',
      alt: 'Sistema de inventario de Le Veston desarrollado por Synaptek',
      title: 'Sistema de Inventario',
      description: 'Panel de control de inventario con monitorización de valor en stock, consumo mensual, alertas de reposición y costos promedio por metro de tela.',
    },
    {
      src: '/images/sistemasadministrativos.png',
      alt: 'Sistema administrativo de Le Veston desarrollado por Synaptek',
      title: 'Sistema Administrativo',
      description: 'Plataforma administrativa completa con gestión de órdenes, control de producción y seguimiento de clientes para la operación diaria de la sastrería.',
    },
  ]

  return (
    <div className="w-full pt-[80px]">
      <section id="portafolio" className="py-24">
        <div className="wrap max-w-7xl mx-auto px-6">
          <div className="section-head mb-16">
            <span className="eyebrow text-[var(--ochre)] font-bold tracking-[0.2em] uppercase text-xs">Portafolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white leading-tight">Casos de éxito y sistemas en producción</h2>
          </div>

          {/* Testimonial */}
          <div className="testi bg-[#1a1c2d] p-8 md:p-12 rounded-2xl border border-gray-800 mb-16">
            <p className="quote text-xl md:text-2xl text-gray-300 italic mb-8">"Napsi Tek nos permitió unificar la agenda de pruebas de trajes de novio con el control de inventario de paños italianos importados y calcular el costo exacto de mano de obra y materiales por prenda. El ajuste operativo perfecto."</p>
            <div className="testi-who flex items-center gap-4">
              <div className="testi-avatar w-12 h-12 bg-[var(--ochre)] rounded-full flex items-center justify-center text-white font-bold text-lg">LV</div>
              <div>
                <div className="name text-white font-bold text-lg">Le Veston</div>
                <div className="role text-gray-400 text-sm">
                  Sastrería Premium • <a href="https://le-veston.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--ochre-light)] transition-colors">le-veston.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Deliverables Grid */}
          <div className="space-y-12">
            {deliverables.map((item, index) => (
              <div
                key={index}
                className="bg-[#1a1c2d] rounded-2xl border border-gray-800 overflow-hidden group hover:border-[var(--ochre)]/40 transition-colors duration-500"
              >
                {/* Image — full width, no cropping */}
                <div className="w-full overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>

                {/* Label */}
                <div className="p-6 md:p-8 flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--ochre)]/15 text-[var(--ochre)] font-bold text-sm shrink-0 mt-0.5">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
