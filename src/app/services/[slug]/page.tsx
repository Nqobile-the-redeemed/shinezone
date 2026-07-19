import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteShell } from '@/components/shinezone/SiteShell'
import {
  ServiceBreadcrumbs,
  ServiceClientChecklist,
  ServiceClientPropertyGrid,
  ServiceCompetencePanel,
  ServiceControls,
  ServiceEnvironmentalSection,
  ServiceEquipmentPanel,
  ServiceFAQAccordion,
  ServiceGallery,
  ServiceHero,
  ServiceLimitations,
  ServiceOptions,
  ServiceOutcomeGrid,
  ServiceOverview,
  ServicePageNavigation,
  ServicePricingFactors,
  ServiceProcessTimeline,
  ServiceQualitySection,
  ServiceQuickFacts,
  ServiceQuoteCTA,
  ServiceRelatedContent,
  ServiceScenarioGrid,
  ServiceScopeGroups
} from '@/components/shinezone/services/ServiceSections'
import { brand } from '@/data/shinezone'
import { categoryLabels, getService, services } from '@/data/services'

export function generateStaticParams() {
  return services.map(service => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)

  if (!service) {
    return { title: 'Service Not Found | Shinezone' }
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: {
      canonical: `/services/${service.slug}`
    },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      type: 'website',
      images: [
        {
          url: service.image,
          alt: service.imageAlt
        }
      ]
    }
  }
}

function StructuredData({ service }: { service: NonNullable<ReturnType<typeof getService>> }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const serviceUrl = `${baseUrl}/services/${service.slug}`
  const primaryCategory = service.category[0]

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/services` },
        {
          '@type': 'ListItem',
          position: 3,
          name: categoryLabels[primaryCategory],
          item: `${baseUrl}/services?category=${primaryCategory}`
        },
        { '@type': 'ListItem', position: 4, name: service.title, item: serviceUrl }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: brand.legalName,
      alternateName: brand.name,
      url: baseUrl,
      telephone: brand.phone,
      email: brand.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '7 Bowles Way',
        addressLocality: 'Dunstable',
        postalCode: 'LU6 3LX',
        addressCountry: 'GB'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      serviceType: service.schemaServiceType,
      description: service.seo.description,
      provider: {
        '@type': 'Organization',
        name: brand.legalName
      },
      url: serviceUrl,
      image: `${baseUrl}${service.image}`
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: service.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: service.seo.title,
      description: service.seo.description,
      url: serviceUrl
    }
  ]

  return <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)

  if (!service) {
    notFound()
  }

  return (
    <SiteShell>
      <StructuredData service={service} />
      <ServiceBreadcrumbs service={service} />
      <ServiceHero service={service} />
      <ServiceQuickFacts service={service} />
      <ServicePageNavigation />
      <ServiceOverview service={service} />
      <ServiceClientPropertyGrid service={service} />
      <ServiceScenarioGrid scenarios={service.commonScenarios} />
      <ServiceOutcomeGrid outcomes={service.outcomes} />
      <ServiceScopeGroups groups={service.scopeGroups} />
      <ServiceOptions service={service} />
      <ServiceProcessTimeline steps={service.process} />
      <ServiceClientChecklist service={service} />
      <ServiceControls service={service} />
      <ServiceCompetencePanel service={service} />
      <ServiceEquipmentPanel service={service} />
      <ServiceQualitySection service={service} />
      <ServiceEnvironmentalSection service={service} />
      <ServicePricingFactors service={service} />
      <ServiceLimitations limitations={service.exclusions} />
      <ServiceGallery service={service} />
      <ServiceRelatedContent service={service} />
      <ServiceFAQAccordion faqs={service.faqs} />
      <ServiceQuoteCTA service={service} />
    </SiteShell>
  )
}
