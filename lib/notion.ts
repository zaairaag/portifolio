import { Client } from '@notionhq/client';
import { cache } from 'react';
import { Post } from './types';
import { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';

// Inicializa o cliente Notion apenas se as variáveis de ambiente estiverem disponíveis
const notionClient = process.env.NOTION_TOKEN && process.env.NOTION_DATABASE_ID
  ? new Client({ auth: process.env.NOTION_TOKEN })
  : null;

// Cache dos posts por 1 hora
export const getDatabase = cache(async (): Promise<Post[]> => {
  if (!notionClient || !process.env.NOTION_DATABASE_ID) {
    console.warn('Variáveis de ambiente do Notion não configuradas');
    return [];
  }

  try {    
    console.log('\n=== Iniciando busca de posts ===');
    
    const response = await notionClient.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      sorts: [
        {
          property: "date",
          direction: "descending",
        },
      ],
      filter: {
        property: "status",
        status: {
          equals: "Published",
        },
      },
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

    return response.results
      .filter((page) => 'properties' in page)
      .map((page) => {
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
        } as Post;
      });
  } catch (error) {
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
    return [];
  }
});

// Cache da página por 1 hora
export const getPage = cache(async (pageId: string): Promise<GetPageResponse> => {
  if (!notionClient) {
    console.warn('Cliente Notion não inicializado');
    return null;
  }

  try {
    const page = await notionClient.pages.retrieve({ page_id: pageId });
    return page;
  } catch (error) {
    console.error('Erro ao buscar página:', error);
    return null;
  }
});

// Cache dos blocos por 1 hora
export const getBlocks = cache(async (blockId: string) => {
  if (!notionClient) {
    console.warn('Cliente Notion não inicializado');
    return null;
  }

  const blocks = [];
  let cursor;
  
  try {
    do {
      const { results, next_cursor }: any = await notionClient.blocks.children.list({
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
    return null;
  }
});

// Função para buscar página e blocos em paralelo
export async function getPostContent(pageId: string) {
  if (!notionClient) {
    console.warn('Cliente Notion não inicializado');
    return null;
  }

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
    return null;
  }
}
