export default function TechStack() {
  const techs = [
    'React.js', 'Vue.js', 'Tailwind CSS', 'CodeIgniter', 'Flutter', 
    'Firebase', 'MySQL', 'REST API', 'Laravel', 'PHP', 
    'JavaScript', 'Figma', 'WordPress'
  ];

  return (
    <section id="techstack" className="relative py-24 md:py-32 bg-slate/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <p className="font-mono text-sm text-indigo tracking-widest uppercase mb-3">Tech Stack</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading mb-4">Technologies I Work With</h2>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 px-6 scrollbar-hide">
        {techs.map((tech, i) => (
          <div key={i} className="bg-slate/50 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/5 whitespace-nowrap">
            <span className="font-heading font-semibold text-sm text-heading">{tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
