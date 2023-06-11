import profilejson from '../../data/profile.json'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ProfileDataType } from '../../types/types'

export const profile = profilejson as ProfileDataType

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ results: profile })
}
