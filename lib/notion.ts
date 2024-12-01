import { Client } from '@notionhq/client';
import { cache } from 'react';
import { Post } from './types';
import { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';

if (!process.env.NOTION_TOKEN) {
  throw new Error('NOTION_TOKEN não está definido');
}

if (!process.env.NOTION_DATABASE_ID) {
  throw new Error('NOTION_DATABASE_ID não está definido');
}

console.log('Inicializando cliente Notion...');
console.log('Token disponível:', !!process.env.NOTION_TOKEN);
console.log('Database ID:', process.env.NOTION_DATABASE_ID);

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// Cache dos posts por 1 hora
export const getDatabase = cache(async (): Promise<Post[]> => {
  try {    
    console.log('\n=== Iniciando busca de posts ===');
    
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      sorts: [
        {
          property: "date",
          direction: "descending"
        }
      ]
    });

    console.log('\n=== Posts encontrados ===');
    response.results.forEach((page: any) => {
      const props = page.properties;
      const published = props['Published ']?.checkbox;
      console.log(`\nPost: "${props.Title?.title?.[0]?.plain_text || 'Sem título'}"
        - Published: ${published}
        - Data: ${props.date?.date?.start || 'Não definida'}
        - Tags: ${props.Tags?.multi_select?.map((t: any) => t.name).join(', ') || 'Sem tags'}`
      );
    });

    const publishedPosts = response.results.filter((page: any) => {
      const properties = page.properties;
      const published = properties['Published ']?.checkbox;
      const title = properties.Title?.title?.[0]?.plain_text;
      console.log(`Verificando post "${title}": Published = ${published}`);
      return published === true;
    });

    console.log('\n=== Resumo ===');
    console.log(`Total de posts: ${response.results.length}`);
    console.log(`Posts publicados: ${publishedPosts.length}`);

    if (publishedPosts.length > 0) {
      console.log('\n=== Posts que serão exibidos ===');
      publishedPosts.forEach((page: any) => {
        const props = page.properties;
        console.log(`- ${props.Title?.title?.[0]?.plain_text || 'Sem título'}`);
      });
    }

    return publishedPosts.map((page: any) => {
      const properties = page.properties;
      const title = properties.Title?.title?.[0]?.plain_text || 'Sem título';
      const slug = properties.Slug?.rich_text?.[0]?.plain_text || 
        title.toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .trim();

      return {
        id: page.id,
        title,
        description: properties.description?.rich_text?.[0]?.plain_text || '',
        date: properties.date?.date?.start || page.created_time.split('T')[0],
        slug,
        tags: properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
        views: properties.views?.number || 0,
        featuredImage: properties.featuredImage?.url || null,
        last_edited_time: page.last_edited_time
      };
    });

  } catch (error: any) {
    console.error('\n=== Erro ao buscar posts ===');
    console.error('Mensagem:', error.message);
    if (error.code) {
      console.error('Código:', error.code);
    }
    if (error.status) {
      console.error('Status:', error.status);
    }
    if (error.body) {
      console.error('Corpo:', error.body);
    }
    throw error;
  }
});

// Cache da página por 1 hora
export const getPage = cache(async (pageId: string): Promise<GetPageResponse> => {
  try {
    const page = await notion.pages.retrieve({ page_id: pageId });
    return page;
  } catch (error) {
    console.error('Erro ao buscar página:', error);
    throw error;
  }
});

// Cache dos blocos por 1 hora
export const getBlocks = cache(async (blockId: string) => {
  const blocks = [];
  let cursor;
  
  try {
    do {
      const { results, next_cursor }: any = await notion.blocks.children.list({
        block_id: blockId,
        page_size: 100,
        start_cursor: cursor,
      });

      blocks.push(...results);
      cursor = next_cursor;
    } while (cursor);

    return blocks;
  } catch (error) {
    console.error('Erro ao buscar blocos:', error);
    throw error;
  }
});

// Função para buscar página e blocos em paralelo
export async function getPostContent(pageId: string) {
  try {
    const [page, blocks] = await Promise.all([
      getPage(pageId),
      getBlocks(pageId)
    ]);

    return {
      page,
      blocks
    };
  } catch (error) {
    console.error('Erro ao buscar conteúdo do post:', error);
    throw error;
  }
}
