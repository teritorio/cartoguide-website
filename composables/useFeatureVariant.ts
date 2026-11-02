export function useFeatureVariant() {
  const variant = inject<Ref<string>>('featureVariant', ref('default'))

  const iconBg = computed(() => 'bg-primary/10')

  const iconColor = computed(() => 'text-primary')

  const hoverBorder = computed(() => {
    if (variant.value === 'secondary')
      return 'hover:border-secondary/40'
    if (variant.value === 'accent')
      return 'hover:border-orange-300'
    return 'hover:border-primary/40'
  })

  return { iconBg, iconColor, hoverBorder }
}
