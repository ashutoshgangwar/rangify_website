import React from 'react';
import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Amit S.',
    role: 'Startup Founder',
    text: 'Rangify delivered our MVP in record time with amazing quality. Their team truly cares about our vision.'
  },
  {
    name: 'Priya R.',
    role: 'Product Manager',
    text: 'The AI integration was seamless and boosted our productivity. Highly recommend their expertise!'
  },
  {
    name: 'John D.',
    role: 'CTO, SaaS Company',
    text: 'Their cloud deployment and support are top-notch. We trust Rangify for all our tech needs.'
  },
];

const Testimonials = () => (
  <section className={styles.testimonials}>
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
  </section>
);

export default Testimonials;
