<script setup lang="ts">
defineProps<{
  icon?: string
  title: string
  image?: string
  video?: string
}>()

const { iconBg, iconColor } = useFeatureVariant()

const registerFeatureIndex = inject<(() => number) | null>('registerFeatureIndex', null)
const featureIndex = registerFeatureIndex ? registerFeatureIndex() : 0
const isReversed = computed(() => featureIndex % 2 !== 0)

const videoEl = ref<HTMLVideoElement | null>(null)
const isPlaying = ref(true)

function togglePlay() {
  if (!videoEl.value)
    return
  if (isPlaying.value)
    videoEl.value.pause()
  else
    videoEl.value.play()
  isPlaying.value = !isPlaying.value
}
</script>

<template>
  <div
    class="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16"
    :class="isReversed ? 'lg:[&>*:first-child]:order-last' : ''"
  >
    <!-- Text side -->
    <div>
      <div v-if="icon" class="mb-4 flex size-12 items-center justify-center rounded-xl" :class="iconBg">
        <UIcon :name="icon" class="size-6" :class="iconColor" />
      </div>
      <h3 class="text-xl font-semibold text-slate-900 sm:text-2xl">
        {{ title }}
      </h3>
      <div class="mt-3 text-base leading-relaxed text-slate-600">
        <MDCSlot :use="$slots.default" />
      </div>
    </div>

    <!-- Visual side -->
    <div
      v-if="video || image"
      class="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm"
    >
      <template v-if="video">
        <video ref="videoEl" :src="video" autoplay loop muted playsinline class="w-full" />
        <button
          class="absolute bottom-3 right-3 flex size-9 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
          :aria-label="isPlaying ? 'Pause' : 'Play'"
          @click="togglePlay"
        >
          <UIcon :name="isPlaying ? 'i-lucide-pause' : 'i-lucide-play'" class="size-4" />
        </button>
      </template>
      <img v-else-if="image" :src="image" :alt="title" class="h-full w-full object-cover" loading="lazy">
    </div>

    <!-- Placeholder when no visual -->
    <div
      v-else
      class="hidden rounded-2xl border border-slate-200 bg-slate-50 lg:block"
      aria-hidden="true"
    />
  </div>
</template>
