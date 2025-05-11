/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/category-list.tsx
'use client'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllCategory } from '@/src/api/category'
import CategoryCard from './category.card'

const CategoryList = () => {
  const { data: categories, isLoading, isError } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategory,
  })

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Failed to load categories.</p>

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
  )
}

export default CategoryList
