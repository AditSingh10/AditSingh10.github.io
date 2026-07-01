import type { ReactNode } from 'react'
import {
  about,
  contact,
  experiences,
  hero,
  interests,
  projects,
  skillGroups,
  type Link,
} from './data/portfolio'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
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
      className="grid scroll-mt-28 grid-cols-1 gap-8 border-t border-line py-16 md:grid-cols-[0.34fr_1.66fr] md:gap-12 md:py-24 lg:grid-cols-[0.24fr_1.76fr]"
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

function LinkRow({
  links,
  resumeUrl,
}: {
  links: Link[]
  resumeUrl: string | null
}) {
  return (
    <div className="flex flex-wrap gap-4">
      {links.map((link) => (
        <ExternalLink key={link.href} href={link.href}>
          {link.label}
        </ExternalLink>
      ))}
      {resumeUrl ? (
        <ExternalLink href={resumeUrl}>Resume</ExternalLink>
      ) : null}
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

function InterestList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2" aria-label="Personal interests">
      {items.map((item) => (
        <li
          key={item}
          className="border-l border-line px-4 py-2 text-sm font-medium text-soft transition-colors hover:border-accent hover:text-ink"
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
        <div className="mx-auto flex max-w-[84rem] flex-col items-start gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:px-8">
          <a
            href="#top"
            aria-label="Adit Singh home"
            className="flex h-9 w-9 items-center justify-center border border-ink text-sm font-medium transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            AS
          </a>
          <nav
            aria-label="Primary navigation"
            className="flex w-full max-w-full flex-wrap gap-x-3 gap-y-2 text-[13px] text-muted sm:w-auto sm:justify-end sm:gap-x-5 sm:text-sm"
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

      <main id="top" className="mx-auto max-w-[84rem] px-5 sm:px-8">
        <section className="grid min-h-[520px] grid-cols-1 content-end gap-9 py-16 sm:min-h-[560px] sm:py-20 md:min-h-[620px] md:grid-cols-[0.62fr_1.38fr] md:items-end md:gap-14 md:py-24">
          <div className="flex md:justify-end">
            <img
              src="/headshot.jpg"
              alt="Adit Singh headshot"
              className="h-44 w-44 shrink-0 rounded-full border border-line object-cover grayscale-[12%] sm:h-52 sm:w-52 md:h-64 md:w-64"
            />
          </div>
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-medium text-accent">{hero.role}</p>
            <h1 className="text-5xl font-medium leading-[1.05] text-ink sm:text-6xl md:text-7xl">
              {hero.name}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-soft sm:text-xl">
              {hero.summary}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
              {hero.education}
            </p>
            <div className="mt-9">
              <LinkRow links={contactLinks} resumeUrl={contact.resumeUrl} />
            </div>
          </div>
        </section>

        <Section id="about" title="About" note="Background">
          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-soft">{about}</p>
            <div className="mt-6">
              <InterestList items={interests} />
            </div>
          </div>
        </Section>

        <Section id="experience" title="Experience" note="Recent roles">
          <div className="space-y-9">
            {experiences.map((experience) => (
              <article
                key={`${experience.organization}-${experience.dates}`}
                className="border-t border-line pt-7 first:border-t-0 first:pt-0"
              >
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
                {experience.links ? (
                  <div className="mt-4 flex flex-wrap gap-4">
                    {experience.links.map((link) => (
                      <ExternalLink key={link.href} href={link.href}>
                        {link.label}
                      </ExternalLink>
                    ))}
                  </div>
                ) : null}
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

        <Section id="projects" title="Projects" note="Selected work">
          <div className="space-y-10">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="border-t border-line pt-8 first:border-t-0 first:pt-0"
              >
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

        <Section id="contact" title="Contact" note="Get in touch">
          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-soft">
              Reach out about software engineering opportunities, systems work,
              or applied ML projects.
            </p>
            <div className="mt-7">
              <LinkRow links={contactLinks} resumeUrl={contact.resumeUrl} />
            </div>
          </div>
        </Section>
      </main>
    </div>
  )
}

export default App
