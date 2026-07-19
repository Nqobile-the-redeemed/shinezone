import { brand, imagePaths } from '@/data/shinezone'

export type PolicyStatus = 'draft' | 'implementation_in_progress' | 'adopted'

export type PolicySection = {
  title: string
  body?: string[]
  items?: string[]
}

export type PolicyDocument = {
  slug: string
  title: string
  category: string
  summary: string
  status: PolicyStatus
  version: string
  owner: string
  approvedBy: string
  effectiveDate: string
  lastReviewed: string
  nextReview: string
  appliesTo: string[]
  relatedPolicies: string[]
  sections: PolicySection[]
  publicDownloadEnabled: boolean
  controlledEvidenceAvailable: boolean
}

export type AssurancePage = {
  slug: string
  title: string
  summary: string
  image: string
  sections: PolicySection[]
  relatedPolicies: string[]
}

const draftMeta = {
  status: 'draft' as PolicyStatus,
  version: '0.1 draft',
  owner: 'Shinezone management',
  approvedBy: 'Pending formal approval',
  effectiveDate: 'To be confirmed',
  lastReviewed: 'To be confirmed',
  nextReview: 'To be confirmed',
  publicDownloadEnabled: false,
  controlledEvidenceAvailable: true
}

export const policyStatusLabels: Record<PolicyStatus, string> = {
  draft: 'Draft for approval',
  implementation_in_progress: 'Implementation in progress',
  adopted: 'Adopted'
}

export const assurancePrinciples = [
  {
    title: 'Plan before attendance',
    text: 'We obtain sufficient information about the site, scope, occupancy, access, known hazards and client expectations. Unclear or higher-risk work is escalated for management review before allocation.'
  },
  {
    title: 'Assign competent people',
    text: 'Work is assigned according to competence, training, experience, vetting requirements, equipment availability and the level of supervision required.'
  },
  {
    title: 'Control the work area',
    text: 'Teams identify escape routes, establish safe access, protect residents and other building users, separate clean and contaminated equipment, and restrict access where necessary.'
  },
  {
    title: 'Use suitable equipment and products',
    text: 'Equipment, PPE, chemicals, sharps containers and waste packaging must be appropriate, serviceable and used according to assessment and manufacturer instructions.'
  },
  {
    title: 'Check and record outcomes',
    text: 'Operatives and supervisors use task checklists, attendance records, authorised photographs, inspections, client sign-off and exception reporting.'
  },
  {
    title: 'Learn and improve',
    text: 'Complaints, near misses, missed cleans, failed inspections, recalls and incidents are reviewed to identify causes, assign corrective action and prevent recurrence.'
  }
]

export const assuranceNavigation = [
  {
    title: 'Safety management',
    href: '/quality-safety/safety-management',
    text: 'Risk assessment, site induction, fire safety, manual handling, slips and trips, equipment, security and incident reporting.'
  },
  {
    title: 'Specialist controls',
    href: '/quality-safety/specialist-controls',
    text: 'Bodily fluids, sharps, suspected substances, contaminated waste, PPE, vulnerable residents and cross-contamination.'
  },
  {
    title: 'Quality assurance',
    href: '/quality-safety/quality-assurance',
    text: 'Inspections, audits, evidence, complaints, rectification, root cause and KPI reporting.'
  },
  {
    title: 'Training and competence',
    href: '/quality-safety/training-competence',
    text: 'Induction, specialist modules, supervised practice, competency sign-off and refreshers.'
  },
  {
    title: 'Emergency response',
    href: '/quality-safety/emergency-response',
    text: 'Call receipt, triage, allocation, dispatch, arrival tracking, welfare monitoring and contingency.'
  },
  {
    title: 'Policy library',
    href: '/policies',
    text: 'Individual public policies with status, ownership and review metadata.'
  },
  {
    title: 'Request assurance evidence',
    href: '/assurance/request-documents',
    text: 'Controlled requests for insurance, registrations, sample RAMS and assurance summaries.'
  }
]

export const controlledEvidenceStatement =
  'Controlled procedures, site-specific risk assessments, method statements, training records and supporting evidence are available to authorised clients and procurement teams through a controlled channel.'

export const restrictedEvidence = [
  'DBS certificates',
  'Personal training records',
  'Alarm instructions',
  'Client-specific RAMS',
  'Unapproved insurance policy numbers',
  'Incident records',
  'Waste notes and consignment details',
  'Personal telephone numbers',
  'Security-sensitive escalation details'
]

