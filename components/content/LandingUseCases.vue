<script setup lang="ts">
const props = defineProps<{
  headline?: string
  title?: string
  description?: string
  ctaLabel?: string
  ctaTo?: string
}>()

const resolvedCtaTo = useLocaleTo(computed(() => props.ctaTo))
</script>

<template>
  <section class="py-16 sm:py-24">
    <UContainer>
      <LandingSectionHeader :headline="headline" :title="title" :description="description" />
      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <MDCSlot :use="$slots.default" />
      </div>
      <div v-if="ctaLabel && resolvedCtaTo" class="mt-12 text-center">
        <UButton :to="resolvedCtaTo" size="xl" variant="outline">
          {{ ctaLabel }}
        </UButton>
      </div>
    </UContainer>
  </section>
</template>
