import { vcrOsdMono } from '../styles/fonts'
import { Skills } from '../lib/shared/components/Skills'
import { profile } from '../../pages/api/profile'

export default function About() {
  // const profileResponse = use(getProfile())
  // const profile = profileResponse.results

  return (
    <div className="flex lg:flex-row flex-col lg:px-40 lg:py-20 md:px-10 p-5 lg:text-left">
      <div className="lg:w-3/5 md:w-full sm:w-full text-start px-5">
        {' '}
        <h2 className={`${vcrOsdMono.className} text-2xl font-medium`}>
          About me
        </h2>
        <p
          className={`font-[consolas] tracking-wider text-white text-xl text-start my-8`}
        >
          {profile.about}
        </p>
      </div>
      <div className="lg:w-2/5 md:w-full sm:w-full px-5">
        <Skills skills={profile.skills} />
      </div>
    </div>
  )
}
