// API functions for tag-related collections
import { readItems, readItem, createItem, updateItem, deleteItem } from '@directus/sdk';
import directus from '../index';
import { Tag } from '../types';

/**
 * Get all tags
 */
export const getTags = async () => {
  try {
    return await directus.request(
      readItems('tags', {
        sort: ['name']
      })
    );
  } catch (error) {
    console.error('Error fetching tags:', error);
    return [];
  }
};

/**
 * Get a single tag by ID
 * @param id The ID of the tag
 */
export const getTag = async (id: string) => {
  try {
    return await directus.request(
      readItem('tags', id)
    );
  } catch (error) {
    console.error('Error fetching tag:', error);
    return null;
  }
};

/**
 * Get a single tag by slug
 * @param slug The slug of the tag
 */
export const getTagBySlug = async (slug: string) => {
  try {
    const tags = await directus.request(
      readItems('tags', {
        filter: {
          slug: { _eq: slug }
        },
        limit: 1
      })
    );
    
    return tags && tags.length > 0 ? tags[0] : null;
  } catch (error) {
    console.error('Error fetching tag by slug:', error);
    return null;
  }
};

/**
 * Create a new tag
 * @param tagData The tag data to create
 */
export const createTag = async (tagData: Partial<Tag>) => {
  try {
    return await directus.request(
      createItem('tags', tagData)
    );
  } catch (error) {
    console.error('Error creating tag:', error);
    throw error;
  }
};

/**
 * Update an existing tag
 * @param id The ID of the tag to update
 * @param tagData The updated tag data
 */
export const updateTag = async (id: string, tagData: Partial<Tag>) => {
  try {
    return await directus.request(
      updateItem('tags', id, tagData)
    );
  } catch (error) {
    console.error('Error updating tag:', error);
    throw error;
  }
};

/**
 * Delete a tag
 * @param id The ID of the tag to delete
 */
export const deleteTag = async (id: string) => {
  try {
    return await directus.request(
      deleteItem('tags', id)
    );
  } catch (error) {
    console.error('Error deleting tag:', error);
    throw error;
  }
};
