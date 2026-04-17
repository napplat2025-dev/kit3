// src/app/ventures/page.tsx
// Kitchen Three ventures — operating history, 2013 to present
// Narrative framing: "Built. Operated. Proven."
// Matches Kitchen Three's design system: CSS variables, Cormorant serif, inline styles

import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import VentureImage from './VentureImage'
import {
  getVenturesForDisplay,
  getVenturesOnly,
  venturesPageCopy,
  type Venture,
} from '@/app/constants/venturesData'

export const metadata: Metadata = {
  title: 'Ventures | Thirteen Years of Building F&B Businesses | Kitchen Three',
  description:
    'Kitchen Three has built and operated six F&B ventures since 2013 — a cloud bakery, catering and cafeteria operations, a culinary school, a jam brand, an infant food venture, and a HACCP-certified cloud kitchen. We advise from inside the work.',
  keywords:
    'Kitchen Three ventures, F&B operator Egypt, cloud kitchen operator Egypt, Kitchen Hive Cairo, Cookies N Pies Cairo, Fresco jams Egypt, culinary school Egypt, catering operator Cairo, food business operator Egypt',
  alternates: { canonical: 'https://www.kitchenthree.co/ventures' },
  openGraph: {
    title: 'Built. Operated. Proven. | Kitchen Three Ventures',
    description:
      'Thirteen years of building and operating F&B businesses in Cairo. Kitchen Three advises from inside the work.',
    url: 'https://www.kitchenthree.co/ventures',
    siteName: 'Kitchen Three',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Built. Operated. Proven. | Kitchen Three Ventures',
    description:
      'Thirteen years of building and operating F&B businesses in Cairo.',
  },
}

// ---------- STATUS BADGE ----------
function statusStyles(status: Venture['status']) {
  if (status === 'active') {
    return { color: '#0E7A6E', bg: 'var(--teal-light)', border: 'var(--teal)' }
  }
  if (status === 'rebranded') {
    return { color: '#B07400', bg: 'var(--amber-light)', border: 'var(--amber)' }
  }
  return { color: '#4a5568', bg: '#f0ece5', border: 'var(--border)' }
}

function StatusBadge({ venture }: { venture: Venture }) {
  const s = statusStyles(venture.status)
  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        padding: '6px 14px',
        borderRadius: 2,
        color: s.color,
        background: s.bg,
        border: `1px solid ${s.border}`,
      }}
    >
      {venture.statusLabel}
    </span>
  )
}

