import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, X } from 'lucide-react'
import { Section, Chip, Reveal } from '../components/ui.jsx'
import { projects } from '../data/portfolio.js'

const cats = ['All', ...new Set(projects.map((p) => p.category))]

function MiniChart({ data }) {
  return (
    <div className="flex h-24 items-end gap-1.5 rounded-lg bg-ink p-3">
      {data.map((v, i) => (
        <motion.div key={i} className="flex-1 rounded-t bg-gradient-to-t from-teal/40 to-teal" initial={{ height: 0 }}
          whileInView={{ height: `${v}%` }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.6 }} />
      ))}
    </div>
  )
}

function Links({ p }) {
  return (
    <div className="flex gap-3">
      {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="btn-ghost !py-1.5 text-sm"><Github size={16} />Code</a>}
      {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="btn-primary !py-1.5 text-sm"><ExternalLink size={16} />Live dashboard</a>}
    </div>
  )
}

function Modal({ p, onClose }) {
  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', esc)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', esc); document.body.style.overflow = '' }
  }, [onClose])
  const block = (label, items) => (
    <div>
      <h4 className="mb-2 font-display text-amber">{label}</h4>
      <ul className="list-disc space-y-1 pl-5 text-slate-300">{items.map((i) => <li key={i}>{i}</li>)}</ul>
    </div>
  )
  return (
    <motion.div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div layoutId={`card-${p.title}`} role="dialog" aria-modal="true" aria-label={p.title} onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-3xl space-y-6 overflow-y-auto rounded-2xl border border-line bg-panel p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold sm:text-3xl">{p.title}</h3>
          <button onClick={onClose} aria-label="Close" className="rounded-md p-1 text-mist hover:text-white"><X /></button>
        </div>
        {p.image ? <img src={p.image} alt={`${p.title} dashboard screenshot`} className="w-full rounded-lg border border-line" /> : <MiniChart data={p.chart} />}
        <div><h4 className="mb-2 font-display text-amber">Problem</h4><p className="text-slate-300">{p.problem}</p></div>
        <div><h4 className="mb-2 font-display text-amber">Tools used</h4><div className="flex flex-wrap gap-2">{p.tools.map((t) => <Chip key={t}>{t}</Chip>)}</div></div>
        {block('Key analysis', p.analysis)}
        {block('Insights', p.insights)}
        <Links p={p} />
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [cat, setCat] = useState('All')
  const [open, setOpen] = useState(null)
  const list = projects.filter((p) => cat === 'All' || p.category === cat)
  return (
    <Section id="projects" wide title="Data analytics projects" intro="Real datasets, real questions. Open any project for the full problem, method and insights.">
      <Reveal className="mb-8 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)} className={`rounded-full border px-4 py-1.5 text-sm transition ${cat === c ? 'border-amber bg-amber text-ink' : 'border-line text-mist hover:border-teal hover:text-white'}`}>{c}</button>
        ))}
      </Reveal>
      <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.article layout layoutId={`card-${p.title}`} key={p.title} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -6 }} className="card flex cursor-pointer flex-col gap-4" tabIndex={0} role="button"
              onClick={() => setOpen(p)} onKeyDown={(e) => e.key === 'Enter' && setOpen(p)}>
              <MiniChart data={p.chart} />
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <span className="text-xs text-amber">{p.category}</span>
              </div>
              <p className="line-clamp-2 text-sm text-mist">{p.problem}</p>
              <div className="mt-auto flex flex-wrap gap-2">{p.tools.slice(0, 4).map((t) => <Chip key={t}>{t}</Chip>)}</div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>{open && <Modal p={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </Section>
  )
}
