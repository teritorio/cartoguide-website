const WHITESPACE_RE = /\s+/g
const NON_SLUG_RE = /[^a-z0-9-]/g

export function toAnchorId(label: string): string {
  return label.toLowerCase().replace(WHITESPACE_RE, '-').replace(NON_SLUG_RE, '')
}
