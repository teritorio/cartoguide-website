<script setup lang="ts">
defineProps<{
  icon?: string
  title: string
  screenshot?: string
}>()
</script>

<template>
  <div :class="screenshot ? 'overflow-hidden rounded-2xl border border-slate-200 bg-white' : 'p-4 sm:p-6'">
    <div v-if="screenshot" class="h-48 overflow-hidden bg-slate-100">
      <img :src="screenshot" :alt="title" class="h-full w-full object-cover" loading="lazy">
    </div>
    <div :class="screenshot ? 'p-4 sm:p-6' : ''">
      <div class="mb-4 flex items-center gap-3">
        <div v-if="icon" class="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <UIcon :name="icon" class="size-6 text-primary" />
        </div>
        <h3 class="text-base font-semibold text-slate-900">
          {{ title }}
        </h3>
      </div>
      <div class="text-sm text-slate-600">
        <MDCSlot :use="$slots.default" />
      </div>
    </div>
  </div>
</template>
