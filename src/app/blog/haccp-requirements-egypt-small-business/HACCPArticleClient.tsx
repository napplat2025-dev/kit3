'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function HACCPArticleClient() {
  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)', color: 'var(--ink)' }}>
      <Nav />

      {/* Hero */}
      <section style={{ background: 'var(--forest)', padding: '80px 0 64px' }}>
        <div className="container">
          <div style={{ maxWidth: 760 }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20, flexWrap: 'wrap' }}>
              <span style={{ background: 'var(--amber-light)', color: 'var(--amber)', padding: '4px 12px', borderRadius: 2, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>Compliance</span>
              <span style={{ fontSize: 12, color: '#7ab8b0' }}>8 min read</span>
              <span style={{ fontSize: 12, color: '#7ab8b0' }}>·</span>
              <span style={{ fontSize: 12, color: '#7ab8b0' }}>February 2025</span>
            </div>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 400, color: '#ffffff', marginBottom: 20, lineHeight: 1.15 }}>
              HACCP Requirements for Small Food Businesses in Egypt
            </h1>
            <p style={{ fontSize: 16, color: '#d4efeb', fontWeight: 300, lineHeight: 1.8, marginBottom: 24, fontStyle: 'italic' }}>
              What Every Egyptian Food Entrepreneur Needs to Know
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Food Safety', 'NFSA', 'Compliance', 'HACCP'].map(t => (
                <span key={t} style={{ background: 'rgba(168,216,210,0.12)', color: '#7ab8b0', padding: '3px 10px', borderRadius: 2, fontSize: 10, letterSpacing: '0.08em' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 56, alignItems: 'start' }}>

            {/* Main content */}
            <article>

              <p style={prose}>
                If you run a restaurant, cloud kitchen, food production unit, or small food manufacturing business in Egypt, you have probably heard the term HACCP thrown around. Maybe during an NFSA inspection, a supplier audit, or a conversation about getting certified. But what does it actually mean — and does it apply to you?
              </p>
              <p style={prose}>
                This article breaks down HACCP in plain language — what it is, why it matters, how Egypt's regulatory framework connects to it, and what small food businesses can realistically do to get started.
              </p>

              <h2 style={h2}>What Is HACCP?</h2>
              <p style={prose}>
                HACCP stands for Hazard Analysis and Critical Control Points. It is a globally recognised, science-based system for identifying and controlling food safety hazards before they cause harm. Rather than testing finished products and hoping for the best, HACCP takes a preventive approach — it asks: where in our process could something go wrong, and what can we do to stop it?
              </p>
              <p style={prose}>
                The system was originally developed in the late 1950s for NASA's space food program, where the stakes of a contaminated meal were unusually high. Over the following decades, it was adopted by food regulators and industry bodies worldwide, and today it forms the backbone of virtually every major food safety standard — including ISO 22000, the Global Food Safety Initiative (GFSI) schemes, and the Codex Alimentarius guidelines that Egypt's National Food Safety Authority (NFSA) uses as its international benchmark.
              </p>

              {/* Callout box */}
              <div style={callout('var(--teal)', 'var(--teal-light)')}>
                <div style={calloutTitle('var(--teal)')}>The Core Idea Behind HACCP</div>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.8, margin: 0 }}>
                  Traditional quality control asks: "Did this product turn out safe?"<br />
                  HACCP asks: "At what points in our process could a hazard occur, and how do we control it?"<br /><br />
                  It is the difference between <strong>reactive</strong> and <strong>preventive</strong> food safety management.
                </p>
              </div>

              <h2 style={h2}>The 7 Principles of HACCP</h2>
              <p style={prose}>
                HACCP is built on seven internationally recognised principles. Whether you are running a bakery in Heliopolis or a sauce manufacturing unit in the Tenth of Ramadan industrial zone, these principles are the same:
              </p>

              {[
                { num: '01', title: 'Conduct a Hazard Analysis', body: 'Identify all biological, chemical, and physical hazards at every step of your process — from receiving ingredients to serving the final product.' },
                { num: '02', title: 'Identify Critical Control Points (CCPs)', body: 'Pinpoint the specific steps where controls are essential to prevent or eliminate a food safety hazard — such as cooking temperature or chilling time.' },
                { num: '03', title: 'Establish Critical Limits', body: 'Set measurable standards for each CCP — for example, cooking poultry to a minimum internal temperature of 74°C.' },
                { num: '04', title: 'Establish Monitoring Procedures', body: 'Define how and how often each CCP will be monitored, and who is responsible for checking it.' },
                { num: '05', title: 'Establish Corrective Actions', body: 'Decide in advance what to do if a CCP falls outside its critical limit — re-cook, discard, or hold a batch.' },
                { num: '06', title: 'Establish Verification Procedures', body: 'Confirm the plan is working through periodic audits, equipment calibration, and end-product testing.' },
                { num: '07', title: 'Establish Record-Keeping & Documentation', body: 'Maintain written records of monitoring activities, corrective actions, and verification results for inspection and accountability.' },
              ].map(p => (
                <div key={p.num} style={{ display: 'flex', gap: 16, marginBottom: 16, background: '#fff', border: '1px solid var(--border)', borderRadius: 4, padding: '16px 20px' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 32, fontWeight: 300, color: 'var(--amber)', opacity: 0.4, lineHeight: 1, flexShrink: 0, width: 48 }}>{p.num}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--forest)', marginBottom: 4 }}>{p.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300 }}>{p.body}</div>
                  </div>
                </div>
              ))}

              <h2 style={h2}>HACCP and Egypt's Regulatory Framework</h2>
              <h3 style={h3}>The Role of the NFSA</h3>
              <p style={prose}>
                Egypt's food safety landscape was transformed by Law No. 1 of 2017, which established the National Food Safety Authority (NFSA). Before this law, food safety oversight was fragmented across more than 17 separate government bodies — creating confusion, regulatory gaps, and inconsistent enforcement across the supply chain.
              </p>
              <p style={prose}>
                The NFSA now serves as the single unified authority responsible for regulating all food produced, marketed, distributed, or consumed in Egypt — whether local or imported. Its standards are explicitly benchmarked against the Codex Alimentarius system, which is the same international framework from which HACCP principles are derived.
              </p>

              <div style={callout('var(--forest)', '#e8f0ec')}>
                <div style={calloutTitle('var(--forest)')}>Key Egyptian Regulatory Reference Points</div>
                {[
                  'Law No. 1 of 2017 — Establishing the NFSA as the unified food safety regulator',
                  'Prime Ministerial Decrees 683 & 1733 (2017) — NFSA board structure',
                  'NFSA Decision No. 16/2022 — Food Traceability Requirements',
                  'NFSA Decision No. 17/2022 — Technical Rules for Food Contact Materials',
                  'Codex Alimentarius — International benchmark for all NFSA standards',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--teal)', flexShrink: 0, marginTop: 6 }} />
                    <span style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>

              <h3 style={h3}>Does Egyptian Law Require HACCP for Small Businesses?</h3>
              <p style={prose}>
                This is where Egyptian food businesses often get confused. The short answer is: HACCP is not yet universally mandatory for all small food businesses in Egypt under a single enforced decree. However, the regulatory direction is unmistakably moving toward HACCP-based compliance — and for several categories of businesses, it is effectively required today.
              </p>
              {[
                'Food manufacturers and processors seeking an NFSA operating licence are expected to demonstrate a documented HACCP plan as part of the licensing process.',
                'Export-oriented businesses face the strictest requirements. If you are producing food for the EU, Gulf markets, or other regulated destinations, a certified HACCP system is almost always a contractual and regulatory necessity.',
                'Fast-food restaurants, food service operations, and cloud kitchens fall under growing NFSA scrutiny, particularly as the authority\'s strategy through 2026 targets food service compliance as a key pillar.',
                'Businesses pursuing ISO 22000 certification — increasingly expected by major retail chains and institutional buyers in Egypt — will find that HACCP is a foundational requirement embedded within that standard.',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 12, alignItems: 'flex-start', padding: '12px 16px', background: 'var(--teal-light)', borderRadius: 4, borderLeft: '3px solid var(--teal)' }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 10, color: '#fff', fontWeight: 600 }}>{i + 1}</div>
                  <span style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>{item}</span>
                </div>
              ))}

              <h2 style={h2}>What Are the Main Hazard Categories in HACCP?</h2>
              <p style={prose}>The first step in any HACCP plan is a hazard analysis — identifying what could go wrong in your specific operation. Hazards fall into three main categories:</p>

              {[
                { title: '1. Biological Hazards', color: 'var(--coral)', bg: 'var(--coral-light)', body: 'The most common and typically the most serious. These include bacteria (Salmonella, E. coli, Listeria), viruses, parasites, and molds. In Egypt\'s high-temperature climate, temperature control and cross-contamination are particularly critical biological hazard points.' },
                { title: '2. Chemical Hazards', color: 'var(--amber)', bg: 'var(--amber-light)', body: 'Pesticide residues on produce, cleaning chemical contamination, food additive overuse, allergen cross-contact, and unauthorised colorings or preservatives. The NFSA has been particularly active in regulating trans fat levels and chemical residue limits in line with Codex standards.' },
                { title: '3. Physical Hazards', color: 'var(--teal)', bg: 'var(--teal-light)', body: 'Foreign objects that could injure a consumer — glass, metal fragments, bone splinters, plastic pieces, or stones. Especially relevant in operations involving raw agricultural inputs or manual processing.' },
              ].map(h => (
                <div key={h.title} style={{ background: h.bg, border: '1px solid ' + h.color + '44', borderRadius: 4, padding: '20px 24px', marginBottom: 12 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--forest)', marginBottom: 8 }}>{h.title}</div>
                  <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.8, margin: 0, fontWeight: 300 }}>{h.body}</p>
                </div>
              ))}

              <div style={callout('var(--amber)', 'var(--amber-light)')}>
                <div style={calloutTitle('var(--amber)')}>Egypt-Specific Risk Context</div>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.8, margin: 0 }}>
                  Egypt's high average temperatures mean cold chain management is a critical CCP for most food businesses. The NFSA has specifically flagged trans fat content as a national public health priority, with new standards affecting fats, oils, dairy, frozen foods, and fast-food operations from 2024 onward. Water quality for food preparation and cleaning is also a relevant hazard consideration in many regions.
                </p>
              </div>

              <h2 style={h2}>Getting Started: A Practical Roadmap for Small Businesses</h2>
              <p style={prose}>Implementing HACCP can feel overwhelming if you try to do everything at once. For small food businesses, a phased approach is both realistic and effective.</p>

              {[
                { phase: 'Phase 1', sub: 'Build Your Foundation — Months 1–2', steps: [
                  'Assemble your food safety team — even if it is just you and one other trained person.',
                  'Describe your products and their intended use — who eats them, how they are prepared, stored, and distributed.',
                  'Create a process flow diagram — map every step from receiving ingredients to delivering the final product.',
                  'Identify and verify your hazards at each step in the process flow.',
                ]},
                { phase: 'Phase 2', sub: 'Build Your HACCP Plan — Months 2–3', steps: [
                  'Use the Codex decision tree to identify your Critical Control Points (CCPs).',
                  'Set critical limits for each CCP — based on Egyptian standards and Codex guidelines.',
                  'Establish monitoring procedures: who checks what, how often, and with what equipment.',
                  'Write corrective action protocols for each CCP in case a limit is breached.',
                ]},
                { phase: 'Phase 3', sub: 'Implement and Document — Ongoing', steps: [
                  'Train all relevant staff on monitoring responsibilities and corrective actions.',
                  'Begin maintaining monitoring logs and records. The NFSA expects records to be current and accessible.',
                  'Conduct internal verification audits regularly — ideally quarterly at minimum.',
                  'Review and update the plan whenever your menu, process, or ingredients change significantly.',
                ]},
              ].map((ph, pi) => (
                <div key={ph.phase} style={{ marginBottom: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <div style={{ background: 'var(--forest)', color: '#fff', padding: '4px 12px', borderRadius: 2, fontSize: 10, fontWeight: 600, letterSpacing: '0.1em' }}>{ph.phase.toUpperCase()}</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--forest)' }}>{ph.sub}</div>
                  </div>
                  {ph.steps.map((step, si) => (
                    <div key={si} style={{ display: 'flex', gap: 12, marginBottom: 8, alignItems: 'flex-start' }}>
                      <div style={{ width: 22, height: 22, borderRadius: '50%', border: '1.5px solid var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 10, color: 'var(--teal)', fontWeight: 600 }}>{pi * 4 + si + 1}</div>
                      <span style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>{step}</span>
                    </div>
                  ))}
                </div>
              ))}

              <h2 style={h2}>Common Mistakes Small Food Businesses Make</h2>
              {[
                { title: 'Writing a plan that sits in a drawer', body: 'HACCP is a living system, not a one-time document. It must be actively used, monitored, and updated.' },
                { title: 'Identifying too many CCPs', body: 'Not every step is a CCP — only those where a control measure is essential to prevent an unacceptable health risk. Over-complicating the plan makes it unmanageable.' },
                { title: 'Ignoring prerequisite programs', body: 'HACCP assumes a foundation of Good Manufacturing Practices (GMP) and Good Hygiene Practices (GHP). Without clean facilities, trained staff, pest control, and safe water supply, HACCP cannot function.' },
                { title: 'Failing to update the plan', body: 'If you add a new product, change a supplier, or modify your cooking process, your HACCP plan must be reviewed and updated accordingly.' },
                { title: 'No staff training', body: 'A HACCP plan is only as effective as the people implementing it. Monitoring is useless if staff do not understand why they are doing it or what to do when something is out of range.' },
              ].map(m => (
                <div key={m.title} style={{ display: 'flex', gap: 12, marginBottom: 12, padding: '14px 18px', background: '#fff', border: '1px solid var(--border)', borderRadius: 4, borderLeft: '3px solid var(--coral)' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--coral)', flexShrink: 0, marginTop: 6 }} />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--forest)', marginBottom: 4 }}>{m.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300 }}>{m.body}</div>
                  </div>
                </div>
              ))}

              <h2 style={h2}>The Business Case for HACCP</h2>
              <p style={prose}>Beyond regulatory compliance, HACCP makes commercial sense — and this is an argument that does not get made often enough in Egypt's food sector.</p>
              {[
                { title: 'Access to modern trade', body: 'Major Egyptian supermarket chains and hypermarkets are increasingly requiring food safety certification from suppliers. HACCP is the minimum expected standard.' },
                { title: 'Export readiness', body: 'If you have ambitions to supply the Gulf, Europe, or any regulated market, HACCP is the entry ticket. Egypt\'s export-oriented food manufacturers are well aware of this reality.' },
                { title: 'Reduced waste and recalls', body: 'A functioning HACCP system catches problems before they become batch failures, product recalls, or customer illness. The cost of prevention is always lower than the cost of a recall.' },
                { title: 'Brand trust', body: 'Egyptian consumers are becoming more food-safety conscious, particularly in urban centres and among younger demographics. A business that can credibly demonstrate food safety practices builds stronger brand equity.' },
                { title: 'Insurance and liability', body: 'In the event of a food safety incident, documented compliance with HACCP principles is one of the strongest legal protections a business can have.' },
              ].map(b => (
                <div key={b.title} style={{ display: 'flex', gap: 16, marginBottom: 12, padding: '14px 18px', background: 'var(--teal-light)', border: '1px solid var(--teal-mid)', borderRadius: 4 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)', flexShrink: 0, marginTop: 6 }} />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--forest)', marginBottom: 4 }}>{b.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300 }}>{b.body}</div>
                  </div>
                </div>
              ))}

              <h2 style={h2}>Final Thoughts</h2>
              <p style={prose}>
                HACCP is not a luxury reserved for large multinational food corporations. It is a practical, scalable, and increasingly necessary system for any food business that wants to operate safely, compliantly, and competitively in Egypt.
              </p>
              <p style={prose}>
                The NFSA's trajectory is clear: Egypt's food safety standards are moving progressively closer to international benchmarks. Businesses that build genuine HACCP systems now — not just paper compliance — will be better positioned for licensing, export, retail partnerships, and consumer trust in the years ahead.
              </p>
              <p style={prose}>
                The 7 principles are logical and learnable. The documentation is manageable with the right approach. And the alternative — operating without a system and hoping nothing goes wrong — carries risks that no small business should be comfortable taking.
              </p>

              {/* Key Takeaways */}
              <div style={{ background: 'var(--forest)', borderRadius: 4, padding: '28px 32px', marginTop: 32 }}>
                <div style={{ fontSize: 11, letterSpacing: '0.16em', color: 'var(--amber)', textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>Key Takeaways</div>
                {[
                  'HACCP is a preventive, science-based food safety management system built on 7 principles',
                  "Egypt's NFSA benchmarks its standards against the Codex Alimentarius — the same framework as HACCP",
                  'HACCP is effectively required for NFSA-licensed manufacturers, exporters, and ISO 22000 applicants',
                  'Small businesses should start with GMP/GHP foundations before building their HACCP plan',
                  'HACCP records must be maintained and kept current — they are your primary compliance evidence',
                  'Beyond compliance, HACCP is a commercial asset that opens doors to retail, export, and institutional markets',
                ].map(t => (
                  <div key={t} style={{ display: 'flex', gap: 12, marginBottom: 10, alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--teal)', fontSize: 14, flexShrink: 0, marginTop: 2 }}>✓</div>
                    <span style={{ fontSize: 13, color: '#d4efeb', lineHeight: 1.7, fontWeight: 300 }}>{t}</span>
                  </div>
                ))}
              </div>

              {/* Disclaimer */}
              <div style={{ marginTop: 24, padding: '16px 20px', background: '#fff', border: '1px solid var(--border)', borderRadius: 4 }}>
                <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
                  This article is intended for educational purposes and provides a general overview of HACCP principles and their application within Egypt's regulatory framework. For specific compliance advice, businesses should consult directly with the NFSA or an accredited food safety consultant.
                </p>
              </div>

            </article>

            {/* Sidebar */}
            <aside style={{ position: 'sticky', top: 24 }}>
              <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 4, padding: '20px', marginBottom: 16 }}>
                <div style={{ fontSize: 10, letterSpacing: '0.14em', color: 'var(--amber)', textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>About the Author</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 16, color: 'var(--forest)', marginBottom: 4 }}>Kitchen Three</div>
                <div style={{ fontSize: 11, color: 'var(--teal)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>B2B Culinary Consultancy</div>
                <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300 }}>Egypt's leading culinary consultancy since 2013. HACCP certified, Codex Alimentarius compliant.</p>
              </div>

              <div style={{ background: 'var(--teal-light)', border: '1px solid var(--teal-mid)', borderRadius: 4, padding: '20px', marginBottom: 16 }}>
                <div style={{ fontSize: 10, letterSpacing: '0.14em', color: 'var(--teal)', textTransform: 'uppercase', fontWeight: 600, marginBottom: 10 }}>Need HACCP Help?</div>
                <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300, marginBottom: 14 }}>Kitchen Three provides HACCP consulting, food safety training, and NFSA compliance support for Egyptian food businesses.</p>
                <a href="/#contact" className="btn btn-primary" style={{ display: 'block', textAlign: 'center', fontSize: 12, padding: '10px 16px' }}>Get In Touch</a>
              </div>

              <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 4, padding: '20px' }}>
                <div style={{ fontSize: 10, letterSpacing: '0.14em', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>Related Articles</div>
                {[
                  { title: 'How to Start a Cloud Kitchen in Egypt', href: '/blog/how-to-start-cloud-kitchen-egypt', color: 'var(--teal)' },
                  { title: 'What Does a Culinary Consultant Actually Do?', href: '/blog/culinary-consultant-what-do-they-do', color: 'var(--amber)' },
                  { title: 'Egypt F&B Market Trends 2025', href: '/blog/egypt-fb-market-trends-2025', color: 'var(--coral)' },
                ].map(r => (
                  <a key={r.title} href={r.href} style={{ display: 'block', fontSize: 12, color: r.color, marginBottom: 10, lineHeight: 1.5, fontWeight: 500, textDecoration: 'none' }}>
                    → {r.title}
                  </a>
                ))}
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--forest)', padding: '64px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: 540, margin: '0 auto' }}>
            <div className="eyebrow" style={{ color: 'var(--amber)' }}>Kitchen Three</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 3vw, 36px)', color: '#ffffff', marginBottom: 16 }}>
              Need Help With <em style={{ color: 'var(--amber)' }}>HACCP Compliance?</em>
            </h2>
            <p style={{ fontSize: 14, color: '#d4efeb', fontWeight: 300, lineHeight: 1.8, marginBottom: 28 }}>
              Kitchen Three provides HACCP consulting, food safety training, and full NFSA compliance support for food businesses across Egypt.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/#contact" className="btn btn-primary">Talk to a Consultant</a>
              <a href="/blog" className="btn btn-outline" style={{ borderColor: 'rgba(168,216,210,0.5)', color: '#d4efeb' }}>More Articles</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <style>{`
        @media (max-width: 768px) {
          article + aside { display: none; }
          .article-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

const prose: React.CSSProperties = {
  fontSize: 15,
  color: 'var(--muted)',
  lineHeight: 1.9,
  fontWeight: 300,
  marginBottom: 18,
}

const h2: React.CSSProperties = {
  fontFamily: 'var(--serif)',
  fontSize: 'clamp(20px, 2.5vw, 26px)',
  fontWeight: 400,
  color: 'var(--forest)',
  marginTop: 40,
  marginBottom: 14,
  paddingBottom: 8,
  borderBottom: '1px solid var(--border)',
}

const h3: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 600,
  color: 'var(--forest)',
  marginTop: 24,
  marginBottom: 10,
}

function callout(color: string, bg: string): React.CSSProperties {
  return {
    background: bg,
    border: '1px solid ' + color + '44',
    borderLeft: '4px solid ' + color,
    borderRadius: 4,
    padding: '20px 24px',
    marginTop: 20,
    marginBottom: 24,
  }
}

function calloutTitle(color: string): React.CSSProperties {
  return {
    fontSize: 12,
    fontWeight: 600,
    color: color,
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    marginBottom: 10,
  }
}
