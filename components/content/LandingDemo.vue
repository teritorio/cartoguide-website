<script setup lang="ts">
const props = defineProps<{
  headline?: string
  title?: string
  description?: string
  src: string
  label?: string
  href?: string
}>()

const { t } = useI18n()
const sectionRef = ref<HTMLElement | null>(null)
const iframeSrc = ref<string | null>(null)
const loaded = ref(false)

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
        <div class="relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <iframe
            v-if="iframeSrc"
            :src="iframeSrc"
            :title="label ?? 'CartoGuide'"
            width="100%"
            class="h-[350px] w-full transition-opacity duration-700 sm:h-[500px]"
            :class="loaded ? 'opacity-100' : 'opacity-0'"
            scrolling="no"
            @load="loaded = true"
          />
          <div
            v-if="!loaded"
            class="absolute inset-0 flex h-[350px] flex-col items-center justify-center gap-3 bg-slate-100 sm:h-[500px]"
          >
            <div class="h-10 w-10 animate-spin rounded-full border-4 border-slate-300 border-t-sky-500" />
            <p class="text-sm text-slate-400">
              {{ t('page.mapLoading') }}
            </p>
          </div>
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
