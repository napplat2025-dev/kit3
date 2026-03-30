'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useState } from 'react'

const clients = [
  {
    name: 'AUC',
    full: 'The American University in Cairo',
    sector: 'University',
    service: 'F&B Consulting & Training',
    color: 'var(--teal)',
    bg: 'var(--teal-light)',
    description: 'Kitchen Three has been a long-standing culinary partner to AUC. Our work spans F&B consulting, culinary training programs for staff, and attending campus life events as a vendor.',
    services: ['F&B Consulting', 'Culinary Staff Training', 'Menu Development', 'Quality Standards Implementation'],
  },
  {
    name: 'Nestle Egypt',
    full: 'Nestle Egypt S.A.E.',
    sector: 'FMCG',
    service: 'Product Development',
    color: 'var(--amber)',
    bg: 'var(--amber-light)',
    description: 'Working with one of the world\'s largest food companies, Kitchen Three contributed culinary expertise to Nestle Egypt\'s product development process — providing chef-led insights on taste profiles, cooking applications, and consumer recipe development.',
    services: ['Product Development Support', 'Recipe Creation', 'Consumer Taste Testing', 'Culinary Training for Sales Teams'],
  },
  {
    name: 'Maggi',
    full: 'Maggi Egypt — Nestle Brand',
    sector: 'FMCG',
    service: 'Culinary Training',
    color: 'var(--coral)',
    bg: 'var(--coral-light)',
    description: 'Kitchen Three designed and delivered culinary training programs for Maggi Egypt, helping the brand culinary team develop recipe applications, cooking demonstrations, and trade show presentations.',
    services: ['Culinary Training Program Design', 'Recipe Application Development', 'Cooking Demonstrations', 'Trade Show Support'],
  },
  {
    name: 'Norwegian Embassy',
    full: 'Royal Norwegian Embassy — Cairo',
    sector: 'Diplomatic',
    service: 'Event Consulting',
    color: 'var(--teal)',
    bg: 'var(--teal-light)',
    description: 'Diplomatic events demand flawless execution. Kitchen Three provided full culinary consulting for official events at the Norwegian Embassy in Cairo — from menu planning and chef coordination to service protocols.',
    services: ['Diplomatic Event Planning', 'Menu Curation', 'Chef Coordination', 'Service Protocol Design'],
  },
  {
    name: 'ILO',
    full: 'International Labour Organization',
    sector: 'International Organisation',
    service: 'Catering Services',
    color: 'var(--amber)',
    bg: 'var(--amber-light)',
    description: 'The International Labour Organization engaged Kitchen Three for catering consultancy for events and workshops at their Cairo office, including vendor selection, menu design, and quality oversight.',
    services: ['Catering Consultancy', 'Vendor Management', 'Menu Design', 'Dietary Requirements Management'],
  },
  {
    name: 'Prime Holding',
    full: 'Prime Holding',
    sector: 'Corporate',
    service: 'F&B Operations',
    color: 'var(--coral)',
    bg: 'var(--coral-light)',
    description: 'Kitchen Three worked with Prime Holding on their corporate F&B operations — developing food service standards, kitchen systems, and staff training programs.',
    services: ['F&B Operations Design', 'Kitchen Systems Development', 'Staff Training', 'Quality Standards'],
  },
  {
    name: 'Sea Queen Fleet',
    full: 'Sea Queen Fleet',
    sector: 'Maritime',
    service: 'Catering Services',
    color: 'var(--teal)',
    bg: 'var(--teal-light)',
    description: 'Kitchen Three developed full catering programs and operational standards for Sea Queen Fleet vessels, including menu planning, supplier coordination, and crew training.',
    services: ['Maritime Catering Program', 'Supplier Coordination', 'Menu Planning', 'Crew Culinary Training'],
  },
  {
    name: "Vinny's Pizza Bar",
    full: "Vinny's Pizza Bar",
    sector: 'HORECA',
    service: 'Cloud Kitchen Leasing',
    color: 'var(--amber)',
    bg: 'var(--amber-light)',
    description: "A growing pizza restaurant concept that engaged Kitchen Three's cloud kitchen leasing service for their central kitchen operations.",
    services: ['Cloud Kitchen Leasing'],
  },
  {
    name: 'Divine Foodz',
    full: 'Divine Foodz',
    sector: 'F&B Brand',
    service: 'Brand Development',
    color: 'var(--coral)',
    bg: 'var(--coral-light)',
    description: 'Kitchen Three supported Divine Foodz through a full brand development engagement — defining their culinary identity, developing their product range, and creating the operational foundation.',
    services: ['Brand Identity', 'Product Development', 'Menu Creation', 'Operational Setup'],
  },
  {
    name: 'Garten',
    full: 'Garten Restaurant',
    sector: 'Restaurant',
    service: 'Cloud Kitchen Operations',
    color: 'var(--teal)',
    bg: 'var(--teal-light)',
    description: 'Kitchen Three managed central kitchen leasing and operations for Garten — a contemporary dining concept in Cairo. The engagement covered facility selection, equipment rental, and operational setup.',
    services: ['Central Kitchen Leasing', 'Equipment Rental', 'Operational Design', 'Facility Management'],
  },
  {
    name: 'Gateway School',
    full: 'Gateway School Egypt',
    sector: 'Education',
    service: 'F&B Management',
    color: 'var(--amber)',
    bg: 'var(--amber-light)',
    description: 'Kitchen Three worked with Gateway School on their F&B management — menu planning for students, supplier management, and kitchen team training.',
    services: ['Student Menu Planning', 'Nutritional Balance', 'Supplier Management', 'Kitchen Team Training'],
  },
  {
    name: 'Happy Bites',
    full: 'Happy Bites',
    sector: 'F&B Brand',
    service: 'Brand Development',
    color: 'var(--coral)',
    bg: 'var(--coral-light)',
    description: 'Happy Bites engaged Kitchen Three for end-to-end brand and product development — from concept definition to recipe creation and launch preparation.',
    services: ['Concept Development', 'Recipe Creation', 'Brand Positioning', 'Launch Preparation'],
  },
]

