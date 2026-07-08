import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Slide {
  src: string
  alt: string
  label?: string
}

interface ImageSliderProps {
  slides: Slide[]
  autoPlayMs?: number
  className?: string
}

export function ImageSlider({ slides, autoPlayMs = 4000, className = '' }: ImageSliderProps) {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  useEffect(() => {
    if (isHovered || slides.length <= 1) return
    const timer = setInterval(next, autoPlayMs)
    return () => clearInterval(timer)
  }, [next, autoPlayMs, isHovered, slides.length])

  if (slides.length === 0) return null

  return (
    <div
      className={`relative group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      <div className="relative w-full overflow-hidden rounded-2xl aspect-[16/10]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-all duration-700 ease-in-out"
            style={{
              opacity: index === current ? 1 : 0,
              transform: index === current ? 'scale(1)' : 'scale(1.05)',
              zIndex: index === current ? 1 : 0,
            }}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
            {/* Gradient overlay at bottom for label */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Slide label */}
            {slide.label && (
              <div className="absolute bottom-4 left-4 z-10">
                <span className="bg-white/10 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                  {slide.label}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/60 hover:scale-110 border border-white/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Siguiente"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/60 hover:scale-110 border border-white/10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Indicator Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 right-4 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Ir a slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full border border-white/30 ${
                index === current
                  ? 'w-6 h-2 bg-white'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
