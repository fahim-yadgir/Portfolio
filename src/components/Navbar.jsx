import { useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import useActiveSection from '../hooks/useActiveSection.js'
import { nav, profile } from '../data/portfolio.js'

const ids = nav.map((n) => n.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/80 backdrop-blur">
      <motion.div style={{ scaleX }} className="absolute inset-x-0 top-0 h-0.5 origin-left bg-amber" />
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5">
        <a href="#home" className="font-display text-lg font-bold text-white">{profile.name}</a>
        <ul className="hidden gap-1 lg:flex">
          {nav.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className={`rounded-md px-3 py-1.5 text-sm transition ${active === n.id ? 'bg-panel text-amber' : 'text-mist hover:text-white'}`}>{n.label}</a>
            </li>
          ))}
        </ul>
        <button className="lg:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <ul className="grid grid-cols-2 gap-1 border-t border-line bg-ink p-3 lg:hidden">
          {nav.map((n) => <li key={n.id}><a onClick={() => setOpen(false)} href={`#${n.id}`} className="block rounded-md px-3 py-2 text-mist hover:bg-panel">{n.label}</a></li>)}
        </ul>
      )}
    </header>
  )
}
