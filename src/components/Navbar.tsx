import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Tech Stack', id: 'techstack' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = NAV_ITEMS
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          aria-label="Primary"
          className="pointer-events-auto flex items-center gap-1 px-3 py-2 rounded-full bg-[rgba(10,10,10,0.7)] backdrop-blur-xl border border-hairline shadow-2xl"
        >
          <a href="#hero" className="font-heading font-bold text-base text-heading px-3 mr-2">
            <span className="text-accent">F</span>airuz.
          </a>
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={'#' + item.id}
                aria-current={active === item.id ? 'true' : undefined}
                className={
                  'text-sm font-medium px-3.5 py-2 rounded-full transition-all duration-400 ease-spring ' +
                  (active === item.id
                    ? 'text-heading bg-white/10'
                    : 'text-white/50 hover:text-heading hover:bg-white/5')
                }
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-heading"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            <div className="w-5 h-0.5 bg-heading mb-1 rounded-full transition-transform" style={{ transform: isOpen ? 'rotate(45deg) translate(3px, 3px)' : '' }}></div>
            <div className="w-5 h-0.5 bg-heading rounded-full transition-transform" style={{ transform: isOpen ? 'rotate(-45deg) translate(2px, -3px)' : '' }}></div>
          </button>
        </motion.nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-[rgba(5,5,5,0.92)] backdrop-blur-[40px] flex flex-col items-center justify-center gap-6"
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.a
                key={item.id}
                href={'#' + item.id}
                onClick={() => setIsOpen(false)}
                initial={{ y: 32, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.32, 0.72, 0, 1] }}
                className="font-heading text-3xl font-semibold text-heading"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
