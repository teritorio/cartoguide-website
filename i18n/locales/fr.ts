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
  },
  faq: {
    headline: 'FAQ',
    title: 'Questions fréquentes',
    items: [
      {
        question: 'Qu\'est-ce que CartoGuide ?',
        answer: 'CartoGuide est une application web cartographique open source basée sur OpenStreetMap. Elle agrège vos données territoriales — SIT touristiques (Sirtaqui, Apidae, Tourinsoft), Geotrek, Open Agenda, GTFS, back-office — et les valorise sur une carte interactive optimisée mobile, accessible à tous vos publics sans installation.',
      },
      {
        question: 'CartoGuide est-il gratuit et open source ?',
        answer: 'CartoGuide est un logiciel libre sous licence AGPL-3.0, librement utilisable et modifiable. Le code source est disponible sur GitHub. Teritorio propose également des services d\'hébergement SaaS, de déploiement et d\'accompagnement pour les organisations qui souhaitent un support professionnel.',
      },
      {
        question: 'Quelles sources de données CartoGuide supporte-t-il ?',
        answer: 'CartoGuide se connecte nativement à OpenStreetMap, aux SIT touristiques (Sirtaqui, Apidae, Tourinsoft), à Geotrek, Open Agenda, GTFS et aux SIG open data. Vos données propres peuvent être saisies via le back-office Elasa. L\'ensemble est synchronisé automatiquement chaque nuit.',
      },
      {
        question: 'CartoGuide fonctionne-t-il sur mobile ?',
        answer: 'Oui, CartoGuide est conçu mobile-first. L\'interface responsive est optimisée pour les smartphones, tablettes et ordinateurs de bureau. Elle est pensée pour les agents de terrain, les personnels d\'accueil touristique et les visiteurs en déplacement.',
      },
      {
        question: 'CartoGuide peut-il être intégré dans mon site web existant ?',
        answer: 'Oui, CartoGuide s\'intègre via un widget ou un iframe dans n\'importe quel site web, en quelques lignes de code. Une API ouverte permet également de relier vos outils numériques partenaires et de personnaliser chaque aspect de l\'interface — couleurs, catégories, fond de carte — pour s\'adapter à votre charte graphique.',
      },
      {
        question: 'Combien de temps faut-il pour déployer CartoGuide ?',
        answer: 'Le déploiement d\'un CartoGuide hébergé par Teritorio prend en général entre deux et quatre semaines, selon la complexité de vos sources de données et de votre identité visuelle. Teritorio prend en charge l\'intégralité de la configuration : connecteurs de données, personnalisation de l\'interface et formation de vos équipes.',
      },
      {
        question: 'Quels types d\'organisations utilisent CartoGuide ?',
        answer: 'CartoGuide est déployé par plus de 30 organisations territoriales en France et dans les territoires d\'outre-mer : offices de tourisme, communes et intercommunalités, pays et territoires ruraux, communautés professionnelles de santé (CPTS), ainsi que des acteurs de l\'alimentation locale et des circuits courts.',
      },
      {
        question: 'Comment contribuer à OpenStreetMap avec CartoGuide ?',
        answer: 'CartoGuide intègre un mode contributeur qui permet à vos agents et bénévoles d\'enrichir les données OpenStreetMap directement depuis la carte, sans quitter l\'interface. Ces contributions profitent à tout l\'écosystème : Géovélo, la SNCF, Apple Maps, l\'IGN et bien d\'autres acteurs du territoire.',
      },
    ],
  },
}))
