import type {
  ServiceControl,
  ServiceDeliverable,
  ServiceFeature,
  ServiceLink,
  ServiceProcessStep,
  ServiceRequirement
} from './types'

export const categoryLabels = {
  'commercial-planned': 'Commercial and planned',
  'property-turnaround': 'Property turnaround',
  'sensitive-residential': 'Sensitive residential',
  'specialist-reactive': 'Specialist and reactive'
} as const

export const riskLabels = {
  routine: 'Routine planned service',
  enhanced: 'Enhanced property-turnaround service',
  specialist: 'Specialist triage required',
  'high-risk-review-required': 'High-risk review may be required'
} as const

export const serviceModeLabels = {
  'occupied-property': 'Occupied property',
  'vacant-property': 'Vacant property',
  'recurring-service': 'Recurring service',
  'one-off-service': 'One-off service',
  'specialist-risk-review': 'Specialist risk review',
  'out-of-hours-request': 'Out-of-hours request'
} as const

export const policyLinks = {
  healthSafety: {
    label: 'Health and Safety Policy',
    href: '/policies/health-and-safety',
    description: 'How Shinezone manages task, site and public safety controls.'
  },
  coshh: {
    label: 'COSHH Policy',
    href: '/policies/coshh',
    description: 'Controls for selecting, diluting, using and storing cleaning products.'
  },
  safeguarding: {
    label: 'Safeguarding Policy',
    href: '/policies/safeguarding',
    description: 'Escalation and conduct expectations where vulnerable people may be present.'
  },
  loneWorking: {
    label: 'Lone Working Policy',
    href: '/policies/lone-working',
    description: 'Controls for isolated work, access checks and escalation.'
  },
  sharps: {
    label: 'Sharps and Contaminated Waste Policy',
    href: '/policies/sharps-and-contaminated-waste',
    description: 'Controls for needles, blades, contaminated glass and related waste.'
  },
  waste: {
    label: 'Waste Duty of Care Policy',
    href: '/policies/waste-duty-of-care',
    description: 'How waste authority, classification, transfer and documentation are managed.'
  },
  complaints: {
    label: 'Complaints and Rectification Policy',
    href: '/policies/complaints-and-rectification',
    description: 'How issues, missed tasks and non-conformances are recorded and corrected.'
  },
  dataProtection: {
    label: 'Data Protection Policy',
    href: '/policies/data-protection',
    description: 'Controls for minimising and protecting personal information connected to cleaning work.'
  },
  workingAtHeight: {
    label: 'Working at Height and Window Cleaning Policy',
    href: '/policies/working-at-height-and-window-cleaning',
    description: 'Method selection and access controls for window and above-ground work.'
  },
  emergency: {
    label: 'Emergency and Out-of-Hours Response Policy',
    href: '/policies/emergency-and-out-of-hours-response',
    description: 'How urgent requests are triaged, accepted, recorded and escalated.'
  },
  environmental: {
    label: 'Environmental and Sustainability Policy',
    href: '/policies/environmental-sustainability',
    description: 'Controls for product choice, water use, waste reduction and routing.'
  },
  training: {
    label: 'Training and Competence Policy',
    href: '/policies/training-and-competence',
    description: 'How competence is matched to tasks, equipment and supervision.'
  }
} satisfies Record<string, ServiceLink>

export function serviceLink(slug: string, label: string, description: string): ServiceLink {
  return {
    label,
    href: `/services/${slug}`,
    description
  }
}

export function sectorLink(label: string, description: string): ServiceLink {
  return {
    label,
    href: '/sectors',
    description
  }
}

export const commonClientInformation: ServiceRequirement[] = [
  {
    title: 'Property address and postcode',
    description: 'Full site address, postcode and any building or block reference.',
    required: true
  },
  {
    title: 'Property type and approximate size',
    description: 'Rooms, floors, blocks, square metre estimate or other size indicator.',
    required: true
  },
  {
    title: 'Occupied or vacant status',
    description: 'Confirm whether residents, staff, visitors or contractors may be present.',
    required: true
  },
  {
    title: 'Photographs where available',
    description: 'Images help Shinezone assess condition, access, waste and likely equipment needs.',
    required: false
  },
  {
    title: 'Known hazards',
    description: 'Sharps, bodily fluids, suspected substances, pests, mould, broken glass, damage or utilities issues.',
    required: true
  },
  {
    title: 'Access arrangements',
    description: 'Keys, fobs, alarm instructions, concierge arrangements, parking and permitted working times.',
    required: true
  },
  {
    title: 'Completion deadline',
    description: 'Any inspection, handover, occupancy or operational deadline connected to the request.',
    required: true
  },
  {
    title: 'Reporting expectations',
    description: 'Confirm whether checklists, photographs, waste notes or sign-off evidence are required.',
    required: true
  }
]

