'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
  return (
    <div style={{ fontFamily: 'var(--sans)', background: 'var(--cream)', color: 'var(--ink)' }}>
      <Nav />

      <section style={{ background: 'var(--forest)', padding: '80px 0 64px' }}>
        <div className="container">
          <div className="eyebrow" style={{ color: 'var(--amber)' }}>Legal</div>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 400, color: '#ffffff', marginBottom: 16, lineHeight: 1.1 }}>
            Privacy <em style={{ color: 'var(--amber)' }}>Policy</em>
          </h1>
          <p style={{ fontSize: 15, color: '#d4efeb', fontWeight: 300 }}>Last updated: March 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 720, margin: '0 auto' }}>

            {[
              {
                title: '1. Who We Are',
                body: 'Kitchen Three LLC is a B2B culinary consultancy registered in Cairo, Egypt. Our website is located at www.kitchenthree.co. We can be contacted at info@kitchenthree.co. References to "we", "us", or "Kitchen Three" in this policy refer to Kitchen Three LLC.',
              },
              {
                title: '2. What Data We Collect',
                body: 'We collect personal data only when you voluntarily provide it to us. This includes: (a) Contact form submissions — your name, email address, company name, and message content. (b) Newsletter subscriptions — your email address. We do not collect any sensitive personal data, payment information, or data from minors.',
              },
              {
                title: '3. How We Use Your Data',
                body: 'We use your data solely to: respond to your enquiry, send you industry insights and updates if you subscribed, and improve our services based on feedback. We do not use your data for automated decision-making or profiling. We do not sell, rent, or share your personal data with third parties for marketing purposes.',
              },
              {
                title: '4. Legal Basis for Processing',
                body: "We process your data on the basis of your consent (when you submit a form or subscribe) and our legitimate interest in responding to business enquiries. This is consistent with Egypt's Personal Data Protection Law No. 151 of 2020.",
              },
              {
                title: '5. Data Storage & Security',
                body: 'Contact form submissions are processed via Formspree (formspree.io) and delivered to our business email. Email addresses collected via our subscription form are stored securely. We implement appropriate technical measures to protect your data against unauthorised access, loss, or disclosure.',
              },
              {
                title: '6. How Long We Keep Your Data',
                body: 'We retain contact form submissions for up to 2 years for business correspondence purposes. You may request deletion of your data at any time by emailing info@kitchenthree.co and we will action your request within 30 days.',
              },
              {
                title: '7. Your Rights',
                body: 'You have the right to: access the personal data we hold about you, request correction of inaccurate data, request deletion of your data, withdraw consent at any time, and lodge a complaint with the relevant data protection authority in Egypt. To exercise any of these rights, contact us at info@kitchenthree.co.',
              },
              {
                title: '8. Cookies',
                body: 'Our website uses only essential technical cookies required for the site to function. We do not use advertising cookies, tracking pixels, or third-party analytics cookies. No cookie consent banner is required as we do not use non-essential cookies.',
              },
              {
                title: '9. Third-Party Services',
                body: 'Our website is hosted on Vercel (vercel.com). Contact forms are processed by Formspree (formspree.io). These services may process your data in accordance with their own privacy policies. We have selected these providers based on their commitment to data security.',
              },
              {
                title: '10. Changes to This Policy',
                body: 'We may update this Privacy Policy from time to time. The date at the top of this page indicates when it was last revised. Continued use of our website after any changes constitutes acceptance of the updated policy.',
              },
              {
                title: '11. Contact Us',
                body: 'If you have any questions about this Privacy Policy or how we handle your data, please contact us at: info@kitchenthree.co — Kitchen Three LLC, Cairo, Egypt.',
              },
            ].map(section => (
              <div key={section.title} style={{ marginBottom: 36 }}>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 400, color: 'var(--forest)', marginBottom: 12 }}>{section.title}</h2>
                <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.9, fontWeight: 300 }}>{section.body}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
