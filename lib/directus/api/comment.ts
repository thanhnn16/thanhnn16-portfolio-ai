// API functions for comment-related collections
import { readItems, readItem, createItem, updateItem, deleteItem } from '@directus/sdk';
import directus from '../index';
import { Comment } from '../types';

/**
 * Get comments for a specific blog post
 * @param blogId The ID of the blog post
 * @param approvedOnly Only return approved comments
 */
export const getBlogComments = async (blogId: string, approvedOnly = true) => {
  try {
    const filter: any = {
      blog_id: { _eq: blogId },
      parent_comment_id: { _null: true }  // Only get top-level comments
    };
    
    if (approvedOnly) {
      filter.approved = { _eq: true };
    }
      return await directus.request(
      readItems('comments', {
        filter,
        sort: ['created_at'],
        fields: ['*', { replies: ['*'] }]
      })
    );
  } catch (error) {
    console.error('Error fetching blog comments:', error);
    return [];
  }
};

/**
 * Get a single comment by ID
 * @param id The ID of the comment
 */
export const getComment = async (id: string) => {
  try {    return await directus.request(
      readItem('comments', id, {
        fields: ['*', { replies: ['*'] }]
      })
    );
  } catch (error) {
    console.error('Error fetching comment:', error);
    return null;
  }
};

/**
 * Create a new comment
 * @param commentData The comment data to create
 */
export const createComment = async (commentData: Partial<Comment>) => {
  try {
    return await directus.request(
      createItem('comments', {
        ...commentData,
        created_at: new Date().toISOString(),
        approved: false // Comments require approval by default
      })
    );
  } catch (error) {
    console.error('Error creating comment:', error);
    throw error;
  }
};

/**
 * Approve a comment
 * @param id The ID of the comment to approve
 */
export const approveComment = async (id: string) => {
  try {
    return await directus.request(
      updateItem('comments', id, {
        approved: true
      })
    );
  } catch (error) {
    console.error('Error approving comment:', error);
    throw error;
  }
};

/**
 * Delete a comment
 * @param id The ID of the comment to delete
 */
export const deleteComment = async (id: string) => {
  try {
    return await directus.request(
      deleteItem('comments', id)
    );
  } catch (error) {
    console.error('Error deleting comment:', error);
    throw error;
  }
};
