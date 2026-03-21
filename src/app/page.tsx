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
]

const chefs = [
  { initials: 'YB', name: 'Yann Bonneau', country: 'France', bio: 'Champion of Spain in pastry. Co-founder, World Cup of Chocolatine.' },
  { initials: 'EB', name: 'Enzo Bonneau', country: 'France', bio: 'Waterside Inn *** Michelin. La Dame de Pic ** Michelin.' },
  { initials: 'NK', name: 'Niko Koulousias', country: 'Greece', bio: "Prince Harry's royal wedding. Queen Elizabeth's 70th Jubilee." },
  { initials: 'HA', name: 'Hadil Amasheh', country: 'Jordan/Egypt', bio: 'AUC alumna & Goldman Sachs 10K Women. 20+ years experience.' },
  { initials: 'GL', name: 'Gérard Livigni', country: 'France', bio: 'MOF finalist 2011 — Meilleur Ouvrier de France.' },
  { initials: 'RS', name: 'Ramy Somoeil', country: 'Egypt', bio: '20+ years Lebanese, Italian & Mediterranean cuisine.' },
  { initials: 'WK', name: 'Walid Karim', country: 'Egypt', bio: '20+ years pizza mastery. Mercato Italiano, Casper & Gambini.' },
  { initials: 'GM', name: 'Giovani Mascari', country: 'Italy', bio: 'Creator of trademarked Sushi Pizza. Executive pizzaiolo.' },
  { initials: 'LM', name: 'Luca Montersino', country: 'Italy', bio: 'Italian TV pastry sensation. Culinary empire Italy to Tokyo & NY.' },
  { initials: 'LB', name: 'Luca Borgioli', country: 'Italy', bio: 'Gold medal, FIPGC World Panettone Championship 2020.' },
]

const clients = [
  { name: 'AUC', sector: 'University — F&B Consulting' }, { name: 'Nestlé Egypt', sector: 'FMCG — Product Development' },
  { name: 'Maggi', sector: 'FMCG — Culinary Training' }, { name: 'Norwegian Embassy', sector: 'Diplomatic — Event Consulting' },
  { name: 'ILO', sector: 'International Org — Catering' }, { name: 'Prime Holding', sector: 'Corporate — F&B Operations' },
  { name: 'Sea Queen Fleet', sector: 'Maritime — Catering Services' }, { name: "Vinny's Pizza Bar", sector: 'HORECA — Culinary Consulting' },
  { name: 'Divine Foodz', sector: 'F&B Brand — Development' }, { name: 'Garten', sector: 'Restaurant — Menu Design' },
  { name: 'Gateway School', sector: 'Education — F&B Management' }, { name: 'Happy Bites', sector: 'F&B Brand — Development' },
]

const steps = ['Consult', 'Design', 'Execute', 'Train', 'Handover', 'Monitor & Optimise']

