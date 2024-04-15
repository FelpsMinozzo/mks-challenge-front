'use client'
import Animation from '@/components/js/animation.js'
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function CartButton() {

    const handleClick = () => {    
        Animation();
      };

    return (
        <button className="rounded-md bg-white flex items-center justify-center p-4 py-[0.4rem]" id="CartBtn" onClick={handleClick}>
            <div>
                <AiOutlineShoppingCart />
            </div>
        </button>
    );
}