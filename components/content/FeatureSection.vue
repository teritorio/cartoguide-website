<script setup lang="ts">
const props = defineProps<{
  anchor?: string
  headline?: string
  title?: string
  description?: string
  bg?: string
  variant?: 'default' | 'secondary' | 'accent'
}>()

provide('featureVariant', computed(() => props.variant ?? 'default'))

let featureIndex = 0
provide('registerFeatureIndex', () => featureIndex++)

const panelKey = computed(() => props.anchor ?? props.headline ?? '')
const panelId = computed(() => panelKey.value ? `panel-${toAnchorId(panelKey.value)}` : undefined)
const labelledBy = computed(() => panelKey.value ? `tab-${toAnchorId(panelKey.value)}` : undefined)

const activeSectionTab = inject<ComputedRef<string>>('activeSectionTab', computed(() => ''))
const isActive = computed(() => {
  const active = activeSectionTab.value
  if (!active)
    return true
  return panelKey.value === active
})
</script>

<template>
  <section
    v-show="isActive"
    :id="panelId"
    role="tabpanel"
    tabindex="0"
    :aria-labelledby="labelledBy"
    class="py-12 sm:py-16"
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
