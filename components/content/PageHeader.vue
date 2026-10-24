<script setup lang="ts">
const props = defineProps<{
  headline?: string
  title: string
  description?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}>()

const resolvedPrimaryTo = useLocaleTo(computed(() => props.primaryTo))
const resolvedSecondaryTo = useLocaleTo(computed(() => props.secondaryTo))
</script>

<template>
  <section class="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
    <UContainer>
      <div class="mx-auto max-w-3xl text-center">
        <p v-if="headline" class="text-sm font-semibold text-primary">
          {{ headline }}
        </p>
        <h1 class="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {{ title }}
        </h1>
        <p v-if="description" class="mt-6 text-lg text-slate-600">
          {{ description }}
        </p>
        <div v-if="primaryLabel || secondaryLabel" class="mt-8 flex items-center justify-center gap-x-4">
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
