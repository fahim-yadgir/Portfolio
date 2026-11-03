import { Section, Reveal } from '../components/ui.jsx'
import { experience } from '../data/portfolio.js'

export default function Experience() {
  return (
    <Section id="experience" title="Practical experience">
      {experience.map((e) => (
        <Reveal key={e.title}><div className="card"><h3 className="text-xl font-semibold">{e.title}</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-300">{e.points.map((p) => <li key={p}>{p}</li>)}</ul></div></Reveal>
      ))}
    </Section>
  )
}
