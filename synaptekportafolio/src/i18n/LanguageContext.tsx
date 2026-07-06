import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { translations, type Dict, type Lang } from './translations'

const STORAGE_KEY = 'napsitek-lang'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Dict
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function isLang(value: unknown): value is Lang {
  return value === 'es' || value === 'en'
}

/**
 * Resuelve el idioma inicial, en orden de prioridad:
 * 1. Parámetro `?lang=` en la URL (links compartidos / hreflang)
 * 2. Preferencia guardada en localStorage
 * 3. Idioma por defecto (español)
 */
function detectLang(): Lang {
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (isLang(fromUrl)) return fromUrl

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (isLang(stored)) return stored
  } catch {
    // localStorage puede no estar disponible (modo privado estricto)
  }

  // Por defecto, siempre español para que el SEO y los bots indexen en español primero
  return 'es'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang)

  const setLang = (next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // sin persistencia, el idioma sigue funcionando en la sesión
    }
  }

  // Mantener <html lang="..."> sincronizado (accesibilidad + SEO)
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage debe usarse dentro de <LanguageProvider>')
  return ctx
}
