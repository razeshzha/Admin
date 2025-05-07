/* eslint-disable @typescript-eslint/no-explicit-any */
// components/admin-product-list.tsx
import React from 'react'
import ProductCard from './product.list'

interface IProp {
  title: string
  isLoading: boolean
  products: any[]
}

const ProductList: React.FC<IProp> = ({
  title = 'All Products',
  products = [],
  isLoading = false,
}) => {
  return (
    <div className="w-full px-4 py-2">
      <h1 className="font-bold text-2xl tracking-wide mb-4">{title}</h1>

      {isLoading && <p>Loading...</p>}

      {!isLoading && Array.isArray(products) && products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} products={product} title={''} isLoading={false} />
          ))}
        </div>
      ) : null}

      {!isLoading && Array.isArray(products) && products.length === 0 && (
        <p className="text-gray-500">No products found.</p>
      )}
    </div>
  )
}

export default ProductList
