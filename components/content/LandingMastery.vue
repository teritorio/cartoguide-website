<script setup lang="ts">
defineProps<{
  title: string
  items: Array<{ key: string, value: string }>
}>()
</script>

<template>
  <section class="py-12 sm:py-16">
    <UContainer>
      <div class="mx-auto max-w-3xl">
        <h3 class="mb-8 text-center text-xl font-semibold text-slate-900 sm:text-2xl">
          {{ title }}
        </h3>
        <div class="grid gap-4 sm:grid-cols-2">
          <div
            v-for="item in items"
            :key="item.key"
            class="rounded-xl border border-slate-200 bg-slate-50 p-5"
          >
            <p class="font-semibold text-slate-900">
              {{ item.key }}
            </p>
            <p class="mt-1 text-sm text-slate-600">
              {{ item.value }}
            </p>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
