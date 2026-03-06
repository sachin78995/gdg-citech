import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SectionHeading from '../ui/SectionHeading';
import './Contact.css';

const CONTACT_CHANNELS = [
  { icon: '📧', label: 'Email', value: 'gdsc@cambridge.edu.in', color: '#4285f4' },
  { icon: '📍', label: 'Location', value: 'Cambridge Institute of Technology, Bengaluru', color: '#ea4335' },
  { icon: '🕐', label: 'Response', value: ' Active 24/7', color: '#34a853' },
];
const Social_links = [
{label:'WhatsApp',value:'https://whatsapp.com/channel/0029Vb6ObkrEawduwzGJ5Z2D'},
{label:'Instagram',value:'https://www.instagram.com/gdg.cit?igsh=Y2szZG1hazE5OHlx'},
{label:'LinkedIn',value:'https://www.linkedin.com/company/gdgcit'},
{label:'GitHub',value:'#'},
// {label:'Discord',value='https://discord.gg/gdsc-citech'},

]; 

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);
  const [charCount, setCharCount] = useState(0);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Invalid email format';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    
    // Call EmailJS
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID || import.meta.env.VITE_APP_EMAILJS_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      import.meta.env.VITE_APP_PUBLIC_KEY
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', email: '', message: '' });
        setCharCount(0);
      }, 4000);
    })
    .catch((error) => {
      console.error('FAILED...', error);
      // Optional: Add some error handling UI if needed
    });
  };

  const handleChange = (field) => (e) => {
    const val = e.target.value;
    setForm({ ...form, [field]: val });
    if (field === 'message') setCharCount(val.length);
    if (errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };

  const filledCount = [form.name, form.email, form.message].filter((v) => v.trim()).length;

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a question, idea, or want to collaborate? We'd love to hear from you."
        />

        <div className="contact__layout">
          {/* Left — Info Panel */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="contact__info-header">
              <div className="contact__info-icon">💬</div>
              <h3 className="contact__info-title">Let's Connect</h3>
              <p className="contact__info-desc">
                Whether you have a brilliant idea, a burning question, or just want to say hi — our inbox is always open.
              </p>
            </div>

            <div className="contact__channels">
              {CONTACT_CHANNELS.map((ch, i) => (
                <motion.div
                  key={ch.label}
                  className="contact__channel"
                  style={{ '--ch-color': ch.color }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <span className="contact__channel-icon">{ch.icon}</span>
                  <div>
                    <span className="contact__channel-label">{ch.label}</span>
                    <span className="contact__channel-value">{ch.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="contact__socials">
              <span className="contact__socials-label">Find us on</span>
              <div className="contact__socials-row">
              {Social_links.map((s) => (
                <span key={s.label} className="contact__social-chip" onClick={() => window.open(s.value, '_blank')}>{s.label}</span>
              ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className="contact__form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Progress indicator */}
            <div className="contact__progress">
              <div className="contact__progress-bar">
                <motion.div
                  className="contact__progress-fill"
                  animate={{ width: `${(filledCount / 3) * 100}%` }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </div>
              <span className="contact__progress-text">{filledCount}/3 fields completed</span>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  className="contact__success"
                  key="success"
                  initial={{ opacity: 0, scale: 0.85, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="contact__success-ring">
                    <div className="contact__success-icon">✓</div>
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <div className="contact__success-dots">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="contact__success-dot"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                      />
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  className="contact__form"
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Name & Email side by side */}
                  <div className="contact__row">
                    {['name', 'email'].map((field) => (
                      <div
                        key={field}
                        className={`contact__field ${focused === field ? 'contact__field--focused' : ''} ${errors[field] ? 'contact__field--error' : ''} ${form[field].trim() ? 'contact__field--filled' : ''}`}
                      >
                        <label className="contact__label">
                          <span className="contact__label-dot" />
                          {field.charAt(0).toUpperCase() + field.slice(1)}
                        </label>
                        <input
                          type={field === 'email' ? 'email' : 'text'}
                          className="contact__input"
                          value={form[field]}
                          onChange={handleChange(field)}
                          onFocus={() => setFocused(field)}
                          onBlur={() => setFocused(null)}
                          placeholder={field === 'name' ? 'John Doe' : 'john@example.com'}
                        />
                        {errors[field] && (
                          <motion.span
                            className="contact__error"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            ⚠ {errors[field]}
                          </motion.span>
                        )}
                        <div className="contact__field-line" />
                      </div>
                    ))}
                  </div>

                  {/* Message */}
                  <div
                    className={`contact__field ${focused === 'message' ? 'contact__field--focused' : ''} ${errors.message ? 'contact__field--error' : ''} ${form.message.trim() ? 'contact__field--filled' : ''}`}
                  >
                    <label className="contact__label">
                      <span className="contact__label-dot" />
                      Message
                    </label>
                    <textarea
                      className="contact__input contact__textarea"
                      value={form.message}
                      onChange={handleChange('message')}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      rows={5}
                      placeholder="Tell us about your idea, question, or how you'd like to collaborate..."
                    />
                    <div className="contact__textarea-footer">
                      <span className="contact__char-count">{charCount} characters</span>
                      {errors.message && (
                        <motion.span
                          className="contact__error"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          ⚠ {errors.message}
                        </motion.span>
                      )}
                    </div>
                    <div className="contact__field-line" />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    className="contact__submit"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="contact__submit-text">Send Message</span>
                    <span className="contact__submit-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </span>
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
