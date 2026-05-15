import React from 'react';
import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: '',
    role: 'Startup Founder',
    text: 'Rangify delivered our MVP in record time while maintaining exceptional quality across every feature. From initial discussions to final deployment, their team stayed aligned with our vision, provided valuable technical insights, and ensured a smooth development process. Their commitment and attention to detail made a significant difference in bringing our product to life.'
  },
  {
    name: '',
    role: 'Product Manager',
    text: 'The AI integration was executed seamlessly and had an immediate impact on our team’s productivity. Rangify’s team demonstrated strong technical expertise, clear communication, and a deep understanding of our requirements. Their ability to simplify complex AI workflows made the entire process smooth and efficient. I highly recommend their expertise.'
  },
  {
    name: '',
    role: 'CTO, SaaS Company',
    text: 'Their cloud deployment process was seamless, secure, and highly efficient. Rangify ensured everything was configured for scalability and performance from day one. Their ongoing support has been equally impressive—responsive, reliable, and proactive. We trust Rangify as our go-to partner for all our technology needs.'
  },
];

const Testimonials = () => (
  <section className={styles.testimonials}>
    <div className="container">
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        What Our Clients Say
      </motion.h2>
      <div className={styles.cardsGrid}>
        {testimonials.map((t, idx) => (
          <motion.div
            className={styles.card}
            key={t.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
          >
            <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>
            <div className={styles.author}>{t.name}</div>
            <div className={styles.role}>{t.role}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
