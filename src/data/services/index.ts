import { biohazardBodilyFluidCleaning } from './biohazard-bodily-fluid-cleaning'
import { carpetFloorCare } from './carpet-floor-care'
import { commercialCleaning } from './commercial-cleaning'
import { communalBlockCleaning } from './communal-block-cleaning'
import { emergencySpecialistCleaning } from './emergency-specialist-cleaning'
import { endOfTenancyCleaning } from './end-of-tenancy-cleaning'
import { periodicSpecialistCleaning } from './periodic-specialist-cleaning'
import { postEvictionCleaning } from './post-eviction-cleaning'
import { sharpsDrugParaphernaliaClearance } from './sharps-drug-paraphernalia-clearance'
import { supportedLivingCleaning } from './supported-living-cleaning'
import { temporaryAccommodationCleaning } from './temporary-accommodation-cleaning'
import { windowCleaning } from './window-cleaning'
import type { Service, ServiceCategory } from './types'

export type {
  ClaimStatus,
  Service,
  ServiceCategory,
  ServiceControl,
  ServiceDeliverable,
  ServiceFAQ,
  ServiceFeature,
  ServiceLink,
  ServiceLimitation,
  ServiceMetric,
  ServiceMode,
  ServiceOption,
  ServiceProcessStep,
  ServiceRequirement,
  ServiceRiskLevel,
  ServiceScenario,
  ServiceScopeGroup
} from './types'
export { categoryLabels, riskLabels, serviceModeLabels } from './shared'
export { serviceClaimVerification } from './claims'

export const services: Service[] = [
  commercialCleaning,
  communalBlockCleaning,
  endOfTenancyCleaning,
  postEvictionCleaning,
  temporaryAccommodationCleaning,
  supportedLivingCleaning,
  biohazardBodilyFluidCleaning,
  sharpsDrugParaphernaliaClearance,
  emergencySpecialistCleaning,
  windowCleaning,
  carpetFloorCare,
  periodicSpecialistCleaning
]

const publicPlaceholderPattern = /\[|INSERT|PLACEHOLDER|TODO|VERIFY BEFORE PUBLICATION/i

const policySlugs = new Set([
  'health-and-safety',
  'environmental-sustainability',
  'safeguarding',
  'lone-working',
  'coshh',
  'sharps-and-contaminated-waste',
  'complaints-and-rectification',
  'business-continuity',
  'data-protection',
  'modern-slavery',
  'equality-diversity-inclusion',
  'training-and-competence',
  'waste-duty-of-care',
  'working-at-height-and-window-cleaning',
  'emergency-and-out-of-hours-response'
])

export function getService(slug: string) {
  return services.find(service => service.slug === slug)
}

export function getServicesByCategory(category: ServiceCategory) {
  return services.filter(service => service.category.includes(category))
}

export function getRelatedServices(service: Service) {
  const relatedSlugs = service.relatedServices
    .map(link => link.href.match(/^\/services\/([^/]+)$/)?.[1])
    .filter((slug): slug is string => Boolean(slug))

  return relatedSlugs.map(slug => getService(slug)).filter((item): item is Service => Boolean(item))
}

function collectText(value: unknown): string[] {
  if (typeof value === 'string') {
    return [value]
  }

  if (Array.isArray(value)) {
    return value.flatMap(item => collectText(item))
  }

  if (value && typeof value === 'object') {
    return Object.values(value).flatMap(item => collectText(item))
  }

  return []
}

function assertMinimum(service: Service, key: keyof Service, minimum: number, errors: string[]) {
  const value = service[key]

  if (!Array.isArray(value) || value.length < minimum) {
    errors.push(`${service.slug} requires at least ${minimum} ${String(key)} entries`)
  }
}

export function validateServices(catalogue: Service[] = services) {
  const errors: string[] = []
  const slugs = new Set<string>()

  for (const service of catalogue) {
    if (!service.slug || slugs.has(service.slug)) {
      errors.push(`Duplicate or missing service slug: ${service.slug}`)
    }
    slugs.add(service.slug)

    if (!service.title || service.title.length < 3) errors.push(`${service.slug} is missing a useful title`)
    if (!service.summary || service.summary.length < 50) errors.push(`${service.slug} summary is too short`)
    if (!service.category.length) errors.push(`${service.slug} must belong to at least one category`)
    if (!service.riskLevel) errors.push(`${service.slug} must define a risk level`)
    if (!service.image || !service.imageAlt || service.imageAlt.length < 10) {
      errors.push(`${service.slug} must define image and descriptive imageAlt`)
    }
    if (!service.seo.title || !service.seo.description || !service.seo.keywords.length) {
      errors.push(`${service.slug} must define SEO title, description and keywords`)
    }

    assertMinimum(service, 'commonScenarios', 3, errors)
    assertMinimum(service, 'outcomes', 4, errors)
    assertMinimum(service, 'scopeGroups', 4, errors)
    assertMinimum(service, 'process', 8, errors)
    assertMinimum(service, 'clientInformationRequired', 8, errors)
    assertMinimum(service, 'safetyControls', 6, errors)
    assertMinimum(service, 'staffCompetence', 4, errors)
    assertMinimum(service, 'equipment', 4, errors)
    assertMinimum(service, 'qualityAssurance', 4, errors)
    assertMinimum(service, 'deliverables', 4, errors)
    assertMinimum(service, 'exclusions', 3, errors)
    assertMinimum(service, 'faqs', 5, errors)
    assertMinimum(service, 'relatedServices', 3, errors)
    assertMinimum(service, 'relatedPolicies', 3, errors)

    const allText = collectText(service)
    const placeholder = allText.find(text => publicPlaceholderPattern.test(text))
    if (placeholder) {
      errors.push(`${service.slug} contains public placeholder text: ${placeholder}`)
    }

    for (const link of service.relatedServices) {
      const relatedSlug = link.href.match(/^\/services\/([^/]+)$/)?.[1]
      if (!relatedSlug || !catalogue.some(item => item.slug === relatedSlug)) {
        errors.push(`${service.slug} links to unknown related service ${link.href}`)
      }
    }

    for (const link of service.relatedPolicies) {
      const policySlug = link.href.match(/^\/policies\/([^/]+)$/)?.[1]
      if (!policySlug || !policySlugs.has(policySlug)) {
        errors.push(`${service.slug} links to unknown policy ${link.href}`)
      }
    }
  }

  if (errors.length) {
    throw new Error(`Service catalogue validation failed:\n${errors.join('\n')}`)
  }

  return true
}

validateServices()
