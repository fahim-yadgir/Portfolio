import { Award } from 'lucide-react'
import { Section, Reveal } from '../components/ui.jsx'
import { certifications } from '../data/portfolio.js'

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.06}>
            <a href={c.link || undefined} target="_blank" rel="noreferrer" className="card flex h-full items-center gap-4">
              <Award className="shrink-0 text-amber" />
              <div><div className="font-medium text-white">{c.name}</div><div className="text-sm text-mist">{c.issuer}</div></div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
