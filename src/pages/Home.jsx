import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const features = [
  { icon: '👰', title: 'Luxury Trousseau Packing', desc: 'Exquisite trousseau packing crafted with premium materials for the most special day of your life.' },
  { icon: '🎀', title: 'Wedding Gift Packing', desc: 'Customized wedding gift packaging designed to make every present unforgettable and elegant.' },
  { icon: '🪔', title: 'Toran & Shagun Decor', desc: 'Elegant handcrafted torans and shagun décor to beautifully adorn your home and celebrations.' },
  { icon: '💌', title: 'Money Envelopes', desc: 'Designer shagun covers and money envelopes crafted with a luxurious, personal touch.' },
  { icon: '🎂', title: 'Birthday & Anniversary', desc: 'Stunning gift packaging for birthdays and anniversaries that turns every gift into a memory.' },
  { icon: '👶', title: 'Baby Shower Hampers', desc: 'Adorable baby shower and baby announcement hampers curated with love and warmth.' },
  { icon: '🎁', title: 'Return Gift Packaging', desc: 'Thoughtfully designed return gift packaging that leaves a lasting impression on your guests.' },
  { icon: '✨', title: 'Festive Hampers', desc: 'Premium festive hampers for Diwali, Rakhi, Christmas, New Year and every joyful occasion.' },
  { icon: '💍', title: 'Bridesmaid & Groomsmen', desc: 'Personalised hampers for your bridal squad and groomsmen, packed with love and luxury.' },
  { icon: '🏢', title: 'Corporate Gift Hampers', desc: "Sophisticated corporate gifting solutions that reflect your brand's warmth and prestige." },
  { icon: '🌸', title: 'Real Flower Packaging', desc: 'Breathtaking real flower-based luxury packaging that adds a fresh, natural elegance to any gift.' },
  { icon: '🍫', title: 'Dry Fruit & Chocolate', desc: 'Beautifully curated dry fruit and chocolate hampers presented in stunning handcrafted boxes.' },
  { icon: '💒', title: 'Wedding Welcome Hampers', desc: 'Warm and luxurious wedding welcome hampers to greet your guests in the most memorable way.' },
  { icon: '🏡', title: 'Housewarming Packaging', desc: 'Elegant gift packaging for housewarming occasions, crafted to celebrate a beautiful new beginning.' },
  { icon: '🎗️', title: 'Ribbon & Floral Styling', desc: 'Luxury ribbon and floral styling that transforms any gift into a breathtaking work of art.' },
]

