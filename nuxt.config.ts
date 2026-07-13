export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@sentry/nuxt/module',
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'theme-color', content: '#1F71B8' },
        { property: 'og:image', content: 'https://cartoguide.teritorio.xyz/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:image', content: 'https://cartoguide.teritorio.xyz/og-image.png' },
      ],
    },
  },

  site: {
    url: 'https://cartoguide.teritorio.xyz',
    name: 'CartoGuide',
    defaultLocale: 'fr',
    trailingSlash: false,
  },

  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Teritorio',
      url: 'https://www.teritorio.fr',
      logo: 'https://www.teritorio.fr/wp-content/themes/teritorio/assets/images/favicon/favicon-194x194.png',
    },
  },

  sitemap: {
    autoLastmod: true,
  },

  linkChecker: {
    runOnBuild: true,
    failOnError: true,
  },

  ogImage: {
    enabled: false,
  },

  i18n: {
    baseUrl: 'https://cartoguide.teritorio.xyz',
    strategy: 'prefix',
    defaultLocale: 'fr',
    langDir: 'locales',
    locales: [
      { code: 'en', name: 'English', language: 'en-US', file: 'en.ts' },
      { code: 'fr', name: 'Français', language: 'fr-FR', file: 'fr.ts' },
      { code: 'es', name: 'Español', language: 'es-ES', file: 'es.ts' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: 'root',
    },
  },

  typescript: {
    strict: true,
    typeCheck: true,
  },

  nitro: {
    prerender: {
      routes: ['fr', 'en', 'es'].flatMap(locale => [
        `/${locale}`,
        `/${locale}/features`,
        `/${locale}/contact`,
      ]),
    },
  },

  colorMode: {
    preference: 'light',
  },

  runtimeConfig: {
    public: {
      sentryDsn: '',
    },
  },

  sentry: {
    sourceMapsUploadOptions: {
      org: 'teritorio',
      project: 'cartoguide-website',
    },
  },

  compatibilityDate: '2025-03-24',
  devtools: { enabled: true },
})
