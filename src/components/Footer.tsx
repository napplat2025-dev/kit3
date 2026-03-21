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
              <div style={{ marginTop: 16, display: 'flex', gap: 12, alignItems: 'center' }}>
                <a href="https://www.facebook.com/kitchenthree" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: '50%', background: 'rgba(168,216,210,0.1)', border: '1px solid rgba(168,216,210,0.25)', color: '#7ab8b0', transition: 'all 0.2s', textDecoration: 'none' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(168,216,210,0.2)'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(168,216,210,0.1)'; (e.currentTarget as HTMLElement).style.color = '#7ab8b0'; }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/kitchen-three/" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: '50%', background: 'rgba(168,216,210,0.1)', border: '1px solid rgba(168,216,210,0.25)', color: '#7ab8b0', transition: 'all 0.2s', textDecoration: 'none' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(168,216,210,0.2)'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(168,216,210,0.1)'; (e.currentTarget as HTMLElement).style.color = '#7ab8b0'; }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
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
