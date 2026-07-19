export type Service = {
  slug: string
  title: string
  shortTitle: string
  summary: string
  image: string
  suitableFor: string[]
  propertyTypes: string[]
  scope: string[]
  exclusions: string[]
  process: string[]
  controls: string[]
  equipment: string[]
  qa: string[]
  faqs: { question: string; answer: string }[]
}

export type Sector = {
  title: string
  summary: string
  challenges: string[]
  approach: string[]
  services: string[]
}

export const brand = {
  name: 'Shinezone',
  legalName: 'Shinezone Ltd.',
  companyNumber: '16825930',
  representative: 'Dzulani Ndou',
  address: '7 Bowles Way, Dunstable, LU6 3LX',
  phone: '+44 7761 659901',
  emergencyPhone: '+44 7761 659901',
  email: 'admin@shinezone.co.uk',
  quotationsEmail: 'dzulani@shinezone.co.uk',
  serviceArea: 'Bedfordshire, Hertfordshire, Buckinghamshire, North London and surrounding counties',
  normalHours: '8:00am to 6:00pm',
  emergencyHours: '24 hours for pre-booked urgent work, including weekends and holidays'
}

export const imagePaths = {
  favicon: '/images/shinezone/favicon.svg',
  hero: '/images/shinezone/new-images/pexels-tima-miroshnichenko-6195129.jpg',
  commercial: '/images/shinezone/new-images/ashwini-chaudhary-monty--4KzDiyZjgw-unsplash.jpg',
  upholstery: '/images/shinezone/giorgio-trovato-5TXz228u4eo-unsplash.jpg',
  clinical: '/images/shinezone/new-images/pexels-michelangelo-buonarroti-4176042.jpg',
  carpet: '/images/shinezone/new-images/california-steam-dry-carpet-cleaning-Ddzir2TCR2g-unsplash (1).jpg',
  pressure: '/images/shinezone/the-graphic-space-X93z_JSoHo8-unsplash.jpg',
  pressureDetail: '/images/shinezone/the-graphic-space-kLZs4yoR0uU-unsplash.jpg',
  spray: '/images/shinezone/jeshoots-com-__ZMnefoI3k-unsplash.jpg',
  specialistPpe: '/images/shinezone/new-images/pexels-michelangelo-buonarroti-4176042.jpg',
  team: '/images/shinezone/new-images/pexels-tima-miroshnichenko-6195129.jpg',
  assurance: '/images/shinezone/new-images/ashwini-chaudhary-monty--4KzDiyZjgw-unsplash.jpg',
  documents: '/images/shinezone/towfiqu-barbhuiya--9gPKrsbGmc-unsplash.jpg'
}

export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Sectors', href: '/sectors' },
  { label: 'Quality & Safety', href: '/quality-safety' },
  { label: 'About', href: '/about' },
  { label: 'Book a Service', href: '/book' }
]

export const capabilityStrip = [
  'Commercial and specialist cleaning',
  'Risk-assessed working methods',
  'Trained and vetted workforce',
  'Environmentally responsible practices',
  'Scheduled nationwide requests',
  'Rapid response in verified areas'
]

