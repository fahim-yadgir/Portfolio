import { Section, Reveal } from '../components/ui.jsx'
import { aiDev } from '../data/portfolio.js'

export default function AiDev() {
  return (
    <Section id="ai" title="AI-assisted development" intro="I use AI as a power tool: faster builds, quicker debugging, same attention to quality.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {aiDev.map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.06}><div className="card h-full"><h3 className="font-semibold text-white">{t}</h3><p className="mt-2 text-sm text-mist">{d}</p></div></Reveal>
        ))}
      </div>
    </Section>
  )
}
