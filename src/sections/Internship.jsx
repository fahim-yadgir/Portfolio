import { Section, Reveal, Chip } from '../components/ui.jsx'
import { internship as i } from '../data/portfolio.js'

export default function Internship() {
  return (
    <Section id="internship" title="Data analyst internship">
      <Reveal>
        <div className="card grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">{i.title}</h3>
            <p className="text-amber">{i.org}</p>
            <p className="mt-4 text-slate-300">{i.worked}</p>
            <div className="mt-5 flex flex-wrap gap-2">{i.skills.map((s) => <Chip key={s}>{s}</Chip>)}</div>
          </div>
          <div>
            <h4 className="mb-3 font-display text-amber">Key tasks and results</h4>
            <ol className="space-y-3 border-l border-line pl-5">
              {i.tasks.map((t) => <li key={t} className="relative text-slate-300 before:absolute before:-left-[26px] before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-teal">{t}</li>)}
            </ol>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
