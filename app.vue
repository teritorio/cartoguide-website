<script setup lang="ts">
import { en, es, fr } from '@nuxt/ui/locale'

const uiLocales: Record<string, typeof en> = { en, fr, es }

const { t, locale } = useI18n()
const route = useRoute()
const uiLocale = computed(() => uiLocales[locale.value] || en)

useSeoMeta({
  description: () => t('seo.description'),
  ogImageAlt: () => t('seo.ogImageAlt'),
})

useHead({
  link: [
    { rel: 'manifest', href: () => `/site.${locale.value}.webmanifest` },
  ],
})

useSchemaOrg([{
  '@type': 'SoftwareApplication',
  'name': 'CartoGuide',
  'operatingSystem': 'Web',
  'applicationCategory': 'GISApplication',
  'offers': {
    '@type': 'Offer',
    'price': 0,
    'priceCurrency': 'EUR',
  },
  'license': 'https://opensource.org/licenses/MIT',
  'author': {
    '@type': 'Organization',
    'name': 'Teritorio',
    'url': 'https://www.teritorio.fr',
  },
}])
</script>

<template>
  <UApp :locale="uiLocale">
    <NuxtLayout>
      <NuxtPage :page-key="route.path" />
    </NuxtLayout>
  </UApp>
</template>
