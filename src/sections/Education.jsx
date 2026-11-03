import { Section, Reveal, Chip } from '../components/ui.jsx'
import { education } from '../data/portfolio.js'

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="space-y-5 border-l border-line pl-6">
        {education.map((e) => (
          <Reveal key={e.degree}>
            <li className="relative before:absolute before:-left-[31px] before:top-2 before:h-2.5 before:w-2.5 before:rounded-full before:bg-amber">
              <h3 className="text-xl font-semibold">{e.degree}</h3>
              <p className="text-mist">{e.place} · {e.year}</p>
              {e.note && <p className="mt-1 text-amber">{e.note}</p>}
              <div className="mt-3 flex flex-wrap gap-2">{e.courses.map((c) => <Chip key={c}>{c}</Chip>)}</div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
