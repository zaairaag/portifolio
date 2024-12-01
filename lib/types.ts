export interface Post {
  id: string;
  title: string;
  description: string;
  date: string;
  last_edited_time: string;
  slug: string;
  tags: string[];
  views: number;
  featuredImage?: string;
}
