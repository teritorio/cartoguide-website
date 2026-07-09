import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const locales = ['en', 'fr', 'es'] as const

function defineLocaleCollection(locale: typeof locales[number]) {
  return defineCollection({
    type: 'page',
    source: {
      include: `${locale}/**`,
      prefix: `/${locale}`,
    },
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
    }),
  })
}

export default defineContentConfig({
  collections: Object.fromEntries(
    locales.map(locale => [`content_${locale}`, defineLocaleCollection(locale)]),
  ),
})
