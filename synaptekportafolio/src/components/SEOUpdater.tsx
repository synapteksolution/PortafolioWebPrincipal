import { useEffect } from 'react'

export function SEOUpdater() {
  useEffect(() => {
    // 1. Tomamos los datos estáticos de Napsi Tek
    const seoData = {
      title: 'Napsi Tek — Desarrollo de Software y Automatización con IA',
      description: 'Transformamos el caos operativo en sistemas eficientes. Desarrollo de páginas web, sistemas a la medida y automatización con IA para acelerar tu negocio.',
      siteName: 'Napsi Tek',
      ogLocale: 'es_CO'
    }

    // 2. Actualizar Document Title
    document.title = seoData.title

    // 3. Actualizar HTML lang
    document.documentElement.lang = 'es'

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

    // Actualizar Twitter tags
    updateMetaTag('meta[name="twitter:title"]', 'content', seoData.title)
    updateMetaTag('meta[name="twitter:description"]', 'content', seoData.description)

  }, [])

  return null // Este componente no renderiza nada visualmente
}
