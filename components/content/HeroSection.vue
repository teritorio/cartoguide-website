<script setup lang="ts">
const props = defineProps<{
  headline?: string
  title: string
  description: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
  screenshot?: string
  screenshotAlt?: string
  widgetUrl?: string
}>()

const resolvedPrimaryTo = useLocaleTo(computed(() => props.primaryTo))
const resolvedSecondaryTo = useLocaleTo(computed(() => props.secondaryTo))

const hasVisual = computed(() => !!(props.screenshot || props.widgetUrl))
</script>

<template>
  <section class="relative overflow-hidden py-24 sm:py-32">
    <div class="hero-gradient absolute inset-0" />
    <div class="hero-map absolute inset-0" />
    <UContainer class="relative">
      <div :class="hasVisual ? 'flex flex-col items-center gap-12 lg:flex-row lg:gap-16' : 'mx-auto max-w-3xl text-center'">
        <div :class="hasVisual ? 'flex-1' : ''">
          <p v-if="headline" class="text-sm font-semibold text-primary">
            {{ headline }}
          </p>
          <h1 class="mt-2 text-4xl font-bold tracking-tight sm:text-6xl" :class="[!hasVisual && 'text-center']">
            {{ title }}
          </h1>
          <p class="mt-6 text-lg text-muted" :class="[!hasVisual && 'text-center']">
            {{ description }}
          </p>
          <div class="mt-10 flex flex-wrap items-center gap-4" :class="[!hasVisual && 'justify-center']">
            <UButton
              v-if="primaryLabel && resolvedPrimaryTo"
              :to="resolvedPrimaryTo"
              size="xl"
            >
              {{ primaryLabel }}
            </UButton>
            <UButton
              v-if="secondaryLabel && resolvedSecondaryTo"
              :to="resolvedSecondaryTo"
              size="xl"
              variant="outline"
            >
              {{ secondaryLabel }}
            </UButton>
          </div>
        </div>
        <div v-if="widgetUrl" class="flex-1 overflow-hidden rounded-2xl border border-slate-200 shadow-2xl">
          <iframe
            :src="widgetUrl"
            :title="screenshotAlt || title"
            class="h-[480px] w-full"
            loading="lazy"
            allowfullscreen
          />
        </div>
        <div v-else-if="screenshot" class="flex-1">
          <img
            :src="screenshot"
            :alt="screenshotAlt || title"
            class="w-full rounded-2xl border border-slate-200 shadow-2xl"
            loading="eager"
          >
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.hero-gradient {
  background: linear-gradient(to bottom, var(--color-primary-100), transparent);
}

.hero-map {
  background-image: url('/hero-map.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.3;
  mask-image: radial-gradient(circle at center, transparent, black);
}
</style>
