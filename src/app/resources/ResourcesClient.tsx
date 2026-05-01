'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURATION — update content here, no logic changes needed
// ─────────────────────────────────────────────────────────────────────────────

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xojkprga'
const STORAGE_KEY = 'kt_resources_registered'

const guides = [
  {
    title: 'Egypt F&B Startup Checklist',
    desc: 'Everything you need to launch a food business in Egypt — licenses, suppliers, kitchen setup, and first 90 days.',
    color: '#1a8a7a',
    bg: '#e8f6f4',
    file: '/guides/egypt-fnb-startup-checklist.pdf',
  },
  {
    title: 'How to Write a Menu That Sells',
    desc: 'Menu engineering principles used by top restaurants — pricing psychology, layout, and item positioning.',
    color: '#e8a020',
    bg: '#fdf4e3',
    file: '/guides/menu-engineering-guide.pdf',
  },
  {
    title: 'HACCP Made Simple',
    desc: 'A plain-language guide to HACCP compliance for small and medium food businesses in Egypt.',
    color: '#e06050',
    bg: '#fdf0ee',
    file: '/guides/haccp-made-simple.pdf',
  },
  {
    title: 'The Cloud Kitchen Playbook',
    desc: 'How to launch and operate a profitable cloud kitchen — from equipment to delivery platform integration.',
    color: '#1a8a7a',
    bg: '#e8f6f4',
    file: '/guides/cloud-kitchen-playbook.pdf',
  },
  {
    title: 'Food Brand Identity Guide',
    desc: 'Build a compelling food brand from scratch — naming, visual identity, tone of voice, and launch strategy.',
    color: '#e8a020',
    bg: '#fdf4e3',
    file: '/guides/food-brand-identity-guide.pdf',
  },
  {
    title: 'Culinary Entrepreneur Roadmap',
    desc: 'A step-by-step roadmap for aspiring food entrepreneurs — from idea validation to first paying customer.',
    color: '#e06050',
    bg: '#fdf0ee',
    file: '/guides/culinary-entrepreneur-roadmap.pdf',
  },
]

const ageRanges = ['Under 25', '25–34', '35–44', '45–54', '55+']

const intentOptions = [
  "I'm planning to open an F&B business",
  'I already operate one and want to grow it',
  "I'm an investor evaluating F&B opportunities",
  "I'm a hospitality / culinary professional",
  "I'm a student or recent graduate",
  'General interest / industry curiosity',
]

