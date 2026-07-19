import type { Service } from './types'
import {
  commonClientInformation,
  commonClientResponsibilities,
  commonDeliverables,
  commonEnvironmentalControls,
  commonPpe,
  commonProcess,
  commonQualityAssurance,
  commonRectification,
  commonSafetyControls,
  commonSitePreparation,
  commonStaffCompetence,
  policyLinks,
  sectorLink,
  serviceLink
} from './shared'

export const postEvictionCleaning: Service = {
  slug: 'post-eviction-cleaning',
  title: 'Post-Eviction Cleaning',
  shortTitle: 'Post-Eviction',
  category: ['property-turnaround', 'specialist-reactive'],
  riskLevel: 'high-risk-review-required',
  serviceModes: ['vacant-property', 'one-off-service', 'specialist-risk-review', 'out-of-hours-request'],
  schedulingModel: 'Reactive or planned attendance after authority, access and hazard screening are completed.',
  instructionType: 'Post-eviction, abandonment, high-accumulation or possession-related property clean.',
  surveyRequirement:
    'A photograph review or site survey is strongly recommended before scope and waste routes are accepted.',
  summary:
    'Controlled cleaning after eviction or abandonment, with authority checks, hazard screening and escalation boundaries.',
  introduction: [
    'Post-eviction cleaning can involve heavy accumulation, personal belongings, pest evidence, property damage, bodily fluids, sharps, suspected substances and unclear disposal authority. Shinezone treats these instructions as higher-risk property-turnaround work rather than ordinary deep cleaning.',
    'The process starts with authority validation, site-security handover, access arrangements and an initial hazard review. The client must confirm what can be removed, what must remain, who is authorised to approve variations and whether any legal or tenancy process affects disposal decisions.',
    'Where hazards exceed the agreed controls, Shinezone may pause work, isolate the affected area and escalate. This protects operatives, clients, residents, neighbours and the integrity of any property handover.'
  ],
  valueProposition:
    'A risk-aware post-eviction clean that separates cleaning, waste authority, personal property decisions and specialist hazards.',
  image: '/images/shinezone/new-images/pexels-michelangelo-buonarroti-4176042.jpg',
  imageAlt: 'Operative wearing protective gloves preparing for a higher-risk property clean',
  gallery: [
    {
      src: '/images/shinezone/new-images/pexels-michelangelo-buonarroti-4176068.jpg',
      alt: 'Protective cleaning preparation for a specialist property clean',
      caption: 'PPE and cleaning methods are selected after the hazards are reviewed.'
    },
    {
      src: '/images/shinezone/new-images/pexels-tima-miroshnichenko-6196223.jpg',
      alt: 'Cleaning equipment prepared for property turnaround work',
      caption: 'Waste, keys and authority boundaries must be agreed before clearance begins.'
    }
  ],
  suitableFor: [
    {
      title: 'Housing providers',
      description: 'For void properties after possession, abandonment or tenancy enforcement activity.'
    },
    {
      title: 'Local authorities',
      description: 'For managed properties requiring careful evidence, hazard and escalation handling.'
    },
    {
      title: 'Landlords and agents',
      description: 'For properties needing cleaning after legal possession or abandonment.'
    },
    {
      title: 'Property managers',
      description: 'For sites where access, waste, risk and handover documentation need coordination.'
    }
  ],
  propertyTypes: [
    {
      title: 'Vacant flats and houses',
      description: 'Properties requiring internal cleaning, waste review and damage reporting.'
    },
    {
      title: 'Temporary accommodation units',
      description: 'Rooms or units where occupancy history, belongings and security need clarification.'
    },
    {
      title: 'Shared accommodation',
      description: 'Buildings where residents, neighbours or shared routes may be affected by the work.'
    },
    {
      title: 'External or storage areas',
      description: 'Sheds, bin stores and external spaces where waste or sharps may be present.'
    }
  ],
  commonScenarios: [
    {
      title: 'Possession handover clean',
      description: 'The client has legal possession and needs the property cleaned before inspection or repair works.',
      recommendedAction: 'Confirm authority, key handover, belongings instructions, utilities and known hazards.',
      urgency: 'priority'
    },
    {
      title: 'Heavy accumulation and waste',
      description: 'The property contains abandoned items, loose waste, furniture or possible pest evidence.',
      recommendedAction: 'Provide photographs and waste estimates so disposal authority and routes can be assessed.',
      urgency: 'priority'
    },
    {
      title: 'Sharps, suspected substances or bodily fluids',
      description: 'Specialist hazards are visible or suspected in the property.',
      recommendedAction: 'Do not disturb the area. Provide hazard details so specialist controls can be reviewed.',
      urgency: 'urgent'
    }
  ],
  outcomes: [
    {
      title: 'Controlled property access',
      description: 'Keys, alarms, access authority and lock-up expectations are documented.'
    },
    {
      title: 'Hazards separated from ordinary cleaning',
      description: 'Sharps, suspected substances and biological contamination are escalated through the correct route.'
    },
    {
      title: 'Waste authority clarified',
      description: 'Items are removed only where the client confirms authority and the disposal route is accepted.'
    },
    {
      title: 'Completion evidence and exceptions',
      description: 'Cleaning completion, defects, damage and excluded areas can be reported to the client.'
    }
  ],
  scopeGroups: [
    {
      title: 'Initial security and hazard review',
      description: 'Pre-clean checks before ordinary cleaning or clearance begins.',
      items: [
        'Access confirmation',
        'Alarm or lock-up instructions',
        'Visual hazard walk-through',
        'Utilities review',
        'Sharps screening',
        'Damage observations'
      ]
    },
    {
      title: 'Cleaning and clearance boundaries',
      description: 'Cleaning tasks are separated from disposal and specialist controls.',
      items: [
        'Loose waste where authorised',
        'Surface cleaning',
        'Sanitary areas',
        'Kitchen areas',
        'Floors',
        'Fixtures where accessible'
      ]
    },
    {
      title: 'Belongings and waste',
      description: 'Personal property and waste decisions require client authority.',
      items: [
        'Personal belongings left untouched unless authorised',
        'Bulky items assessed',
        'Waste categories recorded',
        'Restricted items escalated',
        'Disposal route confirmed'
      ]
    },
    {
      title: 'Handover and reporting',
      description: 'Evidence supports the next stage of property management.',
      items: [
        'Completion checklist',
        'Authorised photographs',
        'Defect notes',
        'Exclusion log',
        'Hazard escalation notes',
        'Lock-up confirmation where agreed'
      ]
    }
  ],
  included: [
    {
      title: 'Authority and access review',
      description: 'The client authority to instruct cleaning, clearance and disposal is checked.'
    },
    {
      title: 'Initial hazard screening',
      description: 'Known and visible hazards are reviewed before work proceeds.'
    },
    {
      title: 'Agreed cleaning and clearance',
      description: 'Tasks are completed only within the accepted scope and controls.'
    },
    {
      title: 'Evidence and escalation notes',
      description: 'Photographs, defects, hazards and exclusions can be documented where agreed.'
    }
  ],
  optionalExtras: [
    {
      title: 'Bulky-waste removal',
      description: 'Subject to authority, waste classification and disposal cost.',
      pricedSeparately: true
    },
    {
      title: 'Sharps clearance',
      description: 'Specialist process where needles, blades or contaminated glass are identified.',
      pricedSeparately: true
    },
    {
      title: 'Biohazard cleaning',
      description: 'Controlled process where bodily fluids or biological contamination are present.',
      pricedSeparately: true
    },
    {
      title: 'Carpet and floor care',
      description: 'Machine cleaning or floor treatment where surfaces are suitable.',
      pricedSeparately: true
    }
  ],
  exclusions: [
    {
      title: 'Unapproved disposal',
      description: 'Belongings, documents, furniture or contents are not disposed of without client authority.',
      escalation: 'The authorised client contact must confirm the required action.'
    },
    {
      title: 'Suspected illegal substances',
      description: 'Unidentified substances are not handled as ordinary cleaning or waste.',
      escalation: 'The issue is isolated where safe and escalated to the client or appropriate authority.'
    },
    {
      title: 'Unsafe site conditions',
      description:
        'Structural damage, electrical hazards, violence, pests or uncontrolled contamination may prevent work.',
      escalation: 'Scope, controls or specialist involvement must be reviewed before continuing.'
    }
  ],
  process: commonProcess('Post-Eviction Cleaning'),
  clientInformationRequired: commonClientInformation,
  sitePreparation: [
    ...commonSitePreparation,
    {
      title: 'Confirm legal or management authority',
      description: 'The client must confirm they are authorised to provide access and disposal instructions.',
      required: true
    }
  ],
  clientResponsibilities: [
    ...commonClientResponsibilities,
    {
      title: 'Confirm chain of authority',
      description: 'Identify who can approve clearance, variations, disposal and lock-up decisions.',
      required: true
    }
  ],
  safetyControls: [
    ...commonSafetyControls,
    {
      title: 'Sharps screening',
      description: 'Likely concealment areas are approached cautiously and escalated where sharps are identified.',
      relatedPolicySlug: 'sharps-and-contaminated-waste'
    },
    {
      title: 'Controlled property entry',
      description: 'Entry, exit, keys, alarms and lone-working considerations are reviewed before attendance.',
      relatedPolicySlug: 'lone-working'
    }
  ],
  specialistControls: [
    {
      title: 'Suspected substance escalation',
      description: 'Unidentified powders, liquids or drug-related items are not handled by ordinary cleaning staff.'
    },
    {
      title: 'Biohazard escalation',
      description: 'Bodily fluids or contamination are assessed before cleaning and waste handling begins.'
    },
    {
      title: 'Pest or infestation observation',
      description: 'Pest evidence may require client pest-control action before or alongside cleaning.'
    }
  ],
  staffCompetence: [
    ...commonStaffCompetence,
    {
      title: 'High-risk property awareness',
      description: 'Staff are briefed on concealed hazards, belongings, waste authority and stop-work triggers.'
    }
  ],
  equipment: [
    {
      title: 'Heavy-duty cleaning tools',
      description: 'Selected for soiled surfaces, neglected fixtures and accumulation.'
    },
    {
      title: 'Waste containment',
      description: 'Used where waste handling is accepted in the scope.'
    },
    {
      title: 'Sharps equipment where required',
      description: 'Sharps containers and tools are used only through the accepted specialist process.'
    },
    {
      title: 'Commercial floor equipment',
      description: 'Used where surfaces are suitable and included in the quotation.'
    }
  ],
  ppe: commonPpe,
  qualityAssurance: [
    ...commonQualityAssurance,
    {
      title: 'Hazard and exclusion log',
      description: 'Conditions outside accepted scope are recorded for client decision and follow-up.'
    }
  ],
  deliverables: commonDeliverables,
  rectificationApproach: commonRectification,
  environmentalControls: commonEnvironmentalControls,
  wasteControls: [
    {
      title: 'Client authority',
      description: 'Waste and belongings are removed only where authority is clear.'
    },
    {
      title: 'Waste classification',
      description: 'General, bulky, contaminated and restricted waste are considered separately.'
    },
    {
      title: 'Specialist segregation',
      description: 'Sharps, bodily fluids and suspected substances are not mixed with ordinary waste.'
    },
    {
      title: 'Waste documentation',
      description: 'Documentation is provided where the disposal route requires it.'
    }
  ],
  serviceOptions: [
    {
      title: 'Risk-reviewed property clean',
      description: 'Cleaning after access, authority and hazards are reviewed.'
    },
    {
      title: 'Clean with waste assessment',
      description: 'Adds waste review and quoted removal where accepted.',
      pricedSeparately: true
    },
    {
      title: 'Specialist hazard route',
      description: 'Used when sharps, fluids or suspected substances are present.',
      pricedSeparately: true
    }
  ],
  schedulingNotes: [
    'Post-eviction work is not confirmed until authority, access and hazard information are reviewed.',
    'Waste-heavy properties may require a survey or photograph review before pricing.',
    'Undeclared specialist hazards can change the attendance plan or pause work.'
  ],
  pricingFactors: [
    {
      title: 'Accumulation level',
      description: 'Loose waste, belongings, furniture and heavy soiling affect labour and disposal.'
    },
    {
      title: 'Hazards',
      description: 'Sharps, substances, bodily fluids, pests or damage may require specialist controls.'
    },
    {
      title: 'Authority and reporting',
      description: 'Photographs, chain-of-authority records and disposal evidence affect administration.'
    },
    {
      title: 'Access and security',
      description: 'Keys, alarms, lock-up, parking and site contact availability affect scheduling.'
    },
    {
      title: 'Deadline',
      description: 'Priority requests are subject to operational acceptance and may affect resourcing.'
    }
  ],
  relatedServices: [
    serviceLink(
      'end-of-tenancy-cleaning',
      'End-of-Tenancy Cleaning',
      'For standard vacant-property turnaround without specialist hazards.'
    ),
    serviceLink(
      'biohazard-bodily-fluid-cleaning',
      'Biohazard and Bodily-Fluid Cleaning',
      'For bodily fluids and biological contamination.'
    ),
    serviceLink(
      'sharps-drug-paraphernalia-clearance',
      'Sharps Clearance',
      'For needles, blades and drug paraphernalia.'
    )
  ],
  relatedSectors: [
    sectorLink('Housing providers', 'Void and post-possession cleaning with escalation controls.'),
    sectorLink('Local authorities', 'Risk-aware property support for sensitive accommodation.'),
    sectorLink('Landlords and agents', 'Possession-related cleaning with clear authority boundaries.')
  ],
  relatedPolicies: [policyLinks.healthSafety, policyLinks.sharps, policyLinks.waste, policyLinks.complaints],
  faqs: [
    {
      question: 'Can Shinezone remove belongings after an eviction?',
      answer:
        'Only where the client confirms authority and the disposal route has been accepted. Unclear belongings are escalated.'
    },
    {
      question: 'Is a site survey required?',
      answer:
        'A survey or photograph review is strongly recommended for heavy accumulation, waste, damage or suspected hazards.'
    },
    {
      question: 'What happens if suspected substances are found?',
      answer: 'The affected area is not handled as ordinary waste. The issue is isolated where safe and escalated.'
    },
    {
      question: 'Can the service include pest treatment?',
      answer:
        'Cleaning can report pest evidence, but pest-control treatment must be separately assessed by an appropriate provider.'
    },
    {
      question: 'Will completion photographs be supplied?',
      answer:
        'Photographs can be supplied where agreed, authorised and proportionate to privacy and property requirements.'
    }
  ],
  seo: {
    title: 'Post-Eviction Cleaning and Property Clearance Support | Shinezone',
    description:
      'Risk-aware post-eviction cleaning for vacant properties, including authority checks, hazard screening, waste controls and completion reporting.',
    keywords: [
      'post eviction cleaning',
      'void property cleaning',
      'abandoned property cleaning',
      'property clearance cleaning'
    ]
  },
  schemaServiceType: 'Post-eviction cleaning'
}
