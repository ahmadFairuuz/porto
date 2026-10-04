import { motion } from 'framer-motion';

export default function Certifications() {
  const certs = [
    { title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', date: 'Dec 2023', emoji: '🏆', gradient: 'from-[#f97316] to-[#eab308]' },
    { title: 'Google Cloud Professional Developer', issuer: 'Google Cloud', date: 'Aug 2023', emoji: '☁️', gradient: 'from-[#3b82f6] to-[#06b6d4]' },
    { title: 'Meta Front-End Developer Certificate', issuer: 'Meta (Coursera)', date: 'May 2023', emoji: '⚛️', gradient: 'from-[#6366f1] to-[#a855f7]' },
    { title: 'MongoDB Certified Developer', issuer: 'MongoDB University', date: 'Feb 2023', emoji: '🍃', gradient: 'from-[#22c55e] to-[#10b981]' },
    { title: 'Microsoft Azure Fundamentals', issuer: 'Microsoft', date: 'Nov 2022', emoji: '☁️', gradient: 'from-[#0ea5e9] to-[#3b82f6]' },
    { title: 'Kubernetes Application Developer', issuer: 'Cloud Native Computing Foundation', date: 'Sep 2022', emoji: '⚙️', gradient: 'from-[#a855f7] to-[#ec4899]' }
  ];

  const scrollVariant = {
    hidden: { opacity: 0, y: 48, filter: 'blur(8px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.32, 0.72, 0, 1] } }
  };

  return (
    <section id="certifications" className="py-28 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div variants={scrollVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] font-medium text-accent bg-accent/10 border border-accent/15 mb-5">
            Certifications
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading">Achievements & credentials.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {certs.map((cert, i) => (
            <motion.div 
              key={i}
              variants={scrollVariant} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true, amount: 0.08 }}
              className="bg-bg-card border border-hairline rounded-bezel p-1.5 hover:border-hairline-h transition-colors duration-700 ease-spring"
            >
              <div className="bg-bg-inner rounded-bezel-inner p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] h-full flex flex-col">
                <div className={'w-12 h-12 rounded-[0.85rem] flex items-center justify-center text-xl mb-5 bg-gradient-to-br ' + cert.gradient}>
                  {cert.emoji}
                </div>
                <h3 className="font-heading font-semibold text-base text-heading mb-1.5 leading-snug">{cert.title}</h3>
                <p className="text-xs opacity-60 mb-3">{cert.issuer}</p>
                <div className="mt-auto">
                  <span className="font-mono text-[10px] text-accent uppercase tracking-widest">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
