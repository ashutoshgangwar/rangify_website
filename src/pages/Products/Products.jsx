import React from 'react';
import { motion } from 'framer-motion';

import styles from './Products.module.css';

const products = [
  {
    title: 'Fitness App',
    desc: 'A modern fitness tracking app with AI-powered recommendations and analytics.'
  },
  {
    title: 'Parking Management System',
    desc: 'Smart parking solution for cities and businesses with real-time monitoring.'
  },
  {
    title: 'Business Automation Tool',
    desc: 'Automate repetitive business processes with our customizable automation suite.'
  }
];

const Products = () => (
  <section className={styles.products}>
    <div className="container">
      <motion.h1
        className={styles.heading}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Our Products & Solutions
      </motion.h1>
      <div className={styles.cardsGrid}>
        {products.map((product, idx) => (
          <motion.div
            className={styles.card}
            key={product.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
          >
            <h3>{product.title}</h3>
            <p>{product.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
