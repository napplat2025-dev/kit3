// src/app/constants/venturesData.ts
// Kitchen Three operating ventures — 2013 to present
// These are operating businesses Kitchen Three has built and run,
// with the consultancy as the through-line. Narrative: "Built. Operated. Proven."

export type VentureStatus = 'active' | 'rebranded' | 'wound-down'
export type VentureKind = 'consultancy' | 'venture'

export interface Venture {
  slug: string
  name: string
  tagline: string
  status: VentureStatus
  statusLabel: string
  kind: VentureKind
  era: string
  yearStarted: number
  yearEnded: number | null
  category: string
  description: string
  whatWeBuilt: string[]
  whatItProves: string
  connectsToPillar: string
  imageFolder: string
  heroImage: string
  gallery: string[]
}

export const ventures: Venture[] = [
  {
    slug: 'kitchen-three-consultancy',
    name: 'Kitchen Three Consultancy',
    tagline: 'The through-line. The business behind every other business.',
    status: 'active',
    statusLabel: 'Active — operating since 2013',
    kind: 'consultancy',
    era: '2013–present',
    yearStarted: 2013,
    yearEnded: null,
    category: 'B2B Culinary Consultancy · Food Business Advisory',
    description:
      'The consultancy is the spine. It started in 2013 alongside Cookies N Pies and has been the constant through every venture since. Every other business on this page was an operating laboratory — a place to test, to learn, to run real margins against real market conditions. The consultancy is where that knowledge turns into work we do for clients. Today it covers eight service pillars, with named Michelin-pedigreed chefs, a certified cloud kitchen, and a team whose bench measures in decades of hospitality experience, not years.',
    whatWeBuilt: [
      'Eight-pillar service model: concept, brand, chef hire, training, cloud kitchen, tech, location, financial turnaround',
      'Named Michelin-pedigreed chef roster — not anonymous, not outsourced',
      'Client portfolio spanning AUC, Nestlé Egypt, Maggi, Prime Holding, ILO, Sea Queen Fleet, Norwegian Embassy',
      'Thirteen years of operating experience embedded directly in how we advise',
    ],
    whatItProves:
      'When Kitchen Three advises a client, it advises from inside thirteen years of operating ventures. Every pillar of the consultancy exists because we have built it ourselves first.',
    connectsToPillar: 'All eight service pillars',
    imageFolder: '/images/ventures/consultancy',
    heroImage: '/images/ventures/consultancy/hero.jpg',
    gallery: [
      '/images/ventures/consultancy/01.jpg',
      '/images/ventures/consultancy/02.jpg',
      '/images/ventures/consultancy/03.jpg',
      '/images/ventures/consultancy/04.jpg',
    ],
  },
  {
    slug: 'kitchen-hive',
    name: 'Kitchen Hive',
    tagline: 'HACCP-certified cloud kitchen',
    status: 'active',
    statusLabel: 'Active — operating today',
    kind: 'venture',
    era: '2021–present',
    yearStarted: 2021,
    yearEnded: null,
    category: 'Cloud Kitchen · Certified Food Production',
    description:
      'Launched in 2021 as our first post-Corona venture. A HACCP-certified, Codex Alimentarius-compliant cloud kitchen built for production, brand incubation, and turnkey rental. The infrastructure behind Kitchen Three\'s Cloud Kitchen Services pillar — and the only facility of its kind that Kitchen Three offers to clients directly. Everything we learned from thirteen years of building food businesses went into designing this facility.',
    whatWeBuilt: [
      'HACCP-certified production kitchen built to Codex Alimentarius standards',
      'Turnkey cloud kitchen rental for cloud-brand operators',
      'Multi-concept production capacity for incubating food brands',
      'The physical infrastructure behind the Cloud Kitchen Services pillar',
    ],
    whatItProves:
      'Kitchen Three is the only Egypt consultancy that owns and operates a certified cloud kitchen. When we advise on cloud kitchens, we advise from inside one we built.',
    connectsToPillar: 'Cloud Kitchen Services · Food Business Consulting',
    imageFolder: '/images/ventures/kitchen-hive',
    heroImage: '/images/ventures/kitchen-hive/hero.jpg',
    gallery: [
      '/images/ventures/kitchen-hive/01.jpg',
      '/images/ventures/kitchen-hive/02.jpg',
      '/images/ventures/kitchen-hive/03.jpg',
      '/images/ventures/kitchen-hive/04.jpg',
    ],
  },
  {
    slug: 'cookies-n-pies',
    name: 'Cookies N Pies',
    tagline: 'The cloud bakery that became Kitchen Three',
    status: 'rebranded',
    statusLabel: 'Rebranded into Kitchen Three, 2016',
    kind: 'venture',
    era: '2013–2016',
    yearStarted: 2013,
    yearEnded: 2016,
    category: 'Cloud Bakery · Make-to-Order Sweets',
    description:
      'Our first venture. A make-to-order sweet bakery operating from a cloud kitchen — built from scratch in Cairo and run end-to-end: recipe development, production operations, ordering, delivery logistics, and brand. In 2016 we rebranded the business into Kitchen Three to cover the full breadth of what we were doing beyond baked goods.',
    whatWeBuilt: [
      'Make-to-order production from a cloud kitchen',
      'In-house recipe development and pastry program',
      'Order management and delivery logistics',
      'Brand identity, packaging, and customer experience',
    ],
    whatItProves:
      'We have built a cloud-kitchen consumer brand from zero. Every decision a client faces — margin, shelf life, packaging, order flow — we have made ourselves.',
    connectsToPillar: 'Food Brand Design · Cloud Kitchen Services',
    imageFolder: '/images/ventures/cookies-n-pies',
    heroImage: '/images/ventures/cookies-n-pies/hero.jpg',
    gallery: [
      '/images/ventures/cookies-n-pies/01.jpg',
      '/images/ventures/cookies-n-pies/02.jpg',
      '/images/ventures/cookies-n-pies/03.jpg',
      '/images/ventures/cookies-n-pies/04.jpg',
    ],
  },
  {
    slug: 'kitchen-three-catering',
    name: 'Kitchen Three Catering & Cafeterias',
    tagline: 'Catering and school cafeteria operations at scale',
    status: 'wound-down',
    statusLabel: 'Wound down in 2020 during Corona',
    kind: 'venture',
    era: '2016–2020',
    yearStarted: 2016,
    yearEnded: 2020,
    category: 'Catering · Institutional Food Service',
    description:
      'A full-service catering operation running alongside school cafeteria contracts. We managed the entire chain: menu design, daily production, food safety protocols, staffing, service delivery, and account management for institutional clients. Wound down in 2020 when Corona eliminated institutional food service demand overnight.',
    whatWeBuilt: [
      'Full catering operation with menu engineering and production',
      'School cafeteria contracts with daily service delivery',
      'Food safety protocols and compliant production workflows',
      'Institutional account management and client relationships',
    ],
    whatItProves:
      'We have managed institutional food service at volume. When a client asks how to feed hundreds of people daily with consistency and compliance, we have done it.',
    connectsToPillar: 'Food Business Consulting · Culinary Training & Recruitment',
    imageFolder: '/images/ventures/kitchen-three-catering',
    heroImage: '/images/ventures/kitchen-three-catering/hero.jpg',
    gallery: [
      '/images/ventures/kitchen-three-catering/01.jpg',
      '/images/ventures/kitchen-three-catering/02.jpg',
      '/images/ventures/kitchen-three-catering/03.jpg',
      '/images/ventures/kitchen-three-catering/04.jpg',
    ],
  },
  {
    slug: 'kitchen-three-culinary-school',
    name: 'Kitchen Three Culinary School',
    tagline: 'A working culinary training operation',
    status: 'wound-down',
    statusLabel: 'Wound down in 2020 during Corona',
    kind: 'venture',
    era: '2016–2020',
    yearStarted: 2016,
    yearEnded: 2020,
    category: 'Culinary Education · Training',
    description:
      'A live culinary school — curriculum, instructors, kitchen stations, student cohorts. Run as an operating business, not a side program. Wound down in 2020 when in-person training became untenable. The teaching infrastructure and curriculum design we built here is now the foundation of Kitchen Three Academy, launching online in 2026.',
    whatWeBuilt: [
      'Full culinary curriculum across kitchen discipline and F&B business management',
      'Training kitchen infrastructure and station design',
      'Instructor recruitment and cohort management',
      'Student progression and certification workflows',
    ],
    whatItProves:
      'We have run culinary education as an operating business. The Academy we are launching online is not theory — it is a return to something we built before.',
    connectsToPillar: 'Culinary Training & Recruitment · Kitchen Three Academy',
    imageFolder: '/images/ventures/culinary-school',
    heroImage: '/images/ventures/culinary-school/hero.jpg',
    gallery: [
      '/images/ventures/culinary-school/01.jpg',
      '/images/ventures/culinary-school/02.jpg',
      '/images/ventures/culinary-school/03.jpg',
      '/images/ventures/culinary-school/04.jpg',
    ],
  },
  {
    slug: 'fresco',
    name: 'Fresco',
    tagline: 'Jams made from true fresh fruits',
    status: 'wound-down',
    statusLabel: 'Wound down in 2020 during Corona',
    kind: 'venture',
    era: '2017–2020',
    yearStarted: 2017,
    yearEnded: 2020,
    category: 'Consumer Packaged Goods · Preserves',
    description:
      'A jam and preserves brand built on a single uncompromised principle: every jar started with true fresh fruit. We developed the recipes, sourced seasonal fruit at peak, ran production, designed packaging, and handled distribution. A CPG venture end-to-end. Wound down in 2020 when raw material sourcing and retail distribution collapsed.',
    whatWeBuilt: [
      'Seasonal fresh-fruit sourcing and production calendar',
      'Recipe development and shelf-stable preservation methods',
      'Brand identity, packaging, and retail distribution',
      'Cost structure and margin management for a CPG product',
    ],
    whatItProves:
      'We have taken a consumer food product from concept to shelf. We understand what it takes to source, produce, package, and distribute a branded food product in Egypt.',
    connectsToPillar: 'Food Brand Design · Food Business Consulting',
    imageFolder: '/images/ventures/fresco',
    heroImage: '/images/ventures/fresco/hero.jpg',
    gallery: [
      '/images/ventures/fresco/01.jpg',
      '/images/ventures/fresco/02.jpg',
      '/images/ventures/fresco/03.jpg',
      '/images/ventures/fresco/04.jpg',
    ],
  },
  {
    slug: 'baby-food',
    name: 'An Infant Food Venture',
    tagline: 'Convenience infant nutrition, built in Cairo',
    status: 'wound-down',
    statusLabel: 'Wound down in 2020 during Corona',
    kind: 'venture',
    era: '2017–2020',
    yearStarted: 2017,
    yearEnded: 2020,
    category: 'Infant Nutrition · Specialty Food',
    description:
      'An infant food venture built to bring convenience infant nutrition to Egyptian parents. Nothing about infant food is forgiving — the compliance, the nutritional precision, the packaging integrity, the trust required from parents. We developed the recipes, navigated the compliance environment, built production workflows, and launched to market. Wound down in 2020 when Corona disrupted the retail and distribution channels we had built.',
    whatWeBuilt: [
      'Nutritionally precise infant food formulation',
      'Compliance-first production in one of the most regulated food categories',
      'Safety-focused packaging and shelf-life engineering',
      'Parent-trust brand positioning and retail launch',
    ],
    whatItProves:
      'We have worked in the highest-compliance food category there is. Clients in regulated food segments know we have done this work at its most demanding.',
    connectsToPillar: 'Food Business Consulting · Food Brand Design',
    imageFolder: '/images/ventures/baby-food',
    heroImage: '/images/ventures/baby-food/hero.jpg',
    gallery: [
      '/images/ventures/baby-food/01.jpg',
      '/images/ventures/baby-food/02.jpg',
      '/images/ventures/baby-food/03.jpg',
      '/images/ventures/baby-food/04.jpg',
    ],
  },
]

