import { createDirectus, rest, staticToken, readItems } from '@directus/sdk';

// Create the Directus client
const directus = createDirectus(process.env.DIRECTUS_URL || 'http://localhost:8055')
  .with(staticToken(process.env.DIRECTUS_TOKEN || ''))
  .with(rest());

export default directus;

// Define collection types for TypeScript support
export interface Post {
  id: string;
  title: string;
  content: string;
  slug: string;
  cover_image?: string;
  published: boolean;
  publish_date: string;
  locale: string;
  translations?: {
    posts_id: string;
  }[];
  // Add other fields as needed
}

export interface Project {
  id: string;
  title: string;
  description: string;
  slug: string;
  cover_image?: string;
  tech_stack: string[];
  github_link?: string;
  demo_link?: string;
  featured: boolean;
  locale: string;
  translations?: {
    projects_id: string;
  }[];
  // Add other fields as needed
}

// Helper functions for data fetching
export const getBlogPosts = async (locale: string) => {
  try {
    return await directus.request(
      readItems('posts', {
        filter: {
          locale: { _eq: locale },
          published: { _eq: true }
        },
        sort: ['-publish_date'],
        fields: ['*', 'translations.posts_id']
      })
    );
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

export const getProjects = async (locale: string) => {
  try {
    return await directus.request(
      readItems('projects', {
        filter: {
          locale: { _eq: locale }
        },
        fields: ['*', 'translations.projects_id']
      })
    );
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

export const getBlogPost = async (slug: string, locale: string) => {
  try {
    const posts = await directus.request(
      readItems('posts', {
        filter: {
          slug: { _eq: slug },
          locale: { _eq: locale },
        },
        limit: 1,
        fields: ['*', 'translations.posts_id']
      })
    );
    
    return posts && posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};

export const getProject = async (slug: string, locale: string) => {
  try {
    const projects = await directus.request(
      readItems('projects', {
        filter: {
          slug: { _eq: slug },
          locale: { _eq: locale },
        },
        limit: 1,
        fields: ['*', 'translations.projects_id']
      })
    );
    
    return projects && projects.length > 0 ? projects[0] : null;
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
};