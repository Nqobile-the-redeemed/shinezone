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

export const carpetFloorCare: Service = {
  slug: 'carpet-floor-care',
  title: 'Carpet and Floor Care',
  shortTitle: 'Carpets & Floors',
  category: ['commercial-planned', 'property-turnaround'],
  riskLevel: 'enhanced',
  serviceModes: [
    'occupied-property',
    'vacant-property',
    'recurring-service',
    'one-off-service',
    'out-of-hours-request'
  ],
  schedulingModel:
    'Planned machine cleaning or floor treatment after surface suitability and drying conditions are reviewed.',
  instructionType:
    'Carpet extraction, spot cleaning, hard-floor scrubbing, buffing, spray cleaning or strip-and-reseal request.',
  surveyRequirement:
    'A survey or photographs are recommended for stain, surface, colour-fastness or floor-compatibility concerns.',
  summary:
    'Carpet extraction, floor scrubbing, buffing and periodic floor treatment for suitable commercial and residential-property surfaces.',
  introduction: [
    'Carpet and floor care improves presentation, hygiene and usability, but the correct method depends on surface type, condition, staining, colour-fastness, furniture, drying time, slip risk, ventilation and previous floor treatment.',
    'Shinezone reviews whether the request is routine vacuuming, spot cleaning, extraction, pre-treatment, scrubbing, buffing, spray cleaning, strip-and-reseal or periodic maintenance. The service is useful for offices, communal corridors, end-of-tenancy properties and managed accommodation.',
    'The service does not guarantee permanent stain removal or repair damaged flooring. Some stains, burns, wear, adhesive, delamination or surface damage may remain after cleaning and should be recorded as exclusions.'
  ],
  valueProposition:
    'Surface-aware carpet and floor care that separates cleaning potential from permanent damage and maintenance limitations.',
  image: '/images/shinezone/new-images/california-steam-dry-carpet-cleaning-Ddzir2TCR2g-unsplash (1).jpg',
  imageAlt: 'Operative using carpet-cleaning equipment in a residential property',
  gallery: [
    {
      src: '/images/shinezone/california-steam-dry-carpet-cleaning-Ddzir2TCR2g-unsplash.jpg',
      alt: 'Carpet extraction equipment being used on a carpeted floor',
      caption: 'Extraction is suitable for some carpets but depends on fibre, condition and drying arrangements.'
    },
    {
      src: '/images/shinezone/new-images/pexels-matilda-wormwood-4099087.jpg',
      alt: 'Floor cleaning equipment used for hard-floor maintenance',
      caption: 'Hard-floor methods are selected after surface compatibility review.'
    }
  ],
  suitableFor: [
    {
      title: 'Property managers',
      description: 'For planned floor maintenance across communal, commercial and residential properties.'
    },
    {
      title: 'Offices and workplaces',
      description: 'For carpet extraction, hard-floor cleaning and periodic presentation improvements.'
    },
    {
      title: 'Letting agents and landlords',
      description: 'For floor and carpet care during end-of-tenancy or pre-let preparation.'
    },
    {
      title: 'Housing providers',
      description: 'For communal corridors, vacant units and managed accommodation floor care.'
    }
  ],
  propertyTypes: [
    {
      title: 'Carpeted rooms',
      description: 'Offices, bedrooms, lounges and shared areas requiring extraction or spot review.'
    },
    {
      title: 'Communal corridors',
      description: 'High-traffic routes where cleaning, drying and resident access must be controlled.'
    },
    {
      title: 'Hard floors',
      description: 'Vinyl, tile or other hard surfaces requiring method and chemical compatibility review.'
    },
    {
      title: 'Commercial entrances',
      description: 'Matting and entrance floors affected by heavy footfall and weather.'
    }
  ],
  commonScenarios: [
    {
      title: 'End-of-tenancy carpet clean',
      description: 'A vacant property needs carpets cleaned before inspection or occupation.',
      recommendedAction: 'Provide room count, carpet condition, stain photos, utilities and drying deadline.',
      urgency: 'priority'
    },
    {
      title: 'Recurring commercial floor maintenance',
      description: 'A workplace or communal route needs scheduled cleaning to manage traffic and presentation.',
      recommendedAction: 'Confirm surface type, frequency, working hours, furniture and public-access controls.',
      urgency: 'planned'
    },
    {
      title: 'Staining or floor damage concern',
      description: 'A floor has staining, wear, chemical damage, adhesive residue or surface defects.',
      recommendedAction: 'Request a surface review before assuming cleaning can remove the issue.',
      urgency: 'planned'
    }
  ],
  outcomes: [
    {
      title: 'Improved surface appearance',
      description: 'Suitable carpets and floors are cleaned using the agreed method.'
    },
    {
      title: 'Stain and damage expectations set',
      description: 'Permanent damage and limitations are identified before or during work.'
    },
    {
      title: 'Managed drying and slip risk',
      description: 'Drying advice, wet-floor controls and access sequencing are considered.'
    },
    {
      title: 'Maintenance pathway',
      description: 'Recurring cleaning or periodic treatments can be planned for high-traffic areas.'
    }
  ],
  scopeGroups: [
    {
      title: 'Carpet assessment and cleaning',
      description: 'Carpet care matched to fibre, condition and stains.',
      items: ['Vacuuming', 'Spot assessment', 'Pre-treatment where suitable', 'Extraction', 'Edges', 'Drying advice']
    },
    {
      title: 'Hard-floor cleaning',
      description: 'Cleaning method selected according to material and finish.',
      items: ['Sweeping or vacuuming', 'Scrubbing', 'Mopping', 'Buffing', 'Spray cleaning', 'Surface inspection']
    },
    {
      title: 'Strip and reseal review',
      description: 'More intensive treatment considered only where floor type and condition are suitable.',
      items: [
        'Floor compatibility',
        'Existing finish review',
        'Chemical suitability',
        'Access control',
        'Drying or curing time'
      ]
    },
    {
      title: 'Furniture and access control',
      description: 'Furniture movement and room access are clarified before work starts.',
      items: [
        'Light furniture movement where agreed',
        'Restricted item notes',
        'Drying routes',
        'Warning signage',
        'Completion check'
      ]
    }
  ],
  included: [
    {
      title: 'Surface review',
      description: 'Surface type, condition and cleaning suitability are considered before method selection.'
    },
    {
      title: 'Machine or manual method',
      description: 'Equipment is selected according to the accepted surface and outcome.'
    },
    {
      title: 'Drying and slip controls',
      description: 'Access is controlled where wet surfaces or drying times affect use.'
    },
    {
      title: 'Limitations reporting',
      description: 'Permanent stains, wear or damage can be recorded.'
    }
  ],
  optionalExtras: [
    {
      title: 'Stain pre-treatment',
      description: 'Spot treatment where suitable and included in the quotation.',
      pricedSeparately: true
    },
    {
      title: 'Strip and reseal',
      description: 'Specialist hard-floor treatment where surface and access are suitable.',
      pricedSeparately: true
    },
    {
      title: 'Out-of-hours drying window',
      description: 'Scheduling to allow drying before business or resident use resumes.',
      pricedSeparately: true
    }
  ],
  exclusions: [
    {
      title: 'Permanent stain removal guarantee',
      description: 'Some stains, burns, wear, odours or chemical damage may be permanent.',
      escalation: 'Limitations are reported before or during the clean where identified.'
    },
    {
      title: 'Floor repair',
      description: 'Cleaning does not repair delamination, cracks, broken tiles, burns or structural floor defects.',
      escalation: 'Repairs should be referred to the responsible maintenance provider.'
    },
    {
      title: 'Unsuitable surfaces',
      description: 'Some flooring or carpets may not be suitable for the requested method.',
      escalation: 'A different cleaning method or exclusion may be recommended.'
    }
  ],
  process: commonProcess('Carpet and Floor Care'),
  clientInformationRequired: commonClientInformation,
  sitePreparation: [
    ...commonSitePreparation,
    {
      title: 'Identify furniture restrictions',
      description: 'Confirm what can be moved, what must stay in place and who is responsible for valuable items.',
      required: true
    }
  ],
  clientResponsibilities: [
    ...commonClientResponsibilities,
    {
      title: 'Allow drying time',
      description: 'The client must consider when rooms or routes can be safely reused.',
      required: true
    }
  ],
  safetyControls: [
    ...commonSafetyControls,
    {
      title: 'Slip and drying controls',
      description: 'Wet-floor signage, drying advice and route sequencing are used to reduce slip risk.'
    },
    {
      title: 'Equipment safety',
      description: 'Machine cables, water use and public routes are managed during operation.'
    }
  ],
  staffCompetence: [
    ...commonStaffCompetence,
    {
      title: 'Surface-method awareness',
      description: 'Staff must understand which methods are suitable for the agreed carpet or floor type.'
    }
  ],
  equipment: [
    {
      title: 'Carpet extraction machine',
      description: 'Used for suitable carpets where included in the quotation.'
    },
    {
      title: 'Rotary or scrubber equipment',
      description: 'Used for suitable hard floors according to method and surface.'
    },
    {
      title: 'Spot-treatment products',
      description: 'Used where compatible with the surface and COSHH controls.'
    },
    {
      title: 'Wet-floor signage and barriers',
      description: 'Used to manage access and drying risk.'
    }
  ],
  ppe: commonPpe,
  qualityAssurance: [
    ...commonQualityAssurance,
    {
      title: 'Surface finish inspection',
      description: 'The finish is reviewed and limitations are noted where visible.'
    }
  ],
  deliverables: commonDeliverables,
  rectificationApproach: commonRectification,
  environmentalControls: commonEnvironmentalControls,
  serviceOptions: [
    {
      title: 'Carpet extraction',
      description: 'Machine cleaning for suitable carpets.'
    },
    {
      title: 'Hard-floor scrub or buff',
      description: 'Method selected according to floor material and finish.',
      pricedSeparately: true
    },
    {
      title: 'Maintenance programme',
      description: 'Periodic cleaning for high-traffic commercial or communal floors.',
      pricedSeparately: true
    }
  ],
  schedulingNotes: [
    'Drying time should be planned before staff, residents or visitors reuse the area.',
    'Permanent stains or damage cannot always be removed by cleaning.',
    'Furniture movement and restricted items must be agreed before attendance.'
  ],
  pricingFactors: [
    {
      title: 'Surface type and area',
      description: 'Carpet, vinyl, tile, safety flooring and other surfaces need different methods.'
    },
    {
      title: 'Condition and staining',
      description: 'Soiling, stains, odour and permanent damage affect method and expectations.'
    },
    {
      title: 'Furniture',
      description: 'Furniture movement, access and protection affect time and risk.'
    },
    {
      title: 'Drying or curing time',
      description: 'Out-of-hours or restricted access may be required.'
    },
    {
      title: 'Frequency',
      description: 'One-off restoration differs from recurring maintenance.'
    }
  ],
  relatedServices: [
    serviceLink(
      'end-of-tenancy-cleaning',
      'End-of-Tenancy Cleaning',
      'Property turnaround where floor care may be an optional extra.'
    ),
    serviceLink(
      'commercial-cleaning',
      'Commercial Cleaning',
      'Routine workplace cleaning with periodic floor support.'
    ),
    serviceLink(
      'periodic-specialist-cleaning',
      'Periodic and Specialist Cleaning',
      'Additional deep-cleaning and surface-care tasks.'
    )
  ],
  relatedSectors: [
    sectorLink('Estate and letting agents', 'Carpet and floor care for pre-let and checkout standards.'),
    sectorLink('Commercial businesses', 'Workplace floor maintenance and presentation.'),
    sectorLink('Housing providers', 'Communal and vacant-property floor care.')
  ],
  relatedPolicies: [policyLinks.healthSafety, policyLinks.coshh, policyLinks.environmental, policyLinks.complaints],
  faqs: [
    {
      question: 'Can all carpet stains be removed?',
      answer: 'No. Some stains, burns, wear and chemical damage are permanent and may remain after cleaning.'
    },
    {
      question: 'How long will carpets take to dry?',
      answer:
        'Drying depends on carpet type, ventilation, temperature, soil level and extraction method. It is discussed before scheduling where critical.'
    },
    {
      question: 'Can furniture be moved?',
      answer:
        'Light furniture movement can be discussed, but valuable, fragile or heavy items require clear agreement and may be excluded.'
    },
    {
      question: 'Can hard floors be stripped and resealed?',
      answer:
        'This can be considered where the floor type, existing finish, access and drying or curing time are suitable.'
    },
    {
      question: 'Can floor care be done out of hours?',
      answer: 'Out-of-hours work can be requested where access, security, drying time and staffing are accepted.'
    }
  ],
  seo: {
    title: 'Carpet and Floor Care for Managed Properties | Shinezone',
    description:
      'Carpet extraction, spot cleaning, hard-floor scrubbing, buffing and floor maintenance for commercial, tenancy and managed-property settings.',
    keywords: ['carpet cleaning', 'floor care', 'commercial floor cleaning', 'end of tenancy carpet cleaning']
  },
  schemaServiceType: 'Carpet and floor care'
}
