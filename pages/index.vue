<script setup lang="ts">
const { t, locale } = useI18n()

const collectionName = computed(() => `content_${locale.value}` as const)

const { data: page } = await useAsyncData(
  `index-${locale.value}`,
  () => queryCollection(collectionName.value).path(`/${locale.value}`).first(),
)

useHead({
  title: () => page.value?.title,
  meta: [
    { name: 'description', content: () => page.value?.description },
  ],
})

useSchemaOrg([
  defineWebPage({
    '@type': ['WebPage', 'FAQPage'],
    'mainEntity': [
      { '@type': 'Question', 'name': t('faq.whatIsCartoGuide.q'), 'acceptedAnswer': { '@type': 'Answer', 'text': t('faq.whatIsCartoGuide.a') } },
      { '@type': 'Question', 'name': t('faq.isFree.q'), 'acceptedAnswer': { '@type': 'Answer', 'text': t('faq.isFree.a') } },
      { '@type': 'Question', 'name': t('faq.dataSources.q'), 'acceptedAnswer': { '@type': 'Answer', 'text': t('faq.dataSources.a') } },
      { '@type': 'Question', 'name': t('faq.mobile.q'), 'acceptedAnswer': { '@type': 'Answer', 'text': t('faq.mobile.a') } },
      { '@type': 'Question', 'name': t('faq.osmContribution.q'), 'acceptedAnswer': { '@type': 'Answer', 'text': t('faq.osmContribution.a') } },
    ],
  }),
])
</script>

<template>
  <div v-if="page">
    <ContentRenderer :value="page">
      <template #empty>
        <p class="text-muted">
          {{ t('page.empty') }}
        </p>
      </template>
    </ContentRenderer>
  </div>
</template>
