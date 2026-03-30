import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Investment Opportunities — Kitchen Three',
  description: 'Kitchen Three periodically opens select investment opportunities in Egypt F&B ventures. Register to be notified when an opportunity becomes available.',
  alternates: { canonical: 'https://www.kitchenthree.co/invest' },
}

export default function InvestPage() {
  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)' }}>
      <Nav />

      <section style={{ background: 'linear-gradient(135deg, var(--forest) 0%, #1a3a35 100%)', padding: '100px 24px 80px', borderBottom: '1px solid rgba(168,216,210,0.15)' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <nav style={{ marginBottom: 28, fontSize: 12, color: '#4a8a80', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            <a href="/" style={{ color: '#4a8a80' }}>Home</a>
            <span style={{ margin: '0 10px', color: '#2a5a50' }}>›</span>
            <span style={{ color: 'var(--teal-mid)' }}>Investment</span>
          </nav>
          <div className="eyebrow" style={{ color: 'var(--amber)', marginBottom: 16 }}>Investment Opportunities</div>
          <h1 style={{ color: '#fff', marginBottom: 24, fontSize: 'clamp(36px, 5vw, 58px)', lineHeight: 1.15 }}>
            Partner With<br />
            <em style={{ color: 'var(--amber)' }}>Kitchen Three</em>
          </h1>
          <p style={{ fontSize: 18, color: '#7ab8b0', lineHeight: 1.9, fontWeight: 300, maxWidth: 600 }}>
            Beyond our consultancy practice, Kitchen Three periodically develops and co-invests in Egypt F&B ventures — from certified production infrastructure to curated culinary spaces. When the right opportunity is ready, we share it with our network first.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#fff', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="eyebrow" style={{ color: 'var(--teal)', marginBottom: 12 }}>What This Means</div>
          <h2 style={{ color: 'var(--forest)', marginBottom: 20, maxWidth: 640 }}>
            F&B Ventures <em style={{ color: 'var(--teal)' }}>Built From the Inside</em>
          </h2>
          <p style={{ fontSize: 16, color: '#555', lineHeight: 1.9, fontWeight: 300, maxWidth: 680, marginBottom: 48 }}>
            Kitchen Three is not a fund or a broker. We build and operate Egypt F&B assets — production infrastructure, culinary studios, and concept ventures — where we put our own expertise, team, and track record behind every project. Investment opportunities arise when we open select projects to partners who share our long-term view of Egypt's food economy.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { icon: '🏗', title: 'Production Infrastructure', desc: "HACCP-certified central kitchen facilities designed for Egypt's growing cloud kitchen and food production sector." },
              { icon: '🍽', title: 'Culinary Concept Ventures', desc: 'Branded food concepts developed with our Michelin-pedigreed chef roster — built to operate and scale.' },
              { icon: '🎓', title: 'Education & Training Assets', desc: "Scalable culinary education products targeting Egypt's 1,200+ new F&B ventures launched annually." },
            ].map(item => (
              <div key={item.title} style={{ padding: '28px 24px', background: 'var(--cream)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{item.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--forest)', marginBottom: 10 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: '#666', lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--cream)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 760, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'var(--amber-light)', border: '1px solid var(--amber)', borderRadius: 'var(--radius)', padding: '10px 20px', marginBottom: 32 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--amber)' }} />
            <span style={{ fontSize: 12, color: 'var(--amber)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>No Active Opportunity at This Time</span>
          </div>
          <h2 style={{ color: 'var(--forest)', marginBottom: 20 }}>
            When an Opportunity Opens,<br />
            <em style={{ color: 'var(--teal)' }}>You'll Hear First</em>
          </h2>
          <p style={{ fontSize: 16, color: '#555', lineHeight: 1.9, fontWeight: 300, marginBottom: 40 }}>
            We do not publicly list investment opportunities. When a new venture is ready for partners, we notify our network directly — by email and through our newsletter. If you want to be in that conversation, register below.
          </p>
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '36px 32px', maxWidth: 480, margin: '0 auto' }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--forest)', marginBottom: 6 }}>Register Your Interest</div>
            <div style={{ fontSize: 13, color: '#888', marginBottom: 24, fontWeight: 300 }}>We'll notify you when a new opportunity becomes available.</div>
            <form action="https://formspree.io/f/xojkprga" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <input type="hidden" name="_subject" value="Investment Interest Registration — Kitchen Three" />
              <input name="name" required placeholder="Your name" style={{ padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: 'var(--cream)', width: '100%' }} />
              <input name="email" type="email" required placeholder="Email address" style={{ padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: 'var(--cream)', width: '100%' }} />
              <input name="company" placeholder="Organisation (optional)" style={{ padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: 'var(--cream)', width: '100%' }} />
              <input type="hidden" name="type" value="Investment Interest" />
              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>Notify Me</button>
            </form>
            <div style={{ marginTop: 16, fontSize: 11, color: '#aaa', lineHeight: 1.6 }}>
              You can also stay informed via our newsletter — subscribe on the <a href="/#contact" style={{ color: 'var(--teal)' }}>homepage</a>.
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--forest)', padding: '80px 24px' }}>
        <div className="container" style={{ maxWidth: 800, textAlign: 'center' }}>
          <div className="eyebrow" style={{ color: 'var(--amber)' }}>Why Kitchen Three</div>
          <h2 style={{ color: '#fff', marginBottom: 20 }}>13 Years. 10 Chefs. <em style={{ color: 'var(--amber)' }}>One Standard.</em></h2>
          <p style={{ fontSize: 15, color: '#7ab8b0', marginBottom: 48, fontWeight: 300, lineHeight: 1.9, maxWidth: 600, margin: '0 auto 48px' }}>
            Any investment Kitchen Three opens to partners is backed by the same team, infrastructure, and culinary talent that serves Egypt's leading F&B clients — not a new venture built for capital raising.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
            {[['2013', 'Established'], ['10', "Int'l Chefs"], ['HACCP', 'Certified'], ['8', 'Service Pillars']].map(([v, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 40, fontWeight: 300, color: 'var(--amber)', lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 11, color: '#4a8a80', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 48 }}>
            <a href="/contact" className="btn btn-white">Speak to the Team</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
