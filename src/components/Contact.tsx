import { motion } from 'framer-motion';
import { useState, useRef, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, ArrowUpRight, Send, CheckCircle2, Sparkles } from 'lucide-react';

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

  const inputClass = "w-full bg-[rgba(255,255,255,0.03)] border border-hairline rounded-[0.85rem] px-4 py-3.5 text-sm text-heading font-body placeholder:text-white/25 outline-none focus:border-accent focus:bg-accent/5 transition-all duration-300";

  const socials = [
    {
      name: 'GitHub',
      handle: '@ahmadFairuuz',
      url: 'https://github.com/ahmadFairuuz',
      icon: Github,
      desc: 'Explore source code & repos',
    },
    {
      name: 'LinkedIn',
      handle: 'Ahmad Fairuz',
      url: 'https://www.linkedin.com/in/ahmadfairuzrizky/',
      icon: Linkedin,
      desc: 'Connect professionally',
    },
  ];

  return (
    <section id="contact" className="py-28 md:py-40 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">

          {/* Left Column: Narrative & Social Channels */}
          <motion.div
            variants={scrollVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.08 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] font-medium text-accent bg-accent/10 border border-accent/15 mb-5">
                <Sparkles className="w-3 h-3 text-accent" />
                Contact
              </div>

              {/* Heading */}
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading mb-4 tracking-tight leading-tight">
                Let's make something remarkable.
              </h2>

              {/* Narrative */}
              <p className="text-sm md:text-base text-white/70 leading-relaxed mb-8">
                Got an idea or a project in mind? Message me through LinkedIn or GitHub, or use the form here. Everything comes straight to my inbox.
              </p>

              {/* Social / Contact Cards */}
              <div className="space-y-3 mb-8">
                
                {socials.map((item, idx) => {
                                  const Icon = item.icon;
                                  return (
                                    <a
                                      key={idx}
                                      href={item.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="group flex items-center justify-between p-3.5 rounded-xl bg-bg-card border border-hairline hover:border-accent/40 transition-all duration-300 hover:bg-[#0B1220]"
                                    >
                                      <div className="flex items-center gap-3.5">
                                        <div className="w-9 h-9 rounded-lg bg-[#0B1220] border border-white/10 flex items-center justify-center text-white/80 group-hover:text-accent group-hover:border-accent/30 transition-colors">
                                          <Icon className="w-4 h-4" />
                                        </div>
                                        <div>
                                          <p className="text-xs font-heading font-medium text-heading group-hover:text-accent transition-colors flex items-center gap-2">
                                            {item.name}
                                            <span className="text-[10px] font-mono text-white/40 font-normal">{item.handle}</span>
                                          </p>
                                          <p className="text-[11px] text-white/50">{item.desc}</p>
                                        </div>
                                      </div>
                                      <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </a>
                                  );
                                })}
                              </div>
                            </div>
                          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            variants={scrollVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.32, 0.72, 0, 1] }}
            className="lg:col-span-7 bg-bg-card border border-hairline rounded-bezel p-1.5"
          >
            <div className="bg-bg-inner rounded-bezel-inner p-6 md:p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
              <div className="mb-6">
                <h3 className="font-heading font-semibold text-lg text-heading mb-1">
                  Send a message
                </h3>
                <p className="text-xs text-white/60">
                  Fill out the form below — all messages are delivered directly to my personal email inbox.
                </p>
              </div>

              {status === 'success' ? (
                <div role="status" className="p-8 text-center flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent mb-1">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-semibold text-base text-heading">Message dispatched!</h4>
                  <p className="text-xs text-white/60 max-w-sm">
                    Thank you for reaching out. I've received your note and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-xs font-mono text-accent hover:text-white px-4 py-2 rounded-full border border-accent/20 bg-accent/5 hover:bg-accent/20 transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        placeholder="John Doe"
                        className={inputClass}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        placeholder="john@example.com"
                        className={inputClass}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-white/60 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell me about your project, idea, or inquiry..."
                      rows={5}
                      className={inputClass + ' resize-none'}
                      aria-invalid={!!errors.message}
                    ></textarea>
                    {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                  </div>

                  {status === 'error' && (
                    <div role="alert" className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-400">
                      Failed to send message. Please try again or email me directly at <a href="mailto:ahmadfruz@gmail.com" className="underline text-white">ahmadfruz@gmail.com</a>.
                    </div>
                  )}

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-[11px] text-white/40 font-mono">
                      ⚡ Quick response guaranteed
                    </p>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="group inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full font-heading font-semibold text-sm bg-accent text-white hover:bg-accent/90 hover:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    >
                      {status === 'sending' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}