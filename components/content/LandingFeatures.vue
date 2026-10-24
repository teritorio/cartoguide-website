<script setup lang="ts">
const props = defineProps<{
  headline?: string
  title?: string
  description?: string
  bg?: string
  screenshot?: string
  ctaLabel?: string
  ctaTo?: string
  columns?: number
  variant?: 'default' | 'secondary' | 'accent'
}>()

const resolvedCtaTo = useLocaleTo(computed(() => props.ctaTo))

const GRID_COLS: Record<number, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
}
const gridClass = computed(() => GRID_COLS[props.columns ?? 3] ?? 'sm:grid-cols-2 lg:grid-cols-3')

provide('featureVariant', computed(() => props.variant ?? 'default'))
provide('featureSectionBg', computed(() => props.bg ?? ''))

const inTabsContext = inject<boolean>('inTabsContext', false)
const tabs = inject<string[]>('tabs', [])
const activeTabIndex = inject<Ref<number> | null>('activeTabIndex', null)

const sectionIndex = computed(() => props.headline ? tabs.indexOf(props.headline) : -1)

const isVisible = computed(() => {
  if (!activeTabIndex || sectionIndex.value === -1)
    return true
  return sectionIndex.value === activeTabIndex.value
})

const featureCount = ref(0)
provide('registerFeature', () => featureCount.value++)
</script>

<template>
  <section v-show="isVisible" :class="[bg, inTabsContext ? 'py-8 sm:py-12' : 'py-16 sm:py-24']">
    <UContainer>
      <LandingSectionHeader :headline="headline" :title="title" :description="description" />
      <div v-if="screenshot" class="mt-10 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
        <img :src="screenshot" :alt="title" class="w-full" loading="lazy">
      </div>
      <div
        v-if="inTabsContext"
        class="mt-6 divide-y divide-slate-200 border-t border-slate-200"
      >
        <MDCSlot :use="$slots.default" />
      </div>
      <div v-else class="mt-12 grid gap-6" :class="gridClass">
        <MDCSlot :use="$slots.default" />
      </div>
      <div v-if="ctaLabel && resolvedCtaTo" class="mt-10 text-center">
        <UButton :to="resolvedCtaTo" size="xl" variant="outline" trailing-icon="i-lucide-arrow-right">
          {{ ctaLabel }}
        </UButton>
      </div>
    </UContainer>
  </section>
</template>
