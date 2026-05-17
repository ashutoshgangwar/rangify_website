import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import styles from './Contact.module.css';

const initialState = { firstName: '', lastName: '', email: '', countryCode: '+91', phone: '', message: '' };

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Contact = () => {
  const [form, setForm] = useState(initialState);
    const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState({ first: '', last: '' });
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

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

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length !== 0) return;

    setLoading(true);
    setApiError('');
    try {
      const payload = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phoneNumber: `${form.countryCode}${form.phone}`,
        message: form.message,
      };
      const url = `${API_BASE_URL}/api/contact`;
      console.log('[Contact] API URL:', url);
      console.log('[Contact] Payload:', payload);

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      console.log('[Contact] Response status:', res.status, res.statusText);
      const data = await res.json().catch(() => null);
      console.log('[Contact] Response body:', data);

      if (!res.ok) throw new Error(data?.message || `Server error (${res.status}). Please try again.`);
      setSubmittedName({ first: form.firstName, last: form.lastName });
      setSubmitted(true);
      setForm(initialState);
    } catch (err) {
      console.error('[Contact] API error:', err);
      setApiError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.contact}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={styles.contactWrapper}
        >
          <h1 className={styles.heading}>Get in Touch</h1>

          <div className={styles.formSection}>
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
                    placeholder="First Name"
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
                    placeholder="Last Name"
                  />
                  {errors.lastName && <span className={styles.errorMsg}>{errors.lastName}</span>}
                </div>
              </div>

              <div className={styles.formGrid}>
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
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                </div>

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
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
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
                      placeholder="1234567890"
                    />
                  </div>
                  {errors.phone && <span className={styles.errorMsg}>{errors.phone}</span>}
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
                    placeholder="Share your requirements, timeline, and goals..."
                  />
                  {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
                </div>

                <button type="submit" className={styles.submitBtn} disabled={loading}>
                  {loading ? 'Sending…' : 'Send Message'}
                </button>
                {apiError && <div className={styles.errorMsg}>{apiError}</div>}
              </form>
            </div>
        </motion.div>
      </div>
      {submitted && (
        <div className={styles.modalOverlay} onClick={() => setSubmitted(false)}>
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            onClick={e => e.stopPropagation()}
          >
            <div className={styles.modalIcon}>✓</div>
            <h2 className={styles.modalTitle}>
              Hey {submittedName.first} {submittedName.last}!
            </h2>
            <p className={styles.modalMsg}>
              Your query has been received. We'll get back to you soon.
            </p>
            <button className={styles.modalBtn} onClick={() => { setSubmitted(false); navigate('/'); }}>Got it</button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Contact;
