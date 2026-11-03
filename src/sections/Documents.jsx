import { FileText, Eye, Download } from 'lucide-react'
import { Section, Reveal } from '../components/ui.jsx'
import { documents } from '../data/portfolio.js'

export default function Documents() {
  return (
    <Section id="documents" title="Documents" intro="View or download my resume, certificates and academic records.">
      <div className="grid gap-4 sm:grid-cols-2">
        {documents.map((d, i) => (
          <Reveal key={d.name} delay={i * 0.06}>
            <div className="card flex items-center gap-4">
              <FileText className="shrink-0 text-amber" size={32} />
              <div className="min-w-0 flex-1">
                <div className="truncate font-medium text-white">{d.name}</div>
                <div className="text-sm text-mist">{d.type}</div>
              </div>
              <a href={d.file} target="_blank" rel="noreferrer" aria-label={`View ${d.name}`} className="btn-ghost !px-3 !py-2"><Eye size={18} /></a>
              <a href={d.file} download aria-label={`Download ${d.name}`} className="btn-primary !px-3 !py-2"><Download size={18} /></a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}