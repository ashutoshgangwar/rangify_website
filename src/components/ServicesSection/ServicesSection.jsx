import React from 'react';
import { motion } from 'framer-motion';
import styles from './ServicesSection.module.css';

const services = [
  {
    title: 'Web Development',
    desc: 'Modern, scalable, and blazing fast web apps using MERN stack.',
    icon: '🌐',
  },
  {
    title: 'App Development',
    desc: 'Cross-platform mobile apps with React Native and seamless UX.',
    icon: '📱',
  },
  {
    title: 'AI Solutions',
    desc: 'Harness advanced AI with LangChain orchestration and Llama-based models for automation, analysis, and scalable intelligent systems tailored to your business.',
    icon: '🤖',
  },
];

const ServicesSection = () => (
  <section className={styles.services} id="services">
    <div className="container">
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Our Services
      </motion.h2>
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
            <div className={styles.icon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
