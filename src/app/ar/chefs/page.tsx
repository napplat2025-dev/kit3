'use client'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ArPageHero from '@/components/ArPageHero'
import { ar } from '@/i18n/dictionaries/ar'
import { arPages } from '@/i18n/dictionaries/ar-pages'
import { chefs } from '@/app/constants/homeData'

const p = arPages.chefs

export default function ArChefs() {
  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)' }}>
      <Nav locale="ar" />
      <ArPageHero crumb={p.crumb} eyebrow={p.eyebrow} titleTop={p.titleTop} titleEm={p.titleEm} intro={p.intro} />

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="grid-5">
            {chefs.map(c => (
              <div key={c.slug} style={{ textAlign: 'center' }}>
                <div style={{ width: 120, height: 120, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 14px', border: '2px solid var(--border)' }}>
                  <Image src={c.photo} alt={c.name} width={240} height={240} sizes="120px" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--forest)', marginBottom: 3, direction: 'ltr' }}>{c.name}</div>
                <div style={{ fontSize: 12, color: 'var(--teal)', fontWeight: 600 }}>{ar.chefs.countries[c.country] ?? c.country}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 44, fontSize: 13.5, color: 'var(--muted)', fontWeight: 300 }}>
            {p.profileNote}{' '}
            <a href="/chefs" style={{ color: 'var(--teal)', fontWeight: 500 }} lang="en" dir="ltr">View chef profiles in English →</a>
          </div>
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
