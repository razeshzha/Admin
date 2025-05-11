/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import api from "@/src/axios/api.axios";
import { IProductInput } from '@/src/interface/product.interface';

// Get all products
export const getAllProducts = async () => {
    try {
        const response = await api.get('/product');
        return response?.data;
    } catch (error: any) {
        console.error("Error fetching all products:", error);
        throw error?.response?.data || error.message;
    }
};

// Get all trending products
export const getAllTrendingProduct = async () => {
    try {
        const response = await api.get('/product');
        return response?.data;
    } catch (error: any) {
        console.error("Error fetching trending products:", error);
        throw error?.response?.data || error.message;
    }
};

// Get all summer sale products
export const getAllSummerSale = async () => {
    try {
        const response = await api.get('/product');
        return response?.data;
    } catch (error: any) {
        console.error("Error fetching summer sale products:", error);
        throw error?.response?.data || error.message;
    }
};

// Get product by ID
export const getProductById = async (id: string) => {
    try {
        const response = await api.get(`/product/${id}`);
        return response?.data;
    } catch (error: any) {
        console.error("Error fetching product by ID:", error);
        throw error?.response?.data || error.message;
    }
};

// Create a new product
export const createProduct = async (data: any) => {
    try {
        const response = await api.post('/product', data, {
            // headers: {
            //   'Content-Type': 'multipart/form-data'
            // }
          });
        return response?.data;
    } catch (error: any) {
        console.error("Error creating product:", error);
        throw error?.response?.data || error.message;
    }
};

// Delete a product by ID
export const deleteProduct = async (id: string) => {
    try {
        const response = await api.delete(`/product/${id}`);
        return response?.data;
    } catch (error: any) {
        console.error("Error deleting product:", error);
        throw error?.response?.data || error.message;
    }
}
