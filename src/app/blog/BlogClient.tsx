'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useState } from 'react'

const categoryColors: Record<string, { color: string; bg: string }> = {
  'Startup Guide': { color: 'var(--teal)', bg: 'var(--teal-light)' },
  'Compliance': { color: 'var(--amber)', bg: 'var(--amber-light)' },
  'Operations': { color: 'var(--coral)', bg: 'var(--coral-light)' },
  'Branding': { color: 'var(--teal)', bg: 'var(--teal-light)' },
  'Industry': { color: 'var(--amber)', bg: 'var(--amber-light)' },
  'Chef Matchmaking': { color: 'var(--coral)', bg: 'var(--coral-light)' },
  'Sustainability': { color: 'var(--teal)', bg: 'var(--teal-light)' },
}

const categories = ['All', 'Startup Guide', 'Compliance', 'Operations', 'Branding', 'Industry', 'Chef Matchmaking', 'Sustainability']

type Article = {
  _id: string
  title: string
  slug: { current: string }
  category: string
  excerpt: string
  readTime: string
  featured: boolean
  publishedAt: string
}

export default function BlogClient({ articles }: { articles: Article[] }) {
  const [cat, setCat] = useState('All')

  const filtered = cat === 'All' ? articles : articles.filter(a => a.category === cat)
  const featured = articles.filter(a => a.featured)

  const getColor = (category: string) => categoryColors[category]?.color || 'var(--teal)'
  const getBg = (category: string) => categoryColors[category]?.bg || 'var(--teal-light)'

  const formatDate = (dateStr: string) => {
    if (!dateStr) return ''
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  }

  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)', color: 'var(--ink)' }}>
      <Nav />

      <section style={{ background: 'var(--forest)', padding: '80px 0 64px' }}>
        <div className="container">
          <div className="eyebrow" style={{ color: 'var(--amber)' }}>Insights & Guides</div>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, color: '#ffffff', marginBottom: 20, lineHeight: 1.1 }}>
            Culinary Industry <em style={{ color: 'var(--amber)' }}>Insights</em>
          </h1>
          <p style={{ fontSize: 17, color: '#d4efeb', maxWidth: 600, lineHeight: 1.8, fontWeight: 300 }}>
            Practical knowledge from Egypt's leading culinary consultancy — startup guides, industry analysis, and expert perspectives on the F&B business.
          </p>
        </div>
      </section>

      {cat === 'All' && featured.length > 0 && (
        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="container">
            <div className="eyebrow" style={{ color: 'var(--muted)' }}>Featured Articles</div>
            <div className="featured-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 48 }}>
              {featured.slice(0, 3).map((a, i) => (
                <a key={a._id} href={`/blog/${a.slug.current}`}
                  style={{ background: getBg(a.category), borderRadius: 4, padding: i === 0 ? '36px 28px' : '24px 20px', border: '1px solid ' + getColor(a.category) + '22', cursor: 'pointer', display: 'block', textDecoration: 'none' }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14, flexWrap: 'wrap' }}>
                    <span style={{ background: '#fff', color: getColor(a.category), padding: '3px 10px', borderRadius: 2, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>{a.category}</span>
                    <span style={{ fontSize: 11, color: 'var(--muted)' }}>{a.readTime}</span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--serif)', fontSize: i === 0 ? 24 : 18, fontWeight: 400, color: 'var(--forest)', marginBottom: 10, lineHeight: 1.3 }}>{a.title}</h2>
                  {i === 0 && <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300, marginBottom: 16 }}>{a.excerpt}</p>}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, color: 'var(--muted)' }}>{formatDate(a.publishedAt)}</span>
                    <span style={{ fontSize: 12, color: getColor(a.category), fontWeight: 600 }}>READ →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ borderBottom: '1px solid var(--border)', marginBottom: 32, display: 'flex', overflowX: 'auto' }}>
            {categories.map(c => (
              <button key={c} onClick={() => setCat(c)}
                style={{ padding: '14px 14px', fontSize: 10, letterSpacing: '0.08em', color: cat === c ? 'var(--teal)' : '#888', background: 'none', border: 'none', borderBottom: cat === c ? '2px solid var(--teal)' : '2px solid transparent', cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: 'var(--sans)', fontWeight: cat === c ? 600 : 400 }}>
                {c.toUpperCase()}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--muted)' }}>
              <div style={{ fontSize: 16, marginBottom: 8 }}>No articles in this category yet.</div>
              <div style={{ fontSize: 13 }}>Check back soon.</div>
            </div>
          ) : (
            <div className="grid-3" style={{ gap: 16 }}>
              {filtered.map(a => (
                <a key={a._id} href={`/blog/${a.slug.current}`}
                  style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 4, padding: '24px 20px', cursor: 'pointer', position: 'relative', overflow: 'hidden', display: 'block', textDecoration: 'none' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 3, background: getColor(a.category) }} />
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12, marginTop: 4, flexWrap: 'wrap' }}>
                    <span style={{ background: getBg(a.category), color: getColor(a.category), padding: '3px 10px', borderRadius: 2, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>{a.category}</span>
                    <span style={{ fontSize: 11, color: 'var(--muted)' }}>{a.readTime}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 400, color: 'var(--forest)', marginBottom: 8, lineHeight: 1.3 }}>{a.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300, marginBottom: 14 }}>{a.excerpt}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, color: 'var(--muted)' }}>{formatDate(a.publishedAt)}</span>
                    <span style={{ fontSize: 11, color: getColor(a.category), fontWeight: 600 }}>READ →</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section" style={{ background: 'var(--amber-light)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: 540, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 400, color: 'var(--forest)', marginBottom: 16 }}>
              Never Miss an <em style={{ color: 'var(--amber)' }}>Industry Insight</em>
            </h2>
            <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 28, fontWeight: 300, lineHeight: 1.8 }}>Join our community of food entrepreneurs and industry professionals.</p>
            <a href="/resources" className="btn btn-primary">Join the Community — Free</a>
          </div>
        </div>
      </section>

      <Footer />
      <style>{`
        @media (max-width: 768px) {
          .featured-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
