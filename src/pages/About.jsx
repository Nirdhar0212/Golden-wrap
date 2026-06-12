import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
})

export default function About() {
  return (
    <div style={{ paddingTop: '72px' }}>

      {/* ── HERO HEADER ── */}
      <section style={s.header}>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={s.tag}>
          ✦ Our Story ✦
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          style={s.title}
        >
          About The Golden Wrap Studio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          style={s.subtitle}
        >
          Transforming gifts into beautiful experiences, one wrap at a time
        </motion.p>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={s.contentWrap}>

        {/* About Sonal */}
        <motion.div {...fadeUp()} style={s.founderCard}>
          <div style={s.founderContent} data-founder-content>
            <div style={s.founderImageWrap} data-founder-image-wrap>
              <img src="/images/about-us.jpeg" alt="Sonal - Founder" style={s.founderImage} />
            </div>
            <div style={s.founderTextWrap} data-founder-text-wrap>
              <h2 style={s.founderTitle}>About the Founder</h2>
              <div style={s.founderNameContainer}>
                <h3 style={s.founderName}>SONAL</h3>
                <h3 style={s.founderName}>SHAH</h3>
              </div>
            </div>
          </div>

          <div style={s.contentText}>
            <p style={s.paragraph}>
              Hi, I'm <strong>Sonal</strong>, founder of <strong>The Golden Wrap Studio</strong>.
            </p>

            <p style={s.paragraph}>
              A graduate of Nirma University, I built my professional career as a Real Estate Consultant in the corporate world. While I enjoyed my corporate journey, creativity and aesthetics always held a special place in my heart.
            </p>

            <p style={s.paragraph}>
              The idea for The Golden Wrap Studio was born during my own wedding preparations. While curating and packing my trousseau, I discovered a passion for transforming gifts into beautiful experiences. What started as a personal project soon turned into a professional venture driven by creativity, attention to detail, and a love for thoughtful presentation.
            </p>

            <p style={s.paragraph}>
              I began with <strong>trousseau packing and customized envelopes</strong>, and gradually expanded into <strong>designer torans, floral gift packaging, luxury hampers, festive gifting, wedding gifting, and personalized packaging solutions</strong>. Over time, The Golden Wrap Studio has evolved into a brand dedicated to making every celebration more elegant, memorable, and meaningful.
            </p>

            <p style={s.paragraph}>
              Today, we take pride in creating bespoke gifting experiences that blend tradition with modern aesthetics, ensuring every gift tells a beautiful story before it is even opened.
            </p>
          </div>

          {/* Mission Statement */}
          <div style={s.missionBox}>
            <div style={s.missionIcon}>✨</div>
            <p style={s.missionText}>
              <strong>At The Golden Wrap Studio, we believe that presentation is not just packaging—it's an expression of love, care, and celebration.</strong>
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div {...fadeUp(0.2)} style={s.valuesSection}>
          <h2 style={s.sectionTitle}>Our Values</h2>
          <div style={s.valuesGrid}>
            {[
              { icon: '💎', title: 'Premium Quality', desc: 'We use only the finest materials and craftsmanship in every creation.' },
              { icon: '🎨', title: 'Creativity', desc: 'Every design is thoughtfully curated to reflect your unique celebration.' },
              { icon: '❤️', title: 'Care & Detail', desc: 'Attention to detail and love goes into every single wrap and presentation.' },
              { icon: '✨', title: 'Elegance', desc: 'We blend tradition with modern aesthetics to create timeless beauty.' },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                style={s.valueCard}
              >
                <div style={s.valueIcon}>{v.icon}</div>
                <h3 style={s.valueTitle}>{v.title}</h3>
                <p style={s.valueDesc}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp(0.4)} style={s.ctaSection}>
          <h2 style={s.ctaTitle}>Ready to Create Your Perfect Gift Experience?</h2>
          <p style={s.ctaDesc}>
            Let's work together to make your celebration truly unforgettable. Explore our collections or reach out for custom orders.
          </p>
          <div style={s.ctaBtns}>
            <Link to="/products" style={s.btnPrimary}>Explore Products</Link>
            <Link to="/contact" style={s.btnOutline}>Get in Touch</Link>
          </div>
        </motion.div>

      </section>

      <style>{`
        @media (max-width: 1024px) {
          [data-founder-content] {
            flex-direction: column !important;
            flex-wrap: wrap !important;
            gap: 24px !important;
          }
          [data-founder-image-wrap] {
            flex: 1 1 100% !important;
            max-width: 100% !important;
            width: 100% !important;
          }
          [data-founder-image-wrap] img {
            height: 300px !important;
          }
          [data-founder-text-wrap] {
            flex: 1 1 100% !important;
            min-width: 100% !important;
            width: 100% !important;
            margin: 0 !important;
            text-align: center !important;
          }
          [data-founder-text-wrap] h3 {
            text-align: center !important;
          }
        }
      `}</style>

    </div>
  )
}

const s = {
  header: {
    background: `
      radial-gradient(circle at 15% 20%, rgba(212,175,55,0.25) 0%, transparent 8%),
      radial-gradient(circle at 85% 15%, rgba(212,175,55,0.20) 0%, transparent 6%),
      radial-gradient(circle at 25% 85%, rgba(212,175,55,0.18) 0%, transparent 7%),
      radial-gradient(circle at 90% 75%, rgba(212,175,55,0.22) 0%, transparent 8%),
      #35623B
    `,
    padding: '80px 24px 60px', textAlign: 'center',
    position: 'relative', overflow: 'hidden',
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
  contentWrap: {
    maxWidth: '900px', margin: '0 auto',
    padding: '60px 28px 80px',
  },
  founderCard: {
    background: '#fff', border: '1px solid #e8d5a3',
    borderRadius: '24px', padding: '48px 40px',
    boxShadow: '0 4px 24px rgba(212,175,55,0.1)',
    marginBottom: '60px',
  },
  founderContent: {
    display: 'flex', gap: '40px', alignItems: 'flex-start', marginBottom: '32px', flexWrap: 'nowrap',
  },
  founderImageWrap: {
    flex: '0 0 380px',
  },
  founderImage: {
    width: '100%', height: '380px', borderRadius: '16px', objectFit: 'cover', boxShadow: '0 8px 24px rgba(212,175,55,0.15)',
  },
  founderImageResponsive: {
    width: '100%', height: '300px',
  },
  founderTextWrap: {
    flex: '1 1 auto', minWidth: '280px', margin: '109px 10px 32px 23px',
  },
  founderTitle: {
    fontFamily: "'Playfair Display',serif",
    color: '#35623B', fontSize: '2rem', fontWeight: '700',
    textAlign: 'center', marginBottom: '8px',
  },
  founderName: {
    fontFamily: "'Playfair Display',serif",
    color: '#d4af37', fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: '700',
    textAlign: 'left', marginBottom: '0px', lineHeight: 1,
  },
  founderNameContainer: {
    textAlign: 'left', marginTop: '16px',
  },
  founderSubtitle: {
    color: '#d4af37', fontSize: '1rem',
    textAlign: 'center', marginBottom: '32px',
    fontWeight: '600', letterSpacing: '1px',
  },
  contentText: {
    marginBottom: '32px',
  },
  paragraph: {
    color: '#35623B', fontSize: '0.95rem', lineHeight: 1.8,
    marginBottom: '20px', textAlign: 'justify',
  },
  missionBox: {
    background: 'linear-gradient(135deg, rgba(212,175,55,0.08), rgba(212,175,55,0.03))',
    border: '2px solid #d4af37', borderRadius: '16px',
    padding: '28px 24px', textAlign: 'center',
    marginTop: '40px',
  },
  missionIcon: {
    fontSize: '2.2rem', marginBottom: '12px',
  },
  missionText: {
    color: '#35623B', fontSize: '1rem', lineHeight: 1.8,
    fontWeight: '500',
  },
  valuesSection: {
    marginBottom: '60px',
  },
  sectionTitle: {
    fontFamily: "'Playfair Display',serif",
    color: '#35623B', fontSize: '2rem', fontWeight: '700',
    textAlign: 'center', marginBottom: '40px',
  },
  valuesGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '28px',
  },
  valueCard: {
    background: '#fff', border: '1px solid #e8d5a3',
    borderRadius: '18px', padding: '28px 24px',
    textAlign: 'center',
    boxShadow: '0 4px 16px rgba(212,175,55,0.08)',
  },
  valueIcon: {
    fontSize: '2.5rem', marginBottom: '12px',
  },
  valueTitle: {
    fontFamily: "'Playfair Display',serif",
    color: '#35623B', fontSize: '1.15rem', fontWeight: '700',
    marginBottom: '10px',
  },
  valueDesc: {
    color: '#35623B', fontSize: '0.9rem', lineHeight: 1.6,
  },
  ctaSection: {
    background: '#35623B', borderRadius: '20px',
    padding: '48px 40px', textAlign: 'center',
  },
  ctaTitle: {
    fontFamily: "'Playfair Display',serif",
    color: '#d4af37', fontSize: 'clamp(1.4rem, 3vw, 2rem)',
    fontWeight: '700', marginBottom: '16px',
  },
  ctaDesc: {
    color: '#c8d8c8', fontSize: '1rem', lineHeight: 1.8,
    maxWidth: '500px', margin: '0 auto 28px',
  },
  ctaBtns: {
    display: 'flex', gap: '16px', justifyContent: 'center',
    flexWrap: 'wrap', marginTop: '28px',
  },
  btnPrimary: {
    background: 'linear-gradient(135deg,#d4af37,#f0d060)',
    color: '#35623B', padding: '12px 32px',
    borderRadius: '50px', fontWeight: '700', fontSize: '0.95rem',
    textDecoration: 'none',
    boxShadow: '0 4px 16px rgba(212,175,55,0.3)',
  },
  btnOutline: {
    border: '2px solid #d4af37', color: '#d4af37',
    padding: '12px 32px', borderRadius: '50px',
    fontWeight: '700', fontSize: '0.95rem',
    textDecoration: 'none',
  },
}
