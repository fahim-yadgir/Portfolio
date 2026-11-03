/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#F8FAFC',     // page background
        panel: '#FFFFFF',   // cards
        line: '#E2E8F0',    // borders
        mist: '#475569',    // normal text
        amber: '#0F766E',   // buttons / primary accent
        teal: '#2563EB',    // links / hover accent
        white: '#0F172A',   // headings (every text-white becomes dark)
        slate: { 300: '#475569' } // body paragraphs
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif']
      },
      keyframes: { marquee: { to: { transform: 'translateX(-50%)' } } },
      animation: { marquee: 'marquee 30s linear infinite' }
    }
  },
  plugins: []
}