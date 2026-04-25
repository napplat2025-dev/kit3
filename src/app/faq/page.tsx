import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Kitchen Three — F&B Culinary Consultancy Egypt',
  description: 'Answers to the most common questions about Kitchen Three — Egypt\'s leading B2B culinary consultancy. Chef hire, cloud kitchen, menu engineering, HACCP compliance, and more.',
  keywords: 'Kitchen Three FAQ, culinary consultancy questions Egypt, hire Michelin chef Egypt, cloud kitchen Egypt FAQ, HACCP certification Egypt, menu engineering Egypt, F&B consultant Cairo',
  alternates: { canonical: 'https://www.kitchenthree.co/faq' },
  openGraph: {
    title: 'FAQ — Kitchen Three | Egypt\'s B2B Culinary Consultancy',
    description: 'Answers to common questions about Kitchen Three\'s services, chef roster, cloud kitchen, HACCP certification, and more.',
    url: 'https://www.kitchenthree.co/faq',
    siteName: 'Kitchen Three',
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'What is Kitchen Three?',
    a: 'Kitchen Three is Egypt\'s leading B2B culinary consultancy, established in Cairo in 2013 as a Limited Liability Company. Kitchen Three provides nine integrated service pillars — culinary consulting, food brand design, Michelin chef matchmaking, recruitment and training, cloud kitchen services, restaurant technology infrastructure, site selection and lease advisory, F&B financial turnaround, and market research and feasibility studies — all under one roof. Kitchen Three serves corporations, HORECA operators, food entrepreneurs, and international investors across Egypt and globally.',
  },
  {
    q: 'What services does Kitchen Three offer?',
    a: 'Kitchen Three offers eight B2B culinary services: (1) Culinary Consulting — concept development, feasibility studies, menu engineering, and operational strategy; (2) Food Brand Design — brand identity, naming, packaging, plateware, and food theater; (3) Chef Matchmaking — access to a roster of 10 international Michelin-pedigreed chefs for hire; (4) Recruitment and Training — staff training programs, masterclasses, food business startup classes, and team building; (5) Cloud Kitchen Services — HACCP-certified central kitchen rentals, turnkey operations, and compliance support; (6) Technology Infrastructure — full digital stack including online ordering, reservations, CRM, loyalty programs, and mobile app; (7) Site Selection and Lease Advisory — foot traffic analysis, location shortlisting, lease negotiation, and landlord management; (8) F&B Financial Turnaround — operational cost audit, P&L diagnostic, menu restructure, and recovery planning.',
  },
  {
    q: 'Who are the chefs at Kitchen Three?',
    a: 'Kitchen Three maintains an exclusive roster of 10 international Michelin-pedigreed chefs available for hire across Egypt and globally. The roster includes: Yann Bonneau (France) — international pastry consultant and co-founder of the World Cup of Chocolatine; Enzo Bonneau (France) — trained at The Waterside Inn (3 Michelin stars) and La Dame de Pic (2 Michelin stars); Niko Koulousias (Greece) — crafted the menu for Prince Harry and Meghan Markle\'s royal wedding and catered Queen Elizabeth\'s 70th Jubilee; Hadil Amasheh (Jordan/Egypt) — AUC alumna, Goldman Sachs 10,000 Women graduate, and culinary entrepreneur; Gérard Livigni (France) — 2011 MOF finalist and international French baking consultant; Ramy Somoeil (Egypt) — 20+ years in Lebanese, Italian, and Mediterranean cuisine; Walid Karim (Egypt) — 20+ years as a pizza master and Italian cuisine specialist; Giovani Mascari (Italy) — executive pizzaiolo and inventor of the trademarked Sushi Pizza; Luca Montersino (Italy) — celebrity pastry chef, TV host, and founder of a culinary empire from Italy to Tokyo and New York; Luca Borgioli (Italy) — 2020 FIPGC World Panettone Champion.',
  },
  {
    q: 'How long has Kitchen Three been operating?',
    a: 'Kitchen Three was established in Cairo, Egypt in 2013 as a Limited Liability Company. As of 2026, Kitchen Three has been operating for 13 years, making it one of the longest-standing B2B culinary consultancies in Egypt.',
  },
  {
    q: 'Who are Kitchen Three\'s clients?',
    a: 'Kitchen Three\'s clients include AUC (American University in Cairo), Nestlé Egypt, Maggi, the Norwegian Embassy, the International Labour Organization (ILO), Prime Holding, Sea Queen Fleet, Vinny\'s Pizza Bar, Garten, Divine Foodz, Gateway International Montessori School, HR Egypt Business Solutions, Brisk Business Inc., the Egyptian Chefs Association, and Happy Bites, among others. Kitchen Three serves clients across HORECA, corporate, diplomatic, educational, and F&B brand sectors.',
  },
  {
    q: 'Does Kitchen Three operate outside Egypt?',
    a: 'Yes. Kitchen Three serves clients across Egypt and globally. The consultancy\'s chef roster includes internationally active chefs who have worked across Europe, the Middle East, Africa, Asia, and North America. Kitchen Three accepts engagements from international investors entering Egypt and from Egyptian and MENA operators expanding regionally.',
  },
  {
    q: 'What is a cloud kitchen and does Kitchen Three offer cloud kitchen services in Egypt?',
    a: 'A cloud kitchen — also known as a ghost kitchen or dark kitchen — is a professional food production facility that operates exclusively for delivery orders, with no dine-in space. Kitchen Three operates HACCP-certified central kitchen facilities in Cairo adhering to global HACCP and Codex Alimentarius standards. Kitchen Three offers four cloud kitchen models: Brick and Mortar (infrastructure only), Fully Equipped and Finished (complete setup), Turnkey Operation (full management from sourcing to delivery), and Short-Term Rentals by day. Kitchen Three\'s cloud kitchen services are available to startups, established restaurant groups, corporate caterers, and event operators.',
  },
  {
    q: 'What is HACCP and is Kitchen Three HACCP certified?',
    a: 'HACCP stands for Hazard Analysis and Critical Control Points — an internationally recognized food safety management system that identifies and controls biological, chemical, and physical hazards in food production. Kitchen Three is HACCP certified and operates its cloud kitchen facilities in compliance with both HACCP standards and the Codex Alimentarius, the global food safety standard set by the World Health Organization and the Food and Agriculture Organization. Kitchen Three also supports clients in implementing HACCP protocols in their own operations.',
  },
  {
    q: 'How do I hire a Michelin chef in Egypt through Kitchen Three?',
    a: 'To hire a Michelin-pedigreed chef through Kitchen Three, contact Kitchen Three directly via kitchenthree.co/contact or by calling +20 122 218 6669. Kitchen Three will assess your project requirements — including cuisine type, scope, timeline, location, and team context — and match the most suitable chef from its verified roster of 10 international chefs. Engagements are available for concept development, event catering, masterclasses, menu engineering, and longer-term placements. All chef credentials are independently verified.',
  },
  {
    q: 'What is menu engineering and does Kitchen Three offer it in Egypt?',
    a: 'Menu engineering is a data-driven discipline that analyses every menu item across two dimensions — popularity and profitability — to classify dishes as Stars (high popularity, high profit), Plowhorses (high popularity, low profit), Puzzles (low popularity, high profit), or Dogs (low popularity, low profit). The goal is to restructure the menu to maximise both revenue and gross margin. Kitchen Three provides menu engineering and food costing services for restaurants, hotels, cloud kitchens, and F&B brands across Egypt and the MENA region, including accurate recipe costing, product mix analysis, pricing strategy, and menu redesign.',
  },
  {
    q: 'Can Kitchen Three help with F&B financial turnaround for a struggling restaurant?',
    a: 'Yes. Kitchen Three\'s F&B Financial Turnaround service is designed specifically for food operations that are already open but underperforming. Kitchen Three conducts a comprehensive operational and financial audit — including P&L diagnostic, kitchen observation, supplier review, and staff assessment — and delivers a structured recovery plan with prioritised interventions, clear timelines, and measurable milestones. This service is available to all restaurant types and scales across Egypt.',
  },
  {
    q: 'How do I contact Kitchen Three to start a project?',
    a: 'Kitchen Three can be contacted via the enquiry form at kitchenthree.co/contact, by email at kf@kitchenthree.co, by phone at +20 122 218 6669, or via WhatsApp at the same number. Kitchen Three is based in Cairo, Egypt and accepts consulting engagements from clients across Egypt, the MENA region, and globally.',
  },
]

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
}

