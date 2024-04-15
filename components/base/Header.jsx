import React from "react";
import Cart from '../cart/cartButton'

export default function Header(){
  return (
    <header className="bg-MKS-blue z-2">
        <div className="flex justify-between items-center px-1 py-1 sm:px-6">
          <h1 className="text-white text-[2.5rem] p-5 font-Montserrat">
            MKS <span className="text-sm text-[1.50rem]">Sistemas</span>
          </h1>

          <div>
            <Cart />
          </div>
        </div>
    </header>
  );
};
