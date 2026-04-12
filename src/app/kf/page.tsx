'use client'
import { useState } from 'react'
import KFNav from './KFNav'
import KFModal from './KFModal'
import { flame, ember, gold, bg, bg2, bg3, dark, muted, border, KFLogo } from './KFConstants'

export default function KFDigitalStudio() {
  const [modalOpen, setModalOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) return
    setFormStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xojkprga', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...formData, _subject: 'KF Digital Studio Enquiry' }),
      })
      if (res.ok) { setFormStatus('sent'); setFormData({ name: '', email: '', phone: '', message: '' }) }
      else setFormStatus('error')
    } catch { setFormStatus('error') }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 16px', fontSize: 14,
    fontFamily: "'DM Sans', system-ui, sans-serif",
    background: bg, border: `1px solid ${border}`, borderRadius: 2,
    color: dark, outline: 'none', boxSizing: 'border-box',
  }

  const hooks = [
    { num: '01', title: 'Production-Grade Platform' },
    { num: '02', title: 'Secure Architecture' },
    { num: '03', title: 'Fully Custom Built' },
    { num: '04', title: 'Enterprise-Level Security' },
  ]

  const whyItems = [
    { num: '01', badge: 'Core Differentiator', title: 'Production-Grade Platform', desc: 'Not a demo. Not a template. A fully operational platform built to perform at scale — the same standard large corporations pay hundreds of thousands for, accessible to founders and growing businesses.' },
    { num: '02', badge: 'Core Differentiator', title: 'Secure Architecture', desc: "Your data and your customers' data is protected from the ground up. We build with security-first architecture, not as an afterthought — because a breach costs more than the project." },
    { num: '03', badge: 'Core Differentiator', title: 'Fully Custom Built', desc: 'Built for your specific business, not a generic solution repurposed to fit. Every decision — architecture, design, functionality — is made for your exact requirements.' },
    { num: '04', badge: 'Core Differentiator', title: 'Enterprise-Level Security', desc: 'The security standard that large corporations mandate — encryption, access controls, audit trails — built into every project regardless of budget. No tiers. No compromises.' },
    { num: '05', badge: null, title: 'Discovery-First Approach', desc: 'We never build before we understand. Every decision is intentional, anchored to your goals and your audience.' },
    { num: '06', badge: null, title: 'AI-Accelerated Delivery', desc: 'Faster turnarounds powered by the best AI tools available — without cutting corners on quality or security.' },
    { num: '07', badge: null, title: 'Transparent Proposals', desc: "No surprises. You know exactly what you're getting and what it costs — before anything is built." },
  ]

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: bg, color: dark, overflowX: 'hidden' }}>
      <KFNav onOpenModal={() => setModalOpen(true)} />

      {/* HERO */}
      <section style={{ minHeight: '90vh', padding: '100px 24px 80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: `linear-gradient(180deg, ${bg} 0%, ${bg2} 100%)`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 60% 50% at 50% 90%, rgba(232,84,10,0.07) 0%, transparent 70%)`, pointerEvents: 'none' }} />
        <div style={{ display: 'inline-block', border: `1px solid rgba(232,84,10,0.35)`, color: flame, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', padding: '6px 16px', borderRadius: 20, marginBottom: 24 }}>AI-Powered Digital Studio</div>
        <KFLogo size={64} />
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(48px, 10vw, 120px)', lineHeight: 0.92, letterSpacing: 4, color: dark, marginBottom: 20, marginTop: 24, fontWeight: 700 }}>
          YOUR BRAND<br />
          <span style={{ background: `linear-gradient(135deg, ${flame} 0%, ${gold} 60%, ${ember} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>RISES HERE</span>
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: muted }}>
          <span style={{ height: 1, width: 40, background: border, display: 'inline-block' }} />
          <span style={{ color: flame, fontWeight: 500 }}>Production-Grade</span>
          <span>·</span>
          <span style={{ color: flame, fontWeight: 500 }}>Enterprise-Secure</span>
          <span>·</span>
          <span style={{ color: flame, fontWeight: 500 }}>Fully Custom</span>
          <span style={{ height: 1, width: 40, background: border, display: 'inline-block' }} />
        </div>
        <p style={{ fontSize: 17, color: muted, maxWidth: 520, lineHeight: 1.8, marginBottom: 16, fontWeight: 300 }}>We start with the right questions. We deliver with precision. Turning your vision into a digital presence that commands attention.</p>
        <p style={{ fontSize: 13, color: muted, maxWidth: 480, lineHeight: 1.7, marginBottom: 40, opacity: 0.8 }}>Built for F&B brands, entrepreneurs, and businesses ready to build a serious digital presence — at community rates, with no compromise on quality.</p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}>
          <button onClick={() => setModalOpen(true)} style={{ background: `linear-gradient(135deg, ${flame}, ${ember})`, color: '#fff', border: 'none', padding: '14px 32px', fontSize: 13, letterSpacing: 1, textTransform: 'uppercase', cursor: 'pointer', borderRadius: 2, fontFamily: 'inherit', fontWeight: 500 }}>Start Your Discovery Brief</button>
          <a href="#services" style={{ background: 'transparent', color: dark, border: `1px solid rgba(26,18,8,0.2)`, padding: '14px 32px', fontSize: 13, letterSpacing: 1, textTransform: 'uppercase', borderRadius: 2, fontFamily: 'inherit', textDecoration: 'none' }}>See Our Services</a>
        </div>
        <div className="kf-hooks-strip" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: border, border: `1px solid ${border}`, width: '100%', maxWidth: 900 }}>
          {hooks.map(h => (
            <div key={h.num} style={{ background: bg, padding: '20px 18px', textAlign: 'left', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${flame}, transparent)` }} />
              <div style={{ fontSize: 10, letterSpacing: 3, color: flame, textTransform: 'uppercase', marginBottom: 8, fontWeight: 500 }}>{h.num}</div>
              <div style={{ fontSize: 12, fontWeight: 500, color: dark, lineHeight: 1.4 }}>{h.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section style={{ padding: '80px 24px', background: bg }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', color: flame, marginBottom: 8 }}>Who We Are</div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 5vw, 56px)', letterSpacing: 3, color: dark, fontWeight: 700 }}>BUILT BY A FOUNDER,<br />FOR FOUNDERS</h2>
          </div>
          <div className="kf-why" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 16, color: muted, lineHeight: 1.9, marginBottom: 20, fontWeight: 300 }}>KF Digital Studio was not born in an agency. It was built out of a simple belief: that great digital work should be accessible to everyone — not just those with enterprise budgets.</p>
              <p style={{ fontSize: 16, color: muted, lineHeight: 1.9, marginBottom: 20, fontWeight: 300 }}>Our founder is self-taught — every skill learned by doing, every project built from scratch. The same hands that built <a href="https://www.kitchenthree.co" target="_blank" rel="noopener noreferrer" style={{ color: flame, textDecoration: 'none', fontWeight: 500 }}>kitchenthree.co</a> and the AI platform <a href="https://www.abcorb.com" target="_blank" rel="noopener noreferrer" style={{ color: flame, textDecoration: 'none', fontWeight: 500 }}>abcorb.com</a> are the hands that will build yours.</p>
              <p style={{ fontSize: 16, color: muted, lineHeight: 1.9, fontWeight: 300 }}>Because we built this for ourselves first, we didn't cut corners. The same production-grade platform, secure architecture, and enterprise-level security that large corporations pay hundreds of thousands for — available to founders and growing businesses at a fraction of the cost.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: flame, marginBottom: 4 }}>Live Work</div>
              <a href="https://www.kitchenthree.co" target="_blank" rel="noopener noreferrer" style={{ display: 'block', background: bg2, border: `1px solid ${border}`, borderRadius: 4, padding: '20px 24px', textDecoration: 'none', transition: 'border-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = flame}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = border}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: dark }}>kitchenthree.co</div>
                  <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#1D9E75', background: '#E1F5EE', padding: '2px 8px', borderRadius: 999 }}>Live</div>
                </div>
                <div style={{ fontSize: 12, color: muted, lineHeight: 1.6 }}>B2B culinary consultancy — full website, CMS, blog, chef profiles, investment pages, and academy portal.</div>
                <div style={{ fontSize: 11, color: flame, marginTop: 10 }}>View site →</div>
              </a>
              <a href="https://www.abcorb.com" target="_blank" rel="noopener noreferrer" style={{ display: 'block', background: bg2, border: `1px solid ${border}`, borderRadius: 4, padding: '20px 24px', textDecoration: 'none', transition: 'border-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = flame}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = border}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: dark }}>abcorb.com</div>
                  <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#854F0B', background: '#FAEEDA', padding: '2px 8px', borderRadius: 999 }}>In Development</div>
                </div>
                <div style={{ fontSize: 12, color: muted, lineHeight: 1.6 }}>AI-powered community platform — built from the ground up as a self-initiated product.</div>
                <div style={{ fontSize: 11, color: flame, marginTop: 10 }}>View site →</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section id="how" style={{ padding: '80px 24px', background: bg2 }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', color: flame, marginBottom: 8 }}>The Process</div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 5vw, 56px)', letterSpacing: 3, color: dark, fontWeight: 700 }}>HOW WE WORK</h2>
          </div>
          <div className="kf-steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: border, border: `1px solid ${border}` }}>
            {[
              { num: '01', title: 'Discovery Brief', desc: 'You complete our intelligent intake questionnaire — crafted to surface your goals, audience, and vision with precision.' },
              { num: '02', title: 'The Proposal', desc: "We come back with a clear, tailored proposal — what we'll build, who we'll bring in, timeline, and investment. Within 48 hours." },
              { num: '03', title: 'Build & Launch', desc: 'Production-grade execution. Enterprise-secure architecture. Your digital presence goes live — fast, polished, and built to scale.' },
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
      <section id="services" style={{ padding: '80px 24px', background: bg }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', color: flame, marginBottom: 8 }}>What We Offer</div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 5vw, 56px)', letterSpacing: 3, color: dark, fontWeight: 700 }}>SERVICES</h2>
          </div>
          <div className="kf-services" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: border }}>
            {[
              { icon: '🌐', title: 'Website Creation', desc: 'Landing pages to full business sites. Production-grade, mobile-first, built to convert and built to last.', tag: 'Core Service' },
              { icon: '🎨', title: 'Logo & Branding', desc: 'A brand identity that speaks before you do. Crafted by top designers, built to enterprise standards.', tag: 'Add-on' },
              { icon: '📣', title: 'Digital Marketing', desc: 'Social strategy, content, and campaigns — managed by specialists, powered by data.', tag: 'Add-on' },
              { icon: '⚡', title: 'Launch in 7 Days', desc: "AI-powered tools and an efficient process get your brand live faster than any traditional agency — without compromising security or quality.", tag: 'Our Edge' },
            ].map(s => (
              <div key={s.title} style={{ background: bg2, padding: '32px 24px' }}>
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
      <section id="why" style={{ padding: '80px 24px', background: bg2 }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', color: flame, marginBottom: 8 }}>Why KF</div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 5vw, 56px)', letterSpacing: 3, color: dark, fontWeight: 700 }}>WE DO IT DIFFERENTLY</h2>
          </div>
          <div className="kf-why" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {whyItems.map((item, i) => (
                <div key={item.num} style={{ display: 'flex', gap: 0, padding: '24px 0', borderBottom: `1px solid ${border}`, borderTop: i === 0 ? `1px solid ${border}` : 'none' }}>
                  <div style={{ fontFamily: 'Georgia, serif', fontSize: 40, color: 'rgba(232,84,10,0.1)', lineHeight: 1, minWidth: 52, fontWeight: 700, marginRight: 14, flexShrink: 0 }}>{item.num}</div>
                  <div>
                    {item.badge && (
                      <div style={{ display: 'inline-block', fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: flame, border: `1px solid rgba(232,84,10,0.3)`, padding: '2px 8px', borderRadius: 999, marginBottom: 6 }}>{item.badge}</div>
                    )}
                    <h4 style={{ fontSize: 14, fontWeight: 500, color: dark, marginBottom: 6 }}>{item.title}</h4>
                    <p style={{ fontSize: 13, color: muted, lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 4, padding: '32px', textAlign: 'center', position: 'sticky', top: 80 }}>
              {[{ num: '48H', label: 'Proposal turnaround' }, { num: '7', label: 'Days avg. delivery' }, { num: '100%', label: 'Tailored to you' }].map(s => (
                <div key={s.label} style={{ marginBottom: 24 }}>
                  <div style={{ fontFamily: 'Georgia, serif', fontSize: 56, fontWeight: 700, background: `linear-gradient(135deg, ${flame}, ${gold})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: 11, color: muted, letterSpacing: 2, textTransform: 'uppercase', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
              <div style={{ marginTop: 8, padding: '16px', background: 'rgba(232,84,10,0.04)', border: `1px solid rgba(232,84,10,0.15)`, borderRadius: 4 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: flame, letterSpacing: 1, textTransform: 'uppercase' }}>Enterprise-Grade</div>
                <div style={{ fontSize: 11, color: muted, marginTop: 4 }}>Security standard on every project</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: 'center', padding: '80px 24px', background: bg3, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 55% 70% at 50% 50%, rgba(232,84,10,0.06) 0%, transparent 70%)`, pointerEvents: 'none' }} />
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(36px, 6vw, 80px)', fontWeight: 700, letterSpacing: 3, marginBottom: 16, color: dark, position: 'relative' }}>READY TO RISE?</h2>
        <p style={{ color: muted, fontSize: 16, maxWidth: 460, margin: '0 auto 32px', lineHeight: 1.7, position: 'relative' }}>Start with our discovery brief and receive a tailored proposal within 48 hours. No commitment, no fluff.</p>
        <button onClick={() => setModalOpen(true)} style={{ background: `linear-gradient(135deg, ${flame}, ${ember})`, color: '#fff', border: 'none', padding: '16px 40px', fontSize: 13, letterSpacing: 1, textTransform: 'uppercase', cursor: 'pointer', borderRadius: 2, fontFamily: 'inherit', fontWeight: 500, position: 'relative' }}>
          Start Your Discovery Brief
        </button>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '80px 24px', background: bg2 }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, letterSpacing: 4, textTransform: 'uppercase', color: flame, marginBottom: 8 }}>Get In Touch</div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 5vw, 56px)', letterSpacing: 3, color: dark, fontWeight: 700 }}>LET'S TALK</h2>
            <p style={{ fontSize: 15, color: muted, marginTop: 16, lineHeight: 1.7 }}>Have a project in mind? Send us a message and we'll get back to you within 24 hours.</p>
          </div>
          <div className="kf-contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <div>
                <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: flame, marginBottom: 8 }}>Email</div>
                <a href="mailto:karimfayed@aucegypt.edu" style={{ fontSize: 15, color: dark, fontWeight: 500, textDecoration: 'none' }}>karimfayed@aucegypt.edu</a>
              </div>
              <div>
                <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: flame, marginBottom: 8 }}>Phone & WhatsApp</div>
                <a href="tel:+201222186669" style={{ fontSize: 15, color: dark, fontWeight: 500, textDecoration: 'none', display: 'block', marginBottom: 12 }}>+20 122 218 6669</a>
                <a href="https://wa.me/201222186669" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#fff', background: '#25D366', padding: '8px 16px', borderRadius: 2, textDecoration: 'none', fontWeight: 500 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Message on WhatsApp
                </a>
              </div>
              <div>
                <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: flame, marginBottom: 8 }}>Based In</div>
                <p style={{ fontSize: 15, color: dark, fontWeight: 500 }}>Cairo, Egypt</p>
                <p style={{ fontSize: 13, color: muted, marginTop: 4 }}>Available for projects worldwide</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {formStatus === 'sent' ? (
                <div style={{ textAlign: 'center', padding: '48px 24px', border: `1px solid rgba(232,84,10,0.2)`, borderRadius: 4 }}>
                  <div style={{ fontFamily: 'Georgia, serif', fontSize: 40, color: flame, marginBottom: 16 }}>✓</div>
                  <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 22, color: dark, marginBottom: 8 }}>Message sent</h3>
                  <p style={{ fontSize: 14, color: muted }}>We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <>
                  <input style={inputStyle} type="text" placeholder="Full name *" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} />
                  <input style={inputStyle} type="email" placeholder="Email address *" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} />
                  <input style={inputStyle} type="tel" placeholder="Phone or WhatsApp number" value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} />
                  <textarea style={{ ...inputStyle, minHeight: 140, resize: 'vertical' }} placeholder="Tell us about your project *" value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} />
                  {formStatus === 'error' && <p style={{ fontSize: 13, color: '#c0392b' }}>Something went wrong. Please try again or email us directly.</p>}
                  <button onClick={handleSubmit} disabled={formStatus === 'sending'}
                    style={{ background: `linear-gradient(135deg, ${flame}, ${ember})`, color: '#fff', border: 'none', padding: '14px 32px', fontSize: 13, letterSpacing: 1, textTransform: 'uppercase', cursor: formStatus === 'sending' ? 'not-allowed' : 'pointer', borderRadius: 2, fontFamily: 'inherit', fontWeight: 500, opacity: formStatus === 'sending' ? 0.7 : 1 }}>
                    {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${border}`, padding: '24px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, background: bg }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <KFLogo size={32} />
          <span style={{ fontFamily: 'Georgia, serif', fontSize: 14, fontWeight: 700, color: dark, letterSpacing: 2 }}>KF DIGITAL STUDIO</span>
        </div>
        <div style={{ fontSize: 12, color: muted }}>Crafted with AI. Delivered with intention. © 2026 KF</div>
        <div style={{ fontSize: 12, color: muted }}>A <a href="/" style={{ color: flame, textDecoration: 'none', fontWeight: 500 }}>Kitchen Three</a> Partner</div>
      </footer>

      {modalOpen && <KFModal onClose={() => setModalOpen(false)} />}

      <style>{`
        @media (max-width: 768px) {
          .kf-desktop-nav { display: none !important; }
          .kf-hamburger { display: flex !important; }
          .kf-brand-name { display: none !important; }
          .kf-steps { grid-template-columns: 1fr !important; }
          .kf-services { grid-template-columns: 1fr 1fr !important; }
          .kf-why { grid-template-columns: 1fr !important; gap: 32px !important; }
          .kf-contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .kf-hooks-strip { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .kf-services { grid-template-columns: 1fr !important; }
          .kf-hooks-strip { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
