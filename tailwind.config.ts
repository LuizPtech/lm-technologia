import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx,mdx}', './components/**/*.{ts,tsx}', './content/**/*.{md,mdx}'],
  theme: {
    container: { center: true, padding: '1.5rem', screens: { '2xl': '1280px' } },
    extend: {
      colors: {
        bg: '#05070D',
        surface: '#0B0F1A',
        border: '#1A2233',
        royal: { DEFAULT: '#1E3A8A', hi: '#2547B8' },
        accent: '#3B82F6',
        text: '#E6ECF5',
        muted: '#8A94A6',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular'],
      },
      borderRadius: { '2xl': '1rem' },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(ellipse at top, rgba(37,71,184,0.15), transparent 60%)',
      },
    },
  },
  plugins: [],
};

export default config;
