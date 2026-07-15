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
    'mainEntity': computed(() => [
      { '@type': 'Question', 'name': t('faq.q1'), 'acceptedAnswer': { '@type': 'Answer', 'text': t('faq.a1') } },
      { '@type': 'Question', 'name': t('faq.q2'), 'acceptedAnswer': { '@type': 'Answer', 'text': t('faq.a2') } },
      { '@type': 'Question', 'name': t('faq.q3'), 'acceptedAnswer': { '@type': 'Answer', 'text': t('faq.a3') } },
      { '@type': 'Question', 'name': t('faq.q4'), 'acceptedAnswer': { '@type': 'Answer', 'text': t('faq.a4') } },
      { '@type': 'Question', 'name': t('faq.q5'), 'acceptedAnswer': { '@type': 'Answer', 'text': t('faq.a5') } },
    ]).value,
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
