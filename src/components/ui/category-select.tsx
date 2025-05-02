/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React from 'react';
import SelectInput from './select-input';
import { useController, useFormContext } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { getAllCategory } from '@/api/category';

interface Option {
  label: string;
  value: string;
}

const CategorySelect: React.FC = () => {
  const { control } = useFormContext();
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ name: 'category', control });

  const { data, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategory,
  });

//   if(isLoading){
//     return <p>Loading</p>
//   }

//   console.log('cat select', data?.data)

  const options: Option[] =
    data?.data?.data?.map((cat: { _id: string; name: string }) => ({
      value: cat._id,
      label: cat.name,
    })) || [];

  return (
    <div className="mb-4">
      {/* <label className="block mb-2 font-medium">Category</label> */}
      <SelectInput
        options={options}
        placeholder="Select a category"
        name='category'
        label='Category'
       
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default CategorySelect;