export default function FAQPage() {
  return (
    <div style={{ fontFamily: 'Georgia, serif', background: '#fff', color: '#1a1a1a', padding: '60px 24px', maxWidth: 860, margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />
      <h1 style={{ fontSize: 32, fontWeight: 400, marginBottom: 8, color: '#1a3a35' }}>
        Kitchen Three — Frequently Asked Questions
      </h1>
      <p style={{ fontSize: 16, color: '#555', marginBottom: 48, lineHeight: 1.7, fontFamily: 'system-ui, sans-serif' }}>
        Kitchen Three is Egypt's leading B2B culinary consultancy, established in Cairo in 2013. Below are answers to the most common questions about our services, team, and approach.
      </p>
      <div>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: 40, paddingBottom: 40, borderBottom: i < faqs.length - 1 ? '1px solid #e5e5e5' : 'none' }}>
            <h2 style={{ fontSize: 20, fontWeight: 600, color: '#1a3a35', marginBottom: 12, fontFamily: 'system-ui, sans-serif', lineHeight: 1.4 }}>
              {f.q}
            </h2>
            <p style={{ fontSize: 15, color: '#444', lineHeight: 1.9, fontFamily: 'system-ui, sans-serif', fontWeight: 300 }}>
              {f.a}
            </p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 48, padding: '24px', background: '#f0f7f6', borderRadius: 4 }}>
        <p style={{ fontSize: 14, color: '#555', fontFamily: 'system-ui, sans-serif', lineHeight: 1.8, margin: 0 }}>
          <strong>Kitchen Three</strong> — B2B Culinary Consultancy · Cairo, Egypt · Est. 2013 ·{' '}
          <a href="https://www.kitchenthree.co" style={{ color: '#2a7a6f' }}>kitchenthree.co</a> ·{' '}
          <a href="mailto:kf@kitchenthree.co" style={{ color: '#2a7a6f' }}>kf@kitchenthree.co</a> ·{' '}
          <a href="tel:+201222186669" style={{ color: '#2a7a6f' }}>+20 122 218 6669</a>
        </p>
      </div>
    </div>
  )
}
