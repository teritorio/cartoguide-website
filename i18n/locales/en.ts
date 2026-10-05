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
    title: 'Let\'s talk about your project',
    description: 'Got a territorial project? Let\'s discuss your needs and explore how CartoGuide can help.',
    demoTitle: 'What we can do together',
    demoDescription: 'During our conversation, we take the time to:',
    demoItem1: 'discuss your context and needs',
    demoItem2: 'present the concepts and how CartoGuide works',
    demoItem3: 'illustrate concrete use cases',
    demoItem4: 'share our roadmap',
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
    items: [
      {
        question: 'What data can we use with CartoGuide?',
        answer: 'CartoGuide can bring together data from a variety of sources: TIS, Tourinsoft, Apidae, DATAtourisme, OpenStreetMap, transport data, business databases and other territorial sources.',
      },
      {
        question: 'Can CartoGuide integrate with our existing information system?',
        answer: 'Yes, CartoGuide integrates with your existing ecosystem, in particular through connectors, APIs and widgets.',
      },
      {
        question: 'Do we need to change or migrate our current tools?',
        answer: 'CartoGuide can fit into your existing environment and make the most of data already produced by your tools.',
      },
      {
        question: 'How does OpenStreetMap integrate with CartoGuide?',
        answer: 'OpenStreetMap provides an open, global geographic data foundation enriched by a community of contributors, which CartoGuide makes it possible to use alongside your business data. Teritorio supports territories in better exploiting this data, contributing to its quality and building richer, more open and shared geographic information.',
      },
      {
        question: 'Can CartoGuide be customised to our territory and our field?',
        answer: 'Interface, menus, categories, filters, content, data and experience can all be adapted from the back-office.',
      },
      {
        question: 'How does a CartoGuide project work?',
        answer: 'From discovering the issues and data through to design, support, training and implementation.',
      },
      {
        question: 'What can Teritorio bring us beyond the software?',
        answer: 'Discovery workshops, research into existing or little-known data, advice on architecture and data distribution, project support and training.',
      },
      {
        question: 'Why is CartoGuide open source software?',
        answer: 'CartoGuide is published under the AGPL-3.0 licence. Being open source allows it to be part of an ecosystem of open data and technologies, particularly around OpenStreetMap.',
      },
    ],
  },
}))
