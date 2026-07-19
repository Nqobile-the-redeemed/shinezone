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

export const temporaryAccommodationCleaning: Service = {
  slug: 'temporary-accommodation-cleaning',
  title: 'Temporary Accommodation Cleaning',
  shortTitle: 'Temporary Accommodation',
  category: ['property-turnaround', 'sensitive-residential'],
  riskLevel: 'enhanced',
  serviceModes: [
    'occupied-property',
    'vacant-property',
    'recurring-service',
    'one-off-service',
    'specialist-risk-review'
  ],
  schedulingModel: 'Planned, recurring or turnaround attendance around occupancy, access and resident sensitivity.',
  instructionType:
    'Communal cleaning, vacant-room turnaround, shared-facility cleaning or newly acquired property clean.',
  surveyRequirement:
    'A survey is recommended for hostels, shared accommodation, newly acquired properties and occupied sites.',
  summary:
    'Respectful cleaning for hostels, shared accommodation, self-contained units and temporary accommodation settings.',
  introduction: [
    'Temporary accommodation cleaning often combines property-turnaround pressure with the sensitivity of occupied residential environments. A site may include shared kitchens, bathrooms, lounges, corridors, newly vacated rooms, vulnerable residents, support staff, tenancy teams and urgent placement deadlines.',
    'Shinezone scopes each request around occupancy, access, resident disruption, privacy, security, shared facilities, waste, safeguarding escalation and the condition of each unit or communal area. The aim is to clean the property environment without collecting unnecessary personal information about residents.',
    'The service does not provide regulated care, support work or tenancy enforcement. Where immediate danger, safeguarding concerns, suspected substances, sharps or bodily fluids are present, the issue is escalated through the appropriate client or specialist route.'
  ],
  valueProposition:
    'A privacy-aware temporary accommodation cleaning service for providers managing fast-moving occupancy and sensitive residential settings.',
  image: '/images/shinezone/new-images/pexels-tima-miroshnichenko-6195288.jpg',
  imageAlt: 'Cleaning team working carefully in a residential accommodation setting',
  gallery: [
    {
      src: '/images/shinezone/new-images/pexels-tima-miroshnichenko-6195877.jpg',
      alt: 'Cleaning staff preparing equipment for a shared residential environment',
      caption: 'Occupancy and support-team liaison are considered before attendance.'
    },
    {
      src: '/images/shinezone/new-images/pexels-rdne-4921525.jpg',
      alt: 'Surface cleaning in a managed accommodation room',
      caption: 'Vacant-room turnaround can be separated from communal cleaning schedules.'
    }
  ],
  suitableFor: [
    {
      title: 'Temporary accommodation providers',
      description: 'For hostels, shared accommodation, self-contained units and high-turnover rooms.'
    },
    {
      title: 'Local authorities',
      description: 'For accommodation where accountability, resident sensitivity and reporting are important.'
    },
    {
      title: 'Housing teams',
      description: 'For vacant-room turnaround, communal cleaning and newly acquired property preparation.'
    },
    {
      title: 'Support and tenancy teams',
      description: 'For cleaning that must be coordinated around resident welfare and operational routines.'
    }
  ],
  propertyTypes: [
    {
      title: 'Hostels and shared accommodation',
      description: 'Shared kitchens, bathrooms, corridors, lounges and resident-adjacent areas.'
    },
    {
      title: 'Self-contained units',
      description: 'Individual flats or rooms requiring pre-occupation, post-occupation or periodic cleaning.'
    },
    {
      title: 'Newly acquired properties',
      description: 'Properties needing a condition review before being brought into use.'
    },
    {
      title: 'Communal and support areas',
      description: 'Shared spaces where staff, residents and visitors may be present.'
    }
  ],
  commonScenarios: [
    {
      title: 'Vacant-room turnaround',
      description: 'A room or unit needs cleaning before a new placement or occupancy.',
      recommendedAction: 'Confirm vacancy, belongings, utilities, deadline, photographs and access contact.',
      urgency: 'priority'
    },
    {
      title: 'Occupied shared-facility cleaning',
      description: 'Shared kitchens, bathrooms or corridors require cleaning while residents remain on site.',
      recommendedAction:
        'Provide occupancy information, preferred working times, support-team contact and disruption limits.',
      urgency: 'planned'
    },
    {
      title: 'Incident or safeguarding-related concern',
      description:
        'Cleaning is requested after reports of contamination, overnight-stay concerns, damage or welfare issues.',
      recommendedAction:
        'Disclose the property risk only as needed for cleaning and escalate safeguarding matters through the client route.',
      urgency: 'urgent'
    }
  ],
  outcomes: [
    {
      title: 'Cleaner shared environment',
      description: 'Communal kitchens, bathrooms, corridors and lounges are restored to an agreed standard.'
    },
    {
      title: 'Reduced resident disruption',
      description: 'Work is planned around occupancy, privacy and support-team routines where possible.'
    },
    {
      title: 'Prepared units for occupation',
      description: 'Vacant rooms or units are cleaned against a defined handover scope.'
    },
    {
      title: 'Clear escalation route',
      description:
        'Safeguarding, hazards, unauthorised occupancy observations or site-security concerns can be reported.'
    }
  ],
  scopeGroups: [
    {
      title: 'Shared kitchens and bathrooms',
      description: 'High-use facilities cleaned with attention to hygiene and resident access.',
      items: [
        'Worktops',
        'Sinks and taps',
        'Cupboard fronts where agreed',
        'Toilets',
        'Basins',
        'Showers or baths',
        'Floors',
        'Touchpoints'
      ]
    },
    {
      title: 'Communal rooms and circulation',
      description: 'Resident-adjacent shared spaces planned to limit disruption.',
      items: ['Lounges', 'Corridors', 'Stairwells', 'Entrances', 'Handrails', 'Internal doors', 'Accessible surfaces']
    },
    {
      title: 'Vacant-room turnaround',
      description: 'Room cleaning after vacancy or before occupation.',
      items: [
        'Floors',
        'Skirting',
        'Window sills',
        'Fixtures',
        'Internal bins',
        'Furniture surfaces where included',
        'Defect notes'
      ]
    },
    {
      title: 'Security and reporting',
      description: 'Observations relevant to the property environment are escalated appropriately.',
      items: [
        'Access issues',
        'Damage',
        'Waste concerns',
        'Unauthorised-occupancy observations',
        'Safeguarding route prompts',
        'Completion notes'
      ]
    }
  ],
  included: [
    {
      title: 'Occupancy-aware planning',
      description: 'Work is planned around whether rooms and shared areas are occupied, vacant or partly occupied.'
    },
    {
      title: 'Resident-sensitive conduct',
      description: 'Staff are expected to respect privacy and professional boundaries.'
    },
    {
      title: 'Communal and unit cleaning',
      description: 'Shared spaces and vacant units can be combined or separated in the quotation.'
    },
    {
      title: 'Escalation notes',
      description: 'Property concerns, hazards and support-team issues can be reported through agreed routes.'
    }
  ],
  optionalExtras: [
    {
      title: 'Vacant-room priority turnaround',
      description: 'Short-deadline room cleaning subject to access and operational acceptance.',
      pricedSeparately: true
    },
    {
      title: 'Periodic deep cleaning',
      description: 'Planned deep-cleaning of shared kitchens, bathrooms or communal areas.',
      pricedSeparately: true
    },
    {
      title: 'Carpet or floor care',
      description: 'Machine cleaning or floor treatment where surfaces are suitable.',
      pricedSeparately: true
    },
    {
      title: 'Specialist incident clean',
      description: 'Biohazard, sharps or contamination work requires separate specialist triage.',
      pricedSeparately: true
    }
  ],
  exclusions: [
    {
      title: 'Regulated care or support work',
      description:
        'Shinezone provides property cleaning and does not provide regulated personal care, medication support or tenancy support.',
      escalation: 'Care or support needs must remain with the responsible provider.'
    },
    {
      title: 'Unnecessary resident data',
      description:
        'Shinezone does not require resident diagnoses, medical history or private personal details for cleaning.',
      escalation: 'Only property, access and risk information relevant to cleaning should be shared.'
    },
    {
      title: 'Personal belongings',
      description: 'Resident possessions are not removed or rearranged without clear client authority.',
      escalation: 'Belonging or tenancy concerns should be handled by the responsible accommodation team.'
    }
  ],
  process: commonProcess('Temporary Accommodation Cleaning'),
  clientInformationRequired: commonClientInformation,
  sitePreparation: commonSitePreparation,
  clientResponsibilities: [
    ...commonClientResponsibilities,
    {
      title: 'Provide a support-team contact',
      description: 'An authorised contact should be available for occupancy, access and resident-sensitive decisions.',
      required: true
    }
  ],
  safetyControls: [
    ...commonSafetyControls,
    {
      title: 'Safeguarding escalation',
      description: 'Concerns are reported through the agreed client route; cleaning staff do not investigate.',
      relatedPolicySlug: 'safeguarding'
    },
    {
      title: 'Privacy and data minimisation',
      description: 'Only property, access and risk information needed for the clean should be shared.',
      relatedPolicySlug: 'data-protection'
    }
  ],
  specialistControls: [
    {
      title: 'Sharps and paraphernalia escalation',
      description: 'Needles, blades and drug-related items are managed only through specialist controls.',
      relatedPolicySlug: 'sharps-and-contaminated-waste'
    },
    {
      title: 'Immediate danger screening',
      description:
        'Violence, medical emergencies or criminal activity must be directed to the appropriate emergency service.'
    },
    {
      title: 'Bodily-fluid triage',
      description: 'Bodily fluids require assessment before cleaning method, PPE and waste route are selected.'
    }
  ],
  staffCompetence: [
    ...commonStaffCompetence,
    {
      title: 'Professional boundaries',
      description:
        'Staff understand that they provide cleaning only and should avoid support, care or tenancy decisions.'
    }
  ],
  equipment: [
    {
      title: 'Colour-coded cleaning system',
      description: 'Used to separate kitchens, bathrooms and general areas.'
    },
    {
      title: 'Commercial vacuum and floor tools',
      description: 'Selected for rooms, corridors and communal areas.'
    },
    {
      title: 'Approved products',
      description: 'Selected according to surfaces, hygiene needs and COSHH controls.'
    },
    {
      title: 'Waste containment',
      description: 'Used only for waste included in the accepted cleaning scope.'
    }
  ],
  ppe: commonPpe,
  qualityAssurance: [
    ...commonQualityAssurance,
    {
      title: 'Resident-sensitive reporting',
      description: 'Reports focus on property condition, access and risk rather than unnecessary personal details.'
    }
  ],
  deliverables: commonDeliverables,
  rectificationApproach: commonRectification,
  environmentalControls: commonEnvironmentalControls,
  wasteControls: [
    {
      title: 'Waste authority',
      description: 'Items in occupied accommodation are removed only when authority is clear.'
    },
    {
      title: 'Shared-facility waste',
      description: 'Ordinary waste is handled according to the agreed site rules.'
    },
    {
      title: 'Contaminated waste segregation',
      description: 'Sharps and bodily-fluid waste are not mixed with ordinary waste.'
    },
    {
      title: 'Resident belongings',
      description: 'Possessions are escalated to the accommodation team rather than removed by default.'
    }
  ],
  serviceOptions: [
    {
      title: 'Recurring communal clean',
      description: 'Planned cleaning of shared accommodation areas.'
    },
    {
      title: 'Vacant-room turnaround',
      description: 'One-off cleaning of rooms or units between occupancies.',
      pricedSeparately: true
    },
    {
      title: 'Priority accommodation response',
      description: 'Short-notice attendance subject to risk and capacity review.',
      pricedSeparately: true
    }
  ],
  schedulingNotes: [
    'Occupied accommodation requires clear access windows and resident-disruption planning.',
    'Support-team or tenancy-team liaison should be confirmed before attendance.',
    'Specialist hazards may change the route from accommodation cleaning to specialist triage.'
  ],
  pricingFactors: [
    {
      title: 'Occupancy status',
      description: 'Occupied, vacant and partly occupied areas require different planning.'
    },
    {
      title: 'Shared facilities',
      description: 'Kitchens, bathrooms, lounges and corridors add scope and frequency considerations.'
    },
    {
      title: 'Turnaround deadline',
      description: 'Urgent placement or inspection deadlines affect mobilisation.'
    },
    {
      title: 'Resident-sensitive controls',
      description: 'Working hours, liaison and privacy requirements may affect service delivery.'
    },
    {
      title: 'Hazards and waste',
      description: 'Sharps, bodily fluids, waste or belongings require separate review.'
    }
  ],
  relatedServices: [
    serviceLink(
      'communal-block-cleaning',
      'Communal Block Cleaning',
      'Recurring cleaning for shared residential routes.'
    ),
    serviceLink(
      'end-of-tenancy-cleaning',
      'End-of-Tenancy Cleaning',
      'Vacant-property turnaround for rooms and units.'
    ),
    serviceLink(
      'biohazard-bodily-fluid-cleaning',
      'Biohazard and Bodily-Fluid Cleaning',
      'Controlled cleaning for contamination incidents.'
    )
  ],
  relatedSectors: [
    sectorLink('Temporary accommodation providers', 'Cleaning for shared and self-contained accommodation.'),
    sectorLink('Local authorities', 'Accommodation cleaning with accountability and escalation controls.'),
    sectorLink('Housing teams', 'Turnaround and communal cleaning for managed residential stock.')
  ],
  relatedPolicies: [policyLinks.safeguarding, policyLinks.healthSafety, policyLinks.coshh, policyLinks.dataProtection],
  faqs: [
    {
      question: 'Does Shinezone provide support or care services?',
      answer:
        'No. Shinezone provides property-cleaning services only and does not provide regulated care, medication support or personal care.'
    },
    {
      question: 'Can cleaning take place while residents are present?',
      answer: 'Yes, where the scope, working hours, access and resident-disruption controls are agreed.'
    },
    {
      question: 'What personal information is needed?',
      answer:
        'Only property, access and risk information needed for cleaning should be shared. Resident diagnoses or medical histories are not required.'
    },
    {
      question: 'Can vacant rooms be prioritised?',
      answer:
        'Priority turnaround can be requested, but attendance depends on access, condition, location, staffing and equipment.'
    },
    {
      question: 'What happens if safeguarding concerns are observed?',
      answer: 'Staff report concerns through the agreed route and do not investigate or make care decisions.'
    }
  ],
  seo: {
    title: 'Temporary Accommodation Cleaning for Housing and Support Providers | Shinezone',
    description:
      'Temporary accommodation cleaning for hostels, shared accommodation, self-contained units and vacant-room turnaround with resident-sensitive controls.',
    keywords: [
      'temporary accommodation cleaning',
      'hostel cleaning',
      'supported accommodation cleaning',
      'vacant room cleaning'
    ]
  },
  schemaServiceType: 'Temporary accommodation cleaning'
}
