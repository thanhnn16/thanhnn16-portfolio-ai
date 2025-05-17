// Type definitions for blog-related collections

import { Tag } from './tag';

export interface Blog {
  id: string;
  title: string;
  content: string;
  slug: string;
  cover_image?: string | File;
  published: boolean;
  publish_date: string;
  locale: string;
  author?: string | any; // User ID or User object
  translations?: {
    posts_id: string;
  }[];
  tags?: (BlogTag | string)[] | Tag[];
}

// Junction table for blog-tag many-to-many relationship
export interface BlogTag {
  id: string;
  blogs_id: string | Blog;
  tags_id: string | Tag;
}
