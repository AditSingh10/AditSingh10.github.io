import { describe, expect, it } from 'vitest'
import {
  contact,
  experiences,
  hero,
  projects,
  skillGroups,
} from './portfolio'

describe('portfolio data', () => {
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
      projects,
      skillGroups,
    })

    expect(contact.resumeUrl).toBeNull()
    expect(serialized).not.toContain('408')
    expect(serialized).not.toContain('621')
    expect(serialized).not.toContain('1926')
    expect(serialized).not.toContain('Adit_Singh_Resume.pdf')
  })
})
