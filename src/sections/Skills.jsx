import { motion } from 'framer-motion'
import { Section, Reveal, Chip } from '../components/ui.jsx'
import { skills, skillTags } from '../data/portfolio.js'

export default function Skills() {
  return (
    <Section id="skills" title="Data analyst skills" intro="The tools I use to move from raw data to a decision.">
      <div className="grid gap-5 md:grid-cols-3">
        {skills.map((g, gi) => (
          <Reveal key={g.group} delay={gi * 0.1}>
            <div className="card h-full">
              <h3 className="mb-5 text-lg font-semibold">{g.group}</h3>
              <ul className="space-y-4">
                {g.items.map(([name, level]) => (
                  <li key={name}>
                    <div className="mb-1 flex justify-between text-sm"><span>{name}</span><span className="text-mist">{level}%</span></div>
                    <div className="h-1.5 overflow-hidden rounded bg-ink">
                      <motion.div className="h-full rounded bg-gradient-to-r from-teal to-amber" initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }} viewport={{ once: true }} transition={{ duration: 1.1, ease: 'easeOut' }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-6 flex flex-wrap gap-2">{skillTags.map((t) => <Chip key={t}>{t}</Chip>)}</Reveal>
    </Section>
  )
}
