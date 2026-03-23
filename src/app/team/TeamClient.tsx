'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const team = [
  { initials: 'KF', name: 'Karim Fayed', title: 'Co-Founder & Visionary', color: 'var(--teal)', bg: 'var(--teal-light)', bio: 'An accomplished entrepreneurial leader with over 30 years of success building and operating ventures across tourism, F&B, and digital communities. Karim founded and managed Sea Queen Fleet in the Red Sea (1993-2021) and pioneered cloud kitchen operations in Egypt with Kitchen Three. He co-founded the AUC Alumni Benefit Community in 2022, transforming a networking idea into a thriving ecosystem of over 6,000 members across 50+ specialised groups.', credentials: ['AUC Class of 1993 — B.A. Mass Communication', 'Founder, Sea Queen Fleet — Red Sea (1993-2021)', 'Co-Founder, Kitchen Three — Est. 2013', 'Founder, ABC Alumni Benefit Community (6,000+ members)'], focus: 'Strategy, partnerships, business development, and vision.' },
  { initials: 'HA', name: 'Hadil Amasheh', title: 'Co-Founder & Culinary Director', color: 'var(--amber)', bg: 'var(--amber-light)', bio: 'The beating heart of Kitchen Three. Hadil brings over 20 years of culinary experience, an AUC education, and the rare combination of artisan craft and business acumen that defines everything Kitchen Three creates. As a Goldman Sachs 10,000 Women graduate and founder of Cookies N Pies, Hadil has proven that culinary excellence and entrepreneurial success are inseparable.', credentials: ['AUC Alumna', 'Goldman Sachs 10,000 Women Graduate', 'Founder, Cookies N Pies', '20+ Years Culinary Experience'], focus: 'Culinary direction, chef relationships, product development, and quality.' },
  { initials: 'MG', name: 'May Gad', title: 'Marketing Consultant', color: 'var(--coral)', bg: 'var(--coral-light)', bio: 'A transformational business leader and certified board member recognised for delivering growth, market expansion, and organisational change across FMCG, Telco, Real Estate, and startups. With over 100 hours of C-suite executive coaching and expertise as an Enneagram practitioner, she equips leaders with deeper self-awareness. May has mentored 300+ startups globally and serves on the Board of ICF Egypt.', credentials: ['AUC Class of 1995 — MBA', 'Certified Board Member', 'Executive Coach — 100+ C-suite hours', 'Mentor to 300+ startups globally', 'Board Member, ICF Egypt'], focus: 'Executive coaching, business transformation, startup mentoring, and leadership development.' },
  { initials: 'GP', name: 'Georgette Prestopino', title: 'Hospitality Consultant', color: 'var(--teal)', bg: 'var(--teal-light)', bio: 'Georgette brings deep expertise in Food & Beverage operations and guest experience design across premium hospitality environments. Her work with Kitchen Three ensures that every client engagement delivers not just culinary excellence but an exceptional end-to-end experience.', credentials: ['Premium Hospitality Specialist', 'F&B Operations Expert', 'Guest Experience Designer'], focus: 'F&B operations, guest experience, and hospitality standards.' },
  { initials: 'AM', name: 'Alfred Melkon', title: 'Operations Consultant', color: 'var(--amber)', bg: 'var(--amber-light)', bio: 'A dedicated professional bringing expertise and passion to the Kitchen Three family. Alfred contributes his skills and energy to supporting the team across client engagements and operational delivery.', credentials: ['Kitchen Three Team Member'], focus: 'Client support and operational delivery.' },
  { initials: 'KZ', name: 'Karim Zorkani', title: 'Financial Consultant', color: 'var(--coral)', bg: 'var(--coral-light)', bio: 'A committed professional contributing drive and vision to the Kitchen Three mission. Karim Zorkani brings dedication and a forward-thinking approach to every project he is involved with.', credentials: ['Kitchen Three Team Member'], focus: 'Project support and business development.' },
]

