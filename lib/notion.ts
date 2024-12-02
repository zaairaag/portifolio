import { Client } from '@notionhq/client';
import { cache } from 'react';
import { Post } from './types';
import { 
  GetPageResponse, 
  GetBlockResponse, 
  PageObjectResponse,
  PartialPageObjectResponse,
  DatabaseObjectResponse,
  PartialDatabaseObjectResponse
} from '@notionhq/client/build/src/api-endpoints';

// Inicializa o cliente Notion apenas se as variáveis de ambiente estiverem disponíveis
const notionClient = process.env.NOTION_TOKEN && process.env.NOTION_DATABASE_ID
  ? new Client({ auth: process.env.NOTION_TOKEN })
  : null;

export const notion = notionClient;

interface PostContent {
  page: PageObjectResponse | null;
  blocks: Array<GetBlockResponse> | null;
}

function isFullPage(
  page: PageObjectResponse | PartialPageObjectResponse | DatabaseObjectResponse | PartialDatabaseObjectResponse
): page is PageObjectResponse {
  return !!(page as PageObjectResponse).properties;
}

// Cache dos posts por 1 hora
export const getDatabase = cache(async (): Promise<Post[]> => {
  if (!notionClient || !process.env.NOTION_DATABASE_ID) {
    console.warn('Variáveis de ambiente do Notion não configuradas');
    return [];
  }

  try {
    const response = await notionClient.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'Published',
          direction: 'descending',
        },
      ],
    });

    return response.results
      .filter(isFullPage)
      .map((page) => {
        const properties = page.properties as any;
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
          date: page.created_time.split('T')[0],
          slug,
          tags: properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
          views: 0,
          featuredImage: properties.featuredImage?.url || null,
          last_edited_time: page.last_edited_time
        } as Post;
      });
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return [];
  }
});

// Função para buscar página
export const getPage = cache(async (pageId: string): Promise<PageObjectResponse | null> => {
  if (!notionClient) {
    console.warn('Cliente Notion não inicializado');
    return null;
  }

  try {
    const response = await notionClient.pages.retrieve({ page_id: pageId });
    if (!isFullPage(response)) {
      return null;
    }
    return response;
  } catch (error) {
    console.error('Erro ao buscar página:', error);
    return null;
  }
});

// Função para buscar blocos
export const getBlocks = cache(async (blockId: string): Promise<Array<GetBlockResponse> | null> => {
  if (!notionClient) {
    console.warn('Cliente Notion não inicializado');
    return null;
  }

  try {
    const blocks = [];
    let cursor;
    while (true) {
      const { results, next_cursor } = await notionClient.blocks.children.list({
        block_id: blockId,
        start_cursor: cursor,
      });
      blocks.push(...results);
      if (!next_cursor) break;
      cursor = next_cursor;
    }
    return blocks;
  } catch (error) {
    console.error('Erro ao buscar blocos:', error);
    return null;
  }
});

// Função para buscar página e blocos em paralelo
export const getPostContent = cache(async (pageId: string): Promise<PostContent> => {
  const [page, blocks] = await Promise.all([
    getPage(pageId),
    getBlocks(pageId),
  ]);

  return { page, blocks };
});
