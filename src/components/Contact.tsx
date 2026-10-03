import { motion } from 'framer-motion';
import { useState, useRef, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<{ [k: string]: string }>({});

  const validate = () => {
    const form = formRef.current;
    const next: { [k: string]: string } = {};
    if (!form) return next;
    const name = (form.elements.namedItem('user_name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('user_email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
    if (!name.trim()) next.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Please enter a valid email address.';
    if (message.trim().length < 10) next.message = 'Message should be at least 10 characters.';
    return next;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    if (!formRef.current) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('EmailJS not configured. Set VITE_EMAILJS_* env vars.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('success');
      formRef.current.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
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
              {status === 'success' ? (
                <div role="status" className="flex flex-col gap-2">
                  <p className="text-sm text-accent2">Pesan terkirim. Saya akan segera membalas.</p>
                  <button onClick={() => setStatus('idle')} className="text-xs text-accent hover:text-heading transition-colors w-max">
                    Kirim pesan lain
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                  <div>
                    <input type="text" name="user_name" placeholder="Your Name" className={inputClass} aria-invalid={!!errors.name} />
                    {errors.name && <p className="text-xs text-red-400 mt-1.5">{errors.name}</p>}
                  </div>
                  <div>
                    <input type="email" name="user_email" placeholder="Email Address" className={inputClass} aria-invalid={!!errors.email} />
                    {errors.email && <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>}
                  </div>
                  <div>
                    <textarea name="message" placeholder="Your Message" rows={5} className={inputClass + ' resize-none'} aria-invalid={!!errors.message}></textarea>
                    {errors.message && <p className="text-xs text-red-400 mt-1.5">{errors.message}</p>}
                  </div>

                  {status === 'error' && (
                    <p role="alert" className="text-xs text-red-400">Pesan gagal terkirim. Coba lagi sebentar.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group inline-flex items-center justify-center gap-3 pl-7 pr-5 py-3 rounded-full font-heading font-semibold text-sm bg-accent text-white hover:scale-[0.98] transition-all duration-500 ease-spring disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
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
