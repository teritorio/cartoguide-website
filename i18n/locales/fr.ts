export default defineI18nLocale(async () => ({
  nav: {
    home: 'CartoGuide',
    features: 'Fonctionnalités',
    contact: 'Démo',
    github: 'GitHub',
    seeCartoGuide: 'Voir CartoGuide',
    changeLanguage: 'Changer de langue',
  },
  footer: {
    product: 'Produit',
    resources: 'Ressources',
    company: 'Entreprise',
    copyright: '© {year} {teritorio}.',
  },
  contact: {
    title: 'Contactez-nous',
    description: 'Une question sur CartoGuide ? Besoin d\'une démo ou d\'un accompagnement ?',
    demoTitle: 'Demander une démonstration',
    demoDescription: 'Lors d\'une démonstration, nous prenons le temps :',
    demoItem1: 'd\'échanger sur votre contexte et vos besoins',
    demoItem2: 'de vous présenter CartoGuide et son fonctionnement',
    demoItem3: 'd\'illustrer des cas d\'usage concrets',
    demoItem4: 'de vous partager notre feuille de route',
    ctaLabel: 'Nous contacter',
    externalUrl: 'https://www.teritorio.fr/fr/contact/',
    externalNotice: 'Vous serez redirigé vers le site de Teritorio.',
  },
  seo: {
    description: 'Web app cartographique open source basée sur OpenStreetMap. Moteur de recherche géographique local, optimisé mobile, pour valoriser les données du territoire.',
    ogImageAlt: 'CartoGuide — Carte interactive open source pour votre territoire',
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
}))
