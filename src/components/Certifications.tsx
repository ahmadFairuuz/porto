import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import ciscoNetwork from '../assets/certs/cisco-network.png';
import oracleSql from '../assets/certs/oracle-sql.png';
import oracleDesign from '../assets/certs/oracle-design.png';
import ciscoPython from '../assets/certs/cisco-python.png';
import dtsIntermediate from '../assets/certs/dts-intermediate.png';
import dtsFundamental from '../assets/certs/dts-fundamental.png';

export default function Certifications() {
  const [openCert, setOpenCert] = useState<number | null>(null);

  const certs = [
    {
      title: 'Intermediate Assistant Web Developer',
      issuer: 'Digital Talent Academy',
      date: 'September 2026',
      emoji: '🛠️',
      gradient: 'from-[#6366f1] to-[#a855f7]',
      image: dtsIntermediate,
      link: 'https://drive.google.com/file/d/1Vi7517EL1qGWYfnSYSiO_iZnEbyv-MOb/view?usp=sharing',
    },
    {
      title: 'Fundamental of Assistant Web Developer',
      issuer: 'Digital Talent Academy',
      date: 'September 2026',
      emoji: '📚',
      gradient: 'from-[#10b981] to-[#34d399]',
      image: dtsFundamental,
      link: 'https://drive.google.com/file/d/1aEc0jcsNVmBuBRdxF5AITolQYDng6qY0/view?usp=drive_link',
    },
    {
      title: 'Introduction to Network',
      issuer: 'Cisco Networking Academy',
      date: 'June 2024',
      emoji: '🌐',
      gradient: 'from-[#3b82f6] to-[#60a5fa]',
      image: ciscoNetwork,
      link: 'https://drive.google.com/file/d/11n6Xd-i6Z91C7FhqjEqd_Lbu50fDK3o1/view?usp=drive_link',
    },
    {
      title: 'Database Programming with SQL',
      issuer: 'Oracle Academy',
      date: 'December 2023',
      emoji: '💾',
      gradient: 'from-[#f97316] to-[#eab308]',
      image: oracleSql,
      link: 'https://drive.google.com/file/d/1Pq_CFYt6_jwj84cLZO3lAwu3K42aXbYl/view?usp=drive_link',
    },
    {
      title: 'Database Design',
      issuer: 'Oracle Academy',
      date: 'December 2023',
      emoji: '🗄️',
      gradient: 'from-[#3b82f6] to-[#06b6d4]',
      image: oracleDesign,
      link: 'https://drive.google.com/file/d/1uoRmfiZFVZokIDHkSE6zXp-ATlQ9751r/view?usp=drive_link',
    },
    {
      title: 'PCAP: Programming Essentials in Python',
      issuer: 'Cisco Networking Academy',
      date: 'September 2023',
      emoji: '🐍',
      gradient: 'from-[#f97316] to-[#eab308]',
      image: ciscoPython,
      link: 'https://drive.google.com/file/d/1cKGkviviwZ_0rQ49jwVwH1FXulUPNCtX/view?usp=drive_link',
    },
  ];

  const scrollVariant = {
    hidden: { opacity: 0, y: 48, filter: 'blur(8px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.32, 0.72, 0, 1] } }
  };

  const openModal = (idx: number) => {
    setOpenCert(idx);
  };

  const closeModal = () => {
    setOpenCert(null);
  };

  // Body overflow lock & ESC key
  useEffect(() => {
    if (openCert !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && openCert !== null) closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [openCert]);

  return (
    <>
      <section id="certifications" className="py-28 md:py-40">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            variants={scrollVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.08 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] font-medium text-accent bg-accent/10 border border-accent/15 mb-5">
              Certifications
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading">Achievements & credentials.</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certs.map((cert, i) => (
              <motion.div
                key={i}
                variants={scrollVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.08 }}
                className="bg-bg-card border border-hairline rounded-bezel p-1.5 hover:border-accent/40 transition-all duration-700 ease-spring flex flex-col group"
              >
                <div className="bg-bg-inner rounded-bezel-inner p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] h-full flex flex-col">
                  {/* Image Preview Box - click to open modal */}
                  <button
                    onClick={() => openModal(i)}
                    className="w-full h-40 rounded-[1rem] bg-[#0B1220] border border-hairline mb-5 overflow-hidden block relative group/preview focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#060B14]"
                    aria-label={"View " + cert.title + " certificate"}
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 ease-spring group-hover/preview:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="text-[11px] font-mono text-white px-3 py-1.5 rounded-full bg-accent/80 border border-accent shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                        View Credential
                        <svg className="inline-block w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="15 3 21 3 21 9" />
                          <polyline points="9 21 3 21 3 15" />
                          <line x1="21" y1="3" x2="14" y2="10" />
                          <line x1="3" y1="21" x2="10" y2="14" />
                        </svg>
                      </span>
                    </div>
                  </button>

                  <h3 className="font-heading font-semibold text-base text-heading mb-1.5 leading-snug group-hover:text-accent transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-xs opacity-60 mb-4">{cert.issuer}</p>

                  <div className="mt-auto pt-3 border-t border-hairline flex items-center justify-between">
                    <span className="font-mono text-[10px] text-accent uppercase tracking-widest">{cert.date}</span>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-white/50 hover:text-accent transition-colors"
                    >
                      Open in Drive ↗
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Modal Fullscreen Certificate Preview */}
      <AnimatePresence>
        {openCert !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md"
              onClick={closeModal}
              aria-hidden="true"
            />
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none"
              role="dialog"
              aria-modal="true"
              aria-labelledby="cert-modal-title"
            >
              <div
                className="relative w-full max-w-4xl max-h-[90vh] bg-bg-card border border-accent/30 rounded-2xl overflow-hidden flex flex-col shadow-2xl pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-hairline bg-bg-inner shrink-0">
                  <h3 id="cert-modal-title" className="font-heading font-semibold text-lg text-heading">
                    {certs[openCert].title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <a
                      href={certs[openCert].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-white/60 hover:text-accent transition-colors flex items-center gap-1.5"
                    >
                      <span>Open Drive</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                    <button
                      onClick={closeModal}
                      className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                      aria-label="Close certificate preview"
                    >
                      <X size={18} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1 p-4 overflow-auto flex items-center justify-center bg-black/40">
                  <img
                    src={certs[openCert].image}
                    alt={certs[openCert].title}
                    className="w-full h-full max-h-[calc(90vh-120px)] object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}