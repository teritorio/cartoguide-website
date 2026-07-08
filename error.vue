<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()

const { t } = useI18n()
</script>

<template>
  <NuxtLayout>
    <UContainer class="py-24 text-center">
      <h1 class="text-4xl font-bold mb-4">
        {{ error.statusCode }}
      </h1>
      <p class="text-muted mb-8">
        {{ error.statusCode === 404 ? t('error.message') : error.message }}
      </p>
      <UButton to="/" variant="solid">
        {{ t('error.backHome') }}
      </UButton>
    </UContainer>
  </NuxtLayout>
</template>
