const icon = (slug: string, color: string) => `https://cdn.simpleicons.org/${slug}/${color}`;

type Tech = { name: string; logo: string };

export default function TechStack() {
  const row1: Tech[] = [
    { name: "React.js", logo: icon("react", "61DAFB") },
    { name: "Node.js", logo: icon("nodedotjs", "339933") },
    { name: "Vue.js", logo: icon("vuedotjs", "4FC08D") },
    { name: "Laravel", logo: icon("laravel", "FF2D20") },
    { name: "Flutter", logo: icon("flutter", "02569B") },
    { name: "CodeIgniter", logo: icon("codeigniter", "EE4323") },
    { name: "Tailwind", logo: icon("tailwindcss", "06B6D4") },
  ];

  const row2: Tech[] = [
    { name: "Bootstrap", logo: icon("bootstrap", "7952B3") },
    { name: "PHP", logo: icon("php", "777BB4") },
    { name: "JavaScript", logo: icon("javascript", "F7DF1E") },
    { name: "Git", logo: icon("git", "F05032") },
    { name: "Docker", logo: icon("docker", "2496ED") },
    { name: "Postman", logo: icon("postman", "FF6C37") },
    { name: "Firebase", logo: icon("firebase", "FFCA28") },
    { name: "Figma", logo: icon("figma", "F24E1E") },
    { name: "WordPress", logo: icon("wordpress", "21759B") },
  ];

  const Card = ({ name, logo }: Tech) => (
    <div className="glass rounded-xl px-6 py-4 flex items-center gap-3 min-w-[160px] shrink-0">
      <img src={logo} alt={name} className="w-6 h-6 object-contain" loading="lazy" />
      <span className="font-heading font-semibold text-sm text-heading">{name}</span>
    </div>
  );

  return (
    <section id="techstack" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-indigo tracking-widest uppercase mb-3">Tech Stack</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading mb-4">
            Technologies I Work With
          </h2>
          <p className="text-body max-w-md mx-auto">
            Tools and technologies powering my projects — from frontend frameworks to cloud infrastructure.
          </p>
        </div>
      </div>

      <div className="relative mb-6">
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-obsidian to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-obsidian to-transparent z-10" />
        <div className="marquee-track px-8">
          {row1.map((t, i) => <Card key={`a${i}`} {...t} />)}
          {row1.map((t, i) => <Card key={`b${i}`} {...t} />)}
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-obsidian to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-obsidian to-transparent z-10" />
        <div className="marquee-track-reverse px-8">
          {row2.map((t, i) => <Card key={`c${i}`} {...t} />)}
          {row2.map((t, i) => <Card key={`d${i}`} {...t} />)}
        </div>
      </div>
    </section>
  );
}
