import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DOMAINS } from './Team';
import './DomainPage.css';

/* ── Member Profile Modal ── */
function MemberProfile({ member, domainColor, domainName, onClose }) {
  const initials = member.name
    .split(' ')
    .map((w) => w[0])
    .join('');

  return (
    <motion.div
      className="profile-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        className="profile"
        style={{ '--p-color': domainColor }}
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button className="profile__close" onClick={onClose}>✕</button>

        {/* Top accent */}
        <div className="profile__accent" />

        <div className="profile__layout">
          {/* Left — Large avatar */}
          <div className="profile__left">
            <div className="profile__avatar-wrap">
              <div className="profile__avatar" style={{ overflow: 'hidden' }}>
                {member.image ? (
                  <img src={member.image} alt={member.name} style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
                ) : (
                  <span className="profile__initials">{initials}</span>
                )}
              </div>
              <div className="profile__avatar-ring" />
              <div className="profile__avatar-ring profile__avatar-ring--outer" />
              <div className="profile__avatar-glow" />
            </div>

            {/* Domain badge */}
            <div className="profile__domain-badge">
              {domainName}
            </div>

            {/* Social links */}
            <div className="profile__socials">
              {member.social?.github && (
                <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="profile__social" title="GitHub">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
                  </svg>
                </a>
              )}
              {member.social?.linkedin && (
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="profile__social" title="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              )}
              {member.social?.instagram && (
                <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="profile__social" title="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.169a1.44 1.44 0 100-2.881 1.44 1.44 0 000 2.881z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          <div className="profile__right">
            <h2 className="profile__name">{member.name}</h2>
            <p className="profile__role" style={{ color: domainColor }}>
              {member.role} {member.department ? `• ${member.department}` : ''}
            </p>

            {member.responsibilities && (
              <div className="profile__section">
                <h4 className="profile__label">Responsibilities</h4>
                <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '1rem', marginTop: '0.5rem' }}>
                  {member.responsibilities.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.4rem' }}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {member.goals && (
              <div className="profile__section">
                <h4 className="profile__label">Goals</h4>
                <div className="profile__skills" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '0.5rem' }}>
                  {member.goals.map((goal, i) => (
                    <span key={i} className="profile__skill" style={{ whiteSpace: 'normal', textAlign: 'left', lineHeight: '1.4' }}>{goal}</span>
                  ))}
                </div>
              </div>
            )}


          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Member Card (clickable) ── */
function MemberCard({ member, index, domainColor, onClick }) {
  const initials = member.name
    .split(' ')
    .map((w) => w[0])
    .join('');

  return (
    <motion.div
      className={`member ${index % 2 === 0 ? 'member--left' : 'member--right'}`}
      style={{ '--m-color': domainColor }}
      initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, scale: 0.92 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.15 + index * 0.14, ease: [0.16, 1, 0.3, 1] }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {/* Left — Avatar */}
      <div className="member__left">
        <div className="member__avatar" style={{ overflow: 'hidden' }}>
          {member.image ? (
            <img src={member.image} alt={member.name} style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
          ) : (
            <span className="member__initials">{initials}</span>
          )}
          <div className="member__avatar-ring" />
          <div className="member__avatar-glow" />
        </div>
      </div>

      {/* Right — Info */}
      <div className="member__right">
        <h3 className="member__name">{member.name}</h3>
        <p className="member__role" style={{ color: domainColor }}>
          {member.role} {member.department ? `• ${member.department}` : ''}
        </p>

        {member.responsibilities && (
          <div className="member__bio" style={{ marginTop: '0.5rem' }}>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.9rem'}}>
              {member.responsibilities.slice(0, 2).map((item, i) => (
                <li key={i} style={{ marginBottom: '0.25rem' }}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Click hint */}
      <div className="member__click-hint">
        <span>View Profile →</span>
      </div>
    </motion.div>
  );
}

export default function DomainPage({ domainId, onClose }) {
  const [selectedMember, setSelectedMember] = useState(null);
  const domain = DOMAINS.find((d) => d.id === domainId);
  if (!domain) return null;

  return (
    <motion.div
      className="domain-page"
      style={{ '--dp-color': domain.color }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Background effects */}
      <div className="domain-page__bg">
        <div className="domain-page__grid" />
        <div className="domain-page__glow1" />
        <div className="domain-page__glow2" />
      </div>

      {/* Header */}
      <motion.header
        className="domain-page__header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <button className="domain-page__back" onClick={onClose}>
          ← Back to Domains
        </button>

        <div className="domain-page__title-area">
          <div className="domain-page__icon">{domain.icon}</div>
          <div>
            <h1 className="domain-page__title">{domain.name}</h1>
            <p className="domain-page__subtitle">Meet the {domain.members.length} members driving this domain forward</p>
          </div>
        </div>

        <div className="domain-page__accent-line" />
      </motion.header>

      {/* Members list */}
      <div className="domain-page__members">
        {domain.members.map((member, i) => (
          <MemberCard
            key={member.name}
            member={member}
            index={i}
            domainColor={domain.color}
            onClick={() => setSelectedMember(member)}
          />
        ))}
      </div>

      {/* Member Profile Modal */}
      <AnimatePresence>
        {selectedMember && (
          <MemberProfile
            member={selectedMember}
            domainColor={domain.color}
            domainName={domain.shortName}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
