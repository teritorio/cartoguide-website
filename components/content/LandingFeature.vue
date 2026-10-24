<script setup lang="ts">
defineProps<{
  icon?: string
  title: string
  image?: string
  video?: string
}>()

const variant = inject<Ref<string>>('featureVariant', ref('default'))
const sectionBg = inject<Ref<string>>('featureSectionBg', ref(''))
const inTabsContext = inject<boolean>('inTabsContext', false)

const cardBg = computed(() =>
  sectionBg.value ? 'bg-white' : 'bg-slate-50',
)

const iconBg = computed(() => {
  if (variant.value === 'secondary')
    return 'bg-secondary/10'
  if (variant.value === 'accent')
    return 'bg-orange-50'
  return 'bg-primary/10'
})

const iconColor = computed(() => {
  if (variant.value === 'secondary')
    return 'text-secondary'
  if (variant.value === 'accent')
    return 'text-orange-600'
  return 'text-primary'
})

const hoverBorder = computed(() => {
  if (variant.value === 'secondary')
    return 'hover:border-secondary/40'
  if (variant.value === 'accent')
    return 'hover:border-orange-300'
  return 'hover:border-primary/40'
})

const registerFeature = inject<(() => number) | null>('registerFeature', null)
const featureIndex = registerFeature ? registerFeature() : -1
const isOpen = ref(featureIndex === 0)
</script>

<template>
  <!-- Accordion mode (inside LandingFeaturesTabs) -->
  <div v-if="inTabsContext">
    <button
      class="flex w-full items-center gap-4 py-5 text-left"
      @click="isOpen = !isOpen"
    >
      <div v-if="icon" class="flex size-10 shrink-0 items-center justify-center rounded-lg" :class="iconBg">
        <UIcon :name="icon" class="size-5" :class="iconColor" />
      </div>
      <h3 class="flex-1 text-base font-semibold text-slate-900">
        {{ title }}
      </h3>
      <UIcon
        name="i-lucide-chevron-down"
        class="size-5 shrink-0 text-slate-400 transition-transform duration-200"
        :class="isOpen ? 'rotate-180' : ''"
      />
    </button>
    <div v-show="isOpen" class="grid grid-cols-1 gap-6 pb-6 md:grid-cols-2">
      <div class="text-sm leading-relaxed text-slate-600">
        <MDCSlot :use="$slots.default" />
      </div>
      <div v-if="video || image" class="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
        <video v-if="video" :src="video" autoplay loop muted playsinline class="w-full" />
        <img v-else-if="image" :src="image" :alt="title" class="h-full w-full object-cover" loading="lazy">
      </div>
    </div>
  </div>

  <!-- Card mode (standalone grid) -->
  <div
    v-else
    class="rounded-xl border border-slate-200 p-4 transition-all duration-200 hover:shadow-md sm:p-6"
    :class="[cardBg, hoverBorder, image ? 'flex items-start gap-4' : '']"
  >
    <div :class="image ? 'min-w-0 flex-1' : ''">
      <div v-if="icon" class="mb-4 flex size-10 items-center justify-center rounded-lg" :class="iconBg">
        <UIcon :name="icon" class="size-5" :class="iconColor" />
      </div>
      <h3 class="text-base font-semibold text-slate-900">
        {{ title }}
      </h3>
      <div class="mt-2 text-sm text-slate-600">
        <MDCSlot :use="$slots.default" />
      </div>
    </div>
    <div v-if="image" class="w-36 shrink-0 overflow-hidden rounded-lg border border-slate-100 sm:w-44">
      <img :src="image" :alt="title" class="h-full w-full object-cover" loading="lazy">
    </div>
  </div>
</template>
