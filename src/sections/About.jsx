import { useState } from 'react'
import { Section, Reveal, Counter } from '../components/ui.jsx'
import { about, profile } from '../data/portfolio.js'

export default function About() {
  const [broken, setBroken] = useState(false)
  return (
    <Section id="about" title="About me">
      <div className="grid items-start gap-10 lg:grid-cols-[280px_1fr]">
        <Reveal>
          {broken ? (
            <div className="flex aspect-square w-full max-w-[280px] items-center justify-center rounded-2xl border border-line bg-panel font-display text-6xl text-amber">
              {profile.name.split(' ').map((n) => n[0]).join('')}
            </div>
          ) : (
            <img src={profile.photo} alt={`Photo of ${profile.name}`} onError={() => setBroken(true)}
              className="aspect-square w-full max-w-[280px] rounded-2xl border border-line object-cover shadow-md" />
          )}
        </Reveal>
        <div className="space-y-8">
          <Reveal className="space-y-4 text-lg leading-relaxed">
            {about.text.map((t) => <p key={t}>{t}</p>)}
          </Reveal>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {about.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="card text-center">
                  <div className="font-display text-3xl font-bold text-amber"><Counter to={s.value} decimals={s.decimals} suffix={s.suffix} /></div>
                  <div className="mt-1 text-sm text-mist">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}