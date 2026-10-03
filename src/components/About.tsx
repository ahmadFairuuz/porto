import { motion } from 'framer-motion';

export default function About() {
  const scrollVariant = {
    hidden: { opacity: 0, y: 48, filter: 'blur(8px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.32, 0.72, 0, 1] } }
  };

  return (
    <section id="about" className="py-28 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div variants={scrollVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }}>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] font-medium text-accent bg-accent/10 border border-accent/15 mb-5">
              About Me
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading mb-6">
              Passionate about code & design.
            </h2>
            <div className="space-y-4 leading-[1.8]">
              <p>Fullstack developer sekaligus UI/UX designer yang berfokus pada aplikasi web dan mobile yang performa, scalable, dan engaging.</p>
              <p>Berpengalaman mengembangkan sistem digital dari nol — backend, API, hingga antarmuka yang intuitif.</p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div>
                <p className="font-heading font-bold text-3xl text-heading">3+</p>
                <p className="text-sm mt-1">Projects</p>
              </div>
              <div>
                <p className="font-heading font-bold text-3xl text-heading">1k+</p>
                <p className="text-sm mt-1">Users</p>
              </div>
              <div>
                <p className="font-heading font-bold text-3xl text-heading">71%</p>
                <p className="text-sm mt-1">Adoption</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={scrollVariant} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="bg-bg-card border border-hairline rounded-bezel p-1.5 hover:border-hairline-h transition-colors duration-700 ease-spring group">
              <div className="bg-bg-inner rounded-bezel-inner p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] flex flex-col">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-[#06b6d4] flex items-center justify-center mb-6 font-heading font-bold text-3xl text-white">
                  F
                </div>
                <h3 className="font-heading font-bold text-xl text-heading mb-1">Fairuz</h3>
                <p className="font-mono text-sm text-accent">Fullstack & Mobile Developer</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
