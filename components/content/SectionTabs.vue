<script setup lang="ts">
const props = defineProps<{
  tabs?: string[]
}>()

const activeIndex = ref(0)

provide('tabs', props.tabs ?? [])
provide('activeTabIndex', activeIndex)
</script>

<template>
  <div>
    <div class="sticky top-16 z-20 border-b border-slate-200 bg-white shadow-sm">
      <UContainer>
        <nav class="-mb-px flex overflow-x-auto" aria-label="Feature sections">
          <button
            v-for="(tab, i) in tabs"
            :key="i"
            type="button"
            class="shrink-0 whitespace-nowrap border-b-2 px-5 py-4 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none"
            :class="i === activeIndex
              ? 'border-primary text-primary'
              : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'"
            @click="activeIndex = i"
          >
            {{ tab }}
          </button>
        </nav>
      </UContainer>
    </div>
    <MDCSlot :use="$slots.default" />
  </div>
</template>
