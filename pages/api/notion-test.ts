import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@notionhq/client';
import { PageObjectResponse, PartialPageObjectResponse, DatabaseObjectResponse, PartialDatabaseObjectResponse } from '@notionhq/client/build/src/api-endpoints';

function isFullPage(page: PageObjectResponse | PartialPageObjectResponse | DatabaseObjectResponse | PartialDatabaseObjectResponse): page is PageObjectResponse {
  return !!(page as PageObjectResponse).properties;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Verifica variáveis de ambiente
    const envCheck = {
      hasToken: !!process.env.NOTION_TOKEN,
      hasDbId: !!process.env.NOTION_DATABASE_ID,
      tokenPrefix: process.env.NOTION_TOKEN?.substring(0, 7),
      dbIdLength: process.env.NOTION_DATABASE_ID?.length
    };

    console.log('Environment check:', envCheck);

    // Tenta inicializar o cliente
    const notion = new Client({
      auth: process.env.NOTION_TOKEN
    });

    // Tenta uma query simples
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!
    });

    const firstResult = response.results[0];

    // Retorna informações úteis
    res.status(200).json({
      env: envCheck,
      success: true,
      resultCount: response.results.length,
      firstResult: firstResult && isFullPage(firstResult) ? {
        id: firstResult.id,
        properties: Object.keys(firstResult.properties)
      } : null
    });

  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: {
        message: error.message,
        code: error.code,
        status: error.status,
        body: error.body
      }
    });
  }
}
