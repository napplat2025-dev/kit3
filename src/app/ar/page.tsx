'use client'
import { useState } from 'react'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { chefs, clients, trustedBy, waStyle } from '@/app/constants/homeData'
import { ar as t } from '@/i18n/dictionaries/ar'

const slugs = [
  'culinary-consulting', 'design-services', 'chef-matchmaking', 'recruitment-training',
  'cloud-kitchen', 'technology', 'site-selection', 'financial-turnaround', 'market-research-feasibility',
]
const personaTargets = ['culinary-consulting', 'financial-turnaround', 'chef-matchmaking', 'market-research-feasibility']

const accents = ['var(--teal)', 'var(--amber)', 'var(--coral)']
const accentBgs = ['var(--teal-light)', 'var(--amber-light)', 'var(--coral-light)']

export default function ArabicHome() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '', _gotcha: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const [showAllClients, setShowAllClients] = useState(false)

  const featured = t.services.items.slice(0, 3)
  const remaining = t.services.items.slice(3)
  const visibleClients = showAllClients ? clients : clients.slice(0, 8)

  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)' }}>
      <Nav locale="ar" />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(225deg, #c2e8e3 0%, var(--cream) 50%, #fdefd0 100%)', padding: '80px 24px 64px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div className="fade-up">
              <div className="eyebrow" style={{ background: 'var(--teal-light)', color: 'var(--teal)', padding: '6px 16px', borderRadius: 2, border: '1px solid var(--teal-mid)' }}>
                {t.hero.eyebrow}
              </div>
              <h1 style={{ color: 'var(--forest)', marginBottom: 24, marginTop: 8 }}>
                {t.hero.titleTop}<br />
                <em style={{ color: 'var(--teal)' }}>{t.hero.titleEm}</em><br />
                {t.hero.titleBottom}
              </h1>
              <p style={{ fontSize: 17, color: '#4a5568', marginBottom: 40, maxWidth: 480, fontWeight: 300 }}>
                {t.hero.body}
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <a href="/ar/services" className="btn btn-primary">{t.hero.ctaPrimary}</a>
                <a href="/ar/chefs" className="btn btn-outline">{t.hero.ctaSecondary}</a>
              </div>
            </div>
            <div className="hero-right fade-up-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {t.stats.map(s => (
                <div key={s.l} className="card" style={{ padding: '28px 20px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 48, fontWeight: 400, color: 'var(--teal)', lineHeight: 1 }}>{s.v}</div>
                  <div style={{ fontSize: 12, color: '#888', marginTop: 8, fontWeight: 500 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section style={{ background: '#fff', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '20px 24px', overflowX: 'auto' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
            <div className="eyebrow" style={{ color: '#aaa', marginBottom: 0, flexShrink: 0 }}>{t.trustedBy}</div>
            {trustedBy.map(c => (
              <div key={c} style={{ fontSize: 12, fontWeight: 500, color: '#666', whiteSpace: 'nowrap', direction: 'ltr' }}>{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating leadership */}
      <section style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '40px 24px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ color: 'var(--amber)' }}>{t.leadership.eyebrow}</div>
          <div style={{ fontSize: 18, fontWeight: 600, color: 'var(--forest)', marginBottom: 14 }}>
            <span style={{ direction: 'ltr', display: 'inline-block' }}>{t.leadership.name}</span>{' '}
            <span style={{ fontWeight: 300, color: '#777' }}>{t.leadership.role}</span>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 16 }}>
            {t.leadership.chips.map(c => (
              <span key={c} style={{ fontSize: 12.5, color: '#555', background: 'var(--cream)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '8px 14px' }}>{c}</span>
            ))}
          </div>
          <a href="/ar/team" style={{ fontSize: 13.5, color: 'var(--teal)', fontWeight: 500 }}>{t.leadership.link}</a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" style={{ color: 'var(--amber)' }}>{t.services.eyebrow}</div>
            <h2>{t.services.titleTop} <em style={{ color: 'var(--teal)' }}>{t.services.titleEm}</em></h2>
            <p>{t.services.body}</p>
          </div>
          <div className="grid-3" style={{ marginBottom: 12 }}>
            {featured.map((s, i) => (
              <a key={s.num} href={`/ar/services#${slugs[i]}`} className="card" style={{ padding: '28px 24px', display: 'block' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 56, fontWeight: 400, color: accents[i % 3], lineHeight: 1, marginBottom: 4, opacity: 0.3 }}>{s.num}</div>
                <div className="badge" style={{ background: accentBgs[i % 3], color: accents[i % 3], marginBottom: 14 }}>{s.kw}</div>
                <h3 style={{ fontSize: 20, marginBottom: 10, color: 'var(--forest)' }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: '#666', fontWeight: 300 }}>{s.desc}</p>
                <div style={{ marginTop: 16, fontSize: 13, color: accents[i % 3], fontWeight: 500 }}>{t.services.learnMore}</div>
              </a>
            ))}
          </div>
          <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '16px 20px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <div className="service-pills" style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 500, marginLeft: 4 }}>{t.services.moreCount(remaining.length)}</span>
              {remaining.map((s, i) => (
                <a key={s.num} href={`/ar/services#${slugs[i + 3]}`} style={{ fontSize: 12, fontWeight: 600, color: accents[i % 3], background: accentBgs[i % 3], padding: '4px 12px', borderRadius: 999, whiteSpace: 'nowrap' }}>{s.title}</a>
              ))}
            </div>
            <a href="/ar/services" style={{ fontSize: 12.5, color: 'var(--teal)', fontWeight: 500, whiteSpace: 'nowrap' }}>{t.services.viewAll}</a>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section" style={{ background: 'var(--forest)' }}>
        <div className="container">
          <div className="section-header" style={{ color: '#fff' }}>
            <div className="eyebrow" style={{ color: 'var(--amber)' }}>{t.approach.eyebrow}</div>
            <h2 style={{ color: '#fff' }}>{t.approach.titleTop} <em style={{ color: 'var(--amber)' }}>{t.approach.titleEm}</em></h2>
          </div>
          <div style={{ display: 'flex', gap: 0, justifyContent: 'center', flexWrap: 'wrap' }}>
            {t.approach.steps.map((step, i) => (
              <div key={step} style={{ textAlign: 'center', padding: '0 20px', position: 'relative' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(168,216,210,0.15)', border: '1.5px solid rgba(168,216,210,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--amber)' }}>{i + 1}</div>
                <div style={{ fontSize: 12.5, color: '#a8d8d2', fontWeight: 500 }}>{step}</div>
                {i < t.approach.steps.length - 1 && <div className="hide-mobile" style={{ position: 'absolute', top: 23, left: -8, width: 16, height: 1, background: 'rgba(168,216,210,0.3)' }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chefs */}
      <section id="chefs" className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" style={{ color: 'var(--coral)' }}>{t.chefs.eyebrow}</div>
            <h2>{t.chefs.titleTop} <em style={{ color: 'var(--teal)' }}>{t.chefs.titleEm}</em></h2>
            <p>{t.chefs.body}</p>
          </div>
          <div className="grid-5">
            {chefs.map(c => (
              <a key={c.slug} href="/ar/chefs" style={{ textAlign: 'center', display: 'block' }}>
                <div style={{ width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 10px', border: '2px solid var(--border)' }}>
                  <Image src={c.photo} alt={c.name} width={160} height={160} sizes="80px" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--forest)', marginBottom: 2, direction: 'ltr' }}>{c.name}</div>
                <div style={{ fontSize: 11, color: 'var(--teal)', fontWeight: 600 }}>{t.chefs.countries[c.country] ?? c.country}</div>
              </a>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <a href="/ar/chefs" className="btn btn-outline">{t.chefs.cta}</a>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" style={{ color: 'var(--amber)' }}>{t.clients.eyebrow}</div>
            <h2><em style={{ color: 'var(--teal)' }}>{t.clients.titleEm}</em></h2>
          </div>
          <div className="grid-4">
            {visibleClients.map(c => (
              <div key={c.name} className="card" style={{ padding: '20px 16px' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 500, color: 'var(--forest)', marginBottom: 6, direction: 'ltr', textAlign: 'right' }}>{c.name}</div>
                <div style={{ fontSize: 12.5, color: 'var(--muted)', fontWeight: 300 }}>{t.clients.sectors[c.name] ?? c.sector}</div>
              </div>
            ))}
          </div>
          {!showAllClients && clients.length > 8 && (
            <div style={{ textAlign: 'center', marginTop: 32 }}>
              <button onClick={() => setShowAllClients(true)} className="btn btn-outline" style={{ fontSize: 13 }}>
                {t.clients.showMore(clients.length - 8)}
              </button>
            </div>
          )}
          {showAllClients && (
            <div style={{ textAlign: 'center', marginTop: 32 }}>
              <button onClick={() => setShowAllClients(false)} className="btn btn-outline" style={{ fontSize: 13 }}>{t.clients.showLess}</button>
            </div>
          )}
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <a href="/ar/clients" style={{ fontSize: 13, color: 'var(--teal)', fontWeight: 500 }}>{t.clients.titleEm} ←</a>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section style={{ background: 'var(--teal)', padding: '48px 24px' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px, 4vw, 36px)', color: '#fff', fontWeight: 400, lineHeight: 1.4, marginBottom: 8 }}>
                {t.midCta.line} <em style={{ color: 'var(--amber)' }}>{t.midCta.lineEm}</em>
              </div>
              <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', fontWeight: 300 }}>{t.midCta.sub}</div>
            </div>
            <a href="/ar/contact" className="btn btn-white" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>{t.midCta.cta}</a>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="section" style={{ background: '#fff', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" style={{ color: 'var(--teal)' }}>{t.personas.eyebrow}</div>
            <h2>{t.personas.titleTop} <em style={{ color: 'var(--teal)' }}>{t.personas.titleEm}</em></h2>
            <p>{t.personas.body}</p>
          </div>
          <div className="grid-4">
            {t.personas.items.map((p, i) => (
              <div key={p.title} className="card" style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 40, fontWeight: 400, color: accents[i % 3], lineHeight: 1, marginBottom: 16, opacity: 0.25 }}>0{i + 1}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: accents[i % 3], marginBottom: 10 }}>{p.title}</div>
                <p style={{ fontSize: 14, color: '#555', fontWeight: 300, marginBottom: 20, flex: 1 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                  {p.pillars.map(pill => (
                    <span key={pill} style={{ fontSize: 11, fontWeight: 600, color: accents[i % 3], background: accentBgs[i % 3], padding: '4px 10px', borderRadius: 2 }}>{pill}</span>
                  ))}
                </div>
                <a href={`/ar/services#${personaTargets[i]}`} style={{ fontSize: 12.5, color: accents[i % 3], fontWeight: 600 }}>{t.personas.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy */}
      <section id="academy" className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" style={{ color: 'var(--amber)' }}>{t.academy.eyebrow}</div>
            <h2>{t.academy.titleTop} <em style={{ color: 'var(--teal)' }}>{t.academy.titleEm}</em></h2>
            <p>{t.academy.body}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, marginBottom: 32 }}>
            {t.academy.tracks.map((track, ti) => (
              <div key={track.code} style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
                <div style={{ background: accentBgs[ti], padding: '20px 24px', borderBottom: `2px solid ${accents[ti]}` }}>
                  <div style={{ fontSize: 11, color: accents[ti], fontWeight: 600, marginBottom: 6 }}>{track.code}</div>
                  <h3 style={{ fontSize: 19, color: 'var(--forest)', marginBottom: 8 }}>{track.title}</h3>
                  <p style={{ fontSize: 13, color: '#555', fontWeight: 300 }}>{track.desc}</p>
                </div>
                <div style={{ padding: '8px 24px', background: '#fff' }}>
                  {track.courses.map((course, i) => (
                    <div key={course.title} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: i < track.courses.length - 1 ? '1px solid var(--border)' : 'none', gap: 12 }}>
                      <div style={{ fontSize: 13.5, fontWeight: 500, color: 'var(--forest)' }}>{course.title}</div>
                      {course.free && <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--teal)', background: 'var(--teal-light)', padding: '3px 8px', borderRadius: 2, flexShrink: 0 }}>{t.academy.free}</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(253,239,208,0.4)', border: '1px solid var(--amber)', borderRadius: 'var(--radius)', padding: '8px 16px' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--amber)' }} />
              <span style={{ fontSize: 12, color: '#9a6b00', fontWeight: 600 }}>{t.academy.notice}</span>
            </div>
            <div style={{ marginTop: 20 }}>
              <a href="/ar/academy" className="btn btn-outline">{t.academy.cta}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section id="invest" className="section" style={{ background: 'var(--forest)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="invest-home-grid">
            <div>
              <div className="eyebrow" style={{ color: 'var(--amber)' }}>{t.invest.eyebrow}</div>
              <h2 style={{ color: '#fff', marginBottom: 16 }}>{t.invest.titleTop} <em style={{ color: 'var(--amber)' }}>{t.invest.titleEm}</em></h2>
              <p style={{ fontSize: 16, color: '#7ab8b0', fontWeight: 300, marginBottom: 32 }}>{t.invest.body}</p>
              <a href="/ar/invest" className="btn btn-white">{t.invest.cta}</a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {t.invest.items.map((label, i) => (
                <div key={label} style={{ padding: '24px 16px', background: 'rgba(168,216,210,0.07)', border: '1px solid rgba(168,216,210,0.15)', borderRadius: 'var(--radius)', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 32, fontWeight: 400, color: 'var(--amber)', lineHeight: 1, marginBottom: 12, opacity: 0.6 }}>{`0${i + 1}`}</div>
                  <div style={{ fontSize: 13, color: '#a8d8d2', fontWeight: 400, lineHeight: 1.6 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section" style={{ background: 'var(--cream)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
            <div>
              <div className="eyebrow" style={{ color: 'var(--amber)' }}>{t.contact.eyebrow}</div>
              <h2>{t.contact.titleTop} <em style={{ color: 'var(--teal)' }}>{t.contact.titleEm}</em></h2>
              <div className="divider" />
              <p style={{ fontSize: 16, color: 'var(--muted)', fontWeight: 300, marginBottom: 28 }}>{t.contact.body}</p>
              <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 2.2, marginBottom: 24 }}>
                <div>{t.contact.city}</div>
                <div><a href="mailto:kf@kitchenthree.co" style={{ color: 'var(--teal)', direction: 'ltr', display: 'inline-block' }}>kf@kitchenthree.co</a></div>
                <div><a href="tel:+201222186669" style={{ color: 'var(--teal)', direction: 'ltr', display: 'inline-block' }}>+20 122 218 6669</a></div>
              </div>
              <a href="https://wa.me/201222186669" target="_blank" rel="noopener noreferrer" style={waStyle}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div>
                  <div style={{ fontSize: 13, opacity: 0.85, fontWeight: 400, lineHeight: 1 }}>{t.contact.waTitle}</div>
                  <div style={{ lineHeight: 1.6, marginTop: 3 }}>{t.contact.waBody}</div>
                </div>
              </a>
            </div>
            <div className="card" style={{ padding: 28 }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 24, color: 'var(--teal)', marginBottom: 8 }}>{t.contact.sentTitle}</div>
                  <div style={{ fontSize: 14, color: 'var(--muted)' }}>{t.contact.sentBody}</div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <h3 style={{ fontSize: 18, marginBottom: 4 }}>{t.contact.formTitle}</h3>
                  {([['name', t.contact.fields.name], ['email', t.contact.fields.email], ['phone', t.contact.fields.phone], ['company', t.contact.fields.company]] as const).map(([k, p]) => (
                    <input key={k} placeholder={p} value={form[k]} onChange={e => setForm({ ...form, [k]: e.target.value })}
                      style={{ padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: 'var(--cream)', width: '100%' }} />
                  ))}
                  <input type="text" name="_gotcha" value={form._gotcha} onChange={e => setForm({ ...form, _gotcha: e.target.value })} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                  <textarea placeholder={t.contact.fields.message} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={4}
                    style={{ padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: 'var(--cream)', width: '100%', resize: 'vertical' }} />
                  {error && <div style={{ fontSize: 13, color: '#c0392b' }}>{t.contact.error}</div>}
                  <button className="btn btn-primary" style={{ width: '100%', padding: '14px' }}
                    onClick={() => {
                      if (form.name && form.email && form.message) {
                        fetch('https://formspree.io/f/xojkprga', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ ...form, locale: 'ar' }),
                        }).then(res => { if (res.ok) setSent(true); else setError(true) }).catch(() => setError(true))
                      }
                    }}>
                    {t.contact.send}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer locale="ar" />
      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .invest-home-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          .service-pills { display: none !important; }
        }
      `}</style>
    </div>
  )
}
