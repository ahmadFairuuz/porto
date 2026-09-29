import { Suspense } from 'react';
import Hero3D from './components/Hero3D';
import Stars from './components/Stars';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative bg-obsidian text-body font-body min-h-screen">
      {/* 3D Background */}
      <div className="fixed inset-0 -z-10">
        <Suspense fallback={null}>
          <Hero3D />
          <Stars />
        </Suspense>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}
