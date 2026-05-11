import React from 'react';
import { motion } from 'framer-motion';
import styles from './WhyChooseUs.module.css';

const features = [
  {
    title: 'Premium Quality',
    desc: 'We deliver robust, scalable, and maintainable solutions with best practices.',
  },
  {
    title: 'Cutting-edge Tech',
    desc: 'We use the latest frameworks, cloud, and AI to future-proof your business.',
  },
  {
    title: 'Agile & Transparent',
    desc: 'We work closely with you, providing clear communication and fast delivery.',
  },
];

const WhyChooseUs = () => (
  <section className={styles.why}>
    <div className="container">
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Why Choose Us
      </motion.h2>
      <div className={styles.featuresGrid}>
        {features.map((feature, idx) => (
          <motion.div
            className={styles.feature}
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
          >
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
