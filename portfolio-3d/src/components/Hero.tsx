import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm text-indigo tracking-widest uppercase mb-4"
        >
          Fullstack Developer & UI/UX Designer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading font-extrabold text-4xl sm:text-5xl md:text-7xl text-heading leading-tight mb-6"
        >
          Building digital <span className="glow-text">experiences</span> that matter.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Crafting performant web & mobile applications with clean architecture and intuitive interfaces.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="px-8 py-3.5 rounded-xl font-heading font-semibold text-sm text-white bg-indigo hover:bg-indigo/90 transition-all">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3.5 rounded-xl font-heading font-semibold text-sm text-heading border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
