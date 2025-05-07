/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

type Product = {
  _id: string;
  coverImage: string;
  name: string;
  description: string;
  price: number;
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get('https://server-ecommerce-cm90.onrender.com/api/product')
      .then((response) => {
        setProducts(response.data.data); // Assuming data is in response.data.data
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error('Network error:', err);

        if (err.response) {
          // The request was made and the server responded with a status code
          console.error('Response error:', err.response.data);
          setError(`Error: ${err.response.data.message}`);
        } else if (err.request) {
          // The request was made but no response was received
          console.error('No response received:', err.request);
          setError('No response from the server');
        } else {
          // Something else went wrong
          console.error('Error message:', err.message);
          setError('Something went wrong');
        }
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="products-container">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product._id} className="product-card">
            <img
              src={`https://server-ecommerce-cm90.onrender.com/${product.coverImage}`}
              alt={product.name}
              width="200"
              height="200"
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Products;
