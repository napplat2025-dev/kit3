import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Kitchen Three Academy — Culinary & F&B Business Training',
  description: 'Kitchen Three Academy offers online culinary and F&B business management training for aspiring chefs, food entrepreneurs, and restaurant teams across Egypt and the region.',
  alternates: { canonical: 'https://www.kitchenthree.co/academy' },
}

const tracks = [
  {
    code: 'Track A',
    title: 'Technical Culinary Skills',
    color: 'var(--teal)',
    bg: 'var(--teal-light)',
    desc: 'Hands-on culinary knowledge delivered online — from kitchen fundamentals to advanced technique. Designed for aspiring chefs, culinary students, and kitchen teams looking to sharpen their craft.',
    courses: [
      { title: 'Kitchen Fundamentals', level: 'Beginner', status: 'Coming Soon', free: true },
      { title: 'Menu Engineering & Food Costing', level: 'Intermediate', status: 'Coming Soon', free: false },
      { title: 'Food Safety & HACCP Essentials', level: 'Beginner', status: 'Coming Soon', free: true },
      { title: 'Advanced Culinary Techniques', level: 'Advanced', status: 'Coming Soon', free: false },
    ],
  },
  {
    code: 'Track B',
    title: 'F&B Business Management',
    color: 'var(--amber)',
    bg: 'var(--amber-light)',
    desc: 'The business side of running a successful food operation — from concept to profitability. Built for new food entrepreneurs, existing operators, and anyone planning to launch an F&B venture.',
    courses: [
      { title: 'Launching Your F&B Concept', level: 'Beginner', status: 'Coming Soon', free: true },
      { title: 'Financial Planning for Restaurants', level: 'Intermediate', status: 'Coming Soon', free: false },
      { title: 'Brand Building for Food Businesses', level: 'Intermediate', status: 'Coming Soon', free: false },
      { title: 'Operations & SOPs for F&B', level: 'Advanced', status: 'Coming Soon', free: false },
    ],
  },
]