export const services: Service[] = [
  {
    slug: 'commercial-cleaning',
    title: 'Commercial Cleaning',
    shortTitle: 'Commercial',
    summary:
      'Routine and one-off cleaning for offices, retail spaces, communal workplaces and managed commercial premises.',
    image: imagePaths.commercial,
    suitableFor: ['Offices', 'Retail premises', 'Community premises', 'Property managers'],
    propertyTypes: ['Workspaces', 'Washrooms', 'Kitchens', 'High-touch common areas'],
    scope: ['High-touch surface cleaning', 'Washrooms and kitchens', 'Floors and fixtures', 'Scheduled cleaning plans'],
    exclusions: ['Specialist waste removal unless quoted', 'Unsafe access areas without a risk review'],
    process: ['Confirm scope', 'Assess access and risk', 'Agree schedule', 'Deploy team', 'Inspect and sign off'],
    controls: ['COSHH controls', 'Colour-coded equipment', 'Wet-floor controls', 'Site security procedures'],
    equipment: ['Microfibre systems', 'Mops and floor tools', 'Approved chemicals', 'PPE'],
    qa: ['Supervisor checks', 'Digital checklist', 'Client sign-off', 'Issue rectification record'],
    faqs: [
      {
        question: 'Can Shinezone clean outside normal office hours?',
        answer:
          'Yes, out-of-hours work can be requested and is confirmed once access, security and staffing are agreed.'
      }
    ]
  },
  {
    slug: 'communal-block-cleaning',
    title: 'Communal Block Cleaning',
    shortTitle: 'Communal Blocks',
    summary: 'Cleaning plans for entrances, corridors, stairwells, lifts and shared facilities in managed blocks.',
    image: imagePaths.clinical,
    suitableFor: ['Housing associations', 'Local authorities', 'Block managers', 'Landlords'],
    propertyTypes: ['Low-rise blocks', 'High-rise blocks', 'Shared accommodation', 'Temporary accommodation'],
    scope: ['Corridors and stairs', 'Entrance areas', 'Lifts and touchpoints', 'Bin areas where instructed'],
    exclusions: ['Resident belongings', 'Restricted plant rooms unless authorised'],
    process: ['Review building schedule', 'Notify residents where required', 'Clean common areas', 'Record findings'],
    controls: ['Resident-sensitive working', 'Manual handling', 'Wet-floor signage', 'Site access controls'],
    equipment: ['Colour-coded cloths', 'Vacuum systems', 'Floor tools', 'Waste sacks'],
    qa: ['Inspection rotation', 'Photographic evidence where agreed', 'Non-conformance log', 'Monthly review'],
    faqs: [
      {
        question: 'Can cleaning-day notices be provided?',
        answer: 'Yes, the operational process can include resident notices for agreed communal cleaning schedules.'
      }
    ]
  },
  {
    slug: 'end-of-tenancy-cleaning',
    title: 'End-of-Tenancy Cleaning',
    shortTitle: 'End of Tenancy',
    summary: 'Turnaround cleaning for vacant properties, shared accommodation and managed lettings.',
    image: imagePaths.carpet,
    suitableFor: ['Estate agents', 'Letting agents', 'Housing providers', 'Landlords'],
    propertyTypes: ['Studios', 'One- to five-bedroom homes', 'Shared accommodation', 'Temporary accommodation'],
    scope: ['Kitchens and appliances', 'Bathrooms', 'Internal windows', 'Carpets and floors', 'Condition photos'],
    exclusions: ['Major repairs', 'Hazardous waste not declared before attendance'],
    process: [
      'Collect condition details',
      'Estimate crew and duration',
      'Attend site',
      'Inspect and certify completion'
    ],
    controls: ['Dynamic risk assessment', 'PPE', 'COSHH', 'Waste screening'],
    equipment: ['Vacuum and floor care', 'Appliance cleaning tools', 'Steam or extraction equipment where quoted'],
    qa: ['Before-and-after photos with permission', 'Completion certificate', 'Supervisor inspection'],
    faqs: [
      {
        question: 'Why does the booking form ask about bedrooms and hazards?',
        answer: 'Crew size and duration can vary heavily by property condition, hazards, waste and access constraints.'
      }
    ]
  },
  {
    slug: 'post-eviction-cleaning',
    title: 'Post-Eviction Cleaning',
    shortTitle: 'Post-Eviction',
    summary: 'Controlled property cleaning after eviction or abandonment, with risk screening before attendance.',
    image: imagePaths.pressureDetail,
    suitableFor: ['Housing providers', 'Property managers', 'Landlords', 'Letting agents'],
    propertyTypes: ['Flats', 'Houses', 'Temporary accommodation', 'Shared buildings'],
    scope: ['Initial condition review', 'Deep cleaning', 'Waste assessment', 'Hazard escalation'],
    exclusions: ['Unknown substances outside approved procedure', 'Structural repairs'],
    process: ['Screen hazards', 'Plan PPE and waste route', 'Secure site', 'Clean and document outcome'],
    controls: ['Sharps awareness', 'Biohazard escalation', 'Lone-worker controls', 'Controlled access'],
    equipment: ['PPE', 'Sharps containers where required', 'Heavy-duty cleaning tools', 'Waste containment'],
    qa: ['Risk record', 'Photographic evidence', 'Client sign-off', 'Rectification workflow'],
    faqs: [
      {
        question: 'Can Shinezone handle unknown substances?',
        answer: 'Unknown substances are escalated and handled only through approved safe procedures.'
      }
    ]
  },
  {
    slug: 'temporary-accommodation-cleaning',
    title: 'Temporary Accommodation Cleaning',
    shortTitle: 'Temporary Accommodation',
    summary: 'Respectful cleaning for temporary accommodation, including occupied and shared environments.',
    image: imagePaths.clinical,
    suitableFor: ['Councils', 'Temporary accommodation providers', 'Housing teams'],
    propertyTypes: ['Hostels', 'Shared accommodation', 'Self-contained units', 'Newly acquired properties'],
    scope: ['Shared kitchens and bathrooms', 'Corridors', 'Vacant unit cleans', 'Resident-sensitive cleaning'],
    exclusions: ['Regulated care activity', 'Personal possessions unless instructed by authorised staff'],
    process: [
      'Confirm occupancy',
      'Agree access and resident communication',
      'Clean with minimal disruption',
      'Report issues'
    ],
    controls: ['Safeguarding awareness', 'Privacy and dignity', 'Site security', 'Vulnerable-resident awareness'],
    equipment: ['Colour-coded equipment', 'PPE', 'Waste bags', 'Approved cleaning products'],
    qa: ['Client reporting', 'Supervisor checks', 'Escalation notes', 'Service review'],
    faqs: [
      {
        question: 'Does Shinezone provide care services?',
        answer: 'No. Shinezone provides property-cleaning services and does not provide regulated care.'
      }
    ]
  },
  {
    slug: 'supported-living-cleaning',
    title: 'Supported Living Environment Cleaning',
    shortTitle: 'Supported Living',
    summary:
      'Property-cleaning services for supported living environments, working respectfully around residents and support teams.',
    image: imagePaths.upholstery,
    suitableFor: ['Supported living providers', 'Care organisations', 'Property managers'],
    propertyTypes: ['Communal lounges', 'Shared kitchens', 'Bathrooms', 'Resident-adjacent common areas'],
    scope: ['Communal areas', 'Hygiene-sensitive spaces', 'Touchpoints', 'Escalation of property concerns'],
    exclusions: ['Regulated personal care', 'Resident medical details collection'],
    process: ['Coordinate with support team', 'Respect privacy', 'Clean agreed areas', 'Escalate safety concerns'],
    controls: ['Safeguarding awareness', 'DBS checks where required', 'Respectful communication', 'Confidentiality'],
    equipment: ['PPE', 'Colour-coded equipment', 'Approved disinfectants', 'Waste containment'],
    qa: ['Supervisor review', 'Client-visible notes', 'Issue escalation', 'Complaint tracking'],
    faqs: [
      {
        question: 'How is resident privacy protected?',
        answer:
          'The workflow avoids unnecessary personal data and focuses on property, access and risk information only.'
      }
    ]
  },
  {
    slug: 'biohazard-bodily-fluid-cleaning',
    title: 'Biohazard and Bodily-Fluid Cleaning',
    shortTitle: 'Biohazard',
    summary: 'Controlled cleaning for blood, bodily fluids, contamination, odour and disinfection requirements.',
    image: imagePaths.spray,
    suitableFor: ['Housing providers', 'Property managers', 'Businesses', 'Emergency requesters'],
    propertyTypes: ['Communal spaces', 'Bathrooms', 'Accommodation units', 'Commercial areas'],
    scope: ['Area isolation', 'Contaminated surface cleaning', 'Disinfection', 'Incident documentation'],
    exclusions: ['Unsupported certification claims', 'Unidentified substances outside safe procedure'],
    process: ['Triage incident', 'Assess site risk', 'Deploy PPE and containment', 'Clean and document completion'],
    controls: ['PPE', 'COSHH', 'Controlled waste handling', 'Decontamination procedure'],
    equipment: ['Disposable PPE', 'Disinfectants', 'Containment materials', 'Waste bags'],
    qa: ['Incident record', 'Completion evidence', 'Client sign-off', 'Recall procedure'],
    faqs: [
      {
        question: 'Is attendance automatically confirmed?',
        answer: 'No. Specialist attendance is confirmed after triage, risk review and operational acceptance.'
      }
    ]
  },
  {
    slug: 'sharps-drug-paraphernalia-clearance',
    title: 'Sharps and Drug-Paraphernalia Clearance',
    shortTitle: 'Sharps Clearance',
    summary: 'Safe visual hazard assessment, isolation and clearance workflow for sharps and drug paraphernalia.',
    image: imagePaths.pressureDetail,
    suitableFor: ['Housing providers', 'Councils', 'Property managers', 'Commercial premises'],
    propertyTypes: ['Communal blocks', 'External areas', 'Vacant properties', 'Bathrooms and bin areas'],
    scope: ['Visual assessment', 'Area isolation', 'Sharps collection', 'Escalation for suspected substances'],
    exclusions: ['Handling unidentified substances outside approved procedures'],
    process: ['Screen hazard', 'Isolate area', 'Collect using safe method', 'Record and transfer waste appropriately'],
    controls: ['Anti-needle gloves', 'Sharps containers', 'PPE', 'Escalation procedure'],
    equipment: ['Sharps bins', 'Anti-needle gloves', 'Tongs', 'PPE'],
    qa: ['Hazard record', 'Waste documentation where applicable', 'Completion check'],
    faqs: [
      {
        question: 'What happens if illegal substances are suspected?',
        answer: 'The team escalates the issue and does not handle unidentified substances outside approved procedures.'
      }
    ]
  },
  {
    slug: 'emergency-specialist-cleaning',
    title: 'Emergency Specialist Cleaning',
    shortTitle: 'Emergency',
    summary: 'Urgent cleaning request triage for confirmed response areas, without unsupported response-time promises.',
    image: imagePaths.hero,
    suitableFor: ['Existing clients', 'Housing teams', 'Property managers', 'Commercial clients'],
    propertyTypes: ['Communal spaces', 'Temporary accommodation', 'Commercial premises', 'Vacant units'],
    scope: ['Request reception', 'Triage', 'Crew dispatch where accepted', 'Arrival and completion records'],
    exclusions: ['Medical, criminal or immediate-danger response', 'Guaranteed attendance without acceptance'],
    process: ['Receive request', 'Triage risk', 'Confirm acceptance', 'Dispatch team', 'Record operational timestamps'],
    controls: ['Emergency escalation wording', 'Site risk assessment', 'PPE', 'Operational timestamp log'],
    equipment: ['Role-specific PPE', 'Cleaning kits', 'Waste containment', 'Communication devices'],
    qa: ['Arrival record', 'Completion evidence', 'Recall and rectification tracking'],
    faqs: [
      {
        question: 'Should I use this form for immediate danger?',
        answer:
          'No. For immediate danger, criminal activity or a medical emergency, contact the appropriate emergency service.'
      }
    ]
  },
  {
    slug: 'window-cleaning',
    title: 'Window Cleaning',
    shortTitle: 'Windows',
    summary: 'Internal and external window cleaning below and above two metres, subject to risk assessment.',
    image: imagePaths.clinical,
    suitableFor: ['Housing providers', 'Block managers', 'Offices', 'Commercial premises'],
    propertyTypes: ['Internal glazing', 'Low-level external windows', 'Communal doors', 'Frames and sills'],
    scope: ['Internal windows', 'External windows', 'Frames and sills', 'Damage reporting'],
    exclusions: ['Unsafe high access without suitable method', 'Abseiling unless separately arranged'],
    process: ['Assess height and access', 'Segregate area', 'Clean glazing and frames', 'Report defects'],
    controls: ['Working-at-height review', 'Area segregation', 'Equipment checks', 'Dynamic risk assessment'],
    equipment: ['Reach-and-wash or pole systems', 'Squeegees', 'PPE', 'Warning signage'],
    qa: ['Visual inspection', 'Damage notes', 'Client sign-off'],
    faqs: [
      {
        question: 'Can extension poles be used?',
        answer: 'Yes, where the site risk assessment confirms the method is suitable.'
      }
    ]
  },
  {
    slug: 'carpet-floor-care',
    title: 'Carpet and Floor Care',
    shortTitle: 'Carpets & Floors',
    summary: 'Carpet extraction, floor scrubbing, buffing, strip-and-reseal and periodic floor treatments.',
    image: imagePaths.carpet,
    suitableFor: ['Property managers', 'Offices', 'Letting agents', 'Housing providers'],
    propertyTypes: ['Carpeted rooms', 'Hard floors', 'Communal corridors', 'Commercial areas'],
    scope: ['Carpet extraction', 'Spot cleaning', 'Scrubbing', 'Buffing', 'Strip and reseal'],
    exclusions: ['Damaged flooring repair', 'Stain removal guarantees where damage is permanent'],
    process: ['Assess surface', 'Choose method', 'Prepare area', 'Clean and inspect finish'],
    controls: ['COSHH', 'Slip controls', 'Drying advice', 'Equipment safety checks'],
    equipment: ['Extraction machines', 'Scrubbers', 'Buffers', 'Floor chemicals'],
    qa: ['Surface inspection', 'Before-and-after evidence', 'Client approval'],
    faqs: [
      {
        question: 'Can all stains be removed?',
        answer: 'Some stains or surface damage can be permanent; this is assessed before quotation where possible.'
      }
    ]
  },
  {
    slug: 'periodic-specialist-cleaning',
    title: 'Periodic and Specialist Cleaning',
    shortTitle: 'Specialist',
    summary:
      'Planned specialist cleaning including wall washing, graffiti removal, builders cleans and high-pressure cleaning.',
    image: imagePaths.pressure,
    suitableFor: ['Commercial clients', 'Developers', 'Housing providers', 'Property managers'],
    propertyTypes: ['External areas', 'Refurbished spaces', 'Communal areas', 'Commercial buildings'],
    scope: ['Wall washing', 'Graffiti removal', 'High-pressure cleaning', 'Builders or initial cleans'],
    exclusions: ['Surface repairs', 'Specialist access not agreed in advance'],
    process: ['Define output', 'Assess surface and risk', 'Agree method', 'Clean and inspect'],
    controls: ['Surface suitability review', 'COSHH', 'Water controls', 'Public-area segregation'],
    equipment: ['Pressure cleaning equipment', 'Specialist chemicals', 'PPE', 'Signage'],
    qa: ['Output inspection', 'Client sign-off', 'Corrective action where needed'],
    faqs: [
      {
        question: 'Can Shinezone handle builders cleans?',
        answer: 'Yes, builders and initial cleans can be requested and scoped based on site condition and access.'
      }
    ]
  }
]

