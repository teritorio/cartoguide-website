export default defineI18nLocale(async () => ({
  nav: {
    home: 'CartoGuide',
    features: 'Funcionalidades',
    contact: 'Demo',
    github: 'GitHub',
    seeCartoGuide: 'Ver CartoGuide',
    changeLanguage: 'Cambiar idioma',
  },
  footer: {
    product: 'Producto',
    resources: 'Recursos',
    company: 'Empresa',
    copyright: '© {year} {teritorio}.',
  },
  contact: {
    title: 'Contáctenos',
    description: '¿Tiene alguna pregunta sobre CartoGuide? ¿Necesita una demo o asistencia?',
    demoTitle: 'Solicitar una demostración',
    demoDescription: 'Durante una demostración, nos tomamos el tiempo para:',
    demoItem1: 'intercambiar sobre su contexto y necesidades',
    demoItem2: 'presentar CartoGuide y su funcionamiento',
    demoItem3: 'ilustrar casos de uso concretos',
    demoItem4: 'compartir nuestra hoja de ruta',
    ctaLabel: 'Contáctenos',
    externalUrl: 'https://www.teritorio.fr/es/contacto/',
    externalNotice: 'Será redirigido al sitio web de Teritorio.',
  },
  seo: {
    description: 'Aplicación web cartográfica open source basada en OpenStreetMap. Motor de búsqueda geográfico local, optimizado para móvil, para valorizar los datos del territorio.',
    ogImageAlt: 'CartoGuide — Mapa interactivo open source para tu territorio',
  },
  error: {
    title: 'Página no encontrada',
    message: 'La página que busca no existe o ha sido movida.',
    backHome: 'Volver al inicio',
  },
  page: {
    empty: 'Esta página aún no tiene contenido.',
    notFound: 'Página no encontrada',
  },
}))
