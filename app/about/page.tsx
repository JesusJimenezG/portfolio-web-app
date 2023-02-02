import { lora, mukta, playfairDisplay, vcrOsdMono } from '../styles/fonts'
import { Skills } from '../lib/shared/components/about/Skills'
import { profile } from '../../pages/api/profile'

export default function About() {
  // const profileResponse = use(getProfile())
  // const profile = profileResponse.results

  return (
    <div className="flex lg:flex-row flex-col lg:px-40 lg:py-20 md:px-10 p-5 lg:text-left mt-10">
      <div className="lg:w-3/5 md:w-full sm:w-full text-start px-5">
        <h2
          className={`${vcrOsdMono.className} uppercase tracking-widest text-2xl font-medium hover:text-[#f29]`}
        >
          About me
        </h2>
        <p
          className={`${lora.className} tracking-wider text-white text-xl text-start my-8`}
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
