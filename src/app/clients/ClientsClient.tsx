'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useState } from 'react'

const clients = [
  {
    name: 'AUC', full: 'The American University in Cairo',
    sector: 'University', service: 'F&B Consulting & Training',
    color: '#1a8a7a', bg: '#e8f6f4',
    description: 'Kitchen Three has been a long-standing culinary partner to AUC — Egypt\'s most prestigious university. Our work spans F&B operations consulting, culinary training programs for staff, and catering quality standards for the university\'s dining facilities.',
    services: ['F&B Operations Consulting', 'Culinary Staff Training', 'Menu Development', 'Quality Standards Implementation'],
  },
  {
    name: 'Nestlé Egypt', full: 'Nestlé Egypt S.A.E.',
    sector: 'FMCG', service: 'Product Development',
    color: '#e8a020', bg: '#fdf4e3',
    description: 'Working with one of the world\'s largest food companies, Kitchen Three contributed culinary expertise to Nestlé Egypt\'s product development process — providing chef-led insights on taste profiles, cooking applications, and consumer recipe development for the Egyptian market.',
    services: ['Product Development Support', 'Recipe Creation', 'Consumer Taste Testing', 'Culinary Training for Sales Teams'],
  },
  {
    name: 'Maggi', full: 'Maggi Egypt — Nestlé Brand',
    sector: 'FMCG', service: 'Culinary Training',
    color: '#e06050', bg: '#fdf0ee',
    description: 'Kitchen Three designed and delivered culinary training programs for Maggi Egypt, helping the brand\'s culinary team develop recipe applications, cooking demonstrations, and trade show presentations that showcase Maggi products in professional kitchen contexts.',
    services: ['Culinary Training Program Design', 'Recipe Application Development', 'Cooking Demonstrations', 'Trade Show Support'],
  },
  {
    name: 'Norwegian Embassy', full: 'Royal Norwegian Embassy — Cairo',
    sector: 'Diplomatic', service: 'Event Consulting',
    color: '#1a8a7a', bg: '#e8f6f4',
    description: 'Diplomatic events demand flawless execution and cultural sensitivity. Kitchen Three provided full culinary consulting for official events at the Norwegian Embassy in Cairo — from menu planning and chef coordination to presentation standards and service protocols.',
    services: ['Diplomatic Event Planning', 'Menu Curation', 'Chef Coordination', 'Service Protocol Design'],
  },
  {
    name: 'ILO', full: 'International Labour Organization',
    sector: 'International Organisation', service: 'Catering Services',
    color: '#e8a020', bg: '#fdf4e3',
    description: 'The International Labour Organization engaged Kitchen Three for catering consultancy for events and workshops at their Cairo office. Our work included vendor selection, menu design, dietary requirement management, and quality oversight for multi-day international events.',
    services: ['Catering Consultancy', 'Vendor Management', 'Menu Design', 'Dietary Requirements Management'],
  },
  {
    name: 'Prime Holding', full: 'Prime Holding',
    sector: 'Corporate', service: 'F&B Operations',
    color: '#e06050', bg: '#fdf0ee',
    description: 'Kitchen Three worked with Prime Holding on their corporate F&B operations — developing food service standards, kitchen systems, and staff training programs for their facility operations.',
    services: ['F&B Operations Design', 'Kitchen Systems Development', 'Staff Training', 'Quality Standards'],
  },
  {
    name: 'Sea Queen Fleet', full: 'Sea Queen Fleet',
    sector: 'Maritime', service: 'Catering Services',
    color: '#1a8a7a', bg: '#e8f6f4',
    description: 'Maritime catering presents unique challenges — logistics, storage, consistent quality at sea. Kitchen Three developed full catering programs and operational standards for Sea Queen Fleet\'s vessels, including menu planning, supplier coordination, and crew training.',
    services: ['Maritime Catering Program', 'Supplier Coordination', 'Menu Planning', 'Crew Culinary Training'],
  },
  {
    name: "Vinny's Pizza Bar", full: "Vinny's Pizza Bar",
    sector: 'HORECA', service: 'Culinary Consulting',
    color: '#e8a020', bg: '#fdf4e3',
    description: "A growing pizza restaurant concept that engaged Kitchen Three for full culinary consulting — from dough recipe development and sourcing Italian ingredients to staff training and kitchen workflow optimisation.",
    services: ['Recipe Development', 'Ingredient Sourcing', 'Staff Training', 'Kitchen Operations'],
  },
  {
    name: 'Divine Foodz', full: 'Divine Foodz',
    sector: 'F&B Brand', service: 'Brand Development',
    color: '#e06050', bg: '#fdf0ee',
    description: 'Kitchen Three supported Divine Foodz through a full brand development engagement — defining their culinary identity, developing their product range, and creating the operational foundation for their food brand.',
    services: ['Brand Identity', 'Product Development', 'Menu Creation', 'Operational Setup'],
  },
  {
    name: 'Garten', full: 'Garten Restaurant',
    sector: 'Restaurant', service: 'Menu Design',
    color: '#1a8a7a', bg: '#e8f6f4',
    description: 'Kitchen Three designed the full menu for Garten — a contemporary dining concept in Cairo. The engagement covered menu structure, recipe development, costing, and visual menu design.',
    services: ['Menu Structure & Design', 'Recipe Development', 'Menu Costing', 'Visual Menu Design'],
  },
  {
    name: 'Gateway School', full: 'Gateway School Egypt',
    sector: 'Education', service: 'F&B Management',
    color: '#e8a020', bg: '#fdf4e3',
    description: 'School catering demands nutritional balance, consistent quality, and cost efficiency. Kitchen Three worked with Gateway School on their F&B management — menu planning for students, supplier management, and kitchen team training.',
    services: ['Student Menu Planning', 'Nutritional Balance', 'Supplier Management', 'Kitchen Team Training'],
  },
  {
    name: 'Happy Bites', full: 'Happy Bites',
    sector: 'F&B Brand', service: 'Brand Development',
    color: '#e06050', bg: '#fdf0ee',
    description: 'Happy Bites engaged Kitchen Three for end-to-end brand and product development — from concept definition to recipe creation and launch preparation.',
    services: ['Concept Development', 'Recipe Creation', 'Brand Positioning', 'Launch Preparation'],
  },
]

