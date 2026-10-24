<script setup lang="ts">
defineProps<{
  icon?: string
  title: string
  image?: string
  video?: string
}>()

const variant = inject<Ref<string>>('featureVariant', ref('default'))

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

const registerFeature = inject<(() => number) | null>('registerFeature', null)
const featureIndex = registerFeature ? registerFeature() : -1
const isOpen = ref(featureIndex === 0)
</script>

<template>
  <div>
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
</template>
