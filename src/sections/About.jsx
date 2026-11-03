import { Section, Reveal, Counter } from '../components/ui.jsx'
import { about } from '../data/portfolio.js'

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal className="space-y-4 text-lg leading-relaxed text-slate-300">
          {about.text.map((t) => <p key={t}>{t}</p>)}
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {about.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="card text-center">
                <div className="font-display text-4xl font-bold text-amber"><Counter to={s.value} decimals={s.decimals} suffix={s.suffix} /></div>
                <div className="mt-1 text-sm text-mist">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
