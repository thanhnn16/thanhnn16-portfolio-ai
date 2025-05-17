// API functions for tracking-related collections
import { readItems, createItem, deleteItem } from '@directus/sdk';
import directus from '../index';
import { Tracking } from '../types';

/**
 * Track a page visit
 * @param trackingData The tracking data to record
 */
export const trackPageVisit = async (trackingData: Partial<Tracking>) => {
  try {
    return await directus.request(
      createItem('tracking', {
        ...trackingData,
        created_at: new Date().toISOString()
      })
    );
  } catch (error) {
    console.error('Error tracking page visit:', error);
    // Fail silently for tracking
    return null;
  }
};

/**
 * Get tracking data with optional date range
 * @param startDate Start date for the range
 * @param endDate End date for the range
 */
export const getTrackingData = async (startDate?: string, endDate?: string) => {
  try {
    // Using any type to handle filter operators
    const filter: any = {};
    
    if (startDate) {
      filter.created_at = { '_gte': startDate };
    }
    
    if (endDate) {
      if (!filter.created_at) filter.created_at = {};
      filter.created_at['_lte'] = endDate;
    }
    
    return await directus.request(
      readItems('tracking', {
        filter,
        sort: ['-created_at']
      })
    );
  } catch (error) {
    console.error('Error fetching tracking data:', error);
    return [];
  }
};

/**
 * Get page visit count for a specific URL
 * @param pageUrl The URL to count visits for
 */
export const getPageVisitCount = async (pageUrl: string) => {
  try {
    const response = await directus.request(
      readItems('tracking', {
        filter: {
          page_url: { '_eq': pageUrl } as any
        },
        aggregate: {
          count: '*'
        }
      })
    );
    
    return response.length;
  } catch (error) {
    console.error('Error counting page visits:', error);
    return 0;
  }
};

/**
 * Delete tracking data older than a certain date
 * @param olderThan Date before which to delete data
 */
export const cleanupTrackingData = async (olderThan: string) => {
  try {
    // For bulk delete operations we need to use a different approach
    // First get all IDs that match the filter with type assertion
    const items = await directus.request(
      readItems('tracking', {
        filter: {
          // Using type assertion to bypass strict typing for filter operators
          created_at: { '_lt': olderThan } as any
        },
        fields: ['id']
      })
    );
    
    // Then delete them all one by one (deleteItem only accepts a single ID)
    let deleteCount = 0;
    if (items.length > 0) {
      for (const item of items) {
        await directus.request(
          deleteItem('tracking', item.id)
        );
        deleteCount++;
      }
    }
    
    return { deleted: deleteCount };
  } catch (error) {
    console.error('Error cleaning up tracking data:', error);
    throw error;
  }
};
