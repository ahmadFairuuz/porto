/* ==========================================================================
   HeroShowcase — hero section portfolio (tema navy/blue, TANPA navbar).

   SATU FILE: seluruh sub-komponen (Left, QuoteCard, Right, FloatingIcon,
   GlowCurves) + ikon SVG digabung di sini sebagai fungsi lokal.

   Ditambahkan sebagai SECTION BARU di bawah <Hero /> yang lama (lihat App.tsx).
   Hero lama TIDAK diubah/dihapus.

   Layout: BOXED / CONTAINERED (bukan full-width) — frame dibatasi max-w lalu
   dipusatkan (mx-auto) sehingga tampak "kotak" mengambang dengan gutter kiri-kanan.
   Ubah lebar lewat konstanta BOXED_MAX_WIDTH di bawah.

   GANTI nama di konstanta NAME.
   GANTI foto karakter di: src/assets/fotoPortofolioBG.png
   GANTI avatar quote card di konstanta AVATAR_SRC.
   Warna tema diatur lewat CSS variables di src/index.css (blok .hero-navy).
   ========================================================================== */

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, ExternalLink, Quote } from 'lucide-react';
import characterImg from '../assets/fotoPortofolioBG.png';

/* ─── KONFIGURASI ─────────────────────────────────────────────── */

// GANTI: ganti "Fairuz" dengan namamu — dipakai di intro line & quote card.
const NAME = 'Fairuz';

// Lebar maksimum frame boxed. Lebih sempit = lebih terasa "kartu".
const BOXED_MAX_WIDTH = 'max-w-[1440px]';

// Easing entrance (cubic-bezier(.16,1,.3,1))
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];



/* ─── VARIANTS (entrance stagger) ─────────────────────────────── */

// Kiri: intro → headline → sub → tombol → card
const leftContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const leftItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};
// Headline: reveal clip-path dari bawah + blur-in
const headline: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(12px)', clipPath: 'inset(0 0 100% 0)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 1, ease: EASE },
  },
};

// Kanan: karakter → ikon tech
const rightContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
};
const rightItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

// Entrance untuk ikon melayang (fade-in + translateY(24px) → 0)
const iconEnter: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

/* ─── IKON TECH (SVG inline, tanpa dependency eksternal) ──────── */

function FigmaIcon() {
  return (
    <svg viewBox="0 0 38 57" role="img" aria-label="Figma">
      <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
      <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
      <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
      <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
      <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
    </svg>
  );
}

/* Ikon JS (hijau) — pengganti "lightning" agar sesuai referensi tech stack */
function JsIcon() {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="JavaScript">
      <path fill="#539E43" d="M32 3 58 18v28L32 61 6 46V18z" />
      <text
        x="32"
        y="41"
        textAnchor="middle"
        fontFamily="Plus Jakarta Sans, Inter, sans-serif"
        fontSize="20"
        fontWeight="700"
        fill="#FFFFFF"
      >
        JS
      </text>
    </svg>
  );
}

function Html5Icon() {
  return (
    <svg viewBox="0 0 512 512" role="img" aria-label="HTML5">
      <path fill="#E44D26" d="M71 460 30 0h452l-41 459-186 52z" />
      <path fill="#F16529" d="M256 472 407 430l35-393H256z" />
      <path fill="#EBEBEB" d="M256 208h-75l-5-58h80V94H112l3 32 26 292h115zm0 158-75-20-5-53h-57l9 105 128 35z" />
      <path fill="#fff" d="M256 208v56h70l-7 73-63 17v58l116-32 2-21 12-134 2-17zm0-114v56h144l5-56z" />
    </svg>
  );
}

function Css3Icon() {
  return (
    <svg viewBox="0 0 512 512" role="img" aria-label="CSS3">
      <path fill="#264DE4" d="M71 460 30 0h452l-41 459-186 52z" />
      <path fill="#2965F1" d="M256 472 407 430l35-393H256z" />
      <path fill="#EBEBEB" d="M256 193h-91l6 66h85zm0 132-78-21-5-55h-57l9 104 131 36zm0-246h-96l6 66h90z" />
      <path fill="#fff" d="M256 325v56l-63-17-4-42h-57l8 83 116 32zm0-132h-85l-6-66h91z" />
    </svg>
  );
}

/* ─── HOOK: typewriter untuk intro line ───────────────────────── */

