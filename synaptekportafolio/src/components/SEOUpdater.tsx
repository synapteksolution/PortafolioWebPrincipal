import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

export function SEOUpdater() {
  const location = useLocation()
  const { t, lang } = useLanguage()

  useEffect(() => {
    const path = location.pathname
    let pageKey: 'home' | 'about' | 'portfolio' | 'contact' | 'services' | 'methodology' = 'home'

    if (path.includes('/sobre-nosotros')) pageKey = 'about'
    else if (path.includes('/portafolio')) pageKey = 'portfolio'
    else if (path.includes('/contacto')) pageKey = 'contact'
    else if (path.includes('/servicios')) pageKey = 'services'
    else if (path.includes('/metodologia')) pageKey = 'methodology'

    const pageSeo = t.seo[pageKey] || t.seo.home

    const seoData = {
      title: pageSeo.title,
      description: pageSeo.description,
      siteName: t.seo.siteName,
      ogLocale: t.seo.ogLocale
    }

    // 2. Actualizar Document Title
    document.title = seoData.title

    // 3. Actualizar HTML lang
    document.documentElement.lang = lang

    // 4. Update Meta Tags (helper function)
    const updateMetaTag = (selector: string, attribute: string, value: string) => {
      let el = document.querySelector(selector)
      if (!el) {
        // Si no existe, lo creamos
        el = document.createElement('meta')
        if (selector.includes('name=')) {
          const name = selector.match(/name="([^"]+)"/)?.[1]
          if (name) el.setAttribute('name', name)
        } else if (selector.includes('property=')) {
          const property = selector.match(/property="([^"]+)"/)?.[1]
          if (property) el.setAttribute('property', property)
        }
        document.head.appendChild(el)
      }
      el.setAttribute(attribute, value)
    }

    // Actualizar Description
    updateMetaTag('meta[name="description"]', 'content', seoData.description)
    
    // Actualizar Open Graph tags
    updateMetaTag('meta[property="og:title"]', 'content', seoData.title)
    updateMetaTag('meta[property="og:description"]', 'content', seoData.description)
    updateMetaTag('meta[property="og:site_name"]', 'content', seoData.siteName)
    updateMetaTag('meta[property="og:locale"]', 'content', seoData.ogLocale)
    updateMetaTag('meta[property="og:url"]', 'content', window.location.href)

    // Actualizar Twitter tags
    updateMetaTag('meta[name="twitter:title"]', 'content', seoData.title)
    updateMetaTag('meta[name="twitter:description"]', 'content', seoData.description)

  }, [location.pathname, t, lang])

  return null
}
