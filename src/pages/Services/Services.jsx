import React from 'react';
import { motion } from 'framer-motion';

import styles from './Services.module.css';

const services = [
  {
    title: 'MERN Stack Development',
    desc: 'Full-stack web applications using MongoDB, Express, React, and Node.js for high performance and scalability.'
  },
  {
    title: 'React Native App Development',
    desc: 'Cross-platform mobile apps with native performance and beautiful UI/UX.'
  },
  {
    title: 'API Development',
    desc: 'Robust, secure, and scalable RESTful and GraphQL APIs for your business needs.'
  },
  {
    title: 'Cloud Deployment (AWS)',
    desc: 'Seamless deployment, scaling, and management of your apps on AWS cloud.'
  }
];

const Services = () => (
  <section className={styles.services}>
    <div className="container">
      <motion.h1
        className={styles.heading}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Our Services
      </motion.h1>
      <div className={styles.cardsGrid}>
        {services.map((service, idx) => (
          <motion.div
            className={styles.card}
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
          >
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
