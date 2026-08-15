'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ArPageHero from '@/components/ArPageHero'
import { ar } from '@/i18n/dictionaries/ar'
import { arPages } from '@/i18n/dictionaries/ar-pages'

const p = arPages.services

const accents = ['var(--teal)', 'var(--amber)', 'var(--coral)']
const accentBgs = ['var(--teal-light)', 'var(--amber-light)', 'var(--coral-light)']

const slugs = [
  'culinary-consulting', 'design-services', 'chef-matchmaking', 'recruitment-training',
  'cloud-kitchen', 'technology', 'site-selection', 'financial-turnaround', 'market-research-feasibility',
]

const pillarClients = [
  'AUC, Prime Holding, Divine Foodz, Happy Bites',
  "Garten, Vinny's Pizza Bar, Gateway School",
  'Norwegian Embassy, ILO, Sea Queen Fleet',
  'AUC, Nestlé Egypt, Maggi',
  'Prime Holding, Sea Queen Fleet, Divine Foodz',
  "Garten, Vinny's Pizza Bar, Happy Bites",
  "Vinny's Pizza Bar, Garten, Mori, Wok & Wok",
  'متاح لجميع أنواع العمليات وأحجامها — تواصل معنا لمناقشة حالتك.',
  'بقيادة Amr Salah — استشاري أبحاث السوق ودراسات الجدوى، Kitchen Three.',
]

export default function ArServices() {
  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)' }}>
      <Nav locale="ar" />
      <ArPageHero crumb={p.crumb} eyebrow={p.eyebrow} titleTop={p.titleTop} titleEm={p.titleEm} intro={p.intro} />

      {/* Pillar jump bar */}
      <section style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '0 24px', overflowX: 'auto' }}>
        <div className="container" style={{ display: 'flex' }}>
          {ar.services.items.map((s, i) => (
            <a key={s.num} href={`#${slugs[i]}`} style={{ padding: '18px 20px', fontSize: 12, color: '#666', whiteSpace: 'nowrap', borderBottom: '2px solid transparent', transition: 'all 0.2s', fontWeight: 500 }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--teal)'; (e.currentTarget as HTMLElement).style.borderBottomColor = 'var(--teal)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#666'; (e.currentTarget as HTMLElement).style.borderBottomColor = 'transparent' }}>
              {s.num} {s.title}
            </a>
          ))}
        </div>
      </section>

      {ar.services.items.map((s, i) => {
        const color = accents[i % 3]
        const bg = accentBgs[i % 3]
        return (
          <section key={s.num} id={slugs[i]} style={{ padding: '80px 24px', background: i % 2 === 0 ? 'var(--cream)' : '#fff', borderBottom: '1px solid var(--border)' }}>
            <div className="container service-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}>
              <div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 88, fontWeight: 400, color: bg, lineHeight: 1, marginBottom: 8 }}>{s.num}</div>
                <div className="badge" style={{ background: bg, color, marginBottom: 20 }}>{s.kw}</div>
                <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', color: 'var(--forest)', marginBottom: 12 }}>{s.title}</h2>
                <div style={{ fontSize: 14, color, marginBottom: 24, fontWeight: 500 }}>{p.taglines[i]}</div>
                <div style={{ padding: '16px 20px', background: bg, borderRadius: 'var(--radius)', borderRight: `3px solid ${color}` }}>
                  <div style={{ fontSize: 12, color, fontWeight: 500, marginBottom: 6 }}>{p.notableClients}</div>
                  <div style={{ fontSize: 13.5, color: '#555', fontWeight: 300 }}>{pillarClients[i]}</div>
                </div>
                {slugs[i] === 'recruitment-training' && (
                  <a href="/ar/academy" style={{ display: 'inline-block', marginTop: 16, fontSize: 13.5, color: 'var(--teal)', fontWeight: 500, borderBottom: '1px solid var(--teal-mid)', paddingBottom: 2 }}>
                    {p.academyLink}
                  </a>
                )}
              </div>
              <div>
                <p style={{ fontSize: 16, color: '#555', fontWeight: 300, marginBottom: 36 }}>{s.desc}</p>
                <div className="bullets-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {p.bullets[i].map((b, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '14px 16px', background: bg, borderRadius: 'var(--radius)' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: color, flexShrink: 0, marginTop: 8 }} />
                      <div style={{ fontSize: 14, color: '#444', fontWeight: 300, lineHeight: 1.8 }}>{b}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )
      })}

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