export default function Home() {
  const [email, setEmail] = useState('')
  const [subDone, setSubDone] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [sent, setSent] = useState(false)

  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)' }}>
      <Nav />

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(135deg, #c2e8e3 0%, var(--cream) 50%, #fdefd0 100%)', padding: '100px 24px 88px', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
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
              {[{ v: '2013', l: 'Founded' }, { v: '10', l: "Int'l Chefs" }, { v: '6', l: 'Service Pillars' }, { v: '15+', l: 'Major Clients' }].map(s => (
                <div key={s.v} className="card" style={{ padding: '32px 24px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 56, fontWeight: 300, color: 'var(--teal)', lineHeight: 1 }}>{s.v}</div>
                  <div style={{ fontSize: 11, letterSpacing: '0.18em', color: '#888', marginTop: 10, textTransform: 'uppercase', fontWeight: 500 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ── */}
      <section style={{ background: '#fff', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '24px 24px' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
            <div className="eyebrow" style={{ color: '#aaa', marginBottom: 0, flexShrink: 0 }}>Trusted By</div>
            {['AUC', 'Nestlé Egypt', 'Maggi', 'Norwegian Embassy', 'ILO', 'Prime Holding', 'Sea Queen Fleet'].map(c => (
              <div key={c} style={{ fontSize: 13, fontWeight: 500, color: '#666', letterSpacing: '0.04em' }}>{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" style={{ color: 'var(--amber)' }}>What We Do</div>
            <h2>Fully Fledged Culinary Services <em style={{ color: 'var(--teal)' }}>Under One Roof</em></h2>
            <p>Whether you are a startup or an existing operation seeking growth, Kitchen Three provides comprehensive B2B culinary solutions — from concept to result.</p>
          </div>
          <div className="grid-3">
            {services.map(s => (
              <a key={s.num} href={s.href} className="card" style={{ padding: '32px 28px', display: 'block' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 64, fontWeight: 300, color: s.color, lineHeight: 1, marginBottom: 4, opacity: 0.3 }}>{s.num}</div>
                <div className="badge" style={{ background: s.bg, color: s.color, marginBottom: 16 }}>{s.kw}</div>
                <h3 style={{ fontSize: 22, marginBottom: 12, color: 'var(--forest)' }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: '#666', lineHeight: 1.7, fontWeight: 300 }}>{s.desc}</p>
                <div style={{ marginTop: 20, fontSize: 12, color: s.color, fontWeight: 500, letterSpacing: '0.06em' }}>Learn more →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section className="section" style={{ background: 'var(--forest)' }}>
        <div className="container">
          <div className="section-header" style={{ color: '#fff' }}>
            <div className="eyebrow" style={{ color: 'var(--amber)' }}>Our Approach</div>
            <h2 style={{ color: '#fff' }}>A Recipe of <em style={{ color: 'var(--amber)' }}>Guaranteed Sustainable Success</em></h2>
          </div>
          <div style={{ display: 'flex', gap: 0, justifyContent: 'center', flexWrap: 'wrap' }}>
            {steps.map((step, i) => (
              <div key={step} style={{ textAlign: 'center', padding: '0 24px', position: 'relative' }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(168,216,210,0.15)', border: '1.5px solid rgba(168,216,210,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontFamily: 'var(--serif)', fontSize: 22, color: 'var(--amber)' }}>{i + 1}</div>
                <div style={{ fontSize: 13, color: '#a8d8d2', fontWeight: 500, letterSpacing: '0.06em' }}>{step}</div>
                {i < steps.length - 1 && <div className="hide-mobile" style={{ position: 'absolute', top: 25, right: -8, width: 16, height: 1, background: 'rgba(168,216,210,0.3)' }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHEFS ── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" style={{ color: 'var(--coral)' }}>Chef Matchmaking</div>
            <h2>A Powerhouse Lineup of <em style={{ color: 'var(--teal)' }}>Culinary Masters</em></h2>
            <p>10 international chefs — Michelin-pedigreed, award-winning, globally experienced — matched to your exact project requirements.</p>
          </div>
          <div className="grid-5">
            {chefs.map(c => (
              <div key={c.name} className="card" style={{ padding: '24px 20px', textAlign: 'center' }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'linear-gradient(135deg, var(--teal-light), var(--teal-mid))', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px', fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 500, color: 'var(--teal)' }}>{c.initials}</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--forest)', marginBottom: 4 }}>{c.name}</div>
                <div style={{ fontSize: 11, color: 'var(--amber)', letterSpacing: '0.1em', marginBottom: 10, textTransform: 'uppercase' }}>{c.country}</div>
                <div style={{ fontSize: 12, color: '#777', lineHeight: 1.6, fontWeight: 300 }}>{c.bio}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <a href="/chefs" className="btn btn-outline">View Full Chef Profiles</a>
          </div>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" style={{ color: 'var(--amber)' }}>Our Portfolio</div>
            <h2>Clients & <em style={{ color: 'var(--teal)' }}>Partners</em></h2>
          </div>
          <div className="grid-4">
            {clients.map(c => (
              <div key={c.name} className="card" style={{ padding: '24px 20px' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 500, color: 'var(--forest)', marginBottom: 8 }}>{c.name}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 300 }}>{c.sector}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY ── */}
      <section className="section" style={{ background: '#fff', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <div className="eyebrow" style={{ color: 'var(--teal)' }}>Community & CSR</div>
              <h2>Free Sessions for <em style={{ color: 'var(--teal)' }}>New Foodies</em></h2>
              <div className="divider" />
              <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.9, fontWeight: 300, marginBottom: 32 }}>
                We believe in growing Egypt's culinary ecosystem. Kitchen Three offers free industry sessions, downloadable guides, and handouts for aspiring food entrepreneurs.
              </p>
              <div style={{ display: 'flex', gap: 12 }}>
                {subDone ? (
                  <div style={{ fontSize: 14, color: 'var(--teal)', fontWeight: 500 }}>✓ You're on the list!</div>
                ) : (
                  <>
                    <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address" style={{ flex: 1, padding: '12px 16px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: 'var(--cream)' }} />
                    <button className="btn btn-primary" onClick={() => { if (email) setSubDone(true) }} style={{ padding: '12px 24px' }}>Subscribe</button>
                  </>
                )}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { title: 'Egypt F&B Startup Checklist', desc: 'Everything you need to launch a food business in Egypt.' },
                { title: 'How to Write a Menu That Sells', desc: 'Menu engineering principles from our consultant team.' },
                { title: 'HACCP Made Simple', desc: 'A plain-English guide to food safety compliance.' },
              ].map(g => (
                <div key={g.title} className="card" style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: '0.14em', color: 'var(--teal)', textTransform: 'uppercase', fontWeight: 500, marginBottom: 4 }}>Free PDF Guide</div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--forest)', marginBottom: 4 }}>{g.title}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 300 }}>{g.desc}</div>
                  </div>
                  <a href="/resources" style={{ fontSize: 12, color: 'var(--teal)', fontWeight: 500, whiteSpace: 'nowrap', letterSpacing: '0.06em' }}>Download →</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="section" style={{ background: 'var(--cream)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <div className="eyebrow" style={{ color: 'var(--amber)' }}>Work With Us</div>
              <h2>Let's Create Something <em style={{ color: 'var(--teal)' }}>Extraordinary</em></h2>
              <div className="divider" />
              <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.9, fontWeight: 300, marginBottom: 32 }}>
                Available for consulting engagements across Egypt and the region. Whether you're launching a new concept or transforming an existing operation, we're ready to partner with you.
              </p>
              <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 2 }}>
                <div>📍 Cairo, Egypt</div>
                <div>✉️ <a href="mailto:kitchenthreecairo@gmail.com" style={{ color: 'var(--teal)' }}>kitchenthreecairo@gmail.com</a></div>
                <div>🌐 <a href="https://www.kitchenthree.co" style={{ color: 'var(--teal)' }}>www.kitchenthree.co</a></div>
              </div>
            </div>
            <div className="card" style={{ padding: 36 }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 24, color: 'var(--teal)', marginBottom: 8 }}>Message Sent</div>
                  <div style={{ fontSize: 14, color: 'var(--muted)' }}>We'll be in touch within 24 hours.</div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <h3 style={{ fontSize: 20, marginBottom: 8 }}>Send a Message</h3>
                  {[['name', 'Your Name'], ['email', 'Email Address'], ['company', 'Company / Organisation']].map(([k, p]) => (
                    <input key={k} placeholder={p} value={(form as any)[k]} onChange={e => setForm({ ...form, [k]: e.target.value })}
                      style={{ padding: '12px 16px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: 'var(--cream)', width: '100%' }} />
                  ))}
                  <textarea placeholder="Tell us about your project..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={4}
                    style={{ padding: '12px 16px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: 'var(--cream)', width: '100%', resize: 'vertical' }} />
                  <button className="btn btn-primary" style={{ width: '100%', padding: '14px' }}
                    onClick={() => { if (form.name && form.email && form.message) {
        fetch('https://formspree.io/f/xojkprga', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({name: form.name, email: form.email, company: form.company, message: form.message})
        }).then(() => setSent(true)).catch(() => setSent(true))
      } }}>
                    Send Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
