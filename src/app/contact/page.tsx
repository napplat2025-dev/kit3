'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const waStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 14,
  background: '#25D366',
  color: '#ffffff',
  borderRadius: 'var(--radius)',
  padding: '14px 20px',
  textDecoration: 'none',
  marginBottom: 32,
  fontWeight: 500,
  fontSize: 15,
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [sent, setSent] = useState(false)

  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)' }}>
      <Nav />

      <section style={{ background: 'var(--forest)', padding: '80px 0 64px' }}>
        <div className="container">
          <div style={{ maxWidth: 640 }}>
            <div className="eyebrow" style={{ color: 'var(--amber)', marginBottom: 16 }}>Work With Us</div>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 400, color: '#ffffff', marginBottom: 20, lineHeight: 1.15 }}>
              Let's Create Something <em style={{ color: 'var(--amber)' }}>Extraordinary</em>
            </h1>
            <p style={{ fontSize: 16, color: '#d4efeb', fontWeight: 300, lineHeight: 1.8 }}>
              Available for consulting engagements across Egypt and the region. Whether you are launching a new concept or transforming an existing operation, we are ready to partner with you.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="contact-grid">

            <div>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 400, color: 'var(--forest)', marginBottom: 24 }}>Get In Touch</h2>
              <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 2.4, marginBottom: 24 }}>
                <div>Cairo, Egypt</div>
                <div><a href="mailto:kf@kitchenthree.co" style={{ color: 'var(--teal)' }}>kf@kitchenthree.co</a></div>
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

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: 32 }}>
                <div style={{ fontSize: 11, letterSpacing: '0.16em', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 600, marginBottom: 20 }}>What We Can Help With</div>
                {[
                  'Culinary consulting & concept development',
                  'Chef matchmaking & placement',
                  'HACCP compliance & food safety',
                  'Cloud kitchen setup & operations',
                  'Brand identity & menu design',
                  'Staff training & masterclasses',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', gap: 12, marginBottom: 12, alignItems: 'flex-start' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)', flexShrink: 0, marginTop: 6 }} />
                    <span style={{ fontSize: 14, color: 'var(--muted)', fontWeight: 300 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: 32 }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 26, color: 'var(--teal)', marginBottom: 10 }}>Message Sent</div>
                  <div style={{ fontSize: 14, color: 'var(--muted)' }}>We will be in touch within 24 hours.</div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 400, color: 'var(--forest)', marginBottom: 8 }}>Send a Message</h3>
                  {[['name', 'Your Name'], ['email', 'Email Address'], ['phone', 'Phone / WhatsApp'], ['company', 'Company / Organisation']].map(([k, p]) => (
                    <input key={k} placeholder={p} value={(form as any)[k]} onChange={e => setForm({ ...form, [k]: e.target.value })}
                      style={{ padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: 'var(--cream)', width: '100%' }} />
                  ))}
                  <textarea placeholder="Tell us about your project..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={5}
                    style={{ padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: 'var(--cream)', width: '100%', resize: 'vertical' }} />
                  <button className="btn btn-primary" style={{ width: '100%', padding: '14px' }}
                    onClick={() => {
                      if (form.name && form.email && form.message) {
                        fetch('https://formspree.io/f/xojkprga', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ name: form.name, email: form.email, phone: form.phone, company: form.company, message: form.message })
                        }).then(() => setSent(true)).catch(() => setSent(true))
                      }
                    }}>
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
        }
      `}</style>
    </div>
  )
}
