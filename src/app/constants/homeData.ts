export const services = [
  { num: '01', title: 'Culinary Consulting', desc: 'From concept to result — innovation, strategy, brand development, menu engineering, and full operations.', color: 'var(--teal)', bg: 'var(--teal-light)', kw: 'Food Business Consulting Egypt', href: '/services#culinary-consulting' },
  { num: '02', title: 'Design Services', desc: 'Brand identity, naming, go-to-market campaigns, menu design, plateware, packaging, and food theater.', color: 'var(--amber)', bg: 'var(--amber-light)', kw: 'Food Brand Design Cairo', href: '/services#design-services' },
  { num: '03', title: 'Chef Matchmaking', desc: 'Access our roster of 10 international chefs — Michelin-pedigreed, award-winning, globally experienced.', color: 'var(--coral)', bg: 'var(--coral-light)', kw: 'Michelin Chef Hire Egypt', href: '/services#chef-matchmaking' },
  { num: '04', title: 'Recruitment & Training', desc: 'Staff training, masterclasses, food business startup classes, and team building programs.', color: 'var(--teal)', bg: 'var(--teal-light)', kw: 'Culinary Training Cairo', href: '/services#recruitment-training' },
  { num: '05', title: 'Cloud Kitchen Services', desc: 'Turnkey operations and short-term rentals. HACCP and Codex Alimentarius certified central kitchens.', color: 'var(--amber)', bg: 'var(--amber-light)', kw: 'Cloud Kitchen Egypt', href: '/services#cloud-kitchen' },
  { num: '06', title: 'Technology Infrastructure', desc: 'Menu builder, ordering, reservations, mobile app, payments, CRM, loyalty — a complete digital stack.', color: 'var(--coral)', bg: 'var(--coral-light)', kw: 'Restaurant Technology Egypt', href: '/services#technology' },
  { num: '07', title: 'Site Selection & Lease Advisory', desc: "We don't just find you a space — we find you the right space. Foot traffic analysis, lease negotiation, and landlord management.", color: 'var(--teal)', bg: 'var(--teal-light)', kw: 'Restaurant Location Hunting Cairo', href: '/services#site-selection' },
  { num: '08', title: 'F&B Financial Turnaround', desc: 'For operations that need to recover, stabilise, and grow again. We diagnose what is broken and build the path back to profitability.', color: 'var(--amber)', bg: 'var(--amber-light)', kw: 'F&B Turnaround Consulting Egypt', href: '/services#financial-turnaround' },
]

export const chefs = [
  { slug: 'yann-bonneau', name: 'Yann Bonneau', country: 'France', photo: '/images/chefs/yann-bonneau.jpg' },
  { slug: 'enzo-bonneau', name: 'Enzo Bonneau', country: 'France', photo: '/images/chefs/enzo-bonneau.jpg' },
  { slug: 'niko-koulousias', name: 'Niko Koulousias', country: 'Greece', photo: '/images/chefs/niko-koulousias.jpg' },
  { slug: 'hadil-amasheh', name: 'Hadil Amasheh', country: 'Jordan/Egypt', photo: '/images/chefs/hadil-amasheh.jpg' },
  { slug: 'gerard-livigni', name: 'Gerard Livigni', country: 'France', photo: '/images/chefs/gerard-livigni.jpg' },
  { slug: 'ramy-somoeil', name: 'Ramy Somoeil', country: 'Egypt', photo: '/images/chefs/ramy-somoeil.jpg' },
  { slug: 'walid-karim', name: 'Walid Karim', country: 'Egypt', photo: '/images/chefs/walid-karim.jpg' },
  { slug: 'giovani-mascari', name: 'Giovani Mascari', country: 'Italy', photo: '/images/chefs/giovani-mascari.jpg' },
  { slug: 'luca-montersino', name: 'Luca Montersino', country: 'Italy', photo: '/images/chefs/luca-montersino.jpg' },
  { slug: 'luca-borgioli', name: 'Luca Borgioli', country: 'Italy', photo: '/images/chefs/luca-borgioli.jpg' },
]

export const clients = [
  { name: 'AUC', sector: 'University — F&B Consulting' },
  { name: 'Nestle Egypt', sector: 'FMCG — Product Development' },
  { name: 'Maggi', sector: 'FMCG — Culinary Training' },
  { name: 'Norwegian Embassy', sector: 'Diplomatic — Event Consulting' },
  { name: 'ILO', sector: 'International Org — Catering' },
  { name: 'Prime Holding', sector: 'Corporate — F&B Operations' },
  { name: 'Sea Queen Fleet', sector: 'Maritime — Catering Services' },
  { name: "Vinny's Pizza Bar", sector: 'HORECA — Culinary Consulting' },
  { name: 'Divine Foodz', sector: 'F&B Brand — Development' },
  { name: 'Garten', sector: 'Restaurant — Menu Design' },
  { name: 'Gateway School', sector: 'Education — F&B Management' },
  { name: 'Happy Bites', sector: 'F&B Brand — Development' },
]

