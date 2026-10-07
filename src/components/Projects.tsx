import { motion } from 'framer-motion';

import sijuko from '../assets/SiJuko.jpeg';
import panelKopma from '../assets/panelKopma.png';
import kopmaUnilaWeb from '../assets/kopmaUnilaWeb.png';
import artisys from '../assets/artisys.png';
import simbok from '../assets/simbokInventory.png';
import supplyChain from '../assets/supplyChain.png';
import memoroid from '../assets/memoroid.png';
import sehatBebasCacing from '../assets/sehatbebascacing.png';
import sikerma from '../assets/dashSikerma.png';
import ecoshift from '../assets/ecoShift.jpg';
import oneKopma from '../assets/oneKopma.jpg';
import zain from '../assets/dashSupplier.png';

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
  type Project = {
    title: string;
    desc: string;
    tech: string[];
    status: string;
    link?: string;
    linkLabel?: string;
    img?: string;
    span: string;
  };

  const projects: Project[] = [
    { title: 'SiJuko', desc: 'An all in one digital platform for Unila Student Cooperative, streamlining member dues tracking, Integrated push notifications, product catalog, QR attendance, and a digital library. Led major v7.1.0 & v7.2.0 releases, successfully achieving a 71.8% adoption rate across 1,040+ active devices.', tech: ['Flutter', 'Dart' ,'Hive NoSQL' ,'Firebase FCM' , 'REST API'], status: 'Live', link: 'https://play.google.com/store/apps/details?id=com.kopmaul.sijuko&pcampaignid=web_share', img: sijuko, span: 'md:col-span-8' },
    { title: 'Panel Kopma Unila', desc: 'A centralized web admin panel and backend system powering the SiJuko ecosystem and digitalizing operational workflows. Member lifecycle management covering new member registration portals, active member databases, SiJuko user accounts, and alumni tracking. Centralized tracking for mandatory and principal savings, alongside digital management of incoming/outgoing correspondence. Activity schedule monitoring, weekly event management, and internal survey data handling.', tech: ['Codeigniter', 'PHP', 'MySQL', 'Bootstrap', 'Firebase'], status: 'Live', link: 'https://panel.kopmaunilaofficial.com', img: panelKopma, span: 'md:col-span-4' },
    { title: 'Kopma Unila Official Website', desc: 'The official web portal and landing page representing Kopma Unila public presence, brand identity, and news publication. Live Metrics active members & business units, vision & mission, visual identity and official anthems. Business unit directory with location mapping, activity news hub and a complete repository of all digital magazine editions.', tech: ['Wordpress', 'Elementor'], status: 'Live', link: 'https://kopmaunilaofficial.com/', img: kopmaUnilaWeb, span: 'md:col-span-6' },
    { title: 'ARTISYS (Asset Recovery Tracking Integrated System)', desc: 'A web based system for the Asset Recovery Division of the Lampung High Prosecutors Office and District Prosecutors Offices across Lampung Province. ARTISYS provides flexible web based accessibility to digitize confiscated asset logging, manage Non Tax State Revenue (PNBP), track asset backlogs, and accelerate reporting through data import-export capabilities.', tech: ['Laravel 12', 'PHP 8.2','MySQL', 'Tailwind CSS'], status: 'Internal', img: artisys, span: 'md:col-span-6' },
    { title: 'Simbok Repository Management', desc: 'Simbok is an internal web application designed to streamline asset tracking and simplify equipment loan workflows. Built to eliminate manual logbooks, the platform provides real-time stock visibility and an automated borrowing process for internal team members. ', tech: ['Vue.js',  'Node.js', 'Express.js', 'Bootstrap', 'Pinia','PostgreSQL','JWT' ], status: 'Internal', link: 'https://simbok-inventory.vercel.app/', img: simbok, span: 'md:col-span-4' },
    { title: 'Supply Chain Management', desc: 'Developed as the capstone project for PT Stechoq Robotika Indonesia (Team Z4IN), this enterprise web application automates and optimizes the raw material supply chain for shoe manufacturing. Built to replace manual logistics tracking, the platform connects factory executives (Stakeholders) directly with Suppliers through dedicated role-based portals, enabling real-time stock monitoring, order lifecycle tracking, and interactive sales & transaction analytics.', tech: ['React.js', 'PostgreSQL','Prisma ORM', 'Express.js', 'Tailwind'], status: 'Internal', link: 'https://supply-chain-frontend-245g.vercel.app/login', img: supplyChain, span: 'md:col-span-8' },
    { title: 'Memoroid', desc: 'Memoroid is an e commerce catalog and brand platform for an online custom Polaroid photo printing service. Built to bridge digital photos with physical keepsakes, the website showcases customizable product tiers such as Platinum, Gold, Silver, and Black, integrates customer social proof, and presents the company profile with an interactive multi page layout.', tech: ['HTML5', 'CSS3', 'Javascript Vanilla', 'Relax.js'], status: 'Internal', link: 'https://memoroid2.vercel.app/', img: memoroid, span: 'md:col-span-8' },
    { title: 'Sehat Bebas Cacingan', desc: 'SehatBebasCacing is an educational healthcare web application built to raise public awareness about helminthiasis/worm infection prevention and promote hygiene practices. Designed to combat critical global health issues—where over 1.5 billion people are infected worldwide, with 80% of cases occurring in school children—the platform delivers interactive symptom assessment, consultation scheduling, and structured educational resources.', tech: ['HTML5', 'CSS3', 'Bootsrap', 'Javascript Vanilla', 'PHP'], status: 'Live', link: 'https://sehatbebascacing.vercel.app/', img: sehatBebasCacing, span: 'md:col-span-4' },
    
    // UI/UX Design Projects
    { title: 'SIKERMA myUnila', desc: 'myUnila SIKERMA is an enterprise university management portal design web created for Universitas Lampung to govern institutional partnerships and track academic performance indicators. The system streamlines the administration of MoU/MoA agreements, monitors document expiration lifecycles, and visualizes Higher Education Key Performance Indicators /IKU 5 progress.', tech: ['Figma', 'Wireframing'], status: 'UI/UX Design', img: sikerma, link: 'https://www.figma.com/proto/IBtTgNqkBkMSwvgAoQP5ts/Sikerma-My-Unila?node-id=541-7723&t=qibJP9pdv9PAb7et-0&scaling=scale-down&content-scaling=fixed&page-id=80%3A2349&starting-point-node-id=541%3A7723&show-proto-sidebar=1', linkLabel: 'Figma Prototype', span: 'md:col-span-12' },
    { title: 'Supply Chain Management Prototype', desc: 'Supply Chain is a B2B supplier management dashboard designed for footwear raw material providers. The platform enables suppliers to monitor incoming material orders (e.g., shoe laces), track live inventory stock levels, manage fulfillment statuses, and evaluate monthly sales performance through interactive data visualizations.', tech: ['Figma', 'Prototyping'], img: zain, status: 'UI/UX Design', link: 'https://www.figma.com/proto/gT07Q3tb3bwV7bpkSgR2JH/Z4IN?node-id=3-11&t=qibJP9pdv9PAb7et-0&scaling=scale-down&content-scaling=fixed&page-id=1%3A589&starting-point-node-id=1%3A592', linkLabel: 'Figma Prototype', span: 'md:col-span-4' },
    { title: 'Eco Shift', desc: 'Eco Shift Recycle Management is an eco centric mobile app design aimed at driving community led sustainability and waste management. The platform connects users with nearby recycling drop-off points, provides live tracking for personal environmental impact metrics such as CO₂ averted and trees saved, and offers incentives for sustainable lifestyle habits.', tech: ['Figma', 'Prototyping','Mobile Design'], img: ecoshift, status: 'UI/UX Design', link: 'https://www.figma.com/proto/PcNtXUebebvwwJGZXibw4a/ECO-SHIFT-RECYCLE-MANAGEMENT-MOBILE-APP?node-id=807-9068&t=qibJP9pdv9PAb7et-0&scaling=scale-down&content-scaling=fixed&page-id=807%3A7199&starting-point-node-id=807%3A45456', linkLabel: 'Figma Prototype', span: 'md:col-span-4' },
    { title: 'One Kopma', desc: 'Smart e-commerce mobile application designed for student cooperatives university of lampung. It simplifies on campus grocery shopping and snack ordering for students by offering digital catalog browsing, exclusive promotional deals, and multi-unit campus store integration.', tech: ['Figma', 'Design System'], img: oneKopma, status: 'UI/UX Design', link: 'https://www.figma.com/proto/TBq4BvfVZd3L9vbCstCrE9/One-Kopma?node-id=122-1641&t=MjcJi37IVa9DVcdO-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=122%3A1641', linkLabel: 'Figma Prototype', span: 'md:col-span-4' },
  ];

  const scrollVariant = {
    hidden: { opacity: 0, y: 48, filter: 'blur(8px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.32, 0.72, 0, 1] } }
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
              className={'group bg-bg-card border border-hairline rounded-bezel p-1.5 hover:border-hairline-h transition-all duration-700 ease-spring flex flex-col ' + proj.span}
            >
              <div className="bg-bg-inner rounded-bezel-inner p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] flex flex-col h-full relative">
                <span className="absolute top-8 right-8 px-2.5 py-1 rounded-full text-[10px] font-mono bg-black/60 backdrop-blur-md text-white border border-white/10 z-10 uppercase tracking-wide">
                  {proj.status}
                </span>

                <div className="w-full min-h-[12rem] max-h-48 group-hover:max-h-[1200px] rounded-[1.625rem] bg-[#0B1220] border border-hairline mb-6 overflow-hidden relative transition-[max-height] duration-700 ease-in-out">
                  <img
                    src={proj.img}
                    alt={proj.title + ' preview'}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto min-h-[12rem] object-cover object-top transition-transform duration-500 ease-spring"
                  />
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3.5"
                    >
                      <span className="text-[11px] font-mono text-white px-3 py-1.5 rounded-full bg-accent/90 border border-accent shadow-[0_0_15px_rgba(59,130,246,0.6)] backdrop-blur-sm">
                        {proj.linkLabel || 'Live Preview'} ↗
                      </span>
                    </a>
                  )}
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
                  <div className="border-t border-hairline pt-4 mt-auto">
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-mono text-white/50 hover:text-accent transition-colors duration-400 ease-spring w-max">
                      <ArrowSquareOut /> {proj.linkLabel || 'Live Preview'}
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
