'use client'
import { useState } from 'react'

const flame = '#E8540A'
const ember = '#C73A05'
const gold = '#D4830A'
const bg = '#FAF7F2'
const bg2 = '#F2EDE4'
const bg3 = '#EDE6D9'
const dark = '#1A1208'
const muted = '#9A8870'
const border = 'rgba(200,175,140,0.35)'

const pageOptions = ['Home', 'About', 'Services', 'Portfolio / Work', 'Blog', 'Contact', 'Online Shop', 'Booking / Appointments']
const featureOptions = ['Contact Form', 'WhatsApp Button', 'Instagram Feed', 'Photo Gallery', 'Online Payment', 'Arabic / English']
const vibeOptions = ['Minimal & Clean', 'Bold & Modern', 'Warm & Friendly', 'Luxury & Premium', 'Playful & Creative', 'Corporate & Professional']
const budgetOptions = ['Below 10,000 EGP', '10,000 – 15,000 EGP', '15,000 – 20,000 EGP', '20,000 – 25,000 EGP', '25,000 – 30,000 EGP', 'Above 30,000 EGP', 'Not sure yet — advise me']
const timelineOptions = ['As soon as possible', 'Within 2 weeks', 'Within 1 month', 'Flexible — quality first']

const KFLogo = ({ size = 40 }: { size?: number }) => (
  <div style={{
    width: size, height: size, background: '#fff', border: `${Math.max(2, Math.round(size * 0.06))}px solid ${dark}`,
    borderRadius: size * 0.15, display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: 'Georgia, Garamond, serif', fontSize: size * 0.42, fontWeight: 700,
    color: dark, letterSpacing: 1, flexShrink: 0
  }}>KF</div>
)

type ModalScreen = 'gate' | 'brief-choice' | 'questionnaire' | 'q-success'

