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

export const sharpsDrugParaphernaliaClearance: Service = {
  slug: 'sharps-drug-paraphernalia-clearance',
  title: 'Sharps and Drug-Paraphernalia Clearance',
  shortTitle: 'Sharps Clearance',
  category: ['specialist-reactive'],
  riskLevel: 'high-risk-review-required',
  serviceModes: [
    'occupied-property',
    'vacant-property',
    'one-off-service',
    'specialist-risk-review',
    'out-of-hours-request'
  ],
  schedulingModel:
    'Specialist review before attendance; public access and suspected substances may require escalation.',
  instructionType: 'Visible sharps, needles, blades, contaminated glass or drug-paraphernalia clearance request.',
  surveyRequirement:
    'Photographs and location details are normally requested; concealed-area risks may require further review.',
  summary: 'Controlled assessment and clearance workflow for visible sharps, needles, blades and drug paraphernalia.',
  introduction: [
    'Sharps and drug-paraphernalia clearance is high-risk because needles, blades and contaminated glass can cause injury and exposure. Items may be visible, concealed in waste, hidden in furniture, left in public areas or found during another cleaning task.',
    'Shinezone does not treat sharps as ordinary litter. The request is reviewed for quantity, location, public access, suspected substances, contamination, concealed-area risk, police or client involvement and the waste route required.',
    'The service uses a controlled process: do not collect by hand, do not push down containers, do not handle suspected substances and do not disturb public areas without appropriate controls. Where the situation exceeds the accepted scope, work is paused and escalated.'
  ],
  valueProposition:
    'A careful sharps-clearance route that prioritises isolation, safe tools, rigid containers, waste records and escalation boundaries.',
  image: '/images/shinezone/new-images/pexels-michelangelo-buonarroti-4176068.jpg',
  imageAlt: 'Protective gloves and specialist cleaning preparation for sharps risk assessment',
  gallery: [
    {
      src: '/images/shinezone/new-images/pexels-michelangelo-buonarroti-4175978.jpg',
      alt: 'Operative preparing protective equipment for specialist cleaning',
      caption: 'Sharps work requires task-specific PPE and collection tools.'
    },
    {
      src: '/images/shinezone/new-images/pexels-michelangelo-buonarroti-4176227.jpg',
      alt: 'Specialist cleaning preparation with protective equipment',
      caption: 'The service avoids graphic imagery and focuses on safe process.'
    }
  ],
  suitableFor: [
    {
      title: 'Housing providers',
      description: 'For sharps found in communal blocks, void properties, bin areas or external routes.'
    },
    {
      title: 'Local authorities',
      description: 'For managed property environments requiring controlled hazard response.'
    },
    {
      title: 'Property managers',
      description: 'For sharps and paraphernalia reported in managed residential or commercial premises.'
    },
    {
      title: 'Commercial premises',
      description: 'For visible sharps or paraphernalia affecting staff, customer or public areas.'
    }
  ],
  propertyTypes: [
    {
      title: 'Communal blocks',
      description: 'Entrances, stairwells, lifts, bin stores and shared routes where public access may be present.'
    },
    {
      title: 'Vacant properties',
      description: 'Void or post-eviction properties where sharps may be concealed in waste or fixtures.'
    },
    {
      title: 'External areas',
      description: 'Porches, bin areas, alleyways or property boundaries where isolation may be needed.'
    },
    {
      title: 'Bathrooms and hidden spaces',
      description: 'Rooms, cupboards and furniture where concealed sharps risk must be considered.'
    }
  ],
  commonScenarios: [
    {
      title: 'Visible needle or syringe in a communal area',
      description: 'A sharp is visible in a shared route, stairwell, lift or bin area.',
      recommendedAction:
        'Keep people away from the item where safe and provide location, photographs and public-access details.',
      urgency: 'urgent'
    },
    {
      title: 'Sharps discovered during a property clean',
      description: 'A cleaning team finds needles, blades or contaminated glass during a standard service.',
      recommendedAction: 'Pause work in the affected area and escalate for sharps controls before continuing.',
      urgency: 'priority'
    },
    {
      title: 'Drug paraphernalia with suspected substances',
      description: 'Drug-related items or unidentified powders are present.',
      recommendedAction:
        'Do not handle suspected substances. The client or appropriate authority may need to be involved.',
      urgency: 'urgent'
    }
  ],
  outcomes: [
    {
      title: 'Public access controlled',
      description: 'The affected area is isolated or managed where practical while the hazard is reviewed.'
    },
    {
      title: 'Sharps handled through a controlled route',
      description: 'Collection tools and rigid containers are used rather than ordinary hand collection.'
    },
    {
      title: 'Waste route documented where required',
      description: 'Waste records or transfer notes can be provided where the accepted route requires them.'
    },
    {
      title: 'Escalation for suspected substances',
      description: 'Unknown powders, liquids or illegal-substance concerns are not handled as cleaning waste.'
    }
  ],
  scopeGroups: [
    {
      title: 'Hazard intake and location check',
      description: 'The request is reviewed before attendance is accepted.',
      items: [
        'Location',
        'Quantity estimate',
        'Visible or concealed status',
        'Public access',
        'Photographs where safe',
        'Suspected substances'
      ]
    },
    {
      title: 'Area isolation',
      description: 'Access to the affected area is managed where practical.',
      items: [
        'Warning to site contact',
        'Public-route review',
        'Resident or staff movement',
        'Immediate-danger escalation',
        'Access boundaries'
      ]
    },
    {
      title: 'Controlled collection',
      description: 'Sharps are collected using suitable tools and containers.',
      items: [
        'No hand collection',
        'No pushing down containers',
        'Collection tools',
        'Rigid sharps containers',
        'Anti-needle glove review',
        'Final visual check'
      ]
    },
    {
      title: 'Waste and completion record',
      description: 'Completion notes support client reporting and future risk management.',
      items: [
        'Waste route notes',
        'Hazard record',
        'Photographs where agreed',
        'Exposure or injury escalation',
        'Follow-on cleaning recommendation'
      ]
    }
  ],
  included: [
    {
      title: 'Sharps triage',
      description: 'Location, quantity, visibility and public-access risk are reviewed.'
    },
    {
      title: 'Safe collection method',
      description: 'Tools and rigid containers are used instead of ordinary hand collection.'
    },
    {
      title: 'Suspected-substance boundary',
      description: 'Unknown substances are escalated rather than handled as cleaning waste.'
    },
    {
      title: 'Completion check',
      description: 'The immediate affected area is visually checked after clearance.'
    }
  ],
  optionalExtras: [
    {
      title: 'Follow-on biohazard cleaning',
      description: 'Where fluids or contamination are present after sharps clearance.',
      pricedSeparately: true
    },
    {
      title: 'Property deep clean',
      description: 'Ordinary cleaning can follow once the sharps risk is controlled.',
      pricedSeparately: true
    },
    {
      title: 'Out-of-hours review',
      description: 'Urgent requests are reviewed subject to operational capacity.',
      pricedSeparately: true
    },
    {
      title: 'Waste documentation',
      description: 'Additional documentation may be available where the route requires it.',
      pricedSeparately: true
    }
  ],
  exclusions: [
    {
      title: 'Suspected drugs or unknown substances',
      description: 'Shinezone does not handle suspected substances as ordinary cleaning waste.',
      escalation: 'The client or appropriate authority may need to advise before work continues.'
    },
    {
      title: 'Concealed area guarantee',
      description:
        'A visual clearance cannot guarantee that no hidden sharps remain inside inaccessible voids or belongings.',
      escalation: 'Concealed-area risks should be disclosed and may need a wider controlled search scope.'
    },
    {
      title: 'Immediate public danger',
      description:
        'Where there is immediate danger, violence or criminal activity, the appropriate emergency service should be contacted.',
      escalation: 'Cleaning attendance is not a substitute for emergency response.'
    }
  ],
  process: commonProcess('Sharps and Drug-Paraphernalia Clearance'),
  clientInformationRequired: commonClientInformation,
  sitePreparation: [
    ...commonSitePreparation,
    {
      title: 'Do not touch or move sharps',
      description: 'Keep people away from the item where safe and avoid disturbing the area.',
      required: true
    }
  ],
  clientResponsibilities: [
    ...commonClientResponsibilities,
    {
      title: 'Declare suspected substances',
      description:
        'Drug-related items, powders or liquids must be disclosed so the correct escalation route can be considered.',
      required: true
    }
  ],
  safetyControls: [
    ...commonSafetyControls,
    {
      title: 'No hand collection',
      description: 'Sharps are not picked up by hand or pushed down into containers.',
      relatedPolicySlug: 'sharps-and-contaminated-waste'
    },
    {
      title: 'Sharps-injury response',
      description: 'Any injury or exposure is escalated and recorded according to the safety process.',
      relatedPolicySlug: 'health-and-safety'
    }
  ],
  specialistControls: [
    {
      title: 'Rigid sharps containers',
      description: 'Suitable rigid containers are used for accepted sharps collection.',
      relatedPolicySlug: 'sharps-and-contaminated-waste'
    },
    {
      title: 'Collection tools',
      description: 'Tools are used to avoid hand contact with needles, blades or contaminated glass.'
    },
    {
      title: 'Suspected-substance escalation',
      description: 'Unidentified substances are not handled and may require client or authority instruction.'
    }
  ],
  staffCompetence: [
    ...commonStaffCompetence,
    {
      title: 'Sharps process briefing',
      description: 'Staff must understand no-touch principles, container use, injury response and stop-work triggers.'
    }
  ],
  equipment: [
    {
      title: 'Rigid sharps containers',
      description: 'Used for needles, syringes, blades and contaminated glass where accepted.'
    },
    {
      title: 'Collection tools',
      description: 'Used to avoid direct hand contact with sharps.'
    },
    {
      title: 'Anti-needle glove review',
      description: 'Task-specific gloves are considered according to risk and availability.'
    },
    {
      title: 'Warning or segregation items',
      description: 'Used to reduce public access during clearance where practical.'
    }
  ],
  ppe: commonPpe,
  qualityAssurance: [
    ...commonQualityAssurance,
    {
      title: 'Final visual check',
      description: 'The affected area is visually checked after collection, subject to access and visibility limits.'
    }
  ],
  deliverables: commonDeliverables,
  rectificationApproach: commonRectification,
  environmentalControls: commonEnvironmentalControls,
  wasteControls: [
    {
      title: 'Sharps segregation',
      description: 'Sharps are segregated from ordinary waste using suitable containers.'
    },
    {
      title: 'Suspected substances excluded',
      description: 'Unknown substances are not mixed with cleaning waste.'
    },
    {
      title: 'Waste records where required',
      description: 'Records are supplied where the accepted disposal route requires them.'
    },
    {
      title: 'Container integrity',
      description: 'Containers are not overfilled or compressed.'
    }
  ],
  serviceOptions: [
    {
      title: 'Visible sharps clearance',
      description: 'Controlled collection of visible sharps after triage.'
    },
    {
      title: 'Clearance with follow-on clean',
      description: 'Ordinary or specialist cleaning after sharps risk is controlled.',
      pricedSeparately: true
    },
    {
      title: 'Public-area urgent review',
      description: 'Urgent triage for shared or public-access areas.',
      pricedSeparately: true
    }
  ],
  schedulingNotes: [
    'Do not touch visible sharps before triage.',
    'Public-access areas may need immediate client controls before Shinezone arrives.',
    'Suspected substances can prevent attendance until the correct authority or client instruction is confirmed.'
  ],
  pricingFactors: [
    {
      title: 'Quantity and spread',
      description: 'The number of items and affected areas affect duration and containers.'
    },
    {
      title: 'Visibility',
      description: 'Visible items differ from concealed-area risk or waste-heavy locations.'
    },
    {
      title: 'Public access',
      description: 'Communal, public or resident-access areas require isolation controls.'
    },
    {
      title: 'Follow-on cleaning',
      description: 'Bodily fluids, waste or property cleaning may be priced separately.'
    },
    {
      title: 'Waste route',
      description: 'Waste handling and documentation requirements affect cost.'
    }
  ],
  relatedServices: [
    serviceLink(
      'biohazard-bodily-fluid-cleaning',
      'Biohazard and Bodily-Fluid Cleaning',
      'For fluids or contamination associated with sharps.'
    ),
    serviceLink(
      'post-eviction-cleaning',
      'Post-Eviction Cleaning',
      'For wider property cleaning after possession or abandonment.'
    ),
    serviceLink(
      'emergency-specialist-cleaning',
      'Emergency Specialist Cleaning',
      'Urgent triage where location and access require rapid review.'
    )
  ],
  relatedSectors: [
    sectorLink('Housing providers', 'Sharps clearance for communal and void property environments.'),
    sectorLink('Local authorities', 'Controlled response for managed accommodation and public-facing property.'),
    sectorLink('Property managers', 'Hazard response for managed residential and commercial premises.')
  ],
  relatedPolicies: [policyLinks.sharps, policyLinks.healthSafety, policyLinks.waste, policyLinks.emergency],
  faqs: [
    {
      question: 'Should I pick up a needle before Shinezone arrives?',
      answer:
        'No. Keep people away from the item where safe and provide the location and photographs if this can be done safely.'
    },
    {
      question: 'Can Shinezone handle suspected drugs?',
      answer:
        'No. Suspected substances are not handled as ordinary cleaning waste and may require client or authority escalation.'
    },
    {
      question: 'Can Shinezone guarantee there are no hidden sharps?',
      answer:
        'A visual clearance cannot guarantee inaccessible or concealed areas. Wider search requirements must be scoped separately.'
    },
    {
      question: 'What if sharps are found during another clean?',
      answer:
        'Work in the affected area is paused and the sharps process is followed before ordinary cleaning continues.'
    },
    {
      question: 'Will waste records be provided?',
      answer: 'Waste records can be supplied where the accepted disposal route requires them.'
    }
  ],
  seo: {
    title: 'Sharps and Drug-Paraphernalia Clearance | Shinezone',
    description:
      'Controlled sharps clearance for visible needles, blades, contaminated glass and drug paraphernalia, with public-area isolation and waste controls.',
    keywords: ['sharps clearance', 'needle clearance', 'drug paraphernalia cleaning', 'specialist cleaning']
  },
  schemaServiceType: 'Sharps and drug-paraphernalia clearance'
}