/** Efek typewriter kecil untuk intro line (di-skip saat prefers-reduced-motion). */
function useTypewriter(text: string, speed = 90, startDelay = 700, enabled = true) {
  const [out, setOut] = useState('');

  useEffect(() => {
    if (!enabled) return;
    let i = 0;
    let timer = 0;
    const tick = () => {
      i += 1;
      setOut(text.slice(0, i));
      if (i < text.length) timer = window.setTimeout(tick, speed);
    };
    const start = window.setTimeout(tick, startDelay);
    return () => {
      window.clearTimeout(start);
      window.clearTimeout(timer);
    };
  }, [text, speed, startDelay, enabled]);

  // Saat reduced-motion, tampilkan teks penuh tanpa animasi (diturunkan saat render).
  return enabled ? out : text;
}

/* ─── KOMPONEN: FloatingIcon ──────────────────────────────────── */

type FloatVariant = 'float-4' | 'float-5' | 'float-6';

type FloatingIconProps = {
  children: ReactNode;
  /** Posisi absolute (mis. "left-[6%] top-[12%]"). */
  className?: string;
  /** Ukuran kotak ikon (px). */
  size?: number;
  /** Durasi float: float-4 (4s), float-5 (5s), float-6 (6s). */
  variant?: FloatVariant;
  /** animation-delay negatif agar tiap ikon tidak sinkron (detik). */
  delay?: number;
};

/**
 * FloatingIcon — wrapper reusable untuk ikon tech melayang.
 * Struktur: slot absolute (entrance) → box glass (infinite float).
 * Transform dipisah ke 2 elemen agar entrance & float tidak saling menimpa.
 */
function FloatingIcon({
  children,
  className = '',
  size = 54,
  variant = 'float-4',
  delay = 0,
}: FloatingIconProps) {
  return (
    <motion.div variants={iconEnter} className={`hero-tech-slot ${className}`}>
      <div
        className={`hero-tech hero-tech--${variant}`}
        style={{ width: size, height: size, animationDelay: `${delay}s` }}
      >
        {children}
      </div>
    </motion.div>
  );
}

/* ─── KOMPONEN: GlowCurves ────────────────────────────────────── */

// 3 lengkung glow di belakang karakter (draw-in ~1.5s lalu opacity pulse 0.4 ↔ 0.8)
const CURVES = [
  { d: 'M20 320C120 320 150 60 300 60', dur: 1.5 },
  { d: 'M60 380C200 380 220 120 360 140', dur: 1.7 },
  { d: 'M10 200C140 240 180 20 320 30', dur: 1.6 },
];

/** GlowCurves — SVG animated stroke-draw dengan blur/glow filter. */
function GlowCurves({ className = '' }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <svg
      className={`hero-curves ${className}`}
      viewBox="0 0 400 420"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <filter id="hero-curve-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <linearGradient id="hero-curve-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--glow)" />
          <stop offset="100%" stopColor="var(--accent-bright)" />
        </linearGradient>
      </defs>

      {CURVES.map((c, i) => (
        <motion.path
          key={i}
          d={c.d}
          stroke="url(#hero-curve-grad)"
          strokeWidth={3}
          strokeLinecap="round"
          filter="url(#hero-curve-glow)"
          initial={reduce ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0.4 }}
          animate={
            reduce
              ? { pathLength: 1, opacity: 0.6 }
              : { pathLength: 1, opacity: [0.4, 0.8, 0.4] }
          }
          transition={
            reduce
              ? { duration: 0 }
              : {
                  pathLength: { duration: c.dur, ease: EASE },
                  opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                }
          }
        />
      ))}
    </svg>
  );
}

/* ─── KOMPONEN: HeroQuoteCard (glass testimonial) ─────────────── */

function HeroMottoCard() {
  return (
    <figure className="hero-quote hero-quote--motto">
      <Quote className="hero-quote__icon" size={28} aria-hidden="true" />
      <blockquote className="hero-quote__text">
        Think deeply. Build cleanly. Ship boldly.
      </blockquote>
      <figcaption className="hero-quote__author">
        — Ahmad Fairuz Rizky Gani
      </figcaption>
    </figure>
  );
}

/* ─── KOMPONEN: HeroLeft (intro, headline, sub, CTA, quote card) ─ */

