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
  },
  faq: {
    headline: 'FAQ',
    title: 'Frequently asked questions',
    items: [
      {
        question: 'What is CartoGuide?',
        answer: 'CartoGuide is an open source web mapping application based on OpenStreetMap. It aggregates your territorial data — tourism information systems (Sirtaqui, Apidae, Tourinsoft), Geotrek, Open Agenda, GTFS, back-office — and showcases them on a mobile-optimized interactive map, accessible to all your audiences without any installation.',
      },
      {
        question: 'Is CartoGuide free and open source?',
        answer: 'CartoGuide is open source software under the AGPL-3.0 license, free to use and modify. The source code is available on GitHub. Teritorio also offers SaaS hosting, deployment, and support services for organizations that need professional assistance.',
      },
      {
        question: 'What data sources does CartoGuide support?',
        answer: 'CartoGuide natively connects to OpenStreetMap, tourism information systems (Sirtaqui, Apidae, Tourinsoft), Geotrek, Open Agenda, GTFS and open data GIS. Your own data can be entered via the Elasa back-office. Everything is synchronized automatically every night.',
      },
      {
        question: 'Does CartoGuide work on mobile?',
        answer: 'Yes, CartoGuide is designed mobile-first. The responsive interface is optimized for smartphones, tablets and desktops. It is built for field agents, tourism reception staff and visitors on the go.',
      },
      {
        question: 'Can CartoGuide be embedded in an existing website?',
        answer: 'Yes, CartoGuide is designed to fit into your existing digital ecosystem. It can be embedded via a widget or iframe in any website. Teritorio supports you in adapting the interface to your territory\'s needs.',
      },
      {
        question: 'How long does it take to deploy CartoGuide?',
        answer: 'Deploying a Teritorio-hosted CartoGuide typically takes between two and four weeks, depending on the complexity of your data sources and branding. Teritorio handles the full configuration: data connectors, interface customization and team training.',
      },
      {
        question: 'What types of organizations use CartoGuide?',
        answer: 'CartoGuide is deployed by more than 30 territorial organizations across France and overseas territories: tourist offices, municipalities and inter-municipal communities, rural pays and territories, healthcare professional communities (CPTS), and actors in local food and short supply chains.',
      },
      {
        question: 'How can we contribute to OpenStreetMap with CartoGuide?',
        answer: 'CartoGuide provides links to OpenStreetMap editors (iD, JOSM) to make it easier for your agents and volunteers to contribute. The enriched data benefits the whole ecosystem: Géovélo, SNCF, Apple Maps, IGN and many other territorial actors.',
      },
    ],
  },
}))
