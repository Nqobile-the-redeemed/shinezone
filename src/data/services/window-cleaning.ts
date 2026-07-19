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

export const windowCleaning: Service = {
  slug: 'window-cleaning',
  title: 'Window Cleaning',
  shortTitle: 'Windows',
  category: ['commercial-planned'],
  riskLevel: 'enhanced',
  serviceModes: [
    'occupied-property',
    'vacant-property',
    'recurring-service',
    'one-off-service',
    'specialist-risk-review'
  ],
  schedulingModel:
    'Planned internal or external window cleaning after access, height and ground conditions are reviewed.',
  instructionType:
    'Internal glazing, low-level external windows, reach-and-wash cleaning or planned glazing maintenance.',
  surveyRequirement:
    'A survey is recommended for work above two metres, public areas, fragile glazing or restricted access.',
  summary:
    'Internal and external window cleaning for managed properties, subject to access, height, weather and working-at-height controls.',
  introduction: [
    'Window cleaning requires more than counting panes. Shinezone reviews whether glazing is internal or external, the working height, ground conditions, overhead risks, public segregation, water access, weather, damaged glass, restrictors and the suitability of pole or reach-and-wash systems.',
    'The service can be planned for commercial premises, communal residential buildings, offices and managed properties. It may include frames, sills, doors, panels and internal glass where agreed.',
    'Shinezone does not imply abseiling or specialist high-access work unless separately arranged. If the access method is not suitable, the work is excluded or escalated before attendance is confirmed.'
  ],
  valueProposition:
    'Window cleaning scoped around access method, working height and public safety rather than a simple pane count.',
  image: '/images/shinezone/new-images/pexels-willianjusten-18733169.jpg',
  imageAlt: 'Professional cleaning work near bright building glazing',
  gallery: [
    {
      src: '/images/shinezone/new-images/pexels-willianjusten-18733169 (1).jpg',
      alt: 'Managed building exterior with glazing suitable for window-cleaning planning',
      caption: 'Access, ground condition and public segregation are reviewed before external work.'
    },
    {
      src: '/images/shinezone/the-graphic-space-X93z_JSoHo8-unsplash.jpg',
      alt: 'Exterior property cleaning near commercial glazing',
      caption: 'Some external cleaning may require separate periodic or pressure-cleaning assessment.'
    }
  ],
  suitableFor: [
    {
      title: 'Commercial premises',
      description: 'For internal and suitable external glazing at offices, shops and workplaces.'
    },
    {
      title: 'Block managers',
      description: 'For communal doors, panels, entrance glass and planned shared-area glazing.'
    },
    {
      title: 'Housing providers',
      description: 'For managed residential buildings where access and resident movement must be considered.'
    },
    {
      title: 'Property managers',
      description: 'For multi-site glazing schedules with reporting and defect observations.'
    }
  ],
  propertyTypes: [
    {
      title: 'Internal glazing',
      description: 'Doors, panels, partitions and internal windows within agreed reach.'
    },
    {
      title: 'Low-level external glazing',
      description: 'External windows and doors where ground conditions and access are suitable.'
    },
    {
      title: 'Above-two-metre windows',
      description: 'Windows requiring working-at-height review and suitable access method.'
    },
    {
      title: 'Communal entrances',
      description: 'Glazed entrances, door panels, frames and sills in shared buildings.'
    }
  ],
  commonScenarios: [
    {
      title: 'Recurring commercial glazing clean',
      description: 'A workplace or retail unit needs internal and external glazing cleaned on a planned schedule.',
      recommendedAction: 'Provide window count, access times, parking, water access and any public-area restrictions.',
      urgency: 'planned'
    },
    {
      title: 'Communal entrance refresh',
      description: 'A managed block needs entrance doors, panels and internal glass cleaned before inspection.',
      recommendedAction: 'Confirm resident access, door operation, water supply and preferred attendance window.',
      urgency: 'priority'
    },
    {
      title: 'Height or access uncertainty',
      description: 'Glazing may be above two metres, close to public routes or affected by poor ground conditions.',
      recommendedAction: 'Request a survey or photograph review before confirming the access method.',
      urgency: 'planned'
    }
  ],
  outcomes: [
    {
      title: 'Improved presentation',
      description: 'Agreed glazing, frames and sills are cleaned to improve property appearance.'
    },
    {
      title: 'Access method confirmed',
      description: 'Height, ground and weather conditions are reviewed before work proceeds.'
    },
    {
      title: 'Public routes protected',
      description: 'Segregation and sequencing reduce risk to residents, visitors and staff.'
    },
    {
      title: 'Defects reported',
      description: 'Damaged glazing, faulty restrictors or access issues can be reported.'
    }
  ],
  scopeGroups: [
    {
      title: 'Internal glass',
      description: 'Glazing inside the building where safe access is available.',
      items: ['Internal windows', 'Door glass', 'Vision panels', 'Partition glass', 'Frames', 'Sills']
    },
    {
      title: 'External low-level glass',
      description: 'External glazing cleaned where ground and access conditions are suitable.',
      items: ['Ground-floor windows', 'External doors', 'Shopfront glass where agreed', 'Frames', 'Sills', 'Spot marks']
    },
    {
      title: 'Reach-and-wash or pole work',
      description: 'Pole systems may be suitable depending on height, access and water arrangements.',
      items: ['Pole-system suitability', 'Water access', 'Overhead hazards', 'Ground condition', 'Public segregation']
    },
    {
      title: 'Inspection and defect notes',
      description: 'Window condition and access issues are reported where observed.',
      items: [
        'Damaged glazing',
        'Restrictor defects',
        'Loose frames',
        'Unsafe access',
        'Weather limitations',
        'Completion notes'
      ]
    }
  ],
  included: [
    {
      title: 'Access and height review',
      description: 'The suitable cleaning method is reviewed before the work is accepted.'
    },
    {
      title: 'Glazing, frames and sills',
      description: 'Included where specified in the quotation.'
    },
    {
      title: 'Public-area controls',
      description: 'Work is sequenced and segregated where residents, visitors or the public may pass.'
    },
    {
      title: 'Defect reporting',
      description: 'Damaged glass, restrictors or unsafe access concerns can be recorded.'
    }
  ],
  optionalExtras: [
    {
      title: 'Recurring glazing schedule',
      description: 'Planned internal and external cleaning at agreed frequency.',
      pricedSeparately: true
    },
    {
      title: 'Internal high-touch glass',
      description: 'Doors, panels and partitions can be added to routine commercial cleaning.',
      pricedSeparately: true
    },
    {
      title: 'External facade or pressure cleaning',
      description: 'External surfaces beyond glazing require separate surface and water-control assessment.',
      pricedSeparately: true
    }
  ],
  exclusions: [
    {
      title: 'Unsafe access',
      description: 'Windows are not cleaned where the access method is unsafe or unsuitable.',
      escalation: 'A different method, specialist provider or revised scope may be required.'
    },
    {
      title: 'Abseiling or rope access',
      description: 'Rope-access or abseiling work is not included unless separately arranged and verified.',
      escalation: 'Specialist access requirements must be discussed before quotation.'
    },
    {
      title: 'Damaged or unstable glazing',
      description: 'Cracked glass, defective restrictors or unstable frames may be excluded.',
      escalation: 'Defects are reported to the client for repair or further assessment.'
    }
  ],
  process: commonProcess('Window Cleaning'),
  clientInformationRequired: commonClientInformation,
  sitePreparation: commonSitePreparation,
  clientResponsibilities: commonClientResponsibilities,
  safetyControls: [
    ...commonSafetyControls,
    {
      title: 'Working-at-height review',
      description: 'Height, access equipment, ground conditions and task method are reviewed before work begins.',
      relatedPolicySlug: 'working-at-height-and-window-cleaning'
    },
    {
      title: 'Weather and public segregation',
      description: 'External work may be paused or rescheduled due to weather, public routes or unsafe conditions.'
    }
  ],
  staffCompetence: [
    ...commonStaffCompetence,
    {
      title: 'Access-method competence',
      description: 'Staff are matched to the agreed method, whether internal, low-level or pole-based.'
    }
  ],
  equipment: [
    {
      title: 'Squeegees and applicators',
      description: 'Used for internal and suitable low-level glazing.'
    },
    {
      title: 'Pole or reach systems',
      description: 'Used where the method is suitable for height, access and ground conditions.'
    },
    {
      title: 'Warning signage',
      description: 'Used to manage public or resident movement near the work area.'
    },
    {
      title: 'Water-fed equipment where suitable',
      description: 'Used only where water supply, access and surface conditions allow.'
    }
  ],
  ppe: commonPpe,
  qualityAssurance: [
    ...commonQualityAssurance,
    {
      title: 'Visual finish check',
      description: 'Completed glazing is reviewed from safe and accessible viewpoints.'
    }
  ],
  deliverables: commonDeliverables,
  rectificationApproach: commonRectification,
  environmentalControls: commonEnvironmentalControls,
  serviceOptions: [
    {
      title: 'Internal glazing clean',
      description: 'Internal windows, partitions, doors and panels where safely accessible.'
    },
    {
      title: 'External low-level clean',
      description: 'External glazing where ground and access conditions are suitable.',
      pricedSeparately: true
    },
    {
      title: 'Planned glazing schedule',
      description: 'Recurring cleaning for managed premises.',
      pricedSeparately: true
    }
  ],
  schedulingNotes: [
    'External work can be affected by weather, ground conditions and public access.',
    'Above-two-metre work must be assessed before the method is confirmed.',
    'Damaged glazing or restrictors should be disclosed before attendance.'
  ],
  pricingFactors: [
    {
      title: 'Window count and size',
      description: 'Number, size and layout of windows affect duration.'
    },
    {
      title: 'Internal or external access',
      description: 'Different methods and controls apply to internal and external glazing.'
    },
    {
      title: 'Working height',
      description: 'Height and method suitability affect risk review and equipment.'
    },
    {
      title: 'Ground and public conditions',
      description: 'Uneven ground, vehicle routes or public areas may affect scheduling.'
    },
    {
      title: 'Frequency',
      description: 'Recurring schedules differ from one-off cleans or inspection refreshes.'
    }
  ],
  relatedServices: [
    serviceLink(
      'commercial-cleaning',
      'Commercial Cleaning',
      'Routine cleaning that can include internal touchpoint glass.'
    ),
    serviceLink(
      'communal-block-cleaning',
      'Communal Block Cleaning',
      'Shared residential spaces where internal glass may be included.'
    ),
    serviceLink(
      'periodic-specialist-cleaning',
      'Periodic and Specialist Cleaning',
      'External or high-level cleaning requiring separate assessment.'
    )
  ],
  relatedSectors: [
    sectorLink('Commercial businesses', 'Glazing cleaning for workplaces and client-facing premises.'),
    sectorLink('Block managers', 'Internal glass and entrance cleaning for managed blocks.'),
    sectorLink('Property managers', 'Planned glazing schedules across managed sites.')
  ],
  relatedPolicies: [policyLinks.workingAtHeight, policyLinks.healthSafety, policyLinks.coshh, policyLinks.complaints],
  faqs: [
    {
      question: 'Can Shinezone clean windows above two metres?',
      answer:
        'Above-two-metre work is reviewed before acceptance. The method must be suitable for height, access and ground conditions.'
    },
    {
      question: 'Is abseiling included?',
      answer: 'No. Rope-access or abseiling work is not included unless separately arranged and verified.'
    },
    {
      question: 'Can external work be affected by weather?',
      answer: 'Yes. Weather, wind, ground conditions and public routes may require rescheduling or a revised method.'
    },
    {
      question: 'Can frames and sills be cleaned?',
      answer: 'Frames and sills can be included where specified and safely accessible.'
    },
    {
      question: 'What if glazing is damaged?',
      answer: 'Damaged or unstable glazing may be excluded and reported for repair or further assessment.'
    }
  ],
  seo: {
    title: 'Window Cleaning for Commercial and Managed Properties | Shinezone',
    description:
      'Internal and external window cleaning for commercial and managed properties, subject to height, access, weather and working-at-height controls.',
    keywords: [
      'window cleaning',
      'commercial window cleaning',
      'managed property window cleaning',
      'internal glass cleaning'
    ]
  },
  schemaServiceType: 'Window cleaning'
}
