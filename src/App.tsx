import type { ReactNode } from 'react'
import {
  about,
  contact,
  experiences,
  hero,
  projects,
  skillGroups,
  type Link,
} from './data/portfolio'

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
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="grid scroll-mt-28 grid-cols-1 gap-8 border-t border-line py-16 md:grid-cols-[0.55fr_1.45fr] md:gap-14 md:py-24"
    >
      <div>
        <p className="mb-3 text-xs font-medium uppercase text-muted">{note}</p>
        <h2 id={headingId} className="text-2xl font-medium text-ink md:text-3xl">
          {title}
        </h2>
      </div>
      <div>{children}</div>
    </section>
  )
}

function ExternalLink({
  href,
  children,
  ariaLabel,
}: {
  href: string
  children: ReactNode
  ariaLabel?: string
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="inline-flex items-center gap-2 border-b border-line pb-1 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      {children}
      <span aria-hidden="true">-&gt;</span>
    </a>
  )
}

function LinkRow({ links }: { links: Link[] }) {
  return (
    <div className="flex flex-wrap gap-4">
      {links.map((link) => (
        <ExternalLink key={link.href} href={link.href}>
          {link.label}
        </ExternalLink>
      ))}
      <span className="text-sm text-muted">Resume available on request</span>
    </div>
  )
}

function PillList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technology stack">
      {items.map((item) => (
        <li
          key={item}
          className="border border-line px-2.5 py-1 text-xs font-medium text-soft"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

function App() {
  const contactLinks: Link[] = [
    { label: 'Email', href: `mailto:${contact.email}` },
    { label: 'LinkedIn', href: contact.linkedin },
    { label: 'GitHub', href: contact.github },
  ]

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
            <p className="mb-5 text-sm font-medium text-accent">{hero.role}</p>
            <h1 className="text-5xl font-medium leading-[1.05] text-ink sm:text-6xl md:text-7xl">
              {hero.name}
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-soft">
              {hero.summary}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
              {hero.education}
            </p>
            <div className="mt-9">
              <LinkRow links={contactLinks} />
            </div>
          </div>
        </section>

        <Section id="projects" title="Projects" note="Selected work">
          <div className="space-y-10">
            {projects.map((project, index) => (
              <article key={project.title} className="border-t border-line pt-8 first:border-t-0 first:pt-0">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-xs font-medium uppercase text-muted">
                      0{index + 1}
                    </p>
                    <h3 className="text-2xl font-medium text-ink">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {project.links.map((link) => (
                      <ExternalLink
                        key={link.href}
                        href={link.href}
                        ariaLabel={`${project.title} ${link.label}`}
                      >
                        {link.label}
                      </ExternalLink>
                    ))}
                  </div>
                </div>
                <p className="max-w-3xl text-base leading-7 text-soft">
                  {project.description}
                </p>
                <div className="mt-5">
                  <PillList items={project.stack} />
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-soft">
                  {project.contributions.map((contribution) => (
                    <li key={contribution} className="border-l border-line pl-4">
                      {contribution}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience" note="Recent roles">
          <div className="space-y-9">
            {experiences.map((experience) => (
              <article key={`${experience.organization}-${experience.dates}`} className="border-t border-line pt-7 first:border-t-0 first:pt-0">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-ink">
                      {experience.role}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {experience.organization} / {experience.location}
                    </p>
                  </div>
                  <p className="text-sm text-muted">{experience.dates}</p>
                </div>
                <div className="mt-4">
                  <PillList items={experience.tools} />
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-soft">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet} className="border-l border-line pl-4">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills" note="Technical stack">
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-3 text-sm font-medium text-ink">{group.title}</h3>
                <p className="text-sm leading-7 text-soft">
                  {group.skills.join(' / ')}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="about" title="About" note="Background">
          <p className="max-w-3xl text-lg leading-8 text-soft">{about}</p>
        </Section>

        <Section id="contact" title="Contact" note="Get in touch">
          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-soft">
              I am looking for software engineering internship roles where I can
              work on systems, backend infrastructure, or applied ML products.
            </p>
            <div className="mt-7">
              <LinkRow links={contactLinks} />
            </div>
          </div>
        </Section>
      </main>
    </div>
  )
}

export default App
