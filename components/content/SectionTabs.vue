<script setup lang="ts">
const props = defineProps<{
  tabs?: string[]
}>()
const WHITESPACE_RE = /\s+/g
const NON_SLUG_RE = /[^a-z0-9-]/g

provide('tabs', props.tabs ?? [])
provide('activeTabIndex', null)

function toAnchorId(label: string) {
  return label.toLowerCase().replace(WHITESPACE_RE, '-').replace(NON_SLUG_RE, '')
}

function scrollToSection(label: string) {
  const id = toAnchorId(label)
  const el = document.getElementById(id)
  if (el)
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
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
            class="shrink-0 whitespace-nowrap border-b-2 border-transparent px-5 py-4 text-sm font-semibold text-slate-500 transition-colors duration-150 hover:border-slate-300 hover:text-slate-700 focus-visible:outline-none"
            @click="scrollToSection(tab)"
          >
            {{ tab }}
          </button>
        </nav>
      </UContainer>
    </div>
    <MDCSlot :use="$slots.default" />
  </div>
</template>
