import { Home } from './components/Home'
import { profile } from '../../pages/api/profile'

export default function HomePage() {
  return <Home profile={profile} />
}
