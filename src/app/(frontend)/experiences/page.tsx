import { getPayload } from 'payload'
import Link from 'next/link'

import config from '@/payload.config'
import type { Experience } from '@/payload-types'
import '../styles.css'

export const metadata = {
  title: 'Experience',
  description: 'Work and education history',
}

export default async function ExperiencesPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs: experiences } = await payload.find({
    collection: 'experiences',
    sort: '-createdAt',
    limit: 100,
    overrideAccess: true,
  })

  return (
    <div className="experiences">
      <header className="experiences__header">
        <Link className="experiences__back" href="/">
          ← Home
        </Link>
        <h1>Experience</h1>
      </header>

      {experiences.length === 0 ? (
        <p className="experiences__empty">No experiences yet.</p>
      ) : (
        <ul className="experiences__list">
          {experiences.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </ul>
      )}
    </div>
  )
}

function ExperienceItem({ experience }: { experience: Experience }) {
  const companyLabel = experience.href ? (
    <a href={experience.href} rel="noopener noreferrer" target="_blank">
      {experience.company}
    </a>
  ) : (
    experience.company
  )

  return (
    <li className="experience-card">
      <div className="experience-card__header">
        <span className="experience-card__icon" aria-hidden>
          {experience.icon}
        </span>
        <div>
          <h2 className="experience-card__title">{experience.title}</h2>
          <p className="experience-card__company">{companyLabel}</p>
        </div>
      </div>

      {(experience.duration || experience.location) && (
        <p className="experience-card__meta">
          {[experience.duration, experience.location].filter(Boolean).join(' · ')}
        </p>
      )}

      {experience.description && (
        <p className="experience-card__description">{experience.description}</p>
      )}

      {experience.tasks && experience.tasks.length > 0 && (
        <ul className="experience-card__tasks">
          {experience.tasks.map((item) => (
            <li key={item.id ?? item.task}>{item.task}</li>
          ))}
        </ul>
      )}

      {experience.badges && experience.badges.length > 0 && (
        <ul className="experience-card__badges">
          {experience.badges.map((item) => (
            <li key={item.id ?? item.badge}>{item.badge}</li>
          ))}
        </ul>
      )}
    </li>
  )
}
