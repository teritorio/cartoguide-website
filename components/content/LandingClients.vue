<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  ctaLabel?: string
  ctaTo?: string
  useCases?: Array<{
    title: string
    description: string
    logos?: Array<{ src: string, alt: string, href?: string }>
  }>
}>()
</script>

<template>
  <section class="bg-slate-100 py-16 sm:py-24">
    <UContainer>
      <LandingSectionHeader :headline="headline" :title="title" />
      <div v-if="useCases?.length" class="mt-12 space-y-10">
        <div v-for="uc in useCases" :key="uc.title">
          <h3 class="text-base font-semibold text-slate-900">
            {{ uc.title }}
          </h3>
          <p class="mt-1 text-sm text-slate-600">
            {{ uc.description }}
          </p>
          <div v-if="uc.logos?.length" class="mt-4 flex flex-wrap gap-3">
            <component
              :is="logo.href ? 'a' : 'div'"
              v-for="logo in uc.logos"
              :key="logo.alt"
              :href="logo.href"
              :target="logo.href ? '_blank' : undefined"
              :rel="logo.href ? 'noopener noreferrer' : undefined"
              class="flex h-14 w-32 items-center justify-center rounded-lg border border-slate-200 bg-white p-2 transition-opacity hover:opacity-80"
            >
              <img
                :src="logo.src"
                :alt="logo.alt"
                class="max-h-9 max-w-full object-contain"
                loading="lazy"
              >
            </component>
          </div>
        </div>
      </div>
      <div v-if="ctaLabel && ctaTo" class="mt-10 text-center">
        <UButton :to="ctaTo" target="_blank" size="xl" trailing-icon="i-lucide-external-link">
          {{ ctaLabel }}
        </UButton>
      </div>
      <div v-if="$slots.default" class="open-source-block mt-12 rounded-2xl border border-slate-200 bg-white px-8 py-10 text-center">
        <MDCSlot :use="$slots.default" />
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.open-source-block :deep(h3) {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-slate-900);
  margin-bottom: 0.75rem;
}

.open-source-block :deep(p) {
  color: var(--color-slate-600);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.open-source-block :deep(a) {
  color: var(--color-sky-600);
  text-decoration: underline;
  margin: 0 0.5rem;
}
</style>
