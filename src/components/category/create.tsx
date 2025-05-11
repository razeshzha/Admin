// pages/create-category.tsx (or similar file)
import React from 'react';
import {CategoryForm} from '@/src/components/forms/category.form'; // Ensure correct import

const CreateCategoryPage = () => {
  return (
    <div className="create-category-page">
      <h1>Create New Category</h1>
      <CategoryForm /> {/* Ensure CategoryForm is correctly imported and used */}
    </div>
  );
};

export default CreateCategoryPage; // Ensure default export if importing as default
