'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'Services', href: '/services' },
  { label: 'Chefs', href: '/chefs' },
  { label: 'Clients', href: '/clients' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resources', href: '/resources' },
  { label: 'Team', href: '/team' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav style={{ background: 'rgba(253,250,246,0.96)', borderBottom: '1px solid var(--border)', padding: '0 24px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(10px)' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="/images/logo.jpg" alt="Kitchen Three" width={42} height={42} style={{ borderRadius: 4, objectFit: 'contain' }} />
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 17, color: 'var(--teal)', letterSpacing: '0.06em', lineHeight: 1.1 }}>KITCHEN THREE</div>
            <div style={{ fontSize: 9, letterSpacing: '0.2em', color: 'var(--coral)', textTransform: 'uppercase', fontWeight: 400 }}>Premium Quality Creations</div>
          </div>
        </a>
        <div className="nav-links" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {links.map(({ label, href }) => {
            const active = pathname === href || pathname.startsWith(href + '/')
            return (
              <a key={href} href={href} style={{ fontSize: 12, fontWeight: active ? 500 : 400, letterSpacing: '0.1em', textTransform: 'uppercase', color: active ? 'var(--teal)' : '#555', borderBottom: active ? '2px solid var(--teal)' : '2px solid transparent', paddingBottom: 3, transition: 'all 0.2s' }}
                onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.color = 'var(--teal)' }}
                onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = '#555' }}>
                {label}
              </a>
            )
          })}
          <a href="/#contact" className="btn btn-primary" style={{ padding: '9px 22px' }}>Get In Touch</a>
        </div>
        <button className={`hamburger${open ? ' open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {links.map(({ label, href }) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a href="/#contact" className="btn btn-primary" onClick={() => setOpen(false)}>Get In Touch</a>
      </div>
    </>
  )
}
