<script setup lang="ts">
const { t, locale } = useI18n()
const route = useRoute()

const collectionName = computed(() => `content_${locale.value}` as const)

const slug = computed(() => (route.params.slug as string[]) || [])

const path = computed(() => {
  return `/${locale.value}/${slug.value.join('/')}`
})

const { data: page } = await useAsyncData(
  `slug-${locale.value}-${slug.value.join('/')}`,
  () => queryCollection(collectionName.value).path(path.value).first(),
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

useHead({
  title: () => page.value?.title,
  meta: [
    { name: 'description', content: () => page.value?.description },
  ],
})

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: computed(() => {
      const items: Array<{ name: string, item: string }> = [
        { name: 'CartoGuide', item: `/${locale.value}` },
      ]
      if (slug.value.length > 0 && page.value?.title)
        items.push({ name: page.value.title, item: path.value })
      return items
    }),
  }),
])
</script>

<template>
  <UContainer class="py-16">
    <div class="prose dark:prose-invert max-w-none">
      <ContentRenderer :value="page!">
        <template #empty>
          <p class="text-muted">
            {{ t('page.empty') }}
          </p>
        </template>
      </ContentRenderer>
    </div>
  </UContainer>
</template>
