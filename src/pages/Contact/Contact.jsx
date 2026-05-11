import React, { useState } from 'react';
import { motion } from 'framer-motion';

import styles from './Contact.module.css';

const initialState = { firstName: '', lastName: '', email: '', countryCode: '+1', phone: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = 'First name is required.';
    if (!form.lastName.trim()) errs.lastName = 'Last name is required.';
    if (!form.email.trim()) errs.email = 'Email is required.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Invalid email.';
    if (!form.phone.trim()) errs.phone = 'Contact number is required.';
    else if (!/^\d{7,15}$/.test(form.phone)) errs.phone = 'Contact number must contain only digits.';
    if (!form.message.trim()) errs.message = 'Please enter your message.';
    return errs;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    const nextValue = name === 'phone' ? value.replace(/\D/g, '') : value;
    setForm({ ...form, [name]: nextValue });
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={styles.formCard}
        >
          <h1 className={styles.heading}>Contact</h1>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className={errors.firstName ? styles.errorInput : ''}
                  autoComplete="off"
                />
                {errors.firstName && <span className={styles.errorMsg}>{errors.firstName}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className={errors.lastName ? styles.errorInput : ''}
                  autoComplete="off"
                />
                {errors.lastName && <span className={styles.errorMsg}>{errors.lastName}</span>}
              </div>
            </div>

            <div className={styles.formGrid}>
            
              <div className={styles.formGroup}>
                <label htmlFor="phone">Contact Number</label>
                <div className={styles.phoneRow}>
                  <select
                    id="countryCode"
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleChange}
                    className={styles.countryCode}
                    aria-label="Country code"
                  >
                    <option value="+1">+1</option>
                    <option value="+91">+91</option>
                    <option value="+44">+44</option>
                    <option value="+61">+61</option>
                    <option value="+971">+971</option>
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={errors.phone ? styles.errorInput : ''}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={15}
                    autoComplete="off"
                  />
                </div>
                {errors.phone && <span className={styles.errorMsg}>{errors.phone}</span>}
              </div>

               <div className={styles.formGroup}>
                <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
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
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Tell us about your project</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                className={errors.message ? styles.errorInput : ''}
                placeholder="Share your requirements, timeline, and goals."
              />
              {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
            </div>

            <button type="submit" className={styles.submitBtn}>Submit</button>
            {submitted && <div className={styles.successMsg}>Thank you! We will get back to you soon.</div>}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
