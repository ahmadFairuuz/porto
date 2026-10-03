// import { motion } from 'framer-motion';

// export default function Hero() {
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.1 }
//     }
//   };

//   const item = {
//     hidden: { opacity: 0, y: 48, filter: 'blur(8px)' },
//     show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.32, 0.72, 0, 1] } }
//   };

//   return (
//     <section id="home" className="relative min-h-[100dvh] flex items-center justify-center text-center">
//       <motion.div 
//         variants={container} 
//         initial="hidden" 
//         animate="show" 
//         className="relative z-10 px-4 w-full max-w-3xl"
//       >
//         <motion.div variants={item} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] font-medium text-accent bg-accent/10 border border-accent/15 mb-5">
//           fairuz.dev
//         </motion.div>
        
//         <motion.h1 variants={item} className="font-heading font-bold text-5xl md:text-[5rem] text-heading leading-[1.1] tracking-tight mb-6">
//           Code. <span className="bg-gradient-to-br from-accent via-[#a78bfa] to-[#06b6d4] text-transparent bg-clip-text">Ship.</span> Repeat.
//         </motion.h1>
        
//         <motion.p variants={item} className="text-lg md:text-[1.15rem] max-w-xl mx-auto mb-12 leading-relaxed">
//           Fullstack & mobile developer — Laravel, Flutter, React. Building production systems from university, not just assignments.
//         </motion.p>
        
//         <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
//           <a href="#projects" className="group inline-flex items-center gap-3 pl-7 pr-5 py-3 rounded-full font-heading font-semibold text-sm bg-accent text-white hover:scale-[0.98] transition-all duration-500 ease-spring">
//             View Projects
//             <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/15 group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105 transition-all duration-500 ease-spring">↗</span>
//           </a>
          
//           <a href="#contact" className="group inline-flex items-center gap-3 pl-7 pr-5 py-3 rounded-full font-heading font-semibold text-sm border border-hairline text-heading bg-transparent hover:bg-white/5 hover:border-hairline-h hover:scale-[0.98] transition-all duration-500 ease-spring">
//             Get In Touch
//             <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105 transition-all duration-500 ease-spring">→</span>
//           </a>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Background Interactive Particle Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle Setup
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx + (mouseX - width / 2) * 0.00005;
        p.y += p.vy + (mouseY - height / 2) * 0.00005;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(129, 140, 248, ${p.alpha})`; // Indigo glow
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f] text-white pt-20">
      {/* 1. Canvas Interactive Particles Background */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* 2. Ambient Purple Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* 3. Live Status Indicator */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono text-emerald-400 tracking-wide">
            Available for freelance & full-time
          </span>
        </div>

        {/* 4. Sub-badge Tag */}
        <div className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono tracking-widest uppercase text-indigo-300/80 mb-8">
          FAIRUZ.DEV
        </div>

        {/* 5. Main Headline with Gradient */}
        <h1 className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-8">
          Code.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-400 to-purple-400">
            Ship.
          </span>{' '}
          Repeat.
        </h1>

        {/* 6. Subheadline */}
        <p className="max-w-2xl text-slate-300 text-base md:text-lg leading-relaxed mb-10 font-light">
          Fullstack & mobile developer — <span className="text-white font-medium">Laravel, Flutter, React</span>.
          Building production systems from university, not just assignments.
        </p>

        {/* 7. CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium text-sm text-slate-900 bg-indigo-300 hover:bg-indigo-200 shadow-lg shadow-indigo-500/25 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
          >
            <span>View Projects</span>
            <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium text-sm text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Get In Touch</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>

        {/* 8. Floating Tech Stack Badges (Decorative) */}
        <div className="mt-16 flex items-center justify-center gap-3 flex-wrap opacity-80">
          <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/5 text-xs font-mono text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500/80"></span> Laravel
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/5 text-xs font-mono text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400/80"></span> Flutter
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/5 text-xs font-mono text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400/80"></span> React
          </span>
        </div>

      </div>
    </section>
  );
}