export const commonSitePreparation: ServiceRequirement[] = [
  {
    title: 'Confirm authority to instruct',
    description: 'The requester must be authorised to approve access, cleaning scope and any disposal decisions.',
    required: true
  },
  {
    title: 'Secure access route',
    description: 'Keys, fobs, alarms and lock-up instructions should be agreed before attendance.',
    required: true
  },
  {
    title: 'Disclose changes before attendance',
    description: 'New hazards, occupancy changes, access issues or scope changes should be communicated promptly.',
    required: true
  },
  {
    title: 'Confirm utilities',
    description: 'Advise whether water, electricity and lighting are available and safe to use.',
    required: true
  }
]

export const commonClientResponsibilities: ServiceRequirement[] = [
  {
    title: 'Provide accurate site information',
    description: 'Shinezone relies on the client to disclose known hazards, restrictions and property conditions.',
    required: true
  },
  {
    title: 'Identify restricted items',
    description:
      'Personal belongings, confidential papers, valuables and items not intended for disposal must be identified.',
    required: true
  },
  {
    title: 'Maintain a contact during attendance',
    description: 'An authorised contact should be available for access, exclusions, hazards and sign-off decisions.',
    required: true
  },
  {
    title: 'Approve variations before extra work',
    description: 'Additional rooms, specialist hazards, waste or out-of-scope tasks may require revised approval.',
    required: true
  }
]

export const commonSafetyControls: ServiceControl[] = [
  {
    title: 'Dynamic risk assessment',
    description: 'The team reviews the actual condition of the site before starting and escalates material changes.',
    relatedPolicySlug: 'health-and-safety'
  },
  {
    title: 'COSHH controls',
    description: 'Cleaning products are selected, diluted, used and stored according to the relevant assessment.',
    relatedPolicySlug: 'coshh'
  },
  {
    title: 'Wet-floor and slip controls',
    description: 'Work is sequenced to reduce slip risk, with warning signage and controlled access where needed.',
    relatedPolicySlug: 'health-and-safety'
  },
  {
    title: 'Manual-handling review',
    description: 'Heavy, awkward or contaminated items are assessed before movement.',
    relatedPolicySlug: 'health-and-safety'
  },
  {
    title: 'Site security',
    description: 'Access, keys, alarms, lock-up and property boundaries are confirmed before work begins.',
    relatedPolicySlug: 'health-and-safety'
  },
  {
    title: 'Stop-work authority',
    description: 'Operatives may stop and escalate when conditions exceed the agreed scope or controls.',
    relatedPolicySlug: 'health-and-safety'
  }
]

export const commonStaffCompetence: ServiceFeature[] = [
  {
    title: 'Task briefing',
    description: 'Staff receive the agreed scope, access notes, hazards and expected output before attendance.'
  },
  {
    title: 'Cleaning-method competence',
    description: 'Operatives are matched to tasks they understand and can complete safely.'
  },
  {
    title: 'COSHH awareness',
    description: 'Products may be used only by people who understand the relevant product controls.'
  },
  {
    title: 'Escalation judgement',
    description: 'Staff must know when to pause work and refer hazards, defects, access issues or client changes.'
  }
]

export const commonPpe: ServiceFeature[] = [
  {
    title: 'Protective gloves',
    description: 'Selected according to cleaning product, task and contamination risk.'
  },
  {
    title: 'Protective clothing',
    description:
      'Aprons, coveralls or additional clothing are used where splash, dust or contamination risk requires it.'
  },
  {
    title: 'Safety footwear',
    description: 'Used where task, access, floor or waste conditions require foot protection.'
  },
  {
    title: 'Task-specific PPE',
    description: 'Additional PPE is selected only where the risk assessment identifies a need.'
  }
]

