<script setup lang="ts">
defineProps<{
  tagline?: string
  logos: Array<{ src: string, alt: string, href?: string }>
}>()
</script>

<template>
  <section class="border-y border-slate-200 bg-white py-8">
    <UContainer>
      <p v-if="tagline" class="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-slate-400">
        {{ tagline }}
      </p>
    </UContainer>
    <div class="overflow-hidden">
      <div class="flex w-max items-center gap-6 animate-marquee hover:[animation-play-state:paused] sm:gap-10">
        <NuxtLink
          v-for="logo in logos"
          :key="logo.src"
          :to="logo.href"
          :aria-label="logo.alt"
          target="_blank"
          rel="noopener noreferrer"
          class="shrink-0 opacity-40 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0"
          :class="{ 'pointer-events-none': !logo.href }"
        >
          <NuxtImg
            :src="logo.src"
            :alt="logo.alt"
            class="h-10 w-auto object-contain sm:h-12"
            loading="lazy"
          />
        </NuxtLink>
        <NuxtLink
          v-for="logo in logos"
          :key="`dup-${logo.src}`"
          :to="logo.href"
          aria-hidden="true"
          tabindex="-1"
          target="_blank"
          rel="noopener noreferrer"
          class="shrink-0 opacity-40 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0"
          :class="{ 'pointer-events-none': !logo.href }"
        >
          <NuxtImg
            :src="logo.src"
            :alt="logo.src"
            class="h-10 w-auto object-contain sm:h-12"
            loading="lazy"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 50s linear infinite;
}
</style>
