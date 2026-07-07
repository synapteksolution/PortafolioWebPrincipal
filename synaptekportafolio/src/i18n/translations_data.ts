export const WA_PHONE = '573155047301'

export function waLink(_message?: string): string {
  return 'https://wa.me/message/XRT5KYQZT64ZP1'
}

const es = {
  nav: {
    links: { home: 'Inicio', about: 'Sobre Nosotros', services: 'Servicios', portfolio: 'Portafolio', tech: 'Metodología', contact: 'Contacto' },
    cta: 'Agendar cita', openMenu: 'Abrir menú de navegación', logoAlt: 'Napsi Tek Logo', whatsappMsg: 'Hola, me gustaría agendar un diagnóstico con Napsi Tek.'
  },
  hero: {
    headline1: 'Desarrollo de software y automatización para', headlineEm: 'acelerar tu negocio.', paragraph: 'Ya sea que tengas una barbería, una sastrería o una clínica, diseñamos páginas web y sistemas a la medida que eliminan el trabajo manual: desde agendamiento inteligente de citas hasta el control exacto de tu inventario.', ctaPrimary: 'Agendar cita', ctaSecondary: 'Ver portafolio'
  },
  about: {
    eyebrow: 'Nuestra Esencia',
    headline: 'Transformamos el caos operativo en sistemas eficientes',
    paragraph: 'Entendemos que una barbería no opera igual que una sastrería. Por eso, en Napsi Tek no vendemos plantillas rígidas. Creamos páginas web y sistemas a la medida que resuelven tu problema real.',
    cards: [
      { title: 'Sistemas a tu Medida', desc: 'Construimos lo que realmente necesitas. Si requieres que tus clientes agenden citas, compren en línea o necesitas gestionar tu inventario, lo hacemos posible.' },
      { title: 'Automatización y Optimización', desc: 'Conectamos tus sistemas existentes (CRM, WhatsApp, bases de datos) para eliminar tareas repetitivas y procesar información automáticamente.' },
      { title: 'Soporte y Evolución Continua', desc: 'Acompañamos tu crecimiento adaptando la infraestructura y el código a medida que surgen nuevos retos en tu negocio.' }
    ]
  },
  services: {
    eyebrow: 'Tu vitrina digital 24/7',
    headlinePrefix: 'Páginas Web y ',
    headlineEm: 'Landing Pages',
    paragraph: 'La primera impresión es la que cuenta. Diseñamos páginas web profesionales, ultrarrápidas y optimizadas para celulares, que transmiten confianza y convierten visitantes ocasionales en clientes recurrentes.',
    features: [
      { title: 'Velocidad y Posicionamiento (SEO)', desc: 'Aparece en Google. Construimos sitios optimizados para cargar en milisegundos, mejorando tu visibilidad y reteniendo la atención del cliente.' },
      { title: 'Diseño Premium y Corporativo', desc: 'Adaptamos la identidad gráfica de tu negocio a un entorno digital moderno, asegurando que tu marca se perciba con el mayor nivel de profesionalismo.' }
    ],
    btnContact: 'Mejorar mi presencia web',
    btnDemo: 'Ver ejemplo en vivo',
    sysEyebrow: 'Tu operación, digitalizada',
    sysHeadlinePrefix: 'Sistemas ',
    sysHeadlineEm: 'a la medida',
    sysParagraph: 'Si usas Excel o papel, estás perdiendo dinero. Desarrollamos software que controla tu inventario, ventas y agendamientos en un solo lugar.',
    sysFeatures: [
      { title: 'Automatización de Tareas Repetitivas', desc: 'Automatizamos la generación de reportes, envío de correos y facturación para que tú y tu equipo se enfoquen en vender.' },
      { title: 'Control Total', desc: 'Conoce en tiempo real qué vendes, cuánto ganas y qué necesitas comprar. Todo desde una sola plataforma.' }
    ],
    sysBtnContact: 'Quiero automatizar mi negocio',
    aiEyebrow: 'El futuro es hoy',
    aiHeadlinePrefix: 'Automatización ',
    aiHeadlineEm: 'con IA',
    aiParagraph: 'Conectamos tus canales (como WhatsApp) con agentes de Inteligencia Artificial que responden y agendan por ti 24/7.',
    aiFeatures: [
      { title: 'Atención 24/7', desc: 'Tus clientes reciben atención inmediata a cualquier hora del día, respondiendo dudas frecuentes y agendando citas sin intervención humana.' },
      { title: 'Análisis de Sentimiento', desc: 'Entendemos qué quieren tus clientes y cómo se sienten, para ofrecer respuestas y recomendaciones hiperpersonalizadas.' }
    ],
    aiBtnContact: 'Quiero implementar IA'
  },
  methodology: {
    eyebrow: 'Garantías Napsi Tek',
    headlinePrefix: 'Transparencia y Resultados desde el ',
    headlineEm: 'Día 1',
    paragraph: 'El desarrollo de software no tiene que ser un dolor de cabeza ni un barril sin fondo. Nuestra metodología elimina el riesgo y la incertidumbre de tu inversión tecnológica.',
    steps: [
      { title: 'Levantamiento de requerimientos', desc: 'Antes de cotizar, realizamos una entrevista inicial. Creamos un documento de requerimientos funcionales y no funcionales para evitar suposiciones y asegurar que la propuesta responda a tu operación real.' },
      { title: 'Propuesta por sprints', desc: 'Dividimos el desarrollo en sprints cerrados con costo fijo. Cada uno incluye una fecha de entrega ideal y una fecha máxima (con margen de seguridad) para protegerte ante cualquier eventualidad.' },
      { title: 'Pago contra entrega', desc: 'Al cerrar cada sprint entregamos funcionalidad real; nunca pagas por trabajo que no has visto. Ofrecemos modalidad de pago por sprint o pago anticipado del 100% (con descuento).' },
      { title: 'Desarrollo en paralelo', desc: 'Si necesitas varias piezas (ej. landing page + sistema administrativo), los sprints de ambos avanzan simultáneamente. Esto reduce considerablemente el tiempo total de entrega.' },
      { title: 'Último sprint gratuito', desc: 'Cada proyecto cierra con un sprint de pruebas sin costo (visualización, rendimiento, seguridad, ajustes por feedback). Es nuestra validación final antes de la entrega oficial.' },
      { title: 'Alcance controlado', desc: 'Cualquier extra fuera del sprint se avisa previamente. Decidimos en conjunto si ampliamos el alcance y el presupuesto antes de acercarnos al límite de horas.' },
      { title: 'Soporte post-entrega', desc: 'Incluimos 3 meses de soporte gratuito para ajustes menores. A partir del mes 4, puedes tomar un plan mensual de soporte adaptado a tus necesidades reales.' },
      { title: 'Propiedad intelectual', desc: 'El código te pertenece y se entrega al 100% una vez completado el pago total del proyecto. Todo es transparente desde la propuesta inicial para evitar sorpresas.' }
    ]
  },
  tech: {
    eyebrow: 'Nuestras Herramientas',
    headlinePrefix: 'Tecnología de punta, ',
    headlineEm: 'resultados reales',
    paragraph: 'Seleccionamos cuidadosamente cada herramienta no por moda, sino para garantizar que tu negocio sea rápido, seguro e imparable.',
    cards: [
      { title: 'Velocidad y Respuesta', desc: 'Usamos tecnologías modernas que cargan al instante, mejorando la experiencia de tus clientes y el posicionamiento en buscadores.' },
      { title: 'Seguridad y Estabilidad', desc: 'Tus datos y los de tus clientes están protegidos con infraestructuras robustas y bases de datos de nivel bancario.' },
      { title: 'Automatización Inteligente', desc: 'Conectamos tu negocio con las mejores herramientas de IA para que ahorres tiempo y reduzcas errores humanos.' },
      { title: 'Diseño Adaptable', desc: 'Tu plataforma se verá y funcionará perfectamente en móviles, tablets y computadoras, sin excepciones.' }
    ],
    whyMatters: '¿Por qué esto te importa?',
    whyMattersDesc: 'Un stack moderno significa que tu sitio durará años sin volverse obsoleto.',
    btnContact: 'Impulsa tu idea'
  },
  contactPage: {
    eyebrow: 'Hablemos de tu negocio',
    headline: 'Cuéntanos cómo trabajas hoy y diseñamos la solución adecuada',
    paragraph: 'Selecciona el día y hora que mejor te convenga para una videollamada de 20 minutos. Analizamos tu operación y te proponemos un flujo eficiente sin compromiso.'
  },
  seo: {
    siteName: 'Napsi Tek', ogLocale: 'es_CO',
    home: { title: 'Napsi Tek — Desarrollo de Software y Automatización con IA', description: 'Transformamos el caos operativo en sistemas eficientes.' },
    about: { title: 'Sobre Nosotros — Innovación y Tecnología | Napsi Tek', description: 'Conoce cómo en Napsi Tek diseñamos herramientas robustas y personalizadas.' },
    services: { title: 'Servicios de Desarrollo y Automatización | Napsi Tek', description: 'Descubre nuestros servicios de páginas web, sistemas a la medida y automatización con IA.' },
    methodology: { title: 'Nuestra Metodología Ágil | Napsi Tek', description: 'Conoce cómo trabajamos paso a paso para garantizar el éxito de tu proyecto de software.' },
    portfolio: { title: 'Portafolio de Casos de Éxito — Soluciones a Medida | Napsi Tek', description: 'Explora nuestros proyectos y casos de éxito.' },
    contact: { title: 'Contacto — Agenda un Diagnóstico | Napsi Tek', description: 'Ponte en contacto con Napsi Tek.' }
  }
}

