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
interface LanguageDataType {
  language: string
  level: string
}
export interface ProfileDataType {
  title: string
  name: string
  description: string
  about: string
  skills: SkillsDataType
}
export interface RepositoryDataType {
  name: string
  description: string
  stargazers_count: number
  forks_count: number
  watchers_count: number
}
