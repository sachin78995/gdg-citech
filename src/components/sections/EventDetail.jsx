import { motion } from 'framer-motion';
import './EventDetail.css';

export default function EventDetail({ event, onClose }) {
  if (!event) return null;

  return (
    <motion.div
      className="event-detail"
      style={{ '--ed-color': event.color }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ── Header Bar ── */}
      <header className="event-detail__header">
        <button className="event-detail__back" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Back to Events</span>
        </button>
        <div className="event-detail__header-meta">
          <span className="event-detail__type-badge">{event.type}</span>
          <span className={`event-detail__status-badge event-detail__status-badge--${event.status}`}>
            {event.status === 'upcoming' ? '● Live Soon' : '● Completed'}
          </span>
        </div>
      </header>

      {/* ── Scrollable Content ── */}
      <div className="event-detail__scroll">
        {/* Hero Banner */}
        <div className="event-detail__banner">
          <div className="event-detail__banner-bg">
            <div className="event-detail__banner-pattern" />
            <div className="event-detail__banner-gradient" />
          </div>
          <div className="event-detail__banner-content">
            <div className="event-detail__banner-icon">{event.icon}</div>
            <h1 className="event-detail__title">{event.title}</h1>
            <p className="event-detail__subtitle">{event.tagline}</p>
          </div>
        </div>

        {/* Info Strip */}
        <div className="event-detail__info-strip">
          <div className="event-detail__info-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>{event.date}</span>
          </div>
          <div className="event-detail__info-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
            </svg>
            <span>{event.time}</span>
          </div>
          <div className="event-detail__info-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            <span>{event.venue}</span>
          </div>
          <div className="event-detail__info-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" /><circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
            <span>{event.capacity}</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="event-detail__body">
          {/* Left Column */}
          <div className="event-detail__main">
            {/* About */}
            <section className="event-detail__section">
              <h2 className="event-detail__section-title">
                <span className="event-detail__section-num">01</span>
                About This Event
              </h2>
              <p className="event-detail__text">{event.fullDescription}</p>
            </section>

            {/* Image Gallery */}
            {event.images && event.images.length > 0 && (
              <section className="event-detail__section">
                <h2 className="event-detail__section-title">
                  <span className="event-detail__section-num">02</span>
                  Event Gallery
                </h2>
                <div className="event-detail__gallery">
                  {event.images.map((img, i) => (
                    <motion.div
                      key={i}
                      className="event-detail__gallery-item"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <img
                        src={img}
                        alt={`${event.title} - Photo ${i + 1}`}
                        className="event-detail__gallery-img"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* What You'll Learn */}
            <section className="event-detail__section">
              <h2 className="event-detail__section-title">
                <span className="event-detail__section-num">{event.images && event.images.length > 0 ? '03' : '02'}</span>
                What You&apos;ll Learn
              </h2>
              <div className="event-detail__learn-grid">
                {event.whatYouLearn.map((item, i) => (
                  <motion.div
                    key={i}
                    className="event-detail__learn-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                  >
                    <span className="event-detail__learn-icon">{item.icon}</span>
                    <span className="event-detail__learn-text">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Agenda / Schedule or Workshop Highlights */}
            <section className="event-detail__section">
              <h2 className="event-detail__section-title">
                <span className="event-detail__section-num">{event.images && event.images.length > 0 ? '04' : '03'}</span>
                {event.highlights && event.highlights.length > 0 ? 'Workshop Highlights' : 'Schedule'}
              </h2>
              {event.highlights && event.highlights.length > 0 ? (
                <div className="event-detail__highlights-grid">
                  {event.highlights.map((item, i) => (
                    <motion.div
                      key={i}
                      className="event-detail__highlight-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <h4 className="event-detail__highlight-title">{item.title}</h4>
                      <p className="event-detail__highlight-desc">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="event-detail__timeline">
                  {event.agenda.map((slot, i) => (
                    <motion.div
                      key={i}
                      className="event-detail__slot"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.06 }}
                    >
                      <div className="event-detail__slot-time">{slot.time}</div>
                      <div className="event-detail__slot-dot" />
                      <div className="event-detail__slot-info">
                        <h4 className="event-detail__slot-topic">{slot.topic}</h4>
                        {slot.speaker && (
                          <span className="event-detail__slot-speaker">by {slot.speaker}</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </section>

            {/* Overall Impact */}
            {event.overallImpact && (
              <section className="event-detail__section">
                <h2 className="event-detail__section-title">
                  <span className="event-detail__section-num">{event.images && event.images.length > 0 ? '05' : '04'}</span>
                  Overall Impact
                </h2>
                <p className="event-detail__text">{event.overallImpact}</p>
              </section>
            )}
          </div>

          {/* Right Sidebar */}
          <aside className="event-detail__sidebar">
            {/* Speakers */}
            <div className="event-detail__sidebar-card">
              <h3 className="event-detail__sidebar-title">Speakers & Leads</h3>
              <div className="event-detail__speakers">
                {event.speakers.map((speaker, i) => (
                  <motion.div
                    key={i}
                    className="event-detail__speaker"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="event-detail__speaker-avatar">
                      <span>{speaker.initials}</span>
                    </div>
                    <div className="event-detail__speaker-info">
                      <h4>{speaker.name}</h4>
                      <p>{speaker.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Prerequisites */}
            <div className="event-detail__sidebar-card">
              <h3 className="event-detail__sidebar-title">Prerequisites</h3>
              <ul className="event-detail__prereqs">
                {event.prerequisites.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="event-detail__sidebar-card">
              <h3 className="event-detail__sidebar-title">Technologies</h3>
              <div className="event-detail__techs">
                {event.technologies.map((tech, i) => (
                  <span key={i} className="event-detail__tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* Register CTA */}
            <motion.button
              className="event-detail__register-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {event.status === 'upcoming' ? 'Register Now →' : 'View Resources →'}
            </motion.button>
          </aside>
        </div>
      </div>
    </motion.div>
  );
}
