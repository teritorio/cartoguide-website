export function useFeatureVariant() {
  const iconBg = computed(() => 'bg-primary/10')
  const iconColor = computed(() => 'text-primary')
  const hoverBorder = computed(() => 'hover:border-primary/40')

  return { iconBg, iconColor, hoverBorder }
}
