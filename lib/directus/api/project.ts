// API functions for project-related collections
import { readItems, readItem, createItem, updateItem, deleteItem } from '@directus/sdk';
import directus from '../index';
import { Project } from '../types';

/**
 * Get all published projects with optional locale filter
 * @param locale The locale to filter by (e.g., 'en', 'vi')
 * @param limit Maximum number of projects to return
 * @param page Page number for pagination
 */
export const getProjects = async (locale?: string, limit?: number, page?: number) => {
  try {
    const filter: any = { published: { _eq: true } };
    
    if (locale) {
      filter.locale = { _eq: locale };
    }
    
    return await directus.request(
      readItems('projects', {
        filter,
        sort: ['-publish_date'],
        fields: ['*', { translations: ['projects_id'] }],
        limit,
        page
      })
    );
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

/**
 * Get all featured projects with optional locale filter
 * @param locale The locale to filter by (e.g., 'en', 'vi')
 * @param limit Maximum number of projects to return
 */
export const getFeaturedProjects = async (locale?: string, limit?: number) => {
  try {
    const filter: any = { 
      published: { _eq: true },
      featured: { _eq: true }
    };
    
    if (locale) {
      filter.locale = { _eq: locale };
    }
    
    return await directus.request(
      readItems('projects', {
        filter,
        sort: ['-publish_date'],
        fields: ['*', { translations: ['projects_id'] }],
        limit
      })
    );
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    return [];
  }
};

/**
 * Get projects by category with optional locale filter
 * @param category The category to filter by
 * @param locale The locale to filter by (e.g., 'en', 'vi')
 * @param limit Maximum number of projects to return
 */
export const getProjectsByCategory = async (category: string, locale?: string, limit?: number) => {
  try {
    const filter: any = { 
      published: { _eq: true },
      category: { _eq: category }
    };
    
    if (locale) {
      filter.locale = { _eq: locale };
    }
      return await directus.request(
      readItems('projects', {
        filter,
        sort: ['-publish_date'],
        fields: ['*', { translations: ['projects_id'] }],
        limit
      })
    );
  } catch (error) {
    console.error(`Error fetching projects for category ${category}:`, error);
    return [];
  }
};

/**
 * Get a single project by slug
 * @param slug The slug of the project
 * @param locale The locale to filter by
 */
export const getProject = async (slug: string, locale?: string) => {
  try {
    const filter: any = { slug: { _eq: slug } };
    
    if (locale) {
      filter.locale = { _eq: locale };
    }
      const projects = await directus.request(
      readItems('projects', {
        filter,
        limit: 1,
        fields: ['*', { translations: ['projects_id'] }],
      })
    );
    
    return projects.length > 0 ? projects[0] : null;
  } catch (error) {
    console.error(`Error fetching project ${slug}:`, error);
    return null;
  }
};

/**
 * Get a single project by ID
 * @param id The ID of the project
 */
export const getProjectById = async (id: string) => {
  try {    return await directus.request(
      readItem('projects', id, {
        fields: ['*', { translations: ['projects_id'] }],
      })
    );
  } catch (error) {
    console.error(`Error fetching project with ID ${id}:`, error);
    return null;
  }
};

/**
 * Create a new project
 * @param projectData The project data to create
 */
export const createProject = async (projectData: Partial<any>) => {
  try {
    return await directus.request(
      createItem('projects', projectData)
    );
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
};

/**
 * Update an existing project
 * @param id The ID of the project to update
 * @param projectData The updated project data
 */
export const updateProject = async (id: string, projectData: Partial<any>) => {
  try {
    return await directus.request(
      updateItem('projects', id, projectData)
    );
  } catch (error) {
    console.error(`Error updating project ${id}:`, error);
    throw error;
  }
};

/**
 * Delete a project
 * @param id The ID of the project to delete
 */
export const deleteProject = async (id: string) => {
  try {
    return await directus.request(
      deleteItem('projects', id)
    );
  } catch (error) {
    console.error(`Error deleting project ${id}:`, error);
    throw error;
  }
};
