import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  )
}

export function Section({ id, title, intro, children, wide = false }) {
  return (
    <section id={id} className="px-5 py-20 sm:py-28">
      <div className={`mx-auto ${wide ? 'max-w-7xl' : 'max-w-6xl'}`}>
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-5xl">{title}</h2>
          {intro && <p className="mt-3 max-w-2xl text-mist">{intro}</p>}
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}

export function Counter({ to, decimals = 0, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.6, ease: 'easeOut', onUpdate: (x) => setV(x) })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>{v.toFixed(decimals)}{suffix}</span>
}

export const Chip = ({ children }) => <span className="chip">{children}</span>
