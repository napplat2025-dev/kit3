'use client'
import { arPages } from '@/i18n/dictionaries/ar-pages'

/** Shared page header for the Arabic tree — breadcrumb, eyebrow, title, intro. */
export default function ArPageHero({
  crumb,
  eyebrow,
  titleTop,
  titleEm,
  intro,
  background = 'linear-gradient(225deg, var(--teal-light) 0%, var(--cream) 60%)',
}: {
  crumb: string
  eyebrow: string
  titleTop: string
  titleEm: string
  intro: string
  background?: string
}) {
  return (
    <section style={{ background, padding: '80px 24px 64px', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <nav style={{ marginBottom: 24, fontSize: 12.5, color: '#999' }}>
          <a href="/ar" style={{ color: '#999' }}>{arPages.common.home}</a>
          <span style={{ margin: '0 10px', color: '#ccc' }}>‹</span>
          <span style={{ color: 'var(--teal)' }}>{crumb}</span>
        </nav>
        <div className="eyebrow" style={{ color: 'var(--amber)' }}>{eyebrow}</div>
        <h1 style={{ color: 'var(--forest)', maxWidth: 700, marginBottom: 20 }}>
          {titleTop}<br /><em style={{ color: 'var(--teal)' }}>{titleEm}</em>
        </h1>
        <p style={{ fontSize: 17, color: 'var(--muted)', maxWidth: 640, fontWeight: 300 }}>{intro}</p>
      </div>
    </section>
  )
}
