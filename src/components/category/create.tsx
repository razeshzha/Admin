// src/app/category/create/page.tsx

import CategoryForm from '@/src/components/forms/category.form';
import PageHeading from '@/src/components/ui/page-heading';

const CreateCategoryPage = () => {
  return (
    <div className="p-6">
      <PageHeading title="Create New Category" />
      <CategoryForm />
    </div>
  );
};

export default CreateCategoryPage;
