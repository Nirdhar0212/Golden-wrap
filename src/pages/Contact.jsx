import { useState } from 'react'
import { motion } from 'framer-motion'

const info = [
  { icon: '📞', label: 'Phone', value: '+91 97379 61777' },
  { icon: '📍', label: 'Location', value: 'Near, Bn-2 Gokul, opp. Girdhar Park society, nr. Arham elegance apartment, Shanti Nagar, Ahmedabad, Gujarat 380013', link: 'https://maps.app.goo.gl/1MXw2zkXtU8EKYbc7?g_st=aw' },
  { icon: '📸', label: 'Instagram', value: 'the_golden_wrap_studio', link: 'https://www.instagram.com/the_golden_wrap_studio?igsh=d2N2ODc3YjN1dm00&utm_source=qr' },
  { icon: '🕐', label: 'Hours', value: 'Mon–Sat: 10am – 7pm' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{ paddingTop: '72px', backgroundColor: '#fffdf5', minHeight: '100vh' }}>

      {/* Header */}
      <section style={s.header}>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={s.tag}>
          ✦ Get in Touch ✦
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          style={s.title}
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          style={s.subtitle}
        >
          Have a question or custom order? We'd love to hear from you!
        </motion.p>
      </section>

      {/* Body */}
      <section style={s.body}>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}
        >
          <h2 style={s.infoTitle}>Let's Connect</h2>
          <p style={s.infoDesc}>
            Whether you have a question about our products, want to place a custom order,
            or just want to say hello — we're here for you.
          </p>
          <div style={{ marginTop: '32px' }}>
            {info.map((item, i) => (
              <div key={i} style={s.infoRow}>
                <div style={s.infoIcon}>{item.icon}</div>
                <div>
                  <p style={s.infoLabel}>{item.label}</p>
                  <p style={s.infoValue}>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" style={{color: '#35623B', textDecoration: 'none'}}>{item.value}</a>
                    ) : (
                      item.value
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        {submitted ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            style={s.successBox}
          >
            <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🎉</div>
            <h3 style={s.successTitle}>Message Sent!</h3>
            <p style={s.successDesc}>Thank you! We'll get back to you within 24 hours.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            style={s.form}
          >
            <h2 style={{ ...s.infoTitle, marginBottom: '24px' }}>Send a Message</h2>
            {[
              { type: 'text', placeholder: 'Your Name', required: true },
              { type: 'email', placeholder: 'Your Email', required: true },
              { type: 'text', placeholder: 'Subject', required: false },
            ].map((f, i) => (
              <input key={i} type={f.type} placeholder={f.placeholder} required={f.required} style={s.input} />
            ))}
            <textarea placeholder="Your Message" rows={5} required style={{ ...s.input, resize: 'none' }} />
            <motion.button whileTap={{ scale: 0.97 }} type="submit" style={s.submitBtn}>
              Send Message →
            </motion.button>
          </motion.form>
        )}
      </section>
    </div>
  )
}

const s = {
  header: {
    background: '#35623B',
    padding: '64px 24px', textAlign: 'center',
  },
  tag: { color: '#d4af37', letterSpacing: '4px', fontSize: '12px', textTransform: 'uppercase', marginBottom: '14px' },
  title: {
    fontFamily: "'Playfair Display',serif",
    fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: '700', color: '#d4af37', marginBottom: '14px',
  },
  subtitle: { color: '#c8d8c8', fontSize: '1.05rem' },
  body: {
    maxWidth: '1000px', margin: '0 auto', padding: '64px 28px',
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '52px',
  },
  infoTitle: { fontFamily: "'Playfair Display',serif", color: '#35623B', fontSize: '1.8rem', fontWeight: '700' },
  infoDesc: { color: '#35623B', lineHeight: 1.8, marginTop: '12px', fontSize: '0.95rem' },
  infoRow: { display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '24px' },
  infoIcon: {
    width: '46px', height: '46px', borderRadius: '50%',
    background: '#35623B',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '1.1rem', flexShrink: 0,
  },
  infoLabel: { color: '#d4af37', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' },
  infoValue: { color: '#35623B', fontSize: '0.95rem', marginTop: '3px' },
  form: {
    background: '#fff', border: '1px solid #e8d5a3', borderRadius: '20px',
    padding: '36px', boxShadow: '0 4px 24px rgba(212,175,55,0.1)',
    display: 'flex', flexDirection: 'column', gap: '16px',
  },
  input: {
    width: '100%', border: '1.5px solid #e8d5a3', borderRadius: '10px',
    padding: '13px 16px', fontSize: '0.95rem', outline: 'none',
    fontFamily: "'Lato',sans-serif", color: '#1a3a1a', background: '#fffdf5',
  },
  submitBtn: {
    background: 'linear-gradient(135deg,#d4af37,#f0d060)',
    color: '#35623B', border: 'none', padding: '14px',
    borderRadius: '50px', fontWeight: '700', fontSize: '1rem',
    cursor: 'pointer', fontFamily: "'Lato',sans-serif",
  },
  successBox: {
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    justifyContent: 'center', background: '#fff',
    border: '1px solid #e8d5a3', borderRadius: '20px',
    padding: '52px', textAlign: 'center',
    boxShadow: '0 4px 24px rgba(212,175,55,0.1)',
  },
  successTitle: { fontFamily: "'Playfair Display',serif", color: '#35623B', fontSize: '1.6rem', fontWeight: '700', marginBottom: '10px' },
  successDesc: { color: '#35623B', fontSize: '1rem' },
}
