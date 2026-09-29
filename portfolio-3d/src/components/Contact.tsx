import { useState, useRef, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';

// ─── EmailJS Config ───────────────────────────────────
// 1. Daftar di https://www.emailjs.com
// 2. Buat Email Service (Gmail/Outlook dll) → dapat SERVICE_ID
// 3. Buat Email Template → dapat TEMPLATE_ID
//    Template variables: {{user_name}}, {{user_email}}, {{message}}
// 4. Account → API Keys → Public Key
// Lalu isi 3 variable di bawah:
// const SERVICE_ID  = 'service_1pbihkh';   // ← ganti
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;  // ← ganti
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;   // ← ganti
// ──────────────────────────────────────────────────────

type Status = '' | 'sending' | 'success' | 'error';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (SERVICE_ID.includes('XXXX') || TEMPLATE_ID.includes('XXXX') || PUBLIC_KEY.includes('XXXX')) {
      console.error(
        '⚠️ EmailJS belum dikonfigurasi! Isi SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY di Contact.tsx'
      );
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

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-sm text-indigo tracking-widest uppercase mb-3">Contact</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading mb-6">Let's work together.</h2>
            <p className="leading-relaxed mb-8">Punya proyek atau ide? Mari diskusi. Terbuka untuk kolaborasi dan freelance.</p>
          </div>
          <div className="bg-slate/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {/* name attribute HARUS cocok dengan template variable di EmailJS */}
              <input type="text" name="user_name" placeholder="Your Name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-heading focus:outline-none focus:border-indigo transition-colors" />
              <input type="email" name="user_email" placeholder="Email Address" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-heading focus:outline-none focus:border-indigo transition-colors" />
              <textarea name="message" placeholder="Your Message" rows={5} required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-heading focus:outline-none focus:border-indigo transition-colors resize-none"></textarea>
              <button type="submit" disabled={status === 'sending'} className="w-full py-3.5 rounded-xl font-heading font-semibold text-sm text-white bg-indigo hover:bg-indigo/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && <div className="text-center text-sm text-emerald-400">✅ Message sent! I'll get back to you soon.</div>}
              {status === 'error' && <div className="text-center text-sm text-red-400">❌ Failed to send. Check console.</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
