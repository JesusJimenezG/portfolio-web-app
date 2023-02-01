import { Home } from './components/home/Home'
import { use } from 'react'
import { getOpenAIDescription, getProfile } from './lib/data'
import { getRandomStyle } from '../pages/api/completion'
import { profile } from '../pages/api/profile'

export default function HomePage() {
  // const openAIResponse = use(getOpenAIDescription())
  // const profileResponse = use(getProfile())

  // const _profile = profile
  const openAICompletion = getRandomStyle()

  return <Home openAIDescription={openAICompletion} profile={profile} />
}