const testimonials = [
  { name: 'Bhavesh Agal', text: 'I had curated Diwali hampers from The Golden Wrap Studio for a few CXO level corporate connects, and the response was truly mesmerizing. Everyone absolutely loved the hampers. The meticulous design and diligent attention to detail made each hamper feel special, thoughtful, and memorable.', stars: 5 },
  { name: 'Amar Kaur', text: 'The most creative gifting solutions created by the owner herself. She really pours heart and soul into your special moments. I got a gift made for my Massi for her birthday while I was not in the country, the artist made it such a simple and nice experience for me and created something that my Massi loved very much! Dispatched in 2 days on short notice. Thank you will surely order soon. Highly recommend her services be it for birthdays, wedding favors or baby shower.', stars: 5 },
  { name: 'Apoorva Rathi', text: 'Have tried wrapping from Golden Wrap Studio on some of my most special occasions, and every experience has been absolutely wonderful. Her work is truly elegant and she is very creative and believes in perfection. The way of her styling and detailing is always classy and unique. What makes it even more special is the warmth and grace with which she handles her clients.', stars: 5 },
  { name: 'Chandrika Modani', text: 'Exceptional quality and attention to detail. The hamper looked premium and was beautifully arranged. Highly recommended for anyone looking for unique and classy hampers! Also the owner is too amazing, soft spoken and creative.', stars: 5 },
  { name: 'Piyush Shah', text: 'This is a one stop solution for your luxury hampers, gifting items, home decor and personalised gift hampers. The girl who runs this place is too much talented and full of creativity, she has so many mind blowing ideas you cannot imagine. I would just say if you want your hamper or gift to look luxurious in budget that you must come here.', stars: 5 },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
})

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ]

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
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            style={s.heroLogoWrap}
          >
            <img src="/logo.jpeg" alt="The Golden Wrap Studio" style={s.heroLogoImg} />
          </motion.div>
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
          <h2 style={s.sectionTitle}>What We Create</h2>
          <p style={{ color: '#35623B', fontSize: '1rem', maxWidth: '680px', margin: '16px auto 0', lineHeight: 1.8 }}>
            The Golden Wrap Studio creates luxurious and personalized gifting experiences through premium trousseau packing, elegant hampers, designer torans, wedding gifting, festive packaging, and bespoke gift presentation for every special occasion. ✨
          </p>
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
          {visibleTestimonials.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={s.testCard}
            >
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
    background: `
      radial-gradient(circle at 15% 20%, rgba(212,175,55,0.25) 0%, transparent 8%),
      radial-gradient(circle at 85% 15%, rgba(212,175,55,0.20) 0%, transparent 6%),
      radial-gradient(circle at 25% 85%, rgba(212,175,55,0.18) 0%, transparent 7%),
      radial-gradient(circle at 90% 75%, rgba(212,175,55,0.22) 0%, transparent 8%),
      radial-gradient(circle at 50% 50%, rgba(212,175,55,0.12) 0%, transparent 15%),
      radial-gradient(circle at 10% 50%, rgba(212,175,55,0.15) 0%, transparent 10%),
      radial-gradient(circle at 75% 40%, rgba(212,175,55,0.14) 0%, transparent 8%),
      radial-gradient(circle at 40% 10%, rgba(212,175,55,0.16) 0%, transparent 6%),
      #35623B
    `,
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
  heroLogoWrap: {
    display: 'flex', justifyContent: 'center',
    marginBottom: '28px',
    maxWidth: '520px',
    margin: '0 auto 28px',
    borderRadius: '20px',
    padding: '16px',
    background: 'rgba(212,175,55,0.06)',
    border: '1.5px solid rgba(212,175,55,0.6)',
    boxShadow: '0 0 18px rgba(212,175,55,0.35), 0 0 60px rgba(212,175,55,0.15), inset 0 0 20px rgba(212,175,55,0.08)',
  },
  heroLogoImg: {
    width: '500px',
    maxWidth: '100%',
    height: 'auto',
    objectFit: 'contain',
    mixBlendMode: 'screen',
    filter: 'brightness(1.15) saturate(1.2)',
    borderRadius: '10px',
  },
  heroDesc: { color: '#c8d8c8', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '40px' },
  heroBtns: { display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' },
  btnPrimary: {
    background: 'linear-gradient(135deg,#d4af37,#f0d060)',
    color: '#35623B', padding: '14px 38px', borderRadius: '50px',
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
  statLabel: { color: '#35623B', fontSize: '0.88rem', marginTop: '4px', letterSpacing: '1px' },
  section: { padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' },
  sectionTag: { color: '#d4af37', letterSpacing: '3px', fontSize: '12px', textTransform: 'uppercase', marginBottom: '10px' },
  sectionTitle: { fontFamily: "'Playfair Display',serif", fontSize: '2.4rem', fontWeight: '700', color: '#35623B' },
  featGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '24px' },
  featCard: {
    background: '#fff', border: '1px solid #e8d5a3', borderRadius: '18px',
    padding: '32px 24px', textAlign: 'center',
    boxShadow: '0 4px 20px rgba(212,175,55,0.08)',
  },
  featIcon: { fontSize: '2.8rem', marginBottom: '16px' },
  featTitle: { fontFamily: "'Playfair Display',serif", color: '#35623B', fontSize: '1.15rem', marginBottom: '10px' },
  featDesc: { color: '#35623B', fontSize: '0.9rem', lineHeight: 1.7 },
  banner: {
    background: '#35623B',
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
  testText: { color: '#35623B', lineHeight: 1.8, marginBottom: '16px', fontStyle: 'italic', fontSize: '0.9rem' },
  testName: { color: '#35623B', fontWeight: '700', fontSize: '0.95rem' },
}
