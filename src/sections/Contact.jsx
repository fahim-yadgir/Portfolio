import { useState } from 'react'
import { Mail, Github, Linkedin, Download } from 'lucide-react'
import { Section, Reveal } from '../components/ui.jsx'
import { profile } from '../data/portfolio.js'

const FORM_ID = import.meta.env.VITE_FORMSPREE_ID

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function onSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    if (!FORM_ID) { // fallback: open the visitor's mail app
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio message from ' + data.get('name'))}&body=${encodeURIComponent(data.get('message'))}`
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      setStatus(res.ok ? 'sent' : 'error')
      if (res.ok) e.target.reset()
    } catch { setStatus('error') }
  }

  const field = 'w-full rounded-lg border border-line bg-ink px-4 py-3 text-white placeholder:text-mist/60 focus:border-teal focus:outline-none'
  return (
    <Section id="contact" title="Let's talk about your data" intro="Open to data analyst roles and freelance projects.">
      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal className="space-y-4">
          {[[Mail, profile.email, `mailto:${profile.email}`], [Linkedin, 'LinkedIn', profile.linkedin], [Github, 'GitHub', profile.github], [Download, 'Download resume', profile.resume]].map(([Icon, label, href]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="card flex items-center gap-4"><Icon className="text-amber" />{label}</a>
          ))}
        </Reveal>
        <Reveal>
          <form onSubmit={onSubmit} className="card space-y-4">
            <input name="name" required placeholder="Your name" aria-label="Your name" className={field} />
            <input name="email" type="email" required placeholder="Your email" aria-label="Your email" className={field} />
            <textarea name="message" required rows="5" placeholder="Your message" aria-label="Your message" className={field} />
            <button className="btn-primary w-full justify-center" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Send message'}</button>
            {status === 'sent' && <p className="text-teal" role="status">Message sent. I will reply soon.</p>}
            {status === 'error' && <p className="text-red-400" role="alert">Message failed to send. Email me directly instead.</p>}
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
