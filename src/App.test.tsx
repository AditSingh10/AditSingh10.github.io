import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('portfolio shell', () => {
  it('renders a compact primary navigation for the core sections', () => {
    render(<App />)

    const nav = screen.getByRole('navigation', { name: /primary/i })
    const navLinks = within(nav).getAllByRole('link').map((link) => link.textContent)

    expect(navLinks).toEqual([
      'About',
      'Experience',
      'Projects',
      'Skills',
      'Contact',
    ])
    expect(within(nav).getByRole('link', { name: 'About' })).toHaveAttribute(
      'href',
      '#about',
    )
    expect(
      within(nav).getByRole('link', { name: 'Experience' }),
    ).toHaveAttribute('href', '#experience')
    expect(within(nav).getByRole('link', { name: 'Projects' })).toHaveAttribute(
      'href',
      '#projects',
    )
    expect(within(nav).getByRole('link', { name: 'Skills' })).toHaveAttribute(
      'href',
      '#skills',
    )
    expect(within(nav).getByRole('link', { name: 'Contact' })).toHaveAttribute(
      'href',
      '#contact',
    )
  })

  it('uses semantic page landmarks and portfolio section headings', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main').className).toContain('max-w-[84rem]')
    expect(screen.getByRole('region', { name: 'Experience' }).className).toContain(
      'lg:grid-cols-[0.24fr_1.76fr]',
    )
    expect(
      screen.getAllByRole('heading', { level: 2 }).map((heading) => heading.textContent),
    ).toEqual(['About', 'Experience', 'Projects', 'Skills', 'Contact'])
    expect(
      screen.getByRole('heading', { level: 2, name: 'About' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Skills' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Contact' }),
    ).toBeInTheDocument()
  })

  it('uses dark green accents as quiet section and row markers', () => {
    render(<App />)

    ;[
      'Background',
      'Recent roles',
      'Selected work',
      'Technical stack',
      'Get in touch',
    ].forEach((note) => {
      expect(screen.getByText(note)).toHaveClass('text-accent')
    })

    screen.getAllByRole('heading', { level: 2 }).forEach((heading) => {
      expect(heading.className).toContain('border-accent/40')
    })

    expect(screen.getByText('01')).toHaveClass('text-accent')
    expect(screen.getByText(/Refactored Zap logging/i).className).toContain(
      'border-accent/30',
    )
    expect(screen.getByText('Basketball').className).toContain('border-accent/30')
  })

  it('removes generated starter template content', () => {
    render(<App />)

    expect(screen.queryByText(/get started/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/count is/i)).not.toBeInTheDocument()
  })

  it('renders resume-backed hero and contact links without a public resume download', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Adit Singh' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Software Engineer')).toBeInTheDocument()
    const summary = screen.getByText(
      'Professional experience in low-latency systems, infrastructure, and applied ML.',
    )
    expect(summary).toBeInTheDocument()
    expect(summary).toHaveClass('max-w-3xl')
    expect(screen.getByText('Computer Science, Math at UW Madison.')).toBeInTheDocument()
    const headshot = screen.getByRole('img', { name: /Adit Singh headshot/i })
    expect(headshot).toHaveAttribute('src', '/headshot.jpg')
    expect(headshot).toHaveClass('rounded-full')
    expect(headshot).toHaveClass('md:h-64')
    const name = screen.getByRole('heading', { level: 1, name: 'Adit Singh' })
    expect(
      headshot.compareDocumentPosition(name) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    screen.getAllByRole('link', { name: /email/i }).forEach((link) => {
      expect(link).toHaveAttribute('href', 'mailto:singh.adit6@gmail.com')
    })
    screen.getAllByRole('link', { name: /linkedin/i }).forEach((link) => {
      expect(link).toHaveAttribute(
        'href',
        'https://www.linkedin.com/in/adit-singh-b5188b273/',
      )
    })
    screen.getAllByRole('link', { name: 'GitHub' }).forEach((link) => {
      expect(link).toHaveAttribute('href', 'https://github.com/AditSingh10')
    })
    expect(screen.queryByText(/resume available on request/i)).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /resume/i })).not.toBeInTheDocument()
  })

  it('renders strongest projects first with accurate links', () => {
    render(<App />)

    const projectsSection = screen.getByRole('region', { name: 'Projects' })
    const projectHeadings = within(projectsSection)
      .getAllByRole('heading', { level: 3 })
      .map((heading) => heading.textContent)

    expect(projectHeadings).toEqual([
      'AlphaStream',
      'Live Blockchain Transaction Risk Scorer',
      'Qualcomm Edge AI Hackathon',
      'Nike Industry Project',
    ])
    expect(
      screen.getByRole('link', { name: /AlphaStream GitHub/i }),
    ).toHaveAttribute('href', 'https://github.com/AditSingh10/AlphaStream')
    expect(
      screen.getByRole('link', {
        name: /Live Blockchain Transaction Risk Scorer GitHub/i,
      }),
    ).toHaveAttribute(
      'href',
      'https://github.com/AditSingh10/Blockchain-Transaction-Risk-Scorer',
    )
    expect(
      screen.getByRole('link', { name: /Qualcomm Edge AI Hackathon GitHub/i }),
    ).toHaveAttribute('href', 'https://github.com/pranav-singh1/clearcomms')
  })

  it('renders the added research and open-source experiences', () => {
    render(<App />)

    const experienceSection = screen.getByRole('region', { name: 'Experience' })

    expect(
      within(experienceSection).getByText('Open Source Contributor'),
    ).toBeInTheDocument()
    expect(
      within(experienceSection).getByRole('link', { name: /PR #15399/i }),
    ).toHaveAttribute('href', 'https://github.com/redis/redis/pull/15399')
    expect(
      within(experienceSection).queryAllByText(/CLUSTER NODES\/SLOTS/i),
    ).toHaveLength(0)
    expect(
      within(experienceSection).getByText(
        /cluster tests 09, 15, 16, 18, 19, 25, 26, and 29/i,
      ),
    ).toBeInTheDocument()
    expect(within(experienceSection).getByText(/review is in progress/i)).toBeInTheDocument()

    expect(
      within(experienceSection).getByText('Software Development Researcher'),
    ).toBeInTheDocument()
    expect(
      within(experienceSection).getByText(
        /Santa Clara University School of Engineering/i,
      ),
    ).toBeInTheDocument()
    expect(within(experienceSection).getByText(/WasteGenie/i)).toBeInTheDocument()
    expect(within(experienceSection).getByText(/80%/i)).toBeInTheDocument()
    expect(
      within(experienceSection).getByText(/student engagement data/i),
    ).toBeInTheDocument()
    expect(
      within(experienceSection).getAllByText(/clinical trial user engagement/i),
    ).toHaveLength(1)
  })

  it('renders personal interests inside the combined about section', () => {
    render(<App />)

    const aboutSection = screen.getByRole('region', { name: 'About' })

    expect(
      within(aboutSection).getByText(
        'I am a Computer Science and Math student at UW Madison. My work has mostly been in backend systems, real-time data pipelines, and ML infrastructure. Some of my interests outside of work include:',
      ),
    ).toBeInTheDocument()

    ;[
      'Basketball',
      'Pickleball',
      'Gaming',
      'Horror movies',
      'Robotics',
      'Animals',
      'Space and Nature',
      'Volunteering',
    ].forEach((interest) => {
      expect(within(aboutSection).getByText(interest)).toBeInTheDocument()
    })
    expect(within(aboutSection).queryByText('The Environment')).not.toBeInTheDocument()
    expect(screen.queryByRole('region', { name: 'Interests' })).not.toBeInTheDocument()
    expect(
      screen.queryByText(['Creative AI', 'outside coding'].join(' ')),
    ).not.toBeInTheDocument()
  })
})
