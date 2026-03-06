import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import './Team.css';
import { teamMembers, volunteers } from '../../data/team';

// Helper to filter members by role keywords
const getMembersForDomain = (keywords) => {
  const all = [...teamMembers, ...volunteers];
  return all.filter(m => keywords.some(k => m.role.toLowerCase().includes(k.toLowerCase())));
};

export const DOMAINS = [
  {
    id: 'leadership',
    name: 'Core Leadership',
    shortName: 'LEADERSHIP',
    color: '#ea4335',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 10L40 26L58 28L44 40L48 56L32 48L16 56L20 40L6 28L24 26L32 10Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    members: teamMembers.filter(m => m.role.toLowerCase().includes('lead')),
  },
  {
    id: 'web',
    name: 'Web Development',
    shortName: 'WEB DEV',
    color: '#4285f4',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 16L8 32L20 48" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44 16L56 32L44 48" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M36 12L28 52" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    ),
    members: getMembersForDomain(['web-dev', 'web development']),
  },
  {
    id: 'cyber',
    name: 'Cyber Security',
    shortName: 'CYBER SEC',
    color: '#34a853',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 8L12 18V30C12 44 20.5 53.5 32 56C43.5 53.5 52 44 52 30V18L32 8Z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round"/>
        <path d="M26 32L30 36L38 28" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    members: getMembersForDomain(['cyber']),
  },
  {
    id: 'curation',
    name: 'Curation',
    shortName: 'CURATION',
    color: '#f9ab00',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M16 12h32v40H16z" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
         <path d="M24 24h16M24 32h16M24 40h8" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
      </svg>
    ),
    members: getMembersForDomain(['curation']),
  },
  {
    id: 'design',
    name: 'UI/UX Design',
    shortName: 'DESIGN',
    color: '#ea4335',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 8C18.7 8 8 18.7 8 32" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M32 8C45.3 8 56 18.7 56 32" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M56 32C56 45.3 45.3 56 32 56" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
        <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="3" fill="currentColor" fillOpacity="0.15"/>
        <circle cx="32" cy="32" r="3" fill="currentColor"/>
      </svg>
    ),
    members: getMembersForDomain(['design']),
  },
  {
    id: 'embedded',
    name: 'Embedded Systems',
    shortName: 'EMBEDDED',
    color: '#4285f4',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="16" y="16" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 24H8M16 32H8M16 40H8M48 24H56M48 32H56M48 40H56M24 16V8M32 16V8M40 16V8M24 48V56M32 48V56M40 48V56" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
      </svg>
    ),
    members: getMembersForDomain(['embedded']),
  },
  {
    id: 'marketing',
    name: 'Marketing & Sponsorships',
    shortName: 'MARKETING',
    color: '#34a853',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 40L24 28L36 36L52 16" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44 16H52V24" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 56H48" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
      </svg>
    ),
    members: getMembersForDomain(['marketing']),
  },
  {
    id: 'social',
    name: 'Social Media',
    shortName: 'SOCIAL',
    color: '#f9ab00',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 52.344C32 52.344 10.667 36 10.667 21a9.333 9.333 0 0117.813-4.053L32 24.667l3.52-7.72A9.333 9.333 0 0153.333 21c0 15-21.333 31.344-21.333 31.344z" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    members: getMembersForDomain(['social media']),
  }
].filter(d => d.members.length > 0); // only show domains that have members

/* ── Domain Icon Card ── */
function DomainIcon({ domain, index, onSelect }) {
  return (
    <motion.div
      className="domain-icon"
      style={{ '--domain-color': domain.color }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      onClick={() => onSelect(domain.id)}
    >
      <div className="domain-icon__circle">
        <div className="domain-icon__ring" />
        <div className="domain-icon__svg">{domain.icon}</div>
        <div className="domain-icon__glow" />
      </div>
      <h4 className="domain-icon__name">{domain.shortName}</h4>
    </motion.div>
  );
}

export default function Team({ onDomainSelect }) {
  return (
    <section id="team" className="team section">
      <div className="container">
        <SectionHeading
          title="Our Domains"
          subtitle="Explore our specialized domains — click on any to meet the team behind it."
        />

        <motion.div
          className="team__domains"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {DOMAINS.map((domain, i) => (
            <DomainIcon
              key={domain.id}
              domain={domain}
              index={i}
              onSelect={onDomainSelect}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