export const steps = ['Consult', 'Design', 'Execute', 'Train', 'Handover', 'Monitor & Optimise']

export const personas = [
  {
    icon: '🚀',
    title: 'First-Time F&B Entrepreneurs',
    desc: 'You have a concept, a vision, and the drive — but need a partner who can take it from idea to open doors without the costly mistakes.',
    pillars: ['Concept & Feasibility', 'Menu Engineering', 'Brand Design', 'Site Selection'],
    color: 'var(--teal)',
    bg: 'var(--teal-light)',
    cta: '/services#culinary-consulting',
  },
  {
    icon: '📈',
    title: 'Existing Operations Seeking Growth',
    desc: 'Your restaurant is open but margins are tight, costs are climbing, or growth has stalled. We diagnose what is broken and build the path back to profitability.',
    pillars: ['Financial Turnaround', 'Operations Audit', 'Menu Restructure', 'Staff Training'],
    color: 'var(--amber)',
    bg: 'var(--amber-light)',
    cta: '/services#financial-turnaround',
  },
  {
    icon: '🏢',
    title: 'Corporates & HORECA Operators',
    desc: 'Hotels, corporate catering, institutions, and multi-site operators who need professional culinary infrastructure, certified kitchens, and world-class chef talent.',
    pillars: ['Chef Matchmaking', 'Cloud Kitchen', 'Recruitment & Training', 'Technology Stack'],
    color: 'var(--coral)',
    bg: 'var(--coral-light)',
    cta: '/services#chef-matchmaking',
  },
  {
    icon: '🌍',
    title: 'International & Regional Investors',
    desc: 'Entering the Egypt market from anywhere in the world? Kitchen Three is your on-the-ground partner — local expertise, international standards, and full compliance infrastructure.',
    pillars: ['Market Entry Advisory', 'Michelin Chef Hire', 'Brand Localisation', 'Full Compliance'],
    color: 'var(--teal)',
    bg: 'var(--teal-light)',
    cta: '/invest',
  },
  {
    icon: '☁️',
    title: 'Cloud Kitchen & Delivery Brands',
    desc: 'Launching a delivery-first concept or scaling a ghost kitchen operation? Our HACCP-certified central kitchen and full digital stack are built for exactly this.',
    pillars: ['Cloud Kitchen Rental', 'HACCP Compliance', 'Ordering & Delivery Tech', 'Brand Development'],
    color: 'var(--amber)',
    bg: 'var(--amber-light)',
    cta: '/services#cloud-kitchen',
  },
  {
    icon: '✨',
    title: 'Creative Founders & Concept Builders',
    desc: 'You have the aesthetic vision and the following — we bring the operational rigour, food costing, and brand depth to turn it into a sustainable business.',
    pillars: ['Concept Development', 'Food Theater & Design', 'Menu Engineering', 'Launch Strategy'],
    color: 'var(--coral)',
    bg: 'var(--coral-light)',
    cta: '/services#design-services',
  },
]

export const waStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 14,
  background: '#25D366',
  color: '#ffffff',
  borderRadius: 'var(--radius)',
  padding: '14px 20px',
  textDecoration: 'none',
  marginTop: 24,
  fontWeight: 500,
  fontSize: 15,
}

export const investItems = [
  { icon: '🏗', label: 'Production Infrastructure' },
  { icon: '🍽', label: 'Culinary Concept Ventures' },
  { icon: '🌍', label: 'Global investor Network' },
  { icon: '📈', label: 'Egypt F&B Growth Market' },
]

export const guides = [
  { title: 'Egypt F&B Startup Checklist', desc: 'Everything you need to launch a food business in Egypt.' },
  { title: 'How to Write a Menu That Sells', desc: 'Menu engineering principles from our consultant team.' },
  { title: 'HACCP Made Simple', desc: 'A plain-English guide to food safety compliance.' },
]

export const stats = [
  { v: '2013', l: 'Founded' },
  { v: '10', l: "Int'l Chefs" },
  { v: '9', l: 'Service Pillars' },
  { v: '15+', l: 'Major Clients' },
]

export const trustedBy = ['AUC', 'Nestle Egypt', 'Maggi', 'Norwegian Embassy', 'ILO', 'Prime Holding', 'Sea Queen Fleet']
