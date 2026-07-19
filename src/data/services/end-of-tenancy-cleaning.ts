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

export const endOfTenancyCleaning: Service = {
  slug: 'end-of-tenancy-cleaning',
  title: 'End-of-Tenancy Cleaning',
  shortTitle: 'End of Tenancy',
  category: ['property-turnaround'],
  riskLevel: 'enhanced',
  serviceModes: ['vacant-property', 'one-off-service', 'specialist-risk-review', 'out-of-hours-request'],
  schedulingModel: 'Planned property turnaround once access, property condition and deadline are confirmed.',
  instructionType: 'Vacant-property clean, pre-let clean, handover clean or temporary-accommodation room turnaround.',
  surveyRequirement:
    'Photographs are usually requested; heavily soiled, waste-heavy or hazard-affected properties may need a survey.',
  summary:
    'Structured turnaround cleaning for vacant homes, shared accommodation and managed lettings before inspection or occupation.',
  introduction: [
    'End-of-tenancy cleaning is designed to move a property from occupied or recently vacated condition toward an agreed handover standard. It can include kitchens, appliances, bathrooms, internal glazing, floors, skirting, cupboards, fixtures and final reporting.',
    'Shinezone treats this as a property-turnaround process rather than a simple domestic clean. The property size, condition, waste, utilities, access and completion deadline are reviewed before the team, duration, equipment and optional extras are confirmed.',
    'Where needles, bodily fluids, suspected substances, pest activity, heavy accumulation or structural damage are present, the work may need specialist triage. Those hazards should be declared before attendance so Shinezone can plan the correct controls.'
  ],
  valueProposition:
    'A controlled end-of-tenancy clean that helps landlords, agents and housing teams prepare properties for inspection, reletting or occupation.',
  image: '/images/shinezone/new-images/pexels-rdne-4921525.jpg',
  imageAlt: 'Cleaner wiping surfaces during a property turnaround clean',
  gallery: [
    {
      src: '/images/shinezone/new-images/california-steam-dry-carpet-cleaning-Ddzir2TCR2g-unsplash (1).jpg',
      alt: 'Carpet being cleaned during a property turnaround',
      caption: 'Carpet extraction can be priced separately where suitable and included in the quotation.'
    },
    {
      src: '/images/shinezone/new-images/pexels-tima-miroshnichenko-6195288.jpg',
      alt: 'Cleaning team preparing equipment in a residential-style property',
      caption: 'Crew size and equipment are matched to property condition and deadline.'
    }
  ],
  suitableFor: [
    {
      title: 'Letting and estate agents',
      description: 'For managed properties that need cleaning before marketing, check-in or handover.'
    },
    {
      title: 'Landlords',
      description: 'For vacant homes requiring detailed cleaning and clear exclusions before reoccupation.'
    },
    {
      title: 'Housing providers',
      description: 'For voids, temporary accommodation and managed residential stock requiring structured turnaround.'
    },
    {
      title: 'Property managers',
      description: 'For multi-site property portfolios where deadlines, keys and reporting must be controlled.'
    }
  ],
  propertyTypes: [
    {
      title: 'Studios and flats',
      description: 'Compact properties where kitchens, bathrooms, fixtures and floors need careful sequencing.'
    },
    {
      title: 'Houses and multi-bedroom properties',
      description: 'Larger properties where room count, floors and appliances affect crew size and duration.'
    },
    {
      title: 'Shared accommodation',
      description: 'Rooms and shared facilities where belongings, occupancy and privacy need clarification.'
    },
    {
      title: 'Temporary accommodation units',
      description: 'Turnaround cleaning where deadlines, handover and resident-sensitive information may apply.'
    }
  ],
  commonScenarios: [
    {
      title: 'Standard vacant-property turnaround',
      description:
        'The property is empty, utilities are available and no specialist contamination has been identified.',
      recommendedAction: 'Provide property size, photographs, access information and the completion deadline.',
      urgency: 'planned'
    },
    {
      title: 'Heavily soiled property',
      description: 'The property contains extensive grease, staining, accumulated waste or neglected fixtures.',
      recommendedAction:
        'A photograph review or site survey may be required before crew size and duration are confirmed.',
      urgency: 'priority'
    },
    {
      title: 'Property containing sharps or contamination',
      description: 'Needles, bodily fluids, suspected substances or other specialist hazards are present or suspected.',
      recommendedAction: 'Do not book this as a standard clean. Select the relevant hazard so the job can be triaged.',
      urgency: 'urgent'
    }
  ],
  outcomes: [
    {
      title: 'Property ready for inspection',
      description: 'Agreed rooms and fixtures are cleaned toward a defined handover standard.'
    },
    {
      title: 'Documented exclusions',
      description: 'Damage, permanent staining, inaccessible areas and out-of-scope work are recorded.'
    },
    {
      title: 'Controlled turnaround',
      description: 'Access, keys, utilities, waste, hazards and deadlines are managed through a defined process.'
    },
    {
      title: 'Clear route for hazards',
      description: 'Specialist risks are separated from ordinary cleaning so they can be assessed properly.'
    }
  ],
  scopeGroups: [
    {
      title: 'Kitchens and appliances',
      description: 'Detailed cleaning of agreed kitchen fixtures, surfaces and appliances.',
      items: [
        'Worktops and splashbacks',
        'Cupboards where instructed',
        'Sink and taps',
        'Hob and extractor surfaces',
        'Oven where included',
        'Fridge or freezer where empty'
      ]
    },
    {
      title: 'Bathrooms and sanitary areas',
      description: 'Cleaning of hygiene-sensitive fixtures and accessible surfaces.',
      items: [
        'Toilets',
        'Baths and showers',
        'Basins and taps',
        'Tiles and splash areas',
        'Mirrors',
        'Accessible limescale where practicable'
      ]
    },
    {
      title: 'Bedrooms and living areas',
      description: 'Room-by-room cleaning of fixtures and surfaces included in the quotation.',
      items: [
        'Vacuuming or floor cleaning',
        'Skirting boards',
        'Internal doors and handles',
        'Window sills',
        'Accessible fixtures',
        'Cupboards where included'
      ]
    },
    {
      title: 'Final checks and reporting',
      description: 'Handover tasks and evidence produced where agreed.',
      items: [
        'Waste route checked',
        'Equipment removed',
        'Property secured where instructed',
        'Completion checklist',
        'Authorised photographs',
        'Defects and exclusions reported'
      ]
    }
  ],
  included: [
    {
      title: 'Property-condition review',
      description: 'Information and photographs are reviewed before the final scope is confirmed.'
    },
    {
      title: 'Detailed internal clean',
      description: 'Agreed rooms, fixtures and surfaces are cleaned according to the quotation.'
    },
    {
      title: 'Final inspection',
      description: 'Completed work is checked against the agreed task list.'
    },
    {
      title: 'Exception reporting',
      description: 'Permanent damage, inaccessible areas and excluded work are identified.'
    }
  ],
  optionalExtras: [
    {
      title: 'Carpet extraction',
      description: 'Machine cleaning for suitable carpeted areas.',
      pricedSeparately: true
    },
    {
      title: 'Internal window cleaning',
      description: 'Glazing, frames and sills where included in the quotation.',
      pricedSeparately: true
    },
    {
      title: 'Bulky-waste removal',
      description: 'Removal and disposal subject to client authority, classification and disposal cost.',
      pricedSeparately: true
    },
    {
      title: 'Priority turnaround',
      description: 'Short-deadline attendance subject to staffing, access and operational acceptance.',
      pricedSeparately: true
    }
  ],
  exclusions: [
    {
      title: 'Structural and maintenance repairs',
      description: 'Cleaning does not include repairing damaged walls, floors, appliances or fixtures.',
      escalation: 'Defects can be photographed and reported to the authorised client contact.'
    },
    {
      title: 'Unknown substances',
      description:
        'Unidentified powders, chemicals or suspected drugs are not handled through an ordinary cleaning process.',
      escalation: 'The area is isolated where safe and escalated for appropriate specialist direction.'
    },
    {
      title: 'Unauthorised disposal of belongings',
      description: 'Personal belongings are not removed without clear client authority.',
      escalation: 'The client must confirm ownership, authority and the required waste route.'
    }
  ],
  process: commonProcess('End-of-Tenancy Cleaning'),
  clientInformationRequired: commonClientInformation,
  sitePreparation: commonSitePreparation,
  clientResponsibilities: [
    ...commonClientResponsibilities,
    {
      title: 'Confirm removal authority',
      description: 'The client must authorise disposal of furniture, personal property or bulky items.',
      required: true
    }
  ],
  safetyControls: [
    ...commonSafetyControls,
    {
      title: 'Waste screening',
      description: 'Waste type, quantity and authority are reviewed before removal is accepted.',
      relatedPolicySlug: 'waste-duty-of-care'
    },
    {
      title: 'Utilities and appliance safety',
      description: 'Water, electricity and appliance conditions are checked before cleaning tasks that rely on them.'
    }
  ],
  specialistControls: [
    {
      title: 'Sharps escalation',
      description: 'Needles or contaminated sharp items trigger specialist controls.',
      relatedPolicySlug: 'sharps-and-contaminated-waste'
    },
    {
      title: 'Unknown substances',
      description: 'Unidentified powders or liquids are isolated and not handled as ordinary waste.'
    },
    {
      title: 'Biological contamination',
      description: 'Bodily fluids are assessed before the appropriate cleaning and waste process is selected.'
    }
  ],
  staffCompetence: [
    ...commonStaffCompetence,
    {
      title: 'Property-turnaround judgement',
      description:
        'Staff understand how to identify defects, exclusions, belongings and hazards during a vacant-property clean.'
    }
  ],
  equipment: [
    {
      title: 'Commercial vacuum',
      description: 'Used for suitable carpets, edges and loose debris.'
    },
    {
      title: 'Floor-cleaning equipment',
      description: 'Selected according to floor material and condition.'
    },
    {
      title: 'Appliance cleaning tools',
      description: 'Used for ovens, hobs and appliance surfaces where included.'
    },
    {
      title: 'Extraction equipment',
      description: 'Used for suitable carpets where quoted and conditions allow.'
    }
  ],
  ppe: commonPpe,
  qualityAssurance: [
    ...commonQualityAssurance,
    {
      title: 'Property handover evidence',
      description: 'Completion evidence can support inspection, letting or void-management records.'
    }
  ],
  deliverables: commonDeliverables,
  rectificationApproach: commonRectification,
  environmentalControls: commonEnvironmentalControls,
  wasteControls: [
    {
      title: 'Waste screening',
      description: 'Waste type and quantity are reviewed before attendance.'
    },
    {
      title: 'Removal authority',
      description: 'Items are removed only with appropriate client authority.'
    },
    {
      title: 'Authorised disposal',
      description: 'Waste is transferred through an appropriate lawful route.'
    },
    {
      title: 'Specialist segregation',
      description: 'Sharps and contaminated materials are not mixed with ordinary waste.'
    }
  ],
  serviceOptions: [
    {
      title: 'Standard planned clean',
      description: 'Scheduled once scope, property status and access are confirmed.'
    },
    {
      title: 'Priority turnaround',
      description: 'Subject to operational capacity and risk review.',
      pricedSeparately: true
    },
    {
      title: 'Turnaround with optional extras',
      description: 'Carpet extraction, internal glazing or bulky-waste items can be added where suitable.',
      pricedSeparately: true
    }
  ],
  schedulingNotes: [
    'Attendance is confirmed only after scope and access review.',
    'Short-notice work depends on staff, equipment and property location.',
    'Specialist hazards may change the proposed service route.'
  ],
  pricingFactors: [
    {
      title: 'Property size',
      description: 'Number of bedrooms, rooms, floors and approximate area.'
    },
    {
      title: 'Condition',
      description: 'Level of soiling, staining, accumulation and cleaning complexity.'
    },
    {
      title: 'Waste',
      description: 'Type, quantity and required disposal route.'
    },
    {
      title: 'Deadline',
      description: 'Priority or out-of-hours requirements may affect resourcing.'
    },
    {
      title: 'Reporting',
      description: 'Photographs, checklists and detailed evidence may affect administration.'
    }
  ],
  relatedServices: [
    serviceLink(
      'carpet-floor-care',
      'Carpet and Floor Care',
      'Machine cleaning and treatment for suitable carpets and hard floors.'
    ),
    serviceLink(
      'post-eviction-cleaning',
      'Post-Eviction Cleaning',
      'For properties requiring more extensive risk screening and clearance.'
    ),
    serviceLink(
      'sharps-drug-paraphernalia-clearance',
      'Sharps Clearance',
      'Specialist assessment where sharps are identified.'
    )
  ],
  relatedSectors: [
    sectorLink('Housing providers', 'Vacant-property turnaround and temporary accommodation support.'),
    sectorLink('Estate and letting agents', 'Pre-let and post-tenancy cleaning with handover evidence.'),
    sectorLink('Landlords', 'Property preparation before inspection, marketing or occupation.')
  ],
  relatedPolicies: [policyLinks.healthSafety, policyLinks.coshh, policyLinks.waste, policyLinks.complaints],
  faqs: [
    {
      question: 'How is an end-of-tenancy clean priced?',
      answer:
        'The quotation considers property size, condition, waste, access, required deadline, optional items and known hazards.'
    },
    {
      question: 'Does the property need to be empty?',
      answer:
        'The service is normally intended for vacant properties. Any remaining occupants or belongings must be disclosed before attendance.'
    },
    {
      question: 'Can waste and furniture be removed?',
      answer:
        'Waste removal can be considered where the client has authority and the type, volume and disposal route have been assessed.'
    },
    {
      question: 'Can Shinezone clean carpets and ovens?',
      answer:
        'These items can be included where specified in the quotation and suitable equipment and access are available.'
    },
    {
      question: 'What happens if sharps are discovered?',
      answer:
        'Work in the affected area is paused and the specialist sharps process is followed. Undeclared hazards may require a revised scope.'
    }
  ],
  seo: {
    title: 'End-of-Tenancy Cleaning for Landlords and Housing Providers | Shinezone',
    description:
      'Structured end-of-tenancy cleaning for vacant homes, temporary accommodation and managed lettings, including detailed cleaning, risk screening and completion evidence.',
    keywords: [
      'end of tenancy cleaning',
      'landlord property cleaning',
      'vacant property deep clean',
      'temporary accommodation cleaning'
    ]
  },
  schemaServiceType: 'End-of-tenancy cleaning'
}
