/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#141412',
        body: '#4a4a44',
        faint: '#8a8a80',
        tint: '#faf9f5',
        tint2: '#fefef5',
        tint3: '#f0efe9',
        line: 'rgba(20,20,18,.1)',
      },
      fontFamily: {
        sans: ['Satoshi', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        wrap: '1160px',
      },
    },
  },
  plugins: [],
};
