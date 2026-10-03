import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: 'Head of Tech Division',
      company: 'Kopma Unila',
      date: 'Feb 2025 - Feb 2026',
      logo: 'https://kopmaunilaofficial.com/wp-content/uploads/2025/04/de71f7d3-2c86-4815-a2d7-34ad8ebd6fbc_removalai_preview.png',
      points: [
        'Supervised and trained 16 division staff members in web development, information management, and organizational technology workflows.',
        'Engineered and maintained kopmaunila.com, developing 7 custom web pages, integrating Google SMTP domain emails, and publishing 30 articles.',
        'Led major SiJuko application v7.1.0 & v7.2.0 releases and successfully achieved 71.8% adoption across 1,040+ active devices.',
        'Managed centralized databases for monthly activity logs, official correspondence, surveys, and alumni/demisioner records.'
      ]
    },
    {
      title: 'Back End Developer (Intern)',
      company: 'Kejaksaan Tinggi Lampung',
      date: 'Jul 2025 - Aug 2025',
      logo: 'https://www.kejaksaan.go.id/assets/img/webphada.png',
      points: [
        'Developed backend asset management website for legal case routing and confiscated goods management using Laravel and PHP.',
        'Managed and compiled seized-asset data from 17 District Prosecutor\'s Offices and branch offices across Lampung Province.',
        'Implemented Role-Based Access Control via custom middleware and built RESTful APIs secured with Laravel Sanctum.',
        'Integrated features for asset tracking, including automated QR Code generation for item tags and Excel report exports.'
      ]
    },
    {
      title: 'Full Stack Engineer (Intern)',
      company: 'PT. Stechoq Robotika Indonesia',
      date: 'Sep 2024 - Dec 2024',
      logo: 'https://stechoq.com/wp-content/uploads/2022/06/stechoq-logo.png',
      points: [
        'Served as Lead Frontend Developer for a Supply Chain & Warehouse Management System web application.',
        'Completed 14 fullstack modules covering frontend architecture, backend development, and deployment within 4 months.',
        'Awarded "The Best Mentee in Time Management" out of 20+ participants for exceptional productivity and project execution.'
      ]
    }
  ];

  const scrollVariant = {
    hidden: { opacity: 0, y: 48, filter: 'blur(8px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.32, 0.72, 0, 1] } }
  };

  return (
    <section id="experience" className="py-28 md:py-40">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div variants={scrollVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] font-medium text-accent bg-accent/10 border border-accent/15 mb-5">
            Experience
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading">Work history.</h2>
        </motion.div>

        <div className="relative pl-10">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-accent/20 to-transparent"></div>

          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              variants={scrollVariant} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true, amount: 0.08 }}
              className="relative mb-16 last:mb-0"
            >
              <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-bg border-2 border-accent/30 overflow-hidden flex items-center justify-center z-10">
                <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain rounded-full" onError={(e) => (e.currentTarget.style.display = 'none')} />
              </div>

              <div className="bg-bg-card border border-hairline rounded-bezel p-1.5 hover:border-hairline-h transition-colors duration-700 ease-spring">
                <div className="bg-bg-inner rounded-bezel-inner p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
                  <div className="font-mono text-xs text-accent mb-2">{exp.date}</div>
                  <h3 className="font-heading font-semibold text-xl text-heading mb-1">{exp.title}</h3>
                  <div className="text-accent font-medium text-sm mb-4">{exp.company}</div>
                  <ul className="space-y-2">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="relative pl-5 text-sm leading-relaxed">
                        <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-accent/50"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
