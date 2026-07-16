<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  ctaLabel?: string
  ctaTo?: string
  logos: Array<{ src: string, alt: string }>
}>()
</script>

<template>
  <section class="bg-slate-100 py-16 sm:py-24">
    <UContainer>
      <LandingSectionHeader :headline="headline" :title="title" />
    </UContainer>
    <div class="marquee-container mt-12 overflow-hidden">
      <div class="marquee-track flex gap-4">
        <div
          v-for="(logo, i) in [...logos, ...logos]"
          :key="i"
          class="flex h-16 w-36 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-3"
        >
          <img
            :src="logo.src"
            :alt="logo.alt"
            class="max-h-10 max-w-full object-contain"
            loading="lazy"
          >
        </div>
      </div>
    </div>
    <UContainer v-if="ctaLabel && ctaTo" class="mt-10 text-center">
      <UButton :to="ctaTo" target="_blank" size="xl" trailing-icon="i-lucide-external-link">
        {{ ctaLabel }}
      </UButton>
    </UContainer>
  </section>
</template>

<style scoped>
@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}

.marquee-container {
  -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
}

.marquee-track {
  width: max-content;
  animation: marquee 40s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}
</style>
