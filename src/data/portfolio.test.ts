import { describe, expect, it } from 'vitest'
import {
  contact,
  experiences,
  hero,
  interests,
  projects,
  skillGroups,
} from './portfolio'

describe('portfolio data', () => {
  it('uses current public-facing identity and education copy', () => {
    expect(hero.role).toBe('Software Engineer')
    expect(hero.education).toBe('Computer Science, Math at UW Madison.')
    expect(contact.email).toBe('singh.adit6@gmail.com')
  })

  it('keeps project order and public links explicit', () => {
    expect(projects.map((project) => project.title)).toEqual([
      'AlphaStream',
      'Live Blockchain Transaction Risk Scorer',
      'Qualcomm Edge AI Hackathon',
      'Nike Industry Project',
    ])

    expect(projects[0].links).toEqual([
      {
        label: 'GitHub',
        href: 'https://github.com/AditSingh10/AlphaStream',
      },
    ])
    expect(projects[1].links).toEqual([
      {
        label: 'GitHub',
        href: 'https://github.com/AditSingh10/Blockchain-Transaction-Risk-Scorer',
      },
    ])
    expect(projects[2].links).toEqual([])
    expect(projects[3].links).toEqual([])
  })

  it('does not publish the current resume PDF or phone number', () => {
    const serialized = JSON.stringify({
      contact,
      experiences,
      hero,
      interests,
      projects,
      skillGroups,
    })

    expect(contact.resumeUrl).toBeNull()
    const privateFragments = [
      String.fromCharCode(52, 48, 56),
      String.fromCharCode(54, 50, 49),
      String.fromCharCode(49, 57, 50, 54),
      ['Adit', 'Singh', 'Resume.pdf'].join('_'),
    ]

    privateFragments.forEach((fragment) => {
      expect(serialized).not.toContain(fragment)
    })
  })

  it('keeps personal interests explicit and understated', () => {
    expect(interests).toEqual([
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
    ])
  })
})
