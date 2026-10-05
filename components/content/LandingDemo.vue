<script setup lang="ts">
defineProps<{
  headline?: string
  title?: string
  bg?: string
  label?: string
  href?: string
}>()
</script>

<template>
  <section class="py-16 sm:py-24" :class="[bg]">
    <UContainer>
      <LandingSectionHeader :headline="headline" :title="title" />
      <div class="mt-12">
        <div class="flex h-[350px] w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:h-[500px]">
          <div class="flex flex-col items-center gap-4 text-slate-400">
            <div class="flex h-20 w-20 items-center justify-center rounded-full bg-slate-300">
              <UIcon name="i-lucide-play" class="size-10 translate-x-0.5" />
            </div>
            <p class="text-sm font-medium">
              Vidéo à venir
            </p>
          </div>
        </div>
        <div v-if="label && href" class="mt-8 text-center">
          <UButton :to="href" target="_blank" rel="noopener" size="xl" trailing-icon="i-lucide-external-link">
            {{ label }}
          </UButton>
        </div>
      </div>
    </UContainer>
  </section>
</template>
