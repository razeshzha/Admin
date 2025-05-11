// src/app/category/page.tsx
'use client'

import CategoryList from '@/src/components/product/category.list'
import PageHeading from '@/src/components/ui/page-heading'
import { CategoryForm } from '@/src/components/forms/category.form';

const CategoryPage = () => {
  return (
    <div className="p-6 space-y-6">
      <PageHeading title="Category Management" />
      <CategoryForm />
      <CategoryList />
    </div>
  )
}

export default CategoryPage
