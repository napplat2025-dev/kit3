'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useState } from 'react'

const articles = [
  { slug: 'how-to-start-cloud-kitchen-egypt', category: 'Startup Guide', title: 'How to Start a Cloud Kitchen in Egypt: The Complete 2025 Guide', excerpt: 'Cloud kitchens are the fastest-growing segment in Egypt F&B market. This guide covers everything — licensing, equipment, delivery platform integration, and the financial model that makes cloud kitchens work.', readTime: '8 min read', date: 'March 2025', color: 'var(--teal)', bg: 'var(--teal-light)', featured: true },
  { slug: 'haccp-requirements-egypt-small-business', category: 'Compliance', title: 'HACCP Requirements for Small Food Businesses in Egypt', excerpt: 'A plain-language breakdown of HACCP compliance requirements for restaurants, catering operations, and food brands in Egypt — what you actually need, what you can skip, and how to get certified.', readTime: '6 min read', date: 'February 2025', color: 'var(--amber)', bg: 'var(--amber-light)', featured: true },
  { slug: 'menu-engineering-egypt-restaurants', category: 'Operations', title: 'Menu Engineering: How Egypt Top Restaurants Price and Position Dishes', excerpt: 'Menu engineering is the science of making your menu work harder. We break down the psychology, math, and design principles behind high-performing restaurant menus.', readTime: '7 min read', date: 'January 2025', color: 'var(--coral)', bg: 'var(--coral-light)', featured: true },
  { slug: 'food-brand-development-egypt', category: 'Branding', title: 'How to Build a Food Brand in Egypt: From Name to Launch', excerpt: 'Egypt food market is growing fast — and getting crowded. Here is how to build a food brand that stands out, from the name and visual identity through to your go-to-market strategy.', readTime: '9 min read', date: 'December 2024', color: 'var(--teal)', bg: 'var(--teal-light)', featured: false },
  { slug: 'culinary-consultant-what-do-they-do', category: 'Industry', title: 'What Does a Culinary Consultant Actually Do? A Complete Guide', excerpt: 'The term culinary consultant covers a wide range of expertise. This guide explains the different types of culinary consulting engagements, what to expect, and how to choose the right consultant.', readTime: '5 min read', date: 'November 2024', color: 'var(--amber)', bg: 'var(--amber-light)', featured: false },
  { slug: 'michelin-star-chef-hire-egypt', category: 'Chef Matchmaking', title: 'How to Hire a Michelin-Star Chef for Your Event or Restaurant in Egypt', excerpt: 'Access to world-class culinary talent is no longer limited to five-star hotels. Here is how the chef matchmaking process works — and what to look for when hiring a Michelin-pedigreed chef.', readTime: '5 min read', date: 'October 2024', color: 'var(--coral)', bg: 'var(--coral-light)', featured: false },
  { slug: 'egypt-fb-market-trends-2025', category: 'Industry', title: "Egypt F&B Market in 2025: Trends, Opportunities, and What's Next", excerpt: 'A data-driven look at Egypt food and beverage industry — the segments growing fastest, the consumer trends reshaping menus, and where the opportunities lie.', readTime: '10 min read', date: 'September 2024', color: 'var(--teal)', bg: 'var(--teal-light)', featured: false },
  { slug: 'zero-waste-kitchen-egypt', category: 'Sustainability', title: 'Zero-Waste Kitchen Operations: A Practical Guide for Egypt Restaurants', excerpt: 'Zero-waste kitchens reduce costs and environmental impact. This practical guide shows how Egyptian restaurants and food businesses can implement zero-waste principles.', readTime: '6 min read', date: 'August 2024', color: 'var(--amber)', bg: 'var(--amber-light)', featured: false },
]

const categories = ['All', 'Startup Guide', 'Compliance', 'Operations', 'Branding', 'Industry', 'Chef Matchmaking', 'Sustainability']

export default function BlogClient() {
  const [cat, setCat] = useState('All')
  const filtered = cat === 'All' ? articles : articles.filter(a => a.category === cat)
  const featured = articles.filter(a => a.featured)

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
            Practical knowledge from Egypt leading culinary consultancy — startup guides, industry analysis, and expert perspectives on the F&B business.
          </p>
        </div>
      </section>

      {cat === 'All' && (
        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="container">
            <div className="eyebrow" style={{ color: 'var(--muted)' }}>Featured Articles</div>
            <div className="featured-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 48 }}>
              {featured.map((a, i) => (
                <div key={a.slug} style={{ background: a.bg, borderRadius: 4, padding: i === 0 ? '36px 28px' : '24px 20px', border: '1px solid ' + a.color + '22', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14, flexWrap: 'wrap' }}>
                    <span style={{ background: '#fff', color: a.color, padding: '3px 10px', borderRadius: 2, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>{a.category}</span>
                    <span style={{ fontSize: 11, color: 'var(--muted)' }}>{a.readTime}</span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--serif)', fontSize: i === 0 ? 24 : 18, fontWeight: 400, color: 'var(--forest)', marginBottom: 10, lineHeight: 1.3 }}>{a.title}</h2>
                  {i === 0 && <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300, marginBottom: 16 }}>{a.excerpt}</p>}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, color: 'var(--muted)' }}>{a.date}</span>
                    <span style={{ fontSize: 12, color: a.color, fontWeight: 600 }}>READ →</span>
                  </div>
                </div>
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
          <div className="grid-3" style={{ gap: 16 }}>
            {filtered.map(a => (
              <div key={a.slug} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 4, padding: '24px 20px', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 3, background: a.color }} />
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12, marginTop: 4, flexWrap: 'wrap' }}>
                  <span style={{ background: a.bg, color: a.color, padding: '3px 10px', borderRadius: 2, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>{a.category}</span>
                  <span style={{ fontSize: 11, color: 'var(--muted)' }}>{a.readTime}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 400, color: 'var(--forest)', marginBottom: 8, lineHeight: 1.3 }}>{a.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300, marginBottom: 14 }}>{a.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 11, color: 'var(--muted)' }}>{a.date}</span>
                  <span style={{ fontSize: 11, color: a.color, fontWeight: 600 }}>READ →</span>
                </div>
              </div>
            ))}
          </div>
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