export const sectors: Sector[] = [
  {
    title: 'Councils and Public-Sector Organisations',
    summary: 'Tender-aware cleaning support for housing, temporary accommodation and managed property environments.',
    challenges: ['High scrutiny', 'Resident sensitivity', 'Evidence and reporting requirements'],
    approach: ['Structured triage', 'Documented risk controls', 'Clear escalation and rectification records'],
    services: ['Communal block cleaning', 'Temporary accommodation', 'Emergency specialist cleaning']
  },
  {
    title: 'Housing Associations',
    summary: 'Communal cleaning, void turnaround and specialist attendance for managed residential portfolios.',
    challenges: ['Occupied buildings', 'Sharps and waste risks', 'Recurring quality audits'],
    approach: ['Resident-aware methods', 'Supervisor inspections', 'Before-and-after evidence where agreed'],
    services: ['Communal block cleaning', 'Post-eviction cleaning', 'Sharps clearance']
  },
  {
    title: 'Supported Living and Care Providers',
    summary: 'Property cleaning that respects privacy, dignity and safeguarding responsibilities.',
    challenges: ['Vulnerable residents', 'Shared environments', 'Disruption control'],
    approach: ['Liaison with support teams', 'Data minimisation', 'Respectful conduct standards'],
    services: ['Supported living cleaning', 'Biohazard cleaning', 'Commercial cleaning']
  },
  {
    title: 'Estate and Letting Agents',
    summary: 'Turnaround cleaning for managed lettings, end-of-tenancy cleans and priority property refreshes.',
    challenges: ['Tight deadlines', 'Variable property conditions', 'Waste and appliance issues'],
    approach: ['Structured property details', 'Crew and duration estimation', 'Completion evidence'],
    services: ['End-of-tenancy cleaning', 'Carpet and floor care', 'Window cleaning']
  },
  {
    title: 'Property Managers and Landlords',
    summary: 'Responsive cleaning across managed assets, blocks, commercial premises and vacant properties.',
    challenges: ['Multiple sites', 'Access management', 'Reactive issues'],
    approach: ['Booking reference tracking', 'Service-area review', 'Status and completion updates'],
    services: ['Commercial cleaning', 'Periodic specialist cleaning', 'Post-eviction cleaning']
  },
  {
    title: 'Contractors and Property Developers',
    summary: 'Initial cleans, builders cleans and periodic specialist support for property handover.',
    challenges: ['Programme pressure', 'Dust and residue', 'Site access restrictions'],
    approach: ['Scope-led planning', 'Risk assessment', 'Handover-focused quality checks'],
    services: ['Builders cleans', 'Wall washing', 'High-pressure cleaning']
  }
]

