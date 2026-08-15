'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ArPageHero from '@/components/ArPageHero'
import { ar } from '@/i18n/dictionaries/ar'
import { arPages } from '@/i18n/dictionaries/ar-pages'

const p = arPages.academy
const accents = ['var(--teal)', 'var(--amber)']
const accentBgs = ['var(--teal-light)', 'var(--amber-light)']

export default function ArAcademy() {
  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)' }}>
      <Nav locale="ar" />
      <ArPageHero crumb={p.crumb} eyebrow={p.eyebrow} titleTop={p.titleTop} titleEm={p.titleEm} intro={p.intro}
        background="linear-gradient(225deg, var(--amber-light) 0%, var(--cream) 60%)" />

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28, marginBottom: 40 }}>
            {ar.academy.tracks.map((track, ti) => (
              <div key={track.code} style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
                <div style={{ background: accentBgs[ti], padding: '24px 28px', borderBottom: `2px solid ${accents[ti]}` }}>
                  <div style={{ fontSize: 12, color: accents[ti], fontWeight: 600, marginBottom: 8 }}>{track.code}</div>
                  <h2 style={{ fontSize: 22, color: 'var(--forest)', marginBottom: 10 }}>{track.title}</h2>
                  <p style={{ fontSize: 14, color: '#555', fontWeight: 300 }}>{track.desc}</p>
                </div>
                <div style={{ padding: '8px 28px', background: '#fff' }}>
                  {track.courses.map((course, i) => (
                    <div key={course.title} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', borderBottom: i < track.courses.length - 1 ? '1px solid var(--border)' : 'none', gap: 12 }}>
                      <div style={{ fontSize: 14.5, fontWeight: 500, color: 'var(--forest)' }}>{course.title}</div>
                      {course.free && <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--teal)', background: 'var(--teal-light)', padding: '4px 9px', borderRadius: 2, flexShrink: 0 }}>{ar.academy.free}</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(253,239,208,0.4)', border: '1px solid var(--amber)', borderRadius: 'var(--radius)', padding: '10px 18px' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--amber)' }} />
              <span style={{ fontSize: 12.5, color: '#9a6b00', fontWeight: 600 }}>{ar.academy.notice}</span>
            </div>
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
