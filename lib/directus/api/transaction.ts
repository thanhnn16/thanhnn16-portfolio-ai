// API functions for transaction-related collections
import { readItems, readItem, createItem, updateItem } from '@directus/sdk';
import directus from '../index';
import { Transaction } from '../types';
import { updateOrderStatus } from './order';

/**
 * Get all transactions
 * @param status Optional status filter
 */
export const getTransactions = async (status?: 'pending' | 'completed' | 'failed') => {
  try {
    const filter: any = {};
    
    if (status) {
      filter.status = { _eq: status };
    }
    
    return await directus.request(
      readItems('transactions', {
        filter,
        sort: ['-created_at']
      })
    );
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return [];
  }
};

/**
 * Get transactions for a specific order
 * @param orderId The ID of the order
 */
export const getOrderTransactions = async (orderId: string) => {
  try {
    return await directus.request(
      readItems('transactions', {
        filter: {
          order_id: { _eq: orderId }
        },
        sort: ['-created_at']
      })
    );
  } catch (error) {
    console.error('Error fetching order transactions:', error);
    return [];
  }
};

/**
 * Get a single transaction by ID
 * @param id The ID of the transaction
 */
export const getTransaction = async (id: string) => {
  try {
    return await directus.request(
      readItem('transactions', id)
    );
  } catch (error) {
    console.error('Error fetching transaction:', error);
    return null;
  }
};

/**
 * Create a new transaction
 * @param transactionData The transaction data to create
 * @param updateOrder Whether to update the related order status
 */
export const createTransaction = async (transactionData: Partial<Transaction>, updateOrder = true) => {
  try {
    const transaction = await directus.request(
      createItem('transactions', {
        ...transactionData,
        created_at: new Date().toISOString()
      })
    );
    
    // Update the order status based on the transaction status
    if (updateOrder && transaction.order_id && transaction.status) {
      let orderStatus: 'pending' | 'processing' | 'completed' | 'failed';
      
      switch (transaction.status) {
        case 'completed':
          orderStatus = 'completed';
          break;
        case 'failed':
          orderStatus = 'failed';
          break;
        default:
          orderStatus = 'processing';
          break;
      }
      
      await updateOrderStatus(transaction.order_id as string, orderStatus);
    }
    
    return transaction;
  } catch (error) {
    console.error('Error creating transaction:', error);
    throw error;
  }
};

/**
 * Update a transaction status
 * @param id The ID of the transaction to update
 * @param status The new status
 * @param updateOrder Whether to update the related order status
 */
export const updateTransactionStatus = async (
  id: string, 
  status: 'pending' | 'completed' | 'failed',
  updateOrder = true
) => {
  try {
    const transaction = await directus.request(
      updateItem('transactions', id, {
        status
      })
    );
    
    // Update the order status based on the transaction status
    if (updateOrder && transaction.order_id) {
      let orderStatus: 'pending' | 'processing' | 'completed' | 'failed';
      
      switch (status) {
        case 'completed':
          orderStatus = 'completed';
          break;
        case 'failed':
          orderStatus = 'failed';
          break;
        default:
          orderStatus = 'processing';
          break;
      }
      
      await updateOrderStatus(transaction.order_id as string, orderStatus);
    }
    
    return transaction;
  } catch (error) {
    console.error('Error updating transaction status:', error);
    throw error;
  }
};
