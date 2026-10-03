import { motion } from "framer-motion";

import sijuko from "../assets/SiJuko.jpeg";
import panelKopma from "../assets/panelKopma.png";
import kopmaUnilaWeb from "../assets/kopmaUnilaWeb.png";
import artisys from "../assets/artisys.png";
import simbok from "../assets/simbokInventory.png";
import supplyChain from "../assets/supplyChain.png";
import memoroid from "../assets/memoroid.png";
import sehatBebasCacing from "../assets/sehatbebascacing.png";
import sikerma from "../assets/sikermaDashboard.png";

function ArrowSquareOut() {
  return (
    <svg width="16" height="16" viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="168 112 216 112 216 64" />
      <line x1="112" y1="144" x2="216" y2="40" />
      <path d="M184,208H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8h72" />
    </svg>
  );
}

export default function Projects() {
  const projects = [
    { title: "SiJuko", desc: "Aplikasi mobile resmi ekosistem KOPMA Unila. Flutter + Firebase. 1.040+ perangkat, 71.8% adoption.", tech: ["Flutter", "Firebase"], status: "Live", link: "https://play.google.com/store/apps/details?id=com.kopmaul.sijuko&pcampaignid=web_share", img: sijuko, span: "md:col-span-8" },
    { title: "panelKopmaUnila", desc: "Platform manajemen web & backend terpadu untuk KOPMA Unila. Integrasi data anggota, simpanan, alumni.", tech: ["Laravel", "PHP"], status: "Live", link: "https://panel.kopmaunilaofficial.com", img: panelKopma, span: "md:col-span-4" },
    { title: "Website Kopmaunila.official", desc: "Website resmi KOPMA Unila. Informasi organisasi, berita, dan galeri terpusat.", tech: ["React", "Tailwind CSS"], status: "Live", link: "https://kopmaunilaofficial.com/", img: kopmaUnilaWeb, span: "md:col-span-6" },
    { title: "ARTISYS", desc: "Asset Recovery Tracking Integrated System untuk Kejaksaan Tinggi Lampung. Routing berkas perkara.", tech: ["CodeIgniter", "MySQL"], status: "Internal", img: artisys, span: "md:col-span-6" },
    { title: "Simbok Repository Management", desc: "Sistem manajemen repository dokumen dan aset simbok organisasi KOPMA Unila.", tech: ["Node.js", "MongoDB"], status: "Internal", link: "https://simbok-inventory.vercel.app/", img: simbok, span: "md:col-span-4" },
    { title: "Supply Chain Management", desc: "Sistem manajemen rantai pasok dan pergudangan yang komprehensif.", tech: ["React.js", "PostgreSQL", "Express.js"], status: "Internal", link: "https://supply-chain-frontend-245g.vercel.app/login", img: supplyChain, span: "md:col-span-8" },
    { title: "Memoroid", desc: "Platform pembelajaran dan manajemen knowledge base internal KOPMA Unila.", tech: ["Next.js", "PostgreSQL"], status: "Internal", link: "https://memoroid2.vercel.app/", img: memoroid, span: "md:col-span-8" },
    { title: "Sehat Bebas Cacingan", desc: "Campaign dan platform informasi kesehatan reproduksi KOPMA Unila.", tech: ["React", "Firebase"], status: "Live", link: "https://sehatbebascacing.vercel.app/", img: sehatBebasCacing, span: "md:col-span-4" },
    { title: "Sikerma myUnila", desc: "Desain UI/UX untuk sistem informasi kerja sama myUnila.", tech: ["Figma"], status: "UI/UX Design", img: sikerma, span: "md:col-span-12" },
  ];

  const scrollVariant = {
    hidden: { opacity: 0, y: 48, filter: "blur(8px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.32, 0.72, 0, 1] } }
  };

  return (
    <section id="projects" className="py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div variants={scrollVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] font-medium text-accent bg-accent/10 border border-accent/15 mb-5">
            Projects
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading">Selected Work</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {projects.map((proj, i) => (
            <motion.div 
              key={i}
              variants={scrollVariant} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true, amount: 0.08 }}
              className={"bg-bg-card border border-hairline rounded-bezel p-1.5 hover:border-hairline-h transition-colors duration-700 ease-spring flex flex-col " + proj.span}
            >
              <div className="bg-bg-inner rounded-bezel-inner p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] flex flex-col h-full relative">
                <span className="absolute top-8 right-8 px-2.5 py-1 rounded-full text-[10px] font-mono bg-black/60 backdrop-blur-md text-white border border-white/10 z-10 uppercase tracking-wide">
                  {proj.status}
                </span>
                
                <div className="w-full h-48 rounded-[1.625rem] bg-white/5 mb-6 overflow-hidden">
                  <img src={proj.img} alt={proj.title} className="w-full h-full object-cover" onError={(e) => (e.currentTarget.style.display = "none")} />
                </div>
                
                <h3 className="font-heading font-semibold text-lg text-heading mb-2">{proj.title}</h3>
                <p className="text-sm leading-relaxed mb-5 flex-grow">{proj.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map(t => (
                    <span key={t} className="inline-block px-2.5 py-1 rounded-full text-[10px] font-mono text-accent border border-accent/20 bg-accent/5">
                      {t}
                    </span>
                  ))}
                </div>

                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-heading transition-colors duration-400 ease-spring border-t border-hairline pt-4 mt-auto w-max">
                    <ArrowSquareOut /> Live Preview
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
