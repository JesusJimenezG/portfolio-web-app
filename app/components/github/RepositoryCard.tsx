import { RepositoryDataType } from '../../../types'

export const RepositoryCard = ({ repo }: { repo: RepositoryDataType }) => {
  return (
    <div className="bg-gray-700 w-80 rounded-md items-center overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{repo.name}</div>
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
    </div>
  )
}
