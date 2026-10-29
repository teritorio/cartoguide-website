<script setup lang="ts">
const props = defineProps<{
  title: string
  description?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
  bg?: string
}>()

const resolvedPrimaryTo = useLocaleTo(computed(() => props.primaryTo))
const resolvedSecondaryTo = useLocaleTo(computed(() => props.secondaryTo))
</script>

<template>
  <section class="relative py-16 sm:py-24 overflow-hidden" :class="bg ?? 'bg-slate-100'">
    <div
      class="absolute inset-0 pointer-events-none opacity-[0.15]"
      style="background-image: url('/topography.svg'); background-size: 600px 600px;"
    />
    <div
      class="absolute inset-0 pointer-events-none"
      style="background: radial-gradient(ellipse 55% 90% at 50% 50%, rgba(241,245,249,0.85) 0%, transparent 100%);"
    />
    <UContainer class="relative">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
          {{ title }}
        </h2>
        <p v-if="description" class="mt-4 text-lg text-muted">
          {{ description }}
        </p>
        <div class="mt-8 flex items-center justify-center gap-x-4">
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
    </UContainer>
  </section>
</template>
