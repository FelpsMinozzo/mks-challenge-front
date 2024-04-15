'use client'
import Animation from '@/components/js/animation.js'
import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function CloseButton() {

    const handleClick = () => {    
        Animation();
      };

    return (
        <div className='closeCart'>
            <button id="CloseBtn" onClick={handleClick}>
                <AiOutlineCloseCircle className='size-[1.8rem] text-white' />
            </button>
        </div>
    );
}