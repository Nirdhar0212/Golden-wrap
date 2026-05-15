import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const features = [
  { icon: '🎁', title: '100% Handmade', desc: 'Every product is crafted by skilled artisans with love and precision.' },
  { icon: '🌿', title: 'Eco Friendly', desc: 'We use sustainable, natural materials that are kind to the earth.' },
  { icon: '✨', title: 'Premium Quality', desc: 'Only the finest materials go into each and every creation.' },
  { icon: '💛', title: 'Made with Love', desc: 'Each piece carries the warmth and soul of the maker\'s heart.' },
]

const testimonials = [
  { name: 'Priya S.', text: 'Absolutely stunning wrapping! My gift looked like a piece of art. Will order again!', stars: 5 },
  { name: 'Rahul M.', text: 'The quality is unmatched. Everyone at the party was asking where I got it from.', stars: 5 },
  { name: 'Anita K.', text: 'Beautiful, elegant and eco-friendly. The Golden Wrap Studio never disappoints!', stars: 5 },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
})

export default function Home() {
  return (
    <div style={{ paddingTop: '72px' }}>

      {/* ── HERO ── */}
      <section style={s.hero}>
        <div style={s.heroBg1} />
        <div style={s.heroBg2} />
        <div style={s.heroContent}>
          <motion.p
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={s.heroTag}
          >
            ✦ Handcrafted with Love ✦
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            style={s.heroTitle}
          >
            Wrap Every Moment<br />
            <span style={{ color: '#ffffff' }}>in Pure Gold</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
            style={s.heroDesc}
          >
            Discover our exclusive collection of handmade gift wraps, baskets, and décor —
            each piece a unique work of art crafted by passionate artisans.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
            style={s.heroBtns}
          >
            <Link to="/products" style={s.btnPrimary}>Shop Now →</Link>
            <Link to="/contact" style={s.btnOutline}>Contact Us</Link>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={s.stats}>
        {[['500+', 'Happy Customers'], ['100%', 'Handmade'], ['50+', 'Unique Products'], ['5★', 'Avg Rating']].map(([num, label], i) => (
          <motion.div key={i} {...fadeUp(i * 0.1)} style={s.statItem}>
            <div style={s.statNum}>{num}</div>
            <div style={s.statLabel}>{label}</div>
          </motion.div>
        ))}
      </section>

      {/* ── FEATURES ── */}
      <section style={s.section}>
        <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '52px' }}>
          <p style={s.sectionTag}>Why Choose Us</p>
          <h2 style={s.sectionTitle}>The Golden Difference</h2>
        </motion.div>
        <div style={s.featGrid}>
          {features.map((f, i) => (
            <motion.div key={i} {...fadeUp(i * 0.1)} whileHover={{ y: -8 }} style={s.featCard}>
              <div style={s.featIcon}>{f.icon}</div>
              <h3 style={s.featTitle}>{f.title}</h3>
              <p style={s.featDesc}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── BANNER ── */}
      <section style={s.banner}>
        <motion.h2 {...fadeUp()} style={s.bannerTitle}>
          Every Gift Deserves to be Special
        </motion.h2>
        <motion.p {...fadeUp(0.2)} style={s.bannerDesc}>
          From birthdays to weddings, our handcrafted wraps make every occasion unforgettable.
        </motion.p>
        <motion.div {...fadeUp(0.3)}>
          <Link to="/products" style={s.btnPrimary}>Explore Collection</Link>
        </motion.div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={s.section}>
        <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={s.sectionTag}>Happy Customers</p>
          <h2 style={s.sectionTitle}>What People Say</h2>
        </motion.div>
        <div style={s.testGrid}>
          {testimonials.map((t, i) => (
            <motion.div key={i} {...fadeUp(i * 0.15)} style={s.testCard}>
              <div style={s.stars}>{'★'.repeat(t.stars)}</div>
              <p style={s.testText}>"{t.text}"</p>
              <p style={s.testName}>— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  )
}

const s = {
  hero: {
    background: 'linear-gradient(135deg,#1a3a1a 0%,#2d5a27 50%,#1a3a1a 100%)',
    minHeight: '92vh', display: 'flex', alignItems: 'center',
    justifyContent: 'center', textAlign: 'center',
    padding: '60px 24px', position: 'relative', overflow: 'hidden',
  },
  heroBg1: {
    position: 'absolute', top: '-80px', right: '-80px',
    width: '320px', height: '320px', borderRadius: '50%',
    background: 'rgba(212,175,55,0.07)',
  },
  heroBg2: {
    position: 'absolute', bottom: '-60px', left: '-60px',
    width: '260px', height: '260px', borderRadius: '50%',
    background: 'rgba(212,175,55,0.05)',
  },
  heroContent: { position: 'relative', zIndex: 1, maxWidth: '720px' },
  heroTag: { color: '#d4af37', letterSpacing: '4px', fontSize: '13px', textTransform: 'uppercase', marginBottom: '18px' },
  heroTitle: {
    fontFamily: "'Playfair Display',serif",
    fontSize: 'clamp(2.4rem,6vw,5rem)', fontWeight: '700',
    color: '#d4af37', lineHeight: 1.15, marginBottom: '24px',
  },
  heroDesc: { color: '#c8d8c8', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '40px' },
  heroBtns: { display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' },
  btnPrimary: {
    background: 'linear-gradient(135deg,#d4af37,#f0d060)',
    color: '#1a3a1a', padding: '14px 38px', borderRadius: '50px',
    fontWeight: '700', fontSize: '1rem',
    boxShadow: '0 4px 20px rgba(212,175,55,0.4)',
  },
  btnOutline: {
    border: '2px solid #d4af37', color: '#d4af37',
    padding: '14px 38px', borderRadius: '50px',
    fontWeight: '700', fontSize: '1rem',
  },
  stats: {
    background: '#fff8e7', borderTop: '1px solid #e8d5a3', borderBottom: '1px solid #e8d5a3',
    padding: '36px 24px',
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))',
    gap: '24px', maxWidth: '900px', margin: '0 auto',
  },
  statItem: { textAlign: 'center' },
  statNum: { fontFamily: "'Playfair Display',serif", fontSize: '2.2rem', fontWeight: '700', color: '#d4af37' },
  statLabel: { color: '#4a6741', fontSize: '0.88rem', marginTop: '4px', letterSpacing: '1px' },
  section: { padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' },
  sectionTag: { color: '#d4af37', letterSpacing: '3px', fontSize: '12px', textTransform: 'uppercase', marginBottom: '10px' },
  sectionTitle: { fontFamily: "'Playfair Display',serif", fontSize: '2.4rem', fontWeight: '700', color: '#1a3a1a' },
  featGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '28px' },
  featCard: {
    background: '#fff', border: '1px solid #e8d5a3', borderRadius: '18px',
    padding: '32px 24px', textAlign: 'center',
    boxShadow: '0 4px 20px rgba(212,175,55,0.08)',
  },
  featIcon: { fontSize: '2.8rem', marginBottom: '16px' },
  featTitle: { fontFamily: "'Playfair Display',serif", color: '#1a3a1a', fontSize: '1.15rem', marginBottom: '10px' },
  featDesc: { color: '#4a6741', fontSize: '0.9rem', lineHeight: 1.7 },
  banner: {
    background: 'linear-gradient(135deg,#2d5a27,#1a3a1a)',
    padding: '72px 24px', textAlign: 'center',
  },
  bannerTitle: { fontFamily: "'Playfair Display',serif", color: '#d4af37', fontSize: 'clamp(1.6rem,4vw,2.4rem)', fontWeight: '700', marginBottom: '16px' },
  bannerDesc: { color: '#c8d8c8', fontSize: '1.05rem', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' },
  testGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '24px' },
  testCard: {
    background: '#fff', border: '1px solid #e8d5a3', borderRadius: '18px',
    padding: '28px', boxShadow: '0 4px 16px rgba(212,175,55,0.08)',
  },
  stars: { color: '#d4af37', fontSize: '1.2rem', marginBottom: '12px' },
  testText: { color: '#4a6741', lineHeight: 1.8, marginBottom: '16px', fontStyle: 'italic' },
  testName: { color: '#1a3a1a', fontWeight: '700', fontSize: '0.95rem' },
}
