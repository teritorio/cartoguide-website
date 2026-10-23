<script setup lang="ts">
defineProps<{
  icon?: string
  title: string
  image?: string
}>()

const variant = inject<Ref<string>>('featureVariant', ref('default'))
const sectionBg = inject<Ref<string>>('featureSectionBg', ref(''))

const cardBg = computed(() =>
  sectionBg.value ? 'bg-white' : 'bg-slate-50',
)

const iconBg = computed(() =>
  variant.value === 'secondary' ? 'bg-secondary/10' : 'bg-primary/10',
)

const iconColor = computed(() =>
  variant.value === 'secondary' ? 'text-secondary' : 'text-primary',
)

const hoverBorder = computed(() =>
  variant.value === 'secondary' ? 'hover:border-secondary/40' : 'hover:border-primary/40',
)
</script>

<template>
  <div
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
