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
  },
}))
