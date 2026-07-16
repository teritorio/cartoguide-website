export default defineI18nLocale(async () => ({
  nav: {
    home: 'CartoGuide',
    features: 'Funcionalidades',
    useCases: 'Casos de uso',
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
  },
  faq: {
    whatIsCartoGuide: {
      q: '¿Qué es CartoGuide?',
      a: 'CartoGuide es una aplicación web cartográfica open source basada en OpenStreetMap. Agrega sus datos territoriales (SIT turísticos, Geotrek, Open Agenda, GTFS, back-office) y los valoriza en un mapa interactivo optimizado para móvil.',
    },
    isFree: {
      q: '¿Es CartoGuide gratuito?',
      a: 'CartoGuide es un software libre bajo licencia MIT, de uso y modificación libres. Teritorio ofrece servicios de alojamiento, despliegue y acompañamiento para las organizaciones que necesiten orientación.',
    },
    dataSources: {
      q: '¿Qué fuentes de datos soporta CartoGuide?',
      a: 'CartoGuide se conecta a OpenStreetMap, SIT turísticos (Sirtaqui, Apidae, Tourinsoft), Geotrek, Open Agenda, GTFS, SIG open data y contenidos editoriales del back-office Elasa. Los datos se sincronizan cada noche.',
    },
    mobile: {
      q: '¿Funciona CartoGuide en móvil?',
      a: 'Sí, CartoGuide está diseñado mobile-first. La interfaz es responsive y está optimizada para smartphones, tabletas y ordenadores. Está pensada para agentes de campo, personal de acogida y visitantes en movimiento.',
    },
    osmContribution: {
      q: '¿Cómo contribuir a OpenStreetMap con CartoGuide?',
      a: 'CartoGuide incluye un modo contribuidor que permite a sus agentes y voluntarios enriquecer los datos de OpenStreetMap directamente desde el mapa. Estas contribuciones benefician a todo el ecosistema: Géovélo, SNCF, Apple Maps, IGN y muchos más.',
    },
  },
}))
