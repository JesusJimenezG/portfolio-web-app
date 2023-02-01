import type { NextApiRequest, NextApiResponse } from 'next'
import openaijson from '../../app/data/completionDescription.json'
import { OpenAIDataType } from '../../types'
// import { Configuration, OpenAIApi } from 'openai'

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// })
// const openai = new OpenAIApi(configuration)
const openAIDescriptions = openaijson as Array<OpenAIDataType>

export function getRandomStyle() {
  return openAIDescriptions[
    Math.floor(Math.random() * openAIDescriptions.length)
  ]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('called openai api')
  // Replaced with static data due openai api limit
  // console.log('prompt: ', req.body.prompt)

  // const completion = await openai.createCompletion({
  //   model: 'text-davinci-003',
  //   prompt: req.body.prompt,
  //   temperature: 0.7,
  //   max_tokens: 1024,
  // })
  // res.status(200).json({ result: completion.data })

  const style = getRandomStyle()
  res.status(200).json({ results: style })
}
