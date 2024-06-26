import React, { createContext, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({children}){
    const [cartProducts, setCartProducts] = useState([]);

    function addProduct(productId){
        setCartProducts(prev => [...prev]);
    }

    console.log([cartProducts])
    return(
        <CartContext.Provider value={{cartProducts, setCartProducts, addProduct}}>
            {children}
        </CartContext.Provider>
    );
}