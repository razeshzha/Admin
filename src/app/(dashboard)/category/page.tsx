// src/app/category/page.tsx

import CategoryList from '@/src/components/category/create';
import PageHeading from '@/src/components/ui/page-heading';

const CategoryPage = () => {
  return (
    <div className="p-6 space-y-6">
      <PageHeading title="Category Management" />
      <CategoryList />
    </div>
  );
};

export default CategoryPage;
