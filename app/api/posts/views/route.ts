import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function POST(request: Request) {
  try {
    const { pageId } = await request.json();
    console.log('Atualizando views para pageId:', pageId);

    if (!pageId) {
      return NextResponse.json(
        { error: 'Page ID é obrigatório' },
        { status: 400 }
      );
    }

    // Busca a página atual para pegar o número de views
    const page = await notion.pages.retrieve({ page_id: pageId });
    console.log('Página encontrada:', {
      id: page.id,
      properties: page.properties,
    });

    const currentViews = page.properties.views?.number || 0;
    console.log('Views atuais:', currentViews);

    // Atualiza o contador de views
    const updatedPage = await notion.pages.update({
      page_id: pageId,
      properties: {
        views: {
          number: currentViews + 1,
        },
      },
    });

    console.log('Página atualizada:', {
      id: updatedPage.id,
      newViews: updatedPage.properties.views?.number,
    });

    return NextResponse.json({ 
      success: true,
      previousViews: currentViews,
      newViews: currentViews + 1
    });
  } catch (error) {
    console.error('Erro ao atualizar views:', error);
    return NextResponse.json(
      { error: 'Erro ao atualizar views', details: error },
      { status: 500 }
    );
  }
}
