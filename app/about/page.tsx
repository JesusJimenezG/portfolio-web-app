import { use } from 'react'
import { getProfile } from '../lib/data'
import { hackBold, hackRegular, vcrOsdMono } from '../styles/fonts'
import { Skills } from '../components/home/Skills'

export default function About() {
  const profileResponse = use(getProfile())
  const profile = profileResponse.results

  return (
    <div className="flex flex-col items-center p-16 lg:p-40 text-center lg:text-left">
      <h2 className={`${vcrOsdMono.className} text-2xl font-medium`}>
        About me
      </h2>
      <p
        className={`${hackRegular.className} text-white text-lg text-center font-mono`}
      >
        {profile.about}
      </p>
      <Skills skills={profile.skills} />
    </div>
  )
}
