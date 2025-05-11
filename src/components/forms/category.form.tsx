/* eslint-disable @typescript-eslint/no-explicit-any */ 
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../ui/input';
import { ICategoryInput } from '@/src/interface/category.interface';
import categoryInputSchema from '@/src/schemas/category.schema';
import { createCategory, getAllCategory } from '@/src/api/category';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import CategoryCard from '../product/category.card';

// CategoryForm.tsx
export const CategoryForm = () => {
  const methods = useForm<ICategoryInput>({
    resolver: yupResolver(categoryInputSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });

  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: createCategory,
    onSuccess: (data) => {
      toast.success(data?.message ?? 'Category created');
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      methods.reset({
        name: '',
        description: '',
      });
    },
    onError: (error) => {
      console.error('Category creation failed:', error);
      toast.error(error?.message ?? 'Operation failed');
    },
  });

  const onSubmit = (data: ICategoryInput) => {
    mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="max-w-lg mx-auto p-4">
        <div className="flex flex-col gap-4">
          <Input
            name={'name'}
            label={'Category Name'}
            placeholder={'Electronics'}
            error={methods.formState.errors?.name?.message}
          />
          <Input
            name="description"
            label="Description"
            placeholder="Enter description (optional)"
            multiline={true}
            error={methods.formState.errors?.description?.message}
          />
          <button
            disabled={isPending}
            type="submit"
            className="disabled:cursor-not-allowed mt-4 w-full bg-blue-500 text-white py-3 px-4 rounded-md tracking-wider font-bold cursor-pointer"
          >
            {isPending ? 'Creating...' : 'Submit'}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

// CategoryList.tsx
const CategoryList = () => {
  const { data: categories, isLoading, isError } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategory,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load categories.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {categories?.length > 0 ? (
        categories.map((cat: any) => (
          <CategoryCard key={cat._id} category={cat} />
        ))
      ) : (
        <p>No categories found.</p>
      )}
    </div>
  );
};
function useQuery(arg0: { queryKey: string[]; queryFn: () => Promise<any>; }): { data: any; isLoading: any; isError: any; } {
  throw new Error('Function not implemented.');
}

