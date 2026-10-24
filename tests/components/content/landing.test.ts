import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import { h } from 'vue'
import CtaSection from '~/components/content/CtaSection.vue'
import FaqSection from '~/components/content/FaqSection.vue'
import FeatureCard from '~/components/content/FeatureCard.vue'
import FeaturesGrid from '~/components/content/FeaturesGrid.vue'
import HeroSection from '~/components/content/HeroSection.vue'
import ReferencesGrid from '~/components/content/ReferencesGrid.vue'
import SectionHeader from '~/components/content/SectionHeader.vue'
import ServicesSection from '~/components/content/ServicesSection.vue'
import StepItem from '~/components/content/StepItem.vue'
import UseCaseCard from '~/components/content/UseCaseCard.vue'
import UseCasesGrid from '~/components/content/UseCasesGrid.vue'

describe('sectionHeader', () => {
  it('renders headline, title, and description', async () => {
    const component = await mountSuspended(SectionHeader, {
      props: {
        headline: 'My Headline',
        title: 'My Title',
        description: 'My Description',
      },
    })
    expect(component.text()).toContain('My Headline')
    expect(component.text()).toContain('My Title')
    expect(component.text()).toContain('My Description')
  })

  it('renders headline alone when no title is provided', async () => {
    const component = await mountSuspended(SectionHeader, {
      props: {
        headline: 'My Headline',
      },
    })
    expect(component.text()).toContain('My Headline')
    expect(component.find('h2').exists()).toBe(false)
  })

  it('hides when neither title nor headline is provided', async () => {
    const component = await mountSuspended(SectionHeader, {
      props: {},
    })
    expect(component.text()).toBe('')
  })

  it('hides headline when not provided', async () => {
    const component = await mountSuspended(SectionHeader, {
      props: {
        title: 'My Title',
      },
    })
    expect(component.text()).toContain('My Title')
    expect(component.text()).not.toContain('My Headline')
  })

  it('hides description when not provided', async () => {
    const component = await mountSuspended(SectionHeader, {
      props: {
        title: 'My Title',
      },
    })
    expect(component.text()).toContain('My Title')
    // Only title text should be present, no description paragraph
    expect(component.findAll('p').filter(p => p.text().length > 0)).toHaveLength(0)
  })
})

describe('heroSection', () => {
  it('renders title and description', async () => {
    const component = await mountSuspended(HeroSection, {
      props: {
        title: 'Hero Title',
        description: 'Hero Description',
      },
    })
    expect(component.text()).toContain('Hero Title')
    expect(component.text()).toContain('Hero Description')
  })

  it('renders headline when provided', async () => {
    const component = await mountSuspended(HeroSection, {
      props: {
        headline: 'Hero Headline',
        title: 'Hero Title',
        description: 'Hero Description',
      },
    })
    expect(component.text()).toContain('Hero Headline')
  })

  it('hides buttons when no label or to', async () => {
    const component = await mountSuspended(HeroSection, {
      props: {
        title: 'Hero Title',
        description: 'Hero Description',
      },
    })
    // No button text like "Get Started" or "Learn More" should be present
    expect(component.text()).not.toContain('Get Started')
    expect(component.text()).not.toContain('Learn More')
  })

  it('renders primary button with locale-resolved path', async () => {
    const component = await mountSuspended(HeroSection, {
      props: {
        title: 'Hero Title',
        description: 'Hero Description',
        primaryLabel: 'Get Started',
        primaryTo: '/how-it-works/replication',
      },
    })
    expect(component.text()).toContain('Get Started')
  })

  it('renders secondary button', async () => {
    const component = await mountSuspended(HeroSection, {
      props: {
        title: 'Hero Title',
        description: 'Hero Description',
        secondaryLabel: 'Learn More',
        secondaryTo: '/about',
      },
    })
    expect(component.text()).toContain('Learn More')
  })

  it('preserves external URLs', async () => {
    const component = await mountSuspended(HeroSection, {
      props: {
        title: 'Hero Title',
        description: 'Hero Description',
        primaryLabel: 'GitHub',
        primaryTo: 'https://github.com/teritorio/vido',
      },
    })
    const link = component.find('a[href="https://github.com/teritorio/vido"]')
    expect(link.exists()).toBe(true)
  })
})

