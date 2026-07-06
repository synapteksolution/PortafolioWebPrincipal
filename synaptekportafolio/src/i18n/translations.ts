// Diccionarios de la UI para Napsi Tek.
// `es` es la fuente de verdad del tipo; `en` debe cumplir exactamente la misma forma (TS lo verifica).

export const WA_PHONE = '573155047301' // Número proporcionado por el usuario (Colombia)

export function waLink(message?: string): string {
  // Retornamos el shortlink personalizado para contacto general
  // Si necesitan un mensaje muy específico, se puede armar con api.whatsapp.com, 
  // pero el usuario prioriza este link corto:
  return 'https://wa.me/message/XRT5KYQZT64ZP1'
}

const es = {
  nav: {
    links: {
      home: 'Inicio',
      about: 'Sobre Nosotros',
      services: 'Servicios',
      portfolio: 'Portafolio',
      tech: 'Metodología',
      contact: 'Contacto',
    },
    cta: 'Agendar diagnóstico',
    openMenu: 'Abrir menú de navegación',
    logoAlt: 'Napsi Tek Logo',
    whatsappMsg: 'Hola, me gustaría agendar un diagnóstico con Napsi Tek.',
  },

  hero: {

    headline1: 'Desarrollo de software y automatización para',
    headlineEm: 'acelerar tu negocio.',
    paragraph: 'Ya sea que tengas una barbería, una sastrería o una clínica, diseñamos páginas web y sistemas a la medida que eliminan el trabajo manual: desde agendamiento inteligente de citas hasta el control exacto de tu inventario.',
    ctaPrimary: 'Agendar diagnóstico',
    ctaSecondary: 'Ver portafolio',
  },

  seo: {
    siteName: 'Napsi Tek',
    ogLocale: 'es_CO',
    home: {
      title: 'Napsi Tek — Desarrollo de Software y Automatización con IA',
      description: 'Transformamos el caos operativo en sistemas eficientes. Desarrollo de páginas web, sistemas a la medida y automatización con IA para acelerar tu negocio. Agenda tu diagnóstico.',
    },
    about: {
      title: 'Sobre Nosotros — Innovación y Tecnología | Napsi Tek',
      description: 'Conoce cómo en Napsi Tek diseñamos herramientas robustas y personalizadas que unifican tu inventario, finanzas y operaciones bajo la lógica exacta de tu negocio.',
    },
    portfolio: {
      title: 'Portafolio de Casos de Éxito — Soluciones a Medida | Napsi Tek',
      description: 'Explora nuestros proyectos y casos de éxito. Descubre cómo nuestras soluciones de software y automatización han optimizado los procesos de nuestros clientes.',
    },
    contact: {
      title: 'Contacto — Agenda un Diagnóstico | Napsi Tek',
      description: 'Ponte en contacto con Napsi Tek. Déjanos tus datos y nos comunicaremos contigo para analizar cómo podemos automatizar y potenciar tu empresa.',
    },
  },
}

const en: typeof es = {
  nav: {
    links: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      portfolio: 'Portfolio',
      tech: 'Methodology',
      contact: 'Contact',
    },
    cta: 'Book diagnostic',
    openMenu: 'Open navigation menu',
    logoAlt: 'Napsi Tek Logo',
    whatsappMsg: 'Hello, I would like to book a diagnostic with Napsi Tek.',
  },

  hero: {
    headline1: 'Software development and automation to',
    headlineEm: 'accelerate your business.',
    paragraph: 'Whether you run a barbershop, a tailor shop, or a clinic, we design custom websites and systems that eliminate manual work: from smart appointment scheduling to exact inventory control.',
    ctaPrimary: 'Book diagnostic',
    ctaSecondary: 'View portfolio',
  },

  seo: {
    siteName: 'Napsi Tek',
    ogLocale: 'en_US',
    home: {
      title: 'Napsi Tek — Software Development and AI Automation',
      description: 'We transform operational chaos into efficient systems. Custom web pages and AI automation to accelerate your business. Book your diagnostic.',
    },
    about: {
      title: 'About Us — Innovation and Technology | Napsi Tek',
      description: 'Learn how at Napsi Tek we design robust, custom tools that unify your inventory, finances, and operations under the exact logic of your business.',
    },
    portfolio: {
      title: 'Success Stories Portfolio — Custom Solutions | Napsi Tek',
      description: 'Explore our projects and success stories. Discover how our software and automation solutions have optimized our clients\' processes.',
    },
    contact: {
      title: 'Contact — Book a Diagnostic | Napsi Tek',
      description: 'Get in touch with Napsi Tek. Leave your details and we will contact you to analyze how we can automate and boost your company.',
    },
  },
}

export const translations = { es, en }

export type Lang = keyof typeof translations
export type Dict = typeof es
