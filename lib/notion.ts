import { Client } from '@notionhq/client';

if (!process.env.NOTION_TOKEN) {
  throw new Error('NOTION_TOKEN não está definido');
}

if (!process.env.NOTION_DATABASE_ID) {
  throw new Error('NOTION_DATABASE_ID não está definido');
}

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async () => {
  try {
    console.log('Buscando posts do Notion...');
    
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
    });

    return response.results.map((page) => {
      const properties = page.properties;

      // Extrai o título
      const title = properties.Title?.title?.[0]?.plain_text || 'Sem título';

      // Extrai a descrição corretamente
      const description = properties.description?.rich_text?.[0]?.plain_text || '';

      // Usa a data diretamente do Notion sem conversão UTC
      const date = properties.date?.date?.start || page.created_time.split('T')[0];

      // Gera o slug a partir do campo Slug ou do título
      let slug;
      if (properties.Slug?.rich_text?.[0]?.plain_text) {
        // Se tiver um slug definido no Notion, usa ele
        slug = properties.Slug.rich_text[0].plain_text;
      } else {
        // Se não tiver slug, gera a partir do título
        slug = title
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '') // Remove acentos
          .replace(/[^\w\s-]/g, '') // Remove caracteres especiais
          .replace(/\s+/g, '-') // Substitui espaços por hífens
          .replace(/-+/g, '-') // Remove hífens duplicados
          .trim();
      }

      // Extrai a URL da imagem de destaque
      const featuredImage = getFeaturedImageUrl(properties['Featured Image']);

      return {
        id: page.id,
        title,
        description,
        date,
        slug,
        tags: properties.Tags?.multi_select?.map((tag) => tag.name) || [],
        featuredImage,
        views: properties.views?.number || 0
      };
    });
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    throw error;
  }
};

export const getPage = async (pageId: string) => {
  try {
    const page = await notion.pages.retrieve({ page_id: pageId });
    const blocks = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100,
    });

    return {
      page,
      blocks: blocks.results,
    };
  } catch (error) {
    console.error('Erro ao buscar página:', error);
    throw error;
  }
};

export const getBlocks = async (blockId: string) => {
  const blocks = [];
  let cursor;
  
  while (true) {
    const { results, next_cursor } = await notion.blocks.children.list({
      start_cursor: cursor,
      block_id: blockId,
    });
    
    blocks.push(...results);
    
    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }
  
  return blocks;
};

// Função auxiliar para extrair URL da imagem
const getFeaturedImageUrl = (imageProperty: any) => {
  if (!imageProperty) return null;
  
  // Para propriedades do tipo files
  if (imageProperty.files && imageProperty.files[0]) {
    const file = imageProperty.files[0];
    return file.file?.url || file.external?.url || null;
  }
  
  // Para propriedades do tipo url
  if (imageProperty.url) {
    return imageProperty.url;
  }
  
  return null;
};
