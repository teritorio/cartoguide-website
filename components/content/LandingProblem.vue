<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  description?: string
}>()
</script>

<template>
  <section class="relative overflow-hidden bg-slate-100 py-16 sm:py-24">
    <div
      class="absolute inset-0 pointer-events-none opacity-[0.12]"
      style="background-image: url('/cartographic-grid.svg'); background-size: 80px 80px;"
    />
    <UContainer>
      <SectionHeader :headline="headline" :title="title" :description="description" />
      <div class="landing-problem mt-12 mx-auto max-w-4xl grid grid-cols-1 gap-4 lg:grid-cols-2">
        <MDCSlot :use="$slots.default" />
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.landing-problem :deep(.landing-problem-card:last-child) {
  border-color: var(--color-primary-500);
}
</style>
