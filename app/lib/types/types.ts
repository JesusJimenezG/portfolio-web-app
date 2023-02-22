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
  url: string
  github: string
  technologies: Array<string>
  client_name: string
  contractor: string
  contract_url: string
  start_date: string
  end_date: string
  feedback: string
  stars: number
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
