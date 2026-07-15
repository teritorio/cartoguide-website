export default defineI18nLocale(async () => ({
  nav: {
    home: 'CartoGuide',
    features: 'Features',
    useCases: 'Use Cases',
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
    title: 'Contact us',
    description: 'Have a question about CartoGuide? Need a demo or support?',
    demoTitle: 'Request a demonstration',
    demoDescription: 'During a demonstration, we take the time to:',
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
  },
  faq: {
    whatIsCartoGuide: {
      q: 'What is CartoGuide?',
      a: 'CartoGuide is an open source web mapping application based on OpenStreetMap. It aggregates your territorial data (tourism information systems, Geotrek, Open Agenda, GTFS, back-office) and showcases them on a mobile-optimized interactive map.',
    },
    isFree: {
      q: 'Is CartoGuide free?',
      a: 'CartoGuide is open source software under the MIT license, free to use and modify. Teritorio offers hosting, deployment, and support services for organizations that need guidance.',
    },
    dataSources: {
      q: 'What data sources does CartoGuide support?',
      a: 'CartoGuide connects to OpenStreetMap, tourism information systems (Sirtaqui, Apidae, Tourinsoft), Geotrek, Open Agenda, GTFS, open data GIS, and editorial content from the Elasa back-office. Data is synchronized every night.',
    },
    mobile: {
      q: 'Does CartoGuide work on mobile?',
      a: 'Yes, CartoGuide is designed mobile-first. The interface is responsive and optimized for smartphones, tablets and desktops. It is built for field agents, reception staff and visitors on the go.',
    },
    osmContribution: {
      q: 'How can we contribute to OpenStreetMap with CartoGuide?',
      a: 'CartoGuide includes a contributor mode that allows your agents and volunteers to enrich OpenStreetMap data directly from the map. These contributions benefit the whole ecosystem: Géovélo, SNCF, Apple Maps, IGN and many others.',
    },
  },
}))
