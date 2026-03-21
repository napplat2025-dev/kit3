'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useState } from 'react'

const articles = [
  {
    slug: 'how-to-start-cloud-kitchen-egypt',
    category: 'Startup Guide',
    title: 'How to Start a Cloud Kitchen in Egypt: The Complete 2025 Guide',
    excerpt: 'Cloud kitchens are the fastest-growing segment in Egypt\'s F&B market. This guide covers everything — licensing, equipment, delivery platform integration, and the financial model that makes cloud kitchens work.',
    readTime: '8 min read',
    date: 'March 2025',
    color: '#1a8a7a', bg: '#e8f6f4',
    keywords: ['cloud kitchen Egypt', 'ghost kitchen Cairo', 'delivery kitchen Egypt'],
    featured: true,
  },
  {
    slug: 'haccp-requirements-egypt-small-business',
    category: 'Compliance',
    title: 'HACCP Requirements for Small Food Businesses in Egypt',
    excerpt: 'A plain-language breakdown of HACCP compliance requirements for restaurants, catering operations, and food brands in Egypt — what you actually need, what you can skip, and how to get certified.',
    readTime: '6 min read',
    date: 'February 2025',
    color: '#e8a020', bg: '#fdf4e3',
    keywords: ['HACCP Egypt', 'food safety certification Cairo', 'HACCP compliance Egypt'],
    featured: true,
  },
  {
    slug: 'menu-engineering-egypt-restaurants',
    category: 'Operations',
    title: 'Menu Engineering: How Egypt\'s Top Restaurants Price and Position Dishes',
    excerpt: 'Menu engineering is the science of making your menu work harder. We break down the psychology, math, and design principles behind high-performing restaurant menus — with examples from Egypt\'s F&B market.',
    readTime: '7 min read',
    date: 'January 2025',
    color: '#e06050', bg: '#fdf0ee',
    keywords: ['menu engineering Egypt', 'restaurant menu design Cairo', 'menu pricing Egypt'],
    featured: true,
  },
  {
    slug: 'food-brand-development-egypt',
    category: 'Branding',
    title: 'How to Build a Food Brand in Egypt: From Name to Launch',
    excerpt: 'Egypt\'s food market is growing fast — and getting crowded. Here\'s how to build a food brand that stands out, from the name and visual identity through to your go-to-market strategy.',
    readTime: '9 min read',
    date: 'December 2024',
    color: '#1a8a7a', bg: '#e8f6f4',
    keywords: ['food brand Egypt', 'F&B branding Cairo', 'food startup Egypt'],
    featured: false,
  },
  {
    slug: 'culinary-consultant-what-do-they-do',
    category: 'Industry',
    title: 'What Does a Culinary Consultant Actually Do? A Complete Guide',
    excerpt: 'The term "culinary consultant" covers a wide range of expertise. This guide explains the different types of culinary consulting engagements, what to expect, what to ask, and how to choose the right consultant for your project.',
    readTime: '5 min read',
    date: 'November 2024',
    color: '#e8a020', bg: '#fdf4e3',
    keywords: ['culinary consultant Egypt', 'food consultant Cairo', 'what does a culinary consultant do'],
    featured: false,
  },
  {
    slug: 'michelin-star-chef-hire-egypt',
    category: 'Chef Matchmaking',
    title: 'How to Hire a Michelin-Star Chef for Your Event or Restaurant in Egypt',
    excerpt: 'Access to world-class culinary talent is no longer limited to five-star hotels. Here\'s how the chef matchmaking process works — and what to look for when hiring a Michelin-pedigreed chef for your project.',
    readTime: '5 min read',
    date: 'October 2024',
    color: '#e06050', bg: '#fdf0ee',
    keywords: ['hire Michelin chef Egypt', 'international chef Cairo', 'chef matchmaking Egypt'],
    featured: false,
  },
  {
    slug: 'egypt-fb-market-trends-2025',
    category: 'Industry',
    title: "Egypt's F&B Market in 2025: Trends, Opportunities, and What's Next",
    excerpt: 'A data-driven look at Egypt\'s food and beverage industry — the segments growing fastest, the consumer trends reshaping menus, and where the opportunities lie for new entrants and established operators.',
    readTime: '10 min read',
    date: 'September 2024',
    color: '#1a8a7a', bg: '#e8f6f4',
    keywords: ["Egypt F&B market 2025", 'food industry Egypt', 'restaurant market Cairo'],
    featured: false,
  },
  {
    slug: 'zero-waste-kitchen-egypt',
    category: 'Sustainability',
    title: 'Zero-Waste Kitchen Operations: A Practical Guide for Egypt\'s Restaurants',
    excerpt: 'Zero-waste kitchens reduce costs and environmental impact. This practical guide shows how Egyptian restaurants and food businesses can implement zero-waste principles without compromising quality or speed.',
    readTime: '6 min read',
    date: 'August 2024',
    color: '#e8a020', bg: '#fdf4e3',
    keywords: ['zero waste kitchen Egypt', 'sustainable restaurant Cairo', 'food waste reduction Egypt'],
    featured: false,
  },
]

const categories = ['All', 'Startup Guide', 'Compliance', 'Operations', 'Branding', 'Industry', 'Chef Matchmaking', 'Sustainability']

