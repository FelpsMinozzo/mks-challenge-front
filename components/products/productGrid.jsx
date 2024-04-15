'use client'
import React, { useState, useEffect } from 'react';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center bg-gray-100 h-prod overflow-scroll">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 z-1">
        {products.map(product => (
          <div key={product.id} className="products">
            <img src={product.photo} alt={product.name} className="productImg"/>
            <div className="productInfo">
              <h1>{product.name}</h1>
              <div className='productPrice'>
                <p>R$ {product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
