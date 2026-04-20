import React from 'react';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Transforming Ideas into <span className={styles.gradientText}>Scalable Tech Solutions</span>
        </motion.h1>
        <motion.p
          className={styles.subheading}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          We build modern web, mobile and AI-powered applications
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <Link to="/contact" className={styles.ctaBtn}>
            Get Started
          </Link>
        </motion.div>
      </div>
      <div className={styles.heroBg} />
    </section>
  );
};

export default HeroSection;
