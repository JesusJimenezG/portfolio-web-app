export interface OpenAIDataType {
  style: string
  text: string
}
export interface SkillsDataType {
  programmingLanguages: Array<string>
  languages: Array<LanguageDataType>
  professionalSkills: Array<string>
  nonProfessionalSkills: Array<string>
}
export interface LanguageDataType {
  language: string
  level: string
}
export interface ProjectDataType {
  title: string
  position: string
  description: string
  image: string
  url: string | null
  github: string | null
  technologies: Array<string>
  client_name: string | null
  contractor: string
  contract_url: string | null
  start_date: string
  end_date: string | null
  feedback: string | null
  stars: number | null
}
export interface ProfileDataType {
  title: string
  name: string
  description: string
  about: string
  skills: SkillsDataType
  projects: Array<ProjectDataType>
}
export interface RepositoryDataType {
  name: string
  description: string
  stargazers_count: number
  forks_count: number
  watchers_count: number
  html_url: string
  fork: boolean
}
