import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Investment Opportunities — Kitchen Three',
  description: 'Kitchen Three periodically opens select investment opportunities in Egypt F&B ventures. Register to be notified when an opportunity becomes available.',
  alternates: { canonical: 'https://www.kitchenthree.co/invest' },
}

const investorProfiles = [
  {
    icon: '💰',
    title: 'Capital Partners',
    desc: 'Investors seeking returns in one of the world\'s fastest-growing foodservice markets. Egypt\'s F&B sector is growing at 14%+ CAGR through 2031 — with entry costs that are highly attractive in USD terms post-2024.',
    tags: ['F&B Returns', 'Growth Market', 'USD Entry Advantage'],
    color: 'var(--teal)',
    bg: 'var(--teal-light)',
  },
  {
    icon: '🌍',
    title: 'International Brands Entering Egypt',
    desc: 'A brand from anywhere in the world looking to enter the Egyptian market with the right local partner — operational expertise, compliance infrastructure, culinary talent, and 13 years of on-the-ground knowledge.',
    tags: ['Market Entry', 'Local Partner', 'Full Infrastructure'],
    color: 'var(--amber)',
    bg: 'var(--amber-light)',
  },
  {
    icon: '🏠',
    title: 'Egyptian Diaspora',
    desc: 'Egyptians living abroad who want to deploy capital back home into a sector they understand — backed by a trusted, established local team with a verifiable track record.',
    tags: ['Home Market', 'Trusted Partner', 'Managed Investment'],
    color: 'var(--coral)',
    bg: 'var(--coral-light)',
  },
  {
    icon: '🏛',
    title: 'Corporate & Institutional Investors',
    desc: 'Companies, funds, and institutions looking at Egypt F&B as a portfolio play — with a partner that brings operational depth, certified infrastructure, and an international chef network no local competitor can match.',
    tags: ['Portfolio Diversification', 'Certified Infrastructure', 'Institutional Grade'],
    color: 'var(--teal)',
    bg: 'var(--teal-light)',
  },
  {
    icon: '🏗',
    title: 'Infrastructure Co-Investors',
    desc: 'Operators, developers, and entrepreneurs who want to co-invest in physical F&B infrastructure — our HACCP-certified central kitchen, production facilities, and cloud kitchen capacity serving Egypt\'s fast-growing delivery economy.',
    tags: ['Cloud Kitchen', 'HACCP Certified', 'Co-Investment'],
    color: 'var(--amber)',
    bg: 'var(--amber-light)',
  },
]

