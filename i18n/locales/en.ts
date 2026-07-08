export default defineI18nLocale(async () => ({
  nav: {
    home: 'CartoGuide',
    features: 'Features',
    contact: 'Demo',
    github: 'GitHub',
    seeCartoGuide: 'See CartoGuide',
    changeLanguage: 'Change language',
  },
  footer: {
    product: 'Product',
    resources: 'Resources',
    company: 'Company',
    copyright: '© {year} {teritorio}.',
  },
  contact: {
    title: 'Contact us',
    description: 'Have a question about CartoGuide? Need a demo or support?',
    demoTitle: 'Request a demonstration',
    demoDescription: 'During a demonstration, we take the time to:',
    demoItem1: 'discuss your context and needs',
    demoItem2: 'present CartoGuide and how it works',
    demoItem3: 'illustrate concrete use cases',
    demoItem4: 'share our roadmap',
    ctaLabel: 'Contact us',
    externalUrl: 'https://www.teritorio.fr/en/contact-en/',
    externalNotice: 'You will be redirected to the Teritorio website.',
  },
  seo: {
    description: 'Open source interactive map based on OpenStreetMap. Local geographic search engine, mobile-optimized, to showcase territory data.',
    ogImageAlt: 'CartoGuide — Open source interactive map for your territory',
  },
  error: {
    title: 'Page not found',
    message: 'The page you\'re looking for doesn\'t exist or has been moved.',
    backHome: 'Back to home',
  },
  page: {
    empty: 'This page has no content yet.',
    notFound: 'Page not found',
  },
}))
