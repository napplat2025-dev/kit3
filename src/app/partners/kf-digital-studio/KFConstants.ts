export const flame = '#E8540A'
export const ember = '#C73A05'
export const gold = '#D4830A'
export const bg = '#FAF7F2'
export const bg2 = '#F2EDE4'
export const bg3 = '#EDE6D9'
export const dark = '#1A1208'
export const muted = '#9A8870'
export const border = 'rgba(200,175,140,0.35)'

export const pageOptions = ['Home', 'About', 'Services', 'Portfolio / Work', 'Blog', 'Contact', 'Online Shop', 'Booking / Appointments']
export const featureOptions = ['Contact Form', 'WhatsApp Button', 'Instagram Feed', 'Photo Gallery', 'Online Payment', 'Arabic / English']
export const vibeOptions = ['Minimal & Clean', 'Bold & Modern', 'Warm & Friendly', 'Luxury & Premium', 'Playful & Creative', 'Corporate & Professional']
export const budgetOptions = ['Below 10,000 EGP', '10,000 – 15,000 EGP', '15,000 – 20,000 EGP', '20,000 – 25,000 EGP', '25,000 – 30,000 EGP', 'Above 30,000 EGP', 'Not sure yet — advise me']
export const timelineOptions = ['As soon as possible', 'Within 2 weeks', 'Within 1 month', 'Flexible — quality first']

export const whatsappURL = `https://wa.me/201222186669?text=${encodeURIComponent('Hi KF Digital Studio, I have a project brief I would like to share with you.')}`
export const emailURL = `mailto:kitchenthreecairo@gmail.com?subject=${encodeURIComponent('KF Digital Studio — Project Brief')}&body=${encodeURIComponent('Hi KF Digital Studio,\n\nI have a project brief I would like to share with you.\n\nMy name is:\nMy phone number is:\n\nI have attached my brief to this email.')}`

export const KFLogo = ({ size = 40 }: { size?: number }) => (
  <div style={{
    width: size, height: size, background: '#fff',
    border: `${Math.max(2, Math.round(size * 0.06))}px solid ${dark}`,
    borderRadius: size * 0.15, display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: 'Georgia, Garamond, serif', fontSize: size * 0.42, fontWeight: 700,
    color: dark, letterSpacing: 1, flexShrink: 0
  }}>KF</div>
)

export type ModalScreen = 'gate' | 'brief-choice' | 'questionnaire' | 'q-success'
