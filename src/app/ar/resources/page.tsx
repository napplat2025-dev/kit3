'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ArPageHero from '@/components/ArPageHero'
import { ar } from '@/i18n/dictionaries/ar'
import { arPages2 } from '@/i18n/dictionaries/ar-pages2'
import { guides } from '@/app/constants/homeData'

const p = arPages2.resources

export default function ArResources() {
  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)' }}>
      <Nav locale="ar" />
      <ArPageHero crumb={p.crumb} eyebrow={p.eyebrow} titleTop={p.titleTop} titleEm={p.titleEm} intro={p.intro} />

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="grid-3">
            {guides.map(g => (
              <div key={g.title} className="card" style={{ padding: '26px 22px' }}>
                <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--forest)', marginBottom: 10, direction: 'ltr', textAlign: 'right' }} lang="en">{g.title}</div>
                <div style={{ fontSize: 13.5, color: 'var(--muted)', fontWeight: 300, direction: 'ltr', textAlign: 'right' }} lang="en">{g.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40, fontSize: 14, color: 'var(--muted)', fontWeight: 300 }}>
            {p.note}{' '}
            <a href="/resources" style={{ color: 'var(--teal)', fontWeight: 500 }}>{p.cta}</a>
          </div>
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
