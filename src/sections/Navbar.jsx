import { useEffect, useRef, useState } from 'react';
import { navLinks } from '../constants';
import { useMotion } from '../hooks/useMotion';
import Icon from '../components/Icon';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [progress, setProgress] = useState(0);
  const menuButton = useRef(null);
  const { motion, toggleMotion } = useMotion();
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
      const sections = navLinks
        .map(({ href }) => document.querySelector(href))
        .filter(Boolean);
      const current = sections
        .filter((section) => section.getBoundingClientRect().top <= 180)
        .at(-1);
      if (current) setActive(current.id);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);
  useEffect(() => {
    if (!isOpen) return;
    const close = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [isOpen]);
  return (
    <header className="site-header">
      <div className="nav-inner shell">
        <a
          className="wordmark"
          href="#home"
          onClick={() => setIsOpen(false)}
          aria-label="Raiyan Haque, home"
        >
          rh<span>.</span>
          <span className="wordmark-name">RAIYAN HAQUE</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks
            .filter((link) => link.id !== 1)
            .map((link) => (
              <a
                key={link.id}
                href={link.href}
                aria-current={
                  active === link.href.slice(1) ? 'location' : undefined
                }
              >
                {link.name}
              </a>
            ))}
        </nav>
        <div className="nav-actions">
          <button
            className="icon-button motion-toggle"
            onClick={toggleMotion}
            aria-label={motion ? 'Pause animations' : 'Enable animations'}
            title={motion ? 'Pause animations' : 'Enable animations'}
          >
            <Icon name={motion ? 'pause' : 'play'} size={16} />
          </button>
          <a className="nav-contact" href="mailto:raiyanhaque7@gmail.com">
            Let’s talk <Icon size={16} />
          </a>
          <button
            ref={menuButton}
            className="icon-button mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          >
            <Icon name={isOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav shell"
        aria-label="Mobile navigation"
        hidden={!isOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            onClick={() => setIsOpen(false)}
            aria-current={
              active === link.href.slice(1) ? 'location' : undefined
            }
          >
            {link.name}
            <Icon />
          </a>
        ))}
      </nav>
      <div
        className="reading-progress"
        style={{ transform: `scaleX(${progress})` }}
      />
    </header>
  );
}