export default function KFDigitalStudio() {
  const [modalOpen, setModalOpen] = useState(false)
  const [screen, setScreen] = useState<ModalScreen>('gate')
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({
    fullName: '', businessName: '', industry: '', email: '', phone: '',
    mainGoal: '', audience: '', hasWebsite: 'No, this is a brand new website',
    existingUrl: '', pages: [] as string[], features: [] as string[],
    vibe: '', websitesLove: '', competitors: '', brandColors: '',
    budget: '', timeline: '', extra: ''
  })

  const toggleArr = (key: 'pages' | 'features', val: string) =>
    setForm(f => ({ ...f, [key]: f[key].includes(val) ? f[key].filter(v => v !== val) : [...f[key], val] }))

  const openModal = () => {
    setModalOpen(true)
    setScreen('gate')
    setStep(1)
    setSubmitted(false)
    setMenuOpen(false)
  }
  const closeModal = () => setModalOpen(false)

  const handleQSubmit = async () => {
    setSubmitting(true)
    try {
      await fetch('https://formspree.io/f/xojkprga', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'KF Digital Studio — Questionnaire' })
      })
    } catch (e) {}
    setSubmitting(false)
    setScreen('q-success')
  }

  const whatsappURL = `https://wa.me/201222186669?text=${encodeURIComponent('Hi KF Digital Studio, I have a project brief I would like to share with you.')}`
  const emailURL = `mailto:kitchenthreecairo@gmail.com?subject=${encodeURIComponent('KF Digital Studio — Project Brief')}&body=${encodeURIComponent('Hi KF Digital Studio,\n\nI have a project brief I would like to share with you.\n\nMy name is:\nMy phone number is:\n\nI have attached my brief to this email.')}`

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '11px 14px', border: `1px solid ${border}`,
    borderRadius: 2, fontSize: 14, outline: 'none', fontFamily: 'inherit',
    background: bg, color: dark, boxSizing: 'border-box'
  }

  const labelStyle: React.CSSProperties = {
    fontSize: 11, letterSpacing: '0.1em', color: muted,
    textTransform: 'uppercase', display: 'block', marginBottom: 6
  }

  const chipStyle = (active: boolean): React.CSSProperties => ({
    padding: '8px 14px', borderRadius: 2, fontSize: 12, cursor: 'pointer',
    fontFamily: 'inherit', fontWeight: 400,
    border: active ? `1px solid ${flame}` : `1px solid ${border}`,
    background: active ? `rgba(232,84,10,0.08)` : bg,
    color: active ? flame : muted, transition: 'all 0.2s'
  })

  const gateCardStyle: React.CSSProperties = {
    border: `1px solid ${border}`, borderRadius: 4, padding: '28px 20px',
    cursor: 'pointer', textAlign: 'center', background: bg, transition: 'all 0.2s'
  }

  const steps = ['About You', 'Your Goals', 'Pages & Features', 'Style & Feel', 'Budget & Timeline']
  const navLinks = [['#how', 'Process'], ['#services', 'Services'], ['#why', 'Why Us']]

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: bg, color: dark, overflowX: 'hidden' }}>

      {/* NAV */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(250,247,242,0.96)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${border}` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: muted, textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', borderRight: `1px solid ${border}`, paddingRight: 16, whiteSpace: 'nowrap' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = flame}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = muted}>
              ← Kitchen Three
            </a>
            <a href="/partners/kf-digital-studio" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
              <KFLogo size={36} />
              <span className="kf-brand-name" style={{ fontFamily: 'Georgia, serif', fontSize: 14, fontWeight: 700, color: dark, letterSpacing: 2 }}>KF DIGITAL STUDIO</span>
            </a>
          </div>
          <div className="kf-desktop-nav" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            {navLinks.map(([href, label]) => (
              <a key={label} href={href} style={{ color: muted, textDecoration: 'none', fontSize: 12, letterSpacing: 1, textTransform: 'uppercase', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = flame}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = muted}>
                {label}
              </a>
            ))}
            <button onClick={openModal} style={{ background: flame, color: '#fff', border: 'none', padding: '9px 20px', fontSize: 12, letterSpacing: 1, textTransform: 'uppercase', cursor: 'pointer', borderRadius: 2, fontFamily: 'inherit', whiteSpace: 'nowrap' }}>
              Start a Project
            </button>
          </div>
          <button className="kf-hamburger" onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4, flexDirection: 'column', gap: 5 }}>
            <span style={{ display: 'block', width: 22, height: 2, background: menuOpen ? flame : dark, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: menuOpen ? flame : dark, transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 22, height: 2, background: menuOpen ? flame : dark, transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
        {menuOpen && (
          <div style={{ borderTop: `1px solid ${border}`, background: bg, padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 0 }}>
            {navLinks.map(([href, label]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}
                style={{ padding: '14px 0', fontSize: 13, color: dark, textDecoration: 'none', letterSpacing: 1, textTransform: 'uppercase', borderBottom: `1px solid ${border}` }}>
                {label}
              </a>
            ))}
            <button onClick={openModal} style={{ marginTop: 16, background: flame, color: '#fff', border: 'none', padding: '14px', fontSize: 13, letterSpacing: 1, textTransform: 'uppercase', cursor: 'pointer', borderRadius: 2, fontFamily: 'inherit', width: '100%' }}>
              Start a Project
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section style={{ minHeight: '90vh', padding: '100px 24px 80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: `linear-gradient(180deg, ${bg} 0%, ${bg2} 100%)`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 60% 50% at 50% 90%, rgba(232,84,10,0.07) 0%, transparent 70%)`, pointerEvents: 'none' }} />
        <div style={{ display: 'inline-block', border: `1px solid rgba(232,84,10,0.35)`, color: flame, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', padding: '6px 16px', borderRadius: 20, marginBottom: 24 }}>
          AI-Powered Digital Studio
        </div>
        <KFLogo size={64} />
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(48px, 10vw, 120px)', lineHeight: 0.92, letterSpacing: 4, color: dark, marginBottom: 24, marginTop: 24, fontWeight: 700 }}>
          YOUR BRAND<br />
          <span style={{ background: `linear-gradient(135deg, ${flame} 0%, ${gold} 60%, ${ember} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>RISES HERE</span>
        </h1>
        <p style={{ fontSize: 17, color: muted, maxWidth: 500, lineHeight: 1.8, marginBottom: 40, fontWeight: 300 }}>
          We start with the right questions. We deliver with precision. Turning your vision into a digital presence that commands attention.
        </p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
          <button onClick={openModal} style={{ background: `linear-gradient(135deg, ${flame}, ${ember})`, color: '#fff', border: 'none', padding: '14px 32px', fontSize: 13, letterSpacing: 1, textTransform: 'uppercase', cursor: 'pointer', borderRadius: 2, fontFamily: 'inherit', fontWeight: 500 }}>
            Begin the Journey
          </button>
          <a href="#services" style={{ background: 'transparent', color: dark, border: `1px solid rgba(26,18,8,0.2)`, padding: '14px 32px', fontSize: 13, letterSpacing: 1, textTransform: 'uppercase', borderRadius: 2, fontFamily: 'inherit', textDecoration: 'none' }}>
            See Our Services
          </a>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section id="how" style={{ padding: '80px 24px', background: bg }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', color: flame, marginBottom: 8 }}>The Process</div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 5vw, 56px)', letterSpacing: 3, color: dark, fontWeight: 700 }}>HOW WE WORK</h2>
          </div>
          <div className="kf-steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: border, border: `1px solid ${border}` }}>
            {[
              { num: '01', title: 'Discovery Brief', desc: 'You complete our intelligent intake questionnaire — crafted to surface your goals, audience, and vision with precision.' },
              { num: '02', title: 'The Proposal', desc: "We come back with a clear, tailored proposal — what we'll build, who we'll bring in, timeline, and investment." },
              { num: '03', title: 'Build & Launch', desc: 'AI-powered execution meets professional expertise. Your digital presence goes live — fast, polished, and ready to grow.' },
            ].map(s => (
              <div key={s.num} style={{ background: bg, padding: '32px 24px' }}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: 56, color: 'rgba(232,84,10,0.12)', lineHeight: 1, marginBottom: 10, fontWeight: 700 }}>{s.num}</div>
                <h3 style={{ fontSize: 13, fontWeight: 500, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10, color: dark }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: muted, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: '80px 24px', background: bg2 }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', color: flame, marginBottom: 8 }}>What We Offer</div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 5vw, 56px)', letterSpacing: 3, color: dark, fontWeight: 700 }}>SERVICES</h2>
          </div>
          <div className="kf-services" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: border }}>
            {[
              { icon: '🌐', title: 'Website Creation', desc: 'Landing pages to full business sites. Fast, mobile-first, built to convert.', tag: 'Core Service' },
              { icon: '🎨', title: 'Logo & Branding', desc: 'A brand identity that speaks before you do. Crafted by top designers.', tag: 'Add-on' },
              { icon: '📣', title: 'Digital Marketing', desc: 'Social strategy, content, and campaigns — managed by specialists.', tag: 'Add-on' },
              { icon: '⚡', title: 'AI-Powered Speed', desc: 'Latest AI tools cut delivery time in half — without cutting quality.', tag: 'Our Edge' },
            ].map(s => (
              <div key={s.title} style={{ background: bg, padding: '32px 24px' }}>
                <div style={{ width: 38, height: 38, border: `1px solid rgba(232,84,10,0.25)`, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, fontSize: 18 }}>{s.icon}</div>
                <h3 style={{ fontSize: 13, fontWeight: 500, marginBottom: 8, color: dark }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: muted, lineHeight: 1.65, marginBottom: 12 }}>{s.desc}</p>
                <span style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: flame, borderBottom: `1px solid rgba(232,84,10,0.3)`, paddingBottom: 2 }}>{s.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY KF */}
      <section id="why" style={{ padding: '80px 24px', background: bg }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', color: flame, marginBottom: 8 }}>Why KF</div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 5vw, 56px)', letterSpacing: 3, color: dark, fontWeight: 700 }}>WE DO IT DIFFERENTLY</h2>
          </div>
          <div className="kf-why" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                { title: 'Discovery-first approach', desc: 'We never build before we understand. Every decision is intentional.' },
                { title: 'AI-accelerated delivery', desc: 'Faster turnarounds powered by the best AI tools available today.' },
                { title: 'Curated professional network', desc: 'Need a photographer or copywriter? We bring in the right people.' },
                { title: 'Transparent proposals', desc: "No surprises. You know exactly what you're getting and what it costs." },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 6, height: 6, background: flame, borderRadius: '50%', flexShrink: 0, marginTop: 7 }} />
                  <div>
                    <h4 style={{ fontSize: 14, fontWeight: 500, marginBottom: 4, color: dark }}>{item.title}</h4>
                    <p style={{ fontSize: 13, color: muted, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: bg2, border: `1px solid ${border}`, borderRadius: 4, padding: '32px', textAlign: 'center' }}>
              {[{ num: '48H', label: 'Proposal turnaround' }, { num: '7', label: 'Days avg. delivery' }, { num: '100%', label: 'Tailored to you' }].map(s => (
                <div key={s.label} style={{ marginBottom: 24 }}>
                  <div style={{ fontFamily: 'Georgia, serif', fontSize: 56, fontWeight: 700, background: `linear-gradient(135deg, ${flame}, ${gold})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: 11, color: muted, letterSpacing: 2, textTransform: 'uppercase', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: 'center', padding: '80px 24px', background: bg3, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 55% 70% at 50% 50%, rgba(232,84,10,0.06) 0%, transparent 70%)`, pointerEvents: 'none' }} />
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(36px, 6vw, 80px)', fontWeight: 700, letterSpacing: 3, marginBottom: 16, color: dark }}>READY TO RISE?</h2>
        <p style={{ color: muted, fontSize: 16, maxWidth: 460, margin: '0 auto 32px', lineHeight: 1.7 }}>Start with our discovery brief and receive a tailored proposal within 48 hours. No commitment, no fluff.</p>
        <button onClick={openModal} style={{ background: `linear-gradient(135deg, ${flame}, ${ember})`, color: '#fff', border: 'none', padding: '16px 40px', fontSize: 13, letterSpacing: 1, textTransform: 'uppercase', cursor: 'pointer', borderRadius: 2, fontFamily: 'inherit', fontWeight: 500 }}>
          Start Your Discovery Brief
        </button>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${border}`, padding: '24px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, background: bg }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <KFLogo size={32} />
          <span style={{ fontFamily: 'Georgia, serif', fontSize: 14, fontWeight: 700, color: dark, letterSpacing: 2 }}>KF DIGITAL STUDIO</span>
        </div>
        <div style={{ fontSize: 12, color: muted }}>Crafted with AI. Delivered with intention. © 2026 KF</div>
        <div style={{ fontSize: 12, color: muted }}>
          A <a href="/" style={{ color: flame, textDecoration: 'none', fontWeight: 500 }}>Kitchen Three</a> Partner
        </div>
      </footer>

      {/* MODAL */}
      {modalOpen && (
        <div onClick={e => { if (e.target === e.currentTarget) closeModal() }}
          style={{ position: 'fixed', inset: 0, background: 'rgba(26,18,8,0.6)', zIndex: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16, backdropFilter: 'blur(4px)' }}>
          <div style={{ background: bg, borderRadius: 6, width: '100%', maxWidth: 600, maxHeight: '90vh', overflowY: 'auto', position: 'relative', boxShadow: '0 24px 60px rgba(26,18,8,0.25)' }}>

            {/* Modal Header */}
            <div style={{ padding: '20px 24px', borderBottom: `1px solid ${border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: bg, zIndex: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <KFLogo size={28} />
                <span style={{ fontFamily: 'Georgia, serif', fontSize: 15, fontWeight: 700, letterSpacing: 2, color: dark }}>KF Discovery Brief</span>
              </div>
              <button onClick={closeModal} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 20, color: muted, lineHeight: 1 }}>✕</button>
            </div>

            {/* SCREEN 1 — GATE */}
            {screen === 'gate' && (
              <div style={{ padding: '40px 32px', textAlign: 'center' }}>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 24, fontWeight: 700, color: dark, marginBottom: 8 }}>Let's Get Started</h3>
                <p style={{ fontSize: 14, color: muted, lineHeight: 1.7, maxWidth: 400, margin: '0 auto 32px' }}>
                  Do you already have a project brief ready to share, or would you like to fill in our discovery questionnaire?
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div onClick={() => setScreen('brief-choice')}
                    style={gateCardStyle}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = flame; (e.currentTarget as HTMLElement).style.background = `rgba(232,84,10,0.04)` }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = border; (e.currentTarget as HTMLElement).style.background = bg }}>
                    <div style={{ fontSize: 36, marginBottom: 12 }}>📎</div>
                    <h4 style={{ fontSize: 14, fontWeight: 500, color: dark, marginBottom: 6 }}>I have a brief</h4>
                    <p style={{ fontSize: 12, color: muted, lineHeight: 1.5 }}>Share your existing document and we'll take it from there</p>
                  </div>
                  <div onClick={() => { setScreen('questionnaire'); setStep(1) }}
                    style={gateCardStyle}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = flame; (e.currentTarget as HTMLElement).style.background = `rgba(232,84,10,0.04)` }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = border; (e.currentTarget as HTMLElement).style.background = bg }}>
                    <div style={{ fontSize: 36, marginBottom: 12 }}>📋</div>
                    <h4 style={{ fontSize: 14, fontWeight: 500, color: dark, marginBottom: 6 }}>I need the questionnaire</h4>
                    <p style={{ fontSize: 12, color: muted, lineHeight: 1.5 }}>Answer a few questions so we can understand your project</p>
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 2 — BRIEF SHARING CHOICE */}
            {screen === 'brief-choice' && (
              <div style={{ padding: '40px 32px', textAlign: 'center' }}>
                <button onClick={() => setScreen('gate')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, color: muted, marginBottom: 24, padding: 0, fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 6 }}>
                  ← Back
                </button>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 24, fontWeight: 700, color: dark, marginBottom: 8 }}>How would you like to share your brief?</h3>
                <p style={{ fontSize: 14, color: muted, lineHeight: 1.7, maxWidth: 400, margin: '0 auto 32px' }}>
                  Choose your preferred way to send us your project brief. We'll get back to you within 48 hours.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>

                  {/* WhatsApp */}
                  <a href={whatsappURL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <div style={{ ...gateCardStyle, borderColor: '#25D366' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(37,211,102,0.06)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = bg; (e.currentTarget as HTMLElement).style.transform = 'none' }}>
                      <div style={{ fontSize: 36, marginBottom: 12 }}>
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="#25D366">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </div>
                      <h4 style={{ fontSize: 14, fontWeight: 500, color: dark, marginBottom: 6 }}>Send via WhatsApp</h4>
                      <p style={{ fontSize: 12, color: muted, lineHeight: 1.5 }}>Opens WhatsApp — attach your brief and send directly</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a href={emailURL} style={{ textDecoration: 'none' }}>
                    <div style={{ ...gateCardStyle, borderColor: '#4285F4' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(66,133,244,0.06)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = bg; (e.currentTarget as HTMLElement).style.transform = 'none' }}>
                      <div style={{ fontSize: 36, marginBottom: 12 }}>
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                      </div>
                      <h4 style={{ fontSize: 14, fontWeight: 500, color: dark, marginBottom: 6 }}>Send via Email</h4>
                      <p style={{ fontSize: 12, color: muted, lineHeight: 1.5 }}>Opens your email app — attach and send from Gmail, Outlook, or any client</p>
                    </div>
                  </a>

                </div>
                <p style={{ fontSize: 11, color: muted, marginTop: 24, lineHeight: 1.6 }}>
                  We'll respond within 48 hours with a tailored proposal.
                </p>
              </div>
            )}

            {/* SCREEN 3 — QUESTIONNAIRE */}
            {screen === 'questionnaire' && !submitted && (
              <>
                <div style={{ padding: '12px 24px', background: bg2, borderBottom: `1px solid ${border}` }}>
                  <div style={{ display: 'flex', gap: 4, marginBottom: 6 }}>
                    {steps.map((_, i) => (
                      <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i < step - 1 ? flame : i === step - 1 ? gold : border, transition: 'background 0.3s' }} />
                    ))}
                  </div>
                  <div style={{ fontSize: 11, color: muted, letterSpacing: 1, textTransform: 'uppercase' }}>Step {step} of {steps.length} — {steps[step - 1]}</div>
                </div>

                <div style={{ padding: '28px 24px' }}>
                  {step === 1 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 22, fontWeight: 700, color: dark, marginBottom: 4 }}>About You</h3>
                      <p style={{ fontSize: 13, color: muted, marginBottom: 8 }}>Let's start with the basics — who you are and what you do.</p>
                      <div className="kf-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                        <div><label style={labelStyle}>Full Name *</label><input style={inputStyle} placeholder="Your full name" value={form.fullName} onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))} /></div>
                        <div><label style={labelStyle}>Business Name *</label><input style={inputStyle} placeholder="Your business" value={form.businessName} onChange={e => setForm(f => ({ ...f, businessName: e.target.value }))} /></div>
                      </div>
                      <div><label style={labelStyle}>Industry / Field *</label><input style={inputStyle} placeholder="e.g. Restaurant, Retail, Consulting" value={form.industry} onChange={e => setForm(f => ({ ...f, industry: e.target.value }))} /></div>
                      <div className="kf-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                        <div><label style={labelStyle}>Email *</label><input style={inputStyle} type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} /></div>
                        <div><label style={labelStyle}>Phone / WhatsApp</label><input style={inputStyle} placeholder="+20 xxx xxx xxxx" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} /></div>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 22, fontWeight: 700, color: dark, marginBottom: 4 }}>Your Goals</h3>
                      <p style={{ fontSize: 13, color: muted, marginBottom: 8 }}>What do you want your website to achieve?</p>
                      <div><label style={labelStyle}>Main Goal *</label><input style={inputStyle} placeholder="e.g. Get more clients, sell products online..." value={form.mainGoal} onChange={e => setForm(f => ({ ...f, mainGoal: e.target.value }))} /></div>
                      <div><label style={labelStyle}>Target Audience *</label><input style={inputStyle} placeholder="Who are your customers?" value={form.audience} onChange={e => setForm(f => ({ ...f, audience: e.target.value }))} /></div>
                      <div>
                        <label style={labelStyle}>Do you currently have a website?</label>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                          {['No, this is a brand new website', 'Yes — I want a full redesign', 'Yes — I want to add to it'].map(opt => (
                            <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: dark, cursor: 'pointer' }}>
                              <input type="radio" name="hasWebsite" value={opt} checked={form.hasWebsite === opt} onChange={() => setForm(f => ({ ...f, hasWebsite: opt }))} style={{ accentColor: flame }} />
                              {opt}
                            </label>
                          ))}
                        </div>
                      </div>
                      {form.hasWebsite !== 'No, this is a brand new website' && (
                        <div><label style={labelStyle}>Existing Website URL</label><input style={inputStyle} placeholder="https://..." value={form.existingUrl} onChange={e => setForm(f => ({ ...f, existingUrl: e.target.value }))} /></div>
                      )}
                    </div>
                  )}

                  {step === 3 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                      <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 22, fontWeight: 700, color: dark, marginBottom: 4 }}>Pages & Features</h3>
                      <div>
                        <label style={labelStyle}>Pages Needed</label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                          {pageOptions.map(p => <button key={p} type="button" onClick={() => toggleArr('pages', p)} style={chipStyle(form.pages.includes(p))}>{p}</button>)}
                        </div>
                      </div>
                      <div>
                        <label style={labelStyle}>Special Features</label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                          {featureOptions.map(f => <button key={f} type="button" onClick={() => toggleArr('features', f)} style={chipStyle(form.features.includes(f))}>{f}</button>)}
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 22, fontWeight: 700, color: dark, marginBottom: 4 }}>Style & Feel</h3>
                      <div>
                        <label style={labelStyle}>What vibe should your website have?</label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                          {vibeOptions.map(v => <button key={v} type="button" onClick={() => setForm(f => ({ ...f, vibe: v }))} style={chipStyle(form.vibe === v)}>{v}</button>)}
                        </div>
                      </div>
                      <div><label style={labelStyle}>Websites you love</label><input style={inputStyle} placeholder="Share links or names" value={form.websitesLove} onChange={e => setForm(f => ({ ...f, websitesLove: e.target.value }))} /></div>
                      <div><label style={labelStyle}>Competitor websites</label><input style={inputStyle} placeholder="Who are your competitors online?" value={form.competitors} onChange={e => setForm(f => ({ ...f, competitors: e.target.value }))} /></div>
                      <div><label style={labelStyle}>Brand colors (if any)</label><input style={inputStyle} placeholder="e.g. Navy blue and gold" value={form.brandColors} onChange={e => setForm(f => ({ ...f, brandColors: e.target.value }))} /></div>
                    </div>
                  )}

                  {step === 5 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                      <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 22, fontWeight: 700, color: dark, marginBottom: 4 }}>Budget & Timeline</h3>
                      <div>
                        <label style={labelStyle}>Budget Range (EGP)</label>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                          {budgetOptions.map(b => (
                            <label key={b} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: dark, cursor: 'pointer' }}>
                              <input type="radio" name="budget" value={b} checked={form.budget === b} onChange={() => setForm(f => ({ ...f, budget: b }))} style={{ accentColor: flame }} />
                              {b}
                            </label>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label style={labelStyle}>Ideal Timeline</label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                          {timelineOptions.map(t => <button key={t} type="button" onClick={() => setForm(f => ({ ...f, timeline: t }))} style={chipStyle(form.timeline === t)}>{t}</button>)}
                        </div>
                      </div>
                      <div><label style={labelStyle}>Anything else we should know?</label>
                        <textarea style={{ ...inputStyle, resize: 'vertical' }} rows={3} placeholder="Optional notes..." value={form.extra} onChange={e => setForm(f => ({ ...f, extra: e.target.value }))} />
                      </div>
                    </div>
                  )}
                </div>

                <div style={{ padding: '16px 24px', borderTop: `1px solid ${border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: bg2 }}>
                  <button onClick={() => step === 1 ? setScreen('gate') : setStep(s => s - 1)}
                    style={{ background: 'none', border: `1px solid ${border}`, padding: '10px 20px', fontSize: 13, cursor: 'pointer', borderRadius: 2, fontFamily: 'inherit', color: dark }}>
                    ← Back
                  </button>
                  <span style={{ fontSize: 12, color: muted }}>{step} / {steps.length}</span>
                  {step < steps.length ? (
                    <button onClick={() => setStep(s => s + 1)}
                      style={{ background: flame, color: '#fff', border: 'none', padding: '10px 24px', fontSize: 13, cursor: 'pointer', borderRadius: 2, fontFamily: 'inherit' }}>
                      Next →
                    </button>
                  ) : (
                    <button onClick={handleQSubmit} disabled={submitting}
                      style={{ background: `linear-gradient(135deg, ${flame}, ${ember})`, color: '#fff', border: 'none', padding: '10px 24px', fontSize: 13, cursor: submitting ? 'not-allowed' : 'pointer', borderRadius: 2, fontFamily: 'inherit', opacity: submitting ? 0.7 : 1 }}>
                      {submitting ? 'Sending...' : 'Submit ✓'}
                    </button>
                  )}
                </div>
              </>
            )}

            {/* SCREEN 4 — QUESTIONNAIRE SUCCESS */}
            {screen === 'q-success' && (
              <div style={{ textAlign: 'center', padding: '60px 32px' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🔥</div>
                <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 28, fontWeight: 700, color: dark, marginBottom: 12 }}>Brief Received!</h2>
                <p style={{ fontSize: 15, color: muted, lineHeight: 1.8, marginBottom: 32 }}>Thank you! We've received your answers and will come back with a tailored proposal within 48 hours.</p>
                <button onClick={closeModal} style={{ background: flame, color: '#fff', border: 'none', padding: '12px 28px', fontSize: 13, cursor: 'pointer', borderRadius: 2, fontFamily: 'inherit' }}>
                  Back to Site
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .kf-desktop-nav { display: none !important; }
          .kf-hamburger { display: flex !important; }
          .kf-brand-name { display: none !important; }
          .kf-steps { grid-template-columns: 1fr !important; }
          .kf-services { grid-template-columns: 1fr 1fr !important; }
          .kf-why { grid-template-columns: 1fr !important; gap: 32px !important; }
          .kf-form-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .kf-services { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
