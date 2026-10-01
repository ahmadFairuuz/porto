export default function Projects() {
  const projects = [
    {
      title: 'SiJuko',
      desc: 'Aplikasi mobile resmi ekosistem KOPMA Unila. Flutter + Firebase. 1.040+ perangkat, 71.8% adoption.',
      tech: ['Flutter', 'Firebase'],
      category: 'mobile'
    },
    {
      title: 'panelKopmaUnila',
      desc: 'Platform manajemen web & backend terpadu untuk KOPMA Unila. Integrasi data anggota, simpanan, alumni.',
      tech: ['Laravel', 'PHP'],
      category: 'fullstack'
    },
    {
      title: 'ARTISYS',
      desc: 'Asset Recovery Tracking Integrated System untuk Kejaksaan Tinggi Lampung. Routing berkas perkara.',
      tech: ['CodeIgniter', 'MySQL'],
      category: 'fullstack'
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
            <div key={i} className="bg-slate/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-indigo/30 transition-all">
              <h3 className="font-heading font-bold text-xl text-heading mb-2">{p.title}</h3>
              <p className="text-sm leading-relaxed mb-4">{p.desc}</p>
              <div className="flex gap-2">
                {p.tech.map((t, j) => (
                  <span key={j} className="px-3 py-1 rounded-full text-xs font-mono border border-indigo/30 text-indigo bg-indigo/10">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
