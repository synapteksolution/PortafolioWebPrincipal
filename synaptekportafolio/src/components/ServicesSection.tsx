import { ShoppingBag, CreditCard, Zap, TrendingUp, BarChart3, PackageSearch, ShieldCheck, ExternalLink } from 'lucide-react'

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-[var(--ink-900)] relative overflow-hidden flex flex-col gap-32">
      {/* BACKGROUND IMAGE CON OVERLAY */}
      <div 
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{ backgroundImage: 'url("/images/fondo.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[var(--ink-900)] via-[var(--ink-900)]/90 to-[var(--ink-900)] pointer-events-none"></div>

      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--moss)]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--ochre)]/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* BLOQUE 1: LANDING PAGES Y DISEÑO WEB */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text & Value Prop */}
          <div>
            <span className="eyebrow text-blue-400 font-bold tracking-[0.2em] uppercase text-xs">Tu vitrina digital 24/7</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 text-white leading-tight">
              Páginas Web y <span className="text-blue-400">Landing Pages</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              La primera impresión es la que cuenta. Diseñamos páginas web profesionales, ultrarrápidas y optimizadas para celulares, que transmiten confianza y convierten visitantes ocasionales en clientes recurrentes.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 bg-blue-400/10 p-2 rounded-lg h-fit text-blue-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Velocidad y Posicionamiento (SEO)</h3>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">Aparece en Google. Construimos sitios optimizados para cargar en milisegundos, mejorando tu visibilidad y reteniendo la atención del cliente.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-blue-400/10 p-2 rounded-lg h-fit text-blue-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Diseño Premium y Corporativo</h3>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">Adaptamos la identidad gráfica de tu negocio a un entorno digital moderno, asegurando que tu marca se perciba con el mayor nivel de profesionalismo.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a href="#contacto" className="inline-flex items-center gap-2 bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition-colors duration-300">
                Mejorar mi presencia web
                <TrendingUp className="w-4 h-4" />
              </a>
              <a href="https://landingpageproducto.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-transparent border-2 border-blue-500/50 text-blue-400 font-bold py-3 px-8 rounded-full hover:bg-blue-500/10 transition-colors duration-300">
                Ver ejemplo en vivo
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="relative group perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-900)] via-transparent to-transparent z-10 bottom-0 h-full pointer-events-none"></div>
            <img 
              src="/images/Landing.png" 
              alt="Diseño de Landing Pages por Napsi Tek"
              className="w-full h-auto rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] border border-gray-800 transform transition-transform duration-700 group-hover:rotate-y-[5deg] group-hover:rotate-x-[2deg] group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
          
        </div>
      </div>

      {/* BLOQUE 2: E-COMMERCE Y PASARELAS */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Visual Showcase (Reversed for alternating pattern) */}
          <div className="relative group perspective-1000 order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-900)] via-transparent to-transparent z-10 bottom-0 h-full pointer-events-none"></div>
            <img 
              src="/images/Pasarela de pagos.png" 
              alt="Interfaz de pasarela de pagos integrada por Napsi Tek"
              className="w-full h-auto rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] border border-gray-800 transform transition-transform duration-700 group-hover:rotate-y-[-5deg] group-hover:rotate-x-[2deg] group-hover:scale-[1.02]"
              loading="lazy"
            />
            {/* Floating Element */}
            <div className="absolute -bottom-6 -right-6 bg-[var(--ink-800)] border border-gray-700 p-4 rounded-xl shadow-2xl z-20 flex items-center gap-4 animate-bounce">
              <div className="bg-green-500/20 text-green-400 p-2 rounded-full">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Pago Confirmado</p>
                <p className="text-green-400 text-xs font-medium">+$120,000 COP</p>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Value Prop */}
          <div className="order-1 lg:order-2">
            <span className="eyebrow text-[var(--moss)] font-bold tracking-[0.2em] uppercase text-xs">Vende 24/7 sin esfuerzo</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 text-white leading-tight">
              Tu propio ecosistema de <span className="text-[var(--moss)]">ventas online</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Ya no dependas solo de mensajes por WhatsApp para cerrar una venta. Diseñamos tiendas en línea y páginas web de alta conversión que funcionan en piloto automático. Cobras directo a tu cuenta bancaria, sin intermediarios complicados.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 bg-[var(--moss)]/10 p-2 rounded-lg h-fit text-[var(--moss)]">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Pasarelas de Pago Integradas</h3>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">Conectamos Wompi, MercadoPago, ePayco o Stripe directo a tu web. Tus clientes pagan con tarjeta, PSE o transferencia en un par de clics.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-[var(--moss)]/10 p-2 rounded-lg h-fit text-[var(--moss)]">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">E-Commerce a tu medida</h3>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">Catálogos rápidos, carritos de compra optimizados para celular y gestión de inventario conectada a tu bodega física.</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a href="#contacto" className="inline-flex items-center gap-2 bg-white text-[var(--ink-900)] font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-transform hover:scale-105 duration-300">
                Quiero vender en automático
                <TrendingUp className="w-4 h-4" />
              </a>
            </div>
          </div>
          
        </div>
      </div>

      {/* BLOQUE 3: SISTEMAS ADMINISTRATIVOS E INVENTARIO */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text & Value Prop */}
          <div>
            <span className="eyebrow text-[var(--ochre)] font-bold tracking-[0.2em] uppercase text-xs">Control total de tu negocio</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 text-white leading-tight">
              Sistemas Administrativos y <span className="text-[var(--ochre)]">Control de Inventario</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Deja de adivinar qué tienes en bodega o usar Excel y libretas de papel. Desarrollamos paneles de administración hechos exactamente para tu flujo de trabajo: controlas lo que entra, lo que sale y calculas el margen real de cada venta.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 bg-[var(--ochre)]/10 p-2 rounded-lg h-fit text-[var(--ochre)]">
                  <PackageSearch className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Inventario inteligente</h3>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">No pierdas ventas por falta de stock. El sistema alerta automáticamente cuando un producto está por agotarse o requiere reposición.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-[var(--ochre)]/10 p-2 rounded-lg h-fit text-[var(--ochre)]">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Reportes y Costeos Reales</h3>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">Calcula la rentabilidad real descontando mano de obra, insumos y envíos. Sabrás exactamente qué tan rentable es tu operación.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-[var(--ochre)]/10 p-2 rounded-lg h-fit text-[var(--ochre)]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Roles y Accesos Seguros</h3>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">Asigna permisos por usuario: el bodeguero solo ve inventario, tu equipo de ventas solo ve el catálogo y tú, como dueño, controlas todo el panorama.</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a href="#contacto" className="inline-flex items-center gap-2 bg-[var(--ochre)] text-white font-bold py-3 px-8 rounded-full hover:bg-[var(--ochre-light)] transition-colors duration-300">
                Organizar mi negocio
                <TrendingUp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="relative group perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-900)] via-transparent to-transparent z-10 bottom-0 h-full pointer-events-none"></div>
            <img 
              src="/images/sistemasadministrativos.png" 
              alt="Sistema administrativo y de inventario a la medida por Napsi Tek"
              className="w-full h-auto rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] border border-gray-800 transform transition-transform duration-700 group-hover:rotate-y-[5deg] group-hover:rotate-x-[2deg] group-hover:scale-[1.02]"
              loading="lazy"
            />
            {/* Floating Element */}
            <div className="absolute -top-6 -left-6 bg-[var(--ink-800)] border border-[var(--ochre)]/30 p-4 rounded-xl shadow-2xl z-20 flex items-center gap-4 animate-bounce" style={{ animationDelay: '1s' }}>
              <div className="bg-[var(--ochre)]/20 text-[var(--ochre)] p-2 rounded-full">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Stock Crítico</p>
                <p className="text-[var(--ochre)] text-xs font-medium">Actualizado al instante</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
