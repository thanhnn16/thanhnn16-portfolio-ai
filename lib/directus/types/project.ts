// Type definitions for project-related collections

export interface Project {
  id: string;
  title: string;
  description: string;
  slug: string;
  cover_image?: string | File;
  content?: string;
  published: boolean;
  publish_date: string;
  locale: string;
  author?: string | any; // User ID or User object
  tech_stack?: string[];
  github_link?: string;
  demo_link?: string;
  featured: boolean;
  category: 'AI & Automation' | 'Mobile App' | 'Web App' | string;
  role: string;
  translations?: {
    projects_id: string;
  }[];
}
