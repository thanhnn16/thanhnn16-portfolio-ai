// Main type definitions for Directus schema
import { Blog, BlogTag } from "@/lib/directus/types/blog";
import { Tag } from "@/lib/directus/types/tag";
import { Newsletter } from "@/lib/directus/types/newsletter";
import {
  Subscriber,
  NewsletterSubscriber,
} from "@/lib/directus/types/newsletter";
import { Comment } from "@/lib/directus/types/comment";
import { Tracking } from "@/lib/directus/types/tracking";
import { Workflow } from "@/lib/directus/types/workflow";
import { Order } from "@/lib/directus/types/order";
import { OrderItem } from "@/lib/directus/types/order";
import { Transaction } from "@/lib/directus/types/transaction";
import { Project } from "@/lib/directus/types/project";

export interface DirectusSchema {
  // Original collections (keeping for backwards compatibility)
  posts: Blog[];
  projects: Project[];

  // New collection structure
  blogs: Blog[];
  tags: Tag[];
  blogs_tags: BlogTag[];
  newsletters: Newsletter[];
  subscribers: Subscriber[];
  newsletters_subscribers: NewsletterSubscriber[];
  comments: Comment[];
  tracking: Tracking[];
  workflows: Workflow[];
  orders: Order[];
  order_items: OrderItem[];
  transactions: Transaction[];

  // System collections
  directus_files: File[];
  directus_users: any[];
  directus_folders: any[];
}

// Re-export all type definitions
export * from "@/lib/directus/types/blog";
export * from "@/lib/directus/types/tag";
export * from "@/lib/directus/types/newsletter";
export * from "@/lib/directus/types/comment";
export * from "@/lib/directus/types/tracking";
export * from "@/lib/directus/types/workflow";
export * from "@/lib/directus/types/order";
export * from "@/lib/directus/types/transaction";
export * from "@/lib/directus/types/project";