const en: typeof es = {
  nav: {
    links: { home: 'Home', about: 'About Us', services: 'Services', portfolio: 'Portfolio', tech: 'Methodology', contact: 'Contact' },
    cta: 'Book appointment', openMenu: 'Open navigation menu', logoAlt: 'Napsi Tek Logo', whatsappMsg: 'Hello, I would like to book a diagnostic with Napsi Tek.'
  },
  hero: {
    headline1: 'Software development and automation to', headlineEm: 'accelerate your business.', paragraph: 'Whether you run a barbershop, a tailor shop, or a clinic, we design custom websites and systems that eliminate manual work: from smart appointment scheduling to exact inventory control.', ctaPrimary: 'Book appointment', ctaSecondary: 'View portfolio'
  },
  about: {
    eyebrow: 'Our Essence',
    headline: 'We transform operational chaos into efficient systems',
    paragraph: 'We understand that a barbershop does not operate like a tailor shop. That is why at Napsi Tek we do not sell rigid templates. We create custom websites and systems that solve your real problem.',
    cards: [
      { title: 'Custom Systems', desc: 'We build what you really need. If you require your clients to book appointments, buy online, or you need to manage your inventory, we make it possible.' },
      { title: 'Automation and Optimization', desc: 'We connect your existing systems (CRM, WhatsApp, databases) to eliminate repetitive tasks and process information automatically.' },
      { title: 'Support and Continuous Evolution', desc: 'We accompany your growth by adapting the infrastructure and code as new challenges arise in your business.' }
    ]
  },
  services: {
    eyebrow: 'Your digital storefront 24/7',
    headlinePrefix: 'Websites & ',
    headlineEm: 'Landing Pages',
    paragraph: 'First impressions matter. We design professional, ultra-fast, and mobile-optimized websites that convey trust and convert casual visitors into returning customers.',
    features: [
      { title: 'Speed & SEO', desc: 'Show up on Google. We build optimized sites that load in milliseconds, improving your visibility and retaining customer attention.' },
      { title: 'Premium & Corporate Design', desc: 'We adapt your business\'s visual identity to a modern digital environment, ensuring your brand is perceived with the highest level of professionalism.' }
    ],
    btnContact: 'Improve my web presence',
    btnDemo: 'View live example',
    sysEyebrow: 'Your operation, digitized',
    sysHeadlinePrefix: 'Custom ',
    sysHeadlineEm: 'Systems',
    sysParagraph: 'If you use Excel or paper, you\'re losing money. We develop software that controls your inventory, sales, and scheduling in one place.',
    sysFeatures: [
      { title: 'Repetitive Task Automation', desc: 'We automate report generation, email sending, and invoicing so you and your team can focus on selling.' },
      { title: 'Total Control', desc: 'Know in real time what you sell, how much you earn, and what you need to buy. All from a single platform.' }
    ],
    sysBtnContact: 'I want to automate my business',
    aiEyebrow: 'The future is today',
    aiHeadlinePrefix: 'AI ',
    aiHeadlineEm: 'Automation',
    aiParagraph: 'We connect your channels (like WhatsApp) with Artificial Intelligence agents that answer and schedule for you 24/7.',
    aiFeatures: [
      { title: '24/7 Customer Service', desc: 'Your customers receive immediate attention at any time of the day, answering common questions and booking appointments without human intervention.' },
      { title: 'Sentiment Analysis', desc: 'We understand what your customers want and how they feel, to offer hyper-personalized answers and recommendations.' }
    ],
    aiBtnContact: 'I want to implement AI'
  },
  methodology: {
    eyebrow: 'Napsi Tek Guarantees',
    headlinePrefix: 'Transparency and Results from ',
    headlineEm: 'Day 1',
    paragraph: 'Software development doesn\'t have to be a headache or a bottomless pit. Our methodology eliminates the risk and uncertainty of your technological investment.',
    steps: [
      { title: 'Requirements Gathering', desc: 'Before quoting, we conduct an initial interview. We create a document of functional and non-functional requirements to avoid assumptions and ensure the proposal responds to your real operation.' },
      { title: 'Sprint-based Proposal', desc: 'We divide development into closed sprints with a fixed cost. Each includes an ideal delivery date and a maximum date (with a safety margin) to protect you against any eventuality.' },
      { title: 'Payment upon Delivery', desc: 'At the end of each sprint we deliver real functionality; you never pay for work you haven\'t seen. We offer payment per sprint or 100% upfront payment (with discount).' },
      { title: 'Parallel Development', desc: 'If you need several pieces (e.g., landing page + administrative system), the sprints of both advance simultaneously. This considerably reduces the total delivery time.' },
      { title: 'Free Last Sprint', desc: 'Each project closes with a free testing sprint (visualization, performance, security, adjustments per feedback). It is our final validation before official delivery.' },
      { title: 'Controlled Scope', desc: 'Any extra outside the sprint is notified in advance. We jointly decide if we expand the scope and budget before approaching the hour limit.' },
      { title: 'Post-delivery Support', desc: 'We include 3 months of free support for minor adjustments. From month 4, you can take a monthly support plan adapted to your real needs.' },
      { title: 'Intellectual Property', desc: 'The code belongs to you and is delivered 100% once the total project payment is completed. Everything is transparent from the initial proposal to avoid surprises.' }
    ]
  },
  tech: {
    eyebrow: 'Our Tools',
    headlinePrefix: 'Cutting-edge tech, ',
    headlineEm: 'real results',
    paragraph: 'We carefully select each tool not for hype, but to ensure your business is fast, secure, and unstoppable.',
    cards: [
      { title: 'Speed & Responsiveness', desc: 'We use modern technologies that load instantly, improving your customers\' experience and SEO.' },
      { title: 'Security & Stability', desc: 'Your data and your customers\' data are protected with robust infrastructure and bank-level databases.' },
      { title: 'Smart Automation', desc: 'We connect your business with the best AI tools to save time and reduce human errors.' },
      { title: 'Responsive Design', desc: 'Your platform will look and work perfectly on mobile, tablets, and desktops, no exceptions.' }
    ],
    whyMatters: 'Why does this matter?',
    whyMattersDesc: 'A modern stack means your site will last for years without becoming obsolete.',
    btnContact: 'Boost your idea'
  },
  contactPage: {
    eyebrow: 'Let\'s talk about your business',
    headline: 'Tell us how you work today and we\'ll design the right solution',
    paragraph: 'Select the day and time that works best for a 20-minute video call. We analyze your operation and propose an efficient flow with no strings attached.'
  },
  seo: {
    siteName: 'Napsi Tek', ogLocale: 'en_US',
    home: { title: 'Napsi Tek — Software Development and AI Automation', description: 'We transform operational chaos into efficient systems.' },
    about: { title: 'About Us — Innovation and Technology | Napsi Tek', description: 'Learn how at Napsi Tek we design robust, custom tools.' },
    services: { title: 'Development and Automation Services | Napsi Tek', description: 'Discover our services: websites, custom systems, and AI automation.' },
    methodology: { title: 'Our Agile Methodology | Napsi Tek', description: 'Learn how we work step by step to guarantee the success of your software project.' },
    portfolio: { title: 'Success Stories Portfolio — Custom Solutions | Napsi Tek', description: 'Explore our projects and success stories.' },
    contact: { title: 'Contact — Book a Diagnostic | Napsi Tek', description: 'Get in touch with Napsi Tek.' }
  }
}

export const translations = { es, en }
export type Lang = keyof typeof translations
export type Dict = typeof es
