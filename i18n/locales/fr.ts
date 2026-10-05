export default defineI18nLocale(async () => ({
  nav: {
    home: 'CartoGuide',
    features: 'Fonctionnalités',
    useCases: 'Cas d\'usage',
    news: 'Actualités',
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
    title: 'Parlons de votre projet',
    description: 'Vous avez un projet territorial ? Échangeons sur vos besoins et voyons ensemble comment CartoGuide peut vous aider.',
    demoTitle: 'Ce que nous pouvons faire ensemble',
    demoDescription: 'Lors de notre échange, nous prenons le temps :',
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
    mapLoading: 'Chargement de la carte…',
  },
  news: {
    headline: 'Actualités',
    pageTitle: 'Toutes les actualités',
    pageDescription: 'Articles, sorties de versions et événements autour de CartoGuide.',
    readMore: 'Lire la suite',
    empty: 'Aucune actualité pour le moment.',
    types: {
      article: 'Article',
      release: 'Version',
      feature: 'Fonctionnalité',
      event: 'Événement',
    },
  },
  faq: {
    headline: 'FAQ',
    title: 'Vous avez des questions sur CartoGuide ?',
    items: [
      {
        question: 'Quelles données pouvons-nous utiliser avec CartoGuide ?',
        answer: 'CartoGuide peut rassembler vos données issues de différentes sources : SIT, Tourinsoft, Apidae, DATAtourisme, OpenStreetMap, données de transport, bases métier et autres sources territoriales.',
      },
      {
        question: 'CartoGuide peut-il s\'intégrer à notre système d\'information existant ?',
        answer: 'Oui, CartoGuide s\'intègre à votre écosystème existant, notamment grâce aux connecteurs, API et widgets.',
      },
      {
        question: 'Devons-nous changer ou migrer nos outils actuels ?',
        answer: 'CartoGuide peut s\'inscrire dans votre environnement existant et valoriser les données déjà produites par vos outils.',
      },
      {
        question: 'Comment OpenStreetMap s\'intègre-t-il dans CartoGuide ?',
        answer: 'OpenStreetMap constitue un socle de données géographiques ouvert, mondial et enrichi par une communauté de contributeurs, que CartoGuide permet de mobiliser aux côtés de vos données métier. Teritorio accompagne les territoires pour mieux exploiter ces données, contribuer à leur qualité et construire une information géographique plus riche, ouverte et partagée.',
      },
      {
        question: 'Peut-on personnaliser CartoGuide selon notre territoire et notre métier ?',
        answer: 'Interface, menus, catégories, filtres, contenus, données et expérience peuvent être adaptés depuis le back-office.',
      },
      {
        question: 'Comment se déroule un projet CartoGuide ?',
        answer: 'De la découverte des enjeux et des données à la conception, l\'accompagnement, la formation et la mise en œuvre.',
      },
      {
        question: 'Que peut nous apporter Teritorio au-delà du logiciel ?',
        answer: 'Séminaire de découverte, recherche de données existantes ou méconnues, conseil en architecture et en diffusion des données, accompagnement de projet et formation.',
      },
      {
        question: 'Pourquoi CartoGuide est-il un logiciel libre ?',
        answer: 'CartoGuide est publié sous licence AGPL-3.0. L\'ouverture du logiciel permet de s\'inscrire dans un écosystème de données et de technologies ouvertes, notamment autour d\'OpenStreetMap.',
      },
    ],
  },
}))
