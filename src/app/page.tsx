'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { services, chefs, clients, steps, personas, waStyle, investItems, stats, trustedBy } from '@/app/constants/homeData'

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [sent, setSent] = useState(false)

  const featuredServices = services.slice(0, 3)
  const remainingServices = services.slice(3)
  const featuredPersonas = personas.slice(0, 4)

  const investIcons: Record<string, string> = {
    'Production Infrastructure': '01',
    'Culinary Concept Ventures': '02',
    'Global investor Network': '03',
    'Egypt F&B Growth Market': '04',
  }

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
                Egypt's<br />
                <em style={{ color: 'var(--teal)' }}>Full-Stack</em><br />
                Culinary<br />Consultancy
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
              {stats.map(s => (
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
            {trustedBy.map(c => (
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
          <div className="grid-3" style={{ marginBottom: 12 }}>
            {featuredServices.map(s => (
              <a key={s.num} href={s.href} className="card" style={{ padding: '28px 24px', display: 'block' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 56, fontWeight: 300, color: s.color, lineHeight: 1, marginBottom: 4, opacity: 0.3 }}>{s.num}</div>
                <div className="badge" style={{ background: s.bg, color: s.color, marginBottom: 14 }}>{s.kw}</div>
                <h3 style={{ fontSize: 20, marginBottom: 10, color: 'var(--forest)' }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: '#666', lineHeight: 1.7, fontWeight: 300 }}>{s.desc}</p>
                <div style={{ marginTop: 16, fontSize: 12, color: s.color, fontWeight: 500, letterSpacing: '0.06em' }}>Learn more →</div>
              </a>
            ))}
          </div>
          <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '16px 20px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <div className="service-pills" style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 500, marginRight: 4 }}>+ {remainingServices.length} more services</span>
              {remainingServices.map(s => (
                <a key={s.num} href={s.href} style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', color: s.color, background: s.bg, padding: '4px 12px', borderRadius: 999, textDecoration: 'none', whiteSpace: 'nowrap' }}>{s.title}</a>
              ))}
            </div>
            <a href="/services" style={{ fontSize: 12, color: 'var(--teal)', fontWeight: 500, whiteSpace: 'nowrap', letterSpacing: '0.06em' }}>View all services →</a>
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

      {/* Mid-page CTA */}
      <section style={{ background: 'var(--teal)', padding: '48px 24px' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px, 4vw, 36px)', color: '#fff', fontWeight: 400, lineHeight: 1.2, marginBottom: 8 }}>
                13 years. 10 chefs. 8 pillars. <em style={{ color: 'var(--amber)' }}>One partner.</em>
              </div>
              <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', fontWeight: 300 }}>
                Everything your F&B venture needs — under one roof, with one accountable team.
              </div>
            </div>
            <a href="/contact" className="btn btn-white" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
              Start a Conversation →
            </a>
          </div>
        </div>
      </section>

      {/* Who We Work With — 4 personas */}
      <section className="section" style={{ background: '#fff', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" style={{ color: 'var(--teal)' }}>Who We Work With</div>
            <h2>Built for the People <em style={{ color: 'var(--teal)' }}>Who Build F&B</em></h2>
            <p>Whether you are launching your first concept, rescuing an existing operation, or entering Egypt as an investor from anywhere in the world — Kitchen Three has the right team and the right tools for your situation.</p>
          </div>
          <div className="grid-4">
            {featuredPersonas.map((p, i) => (
              <div key={p.title} className="card" style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 40, fontWeight: 300, color: p.color, lineHeight: 1, marginBottom: 16, opacity: 0.25 }}>0{i + 1}</div>
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
              <h2 style={{ color: '#fff', marginBottom: 16 }}>Investment <em style={{ color: 'var(--amber)' }}>Opportunities</em></h2>
              <p style={{ fontSize: 16, color: '#7ab8b0', lineHeight: 1.9, fontWeight: 300, marginBottom: 32 }}>
                Kitchen Three periodically develops and co-invests in Egypt F&B ventures — from certified production infrastructure to culinary concept ventures. We work with investors, operators, and capital partners from anywhere in the world. When an opportunity opens, our network hears first.
              </p>
              <a href="/invest" className="btn btn-white">Interested in Investment Opportunities →</a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {investItems.map(item => (
                <div key={item.label} style={{ padding: '24px 16px', background: 'rgba(168,216,210,0.07)', border: '1px solid rgba(168,216,210,0.15)', borderRadius: 'var(--radius)', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 32, fontWeight: 300, color: 'var(--amber)', lineHeight: 1, marginBottom: 12, opacity: 0.6 }}>{investIcons[item.label]}</div>
                  <div style={{ fontSize: 12, color: '#a8d8d2', fontWeight: 400, lineHeight: 1.5 }}>{item.label}</div>
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
              <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 2.2, marginBottom: 24 }}>
                <div>Cairo, Egypt</div>
                <div><a href="mailto:kitchenthreecairo@gmail.com" style={{ color: 'var(--teal)' }}>kitchenthreecairo@gmail.com</a></div>
                <div><a href="tel:+201222186669" style={{ color: 'var(--teal)' }}>+20 122 218 6669</a></div>
                <div><a href="https://www.kitchenthree.co" style={{ color: 'var(--teal)' }}>www.kitchenthree.co</a></div>
              </div>
              <a href="https://wa.me/201222186669" target="_blank" rel="noopener noreferrer" style={waStyle}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <div>
                  <div style={{ fontSize: 13, opacity: 0.85, fontWeight: 400, lineHeight: 1 }}>Prefer WhatsApp?</div>
                  <div style={{ lineHeight: 1.4, marginTop: 3 }}>Message us on +20 122 218 6669</div>
                </div>
              </a>
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
                        body: JSON.stringify(form)
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
          .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .invest-home-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          .service-pills { display: none !important; }
        }
      `}</style>
    </div>
  )
}
