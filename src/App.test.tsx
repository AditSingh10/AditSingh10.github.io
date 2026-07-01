import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('portfolio shell', () => {
  it('renders a compact primary navigation for the core sections', () => {
    render(<App />)

    const nav = screen.getByRole('navigation', { name: /primary/i })

    expect(within(nav).getByRole('link', { name: 'Projects' })).toHaveAttribute(
      'href',
      '#projects',
    )
    expect(
      within(nav).getByRole('link', { name: 'Experience' }),
    ).toHaveAttribute('href', '#experience')
    expect(within(nav).getByRole('link', { name: 'Skills' })).toHaveAttribute(
      'href',
      '#skills',
    )
    expect(within(nav).getByRole('link', { name: 'About' })).toHaveAttribute(
      'href',
      '#about',
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
      screen.getByRole('heading', { level: 2, name: 'Projects' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Experience' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Skills' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'About' }),
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
    expect(screen.getAllByText(/UW-Madison/i).length).toBeGreaterThan(0)
    screen.getAllByRole('link', { name: /email/i }).forEach((link) => {
      expect(link).toHaveAttribute('href', 'mailto:aditksingh@gmail.com')
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

    const projectHeadings = screen
      .getAllByRole('heading', { level: 3 })
      .slice(0, 4)
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
})
