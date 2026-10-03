import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen font-body text-body">
      {/* Ambient gradient orbs — CSS-only, GPU-safe */}
      <div className="ambient">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
