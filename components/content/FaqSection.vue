<script setup lang="ts">
const props = defineProps<{
  items?: Array<{ question: string, answer: string }>
}>()

const { t } = useI18n()

const accordionItems = computed(() =>
  (props.items ?? []).map(item => ({ label: item.question, content: item.answer })),
)

useSchemaOrg([
  defineWebPage({
    '@type': ['WebPage', 'FAQPage'],
    'mainEntity': (props.items ?? []).map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': { '@type': 'Answer', 'text': item.answer },
    })),
  }),
])
</script>

<template>
  <section class="py-16 sm:py-24">
    <UContainer>
      <SectionHeader :headline="t('faq.headline')" :title="t('faq.title')" />
      <UAccordion class="mx-auto mt-12 max-w-3xl" :items="accordionItems" :ui="{ trigger: 'cursor-pointer' }" />
    </UContainer>
  </section>
</template>
