/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "../axios/api.axios";

// Get all users
export const getAllUsers = async () => {
    try {
        const response = await api.get('/user');
        return response?.data;
    } catch (error: any) {
        console.error("Error fetching all users:", error);
        throw error?.response?.data || error.message;
    }
};

// Get user by ID
export const getUserById = async (id: string) => {
    try {
        const response = await api.get(`/user/${id}`);
        return response?.data;
    } catch (error: any) {
        console.error("Error fetching user by ID:", error);
        throw error?.response?.data || error.message;
    }
};

// Create a new user
export const createUser = async (data: any) => {
    try {
        const response = await api.post('/user', data);
        return response?.data;
    } catch (error: any) {
        console.error("Error creating user:", error);
        throw error?.response?.data || error.message;
    }
};

// Delete user by ID
export const deleteUser = async (id: string) => {
    try {
        const response = await api.delete(`/user/${id}`);
        return response?.data;
    } catch (error: any) {
        console.error("Error deleting user:", error);
        throw error?.response?.data || error.message;
    }
};
