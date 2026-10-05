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
    title: 'Hablemos de su proyecto',
    description: '¿Tiene un proyecto territorial? Intercambiemos sobre sus necesidades y veamos juntos cómo CartoGuide puede ayudarle.',
    demoTitle: 'Lo que podemos hacer juntos',
    demoDescription: 'Durante nuestro intercambio, tomamos el tiempo de:',
    demoItem1: 'intercambiar sobre su contexto y necesidades',
    demoItem2: 'presentar los conceptos y el funcionamiento de CartoGuide',
    demoItem3: 'mostrar casos de uso concretos',
    demoItem4: 'compartir nuestra hoja de ruta',
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
    items: [
      {
        question: '¿Qué datos podemos utilizar con CartoGuide?',
        answer: 'CartoGuide puede reunir sus datos procedentes de diferentes fuentes: SIT, Tourinsoft, Apidae, DATAtourisme, OpenStreetMap, datos de transporte, bases de datos sectoriales y otras fuentes territoriales.',
      },
      {
        question: '¿Puede CartoGuide integrarse con nuestro sistema de información existente?',
        answer: 'Sí, CartoGuide se integra con su ecosistema existente, en particular gracias a los conectores, API y widgets.',
      },
      {
        question: '¿Debemos cambiar o migrar nuestras herramientas actuales?',
        answer: 'CartoGuide puede inscribirse en su entorno existente y valorizar los datos ya producidos por sus herramientas.',
      },
      {
        question: '¿Cómo se integra OpenStreetMap en CartoGuide?',
        answer: 'OpenStreetMap constituye una base de datos geográficos abierta, mundial y enriquecida por una comunidad de contribuidores, que CartoGuide permite movilizar junto a sus datos sectoriales. Teritorio acompaña a los territorios para explotar mejor estos datos, contribuir a su calidad y construir una información geográfica más rica, abierta y compartida.',
      },
      {
        question: '¿Se puede personalizar CartoGuide según nuestro territorio y nuestro sector?',
        answer: 'La interfaz, los menús, las categorías, los filtros, los contenidos, los datos y la experiencia pueden adaptarse desde el back-office.',
      },
      {
        question: '¿Cómo se desarrolla un proyecto CartoGuide?',
        answer: 'Desde el descubrimiento de los retos y los datos hasta la concepción, el acompañamiento, la formación y la implementación.',
      },
      {
        question: '¿Qué puede aportarnos Teritorio más allá del software?',
        answer: 'Seminario de descubrimiento, búsqueda de datos existentes o poco conocidos, asesoramiento en arquitectura y difusión de datos, acompañamiento de proyectos y formación.',
      },
      {
        question: '¿Por qué CartoGuide es un software libre?',
        answer: 'CartoGuide está publicado bajo la licencia AGPL-3.0. La apertura del software permite inscribirse en un ecosistema de datos y tecnologías abiertas, especialmente en torno a OpenStreetMap.',
      },
    ],
  },
}))
