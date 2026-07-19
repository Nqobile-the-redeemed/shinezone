export type { Service } from './services'
export { getService, services } from './services'

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
  'Competence matched to task risk',
  'Environmentally responsible practices',
  'Scheduled regional requests',
  'Urgent requests triaged before acceptance'
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
      'Work placements to be published only after approval'
    ]
  },
  {
    title: 'Environmental Value',
    items: [
      'Reduced chemical and water consumption',
      'Reusable microfibre systems',
      'Responsible waste disposal',
      'Route optimisation',
      'Carbon-reduction initiatives to be published only after approval'
    ]
  },
  {
    title: 'Community Value',
    items: [
      'Community partnerships to be published only after approval',
      'Charitable-facility support to be published only after approval',
      'Community cleaning initiatives',
      'Donation of staff time or cleaning materials where approved'
    ]
  }
]

export const caseStudies = [
  {
    title: 'Evidence example pending approval: end-of-tenancy restoration',
    sector: 'Lettings or housing provider',
    property: 'Vacant residential property',
    challenge: 'Property condition, appliances, flooring and completion deadline to be verified.',
    outcome: 'Add verified timeframe, team composition, risks controlled and client feedback before publication.'
  },
  {
    title: 'Evidence example pending approval: supported living communal clean',
    sector: 'Supported living provider',
    property: 'Occupied communal environment',
    challenge: 'Resident sensitivity, access windows and safeguarding controls to be verified.',
    outcome: 'Add approved photographs and client sign-off evidence where consent exists.'
  },
  {
    title: 'Evidence example pending approval: specialist or biohazard clean',
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

export const bookingServiceOptionSlugs = [
  ['Commercial cleaning', 'commercial-cleaning'],
  ['Communal block cleaning', 'communal-block-cleaning'],
  ['End of tenancy', 'end-of-tenancy-cleaning'],
  ['Post eviction', 'post-eviction-cleaning'],
  ['Biohazard or bodily fluid', 'biohazard-bodily-fluid-cleaning'],
  ['Sharps or drug paraphernalia', 'sharps-drug-paraphernalia-clearance'],
  ['Supported living environment', 'supported-living-cleaning'],
  ['Temporary accommodation', 'temporary-accommodation-cleaning'],
  ['Window cleaning', 'window-cleaning'],
  ['Carpet cleaning', 'carpet-floor-care'],
  ['Floor strip and reseal', 'carpet-floor-care'],
  ['Graffiti removal', 'periodic-specialist-cleaning'],
  ['Wall washing', 'periodic-specialist-cleaning'],
  ['Builders or initial clean', 'periodic-specialist-cleaning']
] as const

export const bookingServiceQuestions: Record<string, string[]> = {
  'end-of-tenancy-cleaning': [
    'Bedrooms and approximate property size',
    'Property condition and photographs where available',
    'Vacant date and required completion deadline',
    'Appliances, carpets, internal windows and waste requirements',
    'Known hazards including sharps, bodily fluids or suspected substances'
  ],
  'communal-block-cleaning': [
    'Number of blocks, floors, entrances and lifts',
    'Preferred cleaning frequency',
    'Resident notices or displayed schedule requirements',
    'Bin areas, hoppers and water-supply limitations',
    'Site representative and reporting expectations'
  ],
  'supported-living-cleaning': [
    'Occupancy and whether areas are communal or private',
    'Support-team contact and preferred working hours',
    'Safeguarding or disruption considerations',
    'Confidential access arrangements',
    'Areas that should not be entered or moved'
  ],
  'temporary-accommodation-cleaning': [
    'Occupied, vacant or partly occupied status',
    'Shared facilities, vacant-room turnaround and communal areas',
    'Staff or tenancy-team liaison requirements',
    'Privacy, security and resident disruption considerations',
    'Known hazards, waste or unauthorised-occupancy observations'
  ],
  'biohazard-bodily-fluid-cleaning': [
    'Type of contamination and approximate affected area',
    'When the issue was identified',
    'Occupancy, immediate danger and emergency-service involvement',
    'Whether sharps or suspected substances are present',
    'Photographs where safe and lawful'
  ],
  'sharps-drug-paraphernalia-clearance': [
    'Estimated number and location of sharps',
    'Whether items are visible or may be concealed',
    'Public or resident access to the area',
    'Suspected substances or police/client involvement',
    'Whether a follow-on clean is required'
  ],
  'window-cleaning': [
    'Internal or external glazing',
    'Approximate number of windows and working height',
    'Access, parking and ground conditions',
    'Pole-system suitability or water access',
    'Damaged glazing, restrictors or public-route risks'
  ],
  'carpet-floor-care': [
    'Surface type and approximate area',
    'Stains, odours or permanent-damage concerns',
    'Furniture movement restrictions',
    'Drying-time or access requirements',
    'Whether this is one-off or planned maintenance'
  ],
  'periodic-specialist-cleaning': [
    'Required task such as wall washing, pressure cleaning, graffiti removal or builders clean',
    'Surface type, access and water availability',
    'Public-area segregation needs',
    'Handover deadline or programme stage',
    'Known surface damage or compatibility concerns'
  ],
  'post-eviction-cleaning': [
    'Authority to instruct cleaning and disposal',
    'Belongings, furniture or bulky-waste instructions',
    'Sharps, suspected substances, pest evidence or bodily fluids',
    'Site-security handover and lock-up requirements',
    'Photographs and completion evidence required'
  ],
  'emergency-specialist-cleaning': [
    'Immediate-danger status and emergency-service involvement',
    'Incident type, location and affected area',
    'Occupancy and access arrangements',
    'Known hazards and photographs where safe',
    'Urgent contact available for triage decisions'
  ]
}

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
