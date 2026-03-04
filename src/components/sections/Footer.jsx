import './Footer.css';

const socials = [
  { name: 'GitHub', icon: '⟨/⟩', url: '#' },
  { name: 'Twitter', icon: '𝕏', url: '#' },
  { name: 'LinkedIn', icon: 'in', url: '#' },
  { name: 'Instagram', icon: '◎', url: '#' },
  { name: 'Discord', icon: '◈', url: '#' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__divider" />
      <div className="container footer__content">
        <div className="footer__brand">
          <span className="footer__logo">GDG</span>
          <span className="footer__logo-sub">CITech</span>
        </div>

        <div className="footer__socials">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              className="footer__social-link"
              title={s.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{s.icon}</span>
            </a>
          ))}
        </div>

        <p className="footer__copy">
          © {new Date().getFullYear()} GDG-CITech. Crafted with passion for developers.
        </p>
      </div>
    </footer>
  );
}
