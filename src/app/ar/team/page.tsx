'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ArPageHero from '@/components/ArPageHero'
import { ar } from '@/i18n/dictionaries/ar'
import { arPages2 } from '@/i18n/dictionaries/ar-pages2'

const p = arPages2.team

const accents = ['var(--teal)', 'var(--amber)', 'var(--coral)']
const accentBgs = ['var(--teal-light)', 'var(--amber-light)', 'var(--coral-light)']

type Member = (typeof p.members)[number]

/** The Latin name sits under the Arabic one: people search and introduce
 *  themselves by it, and the bidi algorithm would reorder it inline. */
function MemberName({ m, size }: { m: Member; size: number }) {
  return (
    <div>
      <h2 style={{ fontFamily: 'var(--serif)', fontSize: size, fontWeight: 400, color: 'var(--forest)', marginBottom: 2 }}>{m.name}</h2>
      <div dir="ltr" style={{ fontSize: 12, color: 'var(--muted)', opacity: 0.75, marginBottom: 6, textAlign: 'right' }}>{m.nameLatin}</div>
    </div>
  )
}

function Credentials({ m, color, size }: { m: Member; color: string; size: number }) {
  return (
    <div style={{ marginBottom: 16 }}>
      {m.credentials.map(c => (
        <div key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: color, flexShrink: 0, marginTop: 7 }} />
          <span style={{ fontSize: size, color: 'var(--muted)', lineHeight: 1.8 }}>{c}</span>
        </div>
      ))}
    </div>
  )
}

function Focus({ m, color, bg }: { m: Member; color: string; bg: string }) {
  return (
    <div style={{ padding: '12px 16px', background: bg, borderRadius: 2, borderRight: `3px solid ${color}` }}>
      <div style={{ fontSize: 11, color, letterSpacing: '0.06em', fontWeight: 600, marginBottom: 4 }}>{p.focusLabel}</div>
      <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.8 }}>{m.focus}</div>
    </div>
  )
}

function Avatar({ m, color, bg, size, font }: { m: Member; color: string; bg: string; size: number; font: number }) {
  return (
    <div dir="ltr" style={{ width: size, height: size, borderRadius: '50%', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: font, fontWeight: 400, color, flexShrink: 0, border: `2px solid ${color}` }}>
      {m.initials}
    </div>
  )
}

export default function ArTeam() {
  const founders = p.members.slice(0, 2)
  const advisory = p.members.slice(2)

  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)' }}>
      <Nav locale="ar" />
      <ArPageHero crumb={p.crumb} eyebrow={p.eyebrow} titleTop={p.titleTop} titleEm={p.titleEm} intro={p.intro} />

      <section className="section">
        <div className="container">
          <div className="eyebrow" style={{ color: 'var(--muted)' }}>{p.foundersLabel}</div>
          <div className="founders-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 56 }}>
            {founders.map(m => {
              const color = accents[m.accent]
              const bg = accentBgs[m.accent]
              return (
                <div key={m.nameLatin} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 4, padding: '36px 28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 24, flexWrap: 'wrap' }}>
                    <Avatar m={m} color={color} bg={bg} size={72} font={26} />
                    <div>
                      <MemberName m={m} size={26} />
                      <div style={{ fontSize: 12, color, letterSpacing: '0.04em', fontWeight: 600 }}>{m.title}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 2, fontWeight: 300, marginBottom: 24 }}>{m.bio}</p>
                  <Credentials m={m} color={color} size={13} />
                  <Focus m={m} color={color} bg={bg} />
                </div>
              )
            })}
          </div>

          <div className="eyebrow" style={{ color: 'var(--muted)' }}>{p.advisoryLabel}</div>
          <div className="advisory-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {advisory.map(m => {
              const color = accents[m.accent]
              const bg = accentBgs[m.accent]
              return (
                <div key={m.nameLatin} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 4, padding: '28px 24px' }}>
                  <div style={{ marginBottom: 16 }}>
                    <Avatar m={m} color={color} bg={bg} size={56} font={20} />
                  </div>
                  <MemberName m={m} size={22} />
                  <div style={{ fontSize: 12, color, letterSpacing: '0.04em', fontWeight: 600, marginBottom: 14 }}>{m.title}</div>
                  {m.bio.split('\n\n').map((para, i) => (
                    <p key={i} style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 2, fontWeight: 300, marginBottom: 16 }}>{para}</p>
                  ))}
                  <Credentials m={m} color={color} size={12.5} />
                  <Focus m={m} color={color} bg={bg} />
                  {'pdf' in m && m.pdf && (
                    <a href={m.pdf} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 14, fontSize: 12, color, letterSpacing: '0.04em', fontWeight: 600 }}>
                      {p.profileLink}
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" style={{ color: 'var(--amber)' }}>{p.principlesEyebrow}</div>
            <h2>{p.principlesTitleTop} <em style={{ color: 'var(--teal)' }}>{p.principlesTitleEm}</em></h2>
          </div>
          <div className="grid-3" style={{ gap: 16 }}>
            {p.principles.map((v, i) => {
              const color = accents[i % 3]
              const bg = accentBgs[i % 3]
              return (
                <div key={v.title} style={{ background: bg, padding: '28px 24px', borderRadius: 4, borderRight: `3px solid ${color}` }}>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 19, fontWeight: 400, color: 'var(--forest)', marginBottom: 10 }}>{v.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.9, fontWeight: 300 }}>{v.desc}</p>
                </div>
              )
            })}
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
