import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF3366',
        secondary: '#FFE53D',
        muted: '#F4F4F5',
        accent: {
          blue: '#3DA9FC',
          pink: '#FF6FB5',
          green: '#3DDC97',
          purple: '#A78BFA',
          orange: '#FF8C42'
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
