'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const services = [
  { num:'01', title:'Culinary Consulting', slug:'culinary-consulting', tagline:'From Concept to Result', color:'var(--teal)', bg:'var(--teal-light)', kw:'Food Business Consulting Egypt',
    desc:'Kitchen Three partners with food entrepreneurs, corporates, and HORECA operators to build and grow food businesses from the ground up. Our consulting practice covers every dimension — from initial idea through operational excellence.',
    bullets:['Business concept development and feasibility studies','Brand strategy and market positioning','Menu engineering and product development','Guest experience design and service standards','Operational systems and workflow design','Growth strategy and expansion planning'],
    clients:'AUC, Prime Holding, Divine Foodz, Happy Bites',
    articles: [
      { label: 'What does a culinary consultant do?', href: '/blog/what-does-a-culinary-consultant-do-egypt' },
      { label: 'Menu engineering & food costing in Egypt', href: '/blog/menu-engineering-food-costing-egypt' },
    ]},
  { num:'02', title:'Design Services', slug:'design-services', tagline:'Every Visual Touchpoint, Crafted', color:'var(--amber)', bg:'var(--amber-light)', kw:'Food Brand Design Cairo',
    desc:'A food brand is experienced before it is tasted. Kitchen Three designs every visual and sensory touchpoint — from the name on the door to the plate in front of the guest — with precision and intentionality.',
    bullets:['Brand identity and visual identity systems','Restaurant and concept naming','Go-to-market campaigns and launch strategy','Menu design and engineering','Plateware, packaging, and uniforms','Food theater and guest experience design'],
    clients:"Garten, Vinny's Pizza Bar, Gateway School",
    articles: [
      { label: 'Food brand development in Egypt: the complete guide', href: '/blog/food-brand-development-egypt' },
    ]},
  { num:'03', title:'Chef Matchmaking', slug:'chef-matchmaking', tagline:'Michelin-Pedigreed. Precisely Matched.', color:'var(--coral)', bg:'var(--coral-light)', kw:'International Chef Hire Egypt',
    desc:"Kitchen Three maintains an exclusive roster of 10 international chefs — Michelin-pedigreed, award-winning, and globally experienced. We match the right culinary talent to your exact project requirements.",
    bullets:['Access to 10 international chefs across French, Italian, Greek & Egyptian cuisines','Michelin-pedigreed and award-winning credentials','Precise matching to project scope and requirements','Short-term engagements, masterclasses, and long-term placements','Royal wedding and diplomatic event experience','Pastry, pizza, Mediterranean, and patisserie specialists'],
    clients:'Norwegian Embassy, ILO, Sea Queen Fleet',
    articles: [
      { label: 'How to hire a Michelin-star chef in Egypt', href: '/blog/how-to-hire-michelin-star-chef-egypt' },
    ]},
  { num:'04', title:'Recruitment & Training', slug:'recruitment-training', tagline:'Building Culinary Capacity', color:'var(--teal)', bg:'var(--teal-light)', kw:'Culinary Training Cairo',
    desc:"Your kitchen is only as strong as your team. Kitchen Three designs and delivers culinary training programs, recruitment solutions, and team-building experiences that build lasting capacity across your entire food operation.",
    bullets:['Staff training programs tailored to your operation','1-day intensive masterclasses','Food business startup bootcamps','Team building activities and culinary experiences','Chef recruitment and talent sourcing','Performance standards and SOPs development'],
    clients:'AUC, Nestlé Egypt, Maggi',
    articles: []},
  { num:'05', title:'Cloud Kitchen Services', slug:'cloud-kitchen', tagline:'HACCP-Certified. Turnkey Ready.', color:'var(--amber)', bg:'var(--amber-light)', kw:'Cloud Kitchen Services Egypt',
    desc:'Kitchen Three operates and consults on state-of-the-art central kitchen facilities adhering to global HACCP and Codex Alimentarius standards. Whether you need a fully equipped production facility or short-term rental kitchen, we have the infrastructure.',
    bullets:['Brick & mortar and fully equipped central kitchens','Turnkey kitchen operations management','Short-term and long-term rental options','HACCP protocol implementation and certification','Codex Alimentarius compliance','Zero-waste kitchen design and operations'],
    clients:'Prime Holding, Sea Queen Fleet, Divine Foodz',
    articles: [
      { label: 'How to start a cloud kitchen in Egypt: the complete guide', href: '/blog/cloud-kitchen-egypt-guide' },
    ]},
  { num:'06', title:'Technology Infrastructure', slug:'technology', tagline:'A Complete Digital Stack for Food Businesses', color:'var(--coral)', bg:'var(--coral-light)', kw:'Restaurant Technology Egypt',
    desc:'Modern food businesses run on technology. Kitchen Three designs and deploys complete digital infrastructure for restaurants, cloud kitchens, and food brands — from the first online order to the loyalty program that keeps customers coming back.',
    bullets:['Online menu builder and digital menu management','Ordering systems and delivery integration','Reservations and table management','Mobile app development for food businesses','Payment processing and POS integration','CRM, loyalty programs, and customer retention tools'],
    clients:"Garten, Vinny's Pizza Bar, Happy Bites",
    articles: []},
  { num:'07', title:'Site Selection & Lease Advisory', slug:'site-selection', tagline:'The Right Location. The Right Terms.', color:'var(--teal)', bg:'var(--teal-light)', kw:'Restaurant Location Hunting Cairo',
    desc:"Location is one of the most consequential decisions in any F&B venture — and one of the most underserved. Kitchen Three brings 13 years of Cairo market knowledge to every site decision, from foot traffic analysis and competitive mapping to lease negotiation and landlord management. We don't just find you a space — we find you the right space.",
    bullets:['Foot traffic analysis and catchment area mapping','Competitive landscape assessment per location','Lease negotiation and landlord management','F&B-specific fit-out and compliance assessment','Site shortlisting and comparative evaluation','End-to-end location management from search to signed lease'],
    clients:"Vinny's Pizza Bar, Garten, Mori, Wok & Wok",
    articles: []},
  { num:'08', title:'F&B Financial Turnaround', slug:'financial-turnaround', tagline:'Diagnose. Stabilise. Recover.', color:'var(--amber)', bg:'var(--amber-light)', kw:'F&B Turnaround Consulting Egypt',
    desc:'Not every engagement starts at concept stage. Some of the most important work Kitchen Three does is with operations that are already open — but struggling. Whether margins have collapsed, costs have spiralled, or the concept has lost direction, we bring the diagnostic rigour and operational expertise to identify what is broken and build a clear, executable path back to profitability.',
    bullets:['Operational cost audit and P&L diagnostic','Menu restructure for margin and efficiency recovery','Supplier and procurement review and renegotiation','Staff performance assessment and restructuring guidance','Concept repositioning and brand realignment','Ongoing financial monitoring and recovery milestones'],
    clients:'Available for all operation types and scales — enquire to discuss your situation.',
    articles: []},
  { num:'09', title:'Market Research & Feasibility Studies', slug:'market-research-feasibility', tagline:'Every Serious Business Decision Starts With The Right Data', color:'var(--coral)', bg:'var(--coral-light)', kw:'Feasibility Studies Egypt',
    desc:'Structured market intelligence and investor-ready feasibility studies — covering market sizing, competitive landscape, consumer demand, financial projections, and pricing strategy. Clarity before capital commitment.',
    bullets:['Business Overview & Financial Analysis — diagnostic for existing businesses (P&L review, KPI benchmarking, SWOT). 7–10 days.','Market Research & Deep Scan — TAM/SAM sizing, competitive mapping, demand & trend analysis. 10–14 days.','Feasibility Study — full investor-ready document with CAPEX, P&L scenarios, break-even & ROI. 14–21 days.','Pricing Strategy — COGS per SKU, competitive benchmarking, positioning-led pricing & sensitivity analysis. 5–8 days.','Bankable, investor-ready deliverables built to be acted on','Led by Amr Salah — 4+ years at a leading MEA real estate developer, F&B specialist'],
    clients:'Led by Amr Salah — Market Research & Feasibility Consultant, Kitchen Three.',
    articles: []},
]

