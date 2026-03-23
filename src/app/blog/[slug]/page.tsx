import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { client } from '@/sanity/lib/client'
import { notFound } from 'next/navigation'

const colorMap: Record<string, { color: string; bg: string }> = {
  teal:   { color: 'var(--teal)',   bg: 'var(--teal-light)' },
  amber:  { color: 'var(--amber)',  bg: 'var(--amber-light)' },
  coral:  { color: 'var(--coral)',  bg: 'var(--coral-light)' },
  forest: { color: 'var(--forest)', bg: '#e8f0ec' },
}

const categoryColor: Record<string, string> = {
  'Startup Guide':    'var(--teal)',
  'Compliance':       'var(--amber)',
  'Operations':       'var(--coral)',
  'Branding':         'var(--teal)',
  'Industry':         'var(--amber)',
  'Chef Matchmaking': 'var(--coral)',
  'Sustainability':   'var(--teal)',
}

type Block = {
  _type: string
  _key: string
  style?: string
  listItem?: string
  children?: { text: string; marks: string[] }[]
  title?: string
  body?: string
  color?: string
  items?: string[]
}

function renderBody(body: Block[]) {
  if (!body) return null
  const elements: React.ReactNode[] = []
  let listBuffer: Block[] = []

  const flushList = (key: string) => {
    if (listBuffer.length === 0) return
    elements.push(
      <ul key={`list-${key}`} style={{ paddingLeft: 0, listStyle: 'none', marginBottom: 20 }}>
        {listBuffer.map(b => (
          <li key={b._key} style={{ display: 'flex', gap: 12, marginBottom: 10, alignItems: 'flex-start' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)', flexShrink: 0, marginTop: 8 }} />
            <span style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300 }}>
              {b.children?.map(c => c.text).join('')}
            </span>
          </li>
        ))}
      </ul>
    )
    listBuffer = []
  }

  body.forEach((block) => {
    if (block._type === 'block') {
      if (block.listItem === 'bullet') {
        listBuffer.push(block)
        return
      }
      flushList(block._key)

      const text = block.children?.map(c => c.text).join('') || ''
      if (!text) return

      if (block.style === 'h2') {
        elements.push(
          <h2 key={block._key} style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 400, color: 'var(--forest)', marginTop: 40, marginBottom: 14, paddingBottom: 8, borderBottom: '1px solid var(--border)' }}>
            {text}
          </h2>
        )
      } else if (block.style === 'h3') {
        elements.push(
          <h3 key={block._key} style={{ fontSize: 17, fontWeight: 600, color: 'var(--forest)', marginTop: 24, marginBottom: 10 }}>
            {text}
          </h3>
        )
      } else {
        elements.push(
          <p key={block._key} style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.9, fontWeight: 300, marginBottom: 18 }}>
            {text}
          </p>
        )
      }
    } else if (block._type === 'callout') {
      flushList(block._key)
      const c = colorMap[block.color || 'teal'] || colorMap.teal
      elements.push(
        <div key={block._key} style={{ background: c.bg, border: '1px solid ' + c.color + '44', borderLeft: '4px solid ' + c.color, borderRadius: 4, padding: '20px 24px', marginTop: 20, marginBottom: 24 }}>
          {block.title && <div style={{ fontSize: 12, fontWeight: 600, color: c.color, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>{block.title}</div>}
          {block.body && <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.8, margin: 0 }}>{block.body}</p>}
        </div>
      )
    } else if (block._type === 'keyTakeaways') {
      flushList(block._key)
      elements.push(
        <div key={block._key} style={{ background: 'var(--forest)', borderRadius: 4, padding: '28px 32px', marginTop: 32, marginBottom: 24 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.16em', color: 'var(--amber)', textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>Key Takeaways</div>
          {block.items?.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', gap: 12, marginBottom: 10, alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--teal)', fontSize: 14, flexShrink: 0, marginTop: 2 }}>✓</div>
              <span style={{ fontSize: 13, color: '#d4efeb', lineHeight: 1.7, fontWeight: 300 }}>{item}</span>
            </div>
          ))}
        </div>
      )
    }
  })

  flushList('end')
  return elements
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await client.fetch(
    `*[_type == "article" && slug.current == $slug][0] {
      _id, title, slug, category, excerpt, readTime, featured, publishedAt, body
    }`,
    { slug }
  )

  if (!article) notFound()

  const color = categoryColor[article.category] || 'var(--teal)'

  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)', color: 'var(--ink)' }}>
      <Nav />

      <section style={{ background: 'var(--forest)', padding: '80px 0 64px' }}>
        <div className="container">
          <div style={{ maxWidth: 760 }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20, flexWrap: 'wrap' }}>
              <a href="/blog" style={{ fontSize: 11, color: '#7ab8b0', letterSpacing: '0.08em', textDecoration: 'none', textTransform: 'uppercase' }}>← Blog</a>
              <span style={{ color: '#7ab8b0' }}>›</span>
              <span style={{ background: 'rgba(168,216,210,0.15)', color, padding: '4px 12px', borderRadius: 2, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>{article.category}</span>
              <span style={{ fontSize: 12, color: '#7ab8b0' }}>{article.readTime}</span>
            </div>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 400, color: '#ffffff', marginBottom: 20, lineHeight: 1.15 }}>
              {article.title}
            </h1>
            <p style={{ fontSize: 16, color: '#d4efeb', fontWeight: 300, lineHeight: 1.8 }}>
              {article.excerpt}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 56, alignItems: 'start' }} className="article-grid">

            <article>
              {renderBody(article.body)}
              <div style={{ marginTop: 24, padding: '16px 20px', background: '#fff', border: '1px solid var(--border)', borderRadius: 4 }}>
                <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
                  This article is intended for educational purposes. For specific advice, consult directly with the relevant authorities or an accredited consultant.
                </p>
              </div>
            </article>

            <aside style={{ position: 'sticky', top: 24 }}>
              <div style={{ background: 'var(--teal-light)', border: '1px solid var(--teal-mid)', borderRadius: 4, padding: '20px', marginBottom: 16 }}>
                <div style={{ fontSize: 10, letterSpacing: '0.14em', color: 'var(--teal)', textTransform: 'uppercase', fontWeight: 600, marginBottom: 10 }}>Need Expert Help?</div>
                <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300, marginBottom: 14 }}>Kitchen Three provides consulting, compliance support, and F&B strategy for businesses across Egypt.</p>
                <a href="/#contact" className="btn btn-primary" style={{ display: 'block', textAlign: 'center', fontSize: 12, padding: '10px 16px' }}>Get In Touch</a>
              </div>
              <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 4, padding: '20px' }}>
                <div style={{ fontSize: 10, letterSpacing: '0.14em', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>About Kitchen Three</div>
                <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300, marginBottom: 12 }}>Egypt's leading B2B culinary consultancy since 2013. HACCP certified, Codex Alimentarius compliant.</p>
                <a href="/services" style={{ fontSize: 12, color: 'var(--teal)', fontWeight: 600 }}>View Our Services →</a>
              </div>
            </aside>

          </div>
        </div>
      </section>

      <section style={{ background: 'var(--forest)', padding: '64px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: 540, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 3vw, 36px)', color: '#ffffff', marginBottom: 16 }}>
              Need Help With Your <em style={{ color: 'var(--amber)' }}>Food Business?</em>
            </h2>
            <p style={{ fontSize: 14, color: '#d4efeb', fontWeight: 300, lineHeight: 1.8, marginBottom: 28 }}>
              Kitchen Three provides end-to-end culinary consulting for food businesses across Egypt and the MENA region.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/#contact" className="btn btn-primary">Talk to a Consultant</a>
              <a href="/blog" className="btn btn-outline" style={{ borderColor: 'rgba(168,216,210,0.5)', color: '#d4efeb' }}>More Articles</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <style>{`
        @media (max-width: 768px) {
          .article-grid { grid-template-columns: 1fr !important; }
          aside { display: none; }
        }
      `}</style>
    </div>
  )
}
