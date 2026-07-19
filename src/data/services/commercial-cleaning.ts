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

export const commercialCleaning: Service = {
  slug: 'commercial-cleaning',
  title: 'Commercial Cleaning',
  shortTitle: 'Commercial',
  category: ['commercial-planned'],
  riskLevel: 'routine',
  serviceModes: ['occupied-property', 'recurring-service', 'one-off-service', 'out-of-hours-request'],
  schedulingModel: 'Planned, recurring or one-off attendance after access and security arrangements are agreed.',
  instructionType: 'Routine workplace cleaning, mobilisation cleaning, post-event cleaning or periodic deep clean.',
  surveyRequirement: 'A site survey is recommended for recurring schedules, multi-area sites and out-of-hours access.',
  summary:
    'Routine and one-off cleaning for offices, retail spaces, community premises and managed commercial workplaces.',
  introduction: [
    'Commercial cleaning protects the everyday usability and presentation of a workplace. Shinezone scopes each instruction around the areas that matter to staff, visitors and managers, including reception spaces, washrooms, kitchens, meeting rooms, circulation routes and high-touch points.',
    'The service is suitable for routine scheduled cleaning, one-off deep cleaning, post-event cleaning and new-premises mobilisation. It is planned around business hours, keyholding boundaries, alarm requirements, consumable arrangements and the reporting expectations agreed with the client.',
    'Where a commercial site includes unusual hazards, heavy contamination, high-level access, specialist waste or extensive floor restoration, Shinezone separates those items from ordinary routine cleaning so the correct competence, equipment and controls can be agreed.'
  ],
  valueProposition:
    'A managed commercial cleaning service that keeps routine workplace standards clear, reportable and responsive to changing site needs.',
  image: '/images/shinezone/new-images/ashwini-chaudhary-monty--4KzDiyZjgw-unsplash.jpg',
  imageAlt: 'Professional cleaner maintaining a commercial interior with cleaning equipment',
  gallery: [
    {
      src: '/images/shinezone/new-images/pexels-rdne-4921525.jpg',
      alt: 'Desk and workplace surface being cleaned in a commercial setting',
      caption: 'High-touch surface and staff-area cleaning can be included in routine schedules.'
    },
    {
      src: '/images/shinezone/towfiqu-barbhuiya--9gPKrsbGmc-unsplash.jpg',
      alt: 'Office desk prepared for cleaning and service planning',
      caption: 'Reporting expectations, access windows and service levels are agreed before recurring work starts.'
    }
  ],
  suitableFor: [
    {
      title: 'Offices and workspaces',
      description: 'For daily, weekly or periodic cleaning of desks, meeting rooms, staff kitchens and washrooms.'
    },
    {
      title: 'Retail and customer-facing premises',
      description: 'For presentation-led cleaning where opening times, public access and staff welfare areas matter.'
    },
    {
      title: 'Community and shared facilities',
      description: 'For multi-user buildings that need dependable hygiene, clear reporting and flexible scheduling.'
    },
    {
      title: 'Property and facilities managers',
      description:
        'For sites where cleaning performance, issue reporting and service continuity need central oversight.'
    }
  ],
  propertyTypes: [
    {
      title: 'Reception and circulation spaces',
      description: 'Entrances, walkways, waiting areas and shared routes that influence first impressions.'
    },
    {
      title: 'Washrooms and welfare areas',
      description: 'Toilets, handwashing areas, staff rooms and kitchens where hygiene and supplies must be managed.'
    },
    {
      title: 'Desk and meeting-room areas',
      description: 'High-touch surfaces, meeting rooms, breakout spaces and agreed workstation areas.'
    },
    {
      title: 'Commercial floors',
      description: 'Carpeted and hard-floor areas requiring vacuuming, mopping or periodic machine care.'
    }
  ],
  commonScenarios: [
    {
      title: 'Daily or weekly office cleaning',
      description: 'A workplace requires dependable recurring cleaning around staff, visitors and opening hours.',
      recommendedAction:
        'Provide floor plans, opening times, access rules, consumable requirements and reporting needs.',
      urgency: 'planned'
    },
    {
      title: 'One-off deep clean',
      description: 'A commercial unit needs an intensive clean after a busy period, refurbishment or change in use.',
      recommendedAction: 'Share photographs, priority areas, utilities status and any deadline for reopening.',
      urgency: 'priority'
    },
    {
      title: 'Post-event or mobilisation clean',
      description: 'A venue or office needs cleaning after an event or before a new occupancy or team move.',
      recommendedAction: 'Confirm the event end time, waste expectations, access, parking and handover deadline.',
      urgency: 'priority'
    }
  ],
  outcomes: [
    {
      title: 'Consistent workplace presentation',
      description: 'Agreed areas are maintained to a standard suitable for staff, visitors and client inspections.'
    },
    {
      title: 'Safer shared facilities',
      description: 'Washrooms, kitchens, floors and high-touch points are managed with appropriate cleaning controls.'
    },
    {
      title: 'Clear service reporting',
      description: 'Issues, access problems, consumable shortages and exclusions can be recorded and escalated.'
    },
    {
      title: 'Reduced disruption',
      description: 'Schedules can be planned around opening hours, security requirements and operational routines.'
    }
  ],
  scopeGroups: [
    {
      title: 'Reception, desks and meeting rooms',
      description: 'Routine workplace cleaning for the areas most visible to staff and visitors.',
      items: [
        'Reception counters',
        'Meeting tables',
        'Accessible desk surfaces',
        'Door handles',
        'Light switches',
        'Internal bins'
      ]
    },
    {
      title: 'Washrooms and kitchens',
      description: 'Hygiene-sensitive spaces cleaned according to agreed frequency and supplies arrangements.',
      items: [
        'Toilets and basins',
        'Taps and dispensers',
        'Kitchen worktops',
        'Sinks',
        'Splashbacks',
        'Staff welfare surfaces'
      ]
    },
    {
      title: 'Floors and circulation routes',
      description: 'Floor care matched to surface type, traffic and available access windows.',
      items: ['Vacuuming', 'Mopping', 'Spot cleaning', 'Stair edges', 'Skirting', 'Entrance matting']
    },
    {
      title: 'Reporting and periodic tasks',
      description: 'Items that may be rotated or scheduled separately from daily cleaning.',
      items: [
        'Consumable checks where agreed',
        'Periodic deep cleaning',
        'High-touch programmes',
        'Defect notes',
        'Service-level reporting'
      ]
    }
  ],
  included: [
    {
      title: 'Site-specific cleaning schedule',
      description: 'The routine is documented around the rooms, frequencies and task standards agreed with the client.'
    },
    {
      title: 'High-touch cleaning',
      description: 'Touchpoints such as handles, switches and shared surfaces are included where agreed.'
    },
    {
      title: 'Washroom and welfare-area cleaning',
      description: 'Staff and visitor facilities are cleaned according to the service schedule.'
    },
    {
      title: 'Issue escalation',
      description: 'Access problems, defects, recurring concerns and supply issues can be reported to the client.'
    }
  ],
  optionalExtras: [
    {
      title: 'Consumable management',
      description: 'Paper products, soap or hygiene supplies can be checked or replenished where agreed.',
      pricedSeparately: true
    },
    {
      title: 'Periodic deep cleaning',
      description: 'Rotational deep-cleaning tasks for kitchens, washrooms, floors or high-touch programmes.',
      pricedSeparately: true
    },
    {
      title: 'Carpet and floor care',
      description: 'Machine cleaning, extraction, buffing or floor treatment can be added where suitable.',
      pricedSeparately: true
    },
    {
      title: 'Out-of-hours attendance',
      description: 'Evening, early morning or weekend attendance is subject to access, security and staffing review.',
      pricedSeparately: true
    }
  ],
  exclusions: [
    {
      title: 'Security or keyholding beyond agreement',
      description: 'Shinezone does not assume undefined keyholding, alarm or lock-up duties.',
      escalation: 'Access and security responsibilities must be documented before attendance.'
    },
    {
      title: 'Specialist contamination',
      description:
        'Bodily fluids, sharps, suspected substances or unusual hazards are not handled as routine office cleaning.',
      escalation: 'The affected area is escalated for specialist triage.'
    },
    {
      title: 'Repairs and maintenance',
      description: 'Cleaning does not include repairing fixtures, replacing damaged surfaces or maintenance works.',
      escalation: 'Defects can be reported to the authorised client contact.'
    }
  ],
  process: commonProcess('Commercial Cleaning'),
  clientInformationRequired: commonClientInformation,
  sitePreparation: commonSitePreparation,
  clientResponsibilities: commonClientResponsibilities,
  safetyControls: [
    ...commonSafetyControls,
    {
      title: 'Out-of-hours access control',
      description:
        'Keys, alarms, lock-up, lone-working and escalation arrangements are confirmed before non-standard attendance.',
      relatedPolicySlug: 'lone-working'
    },
    {
      title: 'Business-continuity awareness',
      description:
        'Recurring schedules consider absence cover, access changes and continuity for essential cleaning tasks.'
    }
  ],
  staffCompetence: [
    ...commonStaffCompetence,
    {
      title: 'Workplace conduct',
      description:
        'Staff are briefed on professional conduct around client employees, visitors, confidential areas and workstations.'
    }
  ],
  equipment: [
    {
      title: 'Commercial vacuum systems',
      description: 'Used for suitable carpets, edges and dust control.'
    },
    {
      title: 'Microfibre and colour-coded tools',
      description: 'Used to separate task areas and reduce cross-contamination.'
    },
    {
      title: 'Floor mopping systems',
      description: 'Selected according to surface type, traffic and wet-floor controls.'
    },
    {
      title: 'Approved cleaning products',
      description: 'Products are matched to task, surface and COSHH requirements.'
    }
  ],
  ppe: commonPpe,
  qualityAssurance: [
    ...commonQualityAssurance,
    {
      title: 'Service-level review',
      description: 'Recurring services can include periodic review of attendance, issues and task suitability.'
    }
  ],
  deliverables: commonDeliverables,
  rectificationApproach: commonRectification,
  environmentalControls: commonEnvironmentalControls,
  wasteControls: [
    {
      title: 'Routine waste boundaries',
      description: 'Ordinary internal-bin waste is handled only where included in the agreed schedule.'
    },
    {
      title: 'Consumable packaging',
      description: 'Packaging and replenishment waste can be managed where the scope includes supplies.'
    },
    {
      title: 'Special waste escalation',
      description: 'Bulky, confidential, contaminated or hazardous waste requires separate instruction.'
    },
    {
      title: 'Client site rules',
      description: 'Waste is handled according to agreed on-site segregation and disposal arrangements.'
    }
  ],
  serviceOptions: [
    {
      title: 'Recurring schedule',
      description: 'Daily, weekly or custom frequencies based on occupancy and site traffic.'
    },
    {
      title: 'One-off clean',
      description: 'A single attendance for post-event, mobilisation or refresh requirements.'
    },
    {
      title: 'Periodic deep-clean programme',
      description: 'Rotational deep cleaning layered onto routine attendance.',
      pricedSeparately: true
    }
  ],
  schedulingNotes: [
    'Recurring schedules are confirmed after access, security and scope review.',
    'Out-of-hours work requires documented alarm, key and lock-up arrangements.',
    'Consumables and periodic tasks should be agreed separately from ordinary cleaning.'
  ],
  pricingFactors: [
    {
      title: 'Frequency',
      description: 'Daily, weekly, periodic or one-off attendance changes staffing and supervision needs.'
    },
    {
      title: 'Property size and layout',
      description: 'Rooms, floors, washrooms, circulation routes and staff areas affect duration.'
    },
    {
      title: 'Operating hours',
      description: 'Out-of-hours, secure access or lone-working controls may affect planning.'
    },
    {
      title: 'Consumables',
      description: 'Supply, replenishment or stock checks are priced separately where required.'
    },
    {
      title: 'Periodic tasks',
      description: 'Deep cleans, floor care, internal glazing or appliance cleaning may be added to the plan.'
    }
  ],
  relatedServices: [
    serviceLink(
      'carpet-floor-care',
      'Carpet and Floor Care',
      'Machine cleaning and floor maintenance for commercial sites.'
    ),
    serviceLink(
      'window-cleaning',
      'Window Cleaning',
      'Internal and external glazing cleaning where access is suitable.'
    ),
    serviceLink(
      'periodic-specialist-cleaning',
      'Periodic and Specialist Cleaning',
      'Deep cleaning, builders cleans and pressure cleaning for planned programmes.'
    )
  ],
  relatedSectors: [
    sectorLink('Commercial businesses', 'Routine cleaning for operational premises and client-facing spaces.'),
    sectorLink('Property managers', 'Cleaning support across managed commercial and mixed-use sites.'),
    sectorLink('Facilities-management teams', 'Service reporting and planned schedules for wider site operations.')
  ],
  relatedPolicies: [policyLinks.healthSafety, policyLinks.coshh, policyLinks.loneWorking, policyLinks.complaints],
  faqs: [
    {
      question: 'Can Shinezone clean outside normal office hours?',
      answer:
        'Yes. Out-of-hours work can be requested and is confirmed once access, security, lone-working and staffing arrangements are agreed.'
    },
    {
      question: 'Can consumables be supplied?',
      answer:
        'Consumable checks or replenishment can be included where the products, storage, ordering process and pricing are agreed.'
    },
    {
      question: 'Can the service include periodic deep cleaning?',
      answer:
        'Yes. Periodic tasks such as kitchen deep cleaning, carpet extraction or floor care can be added as scheduled extras.'
    },
    {
      question: 'Will Shinezone hold keys?',
      answer:
        'Keyholding or alarm responsibilities are accepted only where the process, authority, escalation and record keeping are agreed.'
    },
    {
      question: 'What happens if contamination is found?',
      answer:
        'The affected area is paused and escalated for specialist review rather than being treated as ordinary commercial cleaning.'
    }
  ],
  seo: {
    title: 'Commercial Cleaning for Workplaces and Managed Premises | Shinezone',
    description:
      'Commercial cleaning for offices, retail spaces, community facilities and managed workplaces, with planned schedules, access controls and service reporting.',
    keywords: [
      'commercial cleaning',
      'office cleaning',
      'workplace cleaning',
      'retail cleaning',
      'Dunstable cleaning company'
    ]
  },
  schemaServiceType: 'Commercial cleaning'
}
