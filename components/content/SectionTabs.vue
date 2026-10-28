<script setup lang="ts">
const props = defineProps<{
  tabs?: string[]
}>()

const activeIndex = ref(-1)
const tabRefs = ref<HTMLButtonElement[]>([])

onMounted(() => {
  if (!props.tabs?.length)
    return

  const sections = props.tabs
    .map(tab => document.getElementById(toAnchorId(tab)))
    .filter((el): el is HTMLElement => el !== null)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = props.tabs!.findIndex(tab => toAnchorId(tab) === entry.target.id)
          if (idx !== -1)
            activeIndex.value = idx
        }
      })
    },
    { rootMargin: '-120px 0px -50% 0px', threshold: 0 },
  )

  sections.forEach(el => observer.observe(el))
  onUnmounted(() => observer.disconnect())
})

function scrollToSection(label: string) {
  const el = document.getElementById(toAnchorId(label))
  if (el)
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
    scrollToSection(tabs[target] as string)
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
            :ref="el => { if (el) tabRefs[i] = el as HTMLButtonElement }"
            :key="i"
            type="button"
            role="tab"
            :aria-selected="i === activeIndex"
            :tabindex="(activeIndex < 0 ? i === 0 : i === activeIndex) ? 0 : -1"
            class="shrink-0 whitespace-nowrap border-b-2 px-5 py-4 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none"
            :class="i === activeIndex
              ? 'border-primary text-primary'
              : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'"
            @click="scrollToSection(tab)"
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
