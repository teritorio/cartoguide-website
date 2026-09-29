<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
}>()
</script>

<template>
  <section class="bg-slate-100 py-16 sm:py-24">
    <UContainer>
      <LandingSectionHeader :headline="headline" :title="title" />
      <div class="data-sources-body mx-auto mt-12 max-w-2xl text-slate-600">
        <MDCSlot :use="$slots.default" />
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.data-sources-body :deep(p) {
  margin-bottom: 1rem;
  line-height: 1.7;
}

.data-sources-body :deep(ul) {
  list-style: disc;
  padding-left: 1.5rem;
  margin: 1rem 0;
}

.data-sources-body :deep(li) {
  margin-bottom: 0.375rem;
}
</style>