export default function ServicesClient() {
  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)' }}>
      <Nav />

      <section style={{ background: 'linear-gradient(135deg, var(--teal-light) 0%, var(--cream) 60%)', padding: '80px 24px 64px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <nav style={{ marginBottom: 24, fontSize: 12, color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            <a href="/" style={{ color: '#999' }}>Home</a> <span style={{ margin: '0 10px', color: '#ccc' }}>›</span>
            <span style={{ color: 'var(--teal)' }}>Services</span>
          </nav>
          <div className="eyebrow" style={{ color: 'var(--amber)' }}>What We Do</div>
          <h1 style={{ color: 'var(--forest)', maxWidth: 700, marginBottom: 20 }}>
            Fully Fledged Culinary Services<br /><em style={{ color: 'var(--teal)' }}>Under One Roof</em>
          </h1>
          <p style={{ fontSize: 17, color: 'var(--muted)', maxWidth: 600, lineHeight: 1.9, fontWeight: 300 }}>
            Nine integrated service pillars designed to take your food business from concept to operational excellence — and to recover and grow operations that need a reset. Whether launching, scaling, or transforming — Kitchen Three has the expertise, the talent, and the tools.
          </p>
        </div>
      </section>

      <section style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '0 24px', overflowX: 'auto' }}>
        <div className="container" style={{ display: 'flex' }}>
          {services.map(s => (
            <a key={s.num} href={`#${s.slug}`} style={{ padding: '18px 20px', fontSize: 11, letterSpacing: '0.08em', color: '#666', whiteSpace: 'nowrap', borderBottom: '2px solid transparent', transition: 'all 0.2s', fontWeight: 500, textTransform: 'uppercase' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--teal)'; (e.currentTarget as HTMLElement).style.borderBottomColor = 'var(--teal)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#666'; (e.currentTarget as HTMLElement).style.borderBottomColor = 'transparent' }}>
              {s.num} {s.title}
            </a>
          ))}
        </div>
      </section>

      {services.map((s, i) => (
        <section key={s.slug} id={s.slug} style={{ padding: '80px 24px', background: i % 2 === 0 ? 'var(--cream)' : '#fff', borderBottom: '1px solid var(--border)' }}>
          <div className="container service-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}>
            <div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 88, fontWeight: 300, color: s.bg, lineHeight: 1, marginBottom: 8 }}>{s.num}</div>
              <div className="badge" style={{ background: s.bg, color: s.color, marginBottom: 20 }}>{s.kw}</div>
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', color: 'var(--forest)', marginBottom: 12 }}>{s.title}</h2>
              <div style={{ fontSize: 13, color: s.color, letterSpacing: '0.1em', marginBottom: 24, fontWeight: 500, textTransform: 'uppercase' }}>{s.tagline}</div>
              <div style={{ padding: '16px 20px', background: s.bg, borderRadius: 'var(--radius)', borderLeft: `3px solid ${s.color}` }}>
                <div style={{ fontSize: 11, color: s.color, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, marginBottom: 6 }}>Notable Clients</div>
                <div style={{ fontSize: 13, color: '#555', fontWeight: 300 }}>{s.clients}</div>
              </div>
              {s.slug === 'recruitment-training' && (
                <a href="/academy" style={{ display: 'inline-block', marginTop: 16, fontSize: 13, color: 'var(--teal)', fontWeight: 500, textDecoration: 'none', borderBottom: '1px solid var(--teal-mid)', paddingBottom: 2 }}>
                  Explore Kitchen Three Academy →
                </a>
              )}
              {s.articles.length > 0 && (
                <div style={{ marginTop: 24 }}>
                  <div style={{ fontSize: 11, color: '#999', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500, marginBottom: 10 }}>Related Reading</div>
                  {s.articles.map(a => (
                    <a key={a.href} href={a.href} style={{ display: 'block', fontSize: 13, color: s.color, fontWeight: 500, textDecoration: 'none', borderBottom: '1px solid transparent', paddingBottom: 2, marginBottom: 8, transition: 'border-color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderBottomColor = s.color}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderBottomColor = 'transparent'}>
                      {a.label} →
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div>
              <p style={{ fontSize: 16, color: '#555', lineHeight: 1.9, fontWeight: 300, marginBottom: 36 }}>{s.desc}</p>
              <div className="bullets-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {s.bullets.map((b, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '14px 16px', background: s.bg, borderRadius: 'var(--radius)' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: s.color, flexShrink: 0, marginTop: 6 }} />
                    <span style={{ fontSize: 13, color: '#444', lineHeight: 1.6, fontWeight: 300 }}>{b}</span>
                  </div>
                ))}
              </div>
              <a href="/contact" className="btn btn-primary" style={{ marginTop: 32 }}>Enquire About This Service</a>
            </div>
          </div>
        </section>
      ))}

      {/* Investment Panel */}
      <section style={{ padding: '80px 24px', background: 'var(--forest)', borderBottom: '1px solid rgba(168,216,210,0.15)' }}>
        <div className="container">
          <div className="invest-services-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <div className="eyebrow" style={{ color: 'var(--amber)' }}>Beyond Consulting</div>
              <h2 style={{ color: '#fff', marginBottom: 16 }}>
                Investment <em style={{ color: 'var(--amber)' }}>Opportunities</em>
              </h2>
              <p style={{ fontSize: 16, color: '#7ab8b0', lineHeight: 1.9, fontWeight: 300, marginBottom: 32 }}>
                Kitchen Three periodically develops and co-invests in Egypt F&B ventures — from certified production infrastructure to culinary concept ventures. When an opportunity opens, our network hears first.
              </p>
              <a href="/invest" className="btn btn-white">Interested in Investment Opportunities →</a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { icon: '🏗', label: 'Production Infrastructure' },
                { icon: '🍽', label: 'Culinary Concept Ventures' },
                { icon: '🎓', label: 'Education & Training Assets' },
                { icon: '📈', label: 'Egypt F&B Growth Market' },
              ].map(item => (
                <div key={item.label} style={{ padding: '20px 16px', background: 'rgba(168,216,210,0.07)', border: '1px solid rgba(168,216,210,0.15)', borderRadius: 'var(--radius)', textAlign: 'center' }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                  <div style={{ fontSize: 12, color: '#a8d8d2', fontWeight: 400, lineHeight: 1.5 }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--forest)', padding: '80px 24px', textAlign: 'center', borderTop: '1px solid rgba(168,216,210,0.15)' }}>
        <div className="container" style={{ maxWidth: 640 }}>
          <div className="eyebrow" style={{ color: 'var(--amber)' }}>Ready to Start?</div>
          <h2 style={{ color: '#fff', marginBottom: 20 }}>Let's Build Something <em style={{ color: 'var(--amber)' }}>Extraordinary</em></h2>
          <p style={{ fontSize: 15, color: '#7ab8b0', marginBottom: 36, fontWeight: 300, lineHeight: 1.8 }}>Available for consulting engagements across Egypt and the MENA region.</p>
          <a href="/contact" className="btn btn-white">Get In Touch</a>
        </div>
      </section>

      <Footer />
      <style>{`
        @media (max-width: 768px) {
          .invest-services-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </div>
  )
}
