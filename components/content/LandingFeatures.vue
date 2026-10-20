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
}>()

const resolvedCtaTo = useLocaleTo(computed(() => props.ctaTo))
const gridClass = computed(() => props.columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3')
</script>

<template>
  <section class="py-16 sm:py-24" :class="[bg]">
    <UContainer>
      <LandingSectionHeader :headline="headline" :title="title" :description="description" />
      <div v-if="screenshot" class="mt-10 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
        <img :src="screenshot" :alt="title" class="w-full" loading="lazy">
      </div>
      <div class="mt-12 grid gap-6" :class="gridClass">
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
