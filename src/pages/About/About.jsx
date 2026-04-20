import React from 'react';
import { motion } from 'framer-motion';

import styles from './About.module.css';

const About = () => (
  <section className={styles.about}>
    <div className="container">
      <motion.h1
        className={styles.heading}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        About Rangify Technology
      </motion.h1>
      <motion.p
        className={styles.text}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Rangify Technology is a premium tech company focused on building scalable, modern, and AI-powered solutions for startups and enterprises. Our team of passionate engineers and designers leverages the latest technologies to deliver exceptional web, mobile, and cloud products.
      </motion.p>
      <div className={styles.grid}>
        <motion.div className={styles.card} initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.7}}>
          <h3>Our Mission</h3>
          <p>Empower businesses to innovate and grow with world-class technology and design.</p>
        </motion.div>
        <motion.div className={styles.card} initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.7, delay:0.1}}>
          <h3>Our Vision</h3>
          <p>Be the most trusted partner for digital transformation and AI-driven solutions globally.</p>
        </motion.div>
        <motion.div className={styles.card} initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.7, delay:0.2}}>
          <h3>Our Values</h3>
          <p>Innovation, Quality, Transparency, and Customer Success.</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
