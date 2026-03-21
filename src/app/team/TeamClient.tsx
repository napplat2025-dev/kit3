'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const team = [
  {
    initials: 'KF',
    name: 'Karim Fayed',
    title: 'Co-Founder & Visionary',
    color: '#1a8a7a',
    bg: '#e8f6f4',
    bio: 'An accomplished entrepreneurial leader with over 30 years of success building and operating ventures across tourism, F&B, and digital communities. Karim founded and managed Sea Queen Fleet in the Red Sea (1993–2021) and pioneered cloud kitchen operations in Egypt with Kitchen Three. He co-founded the AUC Alumni Benefit Community in 2022, transforming a networking idea into a thriving ecosystem of over 6,000 members across 50+ specialised groups — facilitating over EGP 3 billion in intra-member economic value. A persistent warrior. Brave without fear. Men are shaped by their defeats, not their victories.',
    credentials: [
      'AUC Class of 1993 — B.A. Mass Communication',
      'Founder, Sea Queen Fleet — Red Sea (1993–2021)',
      'Co-Founder, Kitchen Three — Est. 2013',
      'Founder, ABC Alumni Benefit Community (6,000+ members)',
    ],
    focus: 'Strategy, partnerships, business development, and vision.',
  },
  {
    initials: 'HA',
    name: 'Hadil Amasheh',
    title: 'Co-Founder & Culinary Director',
    color: '#e8a020',
    bg: '#fdf4e3',
    bio: 'The beating heart of Kitchen Three. Hadil brings over 20 years of culinary experience, an AUC education, and the rare combination of artisan craft and business acumen that defines everything Kitchen Three creates. As a Goldman Sachs 10,000 Women graduate and founder of Cookies N Pies, Hadil has proven that culinary excellence and entrepreneurial success are not just compatible — they are inseparable. Her work spans artisan bakery, product development, chef relationship management, and quality standards across every Kitchen Three engagement.',
    credentials: [
      'AUC Alumna',
      'Goldman Sachs 10,000 Women Graduate',
      'Founder, Cookies N Pies',
      '20+ Years Culinary Experience',
    ],
    focus: 'Culinary direction, chef relationships, product development, and quality.',
  },
  {
    initials: 'MG',
    name: 'May Gad',
    title: 'Advisory Board Member',
    color: '#e06050',
    bg: '#fdf0ee',
    bio: 'A transformational business leader and certified board member recognised for delivering growth, market expansion, and organisational change across FMCG, Telco, Real Estate, and startups. May combines strategic vision with operational rigour to drive measurable business impact — from double-digit category growth to large-scale process transformations. With over 100 hours of C-suite and Director-level executive coaching and expertise as an Enneagram practitioner, she equips leaders with deeper self-awareness and clarity. May has mentored 300+ startups globally and serves on the Board of ICF Egypt.',
    credentials: [
      'AUC Class of 1995 — MBA',
      'Certified Board Member',
      'Executive Coach — 100+ C-suite hours',
      'Mentor to 300+ startups globally',
      'Board Member, ICF Egypt',
    ],
    focus: 'Executive coaching, business transformation, startup mentoring, and leadership development.',
  },
  {
    initials: 'GP',
    name: 'Georgette Prestopino',
    title: 'Hospitality Consultant',
    color: '#1a8a7a',
    bg: '#e8f6f4',
    bio: 'Georgette brings deep expertise in Food & Beverage operations and guest experience design across premium hospitality environments. Her work with Kitchen Three ensures that every client engagement delivers not just culinary excellence but an exceptional end-to-end experience — from the first briefing to the final handover.',
    credentials: [
      'Premium Hospitality Specialist',
      'F&B Operations Expert',
      'Guest Experience Designer',
    ],
    focus: 'F&B operations, guest experience, and hospitality standards.',
  },
  {
    initials: 'AM',
    name: 'Alfred Melkon',
    title: 'Team Member',
    color: '#e8a020',
    bg: '#fdf4e3',
    bio: 'A dedicated professional bringing expertise and passion to the Kitchen Three family. Alfred contributes his skills and energy to supporting the team across client engagements and operational delivery.',
    credentials: ['Kitchen Three Team Member'],
    focus: 'Client support and operational delivery.',
  },
  {
    initials: 'KZ',
    name: 'Karim Zorkani',
    title: 'Team Member',
    color: '#e06050',
    bg: '#fdf0ee',
    bio: 'A committed professional contributing drive and vision to the Kitchen Three mission. Karim Zorkani brings dedication and a forward-thinking approach to every project he is involved with.',
    credentials: ['Kitchen Three Team Member'],
    focus: 'Project support and business development.',
  },
]

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Kitchen Three Team',
  url: 'https://www.kitchenthree.co/team',
  description: "Meet the Kitchen Three team — the people behind Egypt's leading B2B culinary consultancy.",
  mainEntity: {
    '@type': 'Organization',
    name: 'Kitchen Three',
    url: 'https://www.kitchenthree.co',
    foundingDate: '2013',
    member: team.map(m => ({
      '@type': 'Person',
      name: m.name,
      jobTitle: m.title,
      worksFor: { '@type': 'Organization', name: 'Kitchen Three' },
    })),
  },
}

