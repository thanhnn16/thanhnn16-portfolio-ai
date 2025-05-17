// Type definitions for comment-related collections
import { Blog } from './blog';

export interface Comment {
  id: string;
  content: string;
  created_at: string;
  author_name: string;
  author_email: string;
  approved: boolean;
  blog_id?: string | Blog;
  parent_comment_id?: string | Comment;
  replies?: Comment[];
}