function HeroLeft() {
  const reduce = useReducedMotion();
  const typed = useTypewriter(NAME, 90, 700, !reduce);

  return (
    <motion.div
      variants={leftContainer}
      initial="hidden"
      animate="show"
      className="flex h-full min-h-0 flex-col justify-center hero-left"
    >
      <div className="flex flex-col gap-6 hero-left__stack">
        {/* ── Intro line ──
            Teknik a11y: bagian aria-hidden memuat teks yang dianimasikan (typewriter),
            sedangkan .sr-only berisi kalimat lengkap & stabil untuk screen reader.
            Tidak ada duplikat visual karena .sr-only tidak ditampilkan. */}
        <motion.p variants={leftItem} className="hero-intro">
          <span aria-hidden="true" className="hero-intro__visible">
            Hey I am <span className="hero-intro__name">{typed}</span>
          </span>
        </motion.p>

        {/* ── Headline ──
            Catatan a11y: hero lama sudah memakai satu-satunya <h1> di halaman,
            jadi headline ini dibuat <h2> dengan gaya visual identik (paling besar)
            agar aturan "hanya satu <h1>" tetap terpenuhi. */}
        <motion.h2 id="showcase-title" variants={headline} className="hero-headline">
          Software Developer
        </motion.h2>

        {/* ── Sub-headline ── */}
        <motion.p variants={leftItem} className="hero-sub">
          Building high performance web applications, secure RESTful APIs, and intuitive user interfaces with React, Laravel, and Tailwind CSS
        </motion.p>

        {/* ── CTA row: primary pill + secondary circle (email) ── */}
        <motion.div variants={leftItem} className="hero-cta">
          <a
            href="#contact"
            className="hero-btn hero-btn--primary w-full sm:w-auto"
            aria-label="Hire me — go to the contact section"
          >
            Hire Me
            <ArrowRight className="hero-btn__arrow" size={18} aria-hidden="true" />
          </a>
          <a
            href="#projects"
            className="hero-btn hero-btn--secondary w-full sm:w-auto"
            aria-label="View my projects"
          >
            View Project
            <ExternalLink className="hero-btn__arrow" size={18} aria-hidden="true" />
          </a>
        </motion.div>
      </div>

      {/* ── Glass quote card — pojok kiri bawah di desktop (lg:mt-auto) ── */}
      <motion.div variants={leftItem} className="w-full lg:mt-auto">
        <HeroMottoCard />
      </motion.div>
    </motion.div>
  );
}

/* ─── KOMPONEN: HeroRight (karakter + ikon melayang + arrow + glow) ─ */

