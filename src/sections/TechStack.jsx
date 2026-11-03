import { tools } from '../data/portfolio.js'

export default function TechStack() {
  const row = [...tools, ...tools]
  return (
    <section aria-label="Tools" className="overflow-hidden border-y border-line py-8">
      <div className="flex w-max animate-marquee gap-4">
        {row.map((t, i) => <span key={i} className="whitespace-nowrap rounded-lg border border-line bg-panel px-6 py-3 font-display text-lg text-white">{t}</span>)}
      </div>
    </section>
  )
}
