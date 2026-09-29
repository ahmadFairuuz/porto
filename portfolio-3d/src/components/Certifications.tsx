const certifications = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Dec 2023',
    badge: '🏆',
    color: 'from-orange-500 to-yellow-500'
  },
  {
    title: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: 'Aug 2023',
    badge: '☁️',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Meta Front-End Developer Certificate',
    issuer: 'Meta (Coursera)',
    date: 'May 2023',
    badge: '⚛️',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    date: 'Feb 2023',
    badge: '🍃',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'Nov 2022',
    badge: '☁️',
    color: 'from-sky-500 to-blue-500'
  },
  {
    title: 'Kubernetes Application Developer',
    issuer: 'Cloud Native Computing Foundation',
    date: 'Sep 2022',
    badge: '⚙️',
    color: 'from-purple-500 to-pink-500'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-sm text-indigo tracking-widest uppercase mb-3 text-center">Certifications</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading mb-16 text-center">Achievements & credentials.</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="group relative bg-slate/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Badge gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              
              <div className="relative">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${cert.color} mb-4 text-3xl`}>
                  {cert.badge}
                </div>
                
                {/* Title */}
                <h3 className="font-heading font-bold text-lg text-heading mb-2 leading-snug">
                  {cert.title}
                </h3>
                
                {/* Issuer */}
                <p className="text-sm opacity-70 mb-3">{cert.issuer}</p>
                
                {/* Date */}
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-indigo">{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
