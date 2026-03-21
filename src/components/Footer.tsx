export default function Footer() {
  return (
    <footer style={{ background: 'var(--forest)', color: '#a8d8d2', padding: '56px 24px 32px' }}>
      <div className="container">
        <div className="footer-grid" style={{ marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 500, color: '#fff', letterSpacing: '0.06em', marginBottom: 6 }}>KITCHEN THREE</div>
            <div style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--coral)', textTransform: 'uppercase', marginBottom: 16 }}>Premium Quality Creations</div>
            <p style={{ fontSize: 13, lineHeight: 1.9, color: '#7ab8b0', fontWeight: 300, maxWidth: 280 }}>Egypt's leading B2B culinary consultancy. Empowering food businesses since 2013 with world-class chefs, HACCP-certified operations, and end-to-end culinary solutions.</p>
            <div style={{ marginTop: 24, fontSize: 13, color: '#7ab8b0' }}>
              <div>Cairo, Egypt</div>
              <div><a href="mailto:info@kitchenthree.co" style={{ color: 'var(--teal-mid)', transition: 'color 0.2s' }}>info@kitchenthree.co</a></div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.16em', color: '#fff', textTransform: 'uppercase', fontWeight: 500, marginBottom: 20 }}>Services</div>
            {['Culinary Consulting', 'Design Services', 'Chef Matchmaking', 'Recruitment & Training', 'Cloud Kitchen', 'Technology'].map(s => (
              <a key={s} href="/services" style={{ display: 'block', fontSize: 13, color: '#7ab8b0', marginBottom: 10, fontWeight: 300, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--teal-mid)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#7ab8b0'}>{s}</a>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.16em', color: '#fff', textTransform: 'uppercase', fontWeight: 500, marginBottom: 20 }}>Company</div>
            {[['Our Chefs', '/chefs'], ['Clients', '/clients'], ['Blog', '/blog'], ['Resources', '/resources'], ['Team', '/team'], ['Contact', '/#contact']].map(([label, href]) => (
              <a key={label} href={href} style={{ display: 'block', fontSize: 13, color: '#7ab8b0', marginBottom: 10, fontWeight: 300, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--teal-mid)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#7ab8b0'}>{label}</a>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.16em', color: '#fff', textTransform: 'uppercase', fontWeight: 500, marginBottom: 20 }}>Certifications</div>
            {['HACCP Certified', 'Codex Alimentarius', 'Est. Cairo 2013', 'B2B Consultancy'].map(c => (
              <div key={c} style={{ fontSize: 13, color: '#7ab8b0', marginBottom: 10, fontWeight: 300 }}>{c}</div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(168,216,210,0.15)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ fontSize: 12, color: '#4a8a80' }}>© 2026 Kitchen Three LLC — Cairo, Egypt. All rights reserved.</div>
          <div style={{ fontSize: 11, letterSpacing: '0.12em', color: '#4a8a80', textTransform: 'uppercase' }}>B2B Culinary Consultancy · Est. 2013</div>
        </div>
      </div>
    </footer>
  )
}
