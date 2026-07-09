import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import App from '~/app.vue'

describe('cartoguide website', () => {
  it('renders the application', async () => {
    const component = await mountSuspended(App)
    expect(component.html()).toContain('flex min-h-screen flex-col')
  })
})
