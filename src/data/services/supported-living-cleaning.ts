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

export const supportedLivingCleaning: Service = {
  slug: 'supported-living-cleaning',
  title: 'Supported Living Environment Cleaning',
  shortTitle: 'Supported Living',
  category: ['sensitive-residential'],
  riskLevel: 'enhanced',
  serviceModes: ['occupied-property', 'recurring-service', 'one-off-service', 'specialist-risk-review'],
  schedulingModel: 'Planned cleaning around support routines, occupancy, privacy and access arrangements.',
  instructionType:
    'Communal-area cleaning, shared-facility cleaning, periodic refresh or property-environment support.',
  surveyRequirement:
    'A survey or pre-start meeting is recommended where residents are present or routines are complex.',
  summary:
    'Property-cleaning services for supported living environments, delivered around privacy, dignity and support-team liaison.',
  introduction: [
    'Supported living cleaning requires respect for residents, support routines, privacy, professional boundaries and safeguarding escalation. The cleaning task may appear routine, but the environment can include mobility aids, communication needs, shared facilities and sensitive personal contexts.',
    'Shinezone plans this service around the property environment, not personal care. The scope may include communal kitchens, bathrooms, lounges, circulation areas, touchpoints and periodic deep cleaning, while avoiding medication handling, care tasks or unnecessary personal data collection.',
    'Staff are briefed to work calmly, respectfully and within boundaries. If a concern arises, it is escalated through the agreed client route rather than investigated by cleaning staff.'
  ],
  valueProposition:
    'Respectful supported-living cleaning that protects property standards while recognising privacy, dignity and service boundaries.',
  image: '/images/shinezone/giorgio-trovato-5TXz228u4eo-unsplash.jpg',
  imageAlt: 'Cleaner using upholstery equipment in a residential lounge environment',
  gallery: [
    {
      src: '/images/shinezone/new-images/pexels-tima-miroshnichenko-6195129.jpg',
      alt: 'Cleaning team preparing for a residential environment clean',
      caption: 'Support-team liaison and privacy boundaries are confirmed before attendance.'
    },
    {
      src: '/images/shinezone/new-images/pexels-shvets-production-7513011.jpg',
      alt: 'Cleaner in a domestic-style environment representing property cleaning support',
      caption: 'Imagery is used to represent cleaning only, not regulated care or resident support.'
    }
  ],
  suitableFor: [
    {
      title: 'Supported-living providers',
      description: 'For communal-area and shared-facility cleaning around resident routines.'
    },
    {
      title: 'Care organisations',
      description: 'For property cleaning that respects privacy while remaining outside regulated care.'
    },
    {
      title: 'Housing providers',
      description: 'For supported accommodation where property standards and escalation routes matter.'
    },
    {
      title: 'Property managers',
      description: 'For communal and periodic cleaning in sensitive residential environments.'
    }
  ],
  propertyTypes: [
    {
      title: 'Communal kitchens',
      description: 'Shared food-preparation areas cleaned around resident use and support routines.'
    },
    {
      title: 'Bathrooms and sanitary areas',
      description: 'Shared facilities where hygiene, dignity and access need careful planning.'
    },
    {
      title: 'Lounges and shared rooms',
      description: 'Resident-adjacent spaces that may include soft furnishings, mobility aids and personal items.'
    },
    {
      title: 'Circulation areas',
      description: 'Corridors, stairs and entrances where access, trip hazards and disruption need consideration.'
    }
  ],
  commonScenarios: [
    {
      title: 'Recurring communal cleaning',
      description:
        'A supported-living property needs regular cleaning of shared spaces while residents remain on site.',
      recommendedAction:
        'Provide support-team contact, preferred working hours, privacy considerations and access details.',
      urgency: 'planned'
    },
    {
      title: 'Periodic deep clean',
      description: 'Shared kitchens, bathrooms or lounges need a deeper clean around support routines.',
      recommendedAction:
        'Confirm vacant windows, resident disruption limits, utilities and any items that must not be moved.',
      urgency: 'priority'
    },
    {
      title: 'Incident-related clean',
      description: 'A spill, bodily-fluid issue, damage or unusual concern has affected a shared space.',
      recommendedAction: 'Describe the affected area and risk without sharing unnecessary resident personal data.',
      urgency: 'urgent'
    }
  ],
  outcomes: [
    {
      title: 'Cleaner communal spaces',
      description: 'Shared kitchens, bathrooms, lounges and routes are maintained to agreed property standards.'
    },
    {
      title: 'Privacy-respecting attendance',
      description: 'Staff avoid unnecessary personal information and work within professional boundaries.'
    },
    {
      title: 'Reduced disruption to routines',
      description: 'Scheduling considers support routines, resident movement and access needs.'
    },
    {
      title: 'Clear escalation',
      description: 'Safeguarding, access and property concerns are reported through agreed channels.'
    }
  ],
  scopeGroups: [
    {
      title: 'Communal kitchens',
      description: 'Shared kitchen surfaces and fixtures cleaned according to the agreed scope.',
      items: [
        'Worktops',
        'Sinks and taps',
        'Cupboard fronts where agreed',
        'Splashbacks',
        'Appliance exteriors',
        'Floors'
      ]
    },
    {
      title: 'Bathrooms and sanitary spaces',
      description: 'Shared facilities cleaned with attention to dignity and access.',
      items: ['Toilets', 'Basins', 'Showers or baths', 'Mirrors', 'Taps', 'Floors', 'Touchpoints']
    },
    {
      title: 'Lounges and circulation areas',
      description: 'Shared living and movement areas cleaned around resident belongings and mobility aids.',
      items: ['Tables', 'Accessible surfaces', 'Vacuuming', 'Hard floors', 'Handrails', 'Door handles', 'Skirting']
    },
    {
      title: 'Reporting and boundaries',
      description: 'The cleaning record focuses on property issues and agreed escalation routes.',
      items: [
        'Access notes',
        'Damage observations',
        'Trip hazards',
        'Belongings left untouched',
        'Safeguarding route reminders',
        'Completion notes'
      ]
    }
  ],
  included: [
    {
      title: 'Support-team liaison',
      description: 'Working times, access and disruption limits are coordinated with an authorised contact.'
    },
    {
      title: 'Property cleaning only',
      description: 'The service is limited to cleaning agreed property areas and fixtures.'
    },
    {
      title: 'Privacy-aware conduct',
      description: 'Staff avoid unnecessary resident discussion and personal data.'
    },
    {
      title: 'Escalation process',
      description: 'Concerns are reported through the agreed client route.'
    }
  ],
  optionalExtras: [
    {
      title: 'Soft-furnishing or upholstery cleaning',
      description: 'Suitable items can be assessed for machine cleaning where agreed.',
      pricedSeparately: true
    },
    {
      title: 'Periodic kitchen or bathroom deep clean',
      description: 'Deeper cleaning of shared hygiene areas at planned intervals.',
      pricedSeparately: true
    },
    {
      title: 'Carpet and floor care',
      description: 'Machine cleaning where surfaces, access and drying conditions are suitable.',
      pricedSeparately: true
    },
    {
      title: 'Specialist contamination response',
      description: 'Bodily fluids, sharps or contamination require separate specialist triage.',
      pricedSeparately: true
    }
  ],
  exclusions: [
    {
      title: 'Regulated care, medication or personal care',
      description:
        'Shinezone does not provide regulated care, medication support, moving and handling of residents or personal care.',
      escalation: 'Those responsibilities remain with the care or support provider.'
    },
    {
      title: 'Medical or confidential personal data',
      description: 'Resident diagnoses, histories and private details should not be shared for cleaning purposes.',
      escalation: 'Only risk and access information relevant to the cleaning task should be provided.'
    },
    {
      title: 'Moving personal possessions without authority',
      description:
        'Resident belongings, medication, paperwork and personal property are not moved beyond what the agreed cleaning task safely requires.',
      escalation: 'The support team should advise on belongings and restricted areas.'
    }
  ],
  process: commonProcess('Supported Living Environment Cleaning'),
  clientInformationRequired: commonClientInformation,
  sitePreparation: commonSitePreparation,
  clientResponsibilities: [
    ...commonClientResponsibilities,
    {
      title: 'Confirm support routines',
      description: 'Tell Shinezone when cleaning should avoid meals, medication rounds, visits or other routines.',
      required: true
    }
  ],
  safetyControls: [
    ...commonSafetyControls,
    {
      title: 'Safeguarding boundaries',
      description: 'Staff report concerns through the agreed route and do not investigate.',
      relatedPolicySlug: 'safeguarding'
    },
    {
      title: 'Trip and mobility-aid awareness',
      description: 'Equipment and wet floors are managed around mobility aids and resident movement.'
    }
  ],
  specialistControls: [
    {
      title: 'Bodily-fluid escalation',
      description: 'Bodily fluids require assessment before PPE, cleaning method and waste route are selected.'
    },
    {
      title: 'Sharps escalation',
      description: 'Needles or contaminated sharp items are escalated to specialist controls.',
      relatedPolicySlug: 'sharps-and-contaminated-waste'
    },
    {
      title: 'Behaviour or immediate danger',
      description: 'Immediate danger is directed to the appropriate emergency service or authorised site contact.'
    }
  ],
  staffCompetence: [
    ...commonStaffCompetence,
    {
      title: 'Sensitive-environment conduct',
      description: 'Staff are briefed on privacy, dignity, professional boundaries and escalation.'
    }
  ],
  equipment: [
    {
      title: 'Colour-coded cleaning equipment',
      description: 'Used to separate kitchens, bathrooms and general areas.'
    },
    {
      title: 'Vacuum and floor tools',
      description: 'Selected for lounges, bedrooms, corridors and shared routes.'
    },
    {
      title: 'Upholstery or extraction equipment',
      description: 'Used only where included and suitable for the item and setting.'
    },
    {
      title: 'Warning signage',
      description: 'Used to manage wet floors and resident movement.'
    }
  ],
  ppe: commonPpe,
  qualityAssurance: [
    ...commonQualityAssurance,
    {
      title: 'Sensitive reporting',
      description: 'Records focus on property condition, cleaning output and escalation, not private resident details.'
    }
  ],
  deliverables: commonDeliverables,
  rectificationApproach: commonRectification,
  environmentalControls: commonEnvironmentalControls,
  wasteControls: [
    {
      title: 'Belongings protected',
      description: 'Personal possessions are not treated as waste without authority.'
    },
    {
      title: 'General waste boundaries',
      description: 'Ordinary waste is handled only where the site process and scope include it.'
    },
    {
      title: 'Contaminated waste escalation',
      description: 'Sharps and bodily-fluid waste require specialist controls.'
    },
    {
      title: 'Confidential waste excluded',
      description: 'Paperwork or confidential materials are escalated to the client.'
    }
  ],
  serviceOptions: [
    {
      title: 'Recurring supported-living clean',
      description: 'Planned cleaning around resident routines and support-team liaison.'
    },
    {
      title: 'Periodic deep clean',
      description: 'Deeper clean of agreed communal or hygiene-sensitive spaces.',
      pricedSeparately: true
    },
    {
      title: 'Incident triage',
      description: 'Specialist route where contamination or sharps are reported.',
      pricedSeparately: true
    }
  ],
  schedulingNotes: [
    'Attendance should avoid unnecessary disruption to resident routines where possible.',
    'Support-team contact and access boundaries should be confirmed before attendance.',
    'The service does not include care, support, medication or resident moving and handling.'
  ],
  pricingFactors: [
    {
      title: 'Occupied setting complexity',
      description: 'Resident routines, privacy and support-team liaison affect planning.'
    },
    {
      title: 'Area mix',
      description: 'Kitchens, bathrooms, lounges, corridors and soft furnishings affect scope.'
    },
    {
      title: 'Frequency',
      description: 'Recurring schedules differ from one-off deep cleans or incident responses.'
    },
    {
      title: 'Specialist hazards',
      description: 'Sharps, bodily fluids or contamination change the service route.'
    },
    {
      title: 'Evidence requirements',
      description: 'Photographs, checklists and sensitive reporting requirements affect administration.'
    }
  ],
  relatedServices: [
    serviceLink(
      'temporary-accommodation-cleaning',
      'Temporary Accommodation Cleaning',
      'Cleaning around occupancy, privacy and shared accommodation needs.'
    ),
    serviceLink(
      'communal-block-cleaning',
      'Communal Block Cleaning',
      'Routine cleaning for shared residential routes.'
    ),
    serviceLink(
      'biohazard-bodily-fluid-cleaning',
      'Biohazard and Bodily-Fluid Cleaning',
      'Controlled cleaning for contamination incidents.'
    )
  ],
  relatedSectors: [
    sectorLink('Supported-living organisations', 'Cleaning around privacy, routines and property standards.'),
    sectorLink('Care organisations', 'Property cleaning that stays outside regulated care.'),
    sectorLink('Housing providers', 'Communal and supported accommodation cleaning support.')
  ],
  relatedPolicies: [policyLinks.safeguarding, policyLinks.healthSafety, policyLinks.coshh, policyLinks.training],
  faqs: [
    {
      question: 'Does Shinezone provide personal care?',
      answer:
        'No. Shinezone provides property cleaning only and does not provide personal care, medication support or regulated care.'
    },
    {
      question: 'Can Shinezone clean while residents are present?',
      answer: 'Yes, where working times, access, privacy and disruption controls are agreed with the provider.'
    },
    {
      question: 'Can staff move resident belongings?',
      answer:
        'Personal belongings are avoided unless the agreed cleaning task safely requires minor movement and the support team has confirmed boundaries.'
    },
    {
      question: 'What resident information should be shared?',
      answer: 'Only information relevant to property access, immediate risk and cleaning safety should be shared.'
    },
    {
      question: 'How are safeguarding concerns handled?',
      answer:
        'Concerns are reported through the agreed client route. Cleaning staff do not investigate or make care decisions.'
    }
  ],
  seo: {
    title: 'Supported Living Environment Cleaning | Shinezone',
    description:
      'Supported living cleaning for communal kitchens, bathrooms, lounges and circulation areas, planned around privacy, dignity and support-team liaison.',
    keywords: [
      'supported living cleaning',
      'care environment cleaning',
      'supported accommodation cleaning',
      'communal living cleaning'
    ]
  },
  schemaServiceType: 'Supported living environment cleaning'
}
