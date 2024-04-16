import React, { createContext, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({children}){
    const [cartProducts, setCartProducts] = useState([]);

    console.log([cartProducts, setCartProducts])
    return(
        <CartContext.Provider value={{cartProducts, setCartProducts}}>
            {children}
        </CartContext.Provider>
    );
}