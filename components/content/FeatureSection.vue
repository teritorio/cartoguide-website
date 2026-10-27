<script setup lang="ts">
const props = defineProps<{
  headline?: string
  title?: string
  description?: string
  bg?: string
  variant?: 'default' | 'secondary' | 'accent'
}>()
const WHITESPACE_RE = /\s+/g
const NON_SLUG_RE = /[^a-z0-9-]/g

provide('featureVariant', computed(() => props.variant ?? 'default'))

let featureIndex = 0
provide('registerFeatureIndex', () => featureIndex++)

const tabs = inject<string[]>('tabs', [])
const activeTabIndex = inject<Ref<number> | null>('activeTabIndex', null)

const sectionIndex = computed(() => props.headline ? tabs.indexOf(props.headline) : -1)

const isVisible = computed(() => {
  if (!activeTabIndex || sectionIndex.value === -1)
    return true
  return sectionIndex.value === activeTabIndex.value
})

const anchorId = computed(() =>
  props.headline
    ? props.headline.toLowerCase().replace(WHITESPACE_RE, '-').replace(NON_SLUG_RE, '')
    : undefined,
)
</script>

<template>
  <section
    v-show="isVisible"
    :id="anchorId"
    class="scroll-mt-28 py-12 sm:py-16"
    :class="[bg]"
  >
    <UContainer>
      <SectionHeader :headline="headline" :title="title" :description="description" />
      <div class="mt-10 space-y-16 sm:mt-14 sm:space-y-20">
        <MDCSlot :use="$slots.default" />
      </div>
    </UContainer>
  </section>
</template>
