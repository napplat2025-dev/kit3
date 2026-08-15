'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ArPageHero from '@/components/ArPageHero'
import { ar } from '@/i18n/dictionaries/ar'
import { arPages2 } from '@/i18n/dictionaries/ar-pages2'

const p = arPages2.team

export default function ArTeam() {
  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)' }}>
      <Nav locale="ar" />
      <ArPageHero crumb={p.crumb} eyebrow={p.eyebrow} titleTop={p.titleTop} titleEm={p.titleEm} intro={p.intro} />

      <section className="section" style={{ background: '#fff' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          {p.members.map(m => (
            <div key={m.name} style={{ borderBottom: '1px solid var(--border)', paddingBottom: 28, marginBottom: 28 }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 23, color: 'var(--forest)', marginBottom: 4, direction: 'ltr', textAlign: 'right' }}>{m.name}</div>
              <div style={{ fontSize: 13, color: 'var(--teal)', fontWeight: 600, marginBottom: 14 }}>{m.title}</div>
              <p style={{ fontSize: 15, color: '#555', fontWeight: 300 }}>{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--forest)', padding: '72px 24px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <h2 style={{ color: '#fff', marginBottom: 20 }}>{ar.contact.titleTop} <em style={{ color: 'var(--amber)' }}>{ar.contact.titleEm}</em></h2>
          <a href="/ar/contact" className="btn btn-white">{ar.nav.cta}</a>
        </div>
      </section>

      <Footer locale="ar" />
    </div>
  )
}
