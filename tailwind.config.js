/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:         '#0B1220',
        'bg-card':  'rgba(255,255,255,0.04)',
        'bg-inner': 'rgba(255,255,255,0.06)',
        heading:    '#F8FAFC',
        body:       'rgba(255,255,255,0.7)',
        accent:     '#3B82F6',
        accent2:    '#60A5FA',
        hairline:   'rgba(255,255,255,0.08)',
        'hairline-h':'rgba(255,255,255,0.18)',
        // ── Hero Showcase (navy/blue) design tokens ──
        ink:   { 900: 'var(--bg-1)', 950: 'var(--bg-2)' },
        brand: { DEFAULT: 'var(--accent)', bright: 'var(--accent-bright)', deep: 'var(--accent-deep)' },
        glow:  'var(--glow)',
        muted: 'var(--muted)',
      },
      fontFamily: {
        heading: ['"Clash Display"', 'sans-serif'],
        body:    ['"Plus Jakarta Sans"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        bezel:  '2rem',
        'bezel-inner': 'calc(2rem - 0.375rem)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'marquee':     'marquee 35s linear infinite',
        'marquee-rev': 'marquee 40s linear infinite reverse',
      },
    },
  },
  plugins: [],
}

