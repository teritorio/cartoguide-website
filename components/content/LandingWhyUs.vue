<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  items?: Array<{ title: string, description: string }>
}>()
</script>

<template>
  <section class="relative overflow-hidden bg-slate-100 py-16 sm:py-24">
    <div
      class="absolute inset-0 pointer-events-none opacity-[0.12]"
      style="background-image: url('/cartographic-grid.svg'); background-size: 80px 80px;"
    />
    <UContainer>
      <SectionHeader :headline="headline" :title="title" />
      <div v-if="items?.length" class="mt-12 grid gap-4 sm:grid-cols-2">
        <div
          v-for="(item, index) in items"
          :key="item.title"
          class="rounded-xl border border-slate-200 bg-white p-6" :class="[index === items.length - 1 ? 'sm:col-span-2' : '']"
        >
          <p class="font-semibold text-slate-900">
            {{ item.title }}
          </p>
          <p class="mt-2 text-base leading-[1.6] text-slate-600">
            {{ item.description }}
          </p>
        </div>
      </div>
    </UContainer>
  </section>
</template>
