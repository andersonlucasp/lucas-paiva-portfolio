import { useState } from 'react'

const faqs = [
  {
    q: 'How long does a project take?',
    a: 'Timelines vary by scope. A design system takes 3–6 months; a website redesign typically 4–8 weeks. I always provide a clear timeline at the start of every engagement.',
  },
  {
    q: 'What services do you offer?',
    a: 'I offer Design System creation, UX/UI Design, Design Operations consulting, and Branding. I focus on digital products that need to scale with consistency and speed.',
  },
  {
    q: 'Are you available for freelance work?',
    a: "Yes — I'm open to part-time and freelance engagements. I typically take on 1–2 projects at a time to ensure quality and focus. Book a discovery call to discuss availability.",
  },
  {
    q: 'Do you work with international clients?',
    a: "Absolutely. My process is fully remote and structured for seamless async communication across time zones. I've collaborated with teams across Latin America, Europe, and North America.",
  },
  {
    q: 'How do we start working together?',
    a: "Book a free 30-minute discovery call via the form below or email me directly. I'll align on goals, scope, and next steps before anything is signed.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section className="bg-bg-2 py-24 px-16 reveal">
      <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-6">
        // FAQ
      </p>
      <h2 className="text-[56px] font-bold tracking-tightest uppercase mb-14">KEY QUESTION</h2>

      <div className="max-w-3xl">
        {faqs.map(({ q, a }, i) => (
          <div
            key={i}
            className={`faq-item border-t border-white/10 ${i === faqs.length - 1 ? 'border-b' : ''} ${open === i ? 'open' : ''}`}
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between py-6 text-left"
            >
              <span className="text-base font-medium">{q}</span>
              <svg
                className="faq-arrow w-5 h-5 text-white/40 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className={`faq-body ${open === i ? 'open' : ''}`}>
              <p className="pb-6 text-sm text-white/45 leading-relaxed">{a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
