import type { ReactNode } from 'react'

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

type SectionProps = {
  id: string
  title: string
  note: string
  children: ReactNode
}

function Section({ id, title, note, children }: SectionProps) {
  return (
    <section
      id={id}
      className="grid scroll-mt-28 grid-cols-1 gap-8 border-t border-line py-16 md:grid-cols-[0.55fr_1.45fr] md:gap-14 md:py-24"
    >
      <div>
        <p className="mb-3 text-xs font-medium uppercase text-muted">{note}</p>
        <h2 className="text-2xl font-medium text-ink md:text-3xl">{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-20 border-b border-line bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-5 py-4 sm:px-8">
          <a
            href="#top"
            aria-label="Adit Singh home"
            className="flex h-9 w-9 items-center justify-center border border-ink text-sm font-medium transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            AS
          </a>
          <nav
            aria-label="Primary navigation"
            className="flex flex-wrap justify-end gap-x-5 gap-y-2 text-sm text-muted"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-5 sm:px-8">
        <section className="grid min-h-[68svh] grid-cols-1 content-end gap-10 py-20 md:grid-cols-[0.72fr_1.28fr] md:py-28">
          <div className="hidden border-l border-line md:block" aria-hidden="true" />
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-medium text-accent">
              Software engineering internship search
            </p>
            <h1 className="text-5xl font-medium leading-[1.05] text-ink sm:text-6xl md:text-7xl">
              Adit Singh
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-soft">
              Computer Science and Mathematics student building backend,
              systems, and applied ML projects.
            </p>
          </div>
        </section>

        <Section id="projects" title="Projects" note="Selected work">
          <div className="text-soft">Project details will be listed here.</div>
        </Section>

        <Section id="experience" title="Experience" note="Recent roles">
          <div className="text-soft">Internship and research work will be listed here.</div>
        </Section>

        <Section id="skills" title="Skills" note="Technical stack">
          <div className="text-soft">Skill groups will be listed here.</div>
        </Section>

        <Section id="about" title="About" note="Background">
          <div className="text-soft">A short background paragraph will be listed here.</div>
        </Section>

        <Section id="contact" title="Contact" note="Get in touch">
          <div className="text-soft">Contact links will be listed here.</div>
        </Section>
      </main>
    </div>
  )
}

export default App