export default function AcademyPage() {
  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)' }}>
      <Nav />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, var(--forest) 0%, #1a3a35 100%)', padding: '100px 24px 80px', borderBottom: '1px solid rgba(168,216,210,0.15)' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <nav style={{ marginBottom: 28, fontSize: 12, color: '#4a8a80', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            <a href="/" style={{ color: '#4a8a80' }}>Home</a>
            <span style={{ margin: '0 10px', color: '#2a5a50' }}>›</span>
            <span style={{ color: 'var(--teal-mid)' }}>Academy</span>
          </nav>
          <div className="eyebrow" style={{ color: 'var(--amber)', marginBottom: 16 }}>Kitchen Three Academy</div>
          <h1 style={{ color: '#fff', marginBottom: 24, fontSize: 'clamp(36px, 5vw, 58px)', lineHeight: 1.15 }}>
            Learn From<br />
            <em style={{ color: 'var(--amber)' }}>The Inside</em>
          </h1>
          <p style={{ fontSize: 18, color: '#7ab8b0', lineHeight: 1.9, fontWeight: 300, maxWidth: 600, marginBottom: 36 }}>
            Online culinary and F&B business training — from the team behind Egypt's leading culinary consultancy. Technical skills and business management, built for aspiring chefs, food entrepreneurs, and restaurant teams.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(253,239,208,0.1)', border: '1px solid var(--amber)', borderRadius: 'var(--radius)', padding: '10px 20px' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--amber)' }} />
            <span style={{ fontSize: 12, color: 'var(--amber)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Launching Soon — Register to Be Notified</span>
          </div>
        </div>
      </section>

      {/* Two tracks */}
      <section style={{ padding: '80px 24px', background: '#fff', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <div className="eyebrow" style={{ color: 'var(--teal)' }}>Course Tracks</div>
            <h2 style={{ color: 'var(--forest)' }}>Two Tracks. <em style={{ color: 'var(--teal)' }}>One Standard.</em></h2>
            <p>Every course is developed by the Kitchen Three team — the same consultants, chefs, and operators who work with Egypt's leading F&B businesses.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
            {tracks.map(track => (
              <div key={track.code} style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
                <div style={{ background: track.bg, padding: '28px 28px 24px', borderBottom: `3px solid ${track.color}` }}>
                  <div style={{ fontSize: 10, letterSpacing: '0.16em', color: track.color, textTransform: 'uppercase', fontWeight: 600, marginBottom: 8 }}>{track.code}</div>
                  <h3 style={{ fontSize: 22, color: 'var(--forest)', marginBottom: 12 }}>{track.title}</h3>
                  <p style={{ fontSize: 13, color: '#555', lineHeight: 1.8, fontWeight: 300 }}>{track.desc}</p>
                </div>
                <div style={{ padding: '20px 28px', background: '#fff' }}>
                  {track.courses.map((course, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0', borderBottom: i < track.courses.length - 1 ? '1px solid var(--border)' : 'none', gap: 12 }}>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--forest)', marginBottom: 3 }}>{course.title}</div>
                        <div style={{ fontSize: 11, color: '#999', fontWeight: 300 }}>{course.level}</div>
                      </div>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
                        {course.free && (
                          <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--teal)', background: 'var(--teal-light)', padding: '3px 8px', borderRadius: 2, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Free</span>
                        )}
                        <span style={{ fontSize: 10, color: '#bbb', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{course.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section style={{ padding: '80px 24px', background: 'var(--cream)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="eyebrow" style={{ color: 'var(--amber)', marginBottom: 12 }}>What to Expect</div>
          <h2 style={{ color: 'var(--forest)', marginBottom: 48, maxWidth: 560 }}>
            Practical. <em style={{ color: 'var(--teal)' }}>Not Theoretical.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            {[
              { icon: '🎥', title: 'Online & On Demand', desc: 'Study at your own pace. Sessions are delivered online — accessible from anywhere.' },
              { icon: '📋', title: 'Single Sessions & Tracks', desc: 'Take one course or follow a full track. Free and paid options available.' },
              { icon: '👨‍🍳', title: 'Built by Practitioners', desc: 'Every course is created by the Kitchen Three consulting and chef team — not generic content.' },
              { icon: '🏅', title: 'Certificate of Completion', desc: 'Receive a Kitchen Three Academy certificate upon completing a full track.' },
            ].map(item => (
              <div key={item.title} style={{ padding: '24px 20px', background: '#fff', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--forest)', marginBottom: 8 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: '#666', lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Register interest */}
      <section style={{ padding: '80px 24px', background: '#fff', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 560, textAlign: 'center' }}>
          <div className="eyebrow" style={{ color: 'var(--teal)', marginBottom: 12 }}>Stay Informed</div>
          <h2 style={{ color: 'var(--forest)', marginBottom: 16 }}>
            Be First to <em style={{ color: 'var(--teal)' }}>Enrol</em>
          </h2>
          <p style={{ fontSize: 15, color: '#666', lineHeight: 1.9, fontWeight: 300, marginBottom: 36 }}>
            Courses are in development. Register below and we'll notify you the moment enrolment opens — with early access for registered members.
          </p>
          <div style={{ background: 'var(--cream)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '32px 28px' }}>
            <form action="https://formspree.io/f/xojkprga" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <input type="hidden" name="_subject" value="Academy Interest Registration — Kitchen Three" />
              <input type="hidden" name="type" value="Academy Interest" />
              <input name="name" required placeholder="Your name" style={{ padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: '#fff', width: '100%' }} />
              <input name="email" type="email" required placeholder="Email address" style={{ padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: '#fff', width: '100%' }} />
              <input name="phone" type="tel" placeholder="Phone / WhatsApp number" style={{ padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: '#fff', width: '100%' }} />
              <select name="track" style={{ padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', fontSize: 14, outline: 'none', background: '#fff', width: '100%', color: '#555' }}>
                <option value="">Interested in which track? (optional)</option>
                <option value="Track A — Technical Culinary Skills">Track A — Technical Culinary Skills</option>
                <option value="Track B — F&B Business Management">Track B — F&B Business Management</option>
                <option value="Both tracks">Both tracks</option>
              </select>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>Notify Me When Enrolment Opens</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section style={{ background: 'var(--forest)', padding: '80px 24px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 600 }}>
          <div className="eyebrow" style={{ color: 'var(--amber)' }}>Need Training Now?</div>
          <h2 style={{ color: '#fff', marginBottom: 20 }}>We Also Deliver <em style={{ color: 'var(--amber)' }}>Bespoke Training</em></h2>
          <p style={{ fontSize: 15, color: '#7ab8b0', marginBottom: 36, fontWeight: 300, lineHeight: 1.8 }}>
            While Academy courses are in development, Kitchen Three's Recruitment & Training team delivers custom in-person and virtual training programmes for restaurant teams, corporates, and HORECA operators.
          </p>
          <a href="/services#recruitment-training" className="btn btn-white">View Training Services</a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