export const workflowSteps = [
  'Enquiry or emergency request received',
  'Triage and property information reviewed',
  'Site survey and risk assessment where required',
  'Quotation, method statement and schedule agreed',
  'Trained team deployed',
  'Completion inspection, evidence and client sign-off'
]

export const qualityControls = [
  'Risk assessments and method statements',
  'COSHH controls and chemical dilution records',
  'Colour-coded equipment',
  'PPE and specialist anti-needle gloves where required',
  'Sharps containers and safe collection techniques',
  'DBS and safeguarding controls where applicable',
  'Lone-worker and out-of-hours arrangements',
  'Complaint, recall and rectification procedure',
  'Waste handling and transfer documentation where applicable'
]

export const supplierDocuments = [
  'Health and safety policy',
  'Environmental and sustainability policy',
  'Safeguarding policy',
  'Lone-working policy',
  'COSHH process',
  'Sharps and contaminated-waste procedure',
  'Complaints procedure',
  'Business continuity plan',
  'Data-protection policy',
  'Modern slavery statement',
  'Equality, diversity and inclusion policy',
  'Insurance certificates',
  'Waste carrier registration',
  'Training matrix'
]

export const socialValueCommitments = [
  {
    title: 'Employment and Skills',
    items: [
      'Local vacancy advertising',
      'Entry-level cleaning opportunities',
      'Paid practical training',
      'Supervisor progression routes',
      '[VERIFY BEFORE PUBLICATION] Work placements where practical'
    ]
  },
  {
    title: 'Environmental Value',
    items: [
      'Reduced chemical and water consumption',
      'Reusable microfibre systems',
      'Responsible waste disposal',
      'Route optimisation',
      '[VERIFY BEFORE PUBLICATION] Carbon-reduction initiatives'
    ]
  },
  {
    title: 'Community Value',
    items: [
      '[VERIFY BEFORE PUBLICATION] Charity partnership',
      '[VERIFY BEFORE PUBLICATION] Free charitable-facility deep cleans',
      'Community cleaning initiatives',
      'Donation of staff time or cleaning materials where approved'
    ]
  }
]

