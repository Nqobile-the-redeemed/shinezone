export type ServiceCategory =
  | 'commercial-planned'
  | 'property-turnaround'
  | 'sensitive-residential'
  | 'specialist-reactive'

export type ServiceRiskLevel = 'routine' | 'enhanced' | 'specialist' | 'high-risk-review-required'

export type ClaimStatus = 'verified' | 'conditional' | 'unverified'

export type ServiceMode =
  | 'occupied-property'
  | 'vacant-property'
  | 'recurring-service'
  | 'one-off-service'
  | 'specialist-risk-review'
  | 'out-of-hours-request'

export interface ServiceLink {
  label: string
  href: string
  description?: string
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface ServiceFeature {
  title: string
  description: string
  icon?: string
}

export interface ServiceProcessStep {
  step: number
  title: string
  description: string
  clientAction?: string
  shinezoneAction?: string
  evidenceProduced?: string[]
}

export interface ServiceControl {
  title: string
  description: string
  examples?: string[]
  relatedPolicySlug?: string
}

export interface ServiceScopeGroup {
  title: string
  description?: string
  items: string[]
}

export interface ServiceScenario {
  title: string
  description: string
  recommendedAction: string
  urgency?: 'planned' | 'priority' | 'urgent' | 'emergency'
}

export interface ServiceRequirement {
  title: string
  description: string
  required: boolean
}

export interface ServiceDeliverable {
  title: string
  description: string
  availability: 'standard' | 'where-agreed' | 'where-required'
}

export interface ServiceLimitation {
  title: string
  description: string
  escalation?: string
}

export interface ServiceOption {
  title: string
  description: string
  pricedSeparately?: boolean
}

export interface ServiceMetric {
  label: string
  value: string
  claimStatus: ClaimStatus
}

export interface Service {
  slug: string
  title: string
  shortTitle: string
  category: ServiceCategory[]
  riskLevel: ServiceRiskLevel
  serviceModes: ServiceMode[]
  schedulingModel: string
  instructionType: string
  surveyRequirement: string

  summary: string
  introduction: string[]
  valueProposition: string

  image: string
  imageAlt: string
  gallery?: {
    src: string
    alt: string
    caption?: string
  }[]

  suitableFor: ServiceFeature[]
  propertyTypes: ServiceFeature[]

  commonScenarios: ServiceScenario[]
  outcomes: ServiceFeature[]

  scopeGroups: ServiceScopeGroup[]
  included: ServiceFeature[]
  optionalExtras: ServiceOption[]
  exclusions: ServiceLimitation[]

  process: ServiceProcessStep[]

  clientInformationRequired: ServiceRequirement[]
  sitePreparation: ServiceRequirement[]
  clientResponsibilities: ServiceRequirement[]

  safetyControls: ServiceControl[]
  specialistControls?: ServiceControl[]

  staffCompetence: ServiceFeature[]
  equipment: ServiceFeature[]
  ppe: ServiceFeature[]

  qualityAssurance: ServiceFeature[]
  deliverables: ServiceDeliverable[]
  rectificationApproach: string[]

  environmentalControls: ServiceFeature[]
  wasteControls?: ServiceFeature[]

  serviceOptions: ServiceOption[]
  schedulingNotes: string[]
  pricingFactors: ServiceFeature[]

  relatedServices: ServiceLink[]
  relatedSectors: ServiceLink[]
  relatedPolicies: ServiceLink[]

  faqs: ServiceFAQ[]

  seo: {
    title: string
    description: string
    keywords: string[]
  }

  metrics?: ServiceMetric[]
  schemaServiceType: string
}
