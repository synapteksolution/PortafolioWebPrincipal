import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: '/images/leveston/PAGINALEVESTON+.png',
    caption: 'Página Web — Le Veston'
  },
  {
    image: '/leveston inventarios.png',
    caption: 'Sistema de Inventario — Le Veston'
  }
]

export function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prev = () => {
    setCurrentIndex((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  }

  const next = () => {
    setCurrentIndex((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto mt-8 rounded-xl overflow-hidden shadow-2xl border border-gray-800 group">
      <div 
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="w-full flex-shrink-0 relative">
            <img 
              src={slide.image} 
              alt={slide.caption} 
              className="w-full h-auto object-cover aspect-video"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-medium text-sm">{slide.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button 
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-[var(--ochre)] transition-colors opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button 
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-[var(--ochre)] transition-colors opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        {slides.map((_, i) => (
          <div 
            key={i} 
            className={`transition-all w-2 h-2 rounded-full ${
              currentIndex === i ? 'bg-[var(--ochre)] w-4' : 'bg-white/50'
            }`} 
          />
        ))}
      </div>
    </div>
  )
}
