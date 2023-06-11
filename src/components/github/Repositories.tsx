'use client'
import { useState, useEffect, Key } from 'react'
import { vcrOsdMono } from '../../app/styles/fonts'
import { RepositoryCard } from './RepositoryCard'

export default function Repositories() {
  const [repos, setRepos] = useState([])
  useEffect(() => {
    const getRepos = async () => {
      const data = await fetch(
        'https://api.github.com/users/jesusjimenezg/repos?sort=stars&direction=desc'
      )
      const json = await data.json()
      console.log(json)
      setRepos(json)
    }

    getRepos().catch((err) => console.error(err))
  }, [])
  return (
    <section id="repositories" title="projects">
      <h2
        className={`${vcrOsdMono.className} text-2xl  uppercase tracking-widest`}
      >
        Github Repositories
      </h2>
      <div className="flex flex-wrap justify-center mt-6">
        {repos.map((repo, index: Key) => (
          <RepositoryCard key={index} repo={repo} />
        ))}
      </div>
    </section>
  )
}
