import { $fetch, setup } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

describe('cartoGuide website', async () => {
  await setup({
    rootDir: import.meta.dirname ? `${import.meta.dirname}/..` : '..',
    server: true,
  })

  it('serves the French homepage', async () => {
    const html = await $fetch('/fr')
    expect(html).toContain('CartoGuide')
  })
})
