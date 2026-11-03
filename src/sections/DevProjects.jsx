import { Github, ExternalLink } from 'lucide-react'
import { Section, Reveal, Chip } from '../components/ui.jsx'
import { devProjects } from '../data/portfolio.js'

export default function DevProjects() {
  return (
    <Section id="dev-projects" title="Development projects">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {devProjects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <div className="card flex h-full flex-col gap-3">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-sm text-mist">{p.desc}</p>
              <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
                {p.stack.map((s) => <Chip key={s}>{s}</Chip>)}
                <span className="ml-auto flex gap-3 text-mist">
                  {p.github && <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white"><Github size={18} /></a>}
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" aria-label="Live demo" className="hover:text-white"><ExternalLink size={18} /></a>}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
