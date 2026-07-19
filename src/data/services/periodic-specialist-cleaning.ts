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

export const periodicSpecialistCleaning: Service = {
  slug: 'periodic-specialist-cleaning',
  title: 'Periodic and Specialist Cleaning',
  shortTitle: 'Specialist',
  category: ['commercial-planned', 'specialist-reactive'],
  riskLevel: 'specialist',
  serviceModes: [
    'occupied-property',
    'vacant-property',
    'recurring-service',
    'one-off-service',
    'specialist-risk-review',
    'out-of-hours-request'
  ],
  schedulingModel:
    'Planned specialist attendance after surface, access, water, public-area and chemical compatibility review.',
  instructionType:
    'Wall washing, high-level dusting, graffiti removal, pressure cleaning, builders clean or initial clean.',
  surveyRequirement:
    'A survey is recommended for pressure cleaning, graffiti removal, high-level work and builders cleans.',
  summary:
    'Planned specialist and periodic cleaning for surfaces, high-use areas, builders cleans, graffiti, wall washing and pressure cleaning.',
  introduction: [
    'Periodic and specialist cleaning covers tasks that sit outside routine daily cleaning. These may include wall washing, high-level dusting, graffiti removal, pressure cleaning, builders cleans, initial cleans, blinds, matting, fixtures, soft furnishings and external surfaces.',
    'The correct method depends on surface compatibility, water containment, chemical suitability, access limitations, public-area segregation, defects, weather and the required finish. Shinezone reviews these factors before confirming a method.',
    'This service is suitable where a property needs a planned reset, post-works clean, seasonal maintenance or targeted treatment. It does not include surface repairs or unsupported claims about complete stain, graffiti or damage removal.'
  ],
  valueProposition:
    'A method-led specialist cleaning service for planned resets, builders cleans and surfaces that need more than routine attendance.',
  image: '/images/shinezone/the-graphic-space-X93z_JSoHo8-unsplash.jpg',
  imageAlt: 'Operative pressure cleaning outside a commercial property',
  gallery: [
    {
      src: '/images/shinezone/the-graphic-space-kLZs4yoR0uU-unsplash.jpg',
      alt: 'Pressure cleaning equipment used on an external property surface',
      caption: 'Water containment, surface type and public access are reviewed before pressure cleaning.'
    },
    {
      src: '/images/shinezone/new-images/pexels-matilda-wormwood-4099090.jpg',
      alt: 'Cleaning equipment prepared for periodic specialist cleaning',
      caption: 'Specialist cleaning tasks are scoped separately from routine schedules.'
    }
  ],
  suitableFor: [
    {
      title: 'Property developers',
      description: 'For builders cleans, initial cleans and handover-focused cleaning after works.'
    },
    {
      title: 'Commercial clients',
      description: 'For periodic deep cleaning, external presentation and targeted surface cleaning.'
    },
    {
      title: 'Housing providers',
      description: 'For communal resets, graffiti, wall washing and targeted estate cleaning.'
    },
    {
      title: 'Property managers',
      description: 'For scheduled specialist work across managed premises and shared areas.'
    }
  ],
  propertyTypes: [
    {
      title: 'External hard surfaces',
      description: 'Paths, entrances, forecourts and external areas requiring surface and drainage review.'
    },
    {
      title: 'Refurbished or newly built areas',
      description: 'Spaces affected by dust, residues, labels, fixtures and handover requirements.'
    },
    {
      title: 'High-use communal spaces',
      description: 'Walls, doors, skirting, matting and fixtures needing periodic reset.'
    },
    {
      title: 'Commercial interiors',
      description: 'Areas needing high-level dusting, blinds, soft furnishings or targeted deep cleaning.'
    }
  ],
  commonScenarios: [
    {
      title: 'Builders or initial clean',
      description: 'A property has dust, labels, residue or fixtures requiring cleaning before handover.',
      recommendedAction:
        'Provide programme stage, access, utilities, dust level, snagging restrictions and handover deadline.',
      urgency: 'priority'
    },
    {
      title: 'Pressure cleaning request',
      description: 'External hard surfaces need cleaning after staining, weathering or heavy traffic.',
      recommendedAction:
        'Provide photographs, surface type, drainage details, water access and public-area considerations.',
      urgency: 'planned'
    },
    {
      title: 'Graffiti or surface staining',
      description: 'A wall, door or external surface has graffiti or staining that may need chemical treatment.',
      recommendedAction: 'Request a surface compatibility review before assuming full removal is possible.',
      urgency: 'priority'
    }
  ],
  outcomes: [
    {
      title: 'Planned property reset',
      description: 'Targeted areas are cleaned beyond routine-service standards.'
    },
    {
      title: 'Handover support',
      description: 'Builders and initial cleans help prepare areas for client inspection or occupation.'
    },
    {
      title: 'Surface compatibility protected',
      description: 'Methods are reviewed to reduce the risk of damaging unsuitable surfaces.'
    },
    {
      title: 'Defects and limitations reported',
      description: 'Permanent staining, damage, poor access and exclusions are documented.'
    }
  ],
  scopeGroups: [
    {
      title: 'Interior periodic tasks',
      description: 'Rotational tasks that sit outside ordinary routine cleaning.',
      items: ['Wall washing', 'High-level dusting', 'Blinds', 'Fixtures', 'Matting', 'Soft furnishings where suitable']
    },
    {
      title: 'Builders and initial cleans',
      description: 'Handover-focused cleaning after works, subject to site condition.',
      items: [
        'Dust removal',
        'Label residue where suitable',
        'Fixtures',
        'Internal glazing where agreed',
        'Sanitary areas',
        'Floor preparation'
      ]
    },
    {
      title: 'External and pressure cleaning',
      description: 'External cleaning planned around surface, drainage and public access.',
      items: [
        'Pressure cleaning',
        'Entrance surfaces',
        'External hardstanding',
        'Water containment',
        'Overspray control',
        'Weather review'
      ]
    },
    {
      title: 'Surface and limitation reporting',
      description: 'Evidence that supports client decisions about repairs or further treatment.',
      items: [
        'Surface compatibility',
        'Permanent staining',
        'Damage notes',
        'Access limitations',
        'Chemical compatibility',
        'Completion photographs'
      ]
    }
  ],
  included: [
    {
      title: 'Method review',
      description: 'Surface, access, water, chemical and public-area factors are reviewed.'
    },
    {
      title: 'Targeted specialist cleaning',
      description: 'The agreed periodic or specialist tasks are completed according to scope.'
    },
    {
      title: 'Public-area controls',
      description: 'Segregation and sequencing are considered where work affects residents, staff or visitors.'
    },
    {
      title: 'Defect reporting',
      description: 'Damage, staining, access issues and limitations can be recorded.'
    }
  ],
  optionalExtras: [
    {
      title: 'Pressure cleaning',
      description: 'External surface cleaning where surface, water and public controls are suitable.',
      pricedSeparately: true
    },
    {
      title: 'Builders clean',
      description: 'Initial or handover clean after construction or refurbishment works.',
      pricedSeparately: true
    },
    {
      title: 'High-level dusting',
      description: 'Access-dependent dusting above ordinary reach.',
      pricedSeparately: true
    },
    {
      title: 'Graffiti treatment',
      description: 'Surface-specific treatment where compatibility and expectations are agreed.',
      pricedSeparately: true
    }
  ],
  exclusions: [
    {
      title: 'Surface repair',
      description: 'Cleaning does not repair damaged paint, render, stone, flooring, fixtures or building fabric.',
      escalation: 'Repairs should be referred to the responsible maintenance provider.'
    },
    {
      title: 'Guaranteed full removal',
      description: 'Graffiti, staining, residue or weathering may not fully remove without damaging the surface.',
      escalation: 'Limitations are reported before or during the work where identified.'
    },
    {
      title: 'Specialist access not agreed',
      description: 'High-level, roof, rope-access or plant-assisted work is excluded unless separately arranged.',
      escalation: 'Access requirements must be reviewed before quotation.'
    }
  ],
  process: commonProcess('Periodic and Specialist Cleaning'),
  clientInformationRequired: commonClientInformation,
  sitePreparation: [
    ...commonSitePreparation,
    {
      title: 'Confirm surface history',
      description: 'Advise known coatings, recent works, fragile surfaces, leaks or previous treatments.',
      required: true
    }
  ],
  clientResponsibilities: [
    ...commonClientResponsibilities,
    {
      title: 'Control public access',
      description: 'The client may need to support area segregation, notices or access restrictions.',
      required: true
    }
  ],
  safetyControls: [
    ...commonSafetyControls,
    {
      title: 'Surface compatibility review',
      description: 'Cleaning method and products are reviewed against the surface and likely damage risk.'
    },
    {
      title: 'Water and public-area controls',
      description: 'Overspray, run-off, drainage, cables and public access are considered before work proceeds.'
    }
  ],
  staffCompetence: [
    ...commonStaffCompetence,
    {
      title: 'Specialist method competence',
      description:
        'Staff are matched to pressure, builders, graffiti, high-level or periodic tasks they can perform safely.'
    }
  ],
  equipment: [
    {
      title: 'Pressure-cleaning equipment',
      description: 'Used where surface, water and public controls allow.'
    },
    {
      title: 'High-level cleaning tools',
      description: 'Used for suitable above-reach dusting or wall cleaning.'
    },
    {
      title: 'Specialist cleaning products',
      description: 'Selected after COSHH and surface compatibility review.'
    },
    {
      title: 'Segregation and warning equipment',
      description: 'Used to protect residents, visitors, staff and the public.'
    }
  ],
  ppe: commonPpe,
  qualityAssurance: [
    ...commonQualityAssurance,
    {
      title: 'Output inspection',
      description: 'The finished area is reviewed against the agreed specialist outcome and limitations.'
    }
  ],
  deliverables: commonDeliverables,
  rectificationApproach: commonRectification,
  environmentalControls: commonEnvironmentalControls,
  wasteControls: [
    {
      title: 'Run-off consideration',
      description: 'Water and residue from external cleaning are considered before work starts.'
    },
    {
      title: 'Builders-clean residues',
      description: 'Packaging, dust and residues are handled only where included in scope.'
    },
    {
      title: 'Chemical compatibility',
      description: 'Products are selected to reduce avoidable environmental and surface risk.'
    },
    {
      title: 'Waste route clarification',
      description: 'Any removed residue or waste is routed according to the agreed scope.'
    }
  ],
  serviceOptions: [
    {
      title: 'Periodic deep clean',
      description: 'Planned reset of targeted interiors, shared areas or fixtures.'
    },
    {
      title: 'Builders or initial clean',
      description: 'Handover-focused cleaning after works.',
      pricedSeparately: true
    },
    {
      title: 'External pressure clean',
      description: 'Surface-specific cleaning after access, water and public controls are reviewed.',
      pricedSeparately: true
    }
  ],
  schedulingNotes: [
    'Pressure cleaning depends on surface, weather, water supply, drainage and public access.',
    'Builders cleans require site readiness, utilities and handover expectations to be clear.',
    'Specialist access must be agreed before work is accepted.'
  ],
  pricingFactors: [
    {
      title: 'Surface and method',
      description: 'Wall washing, pressure cleaning, graffiti treatment and builders cleans need different methods.'
    },
    {
      title: 'Access and height',
      description: 'High-level or restricted areas require additional review.'
    },
    {
      title: 'Water and containment',
      description: 'Water supply, drainage and overspray controls can affect planning.'
    },
    {
      title: 'Condition and staining',
      description: 'Residue, graffiti, dust, staining or weathering affect expectations.'
    },
    {
      title: 'Handover deadline',
      description: 'Programme pressure, phased access and inspection deadlines affect mobilisation.'
    }
  ],
  relatedServices: [
    serviceLink('commercial-cleaning', 'Commercial Cleaning', 'Routine cleaning that periodic work can support.'),
    serviceLink('carpet-floor-care', 'Carpet and Floor Care', 'Surface and floor maintenance for managed premises.'),
    serviceLink('window-cleaning', 'Window Cleaning', 'Internal or external glazing where access is suitable.')
  ],
  relatedSectors: [
    sectorLink('Property developers', 'Builders and initial cleans before handover.'),
    sectorLink('Commercial businesses', 'Periodic resets and external presentation support.'),
    sectorLink('Housing providers', 'Communal and estate specialist cleaning.')
  ],
  relatedPolicies: [
    policyLinks.healthSafety,
    policyLinks.coshh,
    policyLinks.workingAtHeight,
    policyLinks.environmental
  ],
  faqs: [
    {
      question: 'Can Shinezone remove graffiti?',
      answer:
        'Graffiti treatment can be reviewed, but full removal depends on surface, paint type, age and damage risk.'
    },
    {
      question: 'Can pressure cleaning damage surfaces?',
      answer:
        'Yes, if the method is unsuitable. Surface compatibility is reviewed before pressure cleaning is accepted.'
    },
    {
      question: 'Can builders cleans be completed before all works finish?',
      answer:
        'The site should be ready enough for cleaning. Ongoing works, dust and defects may require phased or follow-up cleaning.'
    },
    {
      question: 'Can high-level cleaning be included?',
      answer: 'High-level work can be considered where access method, height and competence are suitable.'
    },
    {
      question: 'Will permanent staining be removed?',
      answer:
        'Not always. Permanent staining, weathering or surface damage may remain and will be reported where identified.'
    }
  ],
  seo: {
    title: 'Periodic and Specialist Cleaning for Managed Properties | Shinezone',
    description:
      'Periodic and specialist cleaning including wall washing, pressure cleaning, graffiti treatment, builders cleans and high-level cleaning.',
    keywords: ['periodic cleaning', 'specialist cleaning', 'builders clean', 'pressure cleaning', 'graffiti cleaning']
  },
  schemaServiceType: 'Periodic and specialist cleaning'
}
