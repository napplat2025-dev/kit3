'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const services = [
  { num: '01', title: 'Culinary Consulting', desc: 'From concept to result — innovation, strategy, brand development, menu engineering, and full operations.', color: 'var(--teal)', bg: 'var(--teal-light)', kw: 'Food Business Consulting Egypt', href: '/services#culinary-consulting' },
  { num: '02', title: 'Design Services', desc: 'Brand identity, naming, go-to-market campaigns, menu design, plateware, packaging, and food theater.', color: 'var(--amber)', bg: 'var(--amber-light)', kw: 'Food Brand Design Cairo', href: '/services#design-services' },
  { num: '03', title: 'Chef Matchmaking', desc: 'Access our roster of 10 international chefs — Michelin-pedigreed, award-winning, globally experienced.', color: 'var(--coral)', bg: 'var(--coral-light)', kw: 'Michelin Chef Hire Egypt', href: '/services#chef-matchmaking' },
  { num: '04', title: 'Recruitment & Training', desc: 'Staff training, masterclasses, food business startup classes, and team building programs.', color: 'var(--teal)', bg: 'var(--teal-light)', kw: 'Culinary Training Cairo', href: '/services#recruitment-training' },
  { num: '05', title: 'Cloud Kitchen Services', desc: 'Turnkey operations and short-term rentals. HACCP and Codex Alimentarius certified central kitchens.', color: 'var(--amber)', bg: 'var(--amber-light)', kw: 'Cloud Kitchen Egypt', href: '/services#cloud-kitchen' },
  { num: '06', title: 'Technology Infrastructure', desc: 'Menu builder, ordering, reservations, mobile app, payments, CRM, loyalty — a complete digital stack.', color: 'var(--coral)', bg: 'var(--coral-light)', kw: 'Restaurant Technology Egypt', href: '/services#technology' },
  { num: '07', title: 'Site Selection & Lease Advisory', desc: "We don't just find you a space — we find you the right space. Foot traffic analysis, lease negotiation, and landlord management.", color: 'var(--teal)', bg: 'var(--teal-light)', kw: 'Restaurant Location Hunting Cairo', href: '/services#site-selection' },
  { num: '08', title: 'F&B Financial Turnaround', desc: 'For operations that need to recover, stabilise, and grow again. We diagnose what is broken and build the path back to profitability.', color: 'var(--amber)', bg: 'var(--amber-light)', kw: 'F&B Turnaround Consulting Egypt', href: '/services#financial-turnaround' },
]

const chefs = [
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

const clients = [
  { name: 'AUC', sector: 'University — F&B Consulting' }, { name: 'Nestle Egypt', sector: 'FMCG — Product Development' },
  { name: 'Maggi', sector: 'FMCG — Culinary Training' }, { name: 'Norwegian Embassy', sector: 'Diplomatic — Event Consulting' },
  { name: 'ILO', sector: 'International Org — Catering' }, { name: 'Prime Holding', sector: 'Corporate — F&B Operations' },
  { name: 'Sea Queen Fleet', sector: 'Maritime — Catering Services' }, { name: "Vinny's Pizza Bar", sector: 'HORECA — Culinary Consulting' },
  { name: 'Divine Foodz', sector: 'F&B Brand — Development' }, { name: 'Garten', sector: 'Restaurant — Menu Design' },
  { name: 'Gateway School', sector: 'Education — F&B Management' }, { name: 'Happy Bites', sector: 'F&B Brand — Development' },
]

const steps = ['Consult', 'Design', 'Execute', 'Train', 'Handover', 'Monitor & Optimise']

const personas = [
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
    title: 'GCC & International Investors',
    desc: 'Entering the Egypt market post-2024? Kitchen Three is your on-the-ground partner — combining local market knowledge with international culinary standards and full compliance infrastructure.',
    pillars: ['Market Entry Advisory', 'Michelin Chef Hire', 'Brand Localisation', 'Full Compliance'],
    color: 'var(--teal)',
    bg: 'var(--teal-light)',
    cta: '/contact',
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
    desc: 'You have the aesthetic vision and the Instagram following — we bring the operational rigour, food costing, and brand depth to turn it into a sustainable business.',
    pillars: ['Concept Development', 'Food Theater & Design', 'Menu Engineering', 'Launch Strategy'],
    color: 'var(--coral)',
    bg: 'var(--coral-light)',
    cta: '/services#design-services',
  },
]