export const assurancePages: AssurancePage[] = [
  {
    slug: 'safety-management',
    title: 'Safety management from instruction to completion',
    summary:
      'Cleaning work can create or encounter wet floors, chemical exposure, manual handling, damaged property, poor lighting, unsafe access, discarded sharps, contamination, lone working, aggressive behaviour and unfamiliar building-security arrangements.',
    image: imagePaths.assurance,
    relatedPolicies: ['health-and-safety', 'lone-working', 'coshh', 'working-at-height-and-window-cleaning'],
    sections: [
      {
        title: 'Governance and accountability',
        body: [
          'The Director retains overall accountability. Day-to-day duties may be delegated to a contract manager, health and safety lead, scheduling lead, supervisors and operatives, but delegated tasks must be documented and monitored.'
        ],
        items: [
          'Risk assessment and method statements',
          'Competent staff allocation',
          'Site induction',
          'Equipment and PPE readiness',
          'Incident escalation',
          'Quality inspections',
          'Record completion',
          'Corrective action',
          'Policy review'
        ]
      },
      {
        title: 'Pre-attendance review',
        body: ['Before confirming work, Shinezone collects and assesses enough information to plan safely.'],
        items: [
          'Client and site contact',
          'Address and postcode',
          'Property type, size and number of floors',
          'Occupied or vacant status',
          'Vulnerable occupants or children',
          'Access, keys, alarms and lock-up duties',
          'Working hours and out-of-hours need',
          'Water and electricity availability',
          'Parking and loading',
          'Stairs, lifts and access limitations',
          'Sharps, bodily fluids, mould, pests or unknown chemicals',
          'Waste type and volume',
          'Heavy or bulky items',
          'Working at height',
          'Completion deadline',
          'Photographs where authorised',
          'Need for a survey or specialist subcontractor'
        ]
      },
      {
        title: 'Risk assessments and method statements',
        body: [
          'A suitable risk assessment identifies hazards, persons at risk, existing controls, additional controls, responsible persons, implementation dates, residual risk and review triggers.',
          'A method statement should explain arrival, sign-in, induction, dynamic checks, segregation, PPE, cleaning sequence, waste handling, decontamination, final inspection, security and escalation.'
        ]
      },
      {
        title: 'Dynamic risk assessment',
        body: [
          'Operatives should reassess work when conditions change, and every operative must have authority to stop and escalate unsafe work.'
        ],
        items: [
          'More contamination than reported',
          'Unexpected sharps or substances',
          'Aggressive or distressed occupants',
          'Blocked fire exits',
          'Damaged electrical fittings',
          'Unstable floors or ceilings',
          'Poor lighting',
          'Water leaks',
          'Unsafe access equipment',
          'Asbestos warnings',
          'Pest infestation',
          'Public access that cannot be controlled',
          'Communication failure',
          'PPE failure',
          'Worker illness'
        ]
      },
      {
        title: 'Site induction',
        items: [
          'Site contact',
          'Sign-in and sign-out',
          'Fire alarm and escape route',
          'Assembly point',
          'First aid',
          'Restricted areas',
          'Resident considerations',
          'Security',
          'Lone-working arrangements',
          'Welfare facilities',
          'Known hazards',
          'Incident route',
          'Lock-up and alarms'
        ]
      },
      {
        title: 'Fire, slips, manual handling and work at height',
        body: [
          'Teams must not obstruct fire exits, escape routes, fire doors, call points, extinguishers, emergency lighting or fire-service access.',
          'Wet-floor controls include cleaning in sections, keeping a dry route, restricting access, signs, barriers, spill response, cable management, adequate lighting and removing signs when the risk ends.',
          'Manual handling considers weight, shape, grip, distance, stairs, team lifting, trolleys, sharp edges, contamination and whether the item is within scope.',
          'Work at height is avoided where practicable. Where required, Shinezone selects the lowest-risk method, uses inspected equipment, competent staff and segregation below.'
        ]
      },
      {
        title: 'Electrical safety, equipment inspection and site security',
        body: [
          'Equipment is visually checked before use, maintained, cleaned, decontaminated, stored securely and removed from service if defective.',
          'Site security includes authorised key holders, key logs, secure code handling, visitor verification, closing checks, alarm-setting records, lost-key reporting and controlled photography.'
        ]
      },
      {
        title: 'Incident and near-miss reporting',
        body: [
          'Injuries, sharps incidents, chemical exposure, eye splashes, slips, aggression, equipment failure, property damage, security breaches, waste spills and unsafe conditions must be reported.'
        ],
        items: [
          'Make safe',
          'Obtain first aid or emergency support',
          'Notify the site contact where appropriate',
          'Notify Shinezone management',
          'Preserve evidence',
          'Record the event',
          'Assess statutory reporting',
          'Investigate',
          'Assign corrective action',
          'Share learning'
        ]
      },
      {
        title: 'Stop-work authority and records',
        body: [
          'Stop work when the instruction differs materially, PPE is unavailable, staff lack competence, suspected substances are present, violence is uncontrolled, access equipment is defective, structural or electrical hazards exist, segregation cannot be maintained or emergency services instruct the team to leave.',
          'Records include site information, RAMS, COSHH assessments, inductions, equipment checks, allocation records, attendance, dynamic-risk notes, incidents, inspections, corrective actions, sign-off and training evidence.'
        ]
      }
    ]
  },
  {
    slug: 'specialist-controls',
    title: 'Specialist controls for complex, sensitive and contaminated environments',
    summary:
      'Specialist cleaning requires assessment, containment, suitable people, appropriate PPE and equipment, a lawful waste route and an auditable completion process.',
    image: imagePaths.specialistPpe,
    relatedPolicies: ['sharps-and-contaminated-waste', 'safeguarding', 'coshh', 'waste-duty-of-care'],
    sections: [
      {
        title: 'Job classification',
        items: [
          'Level 1 - Enhanced routine: heavily soiled non-hazardous surfaces, end-of-tenancy cleaning without known contamination, communal deep cleaning, carpet extraction and floor treatment.',
          'Level 2 - Controlled specialist: localised bodily fluids, known contained sharps, heavy accumulation, agreed mould cleaning, post-pest-treatment cleaning and post-eviction work with controlled hazards.',
          'Level 3 - High-risk or unclear: widespread fluids, concealed sharps, suspected controlled substances, unknown chemicals, structural instability, severe biohazard, violent occupancy conditions or work outside Shinezone competence.'
        ]
      },
      {
        title: 'Occupied buildings and vulnerable residents',
        items: [
          'Confirm who is present',
          'Liaise with authorised contacts',
          'Explain work respectfully',
          'Protect dignity and privacy',
          'Avoid judgemental language',
          'Do not discuss residents publicly',
          'Maintain access routes',
          'Reduce disruption',
          'Secure chemicals and equipment',
          'Do not accept money or gifts',
          'Do not provide care, medication or restraint',
          'Report safeguarding concerns',
          'Avoid unnecessary personal data'
        ]
      },
      {
        title: 'Safeguarding controls',
        body: [
          'Staff should recognise possible physical, emotional, sexual, financial, discriminatory or organisational abuse, domestic abuse, neglect, self-neglect, exploitation and modern slavery.'
        ],
        items: [
          'Contact emergency services for immediate danger',
          'Listen without interrogating',
          'Do not promise absolute confidentiality',
          'Record facts and exact words',
          'Notify the safeguarding lead',
          'Follow the client escalation route',
          'Protect information',
          'Cooperate with lawful enquiries'
        ]
      },
      {
        title: 'Sharps and needles',
        body: [
          'Only trained and authorised staff may handle sharps. Anti-needle gloves reduce risk but do not eliminate it.'
        ],
        items: [
          'Do not touch by hand',
          'Do not bend, recap or manipulate',
          'Isolate the area and ensure lighting',
          'Use puncture-resistant gloves as a supplementary control',
          'Use forceps, tongs or an approved pickup tool',
          'Place the container close to the item',
          'Use an approved rigid sharps container',
          'Do not overfill or push items down',
          'Do not place hands into concealed areas',
          'Record quantity and location',
          'Escalate unusual quantities or suspected criminal activity',
          'Use a lawful disposal route'
        ]
      },
      {
        title: 'Sharps injury',
        items: [
          'Encourage gentle bleeding',
          'Wash with soap and running water',
          'Do not scrub or suck',
          'Cover with a waterproof dressing',
          'Obtain urgent medical advice',
          'Report immediately',
          'Complete records',
          'Review exposure-management and reporting requirements',
          'Investigate and update controls'
        ]
      },
      {
        title: 'Suspected illegal substances and unknown contamination',
        body: [
          'Staff must not taste, smell closely, sample, test, package, transport or dispose of a suspected substance without a specifically authorised lawful process.',
          'Do not disturb suspected asbestos, unknown powders, uncontrolled mould, untreated pest infestation, unstable debris or unidentified chemicals. Escalate to a competent specialist.'
        ]
      },
      {
        title: 'Bodily fluids',
        items: [
          'Restrict access',
          'Assess extent',
          'Select PPE',
          'Remove visible material safely',
          'Clean before disinfecting',
          'Use correct concentration and contact time',
          'Avoid aerosols',
          'Prevent cross-contamination',
          'Use dedicated or disposable equipment',
          'Bag waste correctly',
          'Decontaminate reusable equipment',
          'Remove PPE safely',
          'Perform hand hygiene',
          'Record completion and residual concerns'
        ]
      },
      {
        title: 'PPE, colour coding, COSHH and contaminated waste',
        body: [
          'PPE may include disposable gloves, heavy-duty gloves, anti-needle gloves, aprons, coveralls, eye protection, face shield, assessed respiratory protection, safety footwear and high-visibility clothing.',
          'Use separate equipment for toilets, washrooms, kitchens, general areas and specialist or isolation work, applying clean-to-dirty and high-to-low sequencing.',
          'Maintain an approved-product list, safety data sheets, COSHH assessments, controlled dilution, labels, locked storage, spill arrangements, PPE and training.',
          'Classify and segregate contaminated waste at source, use suitable containers, seal and label, store securely, use authorised carriers and facilities, complete documentation and audit subcontractors.'
        ]
      },
      {
        title: 'Completion',
        body: [
          'Confirm scope, remove waste, check residual sharps, leave surfaces safe, remove signs only when appropriate, record products where required, use authorised photographs, obtain sign-off and report exclusions or follow-up needs.'
        ]
      }
    ]
  },
  {
    slug: 'quality-assurance',
    title: 'Quality assurance, inspections and rectification',
    summary:
      'Quality assurance connects specification review, task checklists, attendance evidence, inspections, complaints, root cause and learning into one auditable workflow.',
    image: imagePaths.documents,
    relatedPolicies: ['complaints-and-rectification', 'training-and-competence', 'data-protection'],
    sections: [
      {
        title: 'Quality framework',
        items: [
          'Specification review before mobilisation',
          'Task checklists aligned to service type',
          'Attendance evidence and completion records',
          'Supervisor and joint inspections',
          'Authorised photographs where agreed',
          'Non-conformance log',
          'Complaint triage and rectification',
          'Root-cause analysis',
          'Corrective and preventive action',
          'Lessons learned',
          'KPI reporting',
          'Review meetings',
          'Document control',
          'Audit trail'
        ]
      },
      {
        title: 'Issue workflow',
        items: ['Issue', 'Make safe', 'Record', 'Assign', 'Rectify', 'Verify', 'Close', 'Learn']
      },
      {
        title: 'Configurable targets',
        body: [
          'Rectification targets must be configurable by contract. A six-hour target can be seeded where required, but the public website should not present it as a universal promise.'
        ]
      }
    ]
  },
  {
    slug: 'training-competence',
    title: 'Training and competence framework',
    summary:
      'Shinezone should allocate work only to people with the knowledge, instruction, training, experience, equipment and supervision required.',
    image: imagePaths.team,
    relatedPolicies: ['training-and-competence', 'health-and-safety', 'safeguarding'],
    sections: [
      {
        title: 'Core induction',
        items: [
          'Values and conduct',
          'Health and safety',
          'Incident reporting',
          'Fire awareness',
          'Manual handling',
          'Slips and trips',
          'COSHH',
          'PPE',
          'Cross-contamination',
          'Data protection',
          'Equality and dignity',
          'Safeguarding',
          'Lone working',
          'Site security',
          'Environmental controls'
        ]
      },
      {
        title: 'Specialist modules',
        items: [
          'Sharps',
          'Anti-needle glove limitations',
          'Bodily fluids',
          'Bio-contamination',
          'Hazardous or contaminated waste',
          'Drug paraphernalia',
          'Dynamic risk assessment',
          'Out-of-hours response',
          'Conflict awareness',
          'Vulnerable-resident environments',
          'Floor machinery',
          'Carpet extraction',
          'Reach-and-wash',
          'Working at height',
          'Lock-up and alarms'
        ]
      },
      {
        title: 'Competence verification',
        body: [
          'Use knowledge checks, practical demonstration, supervised work, observation, competent-person sign-off and restrictions until approved.'
        ]
      },
      {
        title: 'Public training matrix',
        body: ['Show role-to-module requirements, not staff names, dates of birth, DBS details or personal records.']
      }
    ]
  },
  {
    slug: 'emergency-response',
    title: 'Emergency and out-of-hours response controls',
    summary:
      'Where Shinezone offers urgent or out-of-hours service, it operates controlled call receipt, triage, allocation, dispatch, welfare monitoring, arrival recording and escalation.',
    image: imagePaths.hero,
    relatedPolicies: ['emergency-and-out-of-hours-response', 'lone-working', 'business-continuity'],
    sections: [
      {
        title: 'Call capture and authority check',
        items: [
          'Caller identity and authority',
          'Site and incident details',
          'Time received',
          'Immediate danger check',
          'Emergency-services involvement',
          'Occupancy and vulnerable residents',
          'Known hazards',
          'Access and site contact',
          `Verified response area: ${brand.serviceArea}`
        ]
      },
      {
        title: 'Triage',
        body: [
          'Requests are classified as immediate danger, controlled emergency scene, sharps, bodily fluids, unknown substance, slip hazard, security issue or standard urgent clean. Shinezone does not enter an uncontrolled emergency scene without appropriate authority.'
        ]
      },
      {
        title: 'Allocation and timeline',
        items: [
          'Competent team',
          'Minimum team size',
          'Vehicle and backup resource',
          'PPE, sharps kit, spill kit and waste containers',
          'Communication and welfare checks',
          'Record call received, triage, allocation, dispatch, arrival, start, completion, client notification, recall and rectification'
        ]
      },
      {
        title: 'Contingency',
        body: [
          'Use backup team, alternate vehicle, reserve equipment, approved specialist support and honest early warning where a target is at risk. Never publish two-hour claims unless verified.'
        ]
      }
    ]
  }
]

