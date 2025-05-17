// API functions for order-related collections
import { readItems, readItem, createItem, updateItem, deleteItem } from '@directus/sdk';
import directus from '../index';
import { Order, OrderItem } from '../types';

/**
 * Get all orders
 * @param status Optional status filter
 */
export const getOrders = async (status?: 'pending' | 'processing' | 'completed' | 'failed') => {
  try {
    const filter: any = {};
    
    if (status) {
      filter.status = { _eq: status };
    }
    
    return await directus.request(
      readItems('orders', {
        filter,
        sort: ['-created_at'],
        fields: ['*', { items: ['*'] }]
      })
    );
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
};

/**
 * Get a single order by ID
 * @param id The ID of the order
 */
export const getOrder = async (id: string) => {
  try {
    return await directus.request(
      readItem('orders', id, {
        fields: ['*', { items: ['*'] }]
      })
    );
  } catch (error) {
    console.error('Error fetching order:', error);
    return null;
  }
};

/**
 * Create a new order
 * @param orderData The order data to create
 * @param orderItems Optional array of order items to create
 */
export const createOrder = async (orderData: Partial<Order>, orderItems?: Partial<OrderItem>[]) => {
  try {
    const now = new Date().toISOString();
    
    // Create the order
    const order = await directus.request(
      createItem('orders', {
        ...orderData,
        created_at: now,
        updated_at: now
      })
    );
    
    // If order items are provided, create them
    if (orderItems && orderItems.length > 0) {
      // Create each item individually
      for (const item of orderItems) {
        await directus.request(
          createItem('order_items', {
            ...item,
            order_id: order.id
          })
        );
      }
    }
    
    // Return the order with its items
    return await getOrder(order.id);
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

/**
 * Update an existing order
 * @param id The ID of the order to update
 * @param orderData The updated order data
 */
export const updateOrder = async (id: string, orderData: Partial<Order>) => {
  try {
    return await directus.request(
      updateItem('orders', id, {
        ...orderData,
        updated_at: new Date().toISOString()
      })
    );
  } catch (error) {
    console.error('Error updating order:', error);
    throw error;
  }
};

/**
 * Update the status of an order
 * @param id The ID of the order to update
 * @param status The new status
 */
export const updateOrderStatus = async (id: string, status: 'pending' | 'processing' | 'completed' | 'failed') => {
  try {
    return await directus.request(
      updateItem('orders', id, {
        status,
        updated_at: new Date().toISOString()
      })
    );
  } catch (error) {
    console.error('Error updating order status:', error);
    throw error;
  }
};

/**
 * Add an item to an existing order
 * @param orderId The ID of the order
 * @param orderItemData The order item data to add
 */
export const addOrderItem = async (orderId: string, orderItemData: Partial<OrderItem>) => {
  try {
    const item = await directus.request(
      createItem('order_items', {
        ...orderItemData,
        order_id: orderId
      })
    );
    
    // Update the order's total amount
    const order = await getOrder(orderId);
    let totalAmount = 0;
    
    if (order && order.items) {
      totalAmount = order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      
      await updateOrder(orderId, {
        total_amount: totalAmount
      });
    }
    
    return item;
  } catch (error) {
    console.error('Error adding order item:', error);
    throw error;
  }
};

/**
 * Remove an item from an order
 * @param orderItemId The ID of the order item to remove
 * @param orderId The ID of the parent order
 */
export const removeOrderItem = async (orderItemId: string, orderId: string) => {
  try {
    await directus.request(
      deleteItem('order_items', orderItemId)
    );
    
    // Update the order's total amount
    const order = await getOrder(orderId);
    let totalAmount = 0;
    
    if (order && order.items) {
      totalAmount = order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      
      await updateOrder(orderId, {
        total_amount: totalAmount
      });
    }
    
    return true;
  } catch (error) {
    console.error('Error removing order item:', error);
    throw error;
  }
};

/**
 * Delete an order and all its items
 * @param id The ID of the order to delete
 */
export const deleteOrder = async (id: string) => {
  try {
    const order = await getOrder(id);
    
    if (order && order.items) {
      // Delete all order items first
      for (const item of order.items) {
        await directus.request(
          deleteItem('order_items', item.id)
        );
      }
    }
    
    // Then delete the order
    return await directus.request(
      deleteItem('orders', id)
    );
  } catch (error) {
    console.error('Error deleting order:', error);
    throw error;
  }
};
