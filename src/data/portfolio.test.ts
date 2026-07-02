import { describe, expect, it } from 'vitest'
import {
  about,
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
    expect(hero.summary).toBe(
      'Professional experience in low-latency systems, infrastructure, and applied ML.',
    )
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
    expect(projects[2].links).toEqual([
      {
        label: 'GitHub',
        href: 'https://github.com/pranav-singh1/clearcomms',
      },
    ])
    expect(projects[3].links).toEqual([])
  })

  it('uses direct project impact language without source-note phrasing', () => {
    const serializedProjects = JSON.stringify(projects)

    expect(serializedProjects).not.toMatch(/resume reports|project reporting|project report/i)
    expect(serializedProjects).toContain(
      'Used 2-hop subgraph inference over the Elliptic dataset to achieve sub-270ms latency and 0.94 weighted F1.',
    )
    expect(serializedProjects).toContain(
      'Built recommendation and fit analytics workflows that reduced trial return rates by 25%.',
    )
  })

  it('includes verified research and open-source experience entries', () => {
    expect(
      experiences.map((experience) => ({
        organization: experience.organization,
        role: experience.role,
        dates: experience.dates,
      })),
    ).toEqual([
      {
        organization: 'Cisco',
        role: 'Software Engineer Intern',
        dates: 'May 2026 - Present',
      },
      {
        organization: 'Redis',
        role: 'Open Source Contributor',
        dates: 'July 2026',
      },
      {
        organization: 'University of Wisconsin - Madison',
        role: 'Machine Learning Researcher',
        dates: 'September 2025 - Present',
      },
      {
        organization: 'Cisco',
        role: 'Software Engineer Intern',
        dates: 'May 2025 - July 2025',
      },
      {
        organization: 'Santa Clara University School of Engineering',
        role: 'Software Development Researcher',
        dates: 'May 2024 - July 2024',
      },
    ])

    const redis = experiences.find(
      (experience) => experience.organization === 'Redis',
    )
    expect(redis?.links).toEqual([
      {
        label: 'PR #15399',
        href: 'https://github.com/redis/redis/pull/15399',
      },
    ])
    expect(redis?.bullets).toHaveLength(1)
    expect(redis?.bullets.join(' ')).toContain(
      'cluster tests 09, 15, 16, 18, 19, 25, 26, and 29',
    )
    expect(redis?.bullets.join(' ')).toContain('unit/cluster')
    expect(redis?.bullets.join(' ')).toContain('review is in progress')

    const currentCisco = experiences.find(
      (experience) =>
        experience.organization === 'Cisco' &&
        experience.dates === 'May 2026 - Present',
    )
    expect(currentCisco?.bullets).toEqual([
      'Developed a Go testing framework for Cisco Intersight notification alerts, enabling automated validation for email notifications serving 860+ enterprise customers.',
      'Refactored Zap logging to cut log volume 68%, prevent goroutine leaks, and reduce peak memory 20%.',
    ])

    const santaClara = experiences.find((experience) =>
      experience.organization.includes('Santa Clara University'),
    )
    expect(santaClara?.tools).toEqual([
      'TypeScript',
      'Next.js',
      'PostgreSQL',
      'Product analytics',
    ])
    expect(santaClara?.bullets).toEqual([
      'Built a TypeScript, Next.js, and PostgreSQL analytics platform for WasteGenie, using student engagement data to improve clinical trial user engagement to 80%.',
    ])
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
    expect(about).toBe(
      'I am a Computer Science and Math student at UW Madison. My work has mostly been in backend systems, real-time data pipelines, and ML infrastructure. Some of my interests outside of work include:',
    )
    expect(interests).toEqual([
      'Basketball',
      'Pickleball',
      'Gaming',
      'Horror movies',
      'Robotics',
      'Animals',
      'Space and Nature',
      'Volunteering',
    ])
  })
})
