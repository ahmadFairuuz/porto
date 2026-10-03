import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-3 py-2 rounded-full bg-[rgba(10,10,10,0.7)] backdrop-blur-xl border border-hairline shadow-2xl"
      >
        <a href="#home" className="font-heading font-bold text-base text-heading px-3 mr-2">
          <span className="text-accent">F</span>airuz.
        </a>
        <div className="hidden md:flex items-center gap-1">
          {['About', 'Experience', 'Projects', 'Tech Stack', 'Certifications', 'Contact'].map((item) => (
            <a 
              key={item}
              href={'#' + item.toLowerCase().replace(' ', '')} 
              className="text-sm font-medium text-white/50 hover:text-heading hover:bg-white/5 px-3.5 py-2 rounded-full transition-all duration-400 ease-spring"
            >
              {item}
            </a>
          ))}
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-heading"
          aria-label="Toggle Menu"
        >
          <div className="w-5 h-0.5 bg-heading mb-1 rounded-full transition-transform" style={{ transform: isOpen ? 'rotate(45deg) translate(3px, 3px)' : '' }}></div>
          <div className="w-5 h-0.5 bg-heading rounded-full transition-transform" style={{ transform: isOpen ? 'rotate(-45deg) translate(2px, -3px)' : '' }}></div>
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-[rgba(5,5,5,0.92)] backdrop-blur-[40px] flex flex-col items-center justify-center gap-6"
          >
            {['About', 'Experience', 'Projects', 'Tech Stack', 'Certifications', 'Contact'].map((item, i) => (
              <motion.a 
                key={item}
                href={'#' + item.toLowerCase().replace(' ', '')}
                onClick={() => setIsOpen(false)}
                initial={{ y: 32, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.32, 0.72, 0, 1] }}
                className="font-heading text-3xl font-semibold text-heading"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
