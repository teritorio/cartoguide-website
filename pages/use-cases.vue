<script setup lang="ts">
const { t, locale } = useI18n()

const collectionName = computed(() => `content_${locale.value}` as const)

const { data: page } = await useAsyncData(
  `use-cases-${locale.value}`,
  () => queryCollection(collectionName.value).path(`/${locale.value}/use-cases`).first(),
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: t('page.notFound') })
}

useHead({
  title: () => page.value?.title,
  meta: [
    { name: 'description', content: () => page.value?.description },
  ],
})
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