function HeroRight() {
  const reduce = useReducedMotion();

  // Parallax mengikuti mouse (di-nonaktifkan saat reduced-motion / layar < 768px)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const ax = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const ay = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });
  // Ikon tech ikut bergeser lebih halus (setengah amplitudo)
  const ix = useTransform(ax, (v) => v * 0.5);
  const iy = useTransform(ay, (v) => v * 0.5);

  useEffect(() => {
    if (reduce) return;
    const mq = window.matchMedia('(min-width: 768px)');
    if (!mq.matches) return;

    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      mx.set(nx * 10);
      my.set(ny * 10);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [reduce, mx, my]);

  return (
    <motion.div
      variants={rightContainer}
      initial="hidden"
      animate="show"
      className="hero-visual relative flex min-h-[clamp(240px,44svh,560px)] items-center justify-center"
    >
      {/* ── Glow curves SVG di belakang karakter ── */}
      <GlowCurves className="hero-visual__curves" />

      {/* ── Arrow 3D translucent besar (kanan atas) + parallax ──
          Bentuk: panah melengkung tebal dengan kepala panah yang jelas
          (bukan garis wispy/lightning), diberi gradien + ekstrusi agar 3D/glass. */}
      <motion.div
        variants={rightItem}
        className="hero-arrow-wrap"
        style={{ x: ax, y: ay, rotate: -4 }}
        aria-hidden="true"
      >
        <div className="hero-arrow">
          <svg viewBox="0 0 210 200" fill="none" width="100%" height="100%">
            <defs>
              <linearGradient id="hero-arrow-grad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--accent-deep)" />
                <stop offset="55%" stopColor="var(--accent)" />
                <stop offset="100%" stopColor="var(--accent-bright)" />
              </linearGradient>
            </defs>
            {/* sisi ekstrusi (bayangan) untuk kesan 3D */}
            <g transform="translate(6,7)" opacity="0.5">
              <path
                d="M46 176C46 96 100 52 168 52"
                stroke="var(--glow)"
                strokeWidth="30"
                strokeLinecap="round"
              />
              <polygon points="206,52 150,24 150,80" fill="var(--glow)" />
            </g>
            {/* permukaan depan (glass) */}
            <path
              d="M46 176C46 96 100 52 168 52"
              stroke="url(#hero-arrow-grad)"
              strokeWidth="30"
              strokeLinecap="round"
            />
            <polygon points="206,52 150,24 150,80" fill="url(#hero-arrow-grad)" />
            {/* highlight tipis di tengah untuk kesan kaca */}
            <path
              d="M50 172C50 100 100 60 164 58"
              stroke="rgba(255,255,255,0.55)"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </motion.div>

      {/* ── Karakter / ilustrasi (center, overlap ke area glow) ──
          GANTI: ganti file src/assets/fotoPortofolioBG.png dengan ilustrasi
          karakter 3D kamu (PNG transparan). Background foto dihapus otomatis
          lewat scripts/rembg_v2.py. */}
      <motion.div variants={rightItem} className="relative z-[2] flex items-center justify-center">
        <div className="hero-character">
          <span className="hero-character__blob" aria-hidden="true" />
          <img
            className="hero-character__img"
            src={characterImg}
            alt={`Foto ${NAME}`}
            width={1059}
            height={1573}
            loading="eager"
            decoding="async"
          />
        </div>
      </motion.div>

      {/* ── Ikon tech 3D melayang (parallax halus) ── */}
      <motion.div className="absolute inset-0 z-[3]" style={{ x: ix, y: iy }}>
        {/* HTML5 — atas kiri karakter */}
        <FloatingIcon className="left-[8%] top-[10%]" size={54} variant="float-4" delay={-0.4}>
          <Html5Icon />
        </FloatingIcon>

        {/* Figma — atas kanan karakter */}
        <FloatingIcon className="right-[8%] top-[14%]" size={56} variant="float-5" delay={-1.6}>
          <FigmaIcon />
        </FloatingIcon>

        {/* CSS3 — tengah kiri (disembunyikan < lg agar ikon berkurang di mobile) */}
        <FloatingIcon className="left-[2%] top-[46%] hidden lg:block" size={50} variant="float-6" delay={-2.8}>
          <Css3Icon />
        </FloatingIcon>

        {/* JavaScript — bawah kiri */}
        <FloatingIcon className="bottom-[16%] left-[12%]" size={56} variant="float-6" delay={-3.2}>
          <JsIcon />
        </FloatingIcon>

        {/* Badge angka "01" — bawah kanan */}
        <FloatingIcon className="bottom-[20%] right-[12%]" size={54} variant="float-4" delay={-3.4}>
          <span className="hero-badge__num">01</span>
        </FloatingIcon>
      </motion.div>

      {/* ── Orbit rings (lingkaran konsentris) di belakang karakter ── */}
      <div className="hero-orbit" aria-hidden="true" />
    </motion.div>
  );
}

/* ─── KOMPONEN UTAMA (default export) ─────────────────────────── */

export default function HeroShowcase() {
  return (
    <section
      id="showcase"
      aria-labelledby="showcase-title"
      className="hero-navy relative p-3 md:p-4 lg:px-8 lg:py-6"
    >
      <div
        className={`hero-frame relative mx-auto flex w-full ${BOXED_MAX_WIDTH} min-h-[calc(100svh-1 rem)] overflow-hidden rounded-[40px] `}
      >
        {/* ── Layer dekoratif background (gradient + glow blobs + grid + noise) ── */}
        <div className="hero-bg" aria-hidden="true">
          <span className="hero-blob hero-blob--1" />
          <span className="hero-blob hero-blob--2" />
          <span className="hero-blob hero-blob--3" />
          <span className="hero-grid" />
          <span className="hero-noise" />
        </div>

        {/* ── Konten: grid 2 kolom (kiri 55% / kanan 45% pada desktop) ── */}
        <div className="relative z-10 grid w-full grid-cols-1 items-stretch gap-10 px-6 py-12 md:h-full md:grid-cols-[58%_42%] md:gap-8 md:px-10 lg:grid-cols-[55%_45%] lg:gap-4 lg:px-16 lg:py-16">
          <HeroLeft />
          <HeroRight />
        </div>
      </div>
    </section>
  );
}