// ---------- TIMELINE STRIP ----------
function Timeline() {
  const ventureList = getVenturesOnly().sort((a, b) => a.yearStarted - b.yearStarted)
  return (
    <section
      style={{
        padding: '64px 24px',
        background: 'var(--cream)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="eyebrow" style={{ color: 'var(--teal)' }}>
            Timeline
          </div>
          <h2 style={{ color: 'var(--forest)', fontSize: 'clamp(22px, 3vw, 36px)' }}>
            Thirteen Years · Six Operating Ventures ·{' '}
            <em style={{ color: 'var(--teal)' }}>One Through-Line</em>
          </h2>
        </div>
        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 6,
              height: 1,
              background: 'var(--border)',
            }}
            aria-hidden="true"
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: 16,
              position: 'relative',
            }}
          >
            {ventureList.map((v) => {
              const dotColor =
                v.status === 'active'
                  ? 'var(--teal)'
                  : v.status === 'rebranded'
                    ? 'var(--amber)'
                    : 'var(--muted)'
              return (
                <a
                  key={v.slug}
                  href={`#${v.slug}`}
                  style={{ textAlign: 'center', display: 'block', padding: '0 4px' }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginBottom: 14,
                    }}
                  >
                    <div
                      style={{
                        width: 13,
                        height: 13,
                        borderRadius: '50%',
                        background: dotColor,
                        border: '2px solid var(--cream)',
                        boxShadow: `0 0 0 2px ${dotColor}`,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: 'var(--muted)',
                      fontWeight: 500,
                      marginBottom: 4,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {v.era}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: 'var(--forest)',
                      fontWeight: 500,
                      lineHeight: 1.25,
                    }}
                  >
                    {v.name}
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------- VENTURE CARD ----------
function VentureCard({ venture, index }: { venture: Venture; index: number }) {
  const isEven = index % 2 === 0
  const isConsultancy = venture.kind === 'consultancy'

  return (
    <section
      id={venture.slug}
      style={{
        scrollMarginTop: 96,
        padding: '80px 24px',
        background: isConsultancy
          ? 'linear-gradient(180deg, var(--teal-light) 0%, #fff 100%)'
          : '#fff',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container">
        {isConsultancy && (
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div
              className="eyebrow"
              style={{ color: 'var(--teal)', marginBottom: 12 }}
            >
              The Through-Line
            </div>
            <div
              style={{
                width: 48,
                height: 2,
                background: 'var(--teal)',
                margin: '0 auto',
              }}
              aria-hidden="true"
            />
          </div>
        )}

        {/* Hero image + intro */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 40,
            alignItems: 'center',
            marginBottom: 56,
          }}
        >
          <div style={{ order: isEven ? 0 : 1 }}>
            <VentureImage
              src={venture.heroImage}
              alt={`${venture.name} — Kitchen Three`}
              ventureName={venture.name}
              height={380}
            />
          </div>
          <div style={{ order: isEven ? 1 : 0 }}>
            <div style={{ marginBottom: 18 }}>
              <StatusBadge venture={venture} />
            </div>
            <div
              className="eyebrow"
              style={{ color: 'var(--teal)', marginBottom: 10 }}
            >
              {venture.era} · {venture.category}
            </div>
            <h3
              style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                color: 'var(--forest)',
                marginBottom: 14,
                lineHeight: 1.1,
              }}
            >
              {venture.name}
            </h3>
            <p
              style={{
                fontStyle: 'italic',
                color: 'var(--teal)',
                fontSize: 17,
                fontWeight: 300,
                marginBottom: 20,
                fontFamily: 'var(--serif)',
              }}
            >
              {venture.tagline}
            </p>
            <p
              style={{
                fontSize: 15,
                color: 'var(--ink)',
                lineHeight: 1.85,
                fontWeight: 400,
              }}
            >
              {venture.description}
            </p>
          </div>
        </div>

        {/* What we built + What it proves */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 24,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              background: 'var(--cream)',
              padding: '32px 28px',
              borderRadius: 'var(--radius)',
              border: '1px solid var(--border)',
            }}
          >
            <div
              className="eyebrow"
              style={{ color: 'var(--teal)', marginBottom: 20 }}
            >
              What We Built
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {venture.whatWeBuilt.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    gap: 12,
                    padding: '10px 0',
                    borderBottom:
                      i < venture.whatWeBuilt.length - 1
                        ? '1px solid var(--border)'
                        : 'none',
                    color: 'var(--ink)',
                    fontSize: 14,
                    lineHeight: 1.7,
                    fontWeight: 400,
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: 'var(--teal)',
                      marginTop: 8,
                    }}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              background: 'var(--forest)',
              color: '#fff',
              padding: '32px 28px',
              borderRadius: 'var(--radius)',
            }}
          >
            <div
              className="eyebrow"
              style={{ color: 'var(--amber)', marginBottom: 20 }}
            >
              What It Proves
            </div>
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 20,
                color: '#fff',
                lineHeight: 1.5,
                fontWeight: 400,
                marginBottom: 24,
              }}
            >
              {venture.whatItProves}
            </p>
            <div
              style={{
                fontSize: 11,
                color: 'var(--teal-mid)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 600,
                borderTop: '1px solid rgba(126,200,190,0.25)',
                paddingTop: 16,
              }}
            >
              <span>Connects to: </span>
              <span style={{ color: '#fff', textTransform: 'none', letterSpacing: '0.02em', fontWeight: 400 }}>
                {venture.connectsToPillar}
              </span>
            </div>
          </div>
        </div>

        {/* Gallery — 4 image grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 12,
          }}
        >
          {venture.gallery.map((src, i) => (
            <VentureImage
              key={i}
              src={src}
              alt={`${venture.name} — operations photograph ${i + 1}`}
              ventureName={venture.name}
              height={220}
              borderRadius="var(--radius)"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------- PAGE ----------
export default function VenturesPage() {
  const displayOrder = getVenturesForDisplay()

  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)' }}>
      <Nav />

      {/* Hero */}
      <section
        style={{
          background:
            'linear-gradient(135deg, var(--forest) 0%, #1a3a35 100%)',
          padding: '100px 24px 80px',
          borderBottom: '1px solid rgba(168,216,210,0.15)',
        }}
      >
        <div className="container" style={{ maxWidth: 780 }}>
          <nav
            style={{
              marginBottom: 28,
              fontSize: 12,
              color: '#4a8a80',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            <a href="/" style={{ color: '#4a8a80' }}>
              Home
            </a>
            <span style={{ margin: '0 10px', color: '#2a5a50' }}>›</span>
            <span style={{ color: 'var(--teal-mid)' }}>Ventures</span>
          </nav>
          <div
            className="eyebrow"
            style={{ color: 'var(--amber)', marginBottom: 16 }}
          >
            {venturesPageCopy.hero.eyebrow}
          </div>
          <h1
            style={{
              color: '#fff',
              marginBottom: 28,
              fontSize: 'clamp(36px, 5vw, 62px)',
              lineHeight: 1.1,
            }}
          >
            {venturesPageCopy.hero.title}
          </h1>
          <p
            style={{
              fontSize: 18,
              color: '#a8d8d2',
              lineHeight: 1.85,
              fontWeight: 300,
              maxWidth: 680,
            }}
          >
            {venturesPageCopy.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Operator framing */}
      <section
        style={{
          padding: '80px 24px',
          background: '#fff',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="container" style={{ maxWidth: 780 }}>
          <div
            style={{
              borderLeft: '3px solid var(--teal)',
              paddingLeft: 28,
            }}
          >
            <div
              className="eyebrow"
              style={{ color: 'var(--teal)', marginBottom: 14 }}
            >
              Why This Page Matters
            </div>
            <h2
              style={{
                color: 'var(--forest)',
                marginBottom: 20,
                fontSize: 'clamp(26px, 3.5vw, 40px)',
                lineHeight: 1.15,
              }}
            >
              {venturesPageCopy.operatorFraming.title}
            </h2>
            <p
              style={{
                fontSize: 17,
                color: 'var(--ink)',
                lineHeight: 1.9,
                fontWeight: 300,
                fontFamily: 'var(--serif)',
              }}
            >
              {venturesPageCopy.operatorFraming.body}
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Timeline />

      {/* Venture cards */}
      <div>
        {displayOrder.map((venture, index) => (
          <VentureCard key={venture.slug} venture={venture} index={index} />
        ))}
      </div>

      {/* Closing CTA */}
      <section
        style={{
          background: 'var(--forest)',
          padding: '96px 24px',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: 680 }}>
          <div className="eyebrow" style={{ color: 'var(--amber)' }}>
            Method Creates Distinction
          </div>
          <h2
            style={{
              color: '#fff',
              marginBottom: 24,
              fontSize: 'clamp(30px, 4.5vw, 54px)',
              lineHeight: 1.1,
            }}
          >
            We Built These. <em style={{ color: 'var(--amber)' }}>Now We Build For You.</em>
          </h2>
          <p
            style={{
              fontSize: 17,
              color: '#a8d8d2',
              lineHeight: 1.9,
              fontWeight: 300,
              marginBottom: 44,
              maxWidth: 580,
              margin: '0 auto 44px',
            }}
          >
            Thirteen years of operating ventures is what sits behind every proposal, every menu, every
            kitchen we design for a client. When you hire Kitchen Three, you hire operators.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 16,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a href="/contact" className="btn btn-primary">
              Start a Conversation
            </a>
            <a href="/services" className="btn btn-white">
              See Our Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
