export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-slate/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-sm text-indigo tracking-widest uppercase mb-3">About Me</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading mb-6">
              Passionate about code & design.
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>Fullstack developer sekaligus UI/UX designer yang berfokus pada aplikasi web dan mobile yang performa, scalable, dan engaging.</p>
              <p>Berpengalaman mengembangkan sistem digital dari nol — backend, API, hingga antarmuka yang intuitif.</p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div>
                <p className="font-heading font-bold text-2xl text-heading">3+</p>
                <p className="text-sm mt-1">Projects</p>
              </div>
              <div>
                <p className="font-heading font-bold text-2xl text-heading">1k+</p>
                <p className="text-sm mt-1">Users</p>
              </div>
              <div>
                <p className="font-heading font-bold text-2xl text-heading">71%</p>
                <p className="text-sm mt-1">Adoption</p>
              </div>
            </div>
          </div>
          <div className="bg-slate/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo to-cyan flex items-center justify-center mb-6">
              <span className="text-white font-heading font-bold text-3xl">F</span>
            </div>
            <h3 className="font-heading font-bold text-xl text-heading mb-1">Fairuz</h3>
            <p className="text-sm text-indigo font-mono mb-4">Fullstack & Mobile Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