// Helper: get venture by slug
export function getVentureBySlug(slug: string): Venture | undefined {
  return ventures.find((v) => v.slug === slug)
}

// Helper: ventures in display order — consultancy first, then active ventures,
// then rebranded, then wound-down (most recent first)
export function getVenturesForDisplay(): Venture[] {
  const consultancy = ventures.filter((v) => v.kind === 'consultancy')
  const activeVentures = ventures.filter((v) => v.kind === 'venture' && v.status === 'active')
  const rebranded = ventures.filter((v) => v.status === 'rebranded')
  const woundDown = ventures
    .filter((v) => v.status === 'wound-down')
    .sort((a, b) => b.yearStarted - a.yearStarted)
  return [...consultancy, ...activeVentures, ...rebranded, ...woundDown]
}

// Ventures only (excludes the consultancy) — used on the timeline strip
export function getVenturesOnly(): Venture[] {
  return ventures.filter((v) => v.kind === 'venture')
}

// Page-level narrative copy
export const venturesPageCopy = {
  hero: {
    eyebrow: 'Built. Operated. Proven.',
    title: 'Thirteen Years of Building F&B Businesses',
    subtitle:
      'Kitchen Three is a consultancy born out of operating ventures. Since 2013 we have built and run six food businesses of our own — a cloud bakery, a catering operation, a culinary school, a jam brand, an infant food venture, and a certified cloud kitchen still operating today. The consultancy is the through-line.',
  },
  operatorFraming: {
    title: 'Our clients hire operators, not advisors',
    body:
      'Every venture on this page was a real operating business. Real margins. Real staff. Real food safety officers and real distribution and real customers. Five of them ran until Corona closed institutional food service, retail supply, and in-person training in 2020. One — Cookies N Pies — became Kitchen Three itself in 2016. Kitchen Hive, our cloud kitchen, is the one we built after Corona. Through all of it, the consultancy has been the constant. Every project we take on today is informed by having done the work ourselves.',
  },
}
