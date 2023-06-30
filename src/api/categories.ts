// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const fileContents = await fs.readFile('db/categories.json', 'utf8');
  res.status(200).json(fileContents)
}



