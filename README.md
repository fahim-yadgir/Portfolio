# Fahim Yadgir: Data Analyst Portfolio

React 18 + Vite + Tailwind CSS 3 + Framer Motion.

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
```

## Edit your content (only one file!)
Open `src/data/portfolio.js`. Everything marked `TODO` is a placeholder: replace
email, links, project problems/insights, certificates, education and achievements.

## Add assets
- Resume: put it at `public/resume.pdf`
- Dashboard screenshots: put images in `public/projects/` and set `image: '/projects/sales.png'` on the project
- Live dashboard / GitHub: fill `demo` and `github` on each project (buttons appear automatically)

## Contact form
Create a free form at formspree.io, copy `.env.example` to `.env` and set `VITE_FORMSPREE_ID`.
Without it, the form opens the visitor's email app.

## Deploy
Push to GitHub, import into Vercel (framework: Vite). Or drag `dist/` into Cloudflare Pages.

## Structure
```
src/
  data/portfolio.js    all content
  components/          Navbar, shared UI (Reveal, Section, Counter)
  hooks/               useActiveSection (scroll-spy)
  sections/            one file per portfolio section
public/                resume.pdf, projects/ screenshots
```