export const caseStudies = [
  {
    title: '[INSERT REAL CASE STUDY] End-of-tenancy restoration',
    sector: 'Lettings or housing provider',
    property: 'Vacant residential property',
    challenge: 'Property condition, appliances, flooring and completion deadline to be verified.',
    outcome: 'Add verified timeframe, team composition, risks controlled and client feedback before publication.'
  },
  {
    title: '[INSERT REAL CASE STUDY] Supported living communal clean',
    sector: 'Supported living provider',
    property: 'Occupied communal environment',
    challenge: 'Resident sensitivity, access windows and safeguarding controls to be verified.',
    outcome: 'Add approved photographs and client sign-off evidence where consent exists.'
  },
  {
    title: '[INSERT REAL CASE STUDY] Specialist or biohazard clean',
    sector: 'Housing, commercial or property management',
    property: 'Incident-specific site',
    challenge: 'Hazards, PPE, waste route and incident documentation to be verified.',
    outcome: 'Publish only once training evidence, procedure and customer permission are confirmed.'
  }
]

export const requestTypes = [
  'Emergency attendance',
  'Same-day request',
  'Scheduled clean',
  'Recurring cleaning',
  'Site survey',
  'Quotation only'
]

export const bookingServiceOptions = [
  'Commercial cleaning',
  'Communal block cleaning',
  'End of tenancy',
  'Post eviction',
  'Biohazard or bodily fluid',
  'Sharps or drug paraphernalia',
  'Supported living environment',
  'Temporary accommodation',
  'Window cleaning',
  'Carpet cleaning',
  'Floor strip and reseal',
  'Graffiti removal',
  'Wall washing',
  'Builders or initial clean',
  'Other specialist clean'
]

export const hazardOptions = [
  'Vulnerable residents present',
  'Children present',
  'Occupied communal areas',
  'Sharps or needles',
  'Bodily fluids',
  'Suspected illegal substances',
  'Broken glass',
  'Mould',
  'Pest activity',
  'Hoarding or heavy accumulation',
  'Unknown chemicals',
  'Bulky waste',
  'Electrical damage',
  'Structural damage',
  'Work above two metres',
  'Other known risk'
]

export const wasteOptions = [
  'General bagged waste',
  'Furniture',
  'Mattresses',
  'Fridges or freezers',
  'Washing machines',
  'Other white goods',
  'Contaminated waste',
  'Sharps'
]

export const timeSlots = ['08:00-10:00', '10:00-12:00', '12:00-14:00', '14:00-16:00', '16:00-18:00', 'Out of hours']

export const sensitiveClaims = [
  '24/7 service enabled',
  'Two-hour response enabled',
  'Nationwide coverage enabled',
  'All staff DBS enabled',
  'Biohazard-trained staff enabled',
  'Sharps-trained staff enabled',
  'Waste carrier registration enabled',
  'Insurance details enabled'
]

export function getService(slug: string) {
  return services.find(service => service.slug === slug)
}
