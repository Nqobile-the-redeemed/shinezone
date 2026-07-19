import type { Service } from './types'
import { serviceClaimVerification } from './claims'
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

export const emergencySpecialistCleaning: Service = {
  slug: 'emergency-specialist-cleaning',
  title: 'Emergency Specialist Cleaning',
  shortTitle: 'Emergency',
  category: ['specialist-reactive'],
  riskLevel: 'specialist',
  serviceModes: [
    'occupied-property',
    'vacant-property',
    'one-off-service',
    'specialist-risk-review',
    'out-of-hours-request'
  ],
  schedulingModel: 'Urgent requests are triaged before acceptance; attendance is not automatic.',
  instructionType: 'Urgent contamination, sharps, post-incident, property-safety or specialist cleaning request.',
  surveyRequirement: 'Remote triage is required before dispatch; photographs may be requested where safe and lawful.',
  summary:
    'Urgent specialist cleaning request triage for contamination, sharps, property incidents and higher-risk conditions.',
  introduction: [
    'Emergency specialist cleaning is an intake and triage route for urgent cleaning problems, not a guaranteed response-time promise. Shinezone reviews the caller authority, location, access, immediate danger, occupancy, hazards, staff competence, equipment and available operational capacity before confirming whether attendance can be accepted.',
    'This service is intended for urgent property cleaning incidents such as localised contamination, sharps, post-incident cleaning, unsafe communal areas or urgent handover concerns. It is not a substitute for police, fire, ambulance, safeguarding emergency response or medical support.',
    'Where a request is accepted, the operational process records key decision points such as request received, triage completed, dispatch decision, arrival, work completion, recall and rectification where relevant.'
  ],
  valueProposition:
    'A responsible urgent-cleaning route that screens immediate danger first and accepts attendance only when the right controls can be put in place.',
  image: '/images/shinezone/new-images/pexels-tima-miroshnichenko-6195129.jpg',
  imageAlt: 'Cleaning team preparing equipment for an urgent specialist cleaning request',
  gallery: [
    {
      src: '/images/shinezone/puroclean-of-fort-worth--dc38HdQR1M-unsplash.jpg',
      alt: 'Gloved cleaning of a wet surface during urgent cleaning work',
      caption: 'Urgent requests are matched to the correct service route after triage.'
    },
    {
      src: '/images/shinezone/new-images/pexels-michelangelo-buonarroti-4176042.jpg',
      alt: 'Specialist cleaning PPE preparation for risk-reviewed attendance',
      caption: 'Equipment and PPE are confirmed before attendance is accepted.'
    }
  ],
  suitableFor: [
    {
      title: 'Housing and accommodation teams',
      description: 'For urgent communal, temporary accommodation or vacant-property cleaning issues.'
    },
    {
      title: 'Property managers',
      description: 'For time-sensitive hazards affecting access, presentation or site usability.'
    },
    {
      title: 'Commercial clients',
      description: 'For urgent workplace cleaning incidents after immediate danger is ruled out.'
    },
    {
      title: 'Existing clients',
      description: 'For urgent escalation where site details and authority can be confirmed quickly.'
    }
  ],
  propertyTypes: [
    {
      title: 'Communal spaces',
      description: 'Shared entrances, lifts, corridors or washrooms affected by urgent cleaning issues.'
    },
    {
      title: 'Temporary accommodation',
      description: 'Occupied or vacant accommodation needing priority triage with resident-sensitive controls.'
    },
    {
      title: 'Commercial premises',
      description: 'Workplaces, retail units or public-facing areas where urgent cleaning affects use.'
    },
    {
      title: 'Vacant units',
      description: 'Properties that require fast risk screening before cleaning or handover.'
    }
  ],
  commonScenarios: [
    {
      title: 'Urgent contamination report',
      description: 'Bodily fluids, odour or contamination are affecting a usable area.',
      recommendedAction:
        'Confirm immediate danger status, affected area, access, occupancy and photographs where safe.',
      urgency: 'urgent'
    },
    {
      title: 'Sharps in a public or communal area',
      description:
        'Needles, blades or paraphernalia are reported where residents, staff or the public may access them.',
      recommendedAction:
        'Keep people away where safe and provide location, visibility and suspected-substance details.',
      urgency: 'emergency'
    },
    {
      title: 'Short-deadline property handover',
      description: 'A property needs cleaning urgently before inspection, occupancy or operational use.',
      recommendedAction: 'Provide scope, deadline, access, property condition and known hazards for triage.',
      urgency: 'priority'
    }
  ],
  outcomes: [
    {
      title: 'Immediate-danger screening',
      description:
        'The request is checked for situations that require emergency services or client safeguarding escalation.'
    },
    {
      title: 'Accepted service route',
      description: 'The urgent request is matched to cleaning, sharps, biohazard or property-turnaround controls.'
    },
    {
      title: 'Operational timestamps',
      description: 'Request, triage, dispatch, arrival and completion points can be recorded where required.'
    },
    {
      title: 'Clear acceptance boundary',
      description: 'Attendance is confirmed only after location, access, risks, staff and equipment are reviewed.'
    }
  ],
  scopeGroups: [
    {
      title: 'Request intake',
      description: 'The initial call or form submission captures the minimum operational information.',
      items: [
        'Requester identity',
        'Authority to instruct',
        'Site address',
        'Incident type',
        'Immediate danger',
        'Emergency-service involvement'
      ]
    },
    {
      title: 'Triage and dispatch decision',
      description: 'The request is reviewed before attendance is accepted.',
      items: [
        'Location check',
        'Access review',
        'Known hazards',
        'Occupancy',
        'Staff competence',
        'Equipment availability',
        'Capacity decision'
      ]
    },
    {
      title: 'Attendance and site assessment',
      description: 'Accepted attendance still begins with an on-site condition check.',
      items: [
        'Arrival recording',
        'Dynamic risk assessment',
        'Area isolation',
        'Client contact check',
        'Scope confirmation',
        'Stop-work triggers'
      ]
    },
    {
      title: 'Completion, recall and rectification',
      description: 'Evidence and follow-up controls support urgent-service accountability.',
      items: [
        'Completion record',
        'Photographs where agreed',
        'Exception notes',
        'Recall route',
        'Rectification log',
        'Client handover'
      ]
    }
  ],
  included: [
    {
      title: 'Urgent triage',
      description:
        'The request is screened for immediate danger, authority, location, hazards and operational capacity.'
    },
    {
      title: 'Service-route recommendation',
      description: 'The incident is directed toward the appropriate cleaning, sharps or contamination process.'
    },
    {
      title: 'Dispatch decision',
      description: 'Attendance is accepted only where controls, people and equipment can be put in place.'
    },
    {
      title: 'Incident reporting',
      description: 'Operational timestamps and completion notes can be recorded where agreed.'
    }
  ],
  optionalExtras: [
    {
      title: 'Out-of-hours triage',
      description: 'Pre-booked or urgent requests can be reviewed outside normal hours subject to capacity.',
      pricedSeparately: true
    },
    {
      title: 'Follow-on specialist cleaning',
      description: 'Sharps, biohazard or turnaround work may be priced as separate accepted services.',
      pricedSeparately: true
    },
    {
      title: 'Recall or rectification visit',
      description: 'Follow-up work can be arranged where accepted after review.',
      pricedSeparately: true
    }
  ],
  exclusions: [
    {
      title: 'Guaranteed response time',
      description: 'Shinezone does not display an unverified guaranteed response time.',
      escalation: 'Attendance is confirmed only after triage and operational acceptance.'
    },
    {
      title: 'Emergency-services substitute',
      description:
        'The service is not for immediate danger, criminal activity, fire, medical emergency or police matters.',
      escalation: 'Contact the appropriate emergency service first.'
    },
    {
      title: 'Automatic attendance',
      description: 'Submitting a request does not confirm attendance.',
      escalation: 'The operations team must accept the request after reviewing location, access, risks and capacity.'
    }
  ],
  process: commonProcess('Emergency Specialist Cleaning'),
  clientInformationRequired: commonClientInformation,
  sitePreparation: [
    ...commonSitePreparation,
    {
      title: 'Screen emergency-service involvement',
      description: 'Confirm whether police, fire, ambulance or safeguarding emergency routes are already involved.',
      required: true
    }
  ],
  clientResponsibilities: [
    ...commonClientResponsibilities,
    {
      title: 'Maintain urgent contact availability',
      description: 'An authorised contact must remain reachable for triage, access and acceptance decisions.',
      required: true
    }
  ],
  safetyControls: [
    ...commonSafetyControls,
    {
      title: 'Immediate-danger screen',
      description:
        'Requests involving immediate danger are directed away from cleaning attendance and toward emergency services.',
      relatedPolicySlug: 'emergency-and-out-of-hours-response'
    },
    {
      title: 'Dispatch acceptance control',
      description: 'Dispatch occurs only after risk, competence, equipment and capacity are reviewed.'
    }
  ],
  specialistControls: [
    {
      title: 'Contamination route',
      description: 'Bodily-fluid incidents are routed to contamination controls before ordinary cleaning.'
    },
    {
      title: 'Sharps route',
      description: 'Needles and paraphernalia are routed to sharps controls.',
      relatedPolicySlug: 'sharps-and-contaminated-waste'
    },
    {
      title: 'Recall and rectification',
      description: 'Urgent work can be reviewed through a recall or rectification process where appropriate.'
    }
  ],
  staffCompetence: [
    ...commonStaffCompetence,
    {
      title: 'Urgent triage judgement',
      description: 'Responsible staff must understand acceptance boundaries and emergency-service exclusions.'
    }
  ],
  equipment: [
    {
      title: 'Role-specific cleaning kits',
      description: 'Equipment is matched to the accepted service route.'
    },
    {
      title: 'Communication devices',
      description: 'Used to support dispatch, arrival, escalation and completion communication.'
    },
    {
      title: 'Specialist PPE where required',
      description: 'Selected according to the accepted hazard and task.'
    },
    {
      title: 'Waste containment',
      description: 'Used only where the accepted route requires it.'
    }
  ],
  ppe: commonPpe,
  qualityAssurance: [
    ...commonQualityAssurance,
    {
      title: 'Operational timestamp record',
      description: 'Key urgent-service events can be recorded for accountability and later review.'
    }
  ],
  deliverables: commonDeliverables,
  rectificationApproach: commonRectification,
  environmentalControls: commonEnvironmentalControls,
  wasteControls: [
    {
      title: 'Route matched to hazard',
      description: 'Waste arrangements depend on whether the incident involves ordinary, contaminated or sharps waste.'
    },
    {
      title: 'No unidentified substances',
      description: 'Unknown substances are not handled through urgent cleaning.'
    },
    {
      title: 'Documentation where required',
      description: 'Waste notes are provided where the accepted route requires them.'
    },
    {
      title: 'Client authority',
      description: 'Removal of belongings or waste requires authority and accepted scope.'
    }
  ],
  serviceOptions: [
    {
      title: 'Urgent triage',
      description: 'Review of an urgent specialist cleaning request.'
    },
    {
      title: 'Accepted urgent attendance',
      description: 'Attendance after triage confirms location, risk, access, staff and equipment.',
      pricedSeparately: true
    },
    {
      title: 'Follow-on scheduled work',
      description: 'Additional cleaning once immediate conditions are controlled.',
      pricedSeparately: true
    }
  ],
  schedulingNotes: [
    'Urgent requests are triaged according to location, risk, access, staff competence and available operational capacity.',
    'No two-hour, 24/7 or nationwide claim is displayed unless centrally verified.',
    'Immediate danger, criminal activity or medical emergencies must be directed to emergency services.'
  ],
  pricingFactors: [
    {
      title: 'Incident type',
      description: 'Contamination, sharps, waste, property turnaround and access issues require different routes.'
    },
    {
      title: 'Location and access',
      description: 'Travel, parking, keys, alarms, occupancy and site contacts affect acceptance.'
    },
    {
      title: 'Risk and competence',
      description: 'Staff availability must match the hazard and required controls.'
    },
    {
      title: 'Equipment and PPE',
      description: 'Specialist equipment availability can affect acceptance and timing.'
    },
    {
      title: 'Evidence and reporting',
      description: 'Operational timestamps, photographs and completion records affect administration.'
    }
  ],
  relatedServices: [
    serviceLink(
      'biohazard-bodily-fluid-cleaning',
      'Biohazard and Bodily-Fluid Cleaning',
      'For bodily fluids and contamination incidents.'
    ),
    serviceLink('sharps-drug-paraphernalia-clearance', 'Sharps Clearance', 'For needles, blades and paraphernalia.'),
    serviceLink(
      'post-eviction-cleaning',
      'Post-Eviction Cleaning',
      'For urgent property conditions after possession or abandonment.'
    )
  ],
  relatedSectors: [
    sectorLink('Housing providers', 'Urgent specialist cleaning triage for managed housing stock.'),
    sectorLink('Temporary accommodation providers', 'Urgent incidents in shared and self-contained accommodation.'),
    sectorLink('Commercial businesses', 'Urgent cleaning issues affecting operational premises.')
  ],
  relatedPolicies: [policyLinks.emergency, policyLinks.healthSafety, policyLinks.sharps, policyLinks.complaints],
  faqs: [
    {
      question: 'Does submitting a request confirm attendance?',
      answer:
        'No. Attendance is confirmed only after Shinezone reviews location, access, risks, staffing, equipment and capacity.'
    },
    {
      question: 'Is Shinezone available 24/7?',
      answer: serviceClaimVerification.isEmergency247Verified
        ? 'Emergency availability is displayed according to the verified operating model.'
        : 'Urgent and out-of-hours requests can be reviewed, but no unverified 24/7 availability claim is displayed.'
    },
    {
      question: 'Can Shinezone guarantee a two-hour response?',
      answer: serviceClaimVerification.isTwoHourResponseVerified
        ? 'Verified response commitments are shown only when approved.'
        : 'No unverified two-hour response guarantee is displayed. Requests are triaged according to risk, access and capacity.'
    },
    {
      question: 'Should I use this service for immediate danger?',
      answer:
        'No. Contact the appropriate emergency service for immediate danger, criminal activity, fire or medical emergencies.'
    },
    {
      question: 'What information is needed for urgent triage?',
      answer:
        'Provide authority, address, incident type, immediate-danger status, occupancy, hazards, access, photographs where safe and contact details.'
    }
  ],
  seo: {
    title: 'Emergency Specialist Cleaning Triage | Shinezone',
    description:
      'Urgent specialist cleaning triage for contamination, sharps, property incidents and higher-risk cleaning requests, without unsupported response-time claims.',
    keywords: [
      'emergency specialist cleaning',
      'urgent cleaning triage',
      'biohazard emergency cleaning',
      'sharps emergency cleaning'
    ]
  },
  metrics: [
    {
      label: '24/7 claim',
      value: serviceClaimVerification.isEmergency247Verified ? 'Verified' : 'Not publicly claimed',
      claimStatus: serviceClaimVerification.isEmergency247Verified ? 'verified' : 'unverified'
    },
    {
      label: 'Two-hour response claim',
      value: serviceClaimVerification.isTwoHourResponseVerified ? 'Verified' : 'Not publicly claimed',
      claimStatus: serviceClaimVerification.isTwoHourResponseVerified ? 'verified' : 'unverified'
    }
  ],
  schemaServiceType: 'Emergency specialist cleaning'
}
