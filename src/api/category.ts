/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@/src/axios/api.axios";
import { ICategoryInput } from '@/src/interface/category.interface';

export const getAllCategory = async() =>{
    try{
        const response = await api.get('/category')
        return response?.data

    }catch(error:any){
        throw error?.response?.data; 
    }
}


export const deleteCategory = async(id:string) =>{
    try{
        const response = await api.delete(`/category/${id}`)
        return response?.data

    }catch(error:any){
        throw error?.response?.data; 
    }
}

export const createCategory = async(data:ICategoryInput) =>{
    try{
        const response = await api.post(`/category`,data)
        return response?.data

    }catch(error:any){
        throw error?.response?.data; 
    }
}