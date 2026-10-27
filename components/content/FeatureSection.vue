<script setup lang="ts">
const props = defineProps<{
  headline?: string
  title?: string
  description?: string
  bg?: string
  variant?: 'default' | 'secondary' | 'accent'
}>()

provide('featureVariant', computed(() => props.variant ?? 'default'))

let featureIndex = 0
provide('registerFeatureIndex', () => featureIndex++)

const anchorId = computed(() =>
  props.headline ? toAnchorId(props.headline) : undefined,
)
</script>

<template>
  <section
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
