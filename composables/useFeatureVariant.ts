export function useFeatureVariant() {
  const variant = inject<Ref<string>>('featureVariant', ref('default'))

  const iconBg = computed(() => {
    if (variant.value === 'secondary')
      return 'bg-secondary/10'
    if (variant.value === 'accent')
      return 'bg-orange-50'
    return 'bg-primary/10'
  })

  const iconColor = computed(() => {
    if (variant.value === 'secondary')
      return 'text-secondary'
    if (variant.value === 'accent')
      return 'text-orange-600'
    return 'text-primary'
  })

  const hoverBorder = computed(() => {
    if (variant.value === 'secondary')
      return 'hover:border-secondary/40'
    if (variant.value === 'accent')
      return 'hover:border-orange-300'
    return 'hover:border-primary/40'
  })

  return { iconBg, iconColor, hoverBorder }
}
