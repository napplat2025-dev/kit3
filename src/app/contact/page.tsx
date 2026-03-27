'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

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
              <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 2.4, marginBottom: 32 }}>
                <div>Cairo, Egypt</div>
                <div><a href="mailto:kitchenthreecairo@gmail.com" style={{ color: 'var(--teal)' }}>kitchenthreecairo@gmail.com</a></div>
                <div><a href="https://www.kitchenthree.co" style={{ color: 'var(--teal)' }}>www.kitchenthree.co</a></div>
              </div>

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
