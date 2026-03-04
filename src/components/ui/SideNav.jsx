import { useActiveSection } from '../../hooks/useEffects';
import { motion } from 'framer-motion';
import './SideNav.css';

const sections = [
  { id: 'hero', label: 'Home', icon: '◆' },
  { id: 'about', label: 'About', icon: '◇' },
  { id: 'events', label: 'Events', icon: '▣' },
  { id: 'team', label: 'Team', icon: '⬡' },
  { id: 'resources', label: 'DevSpace', icon: '⬢' },
  { id: 'contact', label: 'Contact', icon: '◈' },
];

export default function SideNav() {
  const active = useActiveSection(sections.map((s) => s.id));

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="side-nav" aria-label="Section navigation">
      {sections.map((s) => (
        <button
          key={s.id}
          className={`side-nav__item ${active === s.id ? 'side-nav__item--active' : ''}`}
          onClick={() => scrollTo(s.id)}
          title={s.label}
        >
          <span className="side-nav__dot" />
          <span className="side-nav__label">{s.label}</span>
          {active === s.id && (
            <motion.div
              className="side-nav__indicator"
              layoutId="nav-indicator"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
        </button>
      ))}
    </nav>
  );
}
