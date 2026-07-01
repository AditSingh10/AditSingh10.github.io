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
})
