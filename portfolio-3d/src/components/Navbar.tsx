import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-obsidian/80 backdrop-blur-md shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-heading font-bold text-xl text-heading">
          <span className="glow-text">F</span>airuz<span className="text-indigo">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium hover:text-heading transition-colors">About</a>
          <a href="#experience" className="text-sm font-medium hover:text-heading transition-colors">Experience</a>
          <a href="#projects" className="text-sm font-medium hover:text-heading transition-colors">Projects</a>
          <a href="#techstack" className="text-sm font-medium hover:text-heading transition-colors">Tech Stack</a>
          <a href="#certifications" className="text-sm font-medium hover:text-heading transition-colors">Certifications</a>
          <a href="#contact" className="text-sm font-medium hover:text-heading transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}
