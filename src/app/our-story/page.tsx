import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Our Story — Kitchen Three',
  description: "Founded in Cairo on 15 November 2013, Kitchen Three is Egypt's leading B2B culinary consultancy. Learn about our journey, our team, and our standard.",
  alternates: { canonical: 'https://www.kitchenthree.co/our-story' },
}

export default function OurStoryPage() {
  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)' }}>
      <Nav />

      <section style={{ background: 'linear-gradient(135deg, #c2e8e3 0%, var(--cream) 60%)', padding: '100px 24px 80px', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <nav style={{ marginBottom: 28, fontSize: 12, color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            <a href="/" style={{ color: '#999' }}>Home</a>
            <span style={{ margin: '0 10px', color: '#ccc' }}>›</span>
            <span style={{ color: 'var(--teal)' }}>Our Story</span>
          </nav>
          <div className="eyebrow" style={{ color: 'var(--amber)', marginBottom: 16 }}>Est. 15 November 2013 · Cairo, Egypt</div>
          <h1 style={{ color: 'var(--forest)', marginBottom: 24, fontSize: 'clamp(36px, 5vw, 58px)', lineHeight: 1.15 }}>
            Our<br />
            <em style={{ color: 'var(--teal)' }}>Story</em>
          </h1>
          <p style={{ fontSize: 18, color: '#555', lineHeight: 1.9, fontWeight: 300, maxWidth: 560 }}>
            Over a decade building Egypt's most comprehensive culinary consultancy — one project, one partnership, one standard at a time.
          </p>
        </div>
      </section>

      <section style={{ padding: '120px 24px', background: '#fff', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 680, textAlign: 'center' }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--teal-light)', border: '2px solid var(--teal-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div className="eyebrow" style={{ color: 'var(--teal)', marginBottom: 16 }}>In Progress</div>
          <h2 style={{ color: 'var(--forest)', marginBottom: 20 }}>
            This Page Is Being<br />
            <em style={{ color: 'var(--teal)' }}>Built With Care</em>
          </h2>
          <p style={{ fontSize: 16, color: '#666', lineHeight: 1.9, fontWeight: 300, marginBottom: 48 }}>
            Our founding story, the team behind Kitchen Three, and the journey from day one in Cairo to Egypt's most complete culinary consultancy practice — coming soon.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, textAlign: 'left', maxWidth: 480, margin: '0 auto 56px', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 20, top: 24, bottom: 24, width: 1, background: 'var(--border)' }} />
            {[
              { year: '15 Nov 2013', label: 'Kitchen Three founded in Cairo, Egypt' },
              { year: 'To Date', label: 'Eight service pillars. Ten international chefs. One standard.' },
            ].map((item, i) => (
              <div key={item.year} style={{ display: 'flex', alignItems: 'flex-start', gap: 20, padding: '16px 0', position: 'relative' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: i === 1 ? 'var(--teal)' : '#fff', border: `2px solid ${i === 1 ? 'var(--teal)' : 'var(--border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: i === 1 ? '#fff' : 'var(--teal)' }} />
                </div>
                <div style={{ paddingTop: 8 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--teal)', letterSpacing: '0.1em', marginBottom: 3 }}>{item.year}</div>
                  <div style={{ fontSize: 14, color: i === 1 ? 'var(--forest)' : '#666', fontWeight: i === 1 ? 500 : 300 }}>{item.label}</div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 14, color: '#aaa', fontWeight: 300, marginBottom: 40, fontStyle: 'italic' }}>
            The full story — milestones, clients, team, and vision — is being written and will be published here soon.
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/team" className="btn btn-primary">Meet the Team</a>
            <a href="/contact" className="btn btn-outline">Get In Touch</a>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--forest)', padding: '64px 24px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap', textAlign: 'center' }}>
            {[['15 Nov', 'Founded 2013'], ['10', "Int'l Chefs"], ['8', 'Service Pillars'], ['15+', 'Major Clients'], ['HACCP', 'Certified']].map(([v, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 40, fontWeight: 300, color: 'var(--amber)', lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 11, color: '#4a8a80', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