export default function Home() {
  const [email, setEmail] = useState('')
  const [subDone, setSubDone] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [sent, setSent] = useState(false)

  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)' }}>
      <Nav />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #c2e8e3 0%, var(--cream) 50%, #fdefd0 100%)', padding: '80px 24px 64px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div className="fade-up">
              <div className="eyebrow" style={{ background: 'var(--teal-light)', color: 'var(--teal)', padding: '6px 16px', borderRadius: 2, border: '1px solid var(--teal-mid)' }}>
                B2B Culinary Consultancy · Est. 2013 · Cairo, Egypt
              </div>
              <h1 style={{ color: 'var(--forest)', marginBottom: 24, marginTop: 8 }}>
                Empowering<br />
                <em style={{ color: 'var(--teal)' }}>Culinary Success</em><br />
                with Precision &<br />Sustainability
              </h1>
              <p style={{ fontSize: 17, lineHeight: 1.9, color: '#4a5568', marginBottom: 40, maxWidth: 480, fontWeight: 300 }}>
                From concept to execution — Kitchen Three partners with corporations, HORECA operators, and food brands to deliver world-class culinary solutions backed by a powerhouse roster of 10 international chefs.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <a href="/services" className="btn btn-primary">Explore Services</a>
                <a href="/chefs" className="btn btn-outline">Meet Our Chefs</a>
              </div>
            </div>
            <div className="hero-right fade-up-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[{ v: '2013', l: 'Founded' }, { v: '10', l: "Int'l Chefs" }, { v: '8', l: 'Service Pillars' }, { v: '15+', l: 'Major Clients' }].map(s => (
                <div key={s.v} className="card" style={{ padding: '28px 20px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 48, fontWeight: 300, color: 'var(--teal)', lineHeight: 1 }}>{s.v}</div>
                  <div style={{ fontSize: 11, letterSpacing: '0.18em', color: '#888', marginTop: 8, textTransform: 'uppercase', fontWeight: 500 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section style={{ background: '#fff', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '20px 24px', overflowX: 'auto' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
            <div className="eyebrow" style={{ color: '#aaa', marginBottom: 0, flexShrink: 0 }}>Trusted By</div>
            {['AUC', 'Nestle Egypt', 'Maggi', 'Norwegian Embassy', 'ILO', 'Prime Holding', 'Sea Queen Fleet'].map(c => (
              <div key={c} style={{ fontSize: 12, fontWeight: 500, color: '#666', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" style={{ color: 'var(--amber)' }}>What We Do</div>
            <h2>Fully Fledged Culinary Services <em style={{ color: 'var(--teal)' }}>Under One Roof</em></h2>
            <p>Whether you are a startup or an existing operation seeking growth, Kitchen Three provides comprehensive B2B culinary solutions — from concept to result.</p>
          </div>
          <div className="grid-3">
            {services.map(s => (
              <a key={s.num} href={s.href} className="card" style={{ padding: '28px 24px', display: 'block' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 56, fontWeight: 300, color: s.color, lineHeight: 1, marginBottom: 4, opacity: 0.3 }}>{s.num}</div>
                <div className="badge" style={{ background: s.bg, color: s.color, marginBottom: 14 }}>{s.kw}</div>
                <h3 style={{ fontSize: 20, marginBottom: 10, color: 'var(--forest)' }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: '#666', lineHeight: 1.7, fontWeight: 300 }}>{s.desc}</p>
                <div style={{ marginTop: 16, fontSize: 12, color: s.color, fontWeight: 500, letterSpacing: '0.06em' }}>Learn more →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section" style={{ background: 'var(--forest)' }}>
        <div className="container">
          <div className="section-header" style={{ color: '#fff' }}>
            <div className="eyebrow" style={{ color: 'var(--amber)' }}>Our Approach</div>
            <h2 style={{ color: '#fff' }}>A Recipe of <em style={{ color: 'var(--amber)' }}>Guaranteed Sustainable Success</em></h2>
          </div>
          <div style={{ display: 'flex', gap: 0, justifyContent: 'center', flexWrap: 'wrap' }}>
            {steps.map((step, i) => (
              <div key={step} style={{ textAlign: 'center', padding: '0 20px', position: 'relative' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(168,216,210,0.15)', border: '1.5px solid rgba(168,216,210,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--amber)' }}>{i + 1}</div>
                <div style={{ fontSize: 12, color: '#a8d8d2', fontWeight: 500, letterSpacing: '0.06em' }}>{step}</div>
                {i < steps.length - 1 && <div className="hide-mobile" style={{ position: 'absolute', top: 23, right: -8, width: 16, height: 1, background: 'rgba(168,216,210,0.3)' }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chefs */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" style={{ color: 'var(--coral)' }}>Chef Matchmaking</div>
            <h2>A Powerhouse Lineup of <em style={{ color: 'var(--teal)' }}>Culinary Masters</em></h2>
            <p>10 international chefs — Michelin-pedigreed, award-winning, globally experienced — matched to your exact project requirements.</p>
          </div>
          <div className="grid-5">
            {chefs.map(c => (
              <a key={c.slug} href={'/chefs/' + c.slug} style={{ textDecoration: 'none', textAlign: 'center', display: 'block' }}>
                <div style={{ width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 10px', border: '2px solid var(--border)' }}>
                  <img loading="lazy" src={c.photo} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--forest)', marginBottom: 2 }}>{c.name}</div>
                <div style={{ fontSize: 10, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>{c.country}</div>
              </a>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <a href="/chefs" className="btn btn-outline">View Full Chef Profiles</a>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" style={{ color: 'var(--amber)' }}>Our Portfolio</div>
            <h2>Clients & <em style={{ color: 'var(--teal)' }}>Partners</em></h2>
          </div>
          <div className="grid-4">
            {clients.map(c => (
              <div key={c.name} className="card" style={{ padding: '20px 16px' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 500, color: 'var(--forest)', marginBottom: 6 }}>{c.name}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 300 }}>{c.sector}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="section" style={{ background: '#fff', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" style={{ color: 'var(--teal)' }}>Who We Work With</div>
            <h2>Built for the People <em style={{ color: 'var(--teal)' }}>Who Build F&B</em></h2>
            <p>Whether you are launching your first concept, rescuing an existing operation, or entering Egypt as a GCC investor — Kitchen Three has the right team and the right tools for your situation.</p>
          </div>
          <div className="grid-3">
            {personas.map(p => (
              <div key={p.title} className="card" style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{p.icon}</div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: p.color, textTransform: 'uppercase', marginBottom: 10 }}>{p.title}</div>
                <p style={{ fontSize: 14, color: '#555', lineHeight: 1.8, fontWeight: 300, marginBottom: 20, flex: 1 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                  {p.pillars.map(pill => (
                    <span key={pill} style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', color: p.color, background: p.bg, padding: '4px 10px', borderRadius: 2, textTransform: 'uppercase' }}>{pill}</span>
                  ))}
                </div>
                <a href={p.cta} style={{ fontSize: 12, color: p.color, fontWeight: 600, letterSpacing: '0.06em' }}>See how we can help →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="section" style={{ background: 'var(--forest)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="invest-home-grid">
            <div>
              <div className="eyebrow" style={{ color: 'var(--amber)' }}>Beyond Consulting</div>
              <h2 style={{ color: '#fff', marginBottom: 16 }}>
                Investment <em style={{ color: 'var(--amber)' }}>Opportunities</em>
              </h2>
              <p style={{ fontSize: 16, color: '#7ab8b0', lineHeight: 1.9, fontWeight: 300, marginBottom: 32 }}>
                Kitchen Three periodically develops and co-invests in Egypt F&B ventures — from certified production infrastructure to culinary concept ventures. When an opportunity opens, our network hears first.
              </p>
              <a href="/invest" className="btn btn-white">Interested in Investment Opportunities →</a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { icon: '🏗', label: 'Production Infrastructure' },
                { icon: '🍽', label: 'Culinary Concept Ventures' },
                { icon: '🎓', label: 'Education & Training Assets' },
                { icon: '📈', label: 'Egypt F&B Growth Market' },
              ].map(item => (
                <div key={item.label} style={{ padding: '20px 16px', background: 'rgba(168,216,210,0.07)', border: '1px solid rgba(168,216,210,0.15)', borderRadius: 'var(--radius)', textAlign: 'center' }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                  <div style={{ fontSize: 12, color: '#a8d8d2', fontWeight: 400, lineHeight: 1.5 }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="section" style={{ background: '#fff', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="community-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div className="eyebrow" style={{ color: 'var(--teal)' }}>Community & CSR</div>
              <h2>Free Sessions for <em style={{ color: 'var(--teal)' }}>New Foodies</em></h2>
              <div className="divider" />
              <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.9, fontWeight: 300, marginBottom: 28 }}>
                We believe in growing Egypt's culinary ecosystem. Kitchen Three offers free industry sessions, downloadable guides, and handouts for aspiring food entrepreneurs.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {subDone ? (
                  <div style={{ fontSize: 14, color: 'var(--teal)', fontWeight: 500 }}>You are on the list!</div>
                ) : (
                  <>
                    <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address" style={{ flex: 1, minWidth: 180, padding: '12px 16px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: 'var(--cream)' }} />
                    <button className="btn btn-primary" onClick={() => { if (email) setSubDone(true) }} style={{ padding: '12px 20px' }}>Subscribe</button>
                  </>
                )}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { title: 'Egypt F&B Startup Checklist', desc: 'Everything you need to launch a food business in Egypt.' },
                { title: 'How to Write a Menu That Sells', desc: 'Menu engineering principles from our consultant team.' },
                { title: 'HACCP Made Simple', desc: 'A plain-English guide to food safety compliance.' },
              ].map(g => (
                <div key={g.title} className="card" style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: '0.14em', color: 'var(--teal)', textTransform: 'uppercase', fontWeight: 500, marginBottom: 3 }}>Free PDF Guide</div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--forest)', marginBottom: 3 }}>{g.title}</div>
                    <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 300 }}>{g.desc}</div>
                  </div>
                  <a href="/resources" style={{ fontSize: 12, color: 'var(--teal)', fontWeight: 500, whiteSpace: 'nowrap' }}>Download →</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section" style={{ background: 'var(--cream)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
            <div>
              <div className="eyebrow" style={{ color: 'var(--amber)' }}>Work With Us</div>
              <h2>Let's Create Something <em style={{ color: 'var(--teal)' }}>Extraordinary</em></h2>
              <div className="divider" />
              <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.9, fontWeight: 300, marginBottom: 28 }}>
                Available for consulting engagements across Egypt and the region. Whether you are launching a new concept or transforming an existing operation, we are ready to partner with you.
              </p>
              <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 2.2 }}>
                <div>Cairo, Egypt</div>
                <div><a href="mailto:kitchenthreecairo@gmail.com" style={{ color: 'var(--teal)' }}>kitchenthreecairo@gmail.com</a></div>
                <div><a href="https://www.kitchenthree.co" style={{ color: 'var(--teal)' }}>www.kitchenthree.co</a></div>
              </div>
            </div>
            <div className="card" style={{ padding: 28 }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 24, color: 'var(--teal)', marginBottom: 8 }}>Message Sent</div>
                  <div style={{ fontSize: 14, color: 'var(--muted)' }}>We will be in touch within 24 hours.</div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <h3 style={{ fontSize: 18, marginBottom: 4 }}>Send a Message</h3>
                  {[['name', 'Your Name'], ['email', 'Email Address'], ['phone', 'Phone / WhatsApp'], ['company', 'Company / Organisation']].map(([k, p]) => (
                    <input key={k} placeholder={p} value={(form as any)[k]} onChange={e => setForm({ ...form, [k]: e.target.value })}
                      style={{ padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: 'var(--cream)', width: '100%' }} />
                  ))}
                  <textarea placeholder="Tell us about your project..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={4}
                    style={{ padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: 'var(--cream)', width: '100%', resize: 'vertical' }} />
                  <button className="btn btn-primary" style={{ width: '100%', padding: '14px' }}
                    onClick={() => { if (form.name && form.email && form.message) {
                      fetch('https://formspree.io/f/xojkprga', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ name: form.name, email: form.email, phone: form.phone, company: form.company, message: form.message })
                      }).then(() => setSent(true)).catch(() => setSent(true))
                    }}}>
                    Send Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <style>{`
        @media (max-width: 768px) {
          .community-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .invest-home-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </div>
  )
}