export default function TeamClient() {
  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: '#fdfaf6', color: '#1a1a1a' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <Nav />

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #e8f6f4 0%, #fdfaf6 60%)', padding: '80px 24px 64px', borderBottom: '1px solid #ede8e0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 24 }}>
            <a href="/" style={{ fontSize: 12, color: '#999', letterSpacing: '0.08em', textDecoration: 'none', textTransform: 'uppercase' }}>Home</a>
            <span style={{ color: '#ccc', margin: '0 10px' }}>›</span>
            <span style={{ fontSize: 12, color: '#1a8a7a', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Our Team</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, color: '#0f2e2a', marginBottom: 20, lineHeight: 1.1 }}>
            The People Behind<br /><em style={{ color: '#1a8a7a' }}>Kitchen Three</em>
          </h1>
          <p style={{ fontSize: 17, color: '#666', maxWidth: 600, lineHeight: 1.8, fontWeight: 300 }}>
            A small, focused team built on expertise, trust, and a shared belief that Egypt's food industry deserves world-class support. Every person here is exceptional at what they do.
          </p>
        </div>
      </section>

      {/* FOUNDERS */}
      <section style={{ padding: '80px 24px', background: '#fdfaf6' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 11, letterSpacing: '0.2em', color: '#aaa', textTransform: 'uppercase', fontWeight: 500, marginBottom: 40 }}>FOUNDERS</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 64 }}>
            {team.slice(0, 2).map(m => (
              <div key={m.name} style={{ background: '#fff', border: '1px solid #ede8e0', borderRadius: 4, padding: '48px 40px', transition: 'border-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = m.color}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = '#ede8e0'}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 32 }}>
                  <div style={{ width: 80, height: 80, borderRadius: '50%', background: `linear-gradient(135deg, ${m.bg}, ${m.color}44)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 400, color: m.color, flexShrink: 0 }}>{m.initials}</div>
                  <div>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 30, fontWeight: 400, color: '#0f2e2a', marginBottom: 4 }}>{m.name}</h2>
                    <div style={{ fontSize: 12, color: m.color, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>{m.title}</div>
                  </div>
                </div>
                <p style={{ fontSize: 15, color: '#555', lineHeight: 1.9, fontWeight: 300, marginBottom: 28 }}>{m.bio}</p>
                <div style={{ marginBottom: 24 }}>
                  {m.credentials.map(c => (
                    <div key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: m.color, flexShrink: 0, marginTop: 5 }} />
                      <span style={{ fontSize: 13, color: '#555' }}>{c}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: '14px 18px', background: m.bg, borderRadius: 2, borderLeft: `3px solid ${m.color}` }}>
                  <div style={{ fontSize: 10, color: m.color, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, marginBottom: 4 }}>Focus</div>
                  <div style={{ fontSize: 13, color: '#555', fontWeight: 300 }}>{m.focus}</div>
                </div>
              </div>
            ))}
          </div>

          {/* REST OF TEAM */}
          <div style={{ fontSize: 11, letterSpacing: '0.2em', color: '#aaa', textTransform: 'uppercase', fontWeight: 500, marginBottom: 40 }}>ADVISORY & TEAM</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {team.slice(2).map(m => (
              <div key={m.name} style={{ background: '#fff', border: '1px solid #ede8e0', borderRadius: 4, padding: '36px 28px', transition: 'border-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = m.color}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = '#ede8e0'}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: `linear-gradient(135deg, ${m.bg}, ${m.color}44)`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, color: m.color }}>{m.initials}</div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 400, color: '#0f2e2a', marginBottom: 4 }}>{m.name}</h2>
                <div style={{ fontSize: 11, color: m.color, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500, marginBottom: 16 }}>{m.title}</div>
                <p style={{ fontSize: 14, color: '#666', lineHeight: 1.8, fontWeight: 300, marginBottom: 20 }}>{m.bio}</p>
                <div style={{ marginBottom: 16 }}>
                  {m.credentials.map(c => (
                    <div key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: m.color, flexShrink: 0, marginTop: 5 }} />
                      <span style={{ fontSize: 12, color: '#666' }}>{c}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: '12px 16px', background: m.bg, borderRadius: 2, borderLeft: `3px solid ${m.color}` }}>
                  <div style={{ fontSize: 10, color: m.color, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, marginBottom: 4 }}>Focus</div>
                  <div style={{ fontSize: 12, color: '#555', fontWeight: 300 }}>{m.focus}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background: '#fff', padding: '80px 24px', borderTop: '1px solid #ede8e0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 11, letterSpacing: '0.2em', color: '#e8a020', textTransform: 'uppercase', fontWeight: 500, marginBottom: 16 }}>HOW WE WORK</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, color: '#0f2e2a', marginBottom: 48 }}>
            Built on <em style={{ color: '#1a8a7a' }}>These Principles</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { title: 'Karim handles the vision', desc: 'Strategy, partnerships, and the relentless pursuit of what Kitchen Three can become.', color: '#1a8a7a', bg: '#e8f6f4' },
              { title: 'Hadil handles the craft', desc: 'Culinary direction, chef relationships, and the uncompromising quality standards that define our work.', color: '#e8a020', bg: '#fdf4e3' },
              { title: 'The team delivers', desc: 'Every engagement is executed with precision, care, and the full weight of our collective expertise.', color: '#e06050', bg: '#fdf0ee' },
              { title: 'Clients come first', desc: 'We measure our success by the success of the businesses we work with — nothing else matters.', color: '#1a8a7a', bg: '#e8f6f4' },
              { title: 'Small and focused', desc: 'We are not trying to be the biggest. We are trying to be the best. Quality over quantity, always.', color: '#e8a020', bg: '#fdf4e3' },
              { title: 'Community matters', desc: 'Our CSR work — free sessions, guides, and open knowledge — is not marketing. It is who we are.', color: '#e06050', bg: '#fdf0ee' },
            ].map(v => (
              <div key={v.title} style={{ background: v.bg, borderRadius: 4, padding: '28px 24px', textAlign: 'left', border: `1px solid ${v.color}22` }}>
                <h3 style={{ fontSize: 16, fontWeight: 500, color: '#0f2e2a', marginBottom: 10, fontFamily: "'Cormorant Garamond', serif" }}>{v.title}</h3>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.8, fontWeight: 300 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0f2e2a', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ fontSize: 11, letterSpacing: '0.2em', color: '#e8a020', textTransform: 'uppercase', fontWeight: 500, marginBottom: 20 }}>WORK WITH US</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, color: '#fff', marginBottom: 20 }}>
            Let's Build Something <em style={{ color: 'var(--amber)' }}>Extraordinary Together</em>
          </h2>
          <p style={{ fontSize: 15, color: '#7ab8b0', marginBottom: 36, fontWeight: 300, lineHeight: 1.8 }}>Available for consulting engagements across Egypt and the MENA region.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/#contact" style={{ background: '#1a8a7a', color: '#fff', padding: '14px 32px', borderRadius: 2, fontSize: 13, letterSpacing: '0.12em', textDecoration: 'none', fontWeight: 500 }}>GET IN TOUCH</a>
            <a href="/services" style={{ border: '1px solid #1a5048', color: '#7ab8b0', padding: '14px 32px', borderRadius: 2, fontSize: 13, letterSpacing: '0.12em', textDecoration: 'none', fontWeight: 500 }}>VIEW OUR SERVICES</a>
          </div>
        </div>
      </section>

      <footer style={{ background: '#0a1f1c', color: '#4a8a80', padding: '24px', textAlign: 'center' }}>
        <div style={{ fontSize: 12 }}>© 2026 Kitchen Three LLC — Cairo, Egypt. All rights reserved.</div>
      </footer>
    </div>
  )
}
