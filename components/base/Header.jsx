import React from "react";
import Cart from '../cart/cartButton';

export default function Header(){
  return (
    <header className="bg-MKS-blue z-1 ">
        <div className="flex justify-between items-center px-1 py-1 sm:px-6">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl p-5 font-Montserrat">
            MKS <span className="text-sm md:text-base">Sistemas</span>
          </h1>

          <div className="pr-[1.8rem]">
            <Cart />
          </div>
        </div>
    </header>
  );
};
