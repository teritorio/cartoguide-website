export default defineI18nLocale(async () => ({
  nav: {
    home: 'CartoGuide',
    features: 'Features',
    useCases: 'Use Cases',
    news: 'News',
    contact: 'Contact',
    github: 'GitHub',
    seeCartoGuide: 'See CartoGuide',
    changeLanguage: 'Change language',
  },
  footer: {
    product: 'Product',
    resources: 'Resources',
    company: 'Company',
  },
  contact: {
    ctaLabel: 'Contact us',
    externalUrl: 'https://www.teritorio.fr/en/contact-en/',
    externalNotice: 'You will be redirected to the Teritorio website.',
  },
  seo: {
    description: 'Open source interactive map based on OpenStreetMap. Local geographic search engine, mobile-optimized, to showcase territory data.',
    ogImageAlt: 'CartoGuide — Open source interactive map based on OpenStreetMap',
  },
  error: {
    title: 'Page not found',
    message: 'The page you\'re looking for doesn\'t exist or has been moved.',
    backHome: 'Back to home',
  },
  page: {
    empty: 'This page has no content yet.',
    notFound: 'Page not found',
    mapLoading: 'Loading map…',
  },
  references: {
    openMap: 'Open the map',
  },
  news: {
    headline: 'News',
    pageTitle: 'All news',
    pageDescription: 'Articles, releases and events around CartoGuide.',
    readMore: 'Read more',
    empty: 'No news at the moment.',
    types: {
      article: 'Article',
      release: 'Release',
      feature: 'Feature',
      event: 'Event',
    },
  },
  faq: {
    headline: 'FAQ',
    title: 'Do you have questions about CartoGuide?',
  },
}))
