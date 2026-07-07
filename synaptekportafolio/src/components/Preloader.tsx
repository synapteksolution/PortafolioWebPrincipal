import * as React from "react"

interface PreloaderProps {
  onComplete?: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = React.useState(true)
  const [isRendered, setIsRendered] = React.useState(true)

  React.useEffect(() => {
    // Prevent body scrolling while loading
    document.body.style.overflow = "hidden"

    const handleLoad = () => {
      // Small timeout to guarantee the video is seen and looks premium
      setTimeout(() => {
        setIsVisible(false)
      }, 3000)
    };

    // Check if page is already loaded
    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
    }

    // Fallback timer in case load event takes too long
    const fallbackTimer = setTimeout(() => {
      setIsVisible(false)
    }, 4500)

    return () => {
      window.removeEventListener("load", handleLoad)
      clearTimeout(fallbackTimer)
    }
  }, [])

  React.useEffect(() => {
    if (!isVisible) {
      // Wait for fade-out transition to complete before removing from DOM
      const destroyTimer = setTimeout(() => {
        setIsRendered(false)
        document.body.style.overflow = ""
        if (onComplete) onComplete()
      }, 700) // matches duration-700 in CSS

      return () => clearTimeout(destroyTimer)
    }
  }, [isVisible, onComplete])

  if (!isRendered) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative w-[85vw] max-w-[400px] aspect-square flex items-center justify-center overflow-hidden rounded-full shadow-2xl">
        <video
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-full object-cover scale-105"
        >
          <source src="/images/logo2.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
      </div>

      {/* Subtle loader text */}
      <div
        className={`mt-6 text-xs uppercase tracking-[0.25em] font-mono text-[var(--ochre-light)] transition-all duration-500 delay-300 ${
          isVisible ? "opacity-40 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        Cargando Experiencia
      </div>
    </div>
  )
}
