'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ArPageHero from '@/components/ArPageHero'
import { ar } from '@/i18n/dictionaries/ar'
import { arPages } from '@/i18n/dictionaries/ar-pages'

const p = arPages.faq

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'ar',
  mainEntity: p.items.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function ArFaq() {
  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Nav locale="ar" />
      <ArPageHero crumb={p.crumb} eyebrow={p.eyebrow} titleTop={p.titleTop} titleEm={p.titleEm} intro={p.intro} />

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          {p.items.map((f, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '28px 30px', marginBottom: 16 }}>
              <h2 style={{ fontSize: 19, color: 'var(--forest)', marginBottom: 14, lineHeight: 1.5 }}>{f.q}</h2>
              <p style={{ fontSize: 15, color: '#555', fontWeight: 300 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--forest)', padding: '72px 24px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <h2 style={{ color: '#fff', marginBottom: 20 }}>{ar.contact.titleTop} <em style={{ color: 'var(--amber)' }}>{ar.contact.titleEm}</em></h2>
          <p style={{ fontSize: 15.5, color: '#7ab8b0', fontWeight: 300, marginBottom: 32 }}>{ar.contact.body}</p>
          <a href="/ar/contact" className="btn btn-white">{ar.nav.cta}</a>
        </div>
      </section>

      <Footer locale="ar" />
    </div>
  )
}