const sectors = ['All', 'University', 'FMCG', 'Diplomatic', 'International Organisation', 'Corporate', 'Maritime', 'HORECA', 'F&B Brand', 'Restaurant', 'Education']

export default function ClientsClient() {
  const [sector, setSector] = useState('All')
  const filtered = sector === 'All' ? clients : clients.filter(c => c.sector === sector)

  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)', color: 'var(--ink)' }}>
      <Nav />

      <section style={{ background: 'var(--forest)', padding: '80px 0 64px' }}>
        <div className="container">
          <div className="eyebrow" style={{ color: 'var(--amber)' }}>Our Portfolio</div>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, color: '#ffffff', marginBottom: 20, lineHeight: 1.1 }}>
            Clients & <em style={{ color: 'var(--amber)' }}>Partners</em>
          </h1>
          <p style={{ fontSize: 17, color: '#d4efeb', maxWidth: 600, lineHeight: 1.8, fontWeight: 300 }}>
            From multinational FMCG brands to diplomatic missions and independent restaurants — Kitchen Three has delivered culinary excellence across every sector since 2013.
          </p>
        </div>
      </section>

      <section style={{ background: '#fff', borderBottom: '1px solid var(--border)', overflowX: 'auto' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 0 }}>
            {sectors.map(s => (
              <button key={s} onClick={() => setSector(s)}
                style={{ padding: '14px 14px', fontSize: 10, letterSpacing: '0.08em', color: sector === s ? 'var(--teal)' : '#888', background: 'none', border: 'none', borderBottom: sector === s ? '2px solid var(--teal)' : '2px solid transparent', cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: 'var(--sans)', fontWeight: sector === s ? 600 : 400, transition: 'all 0.2s' }}>
                {s.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3" style={{ gap: 16 }}>
            {filtered.map(c => (
              <div key={c.name} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 4, padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 500, color: 'var(--forest)', marginBottom: 3 }}>{c.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--muted)' }}>{c.full}</div>
                  </div>
                  <span style={{ background: c.bg, color: c.color, padding: '3px 8px', borderRadius: 2, fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap', flexShrink: 0 }}>{c.sector}</span>
                </div>
                <div style={{ fontSize: 11, color: c.color, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>{c.service}</div>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.9, fontWeight: 300, margin: 0 }}>{c.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
                  {c.services.map(s => (
                    <span key={s} style={{ background: c.bg, color: c.color, padding: '4px 10px', borderRadius: 2, fontSize: 11 }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--forest)', padding: '72px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: 560, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3vw, 42px)', color: '#ffffff', marginBottom: 16 }}>
              Join Our <em style={{ color: 'var(--amber)' }}>Client Portfolio</em>
            </h2>
            <p style={{ fontSize: 15, color: '#d4efeb', fontWeight: 300, lineHeight: 1.8, marginBottom: 32 }}>Let us discuss how Kitchen Three can serve your business.</p>
            <a href="/contact" className="btn btn-white">Get In Touch</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
