'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { chefs } from './chefsData'

function ChefCard({ c }: { c: typeof chefs[0] }) {
  return (
    <a href={'/chefs/' + c.slug} style={{ textDecoration: 'none', display: 'block', borderRadius: 4, overflow: 'hidden', border: '1px solid var(--border)', background: '#fff' }}>
      <div style={{ width: '100%', height: 220, overflow: 'hidden', background: c.bg }}>
        <img loading='lazy' src={c.photo} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
      </div>
      <div style={{ padding: '18px 20px 20px' }}>
        <div style={{ fontSize: 10, color: c.color, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 6 }}>{c.country}</div>
        <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--forest)', marginBottom: 6 }}>{c.name}</div>
        <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 14 }}>{c.title}</div>
        <div style={{ fontSize: 12, color: c.color, fontWeight: 600 }}>View profile</div>
      </div>
    </a>
  )
}

export default function ChefsClient() {
  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)', color: 'var(--ink)' }}>
      <Nav />
      <section style={{ background: 'var(--forest)', padding: '80px 0 64px' }}>
        <div className='container'>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, color: '#ffffff', marginBottom: 20, lineHeight: 1.1 }}>A Powerhouse Lineup of Culinary Masters</h1>
          <p style={{ fontSize: 17, color: '#d4efeb', maxWidth: 580, lineHeight: 1.8, fontWeight: 300 }}>10 international chefs — Michelin-starred, royal event specialists, and award-winning culinary masters.</p>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='grid-4' style={{ gap: 24 }}>
            {chefs.map(c => <ChefCard key={c.slug} c={c} />)}
          </div>
        </div>
      </section>
      <section style={{ background: 'var(--forest)', padding: '72px 0', textAlign: 'center' }}>
        <div className='container'>
          <div style={{ maxWidth: 560, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3vw, 42px)', color: '#ffffff', marginBottom: 16 }}>Ready to Find Your Perfect Chef?</h2>
            <p style={{ fontSize: 15, color: '#d4efeb', fontWeight: 300, lineHeight: 1.8, marginBottom: 32 }}>Tell us about your project and we will match you with the right talent.</p>
            <a href='/#contact' className='btn btn-white'>Start the Conversation</a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
