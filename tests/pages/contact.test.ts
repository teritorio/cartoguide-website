import { mockNuxtImport, mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import ContactPage from '~/pages/contact.vue'

mockNuxtImport('queryCollection', () => {
  return () => ({
    path: () => ({
      first: () => Promise.resolve({
        title: 'Parlons de votre projet CartoGuide — Contact Teritorio',
        description: 'Échangez avec l\'équipe Teritorio sur vos besoins.',
        heading: 'Parlons de votre projet',
        intro: 'Vous avez un projet territorial ? Échangeons sur vos besoins.',
        demoTitle: 'Ce que nous pouvons faire ensemble',
        demoDescription: 'Lors de notre échange, nous prenons le temps :',
        demoItems: [
          'd\'échanger sur votre contexte et vos besoins',
          'de vous présenter les concepts et le fonctionnement de CartoGuide',
          'd\'illustrer des cas d\'usage concrets',
          'de vous partager notre feuille de route',
        ],
      }),
    }),
  })
})

describe('contact page', () => {
  it('renders the page title and description', async () => {
    const component = await mountSuspended(ContactPage, {
      route: '/fr/contact',
    })
    const text = component.text()
    expect(text).toContain('Parlons de votre projet')
  })

  it('renders the demo info block', async () => {
    const component = await mountSuspended(ContactPage, {
      route: '/fr/contact',
    })
    const text = component.text()
    expect(text).toContain('Ce que nous pouvons faire ensemble')
  })

  it('renders the external contact CTA button', async () => {
    const component = await mountSuspended(ContactPage, {
      route: '/fr/contact',
    })
    const html = component.html()
    expect(html).toContain('https://www.teritorio.fr/fr/contact/')
    expect(html).toContain('target="_blank"')
  })

  it('renders the external redirect notice', async () => {
    const component = await mountSuspended(ContactPage, {
      route: '/fr/contact',
    })
    const text = component.text()
    expect(text).toContain('Vous serez redirigé vers le site de Teritorio')
  })

  it('does not render a form', async () => {
    const component = await mountSuspended(ContactPage, {
      route: '/fr/contact',
    })
    expect(component.find('form').exists()).toBe(false)
  })
})
