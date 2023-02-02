import { Key } from 'react'
import { SkillsDataType } from '../../types'

export const Skills = ({ skills }: { skills: SkillsDataType }) => {
  return (
    <section title="skills">
      <div className="grid gap-6 justify-start mx-auto">
        <div>
          <h2 className="text-2xl font-medium text-start">🌐Languages</h2>
          <ul className="mt-10 flex flex-wrap justify-start">
            {skills.languages.map(({ language, level }, index) => (
              <li
                key={index}
                className="h-[38px] w-auto overflow-hidden text-center inline-block border border-white hover:border-[#f29] rounded-xl px-2 py-2 text-sm font-medium text-white mx-1 mb-2"
              >
                {`${language}: ${level}`}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-medium text-start">
            💻Programming Languages
          </h2>
          <ul className="mt-10 flex flex-wrap justify-start">
            {skills.programmingLanguages.map((language: string, index: Key) => (
              <li
                key={index}
                className="h-[38px] w-auto overflow-hidden text-center inline-block border border-white hover:border-[#f29] rounded-xl px-2 py-2 text-sm font-medium text-white mx-1 mb-2"
              >
                {language}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-medium text-start">
            🥇Professional Skills
          </h2>
          <ul className="mt-10 flex flex-wrap justify-start">
            {skills.professionalSkills.map((skill: string, index: Key) => (
              <li
                key={index}
                className="h-[38px] w-auto overflow-hidden text-center inline-block border border-white hover:border-[#f29] rounded-xl px-2 py-2 text-sm font-medium text-white mx-1 mb-2"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-medium text-start">
            🎯Non-Professional Skills
          </h2>
          <ul className="mt-10 flex flex-wrap justify-start">
            {skills.nonProfessionalSkills.map((skill: string, index: Key) => (
              <li
                key={index}
                className="h-[38px] w-auto overflow-hidden text-center inline-block border border-white hover:border-[#f29] rounded-xl px-2 py-2 text-sm font-medium text-white mx-1 mb-2"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
