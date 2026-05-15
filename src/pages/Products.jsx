import { motion } from 'framer-motion'

const products = [
  { id: 1, name: 'Golden Gift Wrap', price: '₹299', tag: 'Bestseller', emoji: '🎁', desc: 'Luxurious golden wrap for any occasion.' },
  { id: 2, name: 'Handmade Basket', price: '₹499', tag: 'New', emoji: '🧺', desc: 'Woven with care, perfect for gifting.' },
  { id: 3, name: 'Floral Bouquet Wrap', price: '₹199', tag: '', emoji: '💐', desc: 'Elegant floral wrapping for bouquets.' },
  { id: 4, name: 'Luxury Box Set', price: '₹799', tag: 'Premium', emoji: '📦', desc: 'A premium set for the finest gifts.' },
  { id: 5, name: 'Ribbon Craft Kit', price: '₹349', tag: '', emoji: '🎀', desc: 'Everything you need for beautiful bows.' },
  { id: 6, name: 'Custom Name Tag', price: '₹149', tag: 'Popular', emoji: '🏷️', desc: 'Personalized tags for a special touch.' },
]

export default function Products() {
  return (
    <div style={{ paddingTop: '72px', backgroundColor: '#fffdf5', minHeight: '100vh' }}>

      {/* Header */}
      <section style={s.header}>
        <div style={s.heroBg} />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={s.tag}>
          ✦ Our Collection ✦
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          style={s.title}
        >
          Handcrafted Products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          style={s.subtitle}
        >
          Each piece is made by hand with premium materials and a whole lot of love.
        </motion.p>
      </section>

      {/* Grid */}
      <section style={s.grid}>
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, boxShadow: '0 16px 48px rgba(212,175,55,0.22)' }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            viewport={{ once: true }}
            style={s.card}
          >
            {/* Image area */}
            <div style={s.imgArea}>
              <span style={{ fontSize: '5rem' }}>{p.emoji}</span>
              {p.tag && <span style={s.badge}>{p.tag}</span>}
            </div>

            {/* Info */}
            <div style={s.info}>
              <h3 style={s.name}>{p.name}</h3>
              <p style={s.desc}>{p.desc}</p>
              <div style={s.row}>
                <span style={s.price}>{p.price}</span>
                <motion.button whileTap={{ scale: 0.95 }} style={s.btn}>
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  )
}

const s = {
  header: {
    background: 'linear-gradient(135deg,#1a3a1a,#2d5a27)',
    padding: '64px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden',
  },
  heroBg: {
    position: 'absolute', top: '-60px', right: '-60px',
    width: '280px', height: '280px', borderRadius: '50%',
    background: 'rgba(212,175,55,0.07)',
  },
  tag: { color: '#d4af37', letterSpacing: '4px', fontSize: '12px', textTransform: 'uppercase', marginBottom: '14px' },
  title: {
    fontFamily: "'Playfair Display',serif",
    fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: '700', color: '#d4af37', marginBottom: '14px',
  },
  subtitle: { color: '#c8d8c8', fontSize: '1.05rem', maxWidth: '480px', margin: '0 auto' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill,minmax(290px,1fr))',
    gap: '28px', padding: '60px 28px',
    maxWidth: '1100px', margin: '0 auto',
  },
  card: {
    background: '#fff', border: '1px solid #e8d5a3',
    borderRadius: '20px', overflow: 'hidden',
    boxShadow: '0 4px 16px rgba(212,175,55,0.08)',
    cursor: 'pointer', transition: 'box-shadow 0.3s',
  },
  imgArea: {
    background: 'linear-gradient(135deg,#f5f0e0,#fffdf5)',
    height: '190px', display: 'flex', alignItems: 'center',
    justifyContent: 'center', position: 'relative',
  },
  badge: {
    position: 'absolute', top: '14px', right: '14px',
    background: 'linear-gradient(135deg,#d4af37,#f0d060)',
    color: '#1a3a1a', fontSize: '0.7rem', fontWeight: '700',
    padding: '4px 12px', borderRadius: '20px',
  },
  info: { padding: '22px' },
  name: { fontFamily: "'Playfair Display',serif", color: '#1a3a1a', fontSize: '1.15rem', marginBottom: '8px' },
  desc: { color: '#4a6741', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '16px' },
  row: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  price: { fontFamily: "'Playfair Display',serif", color: '#d4af37', fontWeight: '700', fontSize: '1.4rem' },
  btn: {
    background: 'linear-gradient(135deg,#1a3a1a,#2d5a27)',
    color: '#d4af37', border: 'none',
    padding: '9px 20px', borderRadius: '50px',
    fontWeight: '700', fontSize: '0.85rem', cursor: 'pointer',
    fontFamily: "'Lato',sans-serif",
  },
}
