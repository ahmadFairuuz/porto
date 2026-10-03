/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:         '#050505',
        'bg-card':  'rgba(255,255,255,0.03)',
        'bg-inner': 'rgba(255,255,255,0.05)',
        heading:    '#f0f0f0',
        body:       'rgba(255,255,255,0.6)',
        accent:     '#818cf8',
        accent2:    '#34d399',
        hairline:   'rgba(255,255,255,0.06)',
        'hairline-h':'rgba(255,255,255,0.15)',
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