export const commonQualityAssurance: ServiceFeature[] = [
  {
    title: 'Agreed completion criteria',
    description: 'The expected outcome is defined before work starts so the team and client share the same standard.'
  },
  {
    title: 'Task checklist',
    description: 'The agreed scope is translated into a practical completion checklist.'
  },
  {
    title: 'Supervisor or management review',
    description: 'Higher-risk, larger or sensitive work may be reviewed by a supervisor or responsible manager.'
  },
  {
    title: 'Non-conformance route',
    description: 'Missed items, defects and concerns are recorded and reviewed for rectification where appropriate.'
  }
]

export const commonDeliverables: ServiceDeliverable[] = [
  {
    title: 'Written quotation',
    description: 'Scope, assumptions, exclusions, optional items and pricing basis are confirmed before acceptance.',
    availability: 'standard'
  },
  {
    title: 'Completion checklist',
    description: 'Records the agreed tasks completed and any relevant exceptions.',
    availability: 'standard'
  },
  {
    title: 'Photographic evidence',
    description: 'Before-and-after images can be supplied where agreed, lawful and proportionate.',
    availability: 'where-agreed'
  },
  {
    title: 'Waste or exception notes',
    description: 'Waste routes, exclusions, defects or additional risks can be documented where required.',
    availability: 'where-required'
  }
]

export const commonRectification = [
  'Record the issue and the affected area',
  'Assess whether any immediate safety action is required',
  'Confirm whether the item was within the agreed scope',
  'Assign the rectification action and responsible person',
  'Complete the remedial work where accepted',
  'Verify completion and record any learning'
]

export const commonEnvironmentalControls: ServiceFeature[] = [
  {
    title: 'Controlled product use',
    description: 'Products are selected and diluted according to task need, surface suitability and safety controls.'
  },
  {
    title: 'Water efficiency',
    description: 'The minimum effective water quantity is used while maintaining safe cleaning outcomes.'
  },
  {
    title: 'Reusable systems where suitable',
    description: 'Reusable cloths and equipment are used where they can be cleaned or decontaminated safely.'
  },
  {
    title: 'Route planning',
    description: 'Scheduling seeks to reduce avoidable journeys where practical and compatible with client need.'
  }
]

export const commonProcess = (serviceName: string): ServiceProcessStep[] => [
  {
    step: 1,
    title: 'Initial enquiry',
    description: `The client describes the ${serviceName.toLowerCase()} requirement, property, location and required outcome.`,
    clientAction: 'Provide the core site details, preferred dates and known hazards.',
    shinezoneAction: 'Create the enquiry record and identify missing information.'
  },
  {
    step: 2,
    title: 'Scope and access review',
    description: 'Access, occupancy, property condition, utilities and deadline constraints are reviewed.',
    shinezoneAction: 'Decide whether photographs, a site survey or further client clarification are needed.'
  },
  {
    step: 3,
    title: 'Risk and competence check',
    description: 'Known hazards, specialist requirements and staffing competence are checked before acceptance.',
    shinezoneAction: 'Confirm whether the work can proceed as planned or needs specialist triage.'
  },
  {
    step: 4,
    title: 'Quotation and method confirmation',
    description: 'The proposed scope, assumptions, exclusions and reporting expectations are confirmed.',
    evidenceProduced: ['Written quotation', 'Defined scope']
  },
  {
    step: 5,
    title: 'Scheduling and mobilisation',
    description: 'The work is scheduled once access, staff, equipment and operational capacity are confirmed.',
    clientAction: 'Keep the site contact available for access or change decisions.',
    shinezoneAction: 'Allocate people, equipment, PPE and briefing information.'
  },
  {
    step: 6,
    title: 'Arrival and site check',
    description: 'The team attends, confirms access and completes a dynamic site check before starting.',
    evidenceProduced: ['Arrival note where required', 'Dynamic risk check where required']
  },
  {
    step: 7,
    title: 'Cleaning and issue escalation',
    description: 'The agreed work is completed and unexpected hazards, defects or exclusions are escalated.',
    shinezoneAction: 'Pause or vary work only where the risk review and client authority allow it.'
  },
  {
    step: 8,
    title: 'Inspection and handover',
    description: 'The completed areas are reviewed against the agreed outcome and handover evidence is produced.',
    evidenceProduced: ['Completion checklist', 'Photographs where agreed', 'Exception notes where required']
  }
]
