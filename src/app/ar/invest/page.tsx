'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ArPageHero from '@/components/ArPageHero'
import { ar } from '@/i18n/dictionaries/ar'
import { arPages2 } from '@/i18n/dictionaries/ar-pages2'

const p = arPages2.invest
const accents = ['var(--teal)', 'var(--amber)', 'var(--coral)']
const accentBgs = ['var(--teal-light)', 'var(--amber-light)', 'var(--coral-light)']

function Prose({ eyebrow, titleTop, titleEm, body, bg, dark = false }: { eyebrow: string; titleTop: string; titleEm: string; body: string; bg: string; dark?: boolean }) {
  return (
    <section style={{ padding: '80px 24px', background: bg, borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="eyebrow" style={{ color: dark ? 'var(--amber)' : 'var(--teal)', marginBottom: 12 }}>{eyebrow}</div>
        <h2 style={{ color: 'var(--forest)', marginBottom: 20, maxWidth: 680 }}>
          {titleTop} <em style={{ color: dark ? 'var(--amber)' : 'var(--teal)' }}>{titleEm}</em>
        </h2>
        <p style={{ fontSize: 16, color: '#555', fontWeight: 300, maxWidth: 760 }}>{body}</p>
      </div>
    </section>
  )
}

export default function ArInvest() {
  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)' }}>
      <Nav locale="ar" />
      <ArPageHero crumb={p.crumb} eyebrow={p.eyebrow} titleTop={p.titleTop} titleEm={p.titleEm} intro={p.intro}
        background="linear-gradient(225deg, var(--forest) 0%, #1a3a35 100%)" dark />

      {/* Active opportunities — kept at the top, mirroring the English page */}
      <section style={{ padding: '80px 24px', background: 'var(--cream)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div style={{ maxWidth: 760, margin: '0 auto 40px', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'var(--teal-light)', border: '1px solid var(--teal)', borderRadius: 'var(--radius)', padding: '10px 20px', marginBottom: 32 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--teal)' }} />
              <span style={{ fontSize: 12.5, color: 'var(--teal)', fontWeight: 600 }}>{p.active.badge}</span>
            </div>
            <h2 style={{ color: 'var(--forest)', marginBottom: 20 }}>
              {p.active.titleTop}<br /><em style={{ color: 'var(--teal)' }}>{p.active.titleEm}</em>
            </h2>
            <p style={{ fontSize: 16, color: '#555', fontWeight: 300 }}>{p.active.proof}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 40 }}>
            {p.active.cards.map(s => (
              <div key={s.n} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '28px 24px' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 32, fontWeight: 400, color: 'var(--teal)', lineHeight: 1, marginBottom: 14 }}>{s.n}</div>
                <div style={{ fontSize: 15.5, fontWeight: 600, color: 'var(--forest)', marginBottom: 10, lineHeight: 1.5 }}>{s.t}</div>
                <div style={{ fontSize: 14, color: '#666', fontWeight: 300 }}>{s.d}</div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 15.5, color: '#555', fontWeight: 300, maxWidth: 760, margin: '0 auto 40px', textAlign: 'center' }}>{p.active.closing}</p>

          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '36px 32px', maxWidth: 480, margin: '0 auto' }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--forest)', marginBottom: 6 }}>{p.active.formTitle}</div>
            <div style={{ fontSize: 13.5, color: '#888', marginBottom: 24, fontWeight: 300 }}>{p.active.formSub}</div>
            <form action="https://formspree.io/f/xojkprga" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <input type="hidden" name="_subject" value="Investment Interest Registration (AR) — Kitchen Three" />
              <input type="hidden" name="type" value="Investment Interest" />
              <input type="hidden" name="locale" value="ar" />
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              <input name="name" required placeholder={ar.contact.fields.name} style={{ padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: 'var(--cream)', width: '100%' }} />
              <input name="email" type="email" required placeholder={ar.contact.fields.email} style={{ padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: 'var(--cream)', width: '100%' }} />
              <input name="phone" type="tel" placeholder={ar.contact.fields.phone} style={{ padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: 'var(--cream)', width: '100%' }} />
              <input name="company" placeholder={ar.contact.fields.company} style={{ padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: 'var(--cream)', width: '100%' }} />
              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>{p.active.formCta}</button>
            </form>
          </div>

          <div style={{ maxWidth: 640, margin: '56px auto 0', paddingTop: 40, borderTop: '1px solid var(--border)', textAlign: 'center' }}>
            <div className="eyebrow" style={{ color: '#999', marginBottom: 12 }}>{p.active.pipelineEyebrow}</div>
            <h3 style={{ color: 'var(--forest)', fontSize: 22, marginBottom: 14 }}>{p.active.pipelineTitle}</h3>
            <p style={{ fontSize: 15, color: '#555', fontWeight: 300, marginBottom: 16 }}>{p.active.pipelineBody}</p>
            <p style={{ fontSize: 14, color: '#777', fontWeight: 300, fontStyle: 'italic' }}>{p.active.pipelineStatus}</p>
          </div>
        </div>
      </section>

      {/* Why Egypt */}
      <section style={{ padding: '80px 24px', background: '#fff', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="eyebrow" style={{ color: 'var(--teal)', marginBottom: 12 }}>{p.whyEgypt.eyebrow}</div>
          <h2 style={{ color: 'var(--forest)', marginBottom: 20, maxWidth: 660 }}>
            {p.whyEgypt.titleTop} <em style={{ color: 'var(--teal)' }}>{p.whyEgypt.titleEm}</em>
          </h2>
          <p style={{ fontSize: 16, color: '#555', fontWeight: 300, maxWidth: 720, marginBottom: 48 }}>{p.whyEgypt.body}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
            {p.whyEgypt.stats.map(item => (
              <div key={item.label} style={{ padding: '24px 20px', background: 'var(--cream)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 34, fontWeight: 400, color: 'var(--teal)', lineHeight: 1.2, marginBottom: 8 }}>{item.stat}</div>
                <div style={{ fontSize: 12.5, color: '#888', fontWeight: 400 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Prose eyebrow={p.signals.eyebrow} titleTop={p.signals.titleTop} titleEm={p.signals.titleEm} body={p.signals.body} bg="var(--cream)" />
      <Prose eyebrow={p.capital.eyebrow} titleTop={p.capital.titleTop} titleEm={p.capital.titleEm} body={p.capital.body} bg="#fff" />

      {/* What this means */}
      <section style={{ padding: '80px 24px', background: 'var(--cream)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="eyebrow" style={{ color: 'var(--amber)', marginBottom: 12 }}>{p.meaning.eyebrow}</div>
          <h2 style={{ color: 'var(--forest)', marginBottom: 20, maxWidth: 660 }}>
            {p.meaning.titleTop} <em style={{ color: 'var(--teal)' }}>{p.meaning.titleEm}</em>
          </h2>
          <p style={{ fontSize: 16, color: '#555', fontWeight: 300, maxWidth: 720, marginBottom: 48 }}>{p.meaning.body}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {p.meaning.items.map(item => (
              <div key={item.title} style={{ padding: '28px 24px', background: '#fff', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: 15.5, fontWeight: 600, color: 'var(--forest)', marginBottom: 10 }}>{item.title}</div>
                <div style={{ fontSize: 13.5, color: '#666', fontWeight: 300 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Prose eyebrow={p.foodSafety.eyebrow} titleTop={p.foodSafety.titleTop} titleEm={p.foodSafety.titleEm} body={p.foodSafety.body} bg="var(--amber-light)" dark />

      {/* Who invests with us */}
      <section style={{ padding: '80px 24px', background: '#fff', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" style={{ color: 'var(--teal)' }}>{p.who.eyebrow}</div>
            <h2 style={{ color: 'var(--forest)' }}>{p.who.titleTop} <em style={{ color: 'var(--teal)' }}>{p.who.titleEm}</em></h2>
            <p>{p.who.body}</p>
          </div>
          <div className="grid-3">
            {p.who.profiles.map((profile, i) => (
              <div key={profile.title} className="card" style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: accents[i % 3], marginBottom: 10 }}>{profile.title}</div>
                <p style={{ fontSize: 14, color: '#555', fontWeight: 300, marginBottom: 20, flex: 1 }}>{profile.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {profile.tags.map(tag => (
                    <span key={tag} style={{ fontSize: 11, fontWeight: 600, color: accents[i % 3], background: accentBgs[i % 3], padding: '4px 10px', borderRadius: 2 }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kitchen Three */}
      <section style={{ background: 'var(--forest)', padding: '80px 24px' }}>
        <div className="container" style={{ maxWidth: 800, textAlign: 'center' }}>
          <div className="eyebrow" style={{ color: 'var(--amber)' }}>{p.whyKt.eyebrow}</div>
          <h2 style={{ color: '#fff', marginBottom: 20 }}>{p.whyKt.titleTop} <em style={{ color: 'var(--amber)' }}>{p.whyKt.titleEm}</em></h2>
          <p style={{ fontSize: 15.5, color: '#7ab8b0', fontWeight: 300, maxWidth: 620, margin: '0 auto 48px' }}>{p.whyKt.body}</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
            {p.whyKt.stats.map(([v, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 36, fontWeight: 400, color: 'var(--amber)', lineHeight: 1.2 }}>{v}</div>
                <div style={{ fontSize: 12, color: '#4a8a80', marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 48 }}>
            <a href="/ar/contact" className="btn btn-white">{p.whyKt.cta}</a>
          </div>
        </div>
      </section>

      <Footer locale="ar" />
    </div>
  )
}
