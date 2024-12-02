import { Post } from '@/lib/types';
import { notion } from '@/lib/notion';
import { cache } from 'react';
import { PageObjectResponse, PartialPageObjectResponse, DatabaseObjectResponse, PartialDatabaseObjectResponse } from '@notionhq/client/build/src/api-endpoints';

function isFullPage(page: PageObjectResponse | PartialPageObjectResponse | DatabaseObjectResponse | PartialDatabaseObjectResponse): page is PageObjectResponse {
  return !!(page as PageObjectResponse).properties;
}

export const getAllPosts = cache(async (): Promise<Post[]> => {
  if (!notion || !process.env.NOTION_DATABASE_ID) {
    console.warn('Cliente Notion não inicializado ou database ID não configurado');
    return [];
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: 'Status',
        status: {
          equals: 'Published',
        },
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });

    return response.results
      .filter(isFullPage)
      .map((page) => ({
        id: page.id,
        slug: (page.properties.Slug as any).rich_text[0]?.plain_text || '',
        title: (page.properties.Title as any).title[0]?.plain_text || '',
        description: (page.properties.Description as any).rich_text[0]?.plain_text || '',
        date: (page.properties.Date as any).date?.start || '',
        last_edited_time: page.last_edited_time,
        featuredImage: (page.properties.FeaturedImage as any).files[0]?.file?.url || (page.properties.FeaturedImage as any).files[0]?.external?.url || '',
        tags: (page.properties.Tags as any).multi_select.map((tag: any) => tag.name),
        views: (page.properties.Views as any)?.number || 0,
      }));
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
});