export default function TeamClient() {
  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)', color: 'var(--ink)' }}>
      <Nav />

      <section style={{ background: 'var(--forest)', padding: '80px 0 64px' }}>
        <div className="container">
          <div className="eyebrow" style={{ color: 'var(--amber)' }}>Our Team</div>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, color: '#ffffff', marginBottom: 20, lineHeight: 1.1 }}>
            The People Behind <em style={{ color: 'var(--amber)' }}>Kitchen Three</em>
          </h1>
          <p style={{ fontSize: 17, color: '#d4efeb', maxWidth: 600, lineHeight: 1.8, fontWeight: 300 }}>
            A small, focused team built on expertise, trust, and a shared belief that Egypt food industry deserves world-class support.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow" style={{ color: 'var(--muted)' }}>Founders</div>
          <div className="founders-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 56 }}>
            {team.slice(0, 2).map(m => (
              <div key={m.name} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 4, padding: '36px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 24, flexWrap: 'wrap' }}>
                  <div style={{ width: 72, height: 72, borderRadius: '50%', background: m.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 400, color: m.color, flexShrink: 0, border: '2px solid ' + m.color }}>{m.initials}</div>
                  <div>
                    <h2 style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 400, color: 'var(--forest)', marginBottom: 4 }}>{m.name}</h2>
                    <div style={{ fontSize: 11, color: m.color, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>{m.title}</div>
                  </div>
                </div>
                <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.9, fontWeight: 300, marginBottom: 24 }}>{m.bio}</p>
                <div style={{ marginBottom: 20 }}>
                  {m.credentials.map(c => (
                    <div key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: m.color, flexShrink: 0, marginTop: 6 }} />
                      <span style={{ fontSize: 13, color: 'var(--muted)' }}>{c}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: '12px 16px', background: m.bg, borderRadius: 2, borderLeft: '3px solid ' + m.color }}>
                  <div style={{ fontSize: 10, color: m.color, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 4 }}>Focus</div>
                  <div style={{ fontSize: 13, color: 'var(--muted)' }}>{m.focus}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="eyebrow" style={{ color: 'var(--muted)' }}>Advisory & Team</div>
          <div className="advisory-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {team.slice(2).map(m => (
              <div key={m.name} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 4, padding: '28px 24px' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: m.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 400, color: m.color, border: '2px solid ' + m.color }}>{m.initials}</div>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 400, color: 'var(--forest)', marginBottom: 4 }}>{m.name}</h2>
                <div style={{ fontSize: 11, color: m.color, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 14 }}>{m.title}</div>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300, marginBottom: 16 }}>{m.bio}</p>
                <div style={{ marginBottom: 14 }}>
                  {m.credentials.map(c => (
                    <div key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: m.color, flexShrink: 0, marginTop: 5 }} />
                      <span style={{ fontSize: 12, color: 'var(--muted)' }}>{c}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: '10px 14px', background: m.bg, borderRadius: 2, borderLeft: '3px solid ' + m.color }}>
                  <div style={{ fontSize: 10, color: m.color, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 3 }}>Focus</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>{m.focus}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" style={{ color: 'var(--amber)' }}>How We Work</div>
            <h2>Built on <em style={{ color: 'var(--teal)' }}>These Principles</em></h2>
          </div>
          <div className="grid-3" style={{ gap: 16 }}>
            {[
              { title: 'Karim handles the vision', desc: 'Strategy, partnerships, and the relentless pursuit of what Kitchen Three can become.', color: 'var(--teal)', bg: 'var(--teal-light)' },
              { title: 'Hadil handles the craft', desc: 'Culinary direction, chef relationships, and the uncompromising quality standards that define our work.', color: 'var(--amber)', bg: 'var(--amber-light)' },
              { title: 'The team delivers', desc: 'Every engagement is executed with precision, care, and the full weight of our collective expertise.', color: 'var(--coral)', bg: 'var(--coral-light)' },
              { title: 'Clients come first', desc: 'We measure our success by the success of the businesses we work with — nothing else matters.', color: 'var(--teal)', bg: 'var(--teal-light)' },
              { title: 'Small and focused', desc: 'We are not trying to be the biggest. We are trying to be the best. Quality over quantity, always.', color: 'var(--amber)', bg: 'var(--amber-light)' },
              { title: 'Community matters', desc: 'Our CSR work — free sessions, guides, and open knowledge — is not marketing. It is who we are.', color: 'var(--coral)', bg: 'var(--coral-light)' },
            ].map(v => (
              <div key={v.title} style={{ background: v.bg, borderRadius: 4, padding: '24px 20px', border: '1px solid ' + v.color + '22' }}>
                <h3 style={{ fontSize: 16, fontWeight: 500, color: 'var(--forest)', marginBottom: 8, fontFamily: 'var(--serif)' }}>{v.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--forest)', padding: '72px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: 560, margin: '0 auto' }}>
            <div className="eyebrow" style={{ color: 'var(--amber)' }}>Work With Us</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3vw, 42px)', color: '#ffffff', marginBottom: 16 }}>
              Let us Build Something <em style={{ color: 'var(--amber)' }}>Extraordinary Together</em>
            </h2>
            <p style={{ fontSize: 15, color: '#d4efeb', marginBottom: 32, fontWeight: 300, lineHeight: 1.8 }}>Available for consulting engagements across Egypt and the MENA region.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact" className="btn btn-primary">Get In Touch</a>
              <a href="/services" className="btn btn-outline" style={{ borderColor: 'rgba(168,216,210,0.5)', color: '#d4efeb' }}>View Our Services</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <style>{`
        @media (max-width: 768px) {
          .founders-grid { grid-template-columns: 1fr !important; }
          .advisory-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
