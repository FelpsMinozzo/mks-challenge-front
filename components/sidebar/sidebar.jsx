'use client'
import toggleAnimation from '@/components/js/animation.js';
import CloseButton from '@/components/cart/closeButton';
import { useEffect } from "react";

export default function Sidebar() {
    useEffect(() => {

        const CloseCart = document.getElementById('CloseBtn');
        const OpenCart = document.getElementById('CartBtn');

        OpenCart.addEventListener('click',()=>{ toggleAnimation(0)});
        CloseCart.addEventListener('click', ()=>{ toggleAnimation(1)});

        return()=>{
            OpenCart.removeEventListener('click', ()=>{ toggleAnimation(0)});
            CloseCart.removeEventListener('click', ()=>{toggleAnimation(1)});
        }
    }, []);

    return (
        <div>
            <div className="sidebar slide1" id="slide">
                <h1 className="text-white text-[1.6rem] px-4 font-bold">Carrinho<br />de Compras</h1>
                <CloseButton id="CloseBtn" />
            </div>
        </div>
    );
}