describe('ctaSection', () => {
  it('renders title', async () => {
    const component = await mountSuspended(CtaSection, {
      props: {
        title: 'CTA Title',
      },
    })
    expect(component.text()).toContain('CTA Title')
  })

  it('renders description when provided', async () => {
    const component = await mountSuspended(CtaSection, {
      props: {
        title: 'CTA Title',
        description: 'CTA Description',
      },
    })
    expect(component.text()).toContain('CTA Description')
  })

  it('hides description when not provided', async () => {
    const component = await mountSuspended(CtaSection, {
      props: {
        title: 'CTA Title',
      },
    })
    expect(component.html()).not.toContain('CTA Description')
  })

  it('renders primary and secondary buttons', async () => {
    const component = await mountSuspended(CtaSection, {
      props: {
        title: 'CTA Title',
        primaryLabel: 'Primary',
        primaryTo: '/start',
        secondaryLabel: 'Secondary',
        secondaryTo: '/learn',
      },
    })
    expect(component.text()).toContain('Primary')
    expect(component.text()).toContain('Secondary')
  })

  it('hides buttons when no label', async () => {
    const component = await mountSuspended(CtaSection, {
      props: {
        title: 'CTA Title',
      },
    })
    // No button labels should be present
    expect(component.text()).not.toContain('Primary')
    expect(component.text()).not.toContain('Secondary')
  })
})

describe('featureCard', () => {
  it('renders title', async () => {
    const component = await mountSuspended(FeatureCard, {
      props: {
        title: 'Feature Title',
      },
    })
    expect(component.text()).toContain('Feature Title')
  })

  it('renders icon when provided', async () => {
    const component = await mountSuspended(FeatureCard, {
      props: {
        icon: 'i-lucide-check',
        title: 'Feature Title',
      },
    })
    expect(component.html()).toContain('i-lucide:check')
  })

  it('hides icon container when not provided', async () => {
    const component = await mountSuspended(FeatureCard, {
      props: {
        title: 'Feature Title',
      },
    })
    expect(component.html()).not.toContain('iconify')
  })

  it('renders slot content', async () => {
    const component = await mountSuspended(FeatureCard, {
      props: {
        title: 'Feature Title',
      },
      slots: {
        default: () => h('span', 'Slot Content'),
      },
    })
    expect(component.text()).toContain('Slot Content')
  })
})

describe('featuresGrid', () => {
  it('renders section header props', async () => {
    const component = await mountSuspended(FeaturesGrid, {
      props: {
        headline: 'Features Headline',
        title: 'Features Title',
        description: 'Features Description',
      },
    })
    expect(component.text()).toContain('Features Headline')
    expect(component.text()).toContain('Features Title')
    expect(component.text()).toContain('Features Description')
  })

  it('renders slot children', async () => {
    const component = await mountSuspended(FeaturesGrid, {
      props: {
        title: 'Features Title',
      },
      slots: {
        default: () => h('div', 'Child Content'),
      },
    })
    expect(component.text()).toContain('Child Content')
  })
})

describe('stepItem', () => {
  it('renders icon when provided', async () => {
    const component = await mountSuspended(StepItem, {
      props: {
        icon: 'i-lucide-rocket',
        title: 'Step Title',
      },
    })
    expect(component.text()).toContain('Step Title')
    expect(component.html()).toContain('i-lucide:rocket')
  })

  it('hides icon when not provided', async () => {
    const component = await mountSuspended(StepItem, {
      props: {
        title: 'Step Title',
      },
    })
    expect(component.text()).toContain('Step Title')
    expect(component.html()).not.toContain('iconify')
  })

  it('renders slot content', async () => {
    const component = await mountSuspended(StepItem, {
      props: {
        title: 'Step Title',
      },
      slots: {
        default: () => h('span', 'Step details'),
      },
    })
    expect(component.text()).toContain('Step details')
  })
})

describe('landingUseCase', () => {
  it('renders icon and title via FeatureCard', async () => {
    const component = await mountSuspended(UseCaseCard, {
      props: {
        icon: 'i-lucide-map',
        title: 'Use Case Title',
      },
    })
    expect(component.text()).toContain('Use Case Title')
    expect(component.html()).toContain('i-lucide:map')
  })

  it('renders slot content', async () => {
    const component = await mountSuspended(UseCaseCard, {
      props: {
        title: 'Use Case Title',
      },
      slots: {
        default: () => h('span', 'Use case description'),
      },
    })
    expect(component.text()).toContain('Use case description')
  })
})

