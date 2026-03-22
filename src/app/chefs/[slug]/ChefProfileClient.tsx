'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useState } from 'react'

type Chef = {
  slug: string
  name: string
  country: string
  title: string
  photo: string
  color: string
  bg: string
  credentials: string[]
  bio: string
  specialties: string[]
  available: string
  signatures: string[]
}

type Props = {
  chef: Chef
  prevChef: Chef | null
  nextChef: Chef | null
  allChefs: Chef[]
}

export default function ChefProfileClient({ chef, prevChef, nextChef, allChefs }: Props) {
  const [activePhoto, setActivePhoto] = useState<string | null>(null)

  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)', color: 'var(--ink)' }}>
      <Nav />

      {/* BREADCRUMB */}
      <div style={{ background: 'var(--forest)', padding: '20px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <a href="/" style={{ fontSize: 11, color: '#a8d8d2', letterSpacing: '0.08em', textDecoration: 'none', textTransform: 'uppercase' }}>Home</a>
            <span style={{ color: '#a8d8d2' }}>›</span>
            <a href="/chefs" style={{ fontSize: 11, color: '#a8d8d2', letterSpacing: '0.08em', textDecoration: 'none', textTransform: 'uppercase' }}>Our Chefs</a>
            <span style={{ color: '#a8d8d2' }}>›</span>
            <span style={{ fontSize: 11, color: 'var(--amber)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{chef.name}</span>
          </div>
          <a href="/chefs" style={{ fontSize: 12, color: '#d4efeb', textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6, border: '1px solid rgba(168,216,210,0.3)', padding: '6px 14px', borderRadius: 2 }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(168,216,210,0.1)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
          >
            ← Back to all chefs
          </a>
        </div>
      </div>

      {/* HERO */}
      <section style={{ background: 'var(--forest)', paddingBottom: 64 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: 56, alignItems: 'end' }} className="chef-hero-grid">
            <div style={{ position: 'relative' }}>
              <div style={{ width: '100%', aspectRatio: '3/4', borderRadius: 4, overflow: 'hidden', border: `3px solid ${chef.color}` }}>
                <img src={chef.photo} alt={chef.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
              </div>
            </div>
            <div style={{ paddingBottom: 8 }}>
              <div className="eyebrow" style={{ color: 'var(--amber)', marginBottom: 12 }}>{chef.country}</div>
              <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 4vw, 60px)', fontWeight: 400, color: '#ffffff', lineHeight: 1.1, marginBottom: 12 }}>{chef.name}</h1>
              <div style={{ fontSize: 16, color: '#d4efeb', marginBottom: 32, fontWeight: 300 }}>{chef.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 36 }}>
                {chef.credentials.map(cr => (
                  <div key={cr} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <div style={{ width: 7, height: 7, borderRadius: '50%', background: chef.color, flexShrink: 0, marginTop: 7 }} />
                    <span style={{ fontSize: 14, color: '#d4efeb', lineHeight: 1.6 }}>{cr}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="/#contact" className="btn btn-primary">Enquire About This Chef</a>
                <a href="/chefs" className="btn btn-white" style={{ fontSize: 12 }}>← View All Chefs</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIO */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 56 }} className="chef-bio-grid">
            <div>
              <div className="eyebrow" style={{ color: chef.color }}>About</div>
              <h2 style={{ fontFamily: 'var(--serif)', marginBottom: 24 }}>The Story of <em style={{ color: chef.color }}>{chef.name.split(' ')[0]}</em></h2>
              <p style={{ fontSize: 17, color: '#3a4a46', lineHeight: 2, marginBottom: 32 }}>{chef.bio}</p>
              <div style={{ marginBottom: 16, fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--forest)' }}>Specialties</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {chef.specialties.map(sp => (
                  <span key={sp} style={{ background: chef.bg, color: chef.color, fontSize: 13, padding: '7px 16px', borderRadius: 2, fontWeight: 600, border: `1px solid ${chef.color}33` }}>{sp}</span>
                ))}
              </div>
            </div>
            <div style={{ alignSelf: 'start' }}>
              <div style={{ background: chef.bg, borderRadius: 4, padding: 28, borderLeft: `4px solid ${chef.color}`, marginBottom: 20 }}>
                <div style={{ fontSize: 11, color: chef.color, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 10 }}>Available For</div>
                <div style={{ fontSize: 15, color: 'var(--forest)', lineHeight: 1.8 }}>{chef.available}</div>
              </div>
              <div style={{ background: 'var(--forest)', borderRadius: 4, padding: 28, textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 20, color: '#fff', marginBottom: 8 }}>Work with {chef.name.split(' ')[0]}</div>
                <div style={{ fontSize: 13, color: '#d4efeb', marginBottom: 20, lineHeight: 1.7 }}>Tell us about your project and we will be in touch within 24 hours.</div>
                <a href="/#contact" className="btn btn-white" style={{ width: '100%', display: 'block', textAlign: 'center' }}>Send an Enquiry</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      {chef.signatures && chef.signatures.length > 0 && (
        <section className="section" style={{ background: 'var(--cream)', borderTop: '1px solid var(--border)' }}>
          <div className="container">
            <div className="section-header">
              <div className="eyebrow" style={{ color: chef.color }}>Signature Dishes</div>
              <h2>{chef.name.split(' ')[0]}'s <em style={{ color: chef.color }}>Culinary Creations</em></h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
              {chef.signatures.map((src, i) => (
                <div key={i} onClick={() => setActivePhoto(src)}
                  style={{ borderRadius: 4, overflow: 'hidden', cursor: 'pointer', border: `1px solid ${chef.color}22`, aspectRatio: '4/3', position: 'relative' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.border = `1px solid ${chef.color}`}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.border = `1px solid ${chef.color}22`}
                >
                  <img
                    src={src}
                    alt={`${chef.name} signature dish ${i + 1}`}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.3s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'}
                    onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* LIGHTBOX */}
          {activePhoto && (
            <div onClick={() => setActivePhoto(null)}
              style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.92)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <img src={activePhoto} alt="Signature dish"
                style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', borderRadius: 4, boxShadow: '0 0 60px rgba(0,0,0,0.5)' }} />
              <div style={{ position: 'absolute', top: 24, right: 32, color: '#fff', fontSize: 32, cursor: 'pointer', lineHeight: 1 }}>×</div>
            </div>
          )}
        </section>
      )}

      {/* PREV / NEXT */}
      <section style={{ background: '#fff', borderTop: '1px solid var(--border)', padding: '40px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {prevChef ? (
              <a href={`/chefs/${prevChef.slug}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 16, padding: '20px 24px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--cream)', transition: 'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = prevChef.color; (e.currentTarget as HTMLElement).style.background = '#fff' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.background = 'var(--cream)' }}
              >
                <div style={{ width: 52, height: 52, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: `2px solid ${prevChef.color}` }}>
                  <img src={prevChef.photo} alt={prevChef.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div>
                  <div style={{ fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 3 }}>← Previous Chef</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--forest)' }}>{prevChef.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--muted)' }}>{prevChef.country}</div>
                </div>
              </a>
            ) : <div />}

            {nextChef ? (
              <a href={`/chefs/${nextChef.slug}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 16, padding: '20px 24px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--cream)', transition: 'all 0.2s', textAlign: 'right' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = nextChef.color; (e.currentTarget as HTMLElement).style.background = '#fff' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.background = 'var(--cream)' }}
              >
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 3 }}>Next Chef →</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--forest)' }}>{nextChef.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--muted)' }}>{nextChef.country}</div>
                </div>
                <div style={{ width: 52, height: 52, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: `2px solid ${nextChef.color}` }}>
                  <img src={nextChef.photo} alt={nextChef.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
              </a>
            ) : <div />}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <a href="/chefs" className="btn btn-outline">View All 10 Chefs</a>
          </div>
        </div>
      </section>

      <Footer />
      <style>{`
        @media (max-width: 768px) {
          .chef-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .chef-bio-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </div>
  )
}
