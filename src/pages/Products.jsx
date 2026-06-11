import { motion } from 'framer-motion'

// ─────────────────────────────────────────────
// ADD / EDIT PRODUCTS HERE
// To add a new product just add a new object
// with: id, name, price, tag (or ''), image
// ─────────────────────────────────────────────
const products = [
  { id: 1,  name: 'Handcrafted Gift Wrap',   price: '₹299', tag: 'Bestseller', image: '/images/product1.jpeg' },
  { id: 2,  name: 'Premium Wrap Set',        price: '₹499', tag: 'New',        image: '/images/product2.jpeg' },
  { id: 3,  name: 'Floral Gift Wrap',        price: '₹349', tag: '',           image: '/images/product3.jpeg' },
  { id: 4,  name: 'Golden Luxury Wrap',      price: '₹599', tag: 'Premium',    image: '/images/product4.jpeg' },
  { id: 5,  name: 'Elegant Ribbon Wrap',     price: '₹399', tag: '',           image: '/images/product5.jpeg' },
  { id: 6,  name: 'Classic Bouquet Wrap',    price: '₹249', tag: 'Popular',    image: '/images/product6.jpeg' },
  { id: 7,  name: 'Festive Gift Wrap',       price: '₹449', tag: '',           image: '/images/product7.jpeg' },
  { id: 8,  name: 'Handmade Luxury Bundle',  price: '₹799', tag: 'Premium',    image: '/images/product8.jpeg' },
  { id: 9,  name: 'Special Occasion Wrap',   price: '₹329', tag: '',           image: '/images/product9.jpeg' },
  { id: 10, name: 'Custom Designer Wrap',    price: '₹549', tag: 'New',        image: '/images/product10.jpeg' },
]

export default function Products() {
  return (
    <div style={{ paddingTop: '72px', backgroundColor: '#fffdf5', minHeight: '100vh' }}>

      {/* ── HEADER ── */}
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

      {/* ── PRODUCT GRID ── */}
      <section style={s.gridWrap}>
        <div style={s.grid}>
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, boxShadow: '0 20px 48px rgba(212,175,55,0.22)' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true }}
              style={s.card}
            >
              {/* Image */}
              <div style={s.imgWrap}>
                <img src={p.image} alt={p.name} style={s.img} />
                {p.tag && <span style={s.badge}>{p.tag}</span>}
              </div>

              {/* Info */}
              <div style={s.info}>
                <h3 style={s.name}>{p.name}</h3>
                <span style={s.price}>{p.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  )
}

const s = {
  header: {
    background: 'linear-gradient(135deg,#1a3a1a,#2d5a27)',
    padding: '64px 24px', textAlign: 'center',
    position: 'relative', overflow: 'hidden',
  },
  heroBg: {
    position: 'absolute', top: '-60px', right: '-60px',
    width: '280px', height: '280px', borderRadius: '50%',
    background: 'rgba(212,175,55,0.07)',
  },
  tag: {
    color: '#d4af37', letterSpacing: '4px',
    fontSize: '12px', textTransform: 'uppercase', marginBottom: '14px',
  },
  title: {
    fontFamily: "'Playfair Display',serif",
    fontSize: 'clamp(2rem,5vw,3.5rem)',
    fontWeight: '700', color: '#d4af37', marginBottom: '14px',
  },
  subtitle: {
    color: '#c8d8c8', fontSize: '1.05rem',
    maxWidth: '480px', margin: '0 auto',
  },
  gridWrap: {
    maxWidth: '1200px', margin: '0 auto', padding: '60px 28px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '32px',
  },
  card: {
    background: '#fff',
    border: '1px solid #e8d5a3',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 4px 16px rgba(212,175,55,0.08)',
    cursor: 'default',
  },
  imgWrap: {
    position: 'relative',
    width: '100%', height: '260px',
    overflow: 'hidden', background: '#f5f0e0',
  },
  img: {
    width: '100%', height: '100%',
    objectFit: 'cover', display: 'block',
  },
  badge: {
    position: 'absolute', top: '14px', right: '14px',
    background: 'linear-gradient(135deg,#d4af37,#f0d060)',
    color: '#1a3a1a', fontSize: '0.7rem', fontWeight: '700',
    padding: '4px 12px', borderRadius: '20px',
  },
  info: {
    padding: '16px 20px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  name: {
    fontFamily: "'Playfair Display',serif",
    color: '#1a3a1a', fontSize: '1rem', lineHeight: 1.4,
  },
  price: {
    fontFamily: "'Playfair Display',serif",
    color: '#d4af37', fontWeight: '700', fontSize: '1.2rem',
    whiteSpace: 'nowrap', marginLeft: '12px',
  },
}
