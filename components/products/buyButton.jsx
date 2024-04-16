import React, { useContext } from "react";
import { CartContext } from "../cart/cartContext.jsx";
import { BsBagPlus } from "react-icons/bs";

export default function Buy({ product }) {
    const { setCartProducts } = useContext(CartContext);

    const addToCart = () => {
        setCartProducts((prev) => [...prev, product.id]);
    };

    return (
        <div className="flex flex-col justify-between h-full w-full">
            <button
                className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-t-none rounded-b-md mt-auto"
                onClick={addToCart}
            >
                <BsBagPlus />
                <h1 className="ml-2">COMPRAR</h1>
            </button>
        </div>
    );
}
