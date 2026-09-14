'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ArPageHero from '@/components/ArPageHero'
import { ar } from '@/i18n/dictionaries/ar'
import { arPages } from '@/i18n/dictionaries/ar-pages'
import { clients } from '@/app/constants/homeData'

const p = arPages.clients

export default function ArClients() {
  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)' }}>
      <Nav locale="ar" />
      <ArPageHero crumb={p.crumb} eyebrow={p.eyebrow} titleTop={p.titleTop} titleEm={p.titleEm} intro={p.intro} />

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="grid-4">
            {clients.map(c => (
              <div key={c.name} className="card" style={{ padding: '24px 18px' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 19, fontWeight: 500, color: 'var(--forest)', marginBottom: 8, direction: 'ltr', textAlign: 'right' }}>{c.name}</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 300 }}>{ar.clients.sectors[c.name] ?? c.sector}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--forest)', padding: '72px 24px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <h2 style={{ color: '#fff', marginBottom: 20 }}>{ar.contact.titleTop} <em style={{ color: 'var(--amber)' }}>{ar.contact.titleEm}</em></h2>
          <p style={{ fontSize: 15.5, color: '#7ab8b0', fontWeight: 300, marginBottom: 32 }}>{ar.contact.body}</p>
          <a href="/ar/contact" className="btn btn-white">{ar.nav.cta}</a>
        </div>
      </section>

      <Footer locale="ar" />
    </div>
  )
}
