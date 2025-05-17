// API functions for newsletter-related collections
import { readItems, readItem, createItem, updateItem, deleteItem } from '@directus/sdk';
import directus from '../index';
import { Newsletter, Subscriber } from '../types';

/**
 * Get all newsletters
 * @param status Optional status filter ('draft', 'scheduled', 'sent')
 */
export const getNewsletters = async (status?: 'draft' | 'scheduled' | 'sent') => {
  try {
    const filter: any = {};
    
    if (status) {
      filter.status = { _eq: status };
    }
    
    return await directus.request(
      readItems('newsletters', {
        filter,
        sort: ['-send_date'],
        fields: ['*', { recipients: ['*'] }]
      })
    );
  } catch (error) {
    console.error('Error fetching newsletters:', error);
    return [];
  }
};

/**
 * Get a single newsletter by ID
 * @param id The ID of the newsletter
 */
export const getNewsletter = async (id: string) => {
  try {
    return await directus.request(
      readItem('newsletters', id, {
        fields: ['*', { recipients: ['*'] }]
      })
    );
  } catch (error) {
    console.error('Error fetching newsletter:', error);
    return null;
  }
};

/**
 * Create a new newsletter
 * @param newsletterData The newsletter data to create
 */
export const createNewsletter = async (newsletterData: Partial<Newsletter>) => {
  try {
    return await directus.request(
      createItem('newsletters', newsletterData)
    );
  } catch (error) {
    console.error('Error creating newsletter:', error);
    throw error;
  }
};

/**
 * Update an existing newsletter
 * @param id The ID of the newsletter to update
 * @param newsletterData The updated newsletter data
 */
export const updateNewsletter = async (id: string, newsletterData: Partial<Newsletter>) => {
  try {
    return await directus.request(
      updateItem('newsletters', id, newsletterData)
    );
  } catch (error) {
    console.error('Error updating newsletter:', error);
    throw error;
  }
};

/**
 * Delete a newsletter
 * @param id The ID of the newsletter to delete
 */
export const deleteNewsletter = async (id: string) => {
  try {
    return await directus.request(
      deleteItem('newsletters', id)
    );
  } catch (error) {
    console.error('Error deleting newsletter:', error);
    throw error;
  }
};

/**
 * Get all subscribers
 * @param subscribedOnly Only return active subscribers
 */
export const getSubscribers = async (subscribedOnly = true) => {
  try {
    const filter: any = {};
    
    if (subscribedOnly) {
      filter.subscribed = { _eq: true };
    }
    
    return await directus.request(
      readItems('subscribers', {
        filter,
        sort: ['-subscription_date']
      })
    );
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return [];
  }
};

/**
 * Get a single subscriber by ID
 * @param id The ID of the subscriber
 */
export const getSubscriber = async (id: string) => {
  try {
    return await directus.request(
      readItem('subscribers', id)
    );
  } catch (error) {
    console.error('Error fetching subscriber:', error);
    return null;
  }
};

/**
 * Get a subscriber by email
 * @param email The email address to search for
 */
export const getSubscriberByEmail = async (email: string) => {
  try {
    const subscribers = await directus.request(
      readItems('subscribers', {
        filter: {
          email: { _eq: email }
        },
        limit: 1
      })
    );
    
    return subscribers && subscribers.length > 0 ? subscribers[0] : null;
  } catch (error) {
    console.error('Error fetching subscriber by email:', error);
    return null;
  }
};

/**
 * Add a new subscriber
 * @param subscriberData The subscriber data to create
 */
export const addSubscriber = async (subscriberData: Partial<Subscriber>) => {
  try {
    const existingSubscriber = await getSubscriberByEmail(subscriberData.email as string);
    
    if (existingSubscriber) {
      // Update existing subscriber if already exists
      return await directus.request(
        updateItem('subscribers', existingSubscriber.id, {
          ...subscriberData,
          subscribed: true
        })
      );
    }
    
    // Create new subscriber
    return await directus.request(
      createItem('subscribers', {
        ...subscriberData,
        subscription_date: new Date().toISOString(),
        subscribed: true
      })
    );
  } catch (error) {
    console.error('Error adding subscriber:', error);
    throw error;
  }
};

/**
 * Unsubscribe a subscriber
 * @param email The email address to unsubscribe
 */
export const unsubscribeByEmail = async (email: string) => {
  try {
    const subscriber = await getSubscriberByEmail(email);
    
    if (subscriber) {
      return await directus.request(
        updateItem('subscribers', subscriber.id, {
          subscribed: false
        })
      );
    }
    
    return null;
  } catch (error) {
    console.error('Error unsubscribing:', error);
    throw error;
  }
};
