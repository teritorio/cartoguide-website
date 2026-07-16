<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  description?: string
  bg?: string
}>()
</script>

<template>
  <section class="py-16 sm:py-24" :class="[bg]">
    <UContainer>
      <LandingSectionHeader :headline="headline" :title="title" :description="description" />
      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <MDCSlot :use="$slots.default" />
      </div>
    </UContainer>
  </section>
</template>
