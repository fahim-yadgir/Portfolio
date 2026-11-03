import { motion } from 'framer-motion'
import { Download, Github, Linkedin } from 'lucide-react'
import { profile } from '../data/portfolio.js'
import { Counter } from '../components/ui.jsx'

const pts = [12, 30, 22, 48, 40, 66, 58, 84, 76, 98]
const W = 420, H = 180
const xy = pts.map((v, i) => [(i / (pts.length - 1)) * W, H - (v / 100) * H])
const line = xy.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ')

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center px-5 pt-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-teal">{profile.role}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-2 text-5xl font-extrabold leading-[1.05] sm:text-7xl">{profile.name}</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="mt-4 font-display text-2xl text-amber sm:text-3xl">{profile.tagline}</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="mt-5 max-w-lg text-mist">{profile.intro}</motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-8 flex flex-wrap gap-3">
            <a href={profile.resume} download className="btn-primary"><Download size={18} />Download resume</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost"><Github size={18} />GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-ghost"><Linkedin size={18} />LinkedIn</a>
          </motion.div>
        </div>

        {/* Signature moment: a dashboard that draws itself on load */}
        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
          className="card !p-5">
          <div className="mb-4 flex items-center justify-between text-sm text-mist">
            <span>Revenue trend</span>
            <span className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-amber" /><i className="h-2.5 w-2.5 rounded-full bg-teal" /><i className="h-2.5 w-2.5 rounded-full bg-line" /></span>
          </div>
          <svg viewBox={`0 0 ${W} ${H + 10}`} className="w-full" role="img" aria-label="Animated line chart trending upward">
            <defs>
              <linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#2563EB" stopOpacity=".25" /><stop offset="1" stopColor="#2563EB" stopOpacity="0" /></linearGradient>
            </defs>
            {[0, 1, 2, 3].map((i) => <line key={i} x1="0" x2={W} y1={(H / 3) * i} y2={(H / 3) * i} stroke="#E2E8F0" strokeDasharray="3 5" />)}
            <motion.path d={`${line} L${W} ${H} L0 ${H} Z`} fill="url(#fill)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 1 }} />
            <motion.path d={line} fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6, duration: 1.8, ease: 'easeInOut' }} />
            {xy.map(([x, y], i) => (
              <motion.circle key={i} cx={x} cy={y} r="4" fill="#0F766E" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 + (i / pts.length) * 1.8 }} />
            ))}
          </svg>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            {[['Insights', 120, '+'], ['Queries', 300, '+'], ['CGPA', 9.67, '']].map(([l, v, s]) => (
              <div key={l} className="rounded-lg bg-ink p-3">
                <div className="font-display text-2xl text-white"><Counter to={v} decimals={l === 'CGPA' ? 2 : 0} suffix={s} /></div>
                <div className="text-xs text-mist">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}