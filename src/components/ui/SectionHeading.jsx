import { motion } from 'framer-motion';
import './SectionHeading.css';

export default function SectionHeading({ title, subtitle, align = 'center' }) {
  return (
    <motion.div
      className={`section-heading section-heading--${align}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <h2 className="section-heading__title">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
      <div className="section-heading__line" />
    </motion.div>
  );
}
