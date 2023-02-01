import { Home } from './components/home/Home'
import { use } from 'react'
import { getOpenAIDescription, getProfile } from './lib/data'

export default function HomePage() {
  const openAIResponse = use(getOpenAIDescription())
  const profileResponse = use(getProfile())

  const profile = profileResponse.results
  const openAICompletion = openAIResponse.results

  return <Home openAIDescription={openAICompletion} profile={profile} />
}
