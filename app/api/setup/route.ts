import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function GET() {
  try {
    // Atualiza o banco de dados para adicionar a propriedade views
    const response = await notion.databases.update({
      database_id: process.env.NOTION_DATABASE_ID!,
      properties: {
        views: {
          number: {}
        }
      }
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Propriedade views adicionada com sucesso',
      properties: response.properties
    });
  } catch (error) {
    console.error('Erro ao configurar banco de dados:', error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
