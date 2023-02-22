import type { NextApiRequest, NextApiResponse } from 'next'
import openaijson from '../../app/lib/data/completionDescription.json'
import { OpenAIDataType } from '../../app/lib/types/types'
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
  // Replaced with static data due openai api limit
  // console.log('prompt: ', req.body.prompt)

  // const completion = await openai.createCompletion({
  //   model: 'text-davinci-003',
  //   prompt: req.body.prompt,
  //   temperature: 0.7,
  //   max_tokens: 1024,
  // })
  // res.status(200).json({ result: completion.data })
  // console.log('called api')
  // const randomNumber = await (
  //   await fetch(
  //     `https://us-central1-jesusjimenezg-web-app.cloudfunctions.net/randomNumber?max=${openAIDescriptions.length}`
  //   )
  // ).json()
  // if (!randomNumber) {
  //   res.status(500).json({ error: 'Error getting random number' })
  // }
  // console.log(randomNumber)
  // console.log(openAIDescriptions.length)
  // const style = openAIDescriptions.find((item) =>
  // item.style.toLowerCase().includes('png')
  // )
  const randomNumber = Math.round(Math.random() * openAIDescriptions.length)
  const style = openAIDescriptions[randomNumber]
  res.status(200).json({ results: style })
}
