import { motion } from 'framer-motion';

export default function TechStack() {
  const row1 = [
    { name: 'React.js', img: 'react/61DAFB' },
    { name: 'Node.js', img: 'nodedotjs/339933' },
    { name: 'Vue.js', img: 'vuedotjs/4FC08D' },
    { name: 'Laravel', img: 'laravel/FF2D20' },
    { name: 'Flutter', img: 'flutter/02569B' },
    { name: 'CodeIgniter', img: 'codeigniter/EE4323' },
    { name: 'Tailwind', img: 'tailwindcss/06B6D4' }
  ];

  const row2 = [
    { name: 'Bootstrap', img: 'bootstrap/7952B3' },
    { name: 'PHP', img: 'php/777BB4' },
    { name: 'JavaScript', img: 'javascript/F7DF1E' },
    { name: 'Git', img: 'git/F05032' },
    { name: 'Docker', img: 'docker/2496ED' },
    { name: 'Postman', img: 'postman/FF6C37' },
    { name: 'Firebase', img: 'firebase/FFCA28' },
    { name: 'Figma', img: 'figma/F24E1E' },
    { name: 'WordPress', img: 'wordpress/21759B' }
  ];

  const scrollVariant = {
    hidden: { opacity: 0, y: 48, filter: 'blur(8px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.32, 0.72, 0, 1] } }
  };

  return (
    <section id="techstack" className="py-28 md:py-40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div variants={scrollVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] font-medium text-accent bg-accent/10 border border-accent/15 mb-5">
            Tech Stack
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading mb-4">Technologies I Work With</h2>
          <p className="max-w-xl mx-auto">Tools and technologies powering my projects — from frontend frameworks to cloud infrastructure.</p>
        </motion.div>
      </div>

      <motion.div variants={scrollVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }} className="relative mb-6">
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none"></div>
        <div className="flex w-max animate-marquee gap-5 px-2">
          {[...row1, ...row1].map((tech, i) => (
            <div key={i} className="flex items-center gap-3 px-5 py-3 bg-bg-inner border border-hairline rounded-[0.85rem] shrink-0">
              <img src={'https://cdn.simpleicons.org/' + tech.img} alt={tech.name} className="w-5 h-5 object-contain" />
              <span className="font-heading font-semibold text-xs text-heading">{tech.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={scrollVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }} className="relative">
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none"></div>
        <div className="flex w-max animate-marquee-rev gap-5 px-2">
          {[...row2, ...row2].map((tech, i) => (
            <div key={i} className="flex items-center gap-3 px-5 py-3 bg-bg-inner border border-hairline rounded-[0.85rem] shrink-0">
              <img src={'https://cdn.simpleicons.org/' + tech.img} alt={tech.name} className="w-5 h-5 object-contain" />
              <span className="font-heading font-semibold text-xs text-heading">{tech.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
