import { useState } from 'react';

export default function Projects() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const projects = [
    {
      title: 'SiJuko',
      desc: 'Aplikasi mobile resmi ekosistem KOPMA Unila. Flutter + Firebase. 1.040+ perangkat, 71.8% adoption.',
      tech: ['Flutter', 'Firebase'],
      category: 'mobile',
      image: 'src/assets/SiJuko.jpeg',
      link: 'https://play.google.com/store/apps/details?id=com.kopmaul.sijuko&pcampaignid=web_share',
      status: 'Live'
    },
    {
      title: 'panelKopmaUnila',
      desc: 'Platform manajemen web & backend terpadu untuk KOPMA Unila. Integrasi data anggota, simpanan, alumni.',
      tech: ['Laravel', 'PHP'],
      category: 'fullstack',
      image: 'src/assets/panelKopma.png',
      link: 'https://panel.kopmaunilaofficial.com',
      status: 'Live'
    },
    {
      title: 'Website Kopmaunila.official',
      desc: 'Website resmi KOPMA Unila. Informasi organisasi, berita, dan galeri terpusat.',
      tech: ['React', 'Tailwind CSS'],
      category: 'web',
      image: 'src/assets/kopmaUnilaWeb.png',
      link: 'https://kopmaunilaofficial.com/',
      status: 'Live'
    },
    {
      title: 'ARTISYS',
      desc: 'Asset Recovery Tracking Integrated System untuk Kejaksaan Tinggi Lampung. Routing berkas perkara.',
      tech: ['CodeIgniter', 'MySQL'],
      category: 'fullstack',
      image: 'src/assets/artisys.png',
      status: 'Internal'
    },
    {
      title: 'Simbok Repository Management',
      desc: 'Sistem manajemen repository dokumen dan aset simbok organisasi KOPMA Unila.',
      tech: ['Node.js', 'MongoDB'],
      category: 'fullstack',
      image: 'src/assets/simbokInventory.png',
      link: 'https://simbok-inventory.vercel.app/',
      status: 'Internal'
    },
    {
      title: 'Supply Chain Management',
      desc: 'supplyxxxxxxxx',
      tech: ['React.js', 'PostgreSQL', 'Express.js'],
      category: 'frontend',
      image: 'src/assets/supplyChain.png',
      link: 'https://supply-chain-frontend-245g.vercel.app/login',
      status: 'Internal'
    },
    {
      title: 'Memoroid',
      desc: 'Platform pembelajaran dan manajemen knowledge base internal KOPMA Unila.',
      tech: ['Next.js', 'PostgreSQL'],
      category: 'web',
      image: 'src/assets/memoroid.png',
      link: 'https://memoroid2.vercel.app/',
      status: 'Internal'
    },
    {
      title: 'Sehat Bebas Cacingan',
      desc: 'Campaign dan platform informasi kesehatan reproduksi KOPMA Unila.',
      tech: ['React', 'Firebase'],
      category: 'web',
      image: 'src/assets/sehatbebascacing.png',
      link: 'https://sehatbebascacing.vercel.app/',
      status: 'Live'
    },
    {
      title: 'Sikerma myUnila',
      desc: 'DESAIN BLA BLA BLA BLAxxxxxxxxxxxxxx',
      tech: ['Figma'],
      category: 'design',
      image: 'src/assets/sikermaDashboard.png',
      status: 'UI/UX Design'
    }
  ];

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-mono text-sm text-indigo tracking-widest uppercase mb-3">Projects</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading">Selected Work</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="group relative bg-slate/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-indigo/30 transition-all hover:shadow-lg hover:shadow-indigo/10 flex flex-col">
              
              {/* Image Preview Container */}
              <div className="relative w-full mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center transition-all duration-500 ease-in-out h-48 group-hover:h-auto group-hover:min-h-[16rem]">
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:object-contain group-hover:bg-slate-900"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<span class="text-6xl font-bold text-slate-700">${p.title.charAt(0)}</span><span class="absolute top-2 right-2 px-2 py-1 rounded text-xs font-mono bg-black/60 backdrop-blur text-white border border-white/10 shadow-sm z-10">${p.status}</span>`;
                    }}
                  />
                )}
                
                {!p.image && (
                  <span className="text-6xl font-bold text-slate-700">{p.title.charAt(0)}</span>
                )}
                
                <span className="absolute top-2 right-2 px-2 py-1 rounded text-xs font-mono bg-black/60 backdrop-blur text-white border border-white/10 shadow-sm z-10">
                  {p.status}
                </span>
              </div>

              {/* Text Content */}
              <h3 className="font-heading font-bold text-xl text-heading mb-2">{p.title}</h3>
              <p className="text-sm leading-relaxed mb-4 opacity-80 flex-grow">{p.desc}</p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t, j) => (
                  <span key={j} className="px-2.5 py-1 rounded-full text-xs font-mono border border-indigo/30 text-indigo bg-indigo/10">
                    {t}
                  </span>
                ))}
              </div>

              {/* Link Actions */}
              {p.link && (
                <div className="flex items-center gap-4 text-sm pt-4 border-t border-white/5">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-indigo hover:text-indigo-400 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Preview
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