export default function InvestPage() {
  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)' }}>
      <Nav />

      {/* Hero */}
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
          <p style={{ fontSize: 18, color: '#7ab8b0', lineHeight: 1.9, fontWeight: 300, maxWidth: 620 }}>
            Beyond our consultancy practice, Kitchen Three periodically develops and co-invests in Egypt F&B ventures — from certified production infrastructure to curated culinary concepts. We work with investors, operators, and partners from anywhere in the world who share our long-term view of Egypt's food economy.
          </p>
        </div>
      </section>

      {/* Egypt opportunity */}
      <section style={{ padding: '80px 24px', background: '#fff', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="eyebrow" style={{ color: 'var(--teal)', marginBottom: 12 }}>Why Egypt. Why Now.</div>
          <h2 style={{ color: 'var(--forest)', marginBottom: 20, maxWidth: 640 }}>
            One of the World's Most Compelling <em style={{ color: 'var(--teal)' }}>F&B Growth Markets</em>
          </h2>
          <p style={{ fontSize: 16, color: '#555', lineHeight: 1.9, fontWeight: 300, maxWidth: 680, marginBottom: 48 }}>
            Egypt's foodservice sector is a $10B+ market growing at 14%+ CAGR through 2031 — driven by a population of 105 million, a median age under 25, and an accelerating café and delivery culture. Post-2024, USD-denominated investors enjoy structural entry advantages that make Egypt one of the most attractive F&B markets globally.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
            {[
              { stat: '$10B+', label: 'Egypt Foodservice Market' },
              { stat: '14%', label: 'CAGR Through 2031' },
              { stat: '105M', label: 'Population' },
              { stat: '13.2%', label: 'Cloud Kitchen CAGR' },
            ].map(item => (
              <div key={item.label} style={{ padding: '24px 20px', background: 'var(--cream)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 40, fontWeight: 300, color: 'var(--teal)', lineHeight: 1, marginBottom: 8 }}>{item.stat}</div>
                <div style={{ fontSize: 12, color: '#888', fontWeight: 400, letterSpacing: '0.06em' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we mean by investment */}
      <section style={{ padding: '80px 24px', background: 'var(--cream)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="eyebrow" style={{ color: 'var(--amber)', marginBottom: 12 }}>What This Means</div>
          <h2 style={{ color: 'var(--forest)', marginBottom: 20, maxWidth: 640 }}>
            F&B Ventures <em style={{ color: 'var(--teal)' }}>Built From the Inside</em>
          </h2>
          <p style={{ fontSize: 16, color: '#555', lineHeight: 1.9, fontWeight: 300, maxWidth: 680, marginBottom: 48 }}>
            Kitchen Three is not a fund or a broker. We build and operate Egypt F&B assets — production infrastructure, culinary studios, and concept ventures — where we put our own expertise, team, and track record behind every project. Investment opportunities arise when we open select projects to partners who share our vision.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { icon: '🏗', title: 'Production Infrastructure', desc: "HACCP-certified central kitchen facilities designed for Egypt's growing cloud kitchen and food production sector." },
              { icon: '🍽', title: 'Culinary Concept Ventures', desc: 'Branded food concepts developed with our Michelin-pedigreed chef roster — built to operate and scale.' },
              { icon: '🎓', title: 'Education & Training Assets', desc: "Scalable culinary education products targeting Egypt's 1,200+ new F&B ventures launched annually." },
            ].map(item => (
              <div key={item.title} style={{ padding: '28px 24px', background: '#fff', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{item.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--forest)', marginBottom: 10 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: '#666', lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who invests with us */}
      <section style={{ padding: '80px 24px', background: '#fff', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" style={{ color: 'var(--teal)' }}>Who Invests With Us</div>
            <h2 style={{ color: 'var(--forest)' }}>Partners From <em style={{ color: 'var(--teal)' }}>Everywhere</em></h2>
            <p>Kitchen Three works with investors, operators, and capital partners from across the world. If you see yourself below, we want to hear from you.</p>
          </div>
          <div className="grid-3">
            {investorProfiles.map(profile => (
              <div key={profile.title} className="card" style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{profile.icon}</div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: profile.color, textTransform: 'uppercase', marginBottom: 10 }}>{profile.title}</div>
                <p style={{ fontSize: 14, color: '#555', lineHeight: 1.8, fontWeight: 300, marginBottom: 20, flex: 1 }}>{profile.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {profile.tags.map(tag => (
                    <span key={tag} style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', color: profile.color, background: profile.bg, padding: '4px 10px', borderRadius: 2, textTransform: 'uppercase' }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current status */}
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
            We do not publicly list investment opportunities. When a new venture is ready for partners, we notify our network directly. Register below to be in that conversation — wherever you are in the world.
          </p>
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '36px 32px', maxWidth: 480, margin: '0 auto' }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--forest)', marginBottom: 6 }}>Register Your Interest</div>
            <div style={{ fontSize: 13, color: '#888', marginBottom: 24, fontWeight: 300 }}>We'll notify you when a new opportunity becomes available.</div>
            <form action="https://formspree.io/f/xojkprga" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <input type="hidden" name="_subject" value="Investment Interest Registration — Kitchen Three" />
              <input type="hidden" name="type" value="Investment Interest" />
              <input name="name" required placeholder="Your name" style={{ padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: 'var(--cream)', width: '100%' }} />
              <input name="email" type="email" required placeholder="Email address" style={{ padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: 'var(--cream)', width: '100%' }} />
              <input name="phone" type="tel" placeholder="Phone / WhatsApp (with country code)" style={{ padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: 'var(--cream)', width: '100%' }} />
              <input name="company" placeholder="Organisation (optional)" style={{ padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: 'var(--cream)', width: '100%' }} />
              <input name="country" placeholder="Country" style={{ padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: 'var(--cream)', width: '100%' }} />
              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>Notify Me</button>
            </form>
            <div style={{ marginTop: 16, fontSize: 11, color: '#aaa', lineHeight: 1.6 }}>
              You can also stay informed via our newsletter — subscribe on the <a href="/#contact" style={{ color: 'var(--teal)' }}>homepage</a>.
            </div>
          </div>
        </div>
      </section>

      {/* Why KT */}
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
