<script setup lang="ts">
const { locale } = useI18n()

const collectionName = computed(() => `content_${locale.value}` as const)

const { data: page } = await useAsyncData(
  `index-${locale.value}`,
  () => queryCollection(collectionName.value).path(`/${locale.value}`).first(),
)

if (!page.value) {
  throw createError({ statusCode: 404, fatal: true })
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
          {{ $t('page.empty') }}
        </p>
      </template>
    </ContentRenderer>
  </div>
</template>
