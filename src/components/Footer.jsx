import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={s.footer}>
      <div style={s.grid}>

        <div>
          <div style={s.logoRow}>
            <div style={s.icon}>🎁</div>
            <div>
              <div style={s.logoTitle}>The Golden Wrap</div>
              <div style={s.logoSub}>S T U D I O</div>
            </div>
          </div>
          <p style={s.desc}>
            Handcrafted gift wraps and décor made with love by skilled artisans across India.
          </p>
        </div>

        <div>
          <h4 style={s.heading}>QUICK LINKS</h4>
          {[['/', 'Home'], ['/products', 'Products'], ['/contact', 'Contact Us']].map(([to, label]) => (
            <div key={to} style={{ marginBottom: '10px' }}>
              <Link to={to} style={s.footerLink}>{label}</Link>
            </div>
          ))}
        </div>

        <div>
          <h4 style={s.heading}>CONTACT</h4>
          <p style={s.contact}>📧 hello@goldenwrapstudio.com</p>
          <p style={s.contact}>📞 +91 98765 43210</p>
          <p style={s.contact}>📍 Usmanpura, Ahmedabad, Gujarat, India</p>
          <p style={s.contact}>🕐 Mon–Sat: 10am – 7pm</p>
        </div>

        <div>
          <h4 style={s.heading}>FOLLOW US</h4>
          <p style={s.contact}>📸 @goldenwrapstudio</p>
          <p style={s.contact}>💼 The Golden Wrap Studio</p>
          <p style={{ ...s.contact, marginTop: '16px', color: '#d4af37' }}>
            ✦ Handcrafted with Love ✦
          </p>
        </div>
      </div>

      <div style={s.bottom}>
        <p>© {new Date().getFullYear()} The Golden Wrap Studio. All rights reserved. Made with 💛</p>
      </div>
    </footer>
  )
}

const s = {
  footer: {
    background: 'linear-gradient(135deg,#0f2410,#1a3a1a)',
    borderTop: '2px solid #d4af37',
    padding: '56px 28px 24px',
  },
  grid: {
    maxWidth: '1100px', margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
    gap: '40px', marginBottom: '40px',
  },
  logoRow: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' },
  icon: {
    width: '40px', height: '40px', borderRadius: '50%',
    background: 'linear-gradient(135deg,#d4af37,#f0d060)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
  },
  logoTitle: { color: '#d4af37', fontFamily: "'Playfair Display',serif", fontWeight: '700', fontSize: '1rem' },
  logoSub: { color: '#8ab88a', fontSize: '0.6rem', letterSpacing: '3px' },
  desc: { color: '#8ab88a', fontSize: '0.88rem', lineHeight: 1.8 },
  heading: { color: '#d4af37', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '16px', fontFamily: "'Lato',sans-serif" },
  footerLink: { color: '#8ab88a', fontSize: '0.9rem', transition: 'color 0.2s' },
  contact: { color: '#8ab88a', fontSize: '0.88rem', marginBottom: '8px', lineHeight: 1.7 },
  bottom: {
    borderTop: '1px solid #2d5a27', paddingTop: '20px',
    textAlign: 'center', color: '#4a6741', fontSize: '0.85rem',
    maxWidth: '1100px', margin: '0 auto',
  },
}