export const policies: PolicyDocument[] = [
  {
    ...draftMeta,
    slug: 'health-and-safety',
    title: 'Health and Safety Policy',
    category: 'Safety',
    summary:
      'Protects the health, safety and welfare of employees, subcontractors, clients, residents, visitors and anyone affected by Shinezone work.',
    appliesTo: [
      'Directors',
      'Employees',
      'Temporary and agency workers',
      'Subcontractors',
      'Company premises',
      'Vehicles',
      'Client sites'
    ],
    relatedPolicies: [
      'lone-working',
      'coshh',
      'working-at-height-and-window-cleaning',
      'emergency-and-out-of-hours-response'
    ],
    sections: [
      {
        title: 'Policy statement',
        body: [
          'Shinezone is committed to conducting cleaning and property-support activities in a manner that protects, so far as reasonably practicable, the health, safety and welfare of employees, subcontractors, clients, residents, visitors and anyone affected by its work.',
          'Health and safety is an operational requirement. Work must be planned, resourced, supervised and reviewed according to the hazards involved.'
        ]
      },
      {
        title: 'Commitments',
        items: [
          'Maintain clear responsibilities and competent advice',
          'Assess significant risks',
          'Develop safe systems of work',
          'Provide information, instruction, training and supervision',
          'Provide and maintain suitable equipment',
          'Provide PPE where risks remain',
          'Consult workers',
          'Investigate incidents and near misses',
          'Protect lone and out-of-hours workers',
          'Manage chemicals and biological hazards',
          'Control manual handling and work at height',
          'Maintain fire and emergency arrangements',
          'Permit stop-work decisions',
          'Monitor performance',
          'Review the policy annually and after significant change'
        ]
      },
      {
        title: 'Responsibilities',
        body: [
          'The Director approves the policy, allocates resources, appoints competent support, reviews performance and ensures serious risks are escalated. Managers and supervisors plan work, complete assessments, verify competence, provide PPE and equipment, inspect work, respond to incidents and enforce controls. Workers and subcontractors follow training and safe systems, use equipment correctly, wear PPE, report hazards, avoid improvisation, cooperate with investigations and stop unsafe work.'
        ]
      },
      {
        title: 'Supporting arrangements and monitoring',
        items: [
          'Risk-assessment and method-statement procedure',
          'COSHH process',
          'Lone-working policy',
          'Incident-reporting procedure',
          'Sharps and contaminated-waste procedure',
          'Working-at-height policy',
          'Equipment-inspection process',
          'Training matrix',
          'Emergency response',
          'Business continuity',
          'Accident trends, near misses, training, defects, PPE, audits, corrective actions, complaints and subcontractor performance'
        ]
      }
    ]
  },
  {
    ...draftMeta,
    slug: 'environmental-sustainability',
    title: 'Environmental and Sustainability Policy',
    category: 'Environmental',
    summary: 'Reduces environmental effects while maintaining safe, hygienic and effective cleaning outcomes.',
    appliesTo: ['Employees', 'Subcontractors', 'Suppliers', 'Client sites'],
    relatedPolicies: ['waste-duty-of-care', 'coshh'],
    sections: [
      {
        title: 'Policy statement',
        body: [
          'Shinezone aims to reduce the environmental effects of cleaning operations while maintaining safe, hygienic and effective outcomes. Decisions should consider chemicals, water, energy, transport, equipment life, packaging, waste and purchasing.'
        ]
      },
      {
        title: 'Objectives',
        items: [
          'Prevent pollution',
          'Meet environmental and waste obligations',
          'Reduce avoidable chemical use',
          'Use accurate dilution',
          'Reduce water and energy use',
          'Reduce unnecessary single-use materials',
          'Increase durable and reusable equipment where safe',
          'Segregate waste correctly',
          'Use authorised waste providers',
          'Reduce unnecessary journeys',
          'Monitor performance',
          'Encourage supplier improvement',
          'Train staff'
        ]
      },
      {
        title: 'Operational controls',
        body: [
          'Maintain an approved product list, controlled dilution, environmental hazard assessment, safe storage, spill controls and review of lower-impact alternatives.',
          'Use the minimum effective water quantity, report leaks, plan for sites without water and prevent inappropriate discharge.',
          'Group work geographically, plan routes, maintain vehicles, avoid unnecessary idling and prevent transport spills.',
          'Apply the waste hierarchy: prevention, reuse, recycling, recovery and disposal where safe and lawful.'
        ]
      },
      {
        title: 'Targets and monitoring',
        items: [
          'Single-use plastic reduction target to be approved',
          'Route-mileage reduction target to be approved',
          'Environmental training target to be approved',
          'Dilution-compliance target to be approved',
          'Track product use, dilution exceptions, waste records, spill incidents, mileage, equipment replacement and staff training'
        ]
      }
    ]
  },
  {
    ...draftMeta,
    slug: 'safeguarding',
    title: 'Safeguarding Policy',
    category: 'Workforce',
    summary:
      'Sets conduct and escalation controls for work in homes, temporary accommodation, communal housing and supported-living environments.',
    appliesTo: ['Employees', 'Supervisors', 'Subcontractors', 'Supported living and housing sites'],
    relatedPolicies: ['data-protection', 'lone-working', 'training-and-competence'],
    sections: [
      {
        title: 'Policy statement',
        body: [
          'Shinezone recognises that cleaning staff may work in environments where adults or children may be at increased risk of abuse, neglect or exploitation. Shinezone does not investigate safeguarding concerns; it reduces risk arising from its own work, recognises concerns, responds appropriately and reports through agreed channels.'
        ]
      },
      {
        title: 'Principles',
        items: [
          'Safety and wellbeing',
          'Respect and dignity',
          'Person-centred response',
          'Proportionate action',
          'Accountability',
          'Need-to-know confidentiality',
          'Non-discrimination',
          'Prompt escalation',
          'Factual recording',
          'Cooperation with statutory agencies'
        ]
      },
      {
        title: 'Safer recruitment and staff conduct',
        items: [
          'Identity and right-to-work checks',
          'References and employment-history review',
          'DBS checks where eligible and required',
          'Safeguarding training',
          'Code of conduct',
          'Supervised induction',
          'Restrictions on lone access until competence is confirmed',
          'No unauthorised private areas, unapproved photographs, resident information disclosure, gifts, personal care, medication, restraint or humiliating language'
        ]
      },
      {
        title: 'Recognising concerns and response',
        body: [
          'Potential concerns include physical, emotional, sexual, financial, discriminatory or organisational abuse; domestic abuse; neglect; self-neglect; exploitation; modern slavery; coercion or unsafe living conditions.',
          'For immediate danger, contact emergency services, inform the authorised site contact and Shinezone safeguarding lead. Otherwise listen without investigating, record facts and exact words, do not confront an alleged perpetrator, report promptly and preserve confidentiality.'
        ]
      }
    ]
  },
  {
    ...draftMeta,
    slug: 'lone-working',
    title: 'Lone-Working Policy',
    category: 'Safety',
    summary:
      'Avoids lone working where risk requires more than one person and sets monitoring and escalation controls.',
    appliesTo: ['Lone workers', 'Supervisors', 'Scheduling team'],
    relatedPolicies: ['health-and-safety', 'emergency-and-out-of-hours-response'],
    sections: [
      {
        title: 'Policy statement',
        body: [
          'Shinezone will avoid lone working where risk requires more than one person. Where lone work is allowed, risks must be assessed and communication, monitoring, escalation and emergency arrangements established.'
        ]
      },
      {
        title: 'Assessment',
        items: [
          'Property occupancy',
          'Time and location',
          'Mobile signal',
          'Known aggression',
          'Sharps or contamination',
          'Manual handling',
          'Work at height',
          'Isolated areas',
          'Lock-up duties',
          'Worker competence',
          'Emergency access'
        ]
      },
      {
        title: 'Work normally prohibited alone',
        items: [
          'Significant biohazard cleaning',
          'Concealed-sharps clearance',
          'Heavy team-lift work',
          'Work at height requiring assistance',
          'Sites with known uncontrolled violence',
          'Unknown-substance incidents',
          'High-risk lock-up in isolated settings',
          'Tasks where prompt rescue cannot be arranged'
        ]
      },
      {
        title: 'Check-in and missed-check controls',
        body: [
          'Record worker, site, expected arrival and departure, check-in, check-out, escalation contact and missed-check response. Do not publish exact security timings or personal numbers.'
        ]
      }
    ]
  },
  {
    ...draftMeta,
    slug: 'coshh',
    title: 'COSHH Policy and Process',
    category: 'Specialist cleaning',
    summary:
      'Prevents or adequately controls exposure to hazardous substances arising from chemicals, biological contamination, dusts, aerosols and generated substances.',
    appliesTo: ['Employees', 'Supervisors', 'Subcontractors', 'Client sites'],
    relatedPolicies: ['health-and-safety', 'environmental-sustainability', 'sharps-and-contaminated-waste'],
    sections: [
      {
        title: 'Policy statement',
        body: [
          'Shinezone will prevent or adequately control exposure to hazardous substances arising from chemicals, biological contamination, dusts, aerosols and substances generated during work.'
        ]
      },
      {
        title: 'Process',
        items: [
          'Maintain a current product and substance inventory',
          'Maintain safety data sheets and manufacturer instructions',
          'Assess route of exposure, quantity, concentration, ventilation, persons exposed, mixing, spills, biological contamination, storage and transport',
          'Eliminate unnecessary use, substitute where safer, use controls and safe working methods, limit duration and use PPE as the final layer',
          'Communicate hazards, dilution, PPE, first aid, spill response, storage, disposal and incompatibilities',
          'Review after product changes, incidents, worker symptoms, new tasks, new site conditions or updated safety information'
        ]
      },
      {
        title: 'Rules',
        items: [
          'No unapproved products',
          'No food or drink containers',
          'No unlabelled bottles',
          'No incompatible mixing',
          'No work beyond competence',
          'No assumption that natural or eco means non-hazardous',
          'No tight-fitting RPE without suitable assessment and fit requirements'
        ]
      },
      {
        title: 'Storage, transport and health surveillance',
        body: [
          'Use labelled containers, secure upright transport, segregation of incompatible products, restricted access, spill provisions and stock controls. Where assessment indicates a need, seek competent advice and establish suitable health-surveillance arrangements.'
        ]
      }
    ]
  },
  {
    ...draftMeta,
    slug: 'sharps-and-contaminated-waste',
    title: 'Sharps and Contaminated-Waste Policy',
    category: 'Specialist cleaning',
    summary:
      'Protects workers, clients, residents and the environment from injury, infection and exposure arising from sharps, drug paraphernalia, bodily-fluid waste and contaminated materials.',
    appliesTo: ['Authorised sharps handlers', 'Supervisors', 'Waste handlers'],
    relatedPolicies: ['coshh', 'waste-duty-of-care', 'safeguarding'],
    sections: [
      {
        title: 'Scope',
        body: [
          'Needles, syringes, contaminated blades, razors, broken glass, bodily-fluid waste, contaminated PPE, absorbent materials and other hazardous or clinical-type waste.'
        ]
      },
      {
        title: 'Requirements',
        items: [
          'Trained and authorised staff',
          'Task-specific assessment',
          'Correct PPE',
          'Approved pickup tools',
          'Rigid sharps containers',
          'Correct bags and containers',
          'Secure segregation',
          'Authorised carrier and facility',
          'Correct paperwork',
          'Exposure response',
          'Audit trail'
        ]
      },
      {
        title: 'Sharps handling and unknown substances',
        body: [
          'Do not handle by hand, bend, break or recap. Isolate the area, use good lighting, use tools, place the container close, never overfill, never push down and never place hands where visibility is poor.',
          'Unknown powders, liquids or suspected drugs must not be handled as routine waste. Stop, isolate and escalate.'
        ]
      },
      {
        title: 'Waste documentation and spills',
        body: [
          'Record date, site, waste description, quantity, container, carrier, destination, transfer or consignment reference, staff and exceptions. For spill or container failure, stop work, isolate, use the assessed spill response, notify management, repackage safely, record and investigate.'
        ]
      }
    ]
  },
  {
    ...draftMeta,
    slug: 'complaints-and-rectification',
    title: 'Complaints, Non-Conformance and Rectification Policy',
    category: 'Quality',
    summary:
      'Uses complaints and non-conformance as opportunities to make work safe, correct failures and improve systems.',
    appliesTo: ['Clients', 'Employees', 'Supervisors', 'Operations team'],
    relatedPolicies: ['quality-assurance', 'data-protection'],
    sections: [
      {
        title: 'Policy statement',
        body: [
          'Shinezone welcomes concerns and complaints as opportunities to make work safe, correct failures and improve systems.'
        ]
      },
      {
        title: 'Channels and process',
        items: [
          'Telephone, email, website form, contract meeting, portal or written correspondence',
          'Receipt: record time, complainant, site, service, issue, immediate risk and requested outcome',
          'Triage: classify safety, safeguarding, security, quality, conduct, damage, data, billing, environmental or other',
          'Containment: make safe, stop activity, preserve evidence, replace staff, arrange rectification or escalate',
          'Investigation: review booking, attendance, allocation, RAMS, checklist, photographs, products, equipment, communications and staff accounts',
          'Resolution: re-clean, repair or insurance referral, apology, retraining, procedure revision, supervision, supplier action or explained no-fault finding',
          'Closure: record actions, date, evidence, client response, approval and preventive action'
        ]
      },
      {
        title: 'Rectification and escalation',
        body: [
          'Configure targets by contract. Where a six-hour target applies, the trigger, owner, deadline and completion time must be auditable. Do not promise a universal six-hour service unless supported.',
          'A dissatisfied complainant may request management review by someone not responsible for the initial decision where practicable.'
        ]
      }
    ]
  },
  {
    ...draftMeta,
    slug: 'business-continuity',
    title: 'Business Continuity Policy',
    category: 'Governance',
    summary:
      'Maintains proportionate arrangements to continue priority services, communicate with clients and recover operations after disruption.',
    appliesTo: ['Management', 'Operations', 'Scheduling', 'Supervisors'],
    relatedPolicies: ['emergency-and-out-of-hours-response', 'data-protection'],
    sections: [
      {
        title: 'Scenarios',
        items: [
          'Staff shortage',
          'Vehicle breakdown',
          'Equipment failure',
          'PPE or chemical shortage',
          'IT or telephone outage',
          'Severe weather',
          'Fuel disruption',
          'Loss of premises',
          'Supply-chain failure',
          'Cyber incident',
          'Communicable illness',
          'Major incident',
          'Subcontractor failure',
          'Utility outage',
          'Local access restrictions'
        ]
      },
      {
        title: 'Continuity strategies',
        items: [
          'Cross-trained reserve staff',
          'Standby supervisors',
          'Alternative vehicles',
          'Backup equipment',
          'Minimum stock levels',
          'Approved alternate suppliers',
          'Secure cloud records',
          'Manual booking log',
          'Multiple contact routes',
          'Approved subcontract support',
          'Priority for emergency and safety-critical work'
        ]
      },
      {
        title: 'Activation and testing',
        body: [
          'Define who activates the plan, incident lead, communication owner, client notification, staff briefing, decision log, recovery and post-incident review. Test at least annually and after major change.'
        ]
      }
    ]
  },
  {
    ...draftMeta,
    slug: 'data-protection',
    title: 'Data Protection Policy',
    category: 'Data/privacy',
    summary:
      'Processes personal information lawfully, fairly, transparently and securely, using only what is necessary.',
    appliesTo: ['Employees', 'Admins', 'Clients', 'Suppliers'],
    relatedPolicies: ['safeguarding', 'complaints-and-rectification'],
    sections: [
      {
        title: 'Policy statement and likely data',
        body: [
          'Shinezone will process personal information lawfully, fairly, transparently and securely, using only what is necessary for defined purposes.',
          'Likely data includes client and staff contacts, supplier details, bookings, access information, complaints, incidents, authorised photographs, vetting or training evidence and limited resident information required for safe delivery.'
        ]
      },
      {
        title: 'Data minimisation and principles',
        body: [
          'Do not request resident diagnoses, full care plans, medication information, unrelated identity documents or unnecessary sensitive histories.'
        ],
        items: [
          'Lawfulness, fairness and transparency',
          'Purpose limitation',
          'Data minimisation',
          'Accuracy',
          'Storage limitation',
          'Integrity and confidentiality',
          'Accountability'
        ]
      },
      {
        title: 'Security, photographs, rights and breaches',
        body: [
          'Use role-based access, strong authentication, least privilege, device controls, encryption where appropriate, secure backups, private storage, controlled sharing, audit logs, secure disposal, training and incident response.',
          'Photographs require client authority, should avoid identifiable people and personal documents, must have a defined purpose and secure storage, and need separate permission for marketing.',
          'Breaches must be reported internally immediately, contained, assessed, documented and notified where legally required.'
        ]
      }
    ]
  },
  {
    ...draftMeta,
    slug: 'modern-slavery',
    title: 'Modern Slavery and Human Trafficking Statement',
    category: 'Supply chain',
    summary: 'Opposes slavery, forced labour, servitude, trafficking, debt bondage and exploitative labour practices.',
    appliesTo: ['Workers', 'Suppliers', 'Subcontractors', 'Management'],
    relatedPolicies: ['safeguarding', 'equality-diversity-inclusion'],
    sections: [
      {
        title: 'Commitment and risk areas',
        body: [
          'Shinezone opposes slavery, forced labour, servitude, trafficking, debt bondage and exploitative labour practices.',
          'Risk areas include agency labour, temporary workers, labour subcontractors, uniform/PPE suppliers, chemical suppliers, waste contractors and equipment or vehicle services.'
        ]
      },
      {
        title: 'Controls',
        items: [
          'Supplier due diligence',
          'Right-to-work checks',
          'Clear contracts',
          'Direct worker communication',
          'No recruitment fees charged to workers',
          'Review of unusual wage deductions',
          'Whistleblowing',
          'Contract clauses',
          'Supplier monitoring',
          'Management investigation'
        ]
      },
      {
        title: 'Indicators and reporting',
        body: [
          'Indicators include identity documents withheld, third-party wage control, fear or coercion, controlled transport or accommodation, dependence on one intermediary, excessive deductions, inability to leave or debt bondage.',
          'Report concerns to management and appropriate statutory bodies. Use emergency services where immediate danger exists.'
        ]
      }
    ]
  },
  {
    ...draftMeta,
    slug: 'equality-diversity-inclusion',
    title: 'Equality, Diversity and Inclusion Policy',
    category: 'Workforce',
    summary:
      'Commits to fair treatment, equal opportunity, dignity and inclusion for workers, applicants, clients, residents and suppliers.',
    appliesTo: ['Workers', 'Applicants', 'Clients', 'Residents', 'Suppliers'],
    relatedPolicies: ['safeguarding', 'modern-slavery'],
    sections: [
      {
        title: 'Policy statement',
        body: [
          'Shinezone is committed to fair treatment, equal opportunity, dignity and inclusion for workers, applicants, clients, residents, suppliers and the public.'
        ]
      },
      {
        title: 'Commitments',
        items: [
          'No unlawful discrimination',
          'Fair recruitment',
          'Reasonable adjustments',
          'Accessible communication',
          'Equal development opportunities',
          'Respectful conduct',
          'Response to harassment',
          'Inclusive delivery',
          'Proportionate monitoring',
          'Fair complaints'
        ]
      },
      {
        title: 'Recruitment, delivery and harassment',
        body: [
          'Use role-based criteria, consistent questions, recorded decisions, reasonable adjustments, inclusive language and trained decision-makers.',
          'Use respectful language, follow communication needs, avoid assumptions, protect privacy, report access barriers and challenge discriminatory conduct safely.',
          'Investigate harassment and victimisation fairly and prohibit retaliation against people who raise good-faith concerns.'
        ]
      }
    ]
  },
  {
    ...draftMeta,
    slug: 'training-and-competence',
    title: 'Training and Competence Policy',
    category: 'Workforce',
    summary:
      'Allocates work only to people with the knowledge, instruction, training, experience, equipment and supervision required.',
    appliesTo: ['Employees', 'Supervisors', 'Subcontractors'],
    relatedPolicies: ['health-and-safety', 'safeguarding', 'coshh'],
    sections: [
      {
        title: 'Core induction',
        items: [
          'Values and conduct',
          'Health and safety',
          'Incident reporting',
          'Fire awareness',
          'Manual handling',
          'Slips and trips',
          'COSHH',
          'PPE',
          'Cross-contamination',
          'Data protection',
          'Equality and dignity',
          'Safeguarding',
          'Lone working',
          'Site security',
          'Environmental controls'
        ]
      },
      {
        title: 'Specialist modules',
        items: [
          'Sharps',
          'Anti-needle glove limitations',
          'Bodily fluids',
          'Bio-contamination',
          'Hazardous or contaminated waste',
          'Drug paraphernalia',
          'Dynamic risk assessment',
          'Out-of-hours response',
          'Conflict awareness',
          'Vulnerable-resident environments',
          'Floor machinery',
          'Carpet extraction',
          'Reach-and-wash',
          'Working at height',
          'Lock-up and alarms'
        ]
      },
      {
        title: 'Competence verification and refreshers',
        body: [
          'Use knowledge checks, practical demonstration, supervised work, observation, competent-person sign-off and restrictions until approved.',
          'Refreshers are triggered by expiry, incident, failed observation, new equipment or product, procedure change, long absence, new environment or supervisor concern.'
        ]
      },
      {
        title: 'Public training matrix',
        body: ['Show role-to-module requirements, not staff names, dates of birth, DBS details or personal records.']
      }
    ]
  },
  {
    ...draftMeta,
    slug: 'waste-duty-of-care',
    title: 'Waste Duty of Care Policy',
    category: 'Environmental',
    summary:
      'Manages waste so it does not harm people or the environment and is transferred only through lawful authorised routes.',
    appliesTo: ['Waste handlers', 'Supervisors', 'Subcontractors'],
    relatedPolicies: ['environmental-sustainability', 'sharps-and-contaminated-waste'],
    sections: [
      {
        title: 'Controls',
        items: [
          'Identify producer or holder',
          'Classify correctly',
          'Separate incompatible waste',
          'Use suitable containers',
          'Prevent escape',
          'Store securely',
          'Verify carrier registration',
          'Verify receiving facility',
          'Complete documents',
          'Retain records',
          'Audit subcontractors',
          'Investigate rejected loads or spills'
        ]
      },
      {
        title: 'Bulky waste',
        body: [
          'Assess authorisation, handling risk, WEEE or refrigerant issues, contamination, cost, vehicle and destination.'
        ]
      },
      {
        title: 'Prohibited',
        body: [
          'Fly-tipping, domestic bins without authority, unverified carriers, hiding hazardous waste in general waste, burning, abandonment or inaccurate documents are prohibited.'
        ]
      }
    ]
  },
  {
    ...draftMeta,
    slug: 'working-at-height-and-window-cleaning',
    title: 'Working at Height and Window-Cleaning Policy',
    category: 'Safety',
    summary: 'Avoids work at height where practicable and selects methods that reduce fall risk.',
    appliesTo: ['Window-cleaning teams', 'Supervisors', 'Subcontractors'],
    relatedPolicies: ['health-and-safety', 'training-and-competence'],
    sections: [
      {
        title: 'Hierarchy',
        items: ['Avoid', 'Prevent falls', 'Minimise consequences', 'Train and supervise']
      },
      {
        title: 'Methods',
        body: [
          'Prefer ground-level methods and reach-and-wash systems. Use specialist subcontractors for complex access where approved.'
        ]
      },
      {
        title: 'Controls',
        body: [
          'Controls include site assessment, ground conditions, exclusion zones, weather, overhead cables, fragile surfaces, equipment inspection, competence, rescue planning where relevant, damage reporting, window-restrictor reporting and no overreaching or improvised access.'
        ]
      }
    ]
  },
  {
    ...draftMeta,
    slug: 'emergency-and-out-of-hours-response',
    title: 'Emergency and Out-of-Hours Response Policy',
    category: 'Governance',
    summary:
      'Controls urgent service through call receipt, triage, allocation, dispatch, welfare monitoring, arrival recording and escalation.',
    appliesTo: ['Operations team', 'Supervisors', 'Emergency response teams'],
    relatedPolicies: ['business-continuity', 'lone-working', 'health-and-safety'],
    sections: [
      {
        title: 'Policy statement',
        body: [
          'Where Shinezone offers emergency or out-of-hours service, it will operate controlled call receipt, triage, allocation, dispatch, welfare monitoring, arrival recording and escalation.'
        ]
      },
      {
        title: 'Call capture',
        body: [
          'Capture caller identity, authority, site, incident, time, immediate danger, emergency services, occupancy, hazards, access, contact and response target.'
        ]
      },
      {
        title: 'Triage and allocation',
        body: [
          'Classify immediate danger, controlled emergency scene, sharps, bodily fluids, unknown substance, slip hazard, security issue or standard urgent clean. Do not enter an uncontrolled emergency scene without appropriate authority.',
          'Check competent team, minimum team size, vehicle, PPE, sharps or spill kits, waste containers, communication, travel and backup resource.'
        ]
      },
      {
        title: 'Timeline and contingency',
        body: [
          'Record call received, triage, allocation, dispatch, arrival, start, completion, client notification, recall and rectification.',
          'Use backup team, alternate vehicle, reserve equipment, approved specialist support and honest early warning where a target is at risk. Never publish two-hour or 24/7 claims unless verified.'
        ]
      }
    ]
  }
]

