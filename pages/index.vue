<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('home.title'),
  description: () => t('home.description'),
})
</script>

<template>
  <main>
    <UContainer class="py-24 text-center">
      <h1 class="text-5xl font-bold text-primary mb-6">
        {{ $t('home.headline') }}
      </h1>
      <p class="text-xl text-muted max-w-2xl mx-auto">
        {{ $t('home.description') }}
      </p>
    </UContainer>
  </main>
</template>
