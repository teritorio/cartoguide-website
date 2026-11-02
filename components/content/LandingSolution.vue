<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  description?: string
}>()
</script>

<template>
  <section class="relative z-0 overflow-hidden bg-slate-100 py-16 sm:py-24">
    <div
      class="absolute inset-0 z-[-1] pointer-events-none opacity-[0.22]"
      style="background-image: url('/cartographic-grid.svg'); background-size: 80px 80px;"
    />
    <UContainer>
      <SectionHeader :headline="headline" :title="title" :description="description" />
      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <MDCSlot :use="$slots.default" />
      </div>
    </UContainer>
  </section>
</template>
