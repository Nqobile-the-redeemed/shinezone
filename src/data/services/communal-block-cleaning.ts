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

export const communalBlockCleaning: Service = {
  slug: 'communal-block-cleaning',
  title: 'Communal Block Cleaning',
  shortTitle: 'Communal Blocks',
  category: ['commercial-planned', 'sensitive-residential'],
  riskLevel: 'enhanced',
  serviceModes: ['occupied-property', 'recurring-service', 'specialist-risk-review'],
  schedulingModel: 'Recurring or planned attendance for occupied shared residential areas.',
  instructionType: 'Routine communal-area cleaning, block refresh, inspection response or resident-sensitive clean.',
  surveyRequirement:
    'A survey is recommended for multi-block estates, high-rise buildings, bin areas and water-supply limitations.',
  summary:
    'Cleaning plans for entrances, corridors, stairs, lifts and shared facilities in managed residential buildings.',
  introduction: [
    'Communal block cleaning is different from ordinary commercial cleaning because the work is carried out around residents, visitors, deliveries and housing-management activity. Entrances, porches, stairs, lifts, handrails and shared routes need cleaning without blocking escape routes or creating unnecessary disruption.',
    'Shinezone plans communal cleaning around frequency, access, resident notices, water supply, bin areas, internal glass, fire-route observations and the reporting of damage or antisocial-behaviour indicators. The service can support housing associations, block managers, landlords and temporary accommodation providers.',
    'Where sharps, bodily fluids, suspected substances, pests, heavy waste or aggressive behaviour are present, the instruction may need specialist triage rather than routine communal attendance.'
  ],
  valueProposition:
    'Resident-aware communal cleaning with clear schedules, safe access controls and practical reporting for managed residential buildings.',
  image: '/images/shinezone/new-images/pexels-tima-miroshnichenko-6195274.jpg',
  imageAlt: 'Cleaning team maintaining a shared residential interior',
  gallery: [
    {
      src: '/images/shinezone/toon-lambrechts-0FTI9ceTUOc-unsplash.jpg',
      alt: 'Cleaner mopping a shared corridor in a managed building',
      caption: 'Communal routes need sequencing so residents can continue to move safely.'
    },
    {
      src: '/images/shinezone/new-images/pexels-tima-miroshnichenko-6195129.jpg',
      alt: 'Cleaning team preparing equipment for a managed property clean',
      caption: 'Schedules, water supply and block access are checked before recurring work starts.'
    }
  ],
  suitableFor: [
    {
      title: 'Housing associations',
      description: 'For routine communal cleaning and reporting across occupied residential blocks.'
    },
    {
      title: 'Block managers',
      description: 'For managed entrances, corridors, stairs, lifts and shared facilities.'
    },
    {
      title: 'Local authorities',
      description: 'For communal and temporary accommodation sites requiring documented attendance and escalation.'
    },
    {
      title: 'Landlords and managing agents',
      description: 'For common-area presentation, resident communication and reactive issue reporting.'
    }
  ],
  propertyTypes: [
    {
      title: 'Low-rise and high-rise blocks',
      description: 'Communal entrances, lobbies, stairwells, lifts, landings and internal doors.'
    },
    {
      title: 'Shared accommodation',
      description: 'Common kitchens, bathrooms, circulation areas and resident-adjacent facilities.'
    },
    {
      title: 'Temporary accommodation',
      description: 'Shared areas where occupancy, privacy and tenancy-team liaison need careful planning.'
    },
    {
      title: 'External and bin-adjacent areas',
      description: 'Hoppers, bin stores or porches where included and safe to access.'
    }
  ],
  commonScenarios: [
    {
      title: 'Recurring block-cleaning schedule',
      description: 'A building needs predictable cleaning of entrances, stairs, lifts and shared touchpoints.',
      recommendedAction:
        'Provide block count, floors, lift details, water access, preferred frequency and reporting expectations.',
      urgency: 'planned'
    },
    {
      title: 'Resident complaint or inspection issue',
      description: 'A housing or block-management team needs a documented response to a common-area concern.',
      recommendedAction:
        'Share the complaint, affected areas, photographs and any resident communication requirements.',
      urgency: 'priority'
    },
    {
      title: 'Communal area with hazards',
      description:
        'Sharps, suspected substances, bodily fluids, broken glass or aggressive behaviour are reported in a shared route.',
      recommendedAction: 'Do not treat this as routine cleaning. Provide hazard details so the request can be triaged.',
      urgency: 'urgent'
    }
  ],
  outcomes: [
    {
      title: 'Cleaner shared routes',
      description: 'Entrances, stairs, lifts and corridors are maintained to an agreed communal standard.'
    },
    {
      title: 'Resident-sensitive delivery',
      description: 'Work is planned around occupancy, access, privacy and safe movement through the building.'
    },
    {
      title: 'Fire-route and defect reporting',
      description: 'Obstructions, damage and unusual conditions can be reported through agreed channels.'
    },
    {
      title: 'Visible service accountability',
      description: 'Schedules, attendance notes and inspection findings can support housing-management oversight.'
    }
  ],
  scopeGroups: [
    {
      title: 'Entrances, porches and lobbies',
      description: 'High-visibility areas that influence resident confidence and visitor presentation.',
      items: [
        'Entrance floors',
        'Door glass',
        'Frames and handles',
        'Porches',
        'Lobby surfaces',
        'Noticeboard areas where agreed'
      ]
    },
    {
      title: 'Corridors, stairs and handrails',
      description: 'Circulation routes cleaned with attention to slip control and safe resident movement.',
      items: ['Stair treads', 'Landings', 'Handrails', 'Skirting', 'Internal doors', 'Accessible ledges']
    },
    {
      title: 'Lifts and touchpoints',
      description: 'Shared touchpoints cleaned according to building use and schedule.',
      items: ['Lift floors', 'Lift doors', 'Control panels', 'Push plates', 'Door handles', 'Intercom surrounds']
    },
    {
      title: 'Shared facilities and reporting',
      description: 'Additional communal areas and observations included where agreed.',
      items: [
        'Shared kitchens',
        'Shared bathrooms',
        'Bin areas where instructed',
        'Hoppers',
        'Fire-route observations',
        'Damage or ASB reporting'
      ]
    }
  ],
  included: [
    {
      title: 'Communal cleaning schedule',
      description: 'A defined block, frequency and task plan for agreed shared areas.'
    },
    {
      title: 'Resident-aware conduct',
      description: 'Staff work respectfully around residents, visitors and tenancy teams.'
    },
    {
      title: 'Access and route control',
      description: 'Work is sequenced to avoid avoidable obstruction and maintain safe movement.'
    },
    {
      title: 'Issue reporting',
      description: 'Damage, obstructions, waste concerns or unusual conditions can be recorded.'
    }
  ],
  optionalExtras: [
    {
      title: 'Displayed cleaning schedules',
      description: 'Building-specific cleaning schedules or attendance records can be displayed where agreed.',
      pricedSeparately: true
    },
    {
      title: 'Bin-area cleaning',
      description: 'Bin stores, hoppers or external areas can be included subject to scope and waste controls.',
      pricedSeparately: true
    },
    {
      title: 'Internal glazing',
      description: 'Communal door glass, panels and internal windows can be scheduled.',
      pricedSeparately: true
    },
    {
      title: 'Reactive communal clean',
      description: 'Additional attendance after incidents, complaints or inspections subject to triage.',
      pricedSeparately: true
    }
  ],
  exclusions: [
    {
      title: 'Resident belongings',
      description: 'Personal items are not removed or disposed of without clear client authority.',
      escalation: 'The client must confirm ownership, authority and the required action.'
    },
    {
      title: 'Fire-safety enforcement',
      description: 'Shinezone can report obstructions but does not act as the fire-safety authority.',
      escalation: 'Fire-route concerns are escalated to the responsible client contact.'
    },
    {
      title: 'Specialist hazards',
      description:
        'Sharps, bodily fluids, suspected substances or uncontrolled behaviour are not routine communal cleaning.',
      escalation: 'The area may need isolation and specialist triage.'
    }
  ],
  process: commonProcess('Communal Block Cleaning'),
  clientInformationRequired: commonClientInformation,
  sitePreparation: commonSitePreparation,
  clientResponsibilities: commonClientResponsibilities,
  safetyControls: [
    ...commonSafetyControls,
    {
      title: 'Resident interaction boundaries',
      description: 'Staff avoid unnecessary discussion of residents and escalate concerns through the agreed contact.',
      relatedPolicySlug: 'safeguarding'
    },
    {
      title: 'Fire-route awareness',
      description: 'Obstructions or unsafe storage in shared escape routes are reported where observed.',
      relatedPolicySlug: 'health-and-safety'
    }
  ],
  specialistControls: [
    {
      title: 'Sharps escalation',
      description: 'Needles, blades or contaminated glass are isolated and escalated for appropriate controls.',
      relatedPolicySlug: 'sharps-and-contaminated-waste'
    },
    {
      title: 'Suspected substances',
      description: 'Unidentified powders, liquids or drug-related items are not handled through routine cleaning.'
    },
    {
      title: 'Occupied-building safeguarding',
      description:
        'Concerns about welfare, distress or immediate danger are reported through the agreed escalation route.',
      relatedPolicySlug: 'safeguarding'
    }
  ],
  staffCompetence: [
    ...commonStaffCompetence,
    {
      title: 'Resident-sensitive working',
      description: 'Staff understand privacy, professional boundaries and escalation in occupied residential buildings.'
    }
  ],
  equipment: [
    {
      title: 'Vacuum and floor tools',
      description: 'Selected for stairs, landings, entrance mats and shared flooring.'
    },
    {
      title: 'Colour-coded cleaning system',
      description: 'Used to separate task areas such as washrooms, kitchens and general surfaces.'
    },
    {
      title: 'Warning signage',
      description: 'Used where wet floors, equipment or temporary access restrictions may affect residents.'
    },
    {
      title: 'Waste sacks and litter tools',
      description: 'Used only for waste included in the agreed communal scope.'
    }
  ],
  ppe: commonPpe,
  qualityAssurance: [
    ...commonQualityAssurance,
    {
      title: 'Inspection rotation',
      description: 'Recurring blocks can be reviewed through planned inspection rotations and issue logs.'
    }
  ],
  deliverables: commonDeliverables,
  rectificationApproach: commonRectification,
  environmentalControls: commonEnvironmentalControls,
  wasteControls: [
    {
      title: 'Communal litter boundaries',
      description: 'Litter and bin-area waste are handled only where included in the agreed scope.'
    },
    {
      title: 'Resident belongings excluded',
      description: 'Items that may belong to residents are not removed without client authority.'
    },
    {
      title: 'Hazard segregation',
      description: 'Sharps, contaminated materials and suspected substances are separated from ordinary waste routes.'
    },
    {
      title: 'Waste observations',
      description: 'Overflowing bins, fly-tipping or obstructed stores can be reported to the client.'
    }
  ],
  serviceOptions: [
    {
      title: 'Recurring block schedule',
      description: 'Planned attendance for one or more blocks at agreed frequency.'
    },
    {
      title: 'Reactive communal attendance',
      description: 'A priority clean after a reported incident, subject to risk review.',
      pricedSeparately: true
    },
    {
      title: 'Inspection support',
      description: 'Additional reporting or photographic evidence for estate reviews.',
      pricedSeparately: true
    }
  ],
  schedulingNotes: [
    'Occupied communal work must consider resident movement and building access.',
    'Water supply, lift access and bin-area scope should be confirmed before quotation.',
    'Resident notices can be discussed where cleaning may affect shared routes.'
  ],
  pricingFactors: [
    {
      title: 'Number of blocks and floors',
      description: 'Buildings, entrances, stairwells, lifts and floor count affect attendance time.'
    },
    {
      title: 'Frequency',
      description: 'Weekly, fortnightly, daily or custom frequencies affect staffing and supervision.'
    },
    {
      title: 'Shared facilities',
      description: 'Kitchens, bathrooms, bin areas and internal glass add scope complexity.'
    },
    {
      title: 'Resident-sensitive requirements',
      description: 'Notices, access windows, safeguarding considerations or support-team liaison may affect planning.'
    },
    {
      title: 'Reactive hazards',
      description: 'Sharps, bodily fluids, fly-tipping or suspected substances change the service route.'
    }
  ],
  relatedServices: [
    serviceLink(
      'temporary-accommodation-cleaning',
      'Temporary Accommodation Cleaning',
      'Shared and occupied accommodation cleaning with privacy-aware planning.'
    ),
    serviceLink(
      'sharps-drug-paraphernalia-clearance',
      'Sharps Clearance',
      'Specialist triage where needles or drug paraphernalia are found.'
    ),
    serviceLink(
      'biohazard-bodily-fluid-cleaning',
      'Biohazard and Bodily-Fluid Cleaning',
      'Controlled cleaning where bodily fluids or contamination are present.'
    )
  ],
  relatedSectors: [
    sectorLink('Housing associations', 'Recurring communal cleaning and reporting for occupied blocks.'),
    sectorLink('Local authorities', 'Communal and temporary accommodation cleaning with escalation controls.'),
    sectorLink('Property managers', 'Planned common-area cleaning for managed residential buildings.')
  ],
  relatedPolicies: [policyLinks.healthSafety, policyLinks.safeguarding, policyLinks.sharps, policyLinks.complaints],
  faqs: [
    {
      question: 'Can cleaning schedules be displayed in blocks?',
      answer:
        'Yes. Displayed schedules or attendance notes can be included where the client approves the format and location.'
    },
    {
      question: 'Can bin areas be cleaned?',
      answer: 'Bin areas can be included where access, waste boundaries, water supply and safety controls are agreed.'
    },
    {
      question: 'What happens if residents leave items in corridors?',
      answer: 'Shinezone can report the issue but does not remove personal belongings without clear client authority.'
    },
    {
      question: 'Can Shinezone report damage or antisocial behaviour indicators?',
      answer: 'Observed damage, obstruction or unusual conditions can be reported through the agreed client route.'
    },
    {
      question: 'What if sharps are discovered?',
      answer: 'The affected area is paused or isolated where safe, then escalated for specialist sharps controls.'
    }
  ],
  seo: {
    title: 'Communal Block Cleaning for Managed Residential Buildings | Shinezone',
    description:
      'Communal block cleaning for entrances, corridors, stairs, lifts, shared facilities and occupied residential buildings with resident-aware controls.',
    keywords: [
      'communal block cleaning',
      'stairwell cleaning',
      'housing association cleaning',
      'block management cleaning'
    ]
  },
  schemaServiceType: 'Communal block cleaning'
}
