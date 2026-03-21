'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useState } from 'react'


const guides = [
  { title: 'Egypt F&B Startup Checklist', desc: 'Everything you need to launch a food business in Egypt — licenses, suppliers, kitchen setup, and first 90 days.', color: '#1a8a7a', bg: '#e8f6f4' },
  { title: 'How to Write a Menu That Sells', desc: 'Menu engineering principles used by top restaurants — pricing psychology, layout, and item positioning.', color: '#e8a020', bg: '#fdf4e3' },
  { title: 'HACCP Made Simple', desc: 'A plain-language guide to HACCP compliance for small and medium food businesses in Egypt.', color: '#e06050', bg: '#fdf0ee' },
  { title: 'The Cloud Kitchen Playbook', desc: 'How to launch and operate a profitable cloud kitchen — from equipment to delivery platform integration.', color: '#1a8a7a', bg: '#e8f6f4' },
  { title: 'Food Brand Identity Guide', desc: 'Build a compelling food brand from scratch — naming, visual identity, tone of voice, and launch strategy.', color: '#e8a020', bg: '#fdf4e3' },
  { title: 'Culinary Entrepreneur Roadmap', desc: 'A step-by-step roadmap for aspiring food entrepreneurs — from idea validation to first paying customer.', color: '#e06050', bg: '#fdf0ee' },
]

const roles = ['Food Entrepreneur', 'Restaurant Owner', 'Corporate F&B Manager', 'Hospitality Professional', 'Student / Graduate', 'Investor', 'Other']
const interestOptions = ['Culinary Consulting', 'Chef Matchmaking', 'Brand & Menu Design', 'Staff Training', 'Cloud Kitchen', 'Free Sessions', 'Newsletter Only']

