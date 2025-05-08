/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "../axios/api.axios";

// Get all orders
export const getAllOrders = async () => {
    try {
        const response = await api.get('/order');
        return response?.data;
    } catch (error: any) {
        console.error("Error fetching orders:", error);
        throw error?.response?.data || error.message;
    }
};

// Get order by ID
export const getOrderById = async (id: string) => {
    try {
        const response = await api.get(`/order/${id}`);
        return response?.data;
    } catch (error: any) {
        console.error("Error fetching order by ID:", error);
        throw error?.response?.data || error.message;
    }
};

// Create a new order
export const createOrder = async (data: any) => {
    try {
        const response = await api.post('/order/place', data);
        return response?.data;
    } catch (error: any) {
        console.error("Error creating order:", error);
        throw error?.response?.data || error.message;
    }
};

// Update order status
export const updateOrderStatus = async (id: string, status: string) => {
    try {
        const response = await api.put(`/order/${id}`, { status });
        return response?.data;
    } catch (error: any) {
        console.error("Error updating order status:", error);
        throw error?.response?.data || error.message;
    }
};
export const deleteOrder = async (id: string) => {
    try {
      const response = await api.delete(`/order/${id}`);
      return response?.data;
    } catch (error: any) {
      console.error("Error deleting order:", error);
      throw error?.response?.data || error.message;
    }
  };