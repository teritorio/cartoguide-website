<script setup lang="ts">
const props = defineProps<{
  headline?: string
  title?: string
  description?: string
  bg?: string
  variant?: 'default' | 'secondary' | 'accent'
}>()

provide('featureVariant', computed(() => props.variant ?? 'default'))

const tabs = inject<string[]>('tabs', [])
const activeTabIndex = inject<Ref<number> | null>('activeTabIndex', null)

const sectionIndex = computed(() => props.headline ? tabs.indexOf(props.headline) : -1)

const isVisible = computed(() => {
  if (!activeTabIndex || sectionIndex.value === -1)
    return true
  return sectionIndex.value === activeTabIndex.value
})

const featureCount = ref(0)
provide('registerFeature', () => featureCount.value++)
</script>

<template>
  <section v-show="isVisible" class="py-8 sm:py-12" :class="[bg]">
    <UContainer>
      <SectionHeader :headline="headline" :title="title" :description="description" />
      <div class="mt-6 divide-y divide-slate-200 border-t border-slate-200">
        <MDCSlot :use="$slots.default" />
      </div>
    </UContainer>
  </section>
</template>
