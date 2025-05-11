/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
// components/category.card.tsx
import React from 'react'

interface ICategoryCardProps {
  category: {
    [x: string]: any
    name: string
    description?: string
    imageUrl?: string
  }
}

const CategoryCard: React.FC<ICategoryCardProps> = ({ category }) => {
  return (
    <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
      {category.imageUrl && (
        <img
          src={`https://server-ecommerce-cm90.onrender.com/${category.coverImage}`}
          alt={category.name}
          className="w-full h-40 object-cover rounded-md mb-2"
        />
      )}
      <h2 className="text-lg font-semibold">{category.name}</h2>
      {category.description && (
        <p className="text-sm text-gray-600 mt-1">{category.description}</p>
      )}
    </div>
  )
}

export default CategoryCard
