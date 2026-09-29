<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  description?: string
  ctaLabel?: string
  ctaTo?: string
}>()
</script>

<template>
  <section class="py-16 sm:py-24">
    <UContainer>
      <LandingSectionHeader :headline="headline" :title="title" />
      <p v-if="description" class="mx-auto mt-4 max-w-2xl text-center text-lg text-muted">
        {{ description }}
      </p>
      <div v-if="$slots.default" class="accompaniment-body mx-auto mt-12 max-w-2xl">
        <MDCSlot :use="$slots.default" />
      </div>
      <div v-if="ctaLabel && ctaTo" class="mt-10 text-center">
        <UButton :to="ctaTo" target="_blank" rel="noopener noreferrer" size="lg" variant="outline" trailing-icon="i-lucide-external-link">
          {{ ctaLabel }}
        </UButton>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.accompaniment-body :deep(> p) {
  color: var(--color-slate-600);
  line-height: 1.75;
  margin-bottom: 2rem;
}

.accompaniment-body :deep(h3) {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-slate-900);
  border-left: 3px solid var(--color-sky-500);
  padding-left: 0.75rem;
  margin-top: 1.75rem;
  margin-bottom: 0.5rem;
}

.accompaniment-body :deep(h3 + p) {
  color: var(--color-slate-600);
  font-size: 0.9375rem;
  line-height: 1.7;
  margin-bottom: 0;
}

.accompaniment-body :deep(blockquote) {
  margin-top: 2rem;
  border-left: none;
  background-color: var(--color-sky-50);
  border-radius: 0.75rem;
  padding: 1.25rem 1.5rem;
  color: var(--color-sky-900);
  font-style: italic;
  font-size: 0.9375rem;
  line-height: 1.7;
}

.accompaniment-body :deep(blockquote p) {
  margin-top: 0;
  margin-bottom: 0;
  color: inherit;
}

.accompaniment-body :deep(a) {
  color: var(--color-sky-600);
  text-decoration: underline;
}
</style>
