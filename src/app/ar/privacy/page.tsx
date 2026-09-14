'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ArPageHero from '@/components/ArPageHero'
import { arPages2 } from '@/i18n/dictionaries/ar-pages2'

const p = arPages2.privacy

export default function ArPrivacy() {
  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)' }}>
      <Nav locale="ar" />
      <ArPageHero crumb={p.crumb} eyebrow={p.eyebrow} titleTop={p.titleTop} titleEm={p.titleEm} intro={p.intro}
        background="linear-gradient(225deg, var(--cream) 0%, var(--cream) 100%)" />

      <section className="section" style={{ background: '#fff' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 32 }}>{p.updated}</div>
          {p.sections.map(s => (
            <div key={s.title} style={{ marginBottom: 32 }}>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 400, color: 'var(--forest)', marginBottom: 12 }}>{s.title}</h2>
              <p style={{ fontSize: 15, color: '#555', fontWeight: 300 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer locale="ar" />
    </div>
  )
}
