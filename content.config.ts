import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const locales = ['en', 'fr', 'es'] as const

function defineLocaleCollection(locale: typeof locales[number]) {
  return defineCollection({
    type: 'page',
    source: {
      include: `${locale}/**`,
      prefix: `/${locale}`,
    },
  })
}

function defineNewsCollection(locale: typeof locales[number]) {
  return defineCollection({
    type: 'data',
    source: `news/${locale}/*.yaml`,
    schema: z.object({
      title: z.string(),
      date: z.string(),
      description: z.string(),
      url: z.string(),
      type: z.enum(['article', 'release', 'feature', 'event']),
    }),
  })
}

export default defineContentConfig({
  collections: {
    ...Object.fromEntries(locales.map(locale => [`content_${locale}`, defineLocaleCollection(locale)])),
    ...Object.fromEntries(locales.map(locale => [`news_${locale}`, defineNewsCollection(locale)])),
  },
})
