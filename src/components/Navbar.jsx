import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav style={styles.nav}>
      <div style={styles.inner}>

        {/* ── LOGO (top left) ── */}
        <Link to="/" style={styles.logo}>
          <div style={styles.logoIcon}>🎁</div>
          <div>
            <div style={styles.logoTitle}>The Golden Wrap</div>
            <div style={styles.logoSub}>S T U D I O</div>
          </div>
        </Link>

        {/* ── DESKTOP LINKS ── */}
        <div className="nav-desktop" style={styles.desktopLinks}>
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                ...styles.link,
                color: pathname === l.to ? '#d4af37' : '#c8d8c8',
                borderBottom: pathname === l.to ? '2px solid #d4af37' : '2px solid transparent',
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/products" style={styles.shopBtn}>Shop Now</Link>
        </div>

        {/* ── HAMBURGER ── */}
        <button className="nav-hamburger" style={styles.hamburger} onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={styles.mobileMenu}
          >
            {links.map(l => (
              <Link key={l.to} to={l.to} style={styles.mobileLink} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link to="/products" style={styles.mobileshopBtn} onClick={() => setOpen(false)}>Shop Now</Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
        @media (min-width: 769px) {
          .nav-desktop { display: flex !important; }
          .nav-hamburger { display: none !important; }
        }
      `}</style>
    </nav>
  )
}

const styles = {
  nav: {
    position: 'fixed', top: 0, width: '100%', zIndex: 100,
    background: '#1a3a1a',
    borderBottom: '2px solid #d4af37',
    boxShadow: '0 2px 24px rgba(0,0,0,0.35)',
  },
  inner: {
    maxWidth: '1200px', margin: '0 auto',
    padding: '0 28px', height: '72px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  logo: {
    display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none',
  },
  logoIcon: {
    width: '44px', height: '44px', borderRadius: '50%',
    background: 'linear-gradient(135deg,#d4af37,#f0d060)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '1.4rem', boxShadow: '0 2px 12px rgba(212,175,55,0.5)',
    flexShrink: 0,
  },
  logoTitle: {
    color: '#d4af37', fontFamily: "'Playfair Display',serif",
    fontWeight: '700', fontSize: '1.1rem', lineHeight: 1.1,
  },
  logoSub: {
    color: '#8ab88a', fontSize: '0.6rem', letterSpacing: '3px',
  },
  desktopLinks: {
    display: 'flex', alignItems: 'center', gap: '32px',
  },
  link: {
    fontFamily: "'Lato',sans-serif", fontSize: '0.95rem',
    fontWeight: '600', letterSpacing: '0.5px',
    paddingBottom: '2px', transition: 'color 0.2s',
  },
  shopBtn: {
    background: 'linear-gradient(135deg,#d4af37,#f0d060)',
    color: '#1a3a1a', padding: '9px 24px',
    borderRadius: '50px', fontWeight: '700',
    fontSize: '0.9rem', fontFamily: "'Lato',sans-serif",
  },
  hamburger: {
    background: 'none', border: 'none',
    color: '#d4af37', fontSize: '1.7rem', cursor: 'pointer',
  },
  mobileshopBtn: {
    background: 'linear-gradient(135deg,#d4af37,#f0d060)',
    color: '#1a3a1a', padding: '10px 24px',
    borderRadius: '50px', fontWeight: '700',
    fontSize: '0.9rem', fontFamily: "'Lato',sans-serif",
    textAlign: 'center',
  },
  mobileMenu: {
    background: '#1a3a1a', borderTop: '1px solid #2d5a27',
    padding: '16px 28px', display: 'flex',
    flexDirection: 'column', gap: '16px', overflow: 'hidden',
  },
  mobileLink: {
    color: '#c8d8c8', fontSize: '1.05rem', fontWeight: '600',
  },
}
