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

const k8sWorkshopEvent = {
  id: 'k8s-workshop',
  title: 'Kubernetes Workshop by KubeAce',
  type: 'Workshop',
  date: '7th April 2026',
  time: '1:00pm onwards',
  venue: 'Auditorium, 5th floor , SMV Block',
  capacity: 'Open to All',
  description: 'Basics of Kubernetes, DevOps & Cloud, along with building and deploying an AI-based application.',
  fullDescription: 'Mastering the Cloud: Kubernetes & AI Deployment Workshop\n\nHave you ever wondered what it takes to transition from building a local application to deploying a resilient, scalable system like a seasoned DevOps professional? The gap between "it works on my machine" and "it works at scale" is bridged by Kubernetes—the industry standard for container orchestration.\n\nWe are thrilled to host an intensive, hands-on Kubernetes Workshop led by Mr. Harish Rajendran. This session is designed to strip away the complexity of cloud-native technologies and provide you with a clear, actionable roadmap for modern software deployment.\n\n📌 Note:\n* Bringing your laptop is recommended for a better experience.\n* Attendance will be provided.',
  tagline: 'Ever thought of building your own app and actually deploying it like a pro on Kubernetes? 👀',
  icon: <img src="/Kubernettes/logo.webp" alt="Kubernetes Logo" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />,
  status: 'upcoming',
  color: '#326ce5',
  whatYouLearn: [
    { icon: '🔄', text: "The DevOps Ecosystem: Understand the synergy between development and operations and why cloud-native architecture is a non-negotiable skill in today's job market." },
    { icon: '📦', text: 'Core Kubernetes Concepts: From Pods and Services to Deployments and Scaling—get a firm grip on how K8s manages containerized workloads.' },
    { icon: '🧠', text: 'AI Integration: Learn the nuances of building and containerizing an AI-based application, ensuring it is ready for the cloud.' },
    { icon: '🚀', text: 'Deployment Workflows: Watch a live demonstration of a professional CI/CD pipeline, taking an app from source code to a live production environment.' },
  ],
  speakers: [
    { 
      name: 'Mr. Harish Rajendran', 
      initials: 'HR', 
      role: 'Co-Founder & CTO of KubeAce, certified Kubernetes administrator with 10 years of experience in Kubernetes, DevOps, and Cloud Architecture.',
      image: '/Kubernettes/pic2.jpeg' 
    },
  ],
  registrationLink: 'https://docs.google.com/forms/d/1Z9udZWN-bUsippcDYkwKo1M8mw4THSQjiRfuaUy7xBM/edit',
  stayConnected: 'https://linktr.ee/GDG_CITECH',
  sectionTitle: 'Why You Should Join',
  highlightsIntro: "In an era where efficiency and scalability define a product's success, understanding Kubernetes is a superpower. Whether you are an aspiring software engineer, a data scientist looking to deploy models, or a tech enthusiast, this workshop offers:",
  highlights: [
    { title: 'Industry-Relevant Insights', description: 'Move beyond tutorials with real-world strategies used by top-tier tech companies.' },
    { title: 'Live Technical Demonstration', description: 'Witness a full deployment workflow in real-time, giving you a front-row seat to professional DevOps practices.' },
    { title: 'Future-Ready Skills', description: 'Gain the confidence to architect and manage applications that can handle real-world traffic and complexity.' }
  ],
  agenda: [],
  prerequisites: [
    'Bringing your laptop is recommended for a better experience.',
    'Basic programming knowledge (helpful)',
  ],
  technologies: ['Kubernetes', 'Docker', 'Cloud Architecture', 'DevOps', 'AI Deployment'],
};

export default function Hero({ onEventSelect }) {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState('');
  const greeting = useTimeGreeting();
  const { normalized } = useMousePosition();
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const targetDate = new Date("April 7, 2026 13:00:00").getTime();
    
    const countInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(countInterval);
        setTimeLeft("LIVE NOW!");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(countInterval);
  }, []);

  const parallaxX = (normalized.x - 0.5) * 20;
  const parallaxY = (normalized.y - 0.5) * 20;

  return (
    <section id="hero" className="hero" ref={containerRef}>
      {/* Kubernetes Workshop Button */}
      <button 
        className="hero__k8s-btn"
        onClick={() => onEventSelect && onEventSelect(k8sWorkshopEvent)}
        title="View Kubernetes Workshop Details"
      >
        <div className="hero__k8s-btn-sweep" />
        <span className="hero__k8s-btn-upcoming">Upcoming</span>
        <div className="hero__k8s-btn-content">
          <span className="hero__k8s-btn-text">K8s Workshop</span>
          {timeLeft && (
            <span className="hero__k8s-btn-countdown">
              <span className="live-dot" /> Starts in: {timeLeft}
            </span>
          )}
        </div>
      </button>

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
