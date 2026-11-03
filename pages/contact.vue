<script setup lang="ts">
const { t, locale } = useI18n()

const collectionName = computed(() => `content_${locale.value}` as const)

const { data: page } = await useAsyncData(
  () => `contact-${locale.value}`,
  () => queryCollection(collectionName.value).path(`/${locale.value}/contact`).first(),
  { watch: [locale] },
)

const data = computed(() => {
  if (!page.value)
    return null
  const meta = (page.value.meta ?? {}) as {
    heading?: string
    intro?: string
    demoTitle?: string
    demoDescription?: string
    demoItems?: string[]
  }
  return {
    title: page.value.title,
    description: page.value.description,
    ...meta,
  }
})

useHead({
  title: () => page.value?.title,
  meta: [
    { name: 'description', content: () => page.value?.description },
  ],
})
</script>

<template>
  <UContainer class="flex flex-1 items-center py-16">
    <div class="mx-auto max-w-xl">
      <h1 class="text-2xl sm:text-3xl font-bold tracking-tight">
        {{ data?.heading }}
      </h1>
      <p class="mt-4 text-muted">
        {{ data?.intro }}
      </p>

      <div class="mt-8 rounded-lg border border-primary/20 bg-primary/5 p-6">
        <h2 class="text-lg font-semibold">
          {{ data?.demoTitle }}
        </h2>
        <p class="mt-2 text-sm text-muted">
          {{ data?.demoDescription }}
        </p>
        <ul class="mt-3 space-y-1 text-sm text-muted list-disc list-inside">
          <li v-for="item in (data?.demoItems ?? [])" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="mt-8 text-center">
        <UButton
          :to="t('contact.externalUrl')"
          target="_blank"
          rel="noopener"
          size="xl"
          icon="i-lucide-external-link"
        >
          {{ t('contact.ctaLabel') }}
        </UButton>
        <p class="mt-3 text-sm text-muted">
          {{ t('contact.externalNotice') }}
        </p>
      </div>
    </div>
  </UContainer>
</template>
