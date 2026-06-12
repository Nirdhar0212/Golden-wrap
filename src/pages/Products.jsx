import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const categories = [
  {
    label: 'Rakhi',
    icon: '🪢',
    cover: '/images/product1.jpeg',
    desc: 'Beautiful handcrafted Rakhis made with love for your beloved brothers.',
    path: '/products/rakhi',
  },
  {
    label: 'Rakhi Hampers',
    icon: '🧺',
    cover: '/images/product5.jpeg',
    desc: 'Thoughtfully curated Rakhi hampers filled with sweets, dry fruits & more.',
    path: '/products/rakhi-hampers',
  },
  {
    label: 'Pooja Thali',
    icon: '🪔',
    cover: '/images/product9.jpeg',
    desc: 'Elegant handmade Pooja Thalis decorated with flowers, diyas & golden accents.',
    path: '/products/pooja-thali',
  },
]

export default function Products() {
  const navigate = useNavigate()

  return (
    <div style={{ paddingTop: '72px', backgroundColor: '#fffdf5', minHeight: '100vh' }}>

      {/* ── HEADER ── */}
      <section style={s.header}>
        <div style={s.heroBg} />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={s.headerTag}>
          ✦ Our Collection ✦
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          style={s.headerTitle}
        >
          Handcrafted Products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          style={s.headerSubtitle}
        >
          Each piece is made by hand with premium materials and a whole lot of love.
        </motion.p>
      </section>

      {/* ── VERTICAL CATEGORY BOXES ── */}
      <section style={s.pageWrap}>
        {categories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, boxShadow: '0 16px 48px rgba(212,175,55,0.28)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            onClick={() => navigate(cat.path)}
            style={s.catBox}
          >
            {/* Full cover image */}
            <div style={s.coverWrap}>
              <img src={cat.cover} alt={cat.label} style={s.coverImg} />
              <div style={s.coverOverlay} />
            </div>

            {/* Content over image */}
            <div style={s.catContent}>
              <span style={s.catIcon}>{cat.icon}</span>
              <h2 style={s.catLabel}>{cat.label}</h2>
              <p style={s.catDesc}>{cat.desc}</p>
              <div style={s.viewBtn}>View Collection →</div>
            </div>
          </motion.div>
        ))}
      </section>

    </div>
  )
}

const s = {
  header: {
    background: 'linear-gradient(135deg,#35623B,#35623B)',
    padding: '64px 24px', textAlign: 'center',
    position: 'relative', overflow: 'hidden',
  },
  heroBg: {
    position: 'absolute', top: '-60px', right: '-60px',
    width: '280px', height: '280px', borderRadius: '50%',
    background: 'rgba(212,175,55,0.07)',
  },
  headerTag: {
    color: '#d4af37', letterSpacing: '4px',
    fontSize: '12px', textTransform: 'uppercase', marginBottom: '14px',
  },
  headerTitle: {
    fontFamily: "'Playfair Display',serif",
    fontSize: 'clamp(2rem,5vw,3.5rem)',
    fontWeight: '700', color: '#d4af37', marginBottom: '14px',
  },
  headerSubtitle: {
    color: '#c8d8c8', fontSize: '1.05rem',
    maxWidth: '480px', margin: '0 auto',
  },
  pageWrap: {
    maxWidth: '800px', margin: '0 auto',
    padding: '56px 24px 80px',
    display: 'flex', flexDirection: 'column', gap: '28px',
  },
  catBox: {
    position: 'relative',
    borderRadius: '22px',
    overflow: 'hidden',
    cursor: 'pointer',
    height: '220px',
    border: '2px solid #e8d5a3',
    boxShadow: '0 4px 20px rgba(212,175,55,0.1)',
    transition: 'box-shadow 0.3s',
  },
  coverWrap: {
    position: 'absolute', inset: 0,
  },
  coverImg: {
    width: '100%', height: '100%',
    objectFit: 'cover', display: 'block',
  },
  coverOverlay: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(135deg, rgba(53,98,59,0.82), rgba(53,98,59,0.55))',
  },
  catContent: {
    position: 'relative', zIndex: 1,
    height: '100%',
    display: 'flex', flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 40px',
    gap: '6px',
  },
  catIcon: {
    fontSize: '2rem',
  },
  catLabel: {
    fontFamily: "'Playfair Display',serif",
    color: '#d4af37', fontSize: '1.8rem', fontWeight: '700',
  },
  catDesc: {
    color: '#c8d8c8', fontSize: '0.92rem', maxWidth: '480px', lineHeight: 1.6,
  },
  viewBtn: {
    marginTop: '8px',
    display: 'inline-block',
    color: '#d4af37', fontWeight: '700',
    fontSize: '0.9rem', letterSpacing: '0.5px',
    fontFamily: "'Lato',sans-serif",
  },
}
