export function useNewsFormatting() {
  function typeColor(type: string): 'primary' | 'success' | 'secondary' | 'warning' | 'neutral' {
    const map: Record<string, 'primary' | 'success' | 'secondary' | 'warning' | 'neutral'> = {
      article: 'primary',
      release: 'success',
      feature: 'secondary',
      event: 'warning',
    }
    return map[type] ?? 'neutral'
  }

  function formatDate(date: string, locale: string): string {
    return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(date))
  }

  return { typeColor, formatDate }
}
