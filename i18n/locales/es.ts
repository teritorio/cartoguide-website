export default defineI18nLocale(async () => ({
  nav: {
    home: 'CartoGuide',
    features: 'Funcionalidades',
    useCases: 'Casos de uso',
    news: 'Actualidad',
    contact: 'Contacto',
    github: 'GitHub',
    seeCartoGuide: 'Ver CartoGuide',
    changeLanguage: 'Cambiar idioma',
  },
  footer: {
    product: 'Producto',
    resources: 'Recursos',
    company: 'Empresa',
  },
  contact: {
    ctaLabel: 'Contáctenos',
    externalUrl: 'https://www.teritorio.fr/es/contacto/',
    externalNotice: 'Será redirigido al sitio web de Teritorio.',
  },
  seo: {
    description: 'Aplicación web cartográfica open source basada en OpenStreetMap. Motor de búsqueda geográfica local, optimizado para móvil, para valorizar los datos del territorio.',
    ogImageAlt: 'CartoGuide — Aplicación web cartográfica open source basada en OpenStreetMap',
  },
  error: {
    title: 'Página no encontrada',
    message: 'La página que busca no existe o se mudó.',
    backHome: 'Volver al inicio',
  },
  page: {
    empty: 'Esta página aún no tiene contenido.',
    notFound: 'Página no encontrada',
    mapLoading: 'Cargando el mapa…',
  },
  news: {
    headline: 'Actualidad',
    pageTitle: 'Todas las noticias',
    pageDescription: 'Artículos, versiones y eventos sobre CartoGuide.',
    readMore: 'Leer más',
    empty: 'No hay noticias por el momento.',
    types: {
      article: 'Artículo',
      release: 'Versión',
      feature: 'Funcionalidad',
      event: 'Evento',
    },
  },
  faq: {
    headline: 'FAQ',
    title: '¿Tiene preguntas sobre CartoGuide?',
  },
}))
