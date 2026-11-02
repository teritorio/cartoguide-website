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

      <div class="mx-auto mt-10 grid max-w-3xl gap-6">
        <MDCSlot :use="$slots.default" />
      </div>
    </UContainer>
  </section>
</template>
