import { motion } from 'framer-motion';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 48, filter: 'blur(8px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.32, 0.72, 0, 1] } }
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center text-center">
      <motion.div 
        variants={container} 
        initial="hidden" 
        animate="show" 
        className="relative z-10 px-4 w-full max-w-3xl"
      >
        <motion.div variants={item} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] font-medium text-accent bg-accent/10 border border-accent/15 mb-5">
          fairuz.dev
        </motion.div>
        
        <motion.h1 variants={item} className="font-heading font-bold text-5xl md:text-[5rem] text-heading leading-[1.1] tracking-tight mb-6">
          Code. <span className="bg-gradient-to-br from-accent via-[#a78bfa] to-[#06b6d4] text-transparent bg-clip-text">Ship.</span> Repeat.
        </motion.h1>
        
        <motion.p variants={item} className="text-lg md:text-[1.15rem] max-w-xl mx-auto mb-12 leading-relaxed">
          Fullstack & mobile developer — Laravel, Flutter, React. Building production systems from university, not just assignments.
        </motion.p>
        
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
          <a href="#projects" className="group inline-flex items-center gap-3 pl-7 pr-5 py-3 rounded-full font-heading font-semibold text-sm bg-accent text-white hover:scale-[0.98] transition-all duration-500 ease-spring">
            View Projects
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/15 group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105 transition-all duration-500 ease-spring">↗</span>
          </a>
          
          <a href="#contact" className="group inline-flex items-center gap-3 pl-7 pr-5 py-3 rounded-full font-heading font-semibold text-sm border border-hairline text-heading bg-transparent hover:bg-white/5 hover:border-hairline-h hover:scale-[0.98] transition-all duration-500 ease-spring">
            Get In Touch
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105 transition-all duration-500 ease-spring">→</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
