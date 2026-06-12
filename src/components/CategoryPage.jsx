import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function CategoryPage({ title, icon, items }) {
  const navigate = useNavigate()

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
          {icon} {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          style={s.subtitle}
        >
          Each piece is handcrafted with love and premium materials.
        </motion.p>

        {/* Back button */}
        <motion.button
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          onClick={() => navigate('/products')}
          style={s.backBtn}
        >
          ← Back to Products
        </motion.button>
      </section>

      {/* ── GRID ── */}
      <section style={s.gridWrap}>
        <div style={s.grid}>
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, boxShadow: '0 20px 48px rgba(212,175,55,0.22)' }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              viewport={{ once: true }}
              style={s.card}
            >
              <div style={s.imgWrap}>
                <img src={item.image} alt={item.name} style={s.img} />
              </div>
              <div style={s.info}>
                <p style={s.name}>{item.name}</p>
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
    background: '#35623B',
    padding: '64px 24px 48px', textAlign: 'center',
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
    fontSize: 'clamp(2rem,5vw,3.2rem)',
    fontWeight: '700', color: '#d4af37', marginBottom: '12px',
  },
  subtitle: {
    color: '#c8d8c8', fontSize: '1rem',
    maxWidth: '440px', margin: '0 auto 24px',
  },
  headerImgWrap: {
    marginBottom: '24px',
    display: 'flex', justifyContent: 'center',
  },
  headerImg: {
    width: '140px', height: '140px',
    objectFit: 'contain',
    borderRadius: '12px',
    filter: 'brightness(1.1) saturate(1.1)',
  },
  backBtn: {
    background: 'transparent',
    border: '2px solid #d4af37',
    color: '#d4af37', padding: '9px 24px',
    borderRadius: '50px', fontWeight: '700',
    fontSize: '0.88rem', cursor: 'pointer',
    fontFamily: "'Lato',sans-serif",
    position: 'relative', zIndex: 1,
  },
  gridWrap: {
    maxWidth: '1200px', margin: '0 auto',
    padding: '56px 28px 80px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '28px',
  },
  card: {
    background: '#fff',
    border: '1px solid #e8d5a3',
    borderRadius: '18px',
    overflow: 'hidden',
    boxShadow: '0 4px 16px rgba(212,175,55,0.08)',
  },
  imgWrap: {
    width: '100%', height: '250px',
    overflow: 'hidden', background: '#f5f0e0',
  },
  img: {
    width: '100%', height: '100%',
    objectFit: 'cover', display: 'block',
  },
  info: {
    padding: '14px 18px',
  },
  name: {
    fontFamily: "'Playfair Display',serif",
    color: '#35623B', fontSize: '1rem',
    textAlign: 'center', lineHeight: 1.4,
  },
}
