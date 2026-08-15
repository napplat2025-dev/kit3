'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ArPageHero from '@/components/ArPageHero'
import { ar } from '@/i18n/dictionaries/ar'
import { arPages2 } from '@/i18n/dictionaries/ar-pages2'

const p = arPages2.ourStory

export default function ArOurStory() {
  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)' }}>
      <Nav locale="ar" />
      <ArPageHero crumb={p.crumb} eyebrow={p.eyebrow} titleTop={p.titleTop} titleEm={p.titleEm} intro={p.intro} />

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          {p.milestones.map((m, i) => (
            <div key={i} style={{ display: 'flex', gap: 32, marginBottom: 56, alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, textAlign: 'center', minWidth: 96 }}>
                <div style={{ fontFamily: 'var(--serif)', fontWeight: 400, color: 'var(--teal)', lineHeight: 1, fontSize: m.year === 'اليوم' ? 'clamp(24px,4vw,34px)' : 'clamp(26px,5vw,42px)' }}>{m.year}</div>
                <div style={{ fontSize: 12, color: 'var(--coral)', marginTop: 8, fontWeight: 500 }}>{m.label}</div>
              </div>
              <div style={{ borderRight: '2px solid var(--border)', paddingRight: 28, flex: 1 }}>
                <h2 style={{ fontSize: 'clamp(20px,2.5vw,27px)', color: 'var(--forest)', marginBottom: 16, lineHeight: 1.5 }}>{m.heading}</h2>
                {m.body.map((b, j) => (
                  <p key={j} style={{ fontSize: 15.5, color: '#555', fontWeight: 300, marginBottom: 14 }}>{b}</p>
                ))}
              </div>
            </div>
          ))}
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
