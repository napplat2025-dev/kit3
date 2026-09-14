'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ArPageHero from '@/components/ArPageHero'
import { ar } from '@/i18n/dictionaries/ar'
import { arPages } from '@/i18n/dictionaries/ar-pages'
import { waStyle } from '@/app/constants/homeData'

const p = arPages.contact

export default function ArContact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '', _gotcha: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)' }}>
      <Nav locale="ar" />
      <ArPageHero crumb={p.crumb} eyebrow={p.eyebrow} titleTop={p.titleTop} titleEm={p.titleEm} intro={p.intro} />

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 400, color: 'var(--forest)', marginBottom: 24 }}>{p.detailsTitle}</h2>
              <div style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 2.4, marginBottom: 24 }}>
                <div>{ar.contact.city}</div>
                <div><a href="mailto:kf@kitchenthree.co" style={{ color: 'var(--teal)', direction: 'ltr', display: 'inline-block' }}>kf@kitchenthree.co</a></div>
                <div><a href="tel:+201222186669" style={{ color: 'var(--teal)', direction: 'ltr', display: 'inline-block' }}>+20 122 218 6669</a></div>
              </div>
              <a href="https://wa.me/201222186669" target="_blank" rel="noopener noreferrer" style={waStyle}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div>
                  <div style={{ fontSize: 13, opacity: 0.85, fontWeight: 400, lineHeight: 1 }}>{ar.contact.waTitle}</div>
                  <div style={{ lineHeight: 1.6, marginTop: 3 }}>{ar.contact.waBody}</div>
                </div>
              </a>
            </div>

            <div className="card" style={{ padding: 28 }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 24, color: 'var(--teal)', marginBottom: 8 }}>{ar.contact.sentTitle}</div>
                  <div style={{ fontSize: 14, color: 'var(--muted)' }}>{ar.contact.sentBody}</div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <h3 style={{ fontSize: 18, marginBottom: 4 }}>{ar.contact.formTitle}</h3>
                  {([['name', ar.contact.fields.name], ['email', ar.contact.fields.email], ['phone', ar.contact.fields.phone], ['company', ar.contact.fields.company]] as const).map(([k, ph]) => (
                    <input key={k} placeholder={ph} value={form[k]} onChange={e => setForm({ ...form, [k]: e.target.value })}
                      style={{ padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: 'var(--cream)', width: '100%' }} />
                  ))}
                  <input type="text" name="_gotcha" value={form._gotcha} onChange={e => setForm({ ...form, _gotcha: e.target.value })} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                  <textarea placeholder={ar.contact.fields.message} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={5}
                    style={{ padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: 'var(--cream)', width: '100%', resize: 'vertical' }} />
                  {error && <div style={{ fontSize: 13, color: '#c0392b' }}>{ar.contact.error}</div>}
                  <button className="btn btn-primary" style={{ width: '100%', padding: '14px' }}
                    onClick={() => {
                      if (form.name && form.email && form.message) {
                        fetch('https://formspree.io/f/xojkprga', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ ...form, locale: 'ar', source: 'contact page (ar)' }),
                        }).then(res => { if (res.ok) setSent(true); else setError(true) }).catch(() => setError(true))
                      }
                    }}>
                    {ar.contact.send}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer locale="ar" />
      <style>{`@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
    </div>
  )
}