export const assuranceDocumentCategories = [
  {
    title: 'Health and safety',
    documents: ['Health and Safety Policy', 'Example RAMS templates', 'Incident process', 'Equipment framework']
  },
  {
    title: 'Workforce',
    documents: [
      'Safer-recruitment summary',
      'DBS process',
      'Training framework',
      'Anonymised compliance summary',
      'Code of conduct'
    ]
  },
  {
    title: 'Specialist cleaning',
    documents: [
      'COSHH process',
      'Sharps procedure',
      'Bodily-fluid process',
      'Contaminated-waste procedure',
      'Emergency-response process'
    ]
  },
  {
    title: 'Quality',
    documents: [
      'Quality framework',
      'Audit template',
      'Complaint and rectification process',
      'Corrective-action template',
      'KPI framework'
    ]
  },
  {
    title: 'Corporate',
    documents: [
      'Insurance',
      'Waste registration',
      'Company registration',
      'Modern-slavery statement',
      'Environmental policy'
    ]
  }
]

export const assuranceRequestStatuses = [
  'submitted',
  'under review',
  'information required',
  'approved',
  'partially approved',
  'declined',
  'secure link issued',
  'completed',
  'expired'
]

export function getAssurancePage(slug: string) {
  return assurancePages.find(page => page.slug === slug)
}

export function getPolicy(slug: string) {
  return policies.find(policy => policy.slug === slug)
}
