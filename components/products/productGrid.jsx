'use client'
import React, { useState, useEffect } from "react";
import Buy from './buyButton';
import { CartContextProvider } from "../cart/cartContext.jsx";

const ProductGrid = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC"
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <CartContextProvider>
            <div className="productGridContainer container">
                <div className="productGrid">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-6">
                        {products.map((product) => (
                            <div key={product.id} className="products">
                                <img
                                    src={product.photo}
                                    alt={product.name}
                                    className="productImg"
                                />
                                <div className="productInfo">
                                    <h1>{product.name}</h1>
                                    <div>
                                        <p className="productPrice">R$ {product.price}</p>
                                    </div>
                                </div>
                                <Buy product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </CartContextProvider>
    );
};

export default ProductGrid;
