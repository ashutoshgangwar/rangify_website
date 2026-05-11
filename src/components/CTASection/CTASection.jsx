import React from 'react';
import { motion } from 'framer-motion';
import styles from './CTASection.module.css';
import { Link } from 'react-router-dom';

const CTASection = () => (
  <section className={styles.cta}>
    <div className="container">
      <motion.div
        className={styles.ctaBox}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2>Ready to build something amazing?</h2>
        <p>Let’s turn your ideas into reality. Contact us for a free consultation.</p>
        <Link to="/contact" className={styles.ctaBtn}>Get Started</Link>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
