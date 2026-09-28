export function useNewsFormatting() {
  function typeColor(type: string): 'sky' | 'emerald' | 'violet' | 'amber' | 'slate' {
    const map: Record<string, 'sky' | 'emerald' | 'violet' | 'amber' | 'slate'> = {
      article: 'sky',
      release: 'emerald',
      feature: 'violet',
      event: 'amber',
    }
    return map[type] ?? 'slate'
  }

  function formatDate(date: string, locale: string): string {
    return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(date))
  }

  return { typeColor, formatDate }
}
