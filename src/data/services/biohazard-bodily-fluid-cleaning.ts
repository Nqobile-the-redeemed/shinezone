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

export const biohazardBodilyFluidCleaning: Service = {
  slug: 'biohazard-bodily-fluid-cleaning',
  title: 'Biohazard and Bodily-Fluid Cleaning',
  shortTitle: 'Biohazard',
  category: ['specialist-reactive'],
  riskLevel: 'specialist',
  serviceModes: [
    'occupied-property',
    'vacant-property',
    'one-off-service',
    'specialist-risk-review',
    'out-of-hours-request'
  ],
  schedulingModel:
    'Specialist triage before attendance; acceptance depends on location, risk, competence and equipment.',
  instructionType: 'Localised blood, vomit, urine, faecal contamination, odour or contamination cleaning request.',
  surveyRequirement:
    'Photographs and incident details are usually required; some sites may need a survey or staged approach.',
  summary:
    'Controlled cleaning for localised bodily fluids and contamination where ordinary cleaning methods are not suitable.',
  introduction: [
    'Biohazard and bodily-fluid cleaning requires careful triage because the correct approach depends on the substance, affected surface, size of area, occupancy, time since discovery, ventilation, waste route and whether sharps or suspected substances are also present.',
    'Shinezone separates cleaning, disinfection, waste containment, PPE, exposure response and completion evidence. The service focuses on localised contamination in property environments and avoids unsupported forensic, clinical or certification claims.',
    'Attendance is not automatically confirmed. Shinezone first reviews whether the work can be controlled safely with available staff, equipment, products and disposal arrangements. Immediate danger, medical emergencies or criminal incidents should be directed to the appropriate emergency service.'
  ],
  valueProposition:
    'A controlled route for localised contamination cleaning, with triage before attendance and clear boundaries for specialist escalation.',
  image: '/images/shinezone/new-images/pexels-michelangelo-buonarroti-4176006.jpg',
  imageAlt: 'Cleaner wearing protective gloves preparing specialist cleaning products',
  gallery: [
    {
      src: '/images/shinezone/new-images/pexels-michelangelo-buonarroti-4176042.jpg',
      alt: 'Protective glove preparation for specialist cleaning',
      caption: 'PPE, products and contact time are selected after risk review.'
    },
    {
      src: '/images/shinezone/puroclean-of-fort-worth--dc38HdQR1M-unsplash.jpg',
      alt: 'Gloved hand cleaning a wet surface with controlled cleaning method',
      caption: 'Cleaning before disinfection is part of the control sequence.'
    }
  ],
  suitableFor: [
    {
      title: 'Housing providers',
      description: 'For localised contamination in communal, temporary or vacant residential properties.'
    },
    {
      title: 'Property managers',
      description: 'For incident response in managed buildings, commercial units or shared spaces.'
    },
    {
      title: 'Commercial clients',
      description: 'For workplace incidents affecting washrooms, floors, entrances or staff areas.'
    },
    {
      title: 'Accommodation providers',
      description: 'For contamination affecting rooms, shared bathrooms or resident-adjacent areas.'
    }
  ],
  propertyTypes: [
    {
      title: 'Bathrooms and sanitary areas',
      description: 'Spaces where bodily fluids, odour and hygiene concerns may be concentrated.'
    },
    {
      title: 'Communal spaces',
      description: 'Shared corridors, lifts, entrances or lounges where public segregation may be needed.'
    },
    {
      title: 'Vacant units',
      description: 'Rooms or properties requiring contamination review before ordinary turnaround cleaning.'
    },
    {
      title: 'Commercial areas',
      description: 'Workplace or customer-facing areas requiring safe cleaning and completion reporting.'
    }
  ],
  commonScenarios: [
    {
      title: 'Localised bodily-fluid incident',
      description: 'Blood, vomit, urine or faecal contamination has affected a defined area.',
      recommendedAction:
        'Provide location, photographs if safe, affected surface, occupancy and when the issue was identified.',
      urgency: 'urgent'
    },
    {
      title: 'Contamination discovered during a standard clean',
      description:
        'A routine or turnaround team identifies fluids or biological contamination not declared in the original scope.',
      recommendedAction: 'Pause work in the affected area and triage the contamination before continuing.',
      urgency: 'priority'
    },
    {
      title: 'Contamination plus sharps or suspected substances',
      description: 'Bodily fluids are present alongside needles, paraphernalia or unidentified substances.',
      recommendedAction:
        'Do not disturb the area. The request needs specialist triage and may require client or authority escalation.',
      urgency: 'urgent'
    }
  ],
  outcomes: [
    {
      title: 'Affected area controlled',
      description: 'The contamination area is reviewed, cleaned and disinfected according to the accepted scope.'
    },
    {
      title: 'Reduced exposure risk',
      description:
        'PPE, isolation, waste handling and product controls are selected to reduce operative and site-user risk.'
    },
    {
      title: 'Clear completion evidence',
      description: 'Completion notes, photographs and exclusions can be supplied where authorised.'
    },
    {
      title: 'Escalation boundaries documented',
      description: 'Unknown substances, extensive contamination or unsafe conditions are recorded and escalated.'
    }
  ],
  scopeGroups: [
    {
      title: 'Triage and area control',
      description: 'Before cleaning starts, the affected area and immediate risks are reviewed.',
      items: [
        'Incident details',
        'Occupancy status',
        'Affected surface',
        'Approximate area',
        'Access control',
        'Immediate-danger screening'
      ]
    },
    {
      title: 'Cleaning before disinfection',
      description: 'Visible soiling is addressed before disinfectant use where safe and suitable.',
      items: [
        'Removal of visible contamination',
        'Surface cleaning',
        'Product selection',
        'Contact-time control',
        'Rinse or finishing where required'
      ]
    },
    {
      title: 'Waste and equipment control',
      description: 'Contaminated materials and reusable equipment require clear handling boundaries.',
      items: [
        'PPE removal sequence',
        'Waste segregation',
        'Disposable material containment',
        'Reusable equipment decontamination',
        'Waste notes where required'
      ]
    },
    {
      title: 'Completion and escalation',
      description: 'The client receives appropriate completion notes and any unresolved concerns.',
      items: [
        'Completion checklist',
        'Authorised photographs',
        'Odour limitations',
        'Surface damage notes',
        'Escalation of unknown substances'
      ]
    }
  ],
  included: [
    {
      title: 'Specialist triage',
      description: 'The incident is reviewed before attendance is accepted.'
    },
    {
      title: 'Controlled cleaning and disinfection',
      description: 'Cleaning and product controls are selected for the affected surface and contamination type.'
    },
    {
      title: 'PPE and exposure controls',
      description: 'PPE is selected according to the task and contamination risk.'
    },
    {
      title: 'Completion evidence',
      description: 'Evidence can be provided where lawful, proportionate and agreed.'
    }
  ],
  optionalExtras: [
    {
      title: 'Out-of-hours triage',
      description: 'Urgent requests can be reviewed outside normal hours subject to operational capacity.',
      pricedSeparately: true
    },
    {
      title: 'Odour follow-up',
      description: 'Odour reduction can be discussed, but permanent odour removal cannot be guaranteed.',
      pricedSeparately: true
    },
    {
      title: 'Sharps clearance',
      description: 'Needles, blades or contaminated glass require a separate sharps process.',
      pricedSeparately: true
    },
    {
      title: 'Property turnaround after contamination',
      description: 'Ordinary cleaning can follow once specialist contamination controls are complete.',
      pricedSeparately: true
    }
  ],
  exclusions: [
    {
      title: 'Forensic or clinical certification claims',
      description:
        'Shinezone does not publish unsupported forensic, clinical or certification claims for this service.',
      escalation: 'Any formal certificate requirement must be discussed before acceptance.'
    },
    {
      title: 'Unidentified substances',
      description: 'Unknown powders, liquids or suspected drugs are not handled as bodily-fluid cleaning.',
      escalation: 'The issue is isolated where safe and escalated to the client or appropriate authority.'
    },
    {
      title: 'Immediate danger or medical emergency',
      description:
        'The service is not a substitute for emergency services, medical response or criminal-scene control.',
      escalation: 'Contact the appropriate emergency service where immediate danger exists.'
    }
  ],
  process: commonProcess('Biohazard and Bodily-Fluid Cleaning'),
  clientInformationRequired: commonClientInformation,
  sitePreparation: [
    ...commonSitePreparation,
    {
      title: 'Do not disturb the affected area',
      description: 'Avoid spreading contamination or moving items before Shinezone has reviewed the risk.',
      required: true
    }
  ],
  clientResponsibilities: [
    ...commonClientResponsibilities,
    {
      title: 'Screen immediate danger',
      description:
        'Medical, criminal or immediate-danger situations must be directed to the relevant emergency service.',
      required: true
    }
  ],
  safetyControls: [
    ...commonSafetyControls,
    {
      title: 'Area isolation',
      description: 'Access to the affected area is controlled where practical until cleaning is complete.'
    },
    {
      title: 'Disinfectant contact time',
      description: 'Products must be used with the required contact time for the task and surface.',
      relatedPolicySlug: 'coshh'
    }
  ],
  specialistControls: [
    {
      title: 'Exposure response',
      description: 'Operatives follow reporting and escalation if exposure, splash or injury occurs.',
      relatedPolicySlug: 'health-and-safety'
    },
    {
      title: 'Sharps interface',
      description: 'Needles, blades or contaminated glass are escalated to the sharps process.',
      relatedPolicySlug: 'sharps-and-contaminated-waste'
    },
    {
      title: 'Waste segregation',
      description: 'Contaminated materials are segregated from ordinary waste where required.',
      relatedPolicySlug: 'waste-duty-of-care'
    }
  ],
  staffCompetence: [
    ...commonStaffCompetence,
    {
      title: 'Contamination-control briefing',
      description: 'Staff must understand cleaning sequence, PPE, waste containment and escalation boundaries.'
    }
  ],
  equipment: [
    {
      title: 'Disposable cleaning materials',
      description: 'Used where contamination risk makes reuse unsuitable.'
    },
    {
      title: 'Disinfectant products',
      description: 'Selected according to surface, contamination type and COSHH controls.'
    },
    {
      title: 'Waste containment materials',
      description: 'Used for disposable PPE and contaminated cleaning materials where required.'
    },
    {
      title: 'Warning and segregation items',
      description: 'Used to reduce access to affected areas during work.'
    }
  ],
  ppe: commonPpe,
  qualityAssurance: [
    ...commonQualityAssurance,
    {
      title: 'Incident-specific completion record',
      description: 'The completed scope, exclusions and escalation notes can be recorded.'
    }
  ],
  deliverables: commonDeliverables,
  rectificationApproach: commonRectification,
  environmentalControls: commonEnvironmentalControls,
  wasteControls: [
    {
      title: 'Contaminated-material segregation',
      description: 'Contaminated disposables are separated from ordinary cleaning waste where required.'
    },
    {
      title: 'Waste route review',
      description: 'The disposal route depends on contamination type and client requirements.'
    },
    {
      title: 'Sharps excluded from fluid waste',
      description: 'Needles and blades are handled through the sharps process.'
    },
    {
      title: 'Documentation where required',
      description: 'Waste notes are provided where the accepted route requires them.'
    }
  ],
  serviceOptions: [
    {
      title: 'Localised incident clean',
      description: 'Cleaning and disinfection of a defined affected area after triage.'
    },
    {
      title: 'Out-of-hours review',
      description: 'Urgent triage subject to operational capacity.',
      pricedSeparately: true
    },
    {
      title: 'Follow-on deep clean',
      description: 'Ordinary cleaning of the wider area after specialist contamination work.',
      pricedSeparately: true
    }
  ],
  schedulingNotes: [
    'Attendance is confirmed only after the contamination type, location and access are reviewed.',
    'Do not disturb affected materials before triage where avoidable.',
    'Immediate danger, criminal activity or medical emergencies should be directed to emergency services.'
  ],
  pricingFactors: [
    {
      title: 'Contamination type',
      description: 'Blood, vomit, urine, faeces and mixed contamination require different controls.'
    },
    {
      title: 'Affected area',
      description: 'Approximate size, surface type and spread affect equipment and duration.'
    },
    {
      title: 'Occupancy and access',
      description: 'Occupied or public areas require access control and disruption planning.'
    },
    {
      title: 'Waste route',
      description: 'Contaminated materials may require separate handling and documentation.'
    },
    {
      title: 'Sharps or suspected substances',
      description: 'Additional hazards can change the service route.'
    }
  ],
  relatedServices: [
    serviceLink(
      'sharps-drug-paraphernalia-clearance',
      'Sharps Clearance',
      'Specialist process for needles, blades and contaminated glass.'
    ),
    serviceLink(
      'emergency-specialist-cleaning',
      'Emergency Specialist Cleaning',
      'Urgent triage for accepted specialist cleaning requests.'
    ),
    serviceLink(
      'post-eviction-cleaning',
      'Post-Eviction Cleaning',
      'Property turnaround where contamination is part of a wider void condition.'
    )
  ],
  relatedSectors: [
    sectorLink('Housing providers', 'Contamination response for communal and vacant properties.'),
    sectorLink('Temporary accommodation providers', 'Incident cleaning for shared and resident-adjacent areas.'),
    sectorLink('Commercial businesses', 'Workplace incident cleaning with access controls.')
  ],
  relatedPolicies: [policyLinks.healthSafety, policyLinks.coshh, policyLinks.waste, policyLinks.sharps],
  faqs: [
    {
      question: 'Is attendance automatically confirmed?',
      answer: 'No. Specialist attendance is confirmed only after triage, risk review and operational acceptance.'
    },
    {
      question: 'Can Shinezone clean blood or bodily fluids?',
      answer:
        'Localised bodily-fluid cleaning can be reviewed, but the method depends on surface, area, occupancy, waste and risk controls.'
    },
    {
      question: 'Can odour removal be guaranteed?',
      answer:
        'No. Odour may be reduced, but permanent odour removal depends on source, surface, ventilation and building condition.'
    },
    {
      question: 'What if needles are present?',
      answer:
        'Needles or contaminated sharp items are handled through the sharps process, not ordinary bodily-fluid cleaning.'
    },
    {
      question: 'Should I use this service for immediate danger?',
      answer:
        'No. Contact the appropriate emergency service where there is immediate danger, criminal activity or a medical emergency.'
    }
  ],
  seo: {
    title: 'Biohazard and Bodily-Fluid Cleaning Triage | Shinezone',
    description:
      'Controlled cleaning for localised blood, vomit, urine, faecal contamination and bodily-fluid incidents, with specialist triage and clear exclusions.',
    keywords: ['biohazard cleaning', 'bodily fluid cleaning', 'contamination cleaning', 'specialist cleaning triage']
  },
  schemaServiceType: 'Biohazard and bodily-fluid cleaning'
}
