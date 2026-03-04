import { useState, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import ParticleField from './components/background/ParticleField';
import CursorGlow from './components/background/CursorGlow';
import ScrollProgress from './components/ui/ScrollProgress';
import SideNav from './components/ui/SideNav';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Events from './components/sections/Events';
import Team from './components/sections/Team';
import Resources from './components/sections/Resources';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import DomainPage from './components/sections/DomainPage';
import EventDetail from './components/sections/EventDetail';
import './App.css';

const ImmersiveMode = lazy(() => import('./components/immersive/ImmersiveMode'));

export default function App() {
  const [immersive, setImmersive] = useState(false);
  const [activeDomain, setActiveDomain] = useState(null);
  const [activeEvent, setActiveEvent] = useState(null);

  return (
    <div className="app">
      {/* Background layers */}
      <ParticleField />
      <CursorGlow />

      {/* Progress & Navigation */}
      <ScrollProgress />
      <SideNav />

      {/* Immersive Toggle */}
      <button
        className="immersive-toggle"
        onClick={() => setImmersive(true)}
        title="Enter Immersive Mode"
      >
        <span className="immersive-toggle__icon">◆</span>
        <span className="immersive-toggle__text">Immersive Mode</span>
      </button>

      {/* Main Content */}
      <main className="main">
        <Hero />
        <About />
        <Events onEventSelect={setActiveEvent} />
        <Team onDomainSelect={setActiveDomain} />
        <Resources />
        <Contact />
        <Footer />
      </main>

      {/* Domain Page Overlay */}
      <AnimatePresence>
        {activeDomain && (
          <DomainPage
            domainId={activeDomain}
            onClose={() => setActiveDomain(null)}
          />
        )}
      </AnimatePresence>

      {/* Event Detail Overlay */}
      <AnimatePresence>
        {activeEvent && (
          <EventDetail
            event={activeEvent}
            onClose={() => setActiveEvent(null)}
          />
        )}
      </AnimatePresence>

      {/* Immersive Mode */}
      <AnimatePresence>
        {immersive && (
          <Suspense fallback={<div className="immersive-loading">Loading 3D Environment...</div>}>
            <ImmersiveMode onClose={() => setImmersive(false)} />
          </Suspense>
        )}
      </AnimatePresence>
    </div>
  );
}
