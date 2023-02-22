import { RepositoryDataType } from '../../../types/types'

export const RepositoryCard = ({ repo }: { repo: RepositoryDataType }) => {
  return (
    <div className="w-80 rounded-xl font-[consolas] border-2 border-white hover:border-[#f29] px-2 py-2 items-center overflow-hidden shadow-lg m-4">
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {repo.fork ? <i className="fa fa-code-fork mr-2" /> : ''}
            {repo.name}
          </div>
          <p className="text-white text-base">{repo.description}</p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            <i className="fas fa-star mr-2" />
            {repo.stargazers_count}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            <i className="fas fa-code-branch mr-2" />
            {repo.forks_count}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            <i className="fas fa-eye mr-2" />
            {repo.watchers_count}
          </span>
        </div>
      </a>
    </div>
  )
}
