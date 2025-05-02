/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import api from "@/axios/api.axios";
import { IProductInput } from '@/interface/product.interface';


export const getAllProducts = async() =>{
    try{
        const response = await api.get('/product')
        return response?.data

    }catch(error:any){
        throw error?.response?.data; 
    }
}

export const getAllTendingProduct = async() =>{
    try{
        const response = await api.get('/product')
        return response?.data

    }catch(error:any){
        throw error?.response?.data; 
    }
}

export const getAllSummerSale = async() =>{
    try{
        const response = await api.get('/product')
        return response?.data

    }catch(error:any){
        throw error?.response?.data; 
    }
}

export const getProductById = async(id:string) =>{
    try{
        const response = await api.get(`/product/${id}`)
        return response?.data

    }catch(error:any){
        throw error?.response?.data; 
    }
}

export const createProduct = async (data: FormData) => {
    try {
      const response = await api.post('/product', data, {
        headers: {
        },
      });
      return response?.data;
    } catch (error: any) {
      throw error?.response?.data;
    }
  };
  

export const deleteProduct = async(id:string) =>{
    try{
        const response = await api.delete(`/product/${id}`)
        return response?.data

    }catch(error:any){
        throw error?.response?.data; 
    }
}