export default function BlogClient() {
  const [cat, setCat] = useState('All')
  const filtered = cat === 'All' ? articles : articles.filter(a => a.category === cat)
  const featured = articles.filter(a => a.featured)
  const rest = filtered.filter(a => !a.featured || cat !== 'All')

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: '#fdfaf6', color: '#1a1a1a' }}>

      <Nav />

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #e8f6f4 0%, #fdfaf6 60%)', padding: '80px 24px 64px', borderBottom: '1px solid #ede8e0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 24 }}>
            <a href="/" style={{ fontSize: 12, color: '#999', letterSpacing: '0.08em', textDecoration: 'none', textTransform: 'uppercase' }}>Home</a>
            <span style={{ color: '#ccc', margin: '0 10px' }}>›</span>
            <span style={{ fontSize: 12, color: '#1a8a7a', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Blog & Insights</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, color: '#0f2e2a', marginBottom: 20, lineHeight: 1.1 }}>
            Culinary Industry<br /><em style={{ color: '#1a8a7a' }}>Insights & Guides</em>
          </h1>
          <p style={{ fontSize: 17, color: '#666', maxWidth: 600, lineHeight: 1.8, fontWeight: 300 }}>
            Practical knowledge from Egypt's leading culinary consultancy — startup guides, industry analysis, operational how-tos, and expert perspectives on the F&B business.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      {cat === 'All' && (
        <section style={{ padding: '64px 24px 0', background: '#fdfaf6' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', color: '#aaa', textTransform: 'uppercase', fontWeight: 500, marginBottom: 24 }}>FEATURED ARTICLES</div>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 16, marginBottom: 48 }}>
              {featured.map((a, i) => (
                <div key={a.slug} style={{ background: a.bg, borderRadius: 4, padding: i === 0 ? '40px 36px' : '28px 24px', border: `1px solid ${a.color}22`, cursor: 'pointer', transition: 'transform 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
                    <span style={{ background: '#fff', color: a.color, padding: '3px 10px', borderRadius: 2, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>{a.category}</span>
                    <span style={{ fontSize: 11, color: '#aaa' }}>{a.readTime}</span>
                  </div>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: i === 0 ? 28 : 20, fontWeight: 400, color: '#0f2e2a', marginBottom: 12, lineHeight: 1.3 }}>{a.title}</h2>
                  {i === 0 && <p style={{ fontSize: 14, color: '#666', lineHeight: 1.8, fontWeight: 300, marginBottom: 20 }}>{a.excerpt}</p>}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, color: '#aaa' }}>{a.date}</span>
                    <span style={{ fontSize: 12, color: a.color, letterSpacing: '0.08em', fontWeight: 500 }}>READ →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FILTER + ALL ARTICLES */}
      <section style={{ padding: '0 24px 80px', background: '#fdfaf6' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ borderBottom: '1px solid #ede8e0', marginBottom: 40, display: 'flex', overflowX: 'auto' }}>
            {categories.map(c => (
              <button key={c} onClick={() => setCat(c)}
                style={{ padding: '14px 18px', fontSize: 11, letterSpacing: '0.08em', color: cat === c ? '#1a8a7a' : '#888', background: 'none', border: 'none', borderBottom: `2px solid ${cat === c ? '#1a8a7a' : 'transparent'}`, cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: "'DM Sans', sans-serif", fontWeight: cat === c ? 500 : 400 }}>
                {c.toUpperCase()}
              </button>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {(cat === 'All' ? articles : filtered).map(a => (
              <div key={a.slug} style={{ background: '#fff', border: '1px solid #ede8e0', borderRadius: 4, padding: '28px 24px', cursor: 'pointer', transition: 'all 0.2s', position: 'relative', overflow: 'hidden' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = a.color; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#ede8e0'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 3, background: a.color }} />
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14, marginTop: 4 }}>
                  <span style={{ background: a.bg, color: a.color, padding: '3px 10px', borderRadius: 2, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>{a.category}</span>
                  <span style={{ fontSize: 11, color: '#bbb' }}>{a.readTime}</span>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 400, color: '#0f2e2a', marginBottom: 10, lineHeight: 1.3 }}>{a.title}</h3>
                <p style={{ fontSize: 13, color: '#777', lineHeight: 1.7, fontWeight: 300, marginBottom: 16 }}>{a.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 11, color: '#bbb' }}>{a.date}</span>
                  <span style={{ fontSize: 11, color: a.color, letterSpacing: '0.08em', fontWeight: 500 }}>READ ARTICLE →</span>
                </div>
                <div style={{ marginTop: 14, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {a.keywords.map(k => (
                    <span key={k} style={{ fontSize: 10, color: '#bbb', background: '#f5f0eb', padding: '2px 8px', borderRadius: 2 }}>{k}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section style={{ background: 'linear-gradient(135deg, #fdf4e3, #fdfaf6)', padding: '64px 24px', borderTop: '1px solid #ede8e0', textAlign: 'center' }}>
        <div style={{ maxWidth: 540, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 400, color: '#0f2e2a', marginBottom: 16 }}>
            Never Miss an <em style={{ color: '#e8a020' }}>Industry Insight</em>
          </h2>
          <p style={{ fontSize: 14, color: '#777', marginBottom: 28, fontWeight: 300, lineHeight: 1.8 }}>Join our community of food entrepreneurs and industry professionals.</p>
          <a href="/resources" style={{ background: '#e8a020', color: '#fff', padding: '14px 36px', borderRadius: 2, fontSize: 12, letterSpacing: '0.12em', textDecoration: 'none', fontWeight: 500 }}>JOIN THE COMMUNITY — FREE</a>
        </div>
      </section>

      <footer style={{ background: '#0a1f1c', color: '#4a8a80', padding: '24px', textAlign: 'center' }}>
        <div style={{ fontSize: 12 }}>© 2026 Kitchen Three LLC — Cairo, Egypt. All rights reserved.</div>
      </footer>
    </div>
  )
}
