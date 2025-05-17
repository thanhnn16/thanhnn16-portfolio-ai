// API functions for blog-related collections
import { readItems, readItem, createItem, updateItem, deleteItem } from '@directus/sdk';
import directus from '../index';
import { Blog } from '../types';

/**
 * Get all published blog posts with optional locale filter
 * @param locale The locale to filter by (e.g., 'en', 'vi')
 * @param limit Maximum number of posts to return
 * @param page Page number for pagination
 */
export const getBlogPosts = async (locale?: string, limit?: number, page?: number) => {
  try {
    const filter: any = { published: { _eq: true } };
    
    if (locale) {
      filter.locale = { _eq: locale };
    }
    
    return await directus.request(
      readItems('blogs', {
        filter,
        sort: ['-publish_date'],
        fields: ['*', { tags: ['*'] }, { translations: ['posts_id'] }],
        limit,
        page
      })
    );
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

/**
 * Get a single blog post by slug
 * @param slug The slug of the blog post
 * @param locale The locale to filter by
 */
export const getBlogPost = async (slug: string, locale?: string) => {
  try {
    const filter: any = { slug: { _eq: slug } };
    
    if (locale) {
      filter.locale = { _eq: locale };
    }
    
    const posts = await directus.request(
      readItems('blogs', {
        filter,
        limit: 1,
        fields: ['*', { tags: ['*'] }, { translations: ['posts_id'] }]
      })
    );
    
    return posts && posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};

/**
 * Create a new blog post
 * @param blogData The blog post data to create
 */
export const createBlogPost = async (blogData: Partial<Blog>) => {
  try {
    return await directus.request(
      createItem('blogs', blogData)
    );
  } catch (error) {
    console.error('Error creating blog post:', error);
    throw error;
  }
};

/**
 * Update an existing blog post
 * @param id The ID of the blog post to update
 * @param blogData The updated blog post data
 */
export const updateBlogPost = async (id: string, blogData: Partial<Blog>) => {
  try {
    return await directus.request(
      updateItem('blogs', id, blogData)
    );
  } catch (error) {
    console.error('Error updating blog post:', error);
    throw error;
  }
};

/**
 * Delete a blog post
 * @param id The ID of the blog post to delete
 */
export const deleteBlogPost = async (id: string) => {
  try {
    return await directus.request(
      deleteItem('blogs', id)
    );
  } catch (error) {
    console.error('Error deleting blog post:', error);
    throw error;
  }
};

/**
 * Get blog posts by tag
 * @param tagId The ID of the tag to filter by
 * @param locale The locale to filter by
 */
export const getBlogPostsByTag = async (tagId: string, locale?: string) => {
  try {
    const filter: any = {
      tags: {
        tags_id: {
          id: { _eq: tagId }
        }
      },
      published: { _eq: true }
    };
    
    if (locale) {
      filter.locale = { _eq: locale };
    }
    
    return await directus.request(
      readItems('blogs', {
        filter,
        sort: ['-publish_date'],
        fields: ['*', { tags: ['*'] }, { translations: ['posts_id'] }]
      })
    );
  } catch (error) {
    console.error('Error fetching blog posts by tag:', error);
    return [];
  }
};
