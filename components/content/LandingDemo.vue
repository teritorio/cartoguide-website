<script setup lang="ts">
const props = defineProps<{
  headline?: string
  title?: string
  description?: string
  src: string
  label?: string
  href?: string
}>()

const sectionRef = ref<HTMLElement | null>(null)
const iframeSrc = ref<string | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        iframeSrc.value = props.src
        observer.disconnect()
      }
    },
    { rootMargin: '200px' },
  )
  if (sectionRef.value)
    observer.observe(sectionRef.value)
})
</script>

<template>
  <section ref="sectionRef" class="py-16 sm:py-24">
    <UContainer>
      <LandingSectionHeader :headline="headline" :title="title" :description="description" />
      <div class="mt-12">
        <div class="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <iframe
            v-if="iframeSrc"
            :src="iframeSrc"
            :title="label ?? 'CartoGuide'"
            width="100%"
            class="h-[350px] w-full sm:h-[500px]"
            loading="lazy"
            scrolling="no"
          />
          <div v-else class="h-[350px] animate-pulse bg-slate-100 sm:h-[500px]" />
        </div>
        <div v-if="label && href" class="mt-4 text-center">
          <UButton :to="href" target="_blank" rel="noopener" variant="ghost" size="sm" trailing-icon="i-lucide-external-link">
            {{ label }}
          </UButton>
        </div>
      </div>
    </UContainer>
  </section>
</template>
