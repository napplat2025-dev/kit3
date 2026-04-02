'use client'
import { useState } from 'react'
import { flame, muted, border, dark, bg, KFLogo } from './KFConstants'

const navLinks = [['#how', 'Process'], ['#services', 'Services'], ['#why', 'Why Us']]

export default function KFNav({ onOpenModal }: { onOpenModal: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(250,247,242,0.96)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${border}` }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>

          {/* Kitchen Three logo — links back to main site */}
          <a href="/" title="Back to Kitchen Three" style={{ display: 'flex', alignItems: 'center', borderRight: `1px solid ${border}`, paddingRight: 16, opacity: 0.55, transition: 'opacity 0.2s' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '0.55'}>
            <img src="/images/logo.jpg" alt="Kitchen Three" width={32} height={32} style={{ borderRadius: 3, objectFit: 'contain' }} />
          </a>

          {/* KF Digital Studio logo */}
          <a href="/kf" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
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
          <button onClick={() => { onOpenModal(); setMenuOpen(false) }}
            style={{ background: flame, color: '#fff', border: 'none', padding: '9px 20px', fontSize: 12, letterSpacing: 1, textTransform: 'uppercase', cursor: 'pointer', borderRadius: 2, fontFamily: 'inherit', whiteSpace: 'nowrap' }}>
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
          <button onClick={() => { onOpenModal(); setMenuOpen(false) }}
            style={{ marginTop: 16, background: flame, color: '#fff', border: 'none', padding: '14px', fontSize: 13, letterSpacing: 1, textTransform: 'uppercase', cursor: 'pointer', borderRadius: 2, fontFamily: 'inherit', width: '100%' }}>
            Start a Project
          </button>
        </div>
      )}
    </nav>
  )
}
