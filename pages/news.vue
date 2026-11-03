<script setup lang="ts">
const { t, locale } = useI18n()
const { typeColor, formatDate } = useNewsFormatting()

const collectionName = computed(() => `news_${locale.value}` as 'news_fr' | 'news_en' | 'news_es')

const { data: newsItems } = await useAsyncData(
  () => `news-all-${locale.value}`,
  () => queryCollection(collectionName.value).order('date', 'DESC').all(),
  { watch: [locale] },
)

useSeoMeta({
  title: t('news.pageTitle'),
  description: t('news.pageDescription'),
})
</script>

<template>
  <div class="flex flex-col flex-1">
    <PageHeader
      :headline="t('news.headline')"
      :title="t('news.pageTitle')"
      :description="t('news.pageDescription')"
    />

    <div v-if="!newsItems?.length" class="flex flex-1 items-center justify-center text-slate-500">
      {{ t('news.empty') }}
    </div>
    <UContainer v-else class="py-16">
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <UCard
          v-for="item in newsItems"
          :key="item.url"
          class="flex flex-col"
          :ui="{ body: 'flex flex-col flex-1' }"
        >
          <template #header>
            <div class="flex items-center justify-between gap-2">
              <UBadge :color="typeColor(item.type)" variant="soft" size="sm">
                {{ t(`news.types.${item.type}`) }}
              </UBadge>
              <time class="text-xs text-slate-400">{{ formatDate(item.date) }}</time>
            </div>
          </template>
          <p class="flex-1 text-sm text-slate-600">
            {{ item.description }}
          </p>
          <template #footer>
            <UButton
              :to="item.url"
              target="_blank"
              rel="noopener"
              variant="ghost"
              size="sm"
              trailing-icon="i-lucide-external-link"
              class="w-full justify-center"
            >
              {{ item.title }}
            </UButton>
          </template>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>
