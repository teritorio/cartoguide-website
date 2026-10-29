<script setup lang="ts">
const props = defineProps<{
  tabs?: string[]
}>()

const activeIndex = ref(0)
const tabRefs = ref<HTMLButtonElement[]>([])

provide('activeSectionTab', computed(() => props.tabs?.[activeIndex.value] ?? ''))

function selectTab(index: number) {
  activeIndex.value = index
}

function handleKeydown(event: KeyboardEvent, index: number) {
  const tabs = props.tabs
  if (!tabs?.length)
    return

  const count = tabs.length
  let target = -1

  if (event.key === 'ArrowRight') {
    target = (index + 1) % count
  }
  else if (event.key === 'ArrowLeft') {
    target = (index - 1 + count) % count
  }
  else if (event.key === 'Home') {
    target = 0
  }
  else if (event.key === 'End') {
    target = count - 1
  }

  if (target !== -1) {
    event.preventDefault()
    tabRefs.value[target]?.focus()
    selectTab(target)
  }
}
</script>

<template>
  <div>
    <div class="sticky top-16 z-20 border-b border-slate-200 bg-white shadow-sm">
      <UContainer>
        <nav role="tablist" class="-mb-px flex overflow-x-auto" aria-label="Feature sections">
          <button
            v-for="(tab, i) in tabs"
            :id="`tab-${toAnchorId(tab)}`"
            :ref="el => { if (el) tabRefs[i] = el as HTMLButtonElement }"
            :key="i"
            type="button"
            role="tab"
            :aria-selected="i === activeIndex"
            :aria-controls="`panel-${toAnchorId(tab)}`"
            :tabindex="i === activeIndex ? 0 : -1"
            class="shrink-0 whitespace-nowrap border-b-2 px-5 py-4 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none"
            :class="i === activeIndex
              ? 'border-primary text-primary'
              : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'"
            @click="selectTab(i)"
            @keydown="handleKeydown($event, i)"
          >
            {{ tab }}
          </button>
        </nav>
      </UContainer>
    </div>
    <MDCSlot :use="$slots.default" />
  </div>
</template>
