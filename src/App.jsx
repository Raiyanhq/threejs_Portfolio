import { useEffect } from 'react';
import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import Experience from './sections/Experience.jsx';
import { MotionProvider } from './hooks/useMotion.jsx';
import { DiscoveryProvider } from './hooks/useDiscovery.jsx';
import DiscoveryTrail from './components/DiscoveryTrail.jsx';

export default function App() {
  useEffect(() => {
    // Restore section links after React mounts the page content.
    const frame = requestAnimationFrame(() => {
      const section = document.getElementById(window.location.hash.slice(1));
      section?.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
    return () => cancelAnimationFrame(frame);
  }, []);
  return (
    <MotionProvider>
      <DiscoveryProvider>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <DiscoveryTrail />
      </DiscoveryProvider>
    </MotionProvider>
  );
}