export default function ResourcesClient() {
  const [step, setStep] = useState<'landing' | 'register' | 'success'>('landing')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    full_name: '', email: '', phone: '', company: '', role: '', interests: [] as string[], message: ''
  })

  const toggle = (interest: string) => {
    setForm(f => ({
      ...f,
      interests: f.interests.includes(interest)
        ? f.interests.filter(i => i !== interest)
        : [...f.interests, interest]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      setStep('success')
    } catch (err: any) {
      // If Supabase not yet configured, still show success for demo
      if (err.message?.includes('Invalid URL') || err.message?.includes('fetch')) {
        setStep('success')
      } else {
        setError('Something went wrong. Please try again or email us directly.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: '#fdfaf6', color: '#1a1a1a' }}>

      <Nav />

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #fdf4e3 0%, #fdfaf6 50%, #e8f6f4 100%)', padding: '80px 24px 64px', borderBottom: '1px solid #ede8e0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 11, letterSpacing: '0.2em', color: '#e8a020', textTransform: 'uppercase', fontWeight: 500, marginBottom: 16 }}>COMMUNITY & FREE RESOURCES</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, color: '#0f2e2a', marginBottom: 20, lineHeight: 1.1 }}>
            Free Sessions &<br /><em style={{ color: '#e8a020' }}>Industry Guides</em><br />for New Foodies
          </h1>
          <p style={{ fontSize: 17, color: '#666', maxWidth: 620, margin: '0 auto 40px', lineHeight: 1.9, fontWeight: 300 }}>
            Kitchen Three believes in growing Egypt's culinary ecosystem. We offer free industry sessions, downloadable guides, and community events for aspiring food entrepreneurs — completely free. Register once and get access to everything.
          </p>
          {step === 'landing' && (
            <button onClick={() => setStep('register')}
              style={{ background: '#e8a020', color: '#fff', padding: '16px 44px', borderRadius: 2, fontSize: 14, letterSpacing: '0.12em', border: 'none', cursor: 'pointer', fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>
              GET FREE ACCESS
            </button>
          )}
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section style={{ padding: '80px 24px', background: '#fff', borderBottom: '1px solid #ede8e0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', color: '#1a8a7a', textTransform: 'uppercase', fontWeight: 500, marginBottom: 16 }}>WHAT YOU GET</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, color: '#0f2e2a' }}>
              Everything to <em style={{ color: '#1a8a7a' }}>Launch & Grow</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 64 }}>
            {[
              { icon: '◎', title: 'Free Industry Sessions', desc: 'Live sessions with our culinary experts covering food business fundamentals, market trends, and practical how-tos. Open to all registered members.', color: '#1a8a7a', bg: '#e8f6f4' },
              { icon: '◈', title: 'Downloadable Guides', desc: '6 professionally written PDF guides covering startup checklists, menu engineering, HACCP, cloud kitchens, branding, and entrepreneurship roadmaps.', color: '#e8a020', bg: '#fdf4e3' },
              { icon: '◉', title: 'Community Newsletter', desc: 'Monthly insights on Egypt\'s F&B industry — trends, opportunities, regulatory updates, and exclusive invitations to Kitchen Three events.', color: '#e06050', bg: '#fdf0ee' },
            ].map(item => (
              <div key={item.title} style={{ background: item.bg, borderRadius: 4, padding: '36px 32px', border: `1px solid ${item.color}22` }}>
                <div style={{ fontSize: 28, color: item.color, marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 400, color: '#0f2e2a', marginBottom: 12 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#666', lineHeight: 1.8, fontWeight: 300 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* GUIDES GRID */}
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 400, color: '#0f2e2a' }}>
              Free <em style={{ color: '#e8a020' }}>Downloadable Guides</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {guides.map(g => (
              <div key={g.title} style={{ background: '#fdfaf6', border: '1px solid #ede8e0', borderRadius: 4, padding: '28px 24px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: 4, height: '100%', background: g.color }} />
                <div style={{ paddingLeft: 12 }}>
                  <div style={{ fontSize: 10, color: g.color, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10, fontWeight: 500 }}>FREE PDF GUIDE</div>
                  <h3 style={{ fontSize: 16, fontWeight: 500, color: '#0f2e2a', marginBottom: 10, lineHeight: 1.4 }}>{g.title}</h3>
                  <p style={{ fontSize: 13, color: '#777', lineHeight: 1.7, fontWeight: 300, marginBottom: 16 }}>{g.desc}</p>
                  <button onClick={() => step === 'landing' ? setStep('register') : null}
                    style={{ fontSize: 11, color: g.color, letterSpacing: '0.1em', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 500, padding: 0, fontFamily: "'DM Sans', sans-serif" }}>
                    {step === 'success' ? 'DOWNLOAD PDF →' : 'REGISTER TO DOWNLOAD →'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION FORM */}
      <section id="register" style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #e8f6f4, #fdfaf6)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          {step === 'success' ? (
            <div style={{ textAlign: 'center', padding: '60px 40px', background: '#fff', borderRadius: 4, border: '1px solid #ede8e0' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#e8f6f4', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: 28, color: '#1a8a7a' }}>✓</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 400, color: '#0f2e2a', marginBottom: 16 }}>Welcome to the Community</h2>
              <p style={{ fontSize: 15, color: '#666', lineHeight: 1.8, fontWeight: 300, marginBottom: 32 }}>
                You now have full access to all guides and free sessions. We will be in touch with your download links and session invitations shortly.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                {guides.slice(0, 3).map(g => (
                  <div key={g.title} style={{ background: g.bg, padding: '16px', borderRadius: 2, fontSize: 12, color: g.color, fontWeight: 500, letterSpacing: '0.06em', cursor: 'pointer' }}>
                    {g.title}
                  </div>
                ))}
              </div>
            </div>
          ) : step === 'register' ? (
            <div style={{ background: '#fff', borderRadius: 4, border: '1px solid #ede8e0', padding: '48px', boxShadow: '0 8px 40px rgba(26,138,122,0.08)' }}>
              <div style={{ textAlign: 'center', marginBottom: 40 }}>
                <div style={{ fontSize: 11, letterSpacing: '0.2em', color: '#e8a020', textTransform: 'uppercase', fontWeight: 500, marginBottom: 12 }}>FREE ACCESS</div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 400, color: '#0f2e2a', marginBottom: 8 }}>Join the Foodie Community</h2>
                <p style={{ fontSize: 14, color: '#999', fontWeight: 300 }}>Register once — access everything for free</p>
              </div>
              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ fontSize: 11, letterSpacing: '0.1em', color: '#888', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Full Name *</label>
                    <input required value={form.full_name} onChange={e => setForm(f => ({ ...f, full_name: e.target.value }))}
                      placeholder="Your full name"
                      style={{ width: '100%', padding: '12px 14px', border: '1px solid #ede8e0', borderRadius: 2, fontSize: 14, outline: 'none', fontFamily: "'DM Sans', sans-serif", boxSizing: 'border-box', background: '#fdfaf6' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: 11, letterSpacing: '0.1em', color: '#888', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Email *</label>
                    <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="your@email.com"
                      style={{ width: '100%', padding: '12px 14px', border: '1px solid #ede8e0', borderRadius: 2, fontSize: 14, outline: 'none', fontFamily: "'DM Sans', sans-serif", boxSizing: 'border-box', background: '#fdfaf6' }} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ fontSize: 11, letterSpacing: '0.1em', color: '#888', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Phone</label>
                    <input value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      placeholder="+20 xxx xxx xxxx"
                      style={{ width: '100%', padding: '12px 14px', border: '1px solid #ede8e0', borderRadius: 2, fontSize: 14, outline: 'none', fontFamily: "'DM Sans', sans-serif", boxSizing: 'border-box', background: '#fdfaf6' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: 11, letterSpacing: '0.1em', color: '#888', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Company / Business</label>
                    <input value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                      placeholder="Your company or idea"
                      style={{ width: '100%', padding: '12px 14px', border: '1px solid #ede8e0', borderRadius: 2, fontSize: 14, outline: 'none', fontFamily: "'DM Sans', sans-serif", boxSizing: 'border-box', background: '#fdfaf6' }} />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: 11, letterSpacing: '0.1em', color: '#888', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Your Role *</label>
                  <select required value={form.role} onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
                    style={{ width: '100%', padding: '12px 14px', border: '1px solid #ede8e0', borderRadius: 2, fontSize: 14, outline: 'none', fontFamily: "'DM Sans', sans-serif", background: '#fdfaf6', color: form.role ? '#1a1a1a' : '#aaa' }}>
                    <option value="">Select your role</option>
                    {roles.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: 11, letterSpacing: '0.1em', color: '#888', textTransform: 'uppercase', display: 'block', marginBottom: 10 }}>Interests (select all that apply)</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {interestOptions.map(interest => (
                      <button key={interest} type="button" onClick={() => toggle(interest)}
                        style={{ padding: '8px 14px', borderRadius: 2, fontSize: 12, letterSpacing: '0.06em', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", fontWeight: 400, transition: 'all 0.2s', border: form.interests.includes(interest) ? '1px solid #1a8a7a' : '1px solid #ede8e0', background: form.interests.includes(interest) ? '#e8f6f4' : '#fdfaf6', color: form.interests.includes(interest) ? '#1a8a7a' : '#888' }}>
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: 11, letterSpacing: '0.1em', color: '#888', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Tell us about your project or idea</label>
                  <textarea rows={3} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Optional — share what you're working on"
                    style={{ width: '100%', padding: '12px 14px', border: '1px solid #ede8e0', borderRadius: 2, fontSize: 14, outline: 'none', fontFamily: "'DM Sans', sans-serif", resize: 'vertical', boxSizing: 'border-box', background: '#fdfaf6' }} />
                </div>
                {error && <div style={{ padding: '12px 16px', background: '#fdf0ee', color: '#e06050', fontSize: 13, borderRadius: 2 }}>{error}</div>}
                <button type="submit" disabled={loading}
                  style={{ background: '#1a8a7a', color: '#fff', padding: '16px', border: 'none', borderRadius: 2, fontSize: 13, letterSpacing: '0.12em', cursor: loading ? 'not-allowed' : 'pointer', fontWeight: 500, fontFamily: "'DM Sans', sans-serif", opacity: loading ? 0.7 : 1 }}>
                  {loading ? 'REGISTERING...' : 'GET FREE ACCESS →'}
                </button>
                <p style={{ fontSize: 11, color: '#bbb', textAlign: 'center', lineHeight: 1.6 }}>
                  Your information is private and will never be shared. You can unsubscribe at any time.
                </p>
              </form>
            </div>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 11, letterSpacing: '0.2em', color: '#1a8a7a', textTransform: 'uppercase', fontWeight: 500, marginBottom: 16 }}>JOIN THE COMMUNITY</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, color: '#0f2e2a', marginBottom: 20 }}>
                Register for <em style={{ color: '#e8a020' }}>Free Access</em>
              </h2>
              <p style={{ fontSize: 15, color: '#666', marginBottom: 32, fontWeight: 300, lineHeight: 1.8, maxWidth: 480, margin: '0 auto 32px' }}>
                One registration gets you all 6 guides, free session invitations, and our monthly industry newsletter.
              </p>
              <button onClick={() => setStep('register')}
                style={{ background: '#e8a020', color: '#fff', padding: '16px 44px', borderRadius: 2, fontSize: 14, letterSpacing: '0.12em', border: 'none', cursor: 'pointer', fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>
                REGISTER NOW — IT'S FREE
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0f2e2a', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 400, color: '#fff', marginBottom: 16 }}>
            Ready to Take It Further?
          </h2>
          <p style={{ fontSize: 14, color: '#7ab8b0', marginBottom: 28, fontWeight: 300 }}>Explore our full range of B2B culinary services.</p>
          <a href="/services" style={{ background: '#1a8a7a', color: '#fff', padding: '14px 36px', borderRadius: 2, fontSize: 12, letterSpacing: '0.12em', textDecoration: 'none', fontWeight: 500 }}>VIEW OUR SERVICES</a>
        </div>
      </section>

      <footer style={{ background: '#0a1f1c', color: '#4a8a80', padding: '24px', textAlign: 'center' }}>
        <div style={{ fontSize: 12 }}>© 2026 Kitchen Three LLC — Cairo, Egypt. All rights reserved.</div>
      </footer>
    </div>
  )
}
