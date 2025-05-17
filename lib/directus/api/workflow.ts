// API functions for workflow-related collections
import { readItems, readItem, createItem, updateItem, deleteItem } from '@directus/sdk';
import directus from '../index';
import { Workflow } from '../types';

/**
 * Get all published workflows
 */
export const getWorkflows = async (publishedOnly = true) => {
  try {
    const filter: any = {};
    
    if (publishedOnly) {
      filter.published = { _eq: true };
    }
    
    return await directus.request(
      readItems('workflows', {
        filter,
        sort: ['name']
      })
    );
  } catch (error) {
    console.error('Error fetching workflows:', error);
    return [];
  }
};

/**
 * Get a single workflow by ID
 * @param id The ID of the workflow
 */
export const getWorkflow = async (id: string) => {
  try {
    return await directus.request(
      readItem('workflows', id)
    );
  } catch (error) {
    console.error('Error fetching workflow:', error);
    return null;
  }
};

/**
 * Create a new workflow
 * @param workflowData The workflow data to create
 */
export const createWorkflow = async (workflowData: Partial<Workflow>) => {
  try {
    const now = new Date().toISOString();
    
    return await directus.request(
      createItem('workflows', {
        ...workflowData,
        created_at: now,
        updated_at: now
      })
    );
  } catch (error) {
    console.error('Error creating workflow:', error);
    throw error;
  }
};

/**
 * Update an existing workflow
 * @param id The ID of the workflow to update
 * @param workflowData The updated workflow data
 */
export const updateWorkflow = async (id: string, workflowData: Partial<Workflow>) => {
  try {
    return await directus.request(
      updateItem('workflows', id, {
        ...workflowData,
        updated_at: new Date().toISOString()
      })
    );
  } catch (error) {
    console.error('Error updating workflow:', error);
    throw error;
  }
};

/**
 * Delete a workflow
 * @param id The ID of the workflow to delete
 */
export const deleteWorkflow = async (id: string) => {
  try {
    return await directus.request(
      deleteItem('workflows', id)
    );
  } catch (error) {
    console.error('Error deleting workflow:', error);
    throw error;
  }
};
