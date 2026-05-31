'use client';
import { useState } from 'react';
import styles from './page.module.css';

const contactInfo = [
  { label: 'Email',    value: 'Jhareldmanalo006@gmail.com',          href: 'mailto:Jhareld@example.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/jhareldmanalo', href: 'https://linkedin.com' },
  { label: 'GitHub',   value: 'github.com/jhareld-dotcom',      href: 'https://github.com' },

];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real project, you would send the form data to an API here
    setSubmitted(true);
  };

  return (
    <div className="container">
      <div className="page-header">
        <p className="label">Contact</p>
        <h1>Let us talk</h1>
        <p>Have a project, opportunity, or just want to say hello? My inbox is always open.</p>
      </div>

      <div className={styles.layout}>
        <div className={styles.formSide}>
          {submitted ? (
            <div className={styles.successBox}>
              <span className={styles.successIcon}>✓</span>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. I will get back to you within 24-48 hours.</p>
              <button className="btn btn-outline" onClick={() => setSubmitted(false)}>Send Another</button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className="grid-2">
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="name">Your Name</label>
                  <input id="name" name="name" type="text" placeholder="Jane Doe" className={styles.input} value={form.name} onChange={handleChange} required />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" placeholder="jane@example.com" className={styles.input} value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="subject">Subject</label>
                <select id="subject" name="subject" className={styles.input} value={form.subject} onChange={handleChange} required>
                  <option value="">Select a topic...</option>
                  <option value="internship">Internship Opportunity</option>
                  <option value="freelance">Freelance Project</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other">Just Saying Hi</option>
                </select>
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell me about your project or opportunity..." className={`${styles.input} ${styles.textarea}`} value={form.message} onChange={handleChange} required rows={6} />
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          )}
        </div>

        <aside className={styles.infoSide}>
          <div className={styles.infoBox}>
            <h3 className={styles.infoTitle}>Contact Info</h3>
            <div className={styles.infoList}>
              {contactInfo.map(({ label, value, href }) => (
                <div key={label} className={styles.infoItem}>
                  <span className={styles.infoLabel}>{label}</span>
                  <a href={href} target="_blank" rel="noopener noreferrer" className={styles.infoValue}>{value}</a>
                </div>
              ))}
            </div>
          </div>
       
        </aside>
      </div>
    </div>
  );
}
