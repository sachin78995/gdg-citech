import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import './About.css';

const pillars = [
  {
    id: 'learn',
    title: 'LEARN',
    color: '#ea4335',
    icon: '',
    summary: 'Master cutting-edge technologies through hands-on workshops and expert-led sessions.',
    details:
      'Dive deep into the latest tech stacks — from AI/ML and cloud computing to web3 and mobile dev. Our curated learning paths and peer mentoring ensure you stay ahead of the curve.',
  },
  {
    id: 'connect',
    title: 'CONNECT',
    color: '#4285f4',
    icon: '',
    summary: 'Join a global network of passionate developers and tech enthusiasts.',
    details:
      'Network with industry professionals, Google Developer Experts, and fellow students. Build lasting connections through meetups, online communities, and collaborative projects.',
  },
  {
    id: 'grow',
    title: 'GROW',
    color: '#34a853',
    icon: '',
    summary: 'Accelerate your career with real-world experience and leadership opportunities.',
    details:
      'Take on leadership roles, mentor newcomers, speak at events, and build a portfolio that stands out. We provide the platform — you bring the passion.',
  },
  {
    id: 'build',
    title: 'BUILD',
    color: '#fbbc04',
    icon: '',
    summary: 'Create impactful solutions by collaborating on innovative projects.',
    details:
      'From hackathons to open-source contributions, turn ideas into reality. Work with teams on projects that solve real problems and push technological boundaries.',
  },
];

function PillarCard({ pillar, index }) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -15;
    cardRef.current.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${y}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)';
  };

  return (
    <motion.div
      ref={cardRef}
      className={`pillar-card ${expanded ? 'pillar-card--expanded' : ''}`}
      style={{ '--pillar-color': pillar.color }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="pillar-card__glow" />
      <div className="pillar-card__content">
        <span className="pillar-card__icon">{pillar.icon}</span>
        <h3 className="pillar-card__title">{pillar.title}</h3>
        <p className="pillar-card__summary">{pillar.summary}</p>
        <AnimatePresence>
          {expanded && (
            <motion.p
              className="pillar-card__details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
            >
              {pillar.details}
            </motion.p>
          )}
        </AnimatePresence>
        <span className="pillar-card__expand">
          {expanded ? '▲ Less' : '▼ More'}
        </span>
      </div>
      <div className="pillar-card__border" />
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <SectionHeading
          title="Who We Are"
          subtitle="GDG-CITech is a vibrant university developer community powered by Google, driven by passion, and built on four foundational pillars."
        />
        <div className="about__grid">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
