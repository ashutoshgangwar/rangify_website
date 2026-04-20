import React, { useState } from 'react';
import { motion } from 'framer-motion';

import styles from './Contact.module.css';

const initialState = { name: '', email: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim()) errs.email = 'Email is required.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Invalid email.';
    if (!form.message.trim()) errs.message = 'Message is required.';
    return errs;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm(initialState);
      setTimeout(() => setSubmitted(false), 3500);
    }
  };

  return (
    <section className={styles.contact}>
      <div className="container">
        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Contact Us
        </motion.h1>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={errors.name ? styles.errorInput : ''}
              autoComplete="off"
            />
            {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? styles.errorInput : ''}
              autoComplete="off"
            />
            {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className={errors.message ? styles.errorInput : ''}
            />
            {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
          </div>
          <button type="submit" className={styles.submitBtn}>Send Message</button>
          {submitted && <div className={styles.successMsg}>Thank you! We will get back to you soon.</div>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
