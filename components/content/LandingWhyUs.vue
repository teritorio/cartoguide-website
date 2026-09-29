<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  items?: Array<{ title: string, description: string }>
}>()
</script>

<template>
  <section class="bg-slate-100 py-16 sm:py-24">
    <UContainer>
      <LandingSectionHeader :headline="headline" :title="title" />
      <div v-if="items?.length" class="mt-12 grid gap-4 sm:grid-cols-2">
        <div
          v-for="item in items"
          :key="item.title"
          class="rounded-xl border border-slate-200 bg-white p-6"
        >
          <p class="font-semibold text-slate-900">
            {{ item.title }}
          </p>
          <p class="mt-2 text-sm text-slate-600">
            {{ item.description }}
          </p>
        </div>
      </div>
    </UContainer>
  </section>
</template>
