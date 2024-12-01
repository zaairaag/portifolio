import { Post } from '@/lib/types';
import { notion } from '@/lib/notion';
import { cache } from 'react';

export const getAllPosts = cache(async (): Promise<Post[]> => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
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

    return response.results.map((page: any) => ({
      id: page.id,
      slug: page.properties.Slug.rich_text[0]?.plain_text || '',
      title: page.properties.Title.title[0]?.plain_text || '',
      description: page.properties.Description.rich_text[0]?.plain_text || '',
      date: page.properties.Date.date?.start || '',
      featuredImage: page.properties.FeaturedImage.files[0]?.file?.url || page.properties.FeaturedImage.files[0]?.external?.url || '',
      tags: page.properties.Tags.multi_select.map((tag: any) => tag.name),
      views: page.properties.Views?.number || 0,
    }));
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
});
