import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function POST(request: Request) {
  try {
    const { pageId } = await request.json();

    if (!pageId) {
      return NextResponse.json(
        { error: 'Page ID é obrigatório' },
        { status: 400 }
      );
    }

    // Busca a página atual para pegar o número de views
    const page = await notion.pages.retrieve({ page_id: pageId }) as PageObjectResponse;
    const viewsProperty = page.properties.views as { type: 'number'; number: number | null };
    const currentViews = viewsProperty?.number || 0;

    // Atualiza o contador de views
    await notion.pages.update({
      page_id: pageId,
      properties: {
        views: {
          number: currentViews + 1,
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao atualizar views:', error);
    return NextResponse.json(
      { error: 'Erro ao atualizar views' },
      { status: 500 }
    );
  }
}
