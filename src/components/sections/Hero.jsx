import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTimeGreeting, useMousePosition } from '../../hooks/useEffects';
import './Hero.css';

const headlines = [
  'ENTER THE GDG-CITech EXPERIENCE',
  'WHERE DEVELOPERS EVOLVE',
  'BUILD THE FUTURE WITH US',
  'CODE • CREATE • INNOVATE',
];

export default function Hero() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const greeting = useTimeGreeting();
  const { normalized } = useMousePosition();
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const parallaxX = (normalized.x - 0.5) * 20;
  const parallaxY = (normalized.y - 0.5) * 20;

  return (
    <section id="hero" className="hero" ref={containerRef}>
      {/* Ambient glows */}
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />
      <div className="hero__glow hero__glow--3" />

      <div className="hero__content container">
        {/* Greeting */}
        <motion.p
          className="hero__greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          WELCOME TO GDG CIT
        </motion.p>

        {/* Logo */}
        <motion.div
          className="hero__logo-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            transform: `translate(${parallaxX * 0.5}px, ${parallaxY * 0.5}px)`,
          }}
        >
          <img
            src="/gdsc-logo.png"
            alt="GDG CITech"
            className="hero__logo-img"
          />
        </motion.div>

        {/* Headline */}
        <div className="hero__headline-wrapper">
          <AnimatePresence mode="wait">
            <motion.h1
              key={headlineIndex}
              className="hero__headline"
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {headlines[headlineIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Tagline */}
        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Empowering the next generation of developers through innovation,
          collaboration, and cutting-edge technology.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="hero__ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button
            className="hero__btn hero__btn--primary"
            onClick={() =>
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <span className="hero__btn-text">Explore Community</span>
            <span className="hero__btn-glow" />
          </button>
          <button
            className="hero__btn hero__btn--secondary"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <span className="hero__btn-text">Get Started</span>
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="hero__scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="hero__scroll-line" />
          <span className="hero__scroll-text">SCROLL</span>
        </motion.div>
      </div>
    </section>
  );
}
