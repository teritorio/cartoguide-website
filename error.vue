<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()
</script>

<template>
  <NuxtLayout>
    <UContainer class="py-24 text-center">
      <h1 class="text-4xl font-bold mb-4">
        {{ error.statusCode }}
      </h1>
      <p class="text-muted mb-8">
        {{ error.message }}
      </p>
      <UButton to="/" variant="solid">
        Retour à l'accueil
      </UButton>
    </UContainer>
  </NuxtLayout>
</template>