const trustClients = ['Nestlé Egypt', 'AUC', 'Norwegian Embassy', 'Sea Queen Fleet', 'Prime Holding', 'Maggi']

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function ResourcesClient() {
  const [step, setStep] = useState<'landing' | 'register' | 'success'>('landing')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '+20 ',
    age_range: '',
    intent: '',
    newsletter: false,
  })

  // Returning registered visitors skip the form and see unlocked guides
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage.getItem(STORAGE_KEY) === 'true') {
      setStep('success')
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New Resources Registration — ${form.full_name}`,
          'Full Name': form.full_name,
          Email: form.email,
          Phone: form.phone,
          'Age Range': form.age_range,
          Intent: form.intent,
          'Newsletter Opt-in': form.newsletter ? 'YES' : 'No',
          Source: 'Resources page — kitchenthree.co/resources',
        }),
      })
      if (!res.ok) throw new Error('Submission failed')
      window.localStorage.setItem(STORAGE_KEY, 'true')
      setStep('success')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {
      setError('Something went wrong. Please try again or email us directly at kf@kitchenthree.co.')
    } finally {
      setLoading(false)
    }
  }

  const scrollToForm = () => {
    setStep('register')
    setTimeout(() => {
      document.getElementById('register')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  const isRegistered = step === 'success'

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: '#fdfaf6', color: '#1a1a1a' }}>
      <Nav />

      {!isRegistered ? (
        <>
          {/* ═══════════════════════════════════════════════════════════════════
              PRE-SIGNUP VIEW
              ═══════════════════════════════════════════════════════════════════ */}

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
              <button onClick={scrollToForm}
                style={{ background: '#e8a020', color: '#fff', padding: '16px 44px', borderRadius: 2, fontSize: 14, letterSpacing: '0.12em', border: 'none', cursor: 'pointer', fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>
                GET FREE ACCESS
              </button>
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
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 64 }}>
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

              {/* LOCKED GUIDES GRID */}
              <div style={{ textAlign: 'center', marginBottom: 40 }}>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 400, color: '#0f2e2a' }}>
                  Six <em style={{ color: '#e8a020' }}>Free Guides</em> Inside
                </h2>
                <p style={{ fontSize: 14, color: '#999', marginTop: 12, fontWeight: 300 }}>Register below to unlock all six instantly.</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                {guides.map(g => (
                  <div key={g.title} style={{ background: '#fdfaf6', border: '1px solid #ede8e0', borderRadius: 4, padding: '28px 24px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: 4, height: '100%', background: g.color }} />
                    <div style={{ position: 'absolute', top: 16, right: 16, fontSize: 14, color: '#bbb' }}>🔒</div>
                    <div style={{ paddingLeft: 12 }}>
                      <div style={{ fontSize: 10, color: g.color, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10, fontWeight: 500 }}>FREE PDF GUIDE</div>
                      <h3 style={{ fontSize: 16, fontWeight: 500, color: '#0f2e2a', marginBottom: 10, lineHeight: 1.4 }}>{g.title}</h3>
                      <p style={{ fontSize: 13, color: '#777', lineHeight: 1.7, fontWeight: 300, marginBottom: 16 }}>{g.desc}</p>
                      <button onClick={scrollToForm}
                        style={{ fontSize: 11, color: g.color, letterSpacing: '0.1em', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 500, padding: 0, fontFamily: "'DM Sans', sans-serif" }}>
                        REGISTER TO UNLOCK →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* TRUST STRIP */}
          <section style={{ padding: '40px 24px', background: '#fdfaf6', borderBottom: '1px solid #ede8e0' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
              <div style={{ fontSize: 10, letterSpacing: '0.18em', color: '#999', textTransform: 'uppercase', fontWeight: 500, marginBottom: 20 }}>TRUSTED BY TEAMS AT</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '28px 48px', alignItems: 'center' }}>
                {trustClients.map(c => (
                  <div key={c} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: '#0f2e2a', fontWeight: 400, letterSpacing: '0.04em', opacity: 0.75 }}>{c}</div>
                ))}
              </div>
            </div>
          </section>

          {/* REGISTRATION FORM */}
          <section id="register" style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #e8f6f4, #fdfaf6)' }}>
            <div style={{ maxWidth: 680, margin: '0 auto' }}>
              <div style={{ background: '#fff', borderRadius: 4, border: '1px solid #ede8e0', padding: '48px', boxShadow: '0 8px 40px rgba(26,138,122,0.08)' }}>
                <div style={{ textAlign: 'center', marginBottom: 40 }}>
                  <div style={{ fontSize: 11, letterSpacing: '0.2em', color: '#e8a020', textTransform: 'uppercase', fontWeight: 500, marginBottom: 12 }}>FREE ACCESS</div>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 400, color: '#0f2e2a', marginBottom: 8 }}>Join the Foodie Community</h2>
                  <p style={{ fontSize: 14, color: '#999', fontWeight: 300 }}>Register once — access everything for free</p>
                </div>
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16 }}>
                  {/* Name + Email row */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
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

                  {/* Phone + Age row */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                    <div>
                      <label style={{ fontSize: 11, letterSpacing: '0.1em', color: '#888', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Phone *</label>
                      <input required type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        placeholder="+20 xxx xxx xxxx"
                        style={{ width: '100%', padding: '12px 14px', border: '1px solid #ede8e0', borderRadius: 2, fontSize: 14, outline: 'none', fontFamily: "'DM Sans', sans-serif", boxSizing: 'border-box', background: '#fdfaf6' }} />
                    </div>
                    <div>
                      <label style={{ fontSize: 11, letterSpacing: '0.1em', color: '#888', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Age Range *</label>
                      <select required value={form.age_range} onChange={e => setForm(f => ({ ...f, age_range: e.target.value }))}
                        style={{ width: '100%', padding: '12px 14px', border: '1px solid #ede8e0', borderRadius: 2, fontSize: 14, outline: 'none', fontFamily: "'DM Sans', sans-serif", background: '#fdfaf6', color: form.age_range ? '#1a1a1a' : '#aaa', boxSizing: 'border-box' }}>
                        <option value="">Select age range</option>
                        {ageRanges.map(r => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Intent */}
                  <div>
                    <label style={{ fontSize: 11, letterSpacing: '0.1em', color: '#888', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Why are you signing up? *</label>
                    <select required value={form.intent} onChange={e => setForm(f => ({ ...f, intent: e.target.value }))}
                      style={{ width: '100%', padding: '12px 14px', border: '1px solid #ede8e0', borderRadius: 2, fontSize: 14, outline: 'none', fontFamily: "'DM Sans', sans-serif", background: '#fdfaf6', color: form.intent ? '#1a1a1a' : '#aaa', boxSizing: 'border-box' }}>
                      <option value="">Select your situation</option>
                      {intentOptions.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>

                  {/* Newsletter opt-in */}
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '14px 16px', background: '#fdfaf6', border: '1px solid #ede8e0', borderRadius: 2, cursor: 'pointer' }}>
                    <input type="checkbox" checked={form.newsletter} onChange={e => setForm(f => ({ ...f, newsletter: e.target.checked }))}
                      style={{ marginTop: 3, accentColor: '#1a8a7a', cursor: 'pointer' }} />
                    <span style={{ fontSize: 13, color: '#555', lineHeight: 1.6, fontWeight: 300 }}>
                      Send me the monthly Kitchen Three newsletter — Egypt F&B insights, market opportunities, and event invitations. <span style={{ color: '#999' }}>One email a month, unsubscribe anytime.</span>
                    </span>
                  </label>

                  {error && <div style={{ padding: '12px 16px', background: '#fdf0ee', color: '#e06050', fontSize: 13, borderRadius: 2 }}>{error}</div>}

                  <button type="submit" disabled={loading}
                    style={{ background: '#1a8a7a', color: '#fff', padding: '16px', border: 'none', borderRadius: 2, fontSize: 13, letterSpacing: '0.12em', cursor: loading ? 'not-allowed' : 'pointer', fontWeight: 500, fontFamily: "'DM Sans', sans-serif", opacity: loading ? 0.7 : 1 }}>
                    {loading ? 'REGISTERING…' : 'GET FREE ACCESS →'}
                  </button>
                  <p style={{ fontSize: 11, color: '#bbb', textAlign: 'center', lineHeight: 1.6 }}>
                    Your information is private and will never be shared. You can unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* ═══════════════════════════════════════════════════════════════════
              POST-SIGNUP VIEW (unlocked)
              ═══════════════════════════════════════════════════════════════════ */}

          {/* WELCOME BANNER */}
          <section style={{ background: 'linear-gradient(135deg, #e8f6f4 0%, #fdfaf6 50%, #fdf4e3 100%)', padding: '80px 24px 64px', borderBottom: '1px solid #ede8e0' }}>
            <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: 28, color: '#1a8a7a', boxShadow: '0 4px 20px rgba(26,138,122,0.15)' }}>✓</div>
              <div style={{ fontSize: 11, letterSpacing: '0.2em', color: '#1a8a7a', textTransform: 'uppercase', fontWeight: 500, marginBottom: 16 }}>WELCOME TO THE COMMUNITY</div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: 400, color: '#0f2e2a', marginBottom: 20, lineHeight: 1.15 }}>
                You're <em style={{ color: '#1a8a7a' }}>in.</em>
              </h1>
              <p style={{ fontSize: 17, color: '#666', maxWidth: 580, margin: '0 auto', lineHeight: 1.9, fontWeight: 300 }}>
                All six guides are unlocked below. A confirmation email is on its way with everything you need, plus your first session invitation within the next seven days.
              </p>
            </div>
          </section>

          {/* UNLOCKED GUIDES */}
          <section style={{ padding: '80px 24px', background: '#fff', borderBottom: '1px solid #ede8e0' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 48 }}>
                <div style={{ fontSize: 11, letterSpacing: '0.2em', color: '#e8a020', textTransform: 'uppercase', fontWeight: 500, marginBottom: 12 }}>YOUR GUIDES</div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, color: '#0f2e2a' }}>
                  Download <em style={{ color: '#e8a020' }}>Anytime</em>
                </h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                {guides.map(g => (
                  <div key={g.title} style={{ background: '#fdfaf6', border: '1px solid #ede8e0', borderRadius: 4, padding: '28px 24px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: 4, height: '100%', background: g.color }} />
                    <div style={{ paddingLeft: 12 }}>
                      <div style={{ fontSize: 10, color: g.color, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10, fontWeight: 500 }}>UNLOCKED PDF</div>
                      <h3 style={{ fontSize: 16, fontWeight: 500, color: '#0f2e2a', marginBottom: 10, lineHeight: 1.4 }}>{g.title}</h3>
                      <p style={{ fontSize: 13, color: '#777', lineHeight: 1.7, fontWeight: 300, marginBottom: 18 }}>{g.desc}</p>
                      <a href={g.file} download
                        style={{ display: 'inline-block', background: g.color, color: '#fff', padding: '10px 18px', fontSize: 11, letterSpacing: '0.12em', borderRadius: 2, textDecoration: 'none', fontWeight: 500 }}>
                        DOWNLOAD PDF →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WHAT'S COMING NEXT */}
          <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #fdf4e3 0%, #fdfaf6 100%)', borderBottom: '1px solid #ede8e0' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 48 }}>
                <div style={{ fontSize: 11, letterSpacing: '0.2em', color: '#1a8a7a', textTransform: 'uppercase', fontWeight: 500, marginBottom: 12 }}>WHAT'S COMING NEXT</div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 400, color: '#0f2e2a' }}>
                  Stay <em style={{ color: '#1a8a7a' }}>Connected</em>
                </h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
                <div style={{ background: '#fff', borderRadius: 4, padding: '32px 28px', border: '1px solid #ede8e0' }}>
                  <div style={{ fontSize: 28, color: '#1a8a7a', marginBottom: 16 }}>◎</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, color: '#0f2e2a', marginBottom: 10 }}>Your First Session</h3>
                  <p style={{ fontSize: 13, color: '#666', lineHeight: 1.8, fontWeight: 300 }}>An invitation to our next free industry session lands in your inbox within seven days.</p>
                </div>
                <div style={{ background: '#fff', borderRadius: 4, padding: '32px 28px', border: '1px solid #ede8e0' }}>
                  <div style={{ fontSize: 28, color: '#e8a020', marginBottom: 16 }}>◈</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, color: '#0f2e2a', marginBottom: 10 }}>Monthly Newsletter</h3>
                  <p style={{ fontSize: 13, color: '#666', lineHeight: 1.8, fontWeight: 300 }}>If you opted in, the next edition arrives on the first of the month — Egypt F&B insights and event invitations.</p>
                </div>
                <div style={{ background: '#fff', borderRadius: 4, padding: '32px 28px', border: '1px solid #ede8e0' }}>
                  <div style={{ fontSize: 28, color: '#e06050', marginBottom: 16 }}>◉</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, color: '#0f2e2a', marginBottom: 10 }}>Skip Ahead</h3>
                  <p style={{ fontSize: 13, color: '#666', lineHeight: 1.8, fontWeight: 300, marginBottom: 14 }}>Want to talk to us directly? Book a free 30-minute discovery call about your project.</p>
                  <a href="https://wa.me/201222186669" target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: 11, color: '#e06050', letterSpacing: '0.12em', textDecoration: 'none', fontWeight: 500 }}>
                    BOOK A CALL →
                  </a>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* SHARED FOOTER CTA */}
      <section style={{ background: '#0f2e2a', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 400, color: '#fff', marginBottom: 16 }}>
            Ready to Take It Further?
          </h2>
          <p style={{ fontSize: 14, color: '#7ab8b0', marginBottom: 28, fontWeight: 300 }}>Explore our full range of B2B culinary services.</p>
          <a href="/services" style={{ background: '#1a8a7a', color: '#fff', padding: '14px 36px', borderRadius: 2, fontSize: 12, letterSpacing: '0.12em', textDecoration: 'none', fontWeight: 500 }}>VIEW OUR SERVICES</a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