const sectors = ['All', 'University', 'FMCG', 'Diplomatic', 'International Organisation', 'Corporate', 'Maritime', 'HORECA', 'F&B Brand', 'Restaurant', 'Education']

export default function ClientsClient() {
  const [active, setActive] = useState<string | null>(null)
  const [sector, setSector] = useState('All')

  const filtered = sector === 'All' ? clients : clients.filter(c => c.sector === sector)

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: '#fdfaf6', color: '#1a1a1a' }}>

      <Nav />

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #e8f6f4 0%, #fdfaf6 60%)', padding: '80px 24px 64px', borderBottom: '1px solid #ede8e0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 24 }}>
            <a href="/" style={{ fontSize: 12, color: '#999', letterSpacing: '0.08em', textDecoration: 'none', textTransform: 'uppercase' }}>Home</a>
            <span style={{ color: '#ccc', margin: '0 10px' }}>›</span>
            <span style={{ fontSize: 12, color: '#1a8a7a', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Clients</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, color: '#0f2e2a', marginBottom: 20, lineHeight: 1.1 }}>
            Clients &<br /><em style={{ color: '#1a8a7a' }}>Partners</em>
          </h1>
          <p style={{ fontSize: 17, color: '#666', maxWidth: 600, lineHeight: 1.8, fontWeight: 300 }}>
            From multinational FMCG brands to diplomatic missions and independent restaurants — Kitchen Three has delivered culinary excellence across every sector of Egypt's food industry since 2013.
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section style={{ background: '#fff', borderBottom: '1px solid #ede8e0', padding: '0 24px', overflowX: 'auto' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 0 }}>
          {sectors.map(s => (
            <button key={s} onClick={() => setSector(s)}
              style={{ padding: '16px 18px', fontSize: 11, letterSpacing: '0.08em', color: sector === s ? '#1a8a7a' : '#888', background: 'none', border: 'none', borderBottom: `2px solid ${sector === s ? '#1a8a7a' : 'transparent'}`, cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: "'DM Sans', sans-serif", fontWeight: sector === s ? 500 : 400, transition: 'all 0.2s' }}>
              {s.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      {/* CLIENTS GRID */}
      <section style={{ padding: '64px 24px', background: '#fdfaf6' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {filtered.map(c => (
              <div key={c.name}>
                <div onClick={() => setActive(active === c.name ? null : c.name)}
                  style={{ background: active === c.name ? c.bg : '#fff', border: `1px solid ${active === c.name ? c.color : '#ede8e0'}`, borderRadius: 4, padding: '32px 28px', cursor: 'pointer', transition: 'all 0.3s' }}
                  onMouseEnter={e => { if (active !== c.name) { (e.currentTarget as HTMLElement).style.borderColor = c.color; (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px ${c.color}11` } }}
                  onMouseLeave={e => { if (active !== c.name) { (e.currentTarget as HTMLElement).style.borderColor = '#ede8e0'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' } }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                    <div>
                      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 500, color: '#0f2e2a', marginBottom: 4 }}>{c.name}</div>
                      <div style={{ fontSize: 11, color: '#aaa', letterSpacing: '0.08em' }}>{c.full}</div>
                    </div>
                    <span style={{ background: c.bg, color: c.color, padding: '4px 10px', borderRadius: 2, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap', marginLeft: 12 }}>{c.sector}</span>
                  </div>
                  <div style={{ fontSize: 12, color: c.color, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10, fontWeight: 500 }}>{c.service}</div>
                  <div style={{ fontSize: 11, color: '#aaa', marginTop: 12 }}>{active === c.name ? 'CLOSE ↑' : 'VIEW DETAILS ↓'}</div>
                </div>

                {active === c.name && (
                  <div style={{ background: '#fff', border: `1px solid ${c.color}44`, borderTop: 'none', borderRadius: '0 0 4px 4px', padding: '28px 28px 32px' }}>
                    <p style={{ fontSize: 14, color: '#555', lineHeight: 1.9, fontWeight: 300, marginBottom: 20 }}>{c.description}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {c.services.map(s => (
                        <span key={s} style={{ background: c.bg, color: c.color, padding: '5px 12px', borderRadius: 2, fontSize: 11, letterSpacing: '0.06em' }}>{s}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0f2e2a', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, color: '#fff', marginBottom: 20 }}>
            Join Our <em style={{ color: 'var(--amber)' }}>Client Portfolio</em>
          </h2>
          <p style={{ fontSize: 15, color: '#7ab8b0', marginBottom: 36, fontWeight: 300 }}>Let's discuss how Kitchen Three can serve your business.</p>
          <a href="/#contact" style={{ background: '#1a8a7a', color: '#fff', padding: '16px 40px', borderRadius: 2, fontSize: 13, letterSpacing: '0.12em', textDecoration: 'none', fontWeight: 500 }}>GET IN TOUCH</a>
        </div>
      </section>

      <footer style={{ background: '#0a1f1c', color: '#4a8a80', padding: '24px', textAlign: 'center' }}>
        <div style={{ fontSize: 12 }}>© 2026 Kitchen Three LLC — Cairo, Egypt. All rights reserved.</div>
      </footer>
    </div>
  )
}