describe('useCasesGrid', () => {
  it('renders section header via FeaturesGrid', async () => {
    const component = await mountSuspended(UseCasesGrid, {
      props: {
        headline: 'UseCases Headline',
        title: 'UseCases Title',
        description: 'UseCases Description',
      },
    })
    expect(component.text()).toContain('UseCases Headline')
    expect(component.text()).toContain('UseCases Title')
    expect(component.text()).toContain('UseCases Description')
  })

  it('renders slot children', async () => {
    const component = await mountSuspended(UseCasesGrid, {
      props: {
        title: 'UseCases Title',
      },
      slots: {
        default: () => h('div', 'UseCase Child'),
      },
    })
    expect(component.text()).toContain('UseCase Child')
  })
})

describe('servicesSection', () => {
  it('renders section header props', async () => {
    const component = await mountSuspended(ServicesSection, {
      props: {
        headline: 'Services Headline',
        title: 'Services Title',
      },
    })
    expect(component.text()).toContain('Services Headline')
    expect(component.text()).toContain('Services Title')
  })

  it('renders slot content', async () => {
    const component = await mountSuspended(ServicesSection, {
      props: {
        title: 'Services Title',
      },
      slots: {
        default: () => h('span', 'Service details'),
      },
    })
    expect(component.text()).toContain('Service details')
  })

  it('renders CTA button when label and link are provided', async () => {
    const component = await mountSuspended(ServicesSection, {
      props: {
        title: 'Services Title',
        ctaLabel: 'See roadmap',
        ctaTo: '/how-it-works/roadmap',
      },
    })
    expect(component.text()).toContain('See roadmap')
  })

  it('hides CTA button when no label', async () => {
    const component = await mountSuspended(ServicesSection, {
      props: {
        title: 'Services Title',
      },
    })
    expect(component.text()).not.toContain('See roadmap')
  })

  it('uses white background for visual alternation with References', async () => {
    const component = await mountSuspended(ServicesSection, {
      props: {
        title: 'Services Title',
      },
    })
    expect(component.find('section').classes()).not.toContain('bg-slate-100')
  })
})

describe('faqSection', () => {
  it('renders headline and title from i18n', async () => {
    const component = await mountSuspended(FaqSection)
    expect(component.text()).toContain('FAQ')
    expect(component.text()).toContain('Do you have questions about CartoGuide?')
  })

  it('renders all 8 FAQ questions from i18n', async () => {
    const component = await mountSuspended(FaqSection)
    expect(component.text()).toContain('What data can we use with CartoGuide?')
    expect(component.text()).toContain('Can CartoGuide integrate with our existing information system?')
    expect(component.text()).toContain('Do we need to change or migrate our current tools?')
    expect(component.text()).toContain('How does OpenStreetMap integrate with CartoGuide?')
    expect(component.text()).toContain('Can CartoGuide be customised to our territory and our field?')
    expect(component.text()).toContain('How does a CartoGuide project work?')
    expect(component.text()).toContain('What can Teritorio bring us beyond the software?')
    expect(component.text()).toContain('Why is CartoGuide open source software?')
  })

  it('has white background as last section before footer', async () => {
    const component = await mountSuspended(FaqSection)
    expect(component.find('section').classes()).not.toContain('bg-slate-100')
  })
})

describe('referencesGrid', () => {
  it('renders section header props', async () => {
    const component = await mountSuspended(ReferencesGrid, {
      props: {
        headline: 'References Headline',
        title: 'References Title',
        description: 'References Description',
      },
    })
    expect(component.text()).toContain('References Headline')
    expect(component.text()).toContain('References Title')
    expect(component.text()).toContain('References Description')
  })

  it('renders slot content', async () => {
    const component = await mountSuspended(ReferencesGrid, {
      props: {
        title: 'References Title',
      },
      slots: {
        default: () => h('span', 'Reference content'),
      },
    })
    expect(component.text()).toContain('Reference content')
  })
})
