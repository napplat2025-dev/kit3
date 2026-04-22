'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const team = [
  { initials: 'KF', name: 'Karim Fayed', title: 'Co-Founder & Visionary', color: 'var(--teal)', bg: 'var(--teal-light)', bio: 'An accomplished entrepreneurial leader with over 30 years of success building and operating ventures across tourism, F&B, and digital communities. Karim founded and managed Sea Queen Fleet in the Red Sea (1993-2021) and pioneered cloud kitchen operations in Egypt with Kitchen Three. He co-founded the AUC Alumni Benefit Community in 2022, transforming a networking idea into a thriving ecosystem of over 6,000 members across 50+ specialised groups.', credentials: ['AUC Class of 1993 — B.A. Mass Communication', 'Founder, Sea Queen Fleet — Red Sea (1993-2021)', 'Co-Founder, Kitchen Three — Est. 2013', 'Founder, ABC Alumni Benefit Community (6,000+ members)'], focus: 'Strategy, partnerships, business development, and vision.' },
  { initials: 'HA', name: 'Hadil Amasheh', title: 'Co-Founder & Culinary Director', color: 'var(--amber)', bg: 'var(--amber-light)', bio: 'The beating heart of Kitchen Three. Hadil brings over 20 years of culinary experience, an AUC education, and the rare combination of artisan craft and business acumen that defines everything Kitchen Three creates. As a Goldman Sachs 10,000 Women graduate and founder of Cookies N Pies, Hadil has proven that culinary excellence and entrepreneurial success are inseparable.', credentials: ['AUC Alumna', 'Goldman Sachs 10,000 Women Graduate', 'Founder, Cookies N Pies', '20+ Years Culinary Experience'], focus: 'Culinary direction, chef relationships, product development, and quality.' },
  { initials: 'MG', name: 'May Gad', title: 'Marketing Consultant', color: 'var(--coral)', bg: 'var(--coral-light)', bio: 'A seasoned marketing strategist and business consultant with over 25 years of progressive experience across multinationals, regional leaders, and high-growth ventures. Has led and delivered impactful marketing, branding, and commercial strategies for globally recognized organizations including Nestlé, Coca-Cola Aujan, Raya, and leading real estate developers such as Misr Italia Properties and REDCON Properties.\n\nSpecializes in building and transforming brands, structuring marketing functions, and driving measurable growth across sectors including FMCG, telecom, real estate, commodities, and startups. Proven track record in scaling categories, growing market share, and optimizing marketing efficiency delivering results such as +112% category growth, +10% market share gains, 75% reduction in cost per lead, and significant improvements in profitability and marketing ROI.\n\nHas successfully repositioned brands, led award-winning campaigns, and developed go-to-market strategies that elevated companies from lower-tier positioning to strong competitive standing. Known for combining strategic clarity with executional excellence, bridging the gap between insight, creativity, and commercial impact. Through her consultancy, she partners with organizations to design clear strategies, restructure teams, and build marketing engines that drive sustainable growth whether in startup environments, scale-ups, or complex organizational transformations.', credentials: ['25+ Years Marketing & Business Consulting', 'Nestlé, Coca-Cola Aujan, Raya', 'Misr Italia Properties, REDCON Properties', '+112% category growth, +10% market share, 75% CPL reduction', 'Brand transformation & go-to-market strategy'], focus: 'Marketing strategy, brand transformation, go-to-market, and sustainable growth consulting.' },
  { initials: 'GP', name: 'Georgette Prestopino', title: 'Hospitality Consultant', color: 'var(--teal)', bg: 'var(--teal-light)', bio: 'A hospitality and food quality specialist with over 35 years of experience across Italy, Egypt, and the wider Mediterranean. Georgette began her career leading tours for prestigious Italian tourism companies before transitioning into food quality assurance and operations — working with institutions including VeraTour\'s Nile floating hotels, Raffaello Restaurant, Horizon Hotel Cairo, and Le Carnaval. Trained under world-class culinary talent including Alain Le Notre in Paris and Chef Yann Bonneau, she brings a rare combination of European culinary standards and deep Egyptian market knowledge. Fluent in Italian, French, English, Arabic, and Greek, Georgette is a natural bridge between international hospitality excellence and local operations — making her an invaluable asset to every Kitchen Three client engagement.', credentials: ['Food Quality Assurance & R&D, Le Carnaval Cairo', 'Quality Assurance Manager, Raffaello Restaurant', 'Resident Area Manager, VeraTour Egypt — Nile Hotels', 'Trained under Alain Le Notre, Paris', 'Fluent in 5 languages — Italian, French, English, Arabic, Greek'], focus: 'Food quality assurance, hospitality standards, guest experience, and F&B operations.' },
  { initials: 'AM', name: 'Alfred Melkon', title: 'Operations Consultant', color: 'var(--amber)', bg: 'var(--amber-light)', bio: 'A seasoned F&B operations leader with over 36 years of experience across multinational corporations, homegrown brands, and startups. Alfred has held senior leadership roles at McDonald\'s Egypt, Cilantro, and The Bakery Shop Holding Company, and most recently co-founded Molly\'s Bakery — rolling out 8 stores in just 30 months. His expertise spans operations management, value chain optimisation, franchise development, and business turnaround. At Cilantro, he led the company from loss-making to profitable within 18 months before successfully guiding its exit to a strategic investor. Certified in advanced operations and supply chain management across Manila, Chicago, and Frankfurt, Alfred brings world-class operational discipline to every Kitchen Three engagement.', credentials: ['Bachelor of International Hospitality Management, Alexandria University', 'General Manager, Cilantro — 84+ stores nationwide', "Co-Founder, Molly's Bakery — 8 stores in 30 months", "Operation Manager, McDonald's Egypt — 10 years"], focus: 'Operations management, value chain optimisation, franchise development, and business turnaround.' },
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
                {m.bio.split('\n\n').map((para, i) => (
                  <p key={i} style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300, marginBottom: 16 }}>{para}</p>
                ))}
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
