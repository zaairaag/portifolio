import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Verifica se as variáveis de ambiente estão disponíveis
    const envVars = {
      hasToken: !!process.env.NOTION_TOKEN,
      hasDbId: !!process.env.NOTION_DATABASE_ID,
      dbId: process.env.NOTION_DATABASE_ID
    };

    res.status(200).json(envVars);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
