<script setup lang="ts">
const props = defineProps<{
  href: string
  target?: string
  rel?: string
}>()

const EXTERNAL_RE = /^https?:\/\//

const isExternal = computed(() => EXTERNAL_RE.test(props.href))

const resolvedTarget = computed(() => props.target ?? (isExternal.value ? '_blank' : undefined))
const resolvedRel = computed(() => props.rel ?? (isExternal.value ? 'noopener noreferrer' : undefined))
</script>

<template>
  <NuxtLink :to="href" :target="resolvedTarget" :rel="resolvedRel">
    <slot />
  </NuxtLink>
</template>
