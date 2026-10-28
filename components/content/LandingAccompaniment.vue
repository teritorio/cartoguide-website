<script setup lang="ts">
const props = defineProps<{
  headline?: string
  title?: string
  description?: string
  ctaLabel?: string
  ctaTo?: string
  steps?: Array<{ title: string, description: string }>
}>()

const numberedSteps = computed(() =>
  props.steps?.map((step, i) => ({ ...step, avatar: { text: String(i + 1) } })),
)
</script>

<template>
  <section class="py-16 sm:py-24">
    <UContainer>
      <SectionHeader :headline="headline" :title="title" />
      <p v-if="description" class="mx-auto mt-4 max-w-2xl text-center text-lg text-muted">
        {{ description }}
      </p>
      <div v-if="numberedSteps?.length" class="mx-auto mt-12 max-w-2xl">
        <UTimeline
          :items="numberedSteps"
          :ui="{ indicator: 'border-2 border-primary bg-white text-primary font-semibold' }"
        />
      </div>
      <div v-if="ctaLabel && ctaTo" class="mt-10 text-center">
        <UButton :to="ctaTo" target="_blank" rel="noopener noreferrer" size="lg" variant="outline" trailing-icon="i-lucide-external-link">
          {{ ctaLabel }}
        </UButton>
      </div>
    </UContainer>
  </section>
</template>
