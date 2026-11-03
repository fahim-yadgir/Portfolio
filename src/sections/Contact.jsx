
import { useState } from 'react'
import {
  Mail,
  Github,
  Linkedin,
  Download,
  MessageCircle
} from 'lucide-react'

import { Section, Reveal } from '../components/ui.jsx'
import { profile } from '../data/portfolio.js'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  function onSubmit(e) {
    e.preventDefault()

    const data = new FormData(e.target)

    if (!profile.whatsapp) {
      setStatus('error')
      return
    }

    const name = data.get('name')
    const email = data.get('email')
    const message = data.get('message')

    const whatsappMessage = `Hello Fahim!

Name: ${name}
Email: ${email}

Message:
${message}`

    const whatsappURL =
      `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`

    window.open(whatsappURL, '_blank', 'noopener,noreferrer')

    setStatus('opened')
    e.target.reset()
  }

  const field =
    'w-full rounded-lg border border-line bg-ink px-4 py-3 text-white placeholder:text-mist/60 focus:border-teal focus:outline-none'

  return (
    <Section
      id="contact"
      title="Let's talk about your data"
      intro="Open to data analyst roles and freelance projects."
    >
      <div className="grid gap-8 lg:grid-cols-2">

        {/* Contact Links */}
        <Reveal className="space-y-4">

          {[
            [Mail, profile.email, `mailto:${profile.email}`],
            [MessageCircle, 'WhatsApp', profile.whatsapp
              ? `https://wa.me/${profile.whatsapp}`
              : null],
            [Linkedin, 'LinkedIn', profile.linkedin],
            [Github, 'GitHub', profile.github],
            [Download, 'Download resume', profile.resume]
          ]
            .filter(([, , href]) => href)
            .map(([Icon, label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="card flex items-center gap-4"
              >
                <Icon className="text-amber" />
                {label}
              </a>
            ))}

        </Reveal>

        {/* Contact Form */}
        <Reveal>
          <form
            onSubmit={onSubmit}
            className="card space-y-4"
          >

            <input
              name="name"
              required
              placeholder="Your name"
              aria-label="Your name"
              className={field}
            />

            <input
              name="email"
              type="email"
              required
              placeholder="Your email"
              aria-label="Your email"
              className={field}
            />

            <textarea
              name="message"
              required
              rows="5"
              placeholder="Your message"
              aria-label="Your message"
              className={field}
            />

            <button
              type="submit"
              className="btn-primary w-full justify-center"
            >
              <MessageCircle size={18} />
              Send Message on WhatsApp
            </button>

            {status === 'opened' && (
              <p className="text-teal" role="status">
                WhatsApp opened! Please press Send to deliver your message.
              </p>
            )}

            {status === 'error' && (
              <p className="text-red-400" role="alert">
                Please add your WhatsApp number in portfolio.js.
              </p>
            )}

          </form>
        </Reveal>

      </div>
    </Section>
  )
}
