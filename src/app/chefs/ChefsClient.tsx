'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const chefs = [
  { slug: 'yann-bonneau', name: 'Yann Bonneau', country: 'France', title: 'Pastry Chef & International Consultant', photo: '/images/chefs/yann-bonneau.jpg', color: 'var(--teal)', bg: 'var(--teal-light)', alt: 'Yann Bonneau — French Michelin pastry chef and international culinary consultant available for hire in Egypt through Kitchen Three' },
  { slug: 'enzo-bonneau', name: 'Enzo Bonneau', country: 'France', title: 'Michelin-Trained Pastry Chef & Consultant', photo: '/images/chefs/enzo-bonneau.jpg', color: 'var(--amber)', bg: 'var(--amber-light)', alt: 'Enzo Bonneau — Michelin-trained French pastry chef and culinary consultant available for hire in Egypt through Kitchen Three' },
  { slug: 'niko-koulousias', name: 'Niko Koulousias', country: 'Greece', title: 'Executive Chef & Royal Event Specialist', photo: '/images/chefs/niko-koulousias.jpg', color: 'var(--coral)', bg: 'var(--coral-light)', alt: 'Niko Koulousias — Greek executive chef and royal event specialist available for hire in Egypt through Kitchen Three' },
  { slug: 'hadil-amasheh', name: 'Hadil Amasheh', country: 'Jordan / Egypt', title: 'F&B Entrepreneur & Culinary Consultant', photo: '/images/chefs/hadil-amasheh.jpg', color: 'var(--teal)', bg: 'var(--teal-light)', alt: 'Hadil Amasheh — Jordanian-Egyptian F&B entrepreneur and culinary consultant, co-founder of Kitchen Three Cairo' },
  { slug: 'gerard-livigni', name: 'Gerard Livigni', country: 'France', title: 'MOF Finalist & Master Baker', photo: '/images/chefs/gerard-livigni.jpg', color: 'var(--amber)', bg: 'var(--amber-light)', alt: 'Gerard Livigni — French MOF finalist and master baker available for artisan bread and bakery consulting in Egypt through Kitchen Three' },
  { slug: 'ramy-somoeil', name: 'Ramy Somoeil', country: 'Egypt', title: 'Mediterranean & Levantine Cuisine Expert', photo: '/images/chefs/ramy-somoeil.jpg', color: 'var(--coral)', bg: 'var(--coral-light)', alt: 'Ramy Somoeil — Egyptian chef specialising in Mediterranean and Levantine cuisine available for consulting in Egypt through Kitchen Three' },
  { slug: 'walid-karim', name: 'Walid Karim', country: 'Egypt', title: 'Pizza Master & Italian Cuisine Specialist', photo: '/images/chefs/walid-karim.jpg', color: 'var(--teal)', bg: 'var(--teal-light)', alt: 'Walid Karim — Egyptian pizza master and Italian cuisine specialist available for restaurant consulting in Egypt through Kitchen Three' },
  { slug: 'giovani-mascari', name: 'Giovani Mascari', country: 'Italy', title: 'Executive Pizzaiolo & Innovation Chef', photo: '/images/chefs/giovani-mascari.jpg', color: 'var(--amber)', bg: 'var(--amber-light)', alt: 'Giovani Mascari — Italian executive pizzaiolo and innovation chef available for hire in Egypt through Kitchen Three' },
  { slug: 'luca-montersino', name: 'Luca Montersino', country: 'Italy', title: 'Pastry Celebrity & F&B Empire Builder', photo: '/images/chefs/luca-montersino.jpg', color: 'var(--coral)', bg: 'var(--coral-light)', alt: 'Luca Montersino — Italian celebrity pastry chef and F&B entrepreneur available for consulting and events in Egypt through Kitchen Three' },
  { slug: 'luca-borgioli', name: 'Luca Borgioli', country: 'Italy', title: 'World Panettone Champion', photo: '/images/chefs/luca-borgioli.jpg', color: 'var(--teal)', bg: 'var(--teal-light)', alt: 'Luca Borgioli — World Panettone Champion and Italian artisan pastry chef available for hire in Egypt through Kitchen Three' },
]

function ChefCard({ c }: { c: typeof chefs[0] }) {
  return (
    <a href={'/chefs/' + c.slug} style={{ textDecoration: 'none', display: 'block', borderRadius: 4, overflow: 'hidden', border: '1px solid var(--border)', background: '#fff' }}>
      <div style={{ width: '100%', height: 220, overflow: 'hidden', background: c.bg }}>
        <img loading="lazy" src={c.photo} alt={c.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
      </div>
      <div style={{ padding: '18px 20px 20px' }}>
        <div style={{ fontSize: 10, color: c.color, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 6 }}>{c.country}</div>
        <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--forest)', marginBottom: 6 }}>{c.name}</div>
        <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 14 }}>{c.title}</div>
        <div style={{ fontSize: 12, color: c.color, fontWeight: 600 }}>View profile →</div>
      </div>
    </a>
  )
}

export default function ChefsClient() {
  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)', color: 'var(--ink)' }}>
      <Nav />
      <section style={{ background: 'var(--forest)', padding: '80px 0 64px' }}>
        <div className="container">
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, color: '#ffffff', marginBottom: 20, lineHeight: 1.1 }}>
            A Powerhouse Lineup of <em style={{ color: 'var(--amber)' }}>Culinary Masters</em>
          </h1>
          <p style={{ fontSize: 17, color: '#d4efeb', maxWidth: 580, lineHeight: 1.8, fontWeight: 300 }}>
            10 international chefs — Michelin-pedigreed, royal event specialists, and award-winning culinary masters. Click any chef to view their full profile.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid-4" style={{ gap: 24 }}>
            {chefs.map(c => <ChefCard key={c.slug} c={c} />)}
          </div>
        </div>
      </section>
      <section style={{ background: 'var(--forest)', padding: '72px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: 560, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3vw, 42px)', color: '#ffffff', marginBottom: 16 }}>
              Ready to Find Your <em style={{ color: 'var(--amber)' }}>Perfect Chef?</em>
            </h2>
            <p style={{ fontSize: 15, color: '#d4efeb', fontWeight: 300, lineHeight: 1.8, marginBottom: 32 }}>
              Tell us about your project and we will match you with the right talent from our roster.
            </p>
            <a href="/contact" className="btn btn-white">Start the Conversation</a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
