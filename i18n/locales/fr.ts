export default defineI18nLocale(async () => ({
  nav: {
    home: 'CartoGuide',
    features: 'Fonctionnalités',
    useCases: 'Cas d\'usage',
    contact: 'Contact',
    github: 'GitHub',
    seeCartoGuide: 'Voir CartoGuide',
    changeLanguage: 'Changer de langue',
  },
  footer: {
    product: 'Produit',
    resources: 'Ressources',
    company: 'Entreprise',
  },
  contact: {
    title: 'Contactez-nous',
    description: 'Une question sur CartoGuide ? Besoin d\'une démo ou d\'un accompagnement ?',
    demoTitle: 'Demander une démonstration',
    demoDescription: 'Lors d\'une démonstration, nous prenons le temps :',
    demoItem1: 'd\'échanger sur votre contexte et vos besoins',
    demoItem2: 'de vous présenter les concepts et le fonctionnement de CartoGuide',
    demoItem3: 'd\'illustrer des cas d\'usage concrets',
    demoItem4: 'de vous partager notre feuille de route',
    ctaLabel: 'Nous contacter',
    externalUrl: 'https://www.teritorio.fr/fr/contact/',
    externalNotice: 'Vous serez redirigé vers le site de Teritorio.',
  },
  seo: {
    description: 'Web app cartographique open source basée sur OpenStreetMap. Moteur de recherche géographique local, optimisé mobile, pour valoriser les données du territoire.',
    ogImageAlt: 'CartoGuide — Web app cartographique open source basée sur OpenStreetMap',
  },
  error: {
    title: 'Page introuvable',
    message: 'La page que vous cherchez n\'existe pas ou a été déplacée.',
    backHome: 'Retour à l\'accueil',
  },
  page: {
    empty: 'Cette page n\'a pas encore de contenu.',
    notFound: 'Page introuvable',
  },
  faq: {
    whatIsCartoGuide: {
      q: 'Qu\'est-ce que CartoGuide ?',
      a: 'CartoGuide est une application web cartographique open source basée sur OpenStreetMap. Elle agrège vos données territoriales (SIT touristiques, Geotrek, Open Agenda, GTFS, back-office) et les valorise sur une carte interactive optimisée mobile.',
    },
    isFree: {
      q: 'CartoGuide est-il gratuit ?',
      a: 'CartoGuide est un logiciel libre sous licence MIT, librement utilisable et modifiable. Teritorio propose des services d\'hébergement, de déploiement et d\'accompagnement pour les organisations qui souhaitent être guidées.',
    },
    dataSources: {
      q: 'Quelles sources de données CartoGuide supporte-t-il ?',
      a: 'CartoGuide se connecte à OpenStreetMap, aux SIT touristiques (Sirtaqui, Apidae, Tourinsoft), à Geotrek, Open Agenda, GTFS, aux SIG open data et aux contenus éditoriaux du back-office Elasa. Les données sont synchronisées chaque soir.',
    },
    mobile: {
      q: 'CartoGuide fonctionne-t-il sur mobile ?',
      a: 'Oui, CartoGuide est conçu mobile-first. L\'interface est responsive et optimisée pour les smartphones, tablettes et ordinateurs. Elle est pensée pour les agents de terrain, les personnels d\'accueil et les visiteurs en déplacement.',
    },
    osmContribution: {
      q: 'Comment contribuer à OpenStreetMap avec CartoGuide ?',
      a: 'CartoGuide intègre un mode contributeur qui permet à vos agents et bénévoles d\'enrichir les données OpenStreetMap directement depuis la carte. Ces contributions profitent à tout l\'écosystème : Géovélo, la SNCF, Apple Maps, l\'IGN et bien d\'autres.',
    },
  },
}))
