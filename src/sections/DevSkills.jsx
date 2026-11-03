import { motion } from 'framer-motion'
import { Section } from '../components/ui.jsx'
import { devSkills } from '../data/portfolio.js'

export default function DevSkills() {
  return (
    <Section id="dev" title="Software development skills" intro="The engineering side that lets me build the tools around the data.">
      <div className="flex flex-wrap gap-3">
        {devSkills.map((s, i) => (
          <motion.span key={s} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }} className="rounded-full border border-line bg-panel px-5 py-2.5 text-white hover:border-amber">{s}</motion.span>
        ))}
      </div>
    </Section>
  )
}
