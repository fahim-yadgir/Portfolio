import { Trophy } from 'lucide-react'
import { Section, Reveal } from '../components/ui.jsx'
import { achievements } from '../data/portfolio.js'

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements and hackathons">
      <div className="grid gap-4 sm:grid-cols-3">
        {achievements.map((a, i) => (
          <Reveal key={a} delay={i * 0.08}><div className="card flex h-full gap-3"><Trophy className="shrink-0 text-amber" /><p>{a}</p></div></Reveal>
        ))}
      </div>
    </Section>
  )
}
