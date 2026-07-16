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
    headline: 'FAQ',
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Qué es CartoGuide?',
        answer: 'CartoGuide es una aplicación web cartográfica open source basada en OpenStreetMap. Agrega sus datos territoriales — SIT turísticos (Sirtaqui, Apidae, Tourinsoft), Geotrek, Open Agenda, GTFS, back-office — y los valoriza en un mapa interactivo optimizado para móvil, accesible a todos sus públicos sin instalación.',
      },
      {
        question: '¿Es CartoGuide gratuito y de código abierto?',
        answer: 'CartoGuide es un software libre bajo licencia AGPL-3.0, de uso y modificación libres. El código fuente está disponible en GitHub. Teritorio también ofrece servicios de alojamiento SaaS, despliegue y acompañamiento para las organizaciones que necesiten asistencia profesional.',
      },
      {
        question: '¿Qué fuentes de datos soporta CartoGuide?',
        answer: 'CartoGuide se conecta de forma nativa a OpenStreetMap, SIT turísticos (Sirtaqui, Apidae, Tourinsoft), Geotrek, Open Agenda, GTFS y SIG open data. Sus datos propietarios pueden introducirse mediante el back-office Elasa. Todo se sincroniza automáticamente cada noche.',
      },
      {
        question: '¿Funciona CartoGuide en móvil?',
        answer: 'Sí, CartoGuide está diseñado mobile-first. La interfaz responsive está optimizada para smartphones, tabletas y ordenadores de escritorio. Está pensada para agentes de campo, personal de acogida turística y visitantes en movimiento.',
      },
      {
        question: '¿Puede CartoGuide integrarse en un sitio web existente?',
        answer: 'Sí, CartoGuide está diseñado para integrarse en su ecosistema digital existente. Puede integrarse mediante un widget o iframe en cualquier sitio web. Teritorio le acompaña para adaptar la interfaz a las necesidades de su territorio.',
      },
      {
        question: '¿Cuánto tiempo se tarda en desplegar CartoGuide?',
        answer: 'El despliegue de un CartoGuide alojado por Teritorio suele tardar entre dos y cuatro semanas, según la complejidad de sus fuentes de datos e identidad visual. Teritorio se encarga de toda la configuración: conectores de datos, personalización de la interfaz y formación de sus equipos.',
      },
      {
        question: '¿Qué tipos de organizaciones utilizan CartoGuide?',
        answer: 'CartoGuide lo despliegan más de 30 organizaciones territoriales en Francia y en los territorios de ultramar: oficinas de turismo, municipios e intercomunalidades, países y territorios rurales, comunidades de profesionales sanitarios (CPTS) y actores de la alimentación local y los circuitos cortos.',
      },
      {
        question: '¿Cómo contribuir a OpenStreetMap con CartoGuide?',
        answer: 'CartoGuide incluye un modo contribuidor que permite a sus agentes y voluntarios enriquecer los datos de OpenStreetMap directamente desde el mapa, sin salir de la interfaz. Estas contribuciones benefician a todo el ecosistema: Géovélo, SNCF, Apple Maps, IGN y muchos otros actores territoriales.',
      },
    ],
  },
}))
