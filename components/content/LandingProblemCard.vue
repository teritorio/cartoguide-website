<script setup lang="ts">
defineProps<{
  icon?: string
  title?: string
}>()
</script>

<template>
  <div class="landing-problem-card rounded-xl border-2 border-primary/30 bg-slate-50 p-4 sm:p-6">
    <div v-if="icon" class="mb-4 mx-auto flex size-10 items-center justify-center rounded-lg bg-primary/10">
      <UIcon :name="icon" class="size-5 text-primary" />
    </div>
    <h3 v-if="title" class="mb-2 text-base font-semibold text-slate-900">
      {{ title }}
    </h3>
    <div class="text-sm text-slate-600 leading-relaxed">
      <MDCSlot :use="$slots.default" />
    </div>
  </div>
</template>
