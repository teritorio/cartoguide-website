<script setup lang="ts">
defineProps<{
  icon?: string
  title: string
  image?: string
  video?: string
}>()

const { iconBg, iconColor } = useFeatureVariant()

const registerFeature = inject<(() => number) | null>('registerFeature', null)
const featureIndex = registerFeature ? registerFeature() : -1
const isOpen = ref(featureIndex === 0)

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
  <div>
    <button
      class="flex w-full items-center gap-4 py-5 text-left"
      @click="isOpen = !isOpen"
    >
      <div v-if="icon" class="flex size-10 shrink-0 items-center justify-center rounded-lg" :class="iconBg">
        <UIcon :name="icon" class="size-5" :class="iconColor" />
      </div>
      <h3 class="flex-1 text-base font-semibold text-slate-900">
        {{ title }}
      </h3>
      <UIcon
        name="i-lucide-chevron-down"
        class="size-5 shrink-0 text-slate-400 transition-transform duration-200"
        :class="isOpen ? 'rotate-180' : ''"
      />
    </button>
    <div v-show="isOpen" class="grid grid-cols-1 gap-6 pb-6 md:grid-cols-2">
      <div class="text-sm leading-relaxed text-slate-600">
        <MDCSlot :use="$slots.default" />
      </div>
      <div v-if="video || image" class="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
        <template v-if="video">
          <video ref="videoEl" :src="video" autoplay loop muted playsinline class="w-full" />
          <button
            class="absolute bottom-2 right-2 flex size-8 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
            :aria-label="isPlaying ? 'Pause' : 'Play'"
            @click="togglePlay"
          >
            <UIcon :name="isPlaying ? 'i-lucide-pause' : 'i-lucide-play'" class="size-4" />
          </button>
        </template>
        <img v-else-if="image" :src="image" :alt="title" class="h-full w-full object-cover" loading="lazy">
      </div>
    </div>
  </div>
</template>
