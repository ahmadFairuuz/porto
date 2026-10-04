import { motion } from 'framer-motion';
import { MonitorSmartphone, Code2, Smartphone } from 'lucide-react';

const SERVICES = [
  {
    no: '01',
    tag: 'Design & Interface',
    title: 'Web & Mobile Design',
    desc: 'Designing modern, adaptive, and responsive digital interfaces across web and mobile platforms to deliver compelling visual impressions and seamless experiences.',
    icon: MonitorSmartphone,
  },
  {
    no: '02',
    tag: 'Fullstack Engineering',
    title: 'Fullstack Web Development',
    desc: 'Developing fast, secure, and scalable end-to-end web applications with robust Laravel backend architectures and interactive React frontends.',
    icon: Code2,
  },
  {
    no: '03',
    tag: 'Mobile Engineering',
    title: 'Mobile Development',
    desc: 'Building responsive, high-performance cross-platform mobile apps with Flutter, focusing on clean architecture, fluid animations, and intuitive user experiences.',
    icon: Smartphone,
  },
];

export default function About() {
  const scrollVariant = {
    hidden: { opacity: 0, y: 48, filter: 'blur(8px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.32, 0.72, 0, 1] } }
  };

  return (
    <section id="about" className="py-28 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* ── Kolom Kiri: Narasi Profil & Quick Stats (5 col) ── */}
          <motion.div
            variants={scrollVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.08 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] font-medium text-accent bg-accent/10 border border-accent/15 mb-5">
              About Me
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading mb-6 leading-tight">
              Passionate about code & design.
            </h2>
            <div className="space-y-4 leading-[1.8] text-white/70 text-sm md:text-base">
              <p>
                Informatics Engineering graduate from University of Lampung specializing in Fullstack Web Development and UI/UX Design. Experienced in building end-to-end digital solutions—from Laravel RESTful APIs and secure database architectures to responsive React & Tailwind interfaces.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-hairline">
              <div>
                <p className="font-heading font-bold text-3xl text-heading">3+</p>
                <p className="text-xs text-white/50 font-mono mt-1 uppercase tracking-wider">Projects</p>
              </div>
              <div>
                <p className="font-heading font-bold text-3xl text-heading">1k+</p>
                <p className="text-xs text-white/50 font-mono mt-1 uppercase tracking-wider">Users</p>
              </div>
              <div>
                <p className="font-heading font-bold text-3xl text-heading">71%</p>
                <p className="text-xs text-white/50 font-mono mt-1 uppercase tracking-wider">Adoption</p>
              </div>
            </div>
          </motion.div>

          {/* ── Kolom Kanan: 3 Pilar Layanan (7 col) ── */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.no}
                initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.32, 0.72, 0, 1] }}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <div className="group bg-bg-card border border-hairline rounded-bezel p-1.5 hover:border-accent/40 transition-all duration-500 ease-spring">
                  <div className="bg-bg-inner rounded-bezel-inner p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                    {/* Icon: primary blue stroke on navy background */}
                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#0B1220] border border-accent/25 flex items-center justify-center text-accent transition-all duration-500 ease-spring group-hover:bg-accent/15 group-hover:border-accent group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                      <s.icon size={26} strokeWidth={2} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3 mb-1.5">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-semibold text-accent">
                          {s.tag}
                        </span>
                        <span className="font-mono text-xs text-white/25 transition-colors duration-500 group-hover:text-white/55">
                          {s.no}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-lg text-heading group-hover:text-white transition-colors duration-300">
                        {s.title}
                      </h3>
                      <p className="text-xs sm:text-sm mt-1.5 leading-relaxed text-white/60 group-hover:text-white/85 transition-colors duration-300">
                        {s.desc}
                      </p>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
