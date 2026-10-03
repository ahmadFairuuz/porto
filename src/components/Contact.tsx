import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const next: { [k: string]: string } = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email address.';
    if (form.message.trim().length < 10) next.message = 'Message should be at least 10 characters.';
    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    }
  };

  const scrollVariant = {
    hidden: { opacity: 0, y: 48, filter: 'blur(8px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.32, 0.72, 0, 1] } }
  };

  const inputClass = "w-full bg-[rgba(255,255,255,0.03)] border border-hairline rounded-[0.85rem] px-4 py-3.5 text-sm text-heading font-body placeholder:text-white/25 outline-none focus:border-accent transition-colors duration-400 ease-spring";

  return (
    <section id="contact" className="py-28 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          <motion.div variants={scrollVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }}>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] font-medium text-accent bg-accent/10 border border-accent/15 mb-5">
              Contact
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading mb-6">
              Let's work together.
            </h2>
            <p className="leading-[1.8]">Punya proyek atau ide? Mari diskusi. Terbuka untuk kolaborasi dan freelance.</p>
          </motion.div>

          <motion.div 
            variants={scrollVariant} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.32, 0.72, 0, 1] }}
            className="bg-bg-card border border-hairline rounded-bezel p-1.5"
          >
            <div className="bg-bg-inner rounded-bezel-inner p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
              {sent ? (
                <p className="text-sm text-accent2">Pesan terkirim. Saya akan segera membalas.</p>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1.5">{errors.name}</p>}
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>}
                  </div>
                  <div>
                    <textarea 
                      placeholder="Your Message" 
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={inputClass + ' resize-none'}
                      aria-invalid={!!errors.message}
                    ></textarea>
                    {errors.message && <p className="text-xs text-red-400 mt-1.5">{errors.message}</p>}
                  </div>
                  <button 
                    type="submit" 
                    className="group inline-flex items-center justify-center gap-3 pl-7 pr-5 py-3 rounded-full font-heading font-semibold text-sm bg-accent text-white hover:scale-[0.98] transition-all duration-500 ease-spring"
                  >
                    Send Message
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/15 group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105 transition-all duration-500 ease-spring">↗</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
