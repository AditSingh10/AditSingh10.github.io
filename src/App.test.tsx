import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('portfolio shell', () => {
  it('renders a compact primary navigation for the core sections', () => {
    render(<App />)

    const nav = screen.getByRole('navigation', { name: /primary/i })
    const navLinks = within(nav).getAllByRole('link').map((link) => link.textContent)

    expect(navLinks).toEqual([
      'Experience',
      'Projects',
      'Skills',
      'About',
      'Interests',
      'Contact',
    ])
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
    expect(within(nav).getByRole('link', { name: 'About' })).toHaveAttribute(
      'href',
      '#about',
    )
    expect(within(nav).getByRole('link', { name: 'Interests' })).toHaveAttribute(
      'href',
      '#interests',
    )
    expect(within(nav).getByRole('link', { name: 'Contact' })).toHaveAttribute(
      'href',
      '#contact',
    )
  })

  it('uses semantic page landmarks and portfolio section headings', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(
      screen.getAllByRole('heading', { level: 2 }).map((heading) => heading.textContent),
    ).toEqual(['Experience', 'Projects', 'Skills', 'About', 'Interests', 'Contact'])
    expect(
      screen.getByRole('heading', { level: 2, name: 'Skills' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'About' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Interests' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Contact' }),
    ).toBeInTheDocument()
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
    expect(screen.getByText('Computer Science, Math at UW Madison.')).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /Adit Singh headshot/i }),
    ).toHaveAttribute('src', '/headshot.jpg')
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
    expect(screen.getAllByText(/resume available on request/i)).not.toHaveLength(0)
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
    expect(within(experienceSection).getByText(/CLUSTER NODES\/SLOTS/i)).toBeInTheDocument()

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
      within(experienceSection).getByText(/public school students/i),
    ).toBeInTheDocument()
  })

  it('renders personal interests without turning them into project content', () => {
    render(<App />)

    const interestsSection = screen.getByRole('region', { name: 'Interests' })

    ;[
      'Basketball',
      'Pickleball',
      'Gaming',
      'Horror movies',
      'Robotics',
      'Animals',
      'The environment',
      'Space',
      'Creative AI outside coding',
      'Volunteering',
    ].forEach((interest) => {
      expect(within(interestsSection).getByText(interest)).toBeInTheDocument()
    })
  })
})
