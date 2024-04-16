'use client'
import Animation from '@/components/js/animation.js'
import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartContext } from './cartContext';

export default function CartButton() {

    const handleClick = () => {    
        Animation();
    };
    
    const { cartProducts } = useContext(CartContext);

    const cartProductsLen = cartProducts ? cartProducts.length : 0;
    
    return (
    <button id="CartBtn" onClick={handleClick}>
        <div className="rounded-md bg-white flex items-center justify-center p-4 py-[0.4rem]">
            <div>
                 <AiOutlineShoppingCart />
            </div>
            &nbsp;
            <p>{cartProductsLen}</p>
        </div>
    </button>
    );
}
