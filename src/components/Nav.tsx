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
  { label: 'Academy', href: '/academy' },
  { label: 'Investment', href: '/invest' },
  { label: 'Partners', href: '/partners/kf-digital-studio' },
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
          <a href="/contact" className="btn btn-primary" style={{ padding: '9px 22px' }}>Get In Touch</a>
        </div>
        <button className={`hamburger${open ? ' open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {links.map(({ label, href }) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a href="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>Get In Touch</a>
      </div>
    </>
  )
}

export function WhatsAppButton() {
  return (
    <a href="https://wa.me/201222186669" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" style={{ position: "fixed", bottom: 28, right: 28, width: 56, height: 56, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999 }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
  )
}
