'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { chefs } from './chefsData'

export default function ChefsClient() {
  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)', color: 'var(--ink)' }}>
      <Nav />

      {/* HERO */}
      <section style={{ background: 'var(--forest)', padding: '80px 0 64px' }}>
        <div className="container">
          <div style={{ marginBottom: 20 }}>
            <a href="/" style={{ fontSize: 11, color: '#a8d8d2', letterSpacing: '0.08em', textDecoration: 'none', textTransform: 'uppercase' }}>Home</a>
            <span style={{ color: '#a8d8d2', margin: '0 10px' }}>›</span>
            <span style={{ fontSize: 11, color: 'var(--amber)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Our Chefs</span>
          </div>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, color: '#ffffff', marginBottom: 20, lineHeight: 1.1 }}>
            A Powerhouse Lineup of<br /><em style={{ color: 'var(--amber)' }}>Culinary Masters</em>
          </h1>
          <p style={{ fontSize: 17, color: '#d4efeb', maxWidth: 580, lineHeight: 1.8, fontWeight: 300 }}>
            10 international chefs — Michelin-starred, royal event specialists, and award-winning culinary masters. Click any chef to view their full profile.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="section">
        <div className="container">
          <div className="grid-4" style={{ gap: 24 }}>
            {chefs.map(c => (
              <a
                key={c.slug}
                href={`/chefs/${c.slug}`}
                style={{ textDecoration: 'none', display: 'block', borderRadius: 4, overflow: 'hidden', border: '1px solid var(--border)', background: '#fff', transition: 'all 0.25s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)'; (e.currentTarget as HTMLElement).style.borderColor = c.color }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)' }}
              >
                {/* Photo */}
                <div style={{ width: '100%', height: 220, overflow: 'hidden', background: c.bg }}>
                  <img src={c.photo} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.4s ease' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'none'}
                  />
                </div>
                {/* Info */}
                <div style={{ padding: '18px 20px 20px' }}>
                  <div style={{ fontSize: 10, color: c.color, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 6 }}>{c.country}</div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--forest)', marginBottom: 6 }}>{c.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 14 }}>{c.title}</div>
                  <div style={{ fontSize: 12, color: c.color, fontWeight: 600, letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: 4 }}>
                    View profile <span style={{ fontSize: 14 }}>→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--forest)', padding: '72px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: 560, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3vw, 42px)', color: '#ffffff', marginBottom: 16 }}>
              Ready to Find Your <em style={{ color: 'var(--amber)' }}>Perfect Chef?</em>
            </h2>
            <p style={{ fontSize: 15, color: '#d4efeb', fontWeight: 300, lineHeight: 1.8, marginBottom: 32 }}>
              Tell us about your project and we will match you with the right talent from our roster.
            </p>
            <a href="/#contact" className="btn btn-white">Start the Conversation</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
